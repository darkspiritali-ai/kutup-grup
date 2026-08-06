import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTIFACTS_DIR = path.resolve('/Users/innovation/.gemini/antigravity-ide/brain/49851f17-b1b5-4152-aff8-5ce05f7f5cdb');
const PORT = 4005;

const runFilmstripTest = async () => {
  console.log('[Filmstrip Audit] Starting Playwright automated filmstrip audit...');

  // Start production Express server
  const server = spawn('node', ['server.js'], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'pipe'
  });

  // Wait for server to start
  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Server listening on port')) {
        resolve();
      }
    });
    setTimeout(resolve, 2000);
  });

  console.log(`[Filmstrip Audit] Express production server running on http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();

  // Track console errors and hydration warnings
  const consoleErrors = [];
  const hydrationWarnings = [];
  const network404s = [];

  page.on('console', (msg) => {
    const text = msg.text();
    if (msg.type() === 'error') {
      consoleErrors.push(text);
    }
    if (text.includes('Hydration') || text.includes('hydrat') || text.includes('did not match')) {
      hydrationWarnings.push(text);
    }
  });

  page.on('response', (response) => {
    if (response.status() >= 400) {
      network404s.push(`${response.status()} - ${response.url()}`);
    }
  });

  // Enable CDP Network Throttling (Slow 4G / Fast 3G simulation)
  const client = await context.newCDPSession(page);
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 100, // 100ms RTT
    downloadThroughput: (1.5 * 1024 * 1024) / 8, // 1.5 Mbps
    uploadThroughput: (750 * 1024) / 8,
  });

  console.log('[Filmstrip Audit] Emulating Network Throttling & Navigation...');

  // Navigate to local production page
  const response = await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'commit' });
  const navStartTime = Date.now();

  const sampleIntervals = [0, 50, 100, 300, 800, 1500, 3000];
  const filmstripResults = [];
  let testFailed = false;

  for (const targetMs of sampleIntervals) {
    const elapsed = Date.now() - navStartTime;
    const waitNeeded = targetMs - elapsed;
    if (waitNeeded > 0) {
      await page.waitForTimeout(waitNeeded);
    }

    const actualMs = Date.now() - navStartTime;
    const screenshotPath = path.join(ARTIFACTS_DIR, `filmstrip_frame_${targetMs}ms.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    // Validate DOM state at this frame
    const h1Elements = await page.$$eval('h1', (els) => els.map((el) => el.innerText.trim()));
    const headerHeight = await page.$eval('header', (el) => el.getBoundingClientRect().height).catch(() => 0);
    const bodyText = await page.evaluate(() => document.body.innerText.trim());
    const isUnstyled = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return true;
      const comp = window.getComputedStyle(h1);
      return comp.color === 'rgb(0, 0, 258)' || comp.fontSize === '32px'; // Browser default unstyled H1
    });

    const framePass =
      h1Elements.length === 1 &&
      h1Elements[0].includes('Yüksekteki Güvenliğiniz') &&
      headerHeight > 50 &&
      !isUnstyled;

    if (!framePass) {
      testFailed = true;
    }

    filmstripResults.push({
      targetMs: `${targetMs}ms`,
      actualMs: `${actualMs}ms`,
      h1Count: h1Elements.length,
      h1Text: h1Elements[0] ? h1Elements[0].substring(0, 35) + '...' : 'NONE',
      headerHeight: `${headerHeight}px`,
      isUnstyled: isUnstyled ? 'YES (FAIL)' : 'NO (PASS)',
      status: framePass ? 'PASS' : 'FAIL',
      screenshot: `filmstrip_frame_${targetMs}ms.png`
    });
  }

  await browser.close();
  server.kill();

  console.log('\n================================ FILMSTRIP AUDIT REPORT ================================');
  console.table(filmstripResults);
  console.log('========================================================================================\n');

  console.log('Console Errors:', consoleErrors.length === 0 ? '0 (PASS)' : consoleErrors);
  console.log('Hydration Warnings:', hydrationWarnings.length === 0 ? '0 (PASS)' : hydrationWarnings);
  console.log('Network 404 Errors:', network404s.length === 0 ? '0 (PASS)' : network404s);

  if (consoleErrors.length > 0 || hydrationWarnings.length > 0 || network404s.length > 0) {
    testFailed = true;
  }

  if (testFailed) {
    console.error('\n[Filmstrip Audit] FAIL: One or more filmstrip frames or network checks failed.');
    process.exit(1);
  } else {
    console.log('\n[Filmstrip Audit] SUCCESS: All 7 filmstrip frames rendered consistently with zero FOUC/hydration errors!');
    process.exit(0);
  }
};

runFilmstripTest();
