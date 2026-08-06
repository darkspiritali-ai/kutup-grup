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

const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');

const generateSitemap = async () => {
  const domain = 'https://kutupgrup.com';

  let manifest = [];
  try {
    const module = await import(ROUTE_MANIFEST_PATH);
    manifest = module.ROUTE_MANIFEST || [];
  } catch (error) {
    console.error('Error importing route manifest for sitemap generation:', error);
    process.exit(1);
  }

  // Filter routes that are indexable and should be included in sitemap
  const sitemapRoutes = manifest.filter(r => r.indexable && r.includeInSitemap);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemapRoutes.forEach((route) => {
    xml += '  <url>\n';
    // Ensure root path doesn't get trailing slash, other paths get full domain prefix
    const pathSuffix = route.path === '/' ? '' : route.path;
    xml += `    <loc>${domain}${pathSuffix}</loc>\n`;
    if (route.updatedAt) {
      xml += `    <lastmod>${route.updatedAt}</lastmod>\n`;
    }
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`[Sitemap] Generated sitemap.xml with ${sitemapRoutes.length} URLs from ROUTE_MANIFEST.`);
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
  await generateSitemap();
  generateRobotsTxt();
};

run();
