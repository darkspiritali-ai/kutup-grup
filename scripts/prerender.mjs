import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');
const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');

const buildPrerenderPages = async () => {
  console.log('[Prerender] Starting pre-render page generation...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('FAIL: dist directory does not exist. Run npm run build first.');
    process.exit(1);
  }

  // Load original index.html as the base template
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('FAIL: dist/index.html base template not found.');
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  // Load SERVICES_DATA
  let services = {};
  try {
    const module = await import(SERVICES_DATA_PATH);
    services = module.SERVICES_DATA || {};
  } catch (err) {
    console.error('Error loading services for pre-rendering:', err);
    process.exit(1);
  }

  // Load ROUTE_MANIFEST
  let manifest = [];
  try {
    const manifestModule = await import(ROUTE_MANIFEST_PATH);
    manifest = manifestModule.ROUTE_MANIFEST || [];
  } catch (err) {
    console.error('Error loading route manifest for pre-rendering:', err);
    process.exit(1);
  }

  // Filter routes configured to prerender
  const prerenderRoutes = manifest.filter(r => r.prerender);

  // Helper function to write subdirectories and copy/replace index.html
  const prerenderRoute = (routePath, seoData, realPageHtml = '') => {
    let outputHtml = baseHtml;

    // Inject Title tag
    outputHtml = outputHtml.replace(
      /<title>([\s\S]*?)<\/title>/i,
      `<title>${seoData.title}</title>`
    );

    // Inject Meta Description tag
    const descRegex = /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i;
    const descRegexAlt = /<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i;
    const newMetaDesc = `<meta name="description" content="${seoData.description}"`;
    
    if (outputHtml.match(descRegex)) {
      outputHtml = outputHtml.replace(descRegex, newMetaDesc);
    } else if (outputHtml.match(descRegexAlt)) {
      outputHtml = outputHtml.replace(descRegexAlt, newMetaDesc);
    } else {
      outputHtml = outputHtml.replace('</head>', `  ${newMetaDesc}>\n  </head>`);
    }

    // Inject Self-Referencing Canonical Link tag
    const canonicalLink = `<link rel="canonical" href="${seoData.canonical}" />`;
    outputHtml = outputHtml.replace('</head>', `  ${canonicalLink}\n  </head>`);

    // Inject exact content html inside <div id="root"> without hiding it, mirroring exactly what CSR rendering serves
    if (realPageHtml) {
      outputHtml = outputHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${realPageHtml}</div>`
      );
    }

    if (routePath === '/') {
      // Overwrite the root index.html directly
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), outputHtml, 'utf-8');
      console.log(`[Prerender] Updated main index.html for: /`);
    } else {
      // Create subfolder and write index.html inside it
      const cleanPath = decodeURIComponent(routePath);
      const targetDir = path.join(DIST_DIR, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), outputHtml, 'utf-8');
      console.log(`[Prerender] Generated static HTML for: ${cleanPath}`);
    }
  };

  // Generate static pages matching their actual content blocks
  prerenderRoutes.forEach((route) => {
    const isService = route.type === 'service';
    let title = '';
    let description = '';
    let canonical = `https://kutupgrup.com${route.path === '/' ? '' : route.path}`;
    let realPageHtml = '';

    if (isService) {
      const slug = route.path.replace('/hizmetler/', '');
      const s = services[slug];
      if (!s) return;

      title = `${s.title} - Kutup Grup`;
      description = s.metaDescription;

      // Construct a valid static structure that mirrors the ServiceContentClient component
      realPageHtml += `<main class="service-page">`;
      realPageHtml += `<section class="service-hero">`;
      realPageHtml += `<div class="container">`;
      realPageHtml += `<div class="breadcrumb"><a href="/">Anasayfa</a> / <a href="/hizmetler">Hizmetler</a> / <span>${s.title}</span></div>`;
      realPageHtml += `<div class="service-hero-layout"><div class="service-hero-text">`;
      realPageHtml += `<h1>${s.title}</h1>`;
      realPageHtml += `<p class="service-intro">${s.intro}</p>`;
      realPageHtml += `</div></div></div></section>`;
      realPageHtml += `<section class="section"><div class="container"><div class="service-content"><article class="service-article">`;
      
      s.sections.forEach((section) => {
        realPageHtml += `<div class="content-section"><h2>${section.heading}</h2><p>${section.content}</p></div>`;
      });

      if (s.advantages.length > 0) {
        realPageHtml += `<div class="content-section"><h2>Avantajlarımız</h2><ul class="advantages-list">`;
        s.advantages.forEach((adv) => {
          realPageHtml += `<li>${adv}</li>`;
        });
        realPageHtml += `</ul></div>`;
      }

      if (s.applications.length > 0) {
        realPageHtml += `<div class="content-section"><h2>Uygulama Alanları</h2><div class="applications-grid">`;
        s.applications.forEach((app) => {
          realPageHtml += `<div class="application-card"><p>${app}</p></div>`;
        });
        realPageHtml += `</div></div>`;
      }

      if (s.technicalDetails.length > 0) {
        realPageHtml += `<div class="content-section"><h2>Teknik Detaylar</h2><ul class="tech-list">`;
        s.technicalDetails.forEach((tech) => {
          realPageHtml += `<li>${tech}</li>`;
        });
        realPageHtml += `</ul></div>`;
      }

      if (s.faqs.length > 0) {
        realPageHtml += `<div class="content-section"><h2>Sıkça Sorulan Sorular</h2><div class="faq-list">`;
        s.faqs.forEach((faq) => {
          realPageHtml += `<div class="faq-item"><h3>${faq.question}</h3><p>${faq.answer}</p></div>`;
        });
        realPageHtml += `</div></div>`;
      }

      realPageHtml += `</article></div></div></section></main>`;
    } else {
      // Define general static pages metadata & content
      switch (route.path) {
        case '/':
          title = 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler';
          description = 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.';
          realPageHtml = `<main><h1>Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler</h1><p>${description}</p></main>`;
          break;
        case '/hakkimizda':
          title = 'Hakkımızda - Kutup Grup';
          description = 'Kutup Grup, endüstriyel dağcılık ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır.';
          realPageHtml = `<main><h1>Kutup Grup Hakkında</h1><p>${description}</p></main>`;
          break;
        case '/hizmetler':
          title = 'Hizmetlerimiz - Kutup Grup';
          description = 'Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik koruma sistemleri alanlarındaki profesyonel hizmetlerimizi inceleyin.';
          realPageHtml = `<main><h1>Hizmetlerimiz</h1><p>${description}</p></main>`;
          break;
        case '/iletisim':
          title = 'İletişim - Kutup Grup';
          description = 'Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz.';
          realPageHtml = `<main><h1>İletişime Geçin</h1><p>${description}</p></main>`;
          break;
        case '/sss':
          title = 'Sıkça Sorulan Sorular - Kutup Grup';
          description = 'Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları.';
          realPageHtml = `<main><h1>Sıkça Sorulan Sorular</h1><p>${description}</p></main>`;
          break;
        case '/referanslar':
          title = 'Referanslarımız - Kutup Grup';
          description = 'Kutup Grup olarak başarıyla tamamladığımız endüstriyel dağcılık ve jeoteknik projelerimiz.';
          realPageHtml = `<main><h1>Referanslarımız Yakında Burada</h1><p>${description}</p></main>`;
          break;
        case '/gizlilik-politikasi':
          title = 'Gizlilik Politikası - Kutup Grup';
          description = 'Kutup Grup Gizlilik Politikası, KVKK aydınlatma metni ve kişisel verilerin korunması kanunu çerçevesindeki yasal haklarınız.';
          realPageHtml = `<main><h1>Gizlilik Politikası</h1><p>${description}</p></main>`;
          break;
        case '/cerez-politikasi':
          title = 'Çerez Politikası - Kutup Grup';
          description = 'Kutup Grup Çerez Politikası, web sitemizde kullanılan çerezler, çerezlerin kullanım amaçları ve yönetimi hakkında detaylar.';
          realPageHtml = `<main><h1>Çerez Politikası</h1><p>${description}</p></main>`;
          break;
      }
    }

    prerenderRoute(route.path, { title, description, canonical }, realPageHtml);
  });

  // Create dist/404.html page directly
  const notFoundHtml = baseHtml
    .replace(/<title>([\s\S]*?)<\/title>/i, '<title>Sayfa Bulunamadı - Kutup Grup</title>')
    .replace('<div id="root"></div>', '<div id="root"><h1>404 - Sayfa Bulunamadı</h1><p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p></div>');
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf-8');
  console.log('[Prerender] Generated static dist/404.html');

  console.log('[Prerender] Static HTML pages prerender compilation complete.');
};

buildPrerenderPages();
