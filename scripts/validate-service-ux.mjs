import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = 4007;
const baseUrl = 'http://localhost:' + port;
const manifest = fs.readFileSync(path.join(rootDir, 'src/lib/route-manifest.ts'), 'utf8');
const routes = [...manifest.matchAll(/\{ path: '([^']+)', type: 'service'/gu)].map((match) => match[1]);

const waitForServer = (server) => new Promise((resolve, reject) => {
    let settled = false;
    const finish = (callback, value) => {
        if (settled) return;
        settled = true;
        callback(value);
    };
    server.stdout.on('data', (data) => {
        if (data.toString().includes('Server listening on port')) finish(resolve);
    });
    server.once('error', (error) => finish(reject, error));
    setTimeout(() => finish(resolve), 2500);
});

const server = spawn('node', ['server.js'], {
    cwd: rootDir,
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
});

try {
    await waitForServer(server);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const consoleErrors = [];
    const localNetworkErrors = [];

    page.on('console', (message) => {
        if (message.type() === 'error') {
            const location = message.location().url || '';
            consoleErrors.push(message.text() + (location ? ' [' + location + ']' : ''));
        }
    });
    page.on('response', (response) => {
        if (response.url().startsWith(baseUrl) && response.status() >= 400) {
            localNetworkErrors.push(response.status() + ' ' + response.url());
        }
    });

    const results = [];
    for (const route of routes) {
        const slug = route.slice('/hizmetler/'.length);
        await page.goto(baseUrl + route, { waitUntil: 'networkidle', timeout: 15000 });
        const headingLevels = await page.locator('h1, h2, h3, h4, h5, h6').evaluateAll((elements) => elements.map((element) => Number(element.tagName.slice(1))));
        const headingOrderValid = headingLevels.every((level, index) => index === 0 || level <= headingLevels[index - 1] + 1);
        const result = {
            route,
            status: await page.locator('main.service-page').count() === 1 ? 'PASS' : 'FAIL',
            h1: await page.locator('h1').count() === 1 ? 'PASS' : 'FAIL',
            breadcrumb: await page.locator('nav[aria-label=\"İçerik yolu\"]').count() === 1 ? 'PASS' : 'FAIL',
            relatedNav: await page.locator('nav[aria-label=\"İlgili hizmetler\"]').count() === 1 ? 'PASS' : 'FAIL',
            serviceCta: await page.locator('a[href=\"/iletisim?hizmet=' + slug + '\"]').count() >= 1 ? 'PASS' : 'FAIL',
            ctaVisible: await page.locator('a[href=\"/iletisim?hizmet=' + slug + '\"]').first().isVisible() ? 'PASS' : 'FAIL',
            altText: (await page.locator('img').evaluateAll((images) => images.every((image) => (image.getAttribute('alt') || '').trim().length > 0))) ? 'PASS' : 'FAIL',
            headingOrder: headingOrderValid ? 'PASS' : 'FAIL',
            horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1) ? 'PASS' : 'FAIL',
            articleWords: (await page.locator('article.service-article').innerText()).trim().split(/\s+/u).filter(Boolean).length,
        };
        results.push(result);
    }

    await browser.close();
    const failed = results.filter((result) => Object.values(result).includes('FAIL'));
    console.table(results);
    console.log('Console errors:', consoleErrors.length);
    if (consoleErrors.length) console.log('Console error samples:', [...new Set(consoleErrors)].slice(0, 5));
    console.log('Local network errors:', localNetworkErrors.length);
    if (failed.length || consoleErrors.length || localNetworkErrors.length) {
        console.error('[Service UX Validation] FAIL: mobile service UX checks failed.');
        process.exitCode = 1;
    } else {
        console.log('[Service UX Validation] SUCCESS: 20 service pages passed mobile UX and accessibility smoke checks.');
    }
} finally {
    server.kill();
}
