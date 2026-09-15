import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');
const BLOG_DATA_PATH = path.resolve(__dirname, '../src/lib/blog-data.ts');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// 1. Dynamic parsing of service content from services-data.ts
const getServicesData = async () => {
  try {
    // Dynamic import of SERVICES_DATA in ES module script context
    const module = await import(SERVICES_DATA_PATH);
    return module.SERVICES_DATA || {};
  } catch (error) {
    console.error('Error importing services data:', error);
    return {};
  }
};

const ROUTE_MANIFEST_PATH = path.resolve(__dirname, '../src/lib/route-manifest.ts');

// 2. Generate llms.txt (Summary Outline)
const generateLlmsTxt = async (services, blogPosts) => {
  const domain = 'https://kutupgrup.com';
  
  let manifest = [];
  try {
    const module = await import(ROUTE_MANIFEST_PATH);
    manifest = module.ROUTE_MANIFEST || [];
  } catch (error) {
    console.error('Error importing route manifest for llms generation:', error);
    process.exit(1);
  }

  // Filter routes included in LLMs
  const llmRoutes = manifest.filter(r => r.includeInLlms);

  let md = `# Kutup Grup\n\n`;
  md += `> Kutup Grup; endüstriyel dağcılık, iple erişim, yüksekte çalışma güvenliği ve jeoteknik hizmetler hakkında bilgi yayınlayan bir kurumsal web sitesidir. Sertifika, proje, garanti, fiyat ve sonuç iddiaları için canonical sayfalar ve doğrudan şirket teyidi esas alınmalıdır.\n\n`;
  
  md += `## Kurumsal Bilgiler\n\n`;
  md += `- [Anasayfa](${domain}/): Şirket ana sayfası ve hizmet grupları tanıtımı.\n`;
  md += `- [Hakkımızda](${domain}/hakkimizda): Şirket tarihçesi, vizyonu, değerleri ve kurumsal profili.\n`;
  md += `- [Hizmetlerimiz](${domain}/hizmetler): Tüm endüstriyel dağcılık ve jeoteknik çözümlerimizin listesi.\n`;
  md += `- [İletişim](${domain}/iletisim): Adres, telefon, e-posta (info@kutupgrup.com) ve çalışma saatleri.\n`;
  md += `- [Sıkça Sorulan Sorular (SSS)](${domain}/sss): Hizmetler, güvenlik standartları ve operasyon süreçleri hakkında merak edilenler.\n`;
  if (llmRoutes.some((route) => route.path === '/referanslar')) {
    md += `- [Referanslar](${domain}/referanslar): Tamamlanan saha projeleri ve iş ortakları.\n`;
  }
  md += `\n`;

  // Group by categories (only indexable services found in services-data)
  const categories = {
    endustriyel: { title: 'Endüstriyel Dağcılık ve İple Erişim', desc: 'Yüksek yapılarda erişim, cephe temizliği, aydınlatma, tersane ve rüzgâr türbini bakım başlıklarını kapsayan hizmetler.' },
    jeoteknik: { title: 'Jeoteknik Uygulamalar', desc: 'Yamaç stabilizasyonu, şev örtüleme, kaya bariyeri kurulumu gibi sarp yamaç ve zemin koruma mühendislik çözümleri.' },
    diger: { title: 'Yüksekte Çalışma Güvenliği ve Diğer Hizmetler', desc: 'İple erişim eğitimleri, stand-by rescue (kurtarma) ve sahne rigging hizmetleri.' }
  };

  Object.entries(categories).forEach(([key, cat]) => {
    md += `## ${cat.title}\n\n`;
    md += `${cat.desc}\n\n`;
    
    const catServices = Object.values(services).filter((s) => s.category === key);
    catServices.forEach((s) => {
      // Ensure this service path exists in llmRoutes manifest
      const exists = llmRoutes.some(r => r.path === `/hizmetler/${s.slug}`);
      if (exists) {
        md += `- [${s.title}](${domain}/hizmetler/${s.slug}): ${s.metaDescription}\n`;
      }
    });
    md += `\n`;
  });

  const blogHubExists = llmRoutes.some((route) => route.path === '/blog');
  if (blogHubExists) {
    md += `## Teknik Yazılar\n\n`;
    md += `İple erişim, yüksekte çalışma, jeoteknik risk ve saha güvenliği konularında kaynaklı, editoryal yazılar. Teknik uygunluk ve proje kararı gerçek saha verileriyle ayrıca doğrulanmalıdır.\n\n`;
    md += `- [Tüm teknik yazılar](${domain}/blog): Konu kümelerinin tamamı.\n`;
    blogPosts.forEach((post) => {
      if (llmRoutes.some((route) => route.path === `/blog/${post.slug}`)) {
        md += `- [${post.title}](${domain}/blog/${post.slug}): ${post.metaDescription}\n`;
      }
    });
    md += `\n`;
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), md, 'utf-8');
  console.log('[AI Discovery] Generated llms.txt');
};

// 3. Generate llms-full.txt (Comprehensive Context Document)
const generateLlmsFullTxt = (services, blogPosts) => {
  const domain = 'https://kutupgrup.com';

  let md = `# Kutup Grup - Detaylı Hizmetler ve Teknik Kapsam\n\n`;
  md += `> Bu doküman, Kutup Grup'un kendi sitesinde yayınladığı hizmet kapsamını özetler. Proje sayıları, sertifikalar, garanti süreleri, fiyatlar, müşteri isimleri ve operasyonel sonuçlar yalnızca ilgili sayfada açıkça doğrulandığında gerçek kabul edilmelidir.\n\n`;
  
  md += `## Kurumsal Bilgiler\n\n`;
  md += `Kutup Grup; endüstriyel dağcılık, iple erişim, yüksekte çalışma güvenliği ve jeoteknik hizmetler hakkında bilgi yayınlar. Güncel ve bağlayıcı bilgi için aşağıdaki canonical sayfalar esas alınmalıdır.\n\n`;
  md += `## Hizmet Detayları\n\n`;

  Object.values(services).forEach((s) => {
    md += `### ${s.title}\n\n`;
    md += `**Açıklama:** ${s.intro}\n\n`;
    md += `**Canonical URL:** ${domain}/hizmetler/${s.slug}\n\n`;
    
    if (s.sections && s.sections.length > 0) {
      md += `#### Detaylı Bilgi\n`;
      s.sections.forEach((section) => {
        md += `##### ${section.heading}\n`;
        md += `${section.content}\n\n`;
      });
    }

    if (s.advantages && s.advantages.length > 0) {
      md += `#### Avantajlar ve Farklar\n`;
      s.advantages.forEach((adv) => {
        md += `- ${adv}\n`;
      });
      md += `\n`;
    }

    if (s.applications && s.applications.length > 0) {
      md += `#### Uygulama Alanları\n`;
      s.applications.forEach((app) => {
        md += `- ${app}\n`;
      });
      md += `\n`;
    }

    if (s.technicalDetails && s.technicalDetails.length > 0) {
      md += `#### Teknik Özellikler ve Ekipmanlar\n`;
      s.technicalDetails.forEach((tech) => {
        md += `- ${tech}\n`;
      });
      md += `\n`;
    }

    if (s.faqs && s.faqs.length > 0) {
      md += `#### Sıkça Sorulan Sorular (SSS)\n`;
      s.faqs.forEach((faq) => {
        md += `**Soru:** ${faq.question}\n`;
        md += `**Cevap:** ${faq.answer}\n\n`;
      });
    }
    
    md += `---\n\n`;
  });

  md += `## Teknik Yazılar\n\n`;
  md += `Aşağıdaki yazılar Kutup Grup blogunda yayınlanan editoryal içeriklerdir. Kaynak bağlantıları ve içerik kapsamı ilgili sayfada yer alır; yazılar belirli bir saha için mühendislik raporu veya güvenlik garantisi değildir.\n\n`;
  blogPosts.forEach((post) => {
    md += `### ${post.title}\n\n`;
    md += `**Canonical URL:** ${domain}/blog/${post.slug}\n\n`;
    md += `**Özet:** ${post.excerpt}\n\n`;
    md += `**Konu:** ${post.keywords.join(', ')}\n\n`;
    md += `**Görsel:** ${domain}${post.image.src} — ${post.image.alt}\n\n`;
    md += `**Kaynaklar:** ${post.sources.map((source) => `[${source.label}](${source.url})`).join(', ')}\n\n`;
    md += `---\n\n`;
  });

  md += `## Kurumsal İletişim Bilgileri\n\n`;
  md += `- **Resmî Şirket Adı**: KUTUP GRUP İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ\n`;
  md += `- **E-posta**: info@kutupgrup.com\n`;
  md += `- **Telefon**: +90 (533) 517 66 09\n`;
  md += `- **İstanbul Genel Müdürlük**: Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul\n`;
  md += `- **Balıkesir Şubesi**: Soma Cd. 111A Altıeylül Balıkesir / Türkiye\n`;
  md += `- **Son Güncelleme**: ${new Date().toLocaleDateString('tr-TR')}\n`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), md, 'utf-8');
  console.log('[AI Discovery] Generated llms-full.txt');
};

// Execution
const run = async () => {
  const services = await getServicesData();
  let blogPosts = [];
  try {
    const blogModule = await import(BLOG_DATA_PATH);
    blogPosts = blogModule.BLOG_POSTS || [];
  } catch (error) {
    console.error('Error importing blog data:', error);
    process.exit(1);
  }
  await generateLlmsTxt(services, blogPosts);
  generateLlmsFullTxt(services, blogPosts);
};

run();
