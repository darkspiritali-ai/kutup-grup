import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 4006;

const runHydrationAudit = async () => {
  console.log('[SEO Parity Audit] Starting Playwright-based pre/post hydration parity checks...\n');

  let manifest = [];
  try {
    const manifestModule = await import(ROUTE_MANIFEST_PATH);
    manifest = manifestModule.ROUTE_MANIFEST || [];
  } catch (error) {
    console.error('Error importing route manifest for hydration audit:', error);
    process.exit(1);
  }

  const indexableRoutes = manifest.filter((r) => r.indexable);

  // Start production Express server
  const server = spawn('node', ['server.js'], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'pipe',
  });

  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Server listening on port')) {
        resolve();
      }
    });
    setTimeout(resolve, 2000);
  });

  console.log(`[SEO Parity Audit] Server running on http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const hydrationWarnings = [];
  page.on('console', (msg) => {
    const text = msg.text();
    if (text.includes('Hydration') || text.includes('hydrat') || text.includes('did not match')) {
      hydrationWarnings.push(text);
    }
  });

  const auditResults = [];
  let overallSuccess = true;

  for (const route of indexableRoutes) {
    const relPath = route.path === '/' ? 'index.html' : path.join(route.path.substring(1), 'index.html');
    const filePath = path.join(DIST_DIR, relPath);

    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: Static HTML file missing for ${route.path}`);
      overallSuccess = false;
      continue;
    }

    const preHtml = fs.readFileSync(filePath, 'utf-8');

    // Pre-hydration extracted values from static file
    const preTitleMatch = preHtml.match(/<title>([\s\S]*?)<\/title>/i);
    const preTitle = preTitleMatch ? preTitleMatch[1].trim() : '';

    const preDescMatch = preHtml.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                         preHtml.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
    const preDesc = preDescMatch ? preDescMatch[1].trim() : '';

    const preCanonicalMatch = preHtml.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i) ||
                             preHtml.match(/<link\s+href=["']([\s\S]*?)["']\s+rel=["']canonical["']/i);
    const preCanonical = preCanonicalMatch ? preCanonicalMatch[1].trim() : '';

    const preH1Match = preHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    const preH1Count = preH1Match ? preH1Match.length : 0;
    const rawPreH1Text = preH1Match ? preH1Match[0].replace(/<[^>]+>/g, '').trim() : '';
    const preH1Text = rawPreH1Text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#39;/g, "'");

    // Navigate to live page with Playwright to inspect post-hydration DOM
    await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'networkidle' });

    const postTitle = await page.title();
    const postDesc = await page.$eval('meta[name="description"]', (el) => el.getAttribute('content')).catch(() => '');
    const postCanonical = await page.$eval('link[rel="canonical"]', (el) => el.getAttribute('href')).catch(() => '');
    const postH1s = await page.$$eval('h1', (els) => els.map((el) => el.innerText.trim()));
    const postHeaderHeight = await page.$eval('header', (el) => el.getBoundingClientRect().height).catch(() => 0);
    const postLandmarks = await page.$$eval('header, main, footer, nav', (els) => els.length);
    const postRootChildren = await page.$eval('#root', (el) => el.children.length);

    // Parity comparisons
    const h1Match = preH1Count === postH1s.length && (preH1Count === 0 || preH1Text.substring(0, 20) === postH1s[0].substring(0, 20));
    const titleMatch = preTitle === postTitle;
    const descMatch = preDesc === postDesc;
    const canonicalMatch = preCanonical === postCanonical;

    const routePass = h1Match && titleMatch && descMatch && canonicalMatch && postRootChildren > 0;
    if (!routePass) {
      overallSuccess = false;
    }

    auditResults.push({
      path: route.path,
      preH1: preH1Text.substring(0, 25) + '...',
      postH1: postH1s[0] ? postH1s[0].substring(0, 25) + '...' : 'NONE',
      preTitle: preTitle.substring(0, 20) + '...',
      postTitle: postTitle.substring(0, 20) + '...',
      landmarks: postLandmarks,
      headerHeight: `${Math.round(postHeaderHeight)}px`,
      rootChildren: postRootChildren,
      parity: routePass ? 'MATCH' : 'MISMATCH',
    });
  }

  await browser.close();
  server.kill();

  console.log('=================================== HYDRATION PARITY REPORT ===================================');
  console.table(auditResults);
  console.log('===============================================================================================\n');

  console.log('Hydration Console Warnings:', hydrationWarnings.length === 0 ? '0 (PASS)' : hydrationWarnings);

  if (!overallSuccess || hydrationWarnings.length > 0) {
    console.error('\n[SEO Parity Audit] FAIL: Pre/Post hydration mismatch detected.');
    process.exit(1);
  } else {
    console.log('\n[SEO Parity Audit] SUCCESS: All indexable routes passed pre/post hydration parity checks!');
    process.exit(0);
  }
};

runHydrationAudit();
