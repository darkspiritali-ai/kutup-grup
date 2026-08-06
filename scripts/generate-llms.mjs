import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICES_DATA_PATH = path.resolve(__dirname, '../src/lib/services-data.ts');
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
const generateLlmsTxt = async (services) => {
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
  md += `> Kutup Grup, endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır.\n\n`;
  
  md += `## Kurumsal Bilgiler\n\n`;
  md += `- [Anasayfa](${domain}/): Şirket ana sayfası ve hizmet grupları tanıtımı.\n`;
  md += `- [Hakkımızda](${domain}/hakkimizda): Şirket tarihçesi, vizyonu, değerleri ve kurumsal profili.\n`;
  md += `- [Hizmetlerimiz](${domain}/hizmetler): Tüm endüstriyel dağcılık ve jeoteknik çözümlerimizin listesi.\n`;
  md += `- [İletişim](${domain}/iletisim): Adres, telefon, e-posta (info@kutupgrup.com) ve çalışma saatleri.\n`;
  md += `- [Sıkça Sorulan Sorular (SSS)](${domain}/sss): Hizmetler, güvenlik standartları ve operasyon süreçleri hakkında merak edilenler.\n`;
  md += `- [Referanslar](${domain}/referanslar): Tamamlanan saha projeleri ve iş ortakları.\n\n`;

  // Group by categories (only indexable services found in services-data)
  const categories = {
    endustriyel: { title: 'Endüstriyel Dağcılık ve İple Erişim', desc: 'İskele veya vinç gerektirmeden, yüksek yapılarda iple erişim teknikleriyle sunulan cephe temizliği, aydınlatma, tersane ve rüzgar türbini hizmetleri.' },
    jeoteknik: { title: 'Jeoteknik Uygulamalar', desc: 'Yamaç stabilizasyonu, şev örtüleme, kaya bariyeri kurulumu gibi sarp yamaç ve zemin koruma mühendislik çözümleri.' },
    diger: { title: 'Yüksekte Çalışma Güvenliği ve Diğer Hizmetler', desc: 'IRATA/SPRAT eğitimleri, stand-by rescue (kurtarma) ve sahne rigging hizmetleri.' }
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

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), md, 'utf-8');
  console.log('[AI Discovery] Generated llms.txt');
};

// 3. Generate llms-full.txt (Comprehensive Context Document)
const generateLlmsFullTxt = (services) => {
  const domain = 'https://kutupgrup.com';

  const verifiedClaims = [
    { text: 'Kutup Grup, tüm operasyonlarında sıfır kaza (zero-accident) prensibini benimser.', sourceType: 'company-record', sourceReference: 'ISG el kitabı', verified: true },
    { text: 'IRATA (Industrial Rope Access Trade Association): İple erişim çalışmalarında küresel standartlara tam uyumlu hizmet.', sourceType: 'certificate', sourceReference: 'IRATA Üyelik No/Teknisyen Sertifikaları', verified: true },
    { text: 'SPRAT (Society of Professional Rope Access Technicians): Profesyonel iple erişim teknisyenliği standartları kapsamında hizmet yetkinliği.', sourceType: 'certificate', sourceReference: 'SPRAT Teknisyen Sertifikaları', verified: true },
    { text: 'ISO 9001: Kalite Yönetim Sistemi standartlarında operasyon süreçleri.', sourceType: 'certificate', sourceReference: 'ISO 9001 Belgesi', verified: true },
    { text: 'ISO 14001: Çevre Yönetim Sistemi standartlarına tam uyum.', sourceType: 'certificate', sourceReference: 'ISO 14001 Belgesi', verified: true },
    { text: 'ISO 45001: İş Sağlığı ve Güvenliği Yönetim Sistemi sertifikalı çalışma standartları.', sourceType: 'certificate', sourceReference: 'ISO 45001 Belgesi', verified: true }
  ];
  
  let md = `# Kutup Grup - Detaylı Hizmetler ve Teknik Kapsam\n\n`;
  md += `> Bu doküman, Kutup Grup tarafından sunulan endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik çözümler hakkında detaylı teknik bilgiler, metodolojiler ve standartları içerir.\n\n`;
  
  md += `## Kurumsal Standartlar ve Güvenlik Yaklaşımı\n\n`;
  md += `Kutup Grup, tüm operasyonlarında sıfır kaza prensibini benimser. Bu doğrultuda doğrulanmış kurumsal yetkinlikler ve sertifikasyonlar:\n`;

  verifiedClaims.forEach(claim => {
    if (claim.verified) {
      md += `- ${claim.text} (Kaynak: ${claim.sourceReference} [${claim.sourceType}])\n`;
    }
  });
  
  md += `\n`;
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
  await generateLlmsTxt(services);
  generateLlmsFullTxt(services);
};

run();
