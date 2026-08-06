import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LLMS_PATH = path.resolve(__dirname, '../public/llms.txt');
const LLMS_FULL_PATH = path.resolve(__dirname, '../public/llms-full.txt');
const ROBOTS_PATH = path.resolve(__dirname, '../public/robots.txt');
const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');

const runValidation = async () => {
  console.log('[Validation] Starting llms.txt and llms-full.txt verification...');

  // 1. Verify files exist
  if (!fs.existsSync(LLMS_PATH)) {
    console.error('FAIL: llms.txt does not exist.');
    process.exit(1);
  }
  if (!fs.existsSync(LLMS_FULL_PATH)) {
    console.error('FAIL: llms-full.txt does not exist.');
    process.exit(1);
  }

  // 2. Read contents
  const llms = fs.readFileSync(LLMS_PATH, 'utf-8');
  const llmsFull = fs.readFileSync(LLMS_FULL_PATH, 'utf-8');

  // 3. H1 validation
  if (!llms.startsWith('# Kutup Grup')) {
    console.error('FAIL: llms.txt must start with H1 heading "# Kutup Grup".');
    process.exit(1);
  }
  if (!llmsFull.startsWith('# Kutup Grup - Detaylı Hizmetler ve Teknik Kapsam')) {
    console.error('FAIL: llms-full.txt must start with correct H1 heading.');
    process.exit(1);
  }

  // 4. Verify absolute HTTPS canonical URLs and compare with sitemap
  const getUrls = (content) => {
    const regex = /https:\/\/kutupgrup\.com[^\s)\]]+/g;
    const matches = content.match(regex) || [];
    return matches.map(u => u.replace(/[.,;:]$/, '').trim());
  };

  const llmsUrls = getUrls(llms).map(u => u.replace(/\/$/, ''));
  const llmsFullUrls = getUrls(llmsFull).map(u => u.replace(/\/$/, ''));

  // Load manifest & sitemap urls
  let manifest = [];
  try {
    const module = await import(ROUTE_MANIFEST_PATH);
    manifest = module.ROUTE_MANIFEST || [];
  } catch (error) {
    console.error('Error importing route manifest for validation:', error);
    process.exit(1);
  }

  const sitemapUrls = manifest.filter(r => r.indexable && r.includeInSitemap).map(r => `https://kutupgrup.com${r.path === '/' ? '' : r.path}`.replace(/\/$/, ''));
  const expectedLlmUrls = manifest.filter(r => r.includeInLlms).map(r => `https://kutupgrup.com${r.path === '/' ? '' : r.path}`.replace(/\/$/, ''));

  console.log('\n============================= LLMS COMPARISON REPORT =============================');
  console.log(`Sitemap URL sayısı:                 ${sitemapUrls.length}`);
  console.log(`llms.txt URL sayısı:                ${llmsUrls.length}`);
  
  const bothUrls = sitemapUrls.filter(u => llmsUrls.includes(u));
  console.log(`İkisinde de bulunan URL:            ${bothUrls.length}`);
  
  const onlySitemap = sitemapUrls.filter(u => !llmsUrls.includes(u));
  console.log(`Yalnızca sitemap’te bulunan URL:     ${onlySitemap.length}`);
  
  const onlyLlms = llmsUrls.filter(u => !sitemapUrls.includes(u));
  console.log(`Yalnızca llms.txt içinde bulunan URL: ${onlyLlms.length}`);

  const noindexLlms = manifest.filter(r => !r.indexable && r.includeInLlms).map(r => `https://kutupgrup.com${r.path}`);
  console.log(`Noindex olup llms içinde bulunan URL: ${noindexLlms.length}`);

  const redirectLlms = llmsUrls.filter(u => u.includes('deflekt%C3%B6r') || u.includes('deflektör'));
  console.log(`Redirect olup llms içinde bulunan URL: ${redirectLlms.length}`);
  console.log('==============================================================================\n');

  // Strict compliance checks
  if (llmsUrls.length !== expectedLlmUrls.length) {
    console.error(`FAIL: llms.txt URL count mismatch. Expected: ${expectedLlmUrls.length}, Found: ${llmsUrls.length}`);
    process.exit(1);
  }

  // Check homepage and services main page are present
  if (!llmsUrls.includes('https://kutupgrup.com')) {
    console.error('FAIL: Homepage https://kutupgrup.com is missing in llms.txt.');
    process.exit(1);
  }
  if (!llmsUrls.includes('https://kutupgrup.com/hizmetler')) {
    console.error('FAIL: /hizmetler main list is missing in llms.txt.');
    process.exit(1);
  }

  // 5. Verify robots.txt contains AI Bot rules
  const robots = fs.readFileSync(ROBOTS_PATH, 'utf-8');
  const expectedAgents = [
    'User-agent: ChatGPT-User',
    'User-agent: Claude-User',
    'User-agent: OAI-SearchBot',
    'User-agent: Claude-SearchBot',
    'User-agent: PerplexityBot'
  ];

  expectedAgents.forEach((agent) => {
    if (!robots.includes(agent)) {
      console.error(`FAIL: robots.txt is missing AI Search Agent configuration: "${agent}".`);
      process.exit(1);
    }
  });

  console.log('[Validation] SUCCESS: robots.txt has correct AI search permissions.');
  console.log('[Validation] SUCCESS: llms.txt and llms-full.txt are compliant.');
};

runValidation();
