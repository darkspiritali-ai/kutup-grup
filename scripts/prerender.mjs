import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const DIST_SERVER_DIR = path.resolve(__dirname, '../dist-server');
const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');
const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');

const buildPrerenderPages = async () => {
  console.log('[Prerender] Starting real React SSR pre-render page generation...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('FAIL: dist directory does not exist. Run npm run build first.');
    process.exit(1);
  }

  const serverEntryPath = path.join(DIST_SERVER_DIR, 'entry-server.mjs');
  if (!fs.existsSync(serverEntryPath)) {
    console.error('FAIL: dist-server/entry-server.mjs not found. Ensure Vite SSR build runs before prerender.');
    process.exit(1);
  }

  // Import SSR render function
  let render;
  try {
    const serverModule = await import(serverEntryPath);
    render = serverModule.render;
  } catch (err) {
    console.error('Error importing dist-server/entry-server.mjs:', err);
    process.exit(1);
  }

  // Load SERVICES_DATA
  let services = {};
  try {
    const servicesModule = await import(SERVICES_DATA_PATH);
    services = servicesModule.SERVICES_DATA || {};
  } catch (err) {
    console.error('Error loading services data for prerender:', err);
    process.exit(1);
  }

  // Load original index.html base template
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('FAIL: dist/index.html base template not found.');
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

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
  const prerenderRoutes = manifest.filter((r) => r.prerender);

  const prerenderRoute = (routePath, seoData) => {
    let outputHtml = baseHtml;

    // Render exact React component tree to string via react-dom/server
    const appHtml = render(routePath);

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

    // Inject exact React SSR markup into <div id="root">
    outputHtml = outputHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (routePath === '/') {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), outputHtml, 'utf-8');
      console.log(`[Prerender] Updated main index.html for: /`);
    } else {
      const cleanPath = decodeURIComponent(routePath);
      const targetDir = path.join(DIST_DIR, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), outputHtml, 'utf-8');
      console.log(`[Prerender] Generated static HTML for: ${cleanPath}`);
    }
  };

  // Pre-render each route using exact React component rendering
  prerenderRoutes.forEach((route) => {
    let title = 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler';
    let description = 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.';
    const canonical = `https://kutupgrup.com${route.path === '/' ? '' : route.path}`;

    if (route.type === 'service') {
      const slug = route.path.replace('/hizmetler/', '');
      const s = services[slug];
      if (s) {
        title = `${s.title} - Kutup Grup`;
        description = s.metaDescription;
      } else {
        title = `${slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} - Kutup Grup`;
      }
    } else {
      switch (route.path) {
        case '/':
          title = 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler';
          description = 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.';
          break;
        case '/hakkimizda':
          title = 'Hakkımızda - Kutup Grup';
          description = 'Kutup Grup, endüstriyel dağcılık ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır.';
          break;
        case '/hizmetler':
          title = 'Hizmetlerimiz - Kutup Grup';
          description = 'Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik koruma sistemleri alanlarındaki profesyonel hizmetlerimizi inceleyin.';
          break;
        case '/iletisim':
          title = 'İletişim - Kutup Grup';
          description = 'Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz.';
          break;
        case '/sss':
          title = 'Sıkça Sorulan Sorular - Kutup Grup';
          description = 'Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları.';
          break;
        case '/referanslar':
          title = 'Referanslarımız - Kutup Grup';
          description = 'Kutup Grup olarak başarıyla tamamladığımız endüstriyel dağcılık ve jeoteknik projelerimiz.';
          break;
        case '/gizlilik-politikasi':
          title = 'Gizlilik Politikası - Kutup Grup';
          description = 'Kutup Grup Gizlilik Politikası, KVKK aydınlatma metni ve kişisel verilerin korunması kanunu çerçevesindeki yasal haklarınız.';
          break;
        case '/cerez-politikasi':
          title = 'Çerez Politikası - Kutup Grup';
          description = 'Kutup Grup Çerez Politikası, web sitemizde kullanılan çerezler, çerezlerin kullanım amaçları ve yönetimi hakkında detaylar.';
          break;
      }
    }

    prerenderRoute(route.path, { title, description, canonical });
  });

  // Create dist/404.html page directly
  const app404Html = render('/404');
  const notFoundHtml = baseHtml
    .replace(/<title>([\s\S]*?)<\/title>/i, '<title>Sayfa Bulunamadı - Kutup Grup</title>')
    .replace('<div id="root"></div>', `<div id="root">${app404Html}</div>`);
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf-8');
  console.log('[Prerender] Generated static dist/404.html');

  console.log('[Prerender] Static HTML pages pre-render compilation complete.');
};

buildPrerenderPages();
