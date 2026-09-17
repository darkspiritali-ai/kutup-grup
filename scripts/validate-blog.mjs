import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DATA_PATH = path.resolve(__dirname, '../src/lib/blog-data.ts');
const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exit(1);
};

const run = async () => {
  const { BLOG_POSTS, getBlogWordCount } = await import(BLOG_DATA_PATH);
  const { ROUTE_MANIFEST } = await import(ROUTE_MANIFEST_PATH);
  const indexableRoutes = new Set(
    ROUTE_MANIFEST.filter((route) => route.indexable).map((route) => route.path)
  );

  if (BLOG_POSTS.length === 0) fail('Blog inventory must not be empty.');
  const blogRoutes = ROUTE_MANIFEST.filter((route) => route.path.startsWith('/blog/'));
  const postPaths = new Set(BLOG_POSTS.map((post) => `/blog/${post.slug}`));
  if (new Set(blogRoutes.map((route) => route.path)).size !== blogRoutes.length) {
    fail('Blog route paths must be unique.');
  }
  if (blogRoutes.length !== postPaths.size || blogRoutes.some((route) => !postPaths.has(route.path))) {
    fail('Blog posts and route manifest must match exactly.');
  }
  if (blogRoutes.some((route) => !route.indexable || !route.includeInSitemap || !route.includeInLlms || !route.prerender)) {
    fail('Every published blog route must be indexable, discoverable and prerendered.');
  }
  if (new Set(BLOG_POSTS.map((post) => post.slug)).size !== BLOG_POSTS.length) {
    fail('Blog slugs must be unique.');
  }

  console.log(`[Blog Validation] Checking ${BLOG_POSTS.length} long-form posts, links, metadata and WebP assets...`);
  for (const post of BLOG_POSTS) {
    const wordCount = getBlogWordCount(post);
    if (wordCount < 2000) fail(`${post.slug} has ${wordCount} words; minimum is 2000.`);
    if (!post.metaDescription || post.metaDescription.length < 80) fail(`${post.slug} has an incomplete meta description.`);
    if (!post.image.src.endsWith('.webp')) fail(`${post.slug} image must use WebP.`);
    if (!post.image.alt || !post.image.title || !post.image.caption || post.image.width <= 0 || post.image.height <= 0) {
      fail(`${post.slug} image metadata is incomplete.`);
    }
    if (post.relatedPosts.length < 2 || post.relatedPosts.some((slug) => slug === post.slug || !postPaths.has(`/blog/${slug}`))) {
      fail(`${post.slug} needs at least two valid related posts.`);
    }
    if (post.relatedServices.length < 3 || post.relatedServices.some((service) => !indexableRoutes.has(service.href))) {
      fail(`${post.slug} needs at least three valid related services.`);
    }

    const imagePath = path.join(PUBLIC_DIR, post.image.src.replace(/^\//, ''));
    if (!fs.existsSync(imagePath)) fail(`${post.slug} image is missing: ${imagePath}`);
    const header = fs.readFileSync(imagePath).subarray(0, 12).toString('ascii');
    if (!header.startsWith('RIFF') || header.slice(8, 12) !== 'WEBP') {
      fail(`${post.slug} image is not a valid WebP file.`);
    }

    const content = post.sections
      .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || []), section.note || ''])
      .join(' ');
    const internalLinks = [...content.matchAll(/href="(\/[^"]+)"/g)].map((match) => match[1].split('#')[0]);
    const unknownLinks = internalLinks.filter((href) => !indexableRoutes.has(href) && href !== '/referanslar');
    if (unknownLinks.length > 0) fail(`${post.slug} contains unknown internal links: ${[...new Set(unknownLinks)].join(', ')}`);
    if (internalLinks.length < 4) fail(`${post.slug} needs at least 4 internal links.`);
    if (!content.includes('target="_blank"')) fail(`${post.slug} needs an external reference link.`);
    if (post.faqs.length < 2) fail(`${post.slug} needs at least 2 FAQs.`);

    console.log(`PASS: ${post.slug} — ${wordCount} words, ${internalLinks.length} internal links, ${post.sources.length} sources.`);
  }
  console.log('[Blog Validation] SUCCESS: all posts meet the 2000+ word and asset/link requirements.');
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
