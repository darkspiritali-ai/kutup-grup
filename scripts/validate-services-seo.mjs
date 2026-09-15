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

const stripMarkup = (value) => htmlEntityDecode(value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' '))
  .replace(/\s+/g, ' ')
  .trim();

const extractServiceRoutes = () => {
  const manifest = fs.readFileSync(MANIFEST_PATH, 'utf-8');
  return [...manifest.matchAll(/\{ path: '([^']+)', type: 'service'/g)].map((match) => match[1]);
};

const readMeta = (html, name) => {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<meta\\s+name=["']${escapedName}["']\\s+content=["']([\\s\\S]*?)["']`, 'i'));
  return match ? htmlEntityDecode(match[1]) : '';
};

const readProperty = (html, property) => {
  const match = [...html.matchAll(/<meta\s+property=["']([^"']+)["']\s+content=["']([\s\S]*?)["']/gi)]
    .find((entry) => entry[1] === property);
  return match ? htmlEntityDecode(match[2]) : '';
};

const validatePage = (routePath) => {
  const filePath = path.join(DIST_DIR, routePath.slice(1), 'index.html');
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing prerendered file: ${filePath}`);
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const title = htmlEntityDecode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || '');
  const description = readMeta(html, 'description');
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] || '';
  const ogTitle = readProperty(html, 'og:title');
  const ogDescription = readProperty(html, 'og:description');
  const ogUrl = readProperty(html, 'og:url');
  const ogImage = readProperty(html, 'og:image');
  const twitterTitle = readMeta(html, 'twitter:title');
  const twitterImage = readMeta(html, 'twitter:image');
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const articleHtml = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] || '';
  const articleText = stripMarkup(articleHtml);
  const articleWordCount = articleText ? articleText.split(/\s+/u).length : 0;
  const articleH2Count = (articleHtml.match(/<h2\b/gi) || []).length;
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
  const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage');
  const visibleFaqCount = (articleHtml.match(/class=["'][^"']*faq-item[^"']*["']/gi) || []).length;
  const breadcrumbSchema = schemas.find((schema) => schema['@type'] === 'BreadcrumbList');

  const expectedCanonical = `https://kutupgrup.com${routePath}`;
  if (!title) throw new Error(`${routePath}: missing title`);
  if (!description) throw new Error(`${routePath}: missing meta description`);
  if (ogTitle !== title || ogDescription !== description || ogUrl !== expectedCanonical) {
    throw new Error('Open Graph title, description or URL does not match page metadata: ' + routePath);
  }
  if (!ogImage || !twitterTitle || !twitterImage) {
    throw new Error('Missing Open Graph or Twitter image metadata: ' + routePath);
  }
  const ogImagePath = new URL(ogImage, expectedCanonical).pathname;
  if (!fs.existsSync(path.join(ROOT_DIR, 'public', ogImagePath.slice(1)))) {
    throw new Error('Open Graph image asset is missing (' + ogImagePath + '): ' + routePath);
  }
  if (description.length < 120 || description.length > 160) {
    throw new Error(`${routePath}: meta description should be 120-160 characters (${description.length})`);
  }
  if (canonical !== expectedCanonical) {
    throw new Error(`${routePath}: canonical mismatch (${canonical || 'missing'})`);
  }
  if (h1Count !== 1) throw new Error(`${routePath}: expected exactly one H1, found ${h1Count}`);
  if (articleWordCount < 180) {
    throw new Error(`${routePath}: article content is too thin (${articleWordCount} words)`);
  }
  if (articleH2Count < 2) throw new Error(`${routePath}: expected at least two article H2 headings`);
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
  if (!html.includes(`/iletisim?hizmet=${routePath.slice('/hizmetler/'.length)}`)) {
    throw new Error(`${routePath}: missing service-attributed contact CTA`);
  }
  if (!html.match(/<nav[^>]+aria-label=["']İçerik yolu["']/i)) {
    throw new Error(`${routePath}: missing semantic breadcrumb navigation`);
  }
  if (!breadcrumbSchema || breadcrumbSchema.itemListElement?.at(-1)?.item !== expectedCanonical) {
    throw new Error(`${routePath}: breadcrumb schema does not end at the canonical URL`);
  }
  if (faqSchema && faqSchema.mainEntity?.length !== visibleFaqCount) {
    throw new Error(`${routePath}: visible FAQ count (${visibleFaqCount}) does not match FAQ schema (${faqSchema.mainEntity?.length || 0})`);
  }

  return {
    routePath,
    title,
    descriptionLength: description.length,
    articleWords: articleWordCount,
    articleH2: articleH2Count,
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
