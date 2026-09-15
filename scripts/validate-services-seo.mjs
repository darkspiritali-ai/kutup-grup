import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const MANIFEST_PATH = path.join(ROOT_DIR, 'src/lib/route-manifest.ts');

const htmlEntityDecode = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

const extractServiceRoutes = () => {
  const manifest = fs.readFileSync(MANIFEST_PATH, 'utf-8');
  return [...manifest.matchAll(/\{ path: '([^']+)', type: 'service'/g)].map((match) => match[1]);
};

const readMeta = (html, name) => {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<meta\\s+name=["']${escapedName}["']\\s+content=["']([\\s\\S]*?)["']`, 'i'));
  return match ? htmlEntityDecode(match[1]) : '';
};

const validatePage = (routePath) => {
  const filePath = path.join(DIST_DIR, routePath.slice(1), 'index.html');
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing prerendered file: ${filePath}`);
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || '';
  const description = readMeta(html, 'description');
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] || '';
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const imagePath = html.match(/<img[^>]+src=["'](\/services\/[^"']+)["']/i)?.[1] || '';
  const relatedServicesNav = html.match(/<nav[^>]+aria-label=["']İlgili hizmetler["'][^>]*>([\s\S]*?)<\/nav>/i)?.[1] || '';
  const relatedServiceLinks = new Set([...relatedServicesNav.matchAll(/href=["'](\/hizmetler\/[^"']+)["']/gi)].map((match) => match[1]));
  const relatedBlogLinks = new Set([...html.matchAll(/href=["'](\/blog\/[^"']+)["']/gi)].map((match) => match[1]));
  const jsonLdScripts = [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  const schemas = jsonLdScripts
    .map((match) => {
      try {
        return JSON.parse(match[1]);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  const serviceSchema = schemas.find((schema) => schema['@type'] === 'Service');

  const expectedCanonical = `https://kutupgrup.com${routePath}`;
  if (!title) throw new Error(`${routePath}: missing title`);
  if (!description) throw new Error(`${routePath}: missing meta description`);
  if (description.length < 120 || description.length > 160) {
    throw new Error(`${routePath}: meta description should be 120-160 characters (${description.length})`);
  }
  if (canonical !== expectedCanonical) {
    throw new Error(`${routePath}: canonical mismatch (${canonical || 'missing'})`);
  }
  if (h1Count !== 1) throw new Error(`${routePath}: expected exactly one H1, found ${h1Count}`);
  if (!serviceSchema) throw new Error(`${routePath}: missing Service JSON-LD`);
  if (!serviceSchema.serviceType || !serviceSchema.inLanguage || !serviceSchema.image) {
    throw new Error(`${routePath}: Service JSON-LD is missing serviceType, image or inLanguage`);
  }
  if (!imagePath) throw new Error(`${routePath}: missing service hero image`);
  if (!imagePath.endsWith('.webp') && !imagePath.endsWith('.avif')) {
    throw new Error(`${routePath}: service image is not WebP/AVIF (${imagePath})`);
  }
  if (!fs.existsSync(path.join(ROOT_DIR, 'public', imagePath.slice(1)))) {
    throw new Error(`${routePath}: service image asset is missing (${imagePath})`);
  }
  if (relatedServiceLinks.size < 2) {
    throw new Error(`${routePath}: expected at least two related service links, found ${relatedServiceLinks.size}`);
  }
  if (relatedBlogLinks.size < 1) {
    throw new Error(`${routePath}: expected at least one related blog link`);
  }

  return {
    routePath,
    title,
    descriptionLength: description.length,
    imagePath: imagePath || 'none',
    relatedServices: relatedServiceLinks.size,
    relatedBlogs: relatedBlogLinks.size,
    serviceSchema: 'OK',
  };
};

const routes = extractServiceRoutes();
if (routes.length !== 20) {
  throw new Error(`Expected 20 service routes, found ${routes.length}`);
}

console.log(`[Service SEO Validation] Checking ${routes.length} prerendered service pages...`);
const results = routes.map(validatePage);
console.table(results);
console.log('[Service SEO Validation] SUCCESS: service HTML, metadata, Service JSON-LD and image assets are valid.');
