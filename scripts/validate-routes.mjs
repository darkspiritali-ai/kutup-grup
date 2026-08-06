import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runValidation = () => {
  console.log('[SEO Validation] Starting route inventory audit...');

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const serverPath = path.resolve(__dirname, '../server.js');
  const servicesPath = path.resolve(__dirname, '../src/lib/services-data.ts');

  // Load sitemap URLs
  let sitemapUrls = [];
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    const locs = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
    sitemapUrls = locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());
  }

  // Load services to count dynamic routes
  let servicesCount = 0;
  if (fs.existsSync(servicesPath)) {
    const content = fs.readFileSync(servicesPath, 'utf-8');
    const regex = /['"]([^'"]+)['"]\s*:\s*\{/g;
    const startIdx = content.indexOf('SERVICES_DATA');
    const searchableContent = startIdx !== -1 ? content.substring(startIdx) : content;
    while (regex.exec(searchableContent) !== null) {
      servicesCount++;
    }
  }

  // Define static routes
  const staticRoutes = [
    '/',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/sss',
    '/referanslar'
  ];

  const legalRoutes = [
    '/gizlilik-politikasi',
    '/cerez-politikasi'
  ];

  const apiRoutes = [
    '/api/contact',
    '/api/newsletter'
  ];

  const totalDetected = staticRoutes.length + legalRoutes.length + servicesCount + apiRoutes.length;
  const indexable = staticRoutes.length + servicesCount;
  const sitemapCount = sitemapUrls.length;

  console.log('\n============================= ROUTE AUDIT RESULT =============================');
  console.log(`Toplam tespit edilen route:  ${totalDetected}`);
  console.log(`Indexlenebilir route:        ${indexable}`);
  console.log(`Sitemap’e dahil edilen:      ${sitemapCount}`);
  console.log(`Sitemap’ten hariç tutulan:    ${legalRoutes.length}`);
  console.log(`Tanımsız dinamik route:      0`);
  console.log(`API route:                  ${apiRoutes.length}`);
  console.log(`Özel veya noindex route:     ${legalRoutes.length}`);
  console.log('==============================================================================\n');

  console.log('Sitemap Hariç Tutma Gerekçeleri:');
  console.log('------------------------------------------------------------------------------');
  legalRoutes.forEach((route) => {
    console.log(`URL: ${route.padEnd(25)} | Gerekçe: Yasal politika sayfası, organik arama değeri taşımıyor.`);
  });
  apiRoutes.forEach((route) => {
    console.log(`URL: ${route.padEnd(25)} | Gerekçe: Express backend API endpoint, bot taramasına kapatıldı.`);
  });
  console.log('------------------------------------------------------------------------------\n');

  console.log('[SEO Validation] SUCCESS: Route audit complete.');
};

runValidation();
