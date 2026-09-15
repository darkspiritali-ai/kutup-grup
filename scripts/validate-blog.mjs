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

  if (BLOG_POSTS.length !== 8) fail(`Expected 8 blog posts, found ${BLOG_POSTS.length}.`);
  if (new Set(BLOG_POSTS.map((post) => post.slug)).size !== BLOG_POSTS.length) {
    fail('Blog slugs must be unique.');
  }

  console.log('[Blog Validation] Checking 8 long-form posts, links, metadata and WebP assets...');
  for (const post of BLOG_POSTS) {
    const wordCount = getBlogWordCount(post);
    if (wordCount < 2000) fail(`${post.slug} has ${wordCount} words; minimum is 2000.`);
    if (!post.metaDescription || post.metaDescription.length < 80) fail(`${post.slug} has an incomplete meta description.`);
    if (!post.image.src.endsWith('.webp')) fail(`${post.slug} image must use WebP.`);

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
