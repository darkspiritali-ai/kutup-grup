import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.join(__dirname, '../src/lib/route-manifest.ts');
const baseUrl = (process.env.SEO_LIVE_URL || 'https://kutupgrup.com').replace(/\/$/u, '');

const manifest = await fs.readFile(manifestPath, 'utf8');
const serviceRoutes = [...manifest.matchAll(/\{ path: '([^']+)', type: 'service'/gu)].map((match) => match[1]);

const fetchText = async (url) => {
    const response = await fetch(url, { redirect: 'manual' });
    return { response, body: await response.text() };
};

const getMeta = (html, name) => html.match(new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([\\s\\S]*?)["']`, 'iu'))?.[1] || '';
const getCanonical = (html) => html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/iu)?.[1] || '';
const getRobots = (html) => html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/iu)?.[1]?.toLowerCase() || '';
const getHeroImage = (html) => html.match(/<img[^>]+src=["'](\/services\/[^"']+)["']/iu)?.[1] || '';

const checks = [];
const failures = [];

const record = (label, passed, detail = '') => {
    checks.push({ label, status: passed ? 'PASS' : 'FAIL', detail });
    if (!passed) failures.push(`${label}${detail ? `: ${detail}` : ''}`);
};

for (const route of serviceRoutes) {
    const url = `${baseUrl}${route}`;
    try {
        const { response, body } = await fetchText(url);
        record(`${route} HTTP`, response.status === 200, `HTTP ${response.status}`);
        if (response.status !== 200) continue;

        record(`${route} title`, /<title>[^<]+<\/title>/iu.test(body));
        record(`${route} meta description`, getMeta(body, 'description').length >= 120 && getMeta(body, 'description').length <= 160, `${getMeta(body, 'description').length} chars`);
        record(`${route} canonical`, getCanonical(body) === url, getCanonical(body) || 'missing');
        record(`${route} H1`, (body.match(/<h1\b/giu) || []).length === 1, `${(body.match(/<h1\b/giu) || []).length} found`);
        record(`${route} Service JSON-LD`, /"@type":"Service"/u.test(body));

        record([route, 'robots'].join(' '), /(^|,)\s*index\s*(,|$)/u.test(getRobots(body)) && /(^|,)\s*follow\s*(,|$)/u.test(getRobots(body)), getRobots(body) || 'missing');
        const heroImage = getHeroImage(body);
        if (heroImage) {
            const imageResponse = await fetch(`${baseUrl}${heroImage}`, { method: 'HEAD', redirect: 'manual' });
            record(`${route} hero asset`, imageResponse.status === 200, `${heroImage} HTTP ${imageResponse.status}`);
        } else {
            record(`${route} hero asset`, false, 'missing service image');
        }
    } catch (error) {
        record(`${route} request`, false, error instanceof Error ? error.message : String(error));
    }
}

for (const pathName of ['/robots.txt', '/sitemap.xml', '/llms.txt', '/llms-full.txt']) {
    try {
        const { response, body } = await fetchText(`${baseUrl}${pathName}`);
        record(`${pathName} HTTP`, response.status === 200, `HTTP ${response.status}`);
        record(`${pathName} non-empty`, body.trim().length > 0);
    } catch (error) {
        record(`${pathName} request`, false, error instanceof Error ? error.message : String(error));
    }
}

const discoveryBodies = new Map();
for (const pathName of ['/robots.txt', '/sitemap.xml', '/llms.txt']) {
    const { body } = await fetchText(baseUrl + pathName);
    discoveryBodies.set(pathName, body);
}
const sitemapBody = discoveryBodies.get('/sitemap.xml') || '';
const llmsBody = discoveryBodies.get('/llms.txt') || '';
for (const route of serviceRoutes) {
    const url = baseUrl + route;
    record(['sitemap', route].join(' '), sitemapBody.includes('<loc>' + url + '</loc>'));
    record(['llms', route].join(' '), llmsBody.includes(url));
}
record('robots sitemap directive', (discoveryBodies.get('/robots.txt') || '').includes('Sitemap: ' + baseUrl + '/sitemap.xml'));

console.table(checks);
console.log(`[Live SEO Validation] Checked ${serviceRoutes.length} service routes against ${baseUrl}.`);

if (failures.length > 0) {
    console.error('[Live SEO Validation] FAILURES:');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
}

console.log('[Live SEO Validation] SUCCESS: live service routes and discovery files passed.');
