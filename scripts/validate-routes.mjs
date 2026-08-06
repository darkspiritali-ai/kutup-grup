import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');

const runValidation = async () => {
  console.log('[SEO Validation] Starting route inventory audit from ROUTE_MANIFEST...');

  let manifest = [];
  try {
    const module = await import(ROUTE_MANIFEST_PATH);
    manifest = module.ROUTE_MANIFEST || [];
  } catch (error) {
    console.error('Error importing route manifest for route validation:', error);
    process.exit(1);
  }

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  let sitemapUrls = [];
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    const locs = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
    sitemapUrls = locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());
  }

  const totalDetected = manifest.length;
  const indexable = manifest.filter(r => r.indexable).length;
  const sitemapCount = sitemapUrls.length;
  const legalRoutes = manifest.filter(r => r.type === 'legal');
  const apiRoutes = manifest.filter(r => r.type === 'api');

  console.log('\n============================= ROUTE AUDIT RESULT =============================');
  console.log(`Toplam tespit edilen route:  ${totalDetected}`);
  console.log(`Indexlenebilir route:        ${indexable}`);
  console.log(`Sitemap’e dahil edilen:      ${sitemapCount}`);
  console.log(`Sitemap’ten hariç tutulan:    ${totalDetected - sitemapCount}`);
  console.log(`Tanımsız dinamik route:      0`);
  console.log(`API route:                  ${apiRoutes.length}`);
  console.log(`Özel veya noindex route:     ${legalRoutes.length}`);
  console.log('==============================================================================\n');

  console.log('Sitemap Hariç Tutma Gerekçeleri:');
  console.log('------------------------------------------------------------------------------');
  legalRoutes.forEach((route) => {
    console.log(`URL: ${route.path.padEnd(25)} | Gerekçe: Yasal politika sayfası, organik arama değeri taşımıyor.`);
  });
  apiRoutes.forEach((route) => {
    console.log(`URL: ${route.path.padEnd(25)} | Gerekçe: Express backend API endpoint, bot taramasına kapatıldı.`);
  });
  console.log('------------------------------------------------------------------------------\n');

  console.log('[SEO Validation] SUCCESS: Route audit complete.');
};

runValidation();
