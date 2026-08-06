import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const ROBOTS_PATH = path.resolve(__dirname, '../public/robots.txt');

const runValidation = () => {
  console.log('[Validation] Starting Sitemap and Robots.txt verification...');

  // 1. Verify files exist
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('FAIL: sitemap.xml does not exist.');
    process.exit(1);
  }
  if (!fs.existsSync(ROBOTS_PATH)) {
    console.error('FAIL: robots.txt does not exist.');
    process.exit(1);
  }

  // 2. Read sitemap
  const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');

  // 3. XML Validations
  if (!sitemap.startsWith('<?xml')) {
    console.error('FAIL: sitemap.xml must start with XML declaration.');
    process.exit(1);
  }
  if (!sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    console.error('FAIL: sitemap.xml namespace schema is missing/incorrect.');
    process.exit(1);
  }

  // 4. Verify canonical domain
  const urls = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
  if (urls.length === 0) {
    console.error('FAIL: sitemap.xml contains no URLs.');
    process.exit(1);
  }

  urls.forEach((locTag) => {
    const loc = locTag.replace(/<\/?loc>/g, '').trim();
    if (!loc.startsWith('https://kutupgrup.com')) {
      console.error(`FAIL: URL ${loc} does not start with https://kutupgrup.com.`);
      process.exit(1);
    }
    if (loc.includes('www.')) {
      console.error(`FAIL: URL ${loc} contains www. prefix.`);
      process.exit(1);
    }
    if (loc.includes('localhost') || loc.includes('127.0.0.1')) {
      console.error(`FAIL: URL ${loc} contains local host.`);
      process.exit(1);
    }
  });

  // 5. Verify robots.txt
  const robots = fs.readFileSync(ROBOTS_PATH, 'utf-8');
  if (!robots.includes('User-agent: *')) {
    console.error('FAIL: robots.txt missing User-agent definition.');
    process.exit(1);
  }
  if (!robots.includes('Sitemap: https://kutupgrup.com/sitemap.xml')) {
    console.error('FAIL: robots.txt missing sitemap URL declaration.');
    process.exit(1);
  }

  console.log(`[Validation] SUCCESS: Validated ${urls.length} URLs in sitemap.xml.`);
  console.log('[Validation] SUCCESS: robots.txt matches configuration rules.');
};

runValidation();
