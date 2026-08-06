import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaData {
  title: string;
  description: string;
  canonical?: string;
}

const META_MAP: Record<string, MetaData> = {
  '/': {
    title: 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler',
    description: 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.'
  },
  '/hakkimizda': {
    title: 'Hakkımızda - Kutup Grup',
    description: 'Kutup Grup, endüstriyel dağcılık ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır.'
  },
  '/hizmetler': {
    title: 'Hizmetlerimiz - Kutup Grup',
    description: 'Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik koruma sistemleri alanlarındaki profesyonel hizmetlerimizi inceleyin.'
  },
  '/iletisim': {
    title: 'İletişim - Kutup Grup',
    description: 'Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz.'
  },
  '/sss': {
    title: 'Sıkça Sorulan Sorular - Kutup Grup',
    description: 'Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları.'
  },
  '/referanslar': {
    title: 'Referanslarımız - Kutup Grup',
    description: 'Kutup Grup olarak başarıyla tamamladığımız endüstriyel dağcılık ve jeoteknik projelerimiz.'
  },
  '/gizlilik-politikasi': {
    title: 'Gizlilik Politikası ve KVKK - Kutup Grup',
    description: 'Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı yasal aydınlatma metnimiz.'
  },
  '/cerez-politikasi': {
    title: 'Çerez Politikası - Kutup Grup',
    description: 'Web sitemizde kullanılan çerezler, çerez türleri ve bunların yönetimi hakkında bilgilendirme.'
  }
};

export default function MetaHelper() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Try matching static metadata
    let meta = META_MAP[pathname];

    // 2. Handle dynamic service details route
    if (!meta && pathname.startsWith('/hizmetler/')) {
      const slug = pathname.replace('/hizmetler/', '');
      // Dynamic import of services-data to avoid bundling issues
      // Since it's dynamic, we can fetch it synchronously from window/global metadata or set it after checking
      // But for client runtime, importing SERVICES_DATA from '@' is clean and fast:
      import('@/lib/services-data').then((module) => {
        const service = module.SERVICES_DATA[slug];
        if (service) {
          updateMeta(service.title + ' - Kutup Grup', service.metaDescription, `https://kutupgrup.com/hizmetler/${service.slug}`);
        }
      });
      return;
    }

    if (meta) {
      updateMeta(meta.title, meta.description, `https://kutupgrup.com${pathname === '/' ? '' : pathname}`);
    } else {
      // NotFound page or unknown routes
      updateMeta('Sayfa Bulunamadı - Kutup Grup', 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.');
    }
  }, [pathname]);

  const updateMeta = (title: string, description: string, canonicalUrl?: string) => {
    // Document Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const finalCanonical = canonicalUrl || `https://kutupgrup.com${pathname === '/' ? '' : pathname}`;
    linkCanonical.setAttribute('href', finalCanonical);
  };

  return null;
}
