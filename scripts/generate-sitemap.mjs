import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// 1. Parse service slugs from services-data.ts
const getServiceSlugs = () => {
  try {
    const content = fs.readFileSync(SERVICES_DATA_PATH, 'utf-8');
    // Extract key names from const SERVICES_DATA: Record<string, ServiceContent> = { ... }
    // Matching patterns like: 'dis-cephe-dekoratif-aydinlatma': {
    const regex = /['"]([^'"]+)['"]\s*:\s*\{/g;
    const slugs = [];
    let match;
    
    // Skip interface definitions by finding the start of SERVICES_DATA
    const startIdx = content.indexOf('SERVICES_DATA');
    const searchableContent = startIdx !== -1 ? content.substring(startIdx) : content;

    while ((match = regex.exec(searchableContent)) !== null) {
      // Avoid duplicate or internal config keys
      if (match[1] !== 'category' && match[1] !== 'slug' && match[1] !== 'title') {
        slugs.push(match[1]);
      }
    }
    return slugs;
  } catch (error) {
    console.error('Error reading services data for sitemap generation:', error);
    return [];
  }
};

// 2. Generate XML Sitemap
const generateSitemap = (slugs) => {
  const domain = 'https://kutupgrup.com';
  
  // W3C date format
  const lastmod = new Date().toISOString().split('T')[0];

  const staticPages = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/sss',
    '/gizlilik-politikasi',
    '/cerez-politikasi',
    '/referanslar'
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticPages.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${domain}${page}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '  </url>\n';
  });

  // Add dynamic service pages
  slugs.forEach((slug) => {
    xml += '  <url>\n';
    xml += `    <loc>${domain}/hizmetler/${slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`[Sitemap] Generated sitemap.xml with ${staticPages.length + slugs.length} URLs.`);
};

// 3. Generate Robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://kutupgrup.com/sitemap.xml
`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots, 'utf-8');
  console.log('[Sitemap] Generated robots.txt.');
};

// Execution Flow
const slugs = getServiceSlugs();
if (slugs.length === 0) {
  console.warn('[Warning] No service slugs found. Generating static sitemap only.');
}
generateSitemap(slugs);
generateRobotsTxt();
