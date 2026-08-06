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

// 1. Dynamic import of services data to query fields like slug and updatedAt
const getServicesData = async () => {
  try {
    const module = await import(SERVICES_DATA_PATH);
    return module.SERVICES_DATA || {};
  } catch (error) {
    console.error('Error importing services data for sitemap generation:', error);
    return {};
  }
};

// 2. Generate XML Sitemap
const generateSitemap = (services) => {
  const domain = 'https://kutupgrup.com';

  // Static pages list (Gizlilik and Cerez omitted since they do not carry organic search value)
  const staticPages = [
    { path: '', lastmod: null },
    { path: '/hakkimizda', lastmod: null },
    { path: '/hizmetler', lastmod: null },
    { path: '/iletisim', lastmod: null },
    { path: '/sss', lastmod: null },
    { path: '/referanslar', lastmod: null }
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticPages.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${domain}${page.path}</loc>\n`;
    if (page.lastmod) {
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    }
    xml += '  </url>\n';
  });

  // Add dynamic service pages
  let count = staticPages.length;
  Object.values(services).forEach((s) => {
    xml += '  <url>\n';
    xml += `    <loc>${domain}/hizmetler/${s.slug}</loc>\n`;
    if (s.updatedAt) {
      xml += `    <lastmod>${s.updatedAt}</lastmod>\n`;
    }
    xml += '  </url>\n';
    count++;
  });

  xml += '</urlset>\n';

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`[Sitemap] Generated sitemap.xml with ${count} URLs.`);
};

// 3. Generate Robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /
Disallow: /api/

# Block AI Model Training Crawlers
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

# Allow AI Search Crawlers for Discovery Visibility
User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://kutupgrup.com/sitemap.xml
`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots, 'utf-8');
  console.log('[Sitemap] Generated robots.txt.');
};

// Execution Flow
const run = async () => {
  const services = await getServicesData();
  generateSitemap(services);
  generateRobotsTxt();
};

run();
