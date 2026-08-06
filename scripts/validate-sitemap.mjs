import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const ROBOTS_PATH = path.resolve(__dirname, '../public/robots.txt');

// Extract URLs from sitemap
const getSitemapUrls = () => {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('FAIL: sitemap.xml does not exist.');
    process.exit(1);
  }
  const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locs = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
  return locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());
};

// Check HTML content of the build dist files directly for strict SPA verification
const validateStaticHtmlFile = (urlPath) => {
  const cleanPath = decodeURIComponent(urlPath);
  const relPath = cleanPath === '/' ? 'index.html' : path.join(cleanPath.substring(1), 'index.html');
  const filePath = path.resolve(__dirname, '../dist', relPath);

  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: HTML file not found at ${filePath} for URL ${urlPath}`);
    return false;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Verify it contains hydrated static SEO content (not just empty <div id="root">)
  if (urlPath !== '/' && html.includes('<div id="root"></div>') && html.length < 500) {
    console.error(`FAIL: HTML file for ${urlPath} is an empty SPA template with no pre-rendered content.`);
    return false;
  }

  // 1. Language attribute check
  if (!html.includes('lang="tr"')) {
    console.error(`FAIL: Missing or incorrect HTML lang attribute in ${urlPath}`);
    return false;
  }

  // 2. Title validation
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`FAIL: Missing unique title tag in ${urlPath}`);
    return false;
  }

  // 3. Meta description validation
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                    html.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`FAIL: Missing meta description in ${urlPath}`);
    return false;
  }

  // 4. H1 validation
  if (!html.includes('<h1')) {
    console.error(`FAIL: Missing H1 tag in ${urlPath}`);
    return false;
  }

  // 5. Self-referencing Canonical validation
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i) ||
                         html.match(/<link\s+href=["']([\s\S]*?)["']\s+rel=["']canonical["']/i);
  if (!canonicalMatch) {
    console.error(`FAIL: Missing canonical link tag in ${urlPath}`);
    return false;
  }
  
  const expectedCanonical = `https://kutupgrup.com${urlPath === '/' ? '' : urlPath}`;
  const cleanCanonical = decodeURIComponent(canonicalMatch[1]).replace(/\/$/, ''); // Remove trailing slash for comparison
  const cleanExpected = decodeURIComponent(expectedCanonical).replace(/\/$/, '');

  if (cleanCanonical !== cleanExpected) {
    console.error(`FAIL: Canonical tag mismatch in ${urlPath}. Expected: ${expectedCanonical}, Found: ${canonicalMatch[1]}`);
    return false;
  }

  // 6. Noindex validation
  if (html.includes('noindex')) {
    console.error(`FAIL: Found 'noindex' tag in ${urlPath}`);
    return false;
  }

  // 7. Preview domains check
  if (html.includes('vercel') || html.includes('localhost') || html.includes('127.0.0.1')) {
    const urls = html.match(/https?:\/\/[^\s"'<>]+/g) || [];
    const badUrl = urls.find(u => u.includes('vercel') || u.includes('localhost') || u.includes('127.0.0.1'));
    if (badUrl) {
      console.error(`FAIL: Found local/preview domain reference "${badUrl}" in ${urlPath}`);
      return false;
    }
  }

  return {
    url: urlPath,
    title: titleMatch[1].trim(),
    desc: descMatch[1].trim()
  };
};

const runValidation = () => {
  console.log('[SEO Validation] Starting sitemap and pre-rendered HTML verification...');

  // 1. Basic files validation
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('FAIL: sitemap.xml does not exist.');
    process.exit(1);
  }
  if (!fs.existsSync(ROBOTS_PATH)) {
    console.error('FAIL: robots.txt does not exist.');
    process.exit(1);
  }

  const urls = getSitemapUrls();
  if (urls.length === 0) {
    console.error('FAIL: sitemap.xml contains no URLs.');
    process.exit(1);
  }

  // 2. Validate robots.txt AI Bot configs
  const robots = fs.readFileSync(ROBOTS_PATH, 'utf-8');
  if (!robots.includes('User-agent: *') || !robots.includes('Sitemap: https://kutupgrup.com/sitemap.xml')) {
    console.error('FAIL: robots.txt configuration rules violated.');
    process.exit(1);
  }

  // 3. Loop through all sitemap urls and check dist files
  console.log(`[SEO Validation] Validating ${urls.length} pre-rendered HTML pages...`);
  const results = [];
  let hasErrors = false;

  for (const url of urls) {
    const parsed = new URL(url);
    const urlPath = parsed.pathname;
    
    const res = validateStaticHtmlFile(urlPath);
    if (!res) {
      hasErrors = true;
    } else {
      results.push(res);
    }
  }

  if (hasErrors) {
    console.error('[SEO Validation] FAIL: HTML pre-rendering validation failed with one or more errors.');
    process.exit(1);
  }

  console.log('\n================================== SEO URL VALIDATION SUCCESS ==================================');
  console.table(results.map(r => ({
    Path: r.url,
    Title: r.title.substring(0, 40) + (r.title.length > 40 ? '...' : ''),
    'Meta Desc': r.desc.substring(0, 40) + (r.desc.length > 40 ? '...' : ''),
    Prerendered: 'YES',
    Canonical: 'OK',
    H1: 'OK'
  })));
  console.log('================================================================================================');
  
  console.log('[SEO Validation] SUCCESS: All URLs in sitemap have verified pre-rendered HTML files.');
};

runValidation();
