import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LLMS_PATH = path.resolve(__dirname, '../public/llms.txt');
const LLMS_FULL_PATH = path.resolve(__dirname, '../public/llms-full.txt');
const ROBOTS_PATH = path.resolve(__dirname, '../public/robots.txt');

const runValidation = () => {
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

  // 4. Verify absolute HTTPS canonical URLs
  const checkUrls = (content, filename) => {
    const urls = content.match(/https?:\/\/[^\s)]+/g) || [];
    if (urls.length === 0) {
      console.warn(`WARNING: No URLs found in ${filename}`);
      return;
    }
    
    urls.forEach((url) => {
      // Remove trailing punctuation from regex matches
      const cleanUrl = url.replace(/[.,;:]$/, '').trim();
      if (!cleanUrl.startsWith('https://kutupgrup.com')) {
        console.error(`FAIL: URL ${cleanUrl} in ${filename} must start with https://kutupgrup.com.`);
        process.exit(1);
      }
      if (cleanUrl.includes('www.')) {
        console.error(`FAIL: URL ${cleanUrl} in ${filename} contains www. prefix.`);
        process.exit(1);
      }
      if (cleanUrl.includes('localhost') || cleanUrl.includes('127.0.0.1')) {
        console.error(`FAIL: URL ${cleanUrl} in ${filename} contains local host.`);
        process.exit(1);
      }
    });
    console.log(`[Validation] Checked ${urls.length} URLs in ${filename} successfully.`);
  };

  checkUrls(llms, 'llms.txt');
  checkUrls(llmsFull, 'llms-full.txt');

  // 5. Verify robots.txt contains OAI and Perplexity permissions
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
