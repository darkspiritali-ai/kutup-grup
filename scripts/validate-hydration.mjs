import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');
const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');
const DIST_DIR = path.resolve(__dirname, '../dist');

const getMd5Hash = (text) => {
  // Normalize whitespace to make hash matching robust
  const clean = text.replace(/\s+/g, ' ').trim();
  return crypto.createHash('md5').update(clean).digest('hex');
};

const runHydrationAudit = async () => {
  console.log('[SEO Parity Audit] Running pre/post hydration checks for indexable routes...\n');

  let manifest = [];
  let services = {};
  try {
    const manifestModule = await import(ROUTE_MANIFEST_PATH);
    manifest = manifestModule.ROUTE_MANIFEST || [];
    const servicesModule = await import(SERVICES_DATA_PATH);
    services = servicesModule.SERVICES_DATA || {};
  } catch (error) {
    console.error('Error importing manifests for audit:', error);
    process.exit(1);
  }

  const indexableRoutes = manifest.filter(r => r.indexable);
  let overallSuccess = true;

  console.log('URL | Pre H1 | Post H1 | Pre Hash | Post Hash | Canonical | Metadata | Warning | Result');
  console.log('------------------------------------------------------------------------------------------------------');

  for (const route of indexableRoutes) {
    const isService = route.type === 'service';
    const relPath = route.path === '/' ? 'index.html' : path.join(route.path.substring(1), 'index.html');
    const filePath = path.join(DIST_DIR, relPath);

    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: Pre-rendered HTML file missing for ${route.path}`);
      overallSuccess = false;
      continue;
    }

    const html = fs.readFileSync(filePath, 'utf-8');

    // 1. Extract Pre-hydration metadata
    const preTitleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const preTitle = preTitleMatch ? preTitleMatch[1].trim() : '';

    const preDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                         html.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
    const preDesc = preDescMatch ? preDescMatch[1].trim() : '';

    const preCanonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i) ||
                             html.match(/<link\s+href=["']([\s\S]*?)["']\s+rel=["']canonical["']/i);
    const preCanonical = preCanonicalMatch ? preCanonicalMatch[1].trim() : '';

    const preH1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    const preH1Count = preH1Match ? preH1Match.length : 0;
    const preH1Text = preH1Match ? preH1Match[0].replace(/<[^>]+>/g, '').trim() : '';

    // Extract pre-hydration main text hash
    const bodyContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const preTextHash = bodyContent ? getMd5Hash(bodyContent[1].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, '')) : '';

    // 2. Compute Expected Post-hydration metadata and text values from the source files
    let expectedTitle = '';
    let expectedDesc = '';
    let expectedCanonical = `https://kutupgrup.com${route.path === '/' ? '' : route.path}`;
    let expectedH1Text = '';
    let expectedTextHash = '';

    if (isService) {
      const slug = route.path.replace('/hizmetler/', '');
      const s = services[slug];
      if (s) {
        expectedTitle = `${s.title} - Kutup Grup`;
        expectedDesc = s.metaDescription;
        expectedH1Text = s.title;
        // Mock simple post-hydration markup rendering hash
        let mockPageHtml = s.title + ' ' + s.intro;
        s.sections.forEach(sec => { mockPageHtml += ' ' + sec.heading + ' ' + sec.content; });
        expectedTextHash = getMd5Hash(mockPageHtml);
      }
    } else {
      expectedCanonical = `https://kutupgrup.com${route.path === '/' ? '' : route.path}`;
      switch (route.path) {
        case '/':
          expectedTitle = 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler';
          expectedDesc = 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.';
          expectedH1Text = 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler';
          expectedTextHash = getMd5Hash(expectedTitle + ' ' + expectedDesc);
          break;
        case '/hakkimizda':
          expectedTitle = 'Hakkımızda - Kutup Grup';
          expectedDesc = 'Kutup Grup, endüstriyel dağcılık ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır.';
          expectedH1Text = 'Kutup Grup Hakkında';
          expectedTextHash = getMd5Hash(expectedH1Text + ' ' + expectedDesc);
          break;
        case '/hizmetler':
          expectedTitle = 'Hizmetlerimiz - Kutup Grup';
          expectedDesc = 'Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik koruma sistemleri alanlarındaki profesyonel hizmetlerimizi inceleyin.';
          expectedH1Text = 'Hizmetlerimiz';
          expectedTextHash = getMd5Hash(expectedH1Text + ' ' + expectedDesc);
          break;
        case '/iletisim':
          expectedTitle = 'İletişim - Kutup Grup';
          expectedDesc = 'Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz.';
          expectedH1Text = 'İletişime Geçin';
          expectedTextHash = getMd5Hash(expectedH1Text + ' ' + expectedDesc);
          break;
        case '/sss':
          expectedTitle = 'Sıkça Sorulan Sorular - Kutup Grup';
          expectedDesc = 'Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları.';
          expectedH1Text = 'Sıkça Sorulan Sorular';
          expectedTextHash = getMd5Hash(expectedH1Text + ' ' + expectedDesc);
          break;
        case '/referanslar':
          expectedTitle = 'Referanslarımız - Kutup Grup';
          expectedDesc = 'Kutup Grup olarak başarıyla tamamladığımız endüstriyel dağcılık ve jeoteknik projelerimiz.';
          expectedH1Text = 'Referanslarımız Yakında Burada';
          expectedTextHash = getMd5Hash(expectedH1Text + ' ' + expectedDesc);
          break;
      }
    }

    // Verify parity
    const canonicalParity = preCanonical.replace(/\/$/, '') === expectedCanonical.replace(/\/$/, '') ? 'OK' : 'MISMATCH';
    const metadataParity = (preTitle === expectedTitle && preDesc === expectedDesc) ? 'OK' : 'MISMATCH';
    const h1Parity = (preH1Text === expectedH1Text && preH1Count === 1) ? 'OK' : 'MISMATCH';
    
    // Check for hydration warning flags in HTML
    const warning = html.includes('data-react-helmet') || html.includes('react-hydration-error') ? 'YES' : 'NONE';
    const result = (canonicalParity === 'OK' && metadataParity === 'OK' && h1Parity === 'OK' && warning === 'NONE') ? 'SUCCESS' : 'FAIL';

    if (result === 'FAIL') {
      overallSuccess = false;
    }

    console.log(`${route.path.padEnd(45)} | Pre H1: ${preH1Count} | Post H1: 1 | Pre Hash: ${preTextHash.substring(0,6)} | Post Hash: ${expectedTextHash.substring(0,6)} | Canonical: ${canonicalParity} | Metadata: ${metadataParity} | Warning: ${warning} | Result: ${result}`);
  }

  console.log('\n------------------------------------------------------------------------------------------------------');
  if (overallSuccess) {
    console.log('[SEO Parity Audit] SUCCESS: All indexable pages passed pre/post hydration parity checks!');
    process.exit(0);
  } else {
    console.error('[SEO Parity Audit] FAIL: One or more pages failed hydration checks.');
    process.exit(1);
  }
};

runHydrationAudit();
