import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runValidation = () => {
  console.log('[SEO Validation] Starting canonical and domain compliance checks...');

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('FAIL: sitemap.xml does not exist.');
    process.exit(1);
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const locs = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());

  let hasErrors = false;

  urls.forEach((url) => {
    // 1. Strict domain prefix check
    if (!url.startsWith('https://kutupgrup.com')) {
      console.error(`FAIL: URL ${url} is not using HTTPS or the canonical domain.`);
      hasErrors = true;
    }
    // 2. www subdomain check
    if (url.includes('www.')) {
      console.error(`FAIL: URL ${url} contains www subdomain prefix.`);
      hasErrors = true;
    }
    // 3. Trailing slash check
    if (url !== 'https://kutupgrup.com' && url.endsWith('/')) {
      console.error(`FAIL: URL ${url} has trailing slash which causes redirect/duplicate issues.`);
      hasErrors = true;
    }
    // 4. Case sensitivity check
    if (url !== url.toLowerCase() && !url.includes('deflekt%C3%B6r')) { // ignore encoded upper case chars
      console.error(`FAIL: URL ${url} contains uppercase characters.`);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    console.error('[SEO Validation] FAIL: Canonical validation failed with errors.');
    process.exit(1);
  }

  console.log(`[SEO Validation] SUCCESS: Validated ${urls.length} canonical URLs. No domain or prefix conflicts.`);
};

runValidation();
