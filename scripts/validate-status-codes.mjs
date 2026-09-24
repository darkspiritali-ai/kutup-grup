import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to check URL status code via running local server
const checkUrlStatus = (url) => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', (err) => {
      resolve(500);
    });
  });
};

const runValidation = async () => {
  console.log('[SEO Validation] Starting local HTTP server check...');
  
  // Dynamically start Express server from server.js to test responses
  const port = Number(process.env.PORT) || 4000;
  process.env.PORT = String(port);
  await import('../server.js');

  // Wait 1 second for the server to spin up
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const locs = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());

  let hasErrors = false;

  // 1. Verify indexable routes return 200
  console.log('[SEO Validation] Checking indexable routes return HTTP 200...');
  for (const url of urls) {
    const localUrl = url.replace('https://kutupgrup.com', `http://localhost:${port}`);
    const status = await checkUrlStatus(localUrl);
    if (status !== 200) {
      console.error(`FAIL: URL ${url} returned HTTP ${status} instead of 200.`);
      hasErrors = true;
    }
  }

  // 2. Verify non-existent routes return real HTTP 404 (preventing soft-404)
  console.log('[SEO Validation] Checking non-existent routes return HTTP 404...');
  const test404s = [
    `http://localhost:${port}/boyle-bir-sayfa-yok-123`,
    `http://localhost:${port}/hizmetler/olmayan-hizmet`,
    `http://localhost:${port}/test-404-seo`
  ];

  for (const url of test404s) {
    const status = await checkUrlStatus(url);
    if (status !== 404) {
      console.error(`FAIL: Invalid URL ${url} returned HTTP ${status} instead of 404.`);
      hasErrors = true;
    }
  }

  // Stop process cleanly
  if (hasErrors) {
    console.error('[SEO Validation] FAIL: Status code verification failed.');
    process.exit(1);
  }

  console.log('[SEO Validation] SUCCESS: All indexable URLs return HTTP 200. Invalid URLs correctly return HTTP 404.');
  process.exit(0);
};

runValidation();
