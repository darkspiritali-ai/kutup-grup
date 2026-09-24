import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '@/lib/services-data';
import { getBlogPost } from '@/lib/blog-data';

interface MetaData {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  section?: string;
}

const SITE_URL = 'https://kutupgrup.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/slope-stabilization.png`;

const META_MAP: Record<string, MetaData> = {
  '/': {
    title: 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler',
    description: 'Heyelan, kaya ve taş düşmesi riskleri, iple erişim, jeoteknik uygulamalar ve yüksek yapı çalışmalarında kapsamı birlikte netleştirmeye yönelik bilgi alın.'
  },
  '/hakkimizda': {
    title: 'Hakkımızda - Kutup Grup',
    description: 'Kutup Grup\'un endüstriyel dağcılık, iple erişim, yüksek yapı ve jeoteknik uygulamalara yaklaşımını inceleyin.'
  },
  '/hizmetler': {
    title: 'Hizmetlerimiz - Kutup Grup',
    description: 'Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik uygulama başlıklarını inceleyin.'
  },
  '/iletisim': {
    title: 'İletişim - Kutup Grup',
    description: 'Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz.'
  },
  '/sss': {
    title: 'Sıkça Sorulan Sorular - Kutup Grup',
    description: 'Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları.'
  },
  '/blog': {
    title: 'Kutup Grup Blog - İple Erişim ve Jeoteknik Yazılar',
    description: 'Endüstriyel dağcılık, iple erişim, yüksekte çalışma güvenliği ve jeoteknik uygulamalar hakkında kaynaklı teknik yazılar.'
  },
  '/referanslar': {
    title: 'Referanslarımız - Kutup Grup',
    description: 'Kutup Grup referans ve saha proje arşivi hazırlanıyor. Hizmet kapsamımız ve güncel iletişim bilgilerimiz için canonical sayfaları inceleyin.',
    robots: 'noindex,follow'
  },
  '/gizlilik-politikasi': {
    title: 'Gizlilik Politikası ve KVKK - Kutup Grup',
    description: 'Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı yasal aydınlatma metnimiz.',
    robots: 'noindex,follow'
  },
  '/cerez-politikasi': {
    title: 'Çerez Politikası - Kutup Grup',
    description: 'Web sitemizde kullanılan çerezler, çerez türleri ve bunların yönetimi hakkında bilgilendirme.',
    robots: 'noindex,follow'
  }
};

const setNamedMeta = (name: string, content: string) => {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setPropertyMeta = (property: string, content: string) => {
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const removePropertyMeta = (property: string) => {
  document.head.querySelector(`meta[property="${property}"]`)?.remove();
};

const setTwitterMeta = (name: string, content: string) => {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateMeta = (
  title: string,
  description: string,
  canonicalUrl: string,
  robots = 'index,follow',
  image = DEFAULT_OG_IMAGE,
  metaOptions: Pick<MetaData, 'type' | 'publishedAt' | 'updatedAt' | 'section'> = {}
) => {
  document.title = title;
  setNamedMeta('description', description);
  setNamedMeta('robots', robots);

  let linkCanonical = document.head.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  setPropertyMeta('og:title', title);
  setPropertyMeta('og:description', description);
  setPropertyMeta('og:url', canonicalUrl);
  setPropertyMeta('og:site_name', 'Kutup Grup');
  setPropertyMeta('og:locale', 'tr_TR');
  setPropertyMeta('og:type', metaOptions.type || 'website');
  setPropertyMeta('og:image', image);
  setPropertyMeta('og:image:alt', `${title} - Kutup Grup`);

  if (metaOptions.type === 'article') {
    if (metaOptions.publishedAt) setPropertyMeta('article:published_time', metaOptions.publishedAt);
    if (metaOptions.updatedAt) setPropertyMeta('article:modified_time', metaOptions.updatedAt);
    if (metaOptions.section) setPropertyMeta('article:section', metaOptions.section);
  } else {
    removePropertyMeta('article:published_time');
    removePropertyMeta('article:modified_time');
    removePropertyMeta('article:section');
  }

  setTwitterMeta('twitter:card', 'summary_large_image');
  setTwitterMeta('twitter:title', title);
  setTwitterMeta('twitter:description', description);
  setTwitterMeta('twitter:image', image);
};

export default function MetaHelper() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Try matching static metadata
    let meta = META_MAP[pathname];

    // 2. Handle dynamic service details route
    if (!meta && pathname.startsWith('/hizmetler/')) {
      const slug = pathname.replace('/hizmetler/', '');
      const service = SERVICES_DATA[slug];
      if (service) {
        updateMeta(
          service.title + ' - Kutup Grup',
          service.metaDescription,
          `${SITE_URL}/hizmetler/${service.slug}`,
          'index,follow',
          service.heroImage ? `${SITE_URL}${service.heroImage}` : DEFAULT_OG_IMAGE
        );
      }
      return;
    }

    if (!meta && pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      const post = getBlogPost(slug);
      if (post) {
        updateMeta(
          post.title,
          post.metaDescription,
          `${SITE_URL}/blog/${post.slug}`,
          'index,follow',
          `${SITE_URL}${post.image.src}`,
          {
            type: 'article',
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            section: post.category,
          }
        );
      } else {
        updateMeta(
          'Sayfa Bulunamadı - Kutup Grup',
          'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
          `${SITE_URL}${pathname}`,
          'noindex,follow',
          DEFAULT_OG_IMAGE
        );
      }
      return;
    }

    if (meta) {
      updateMeta(
        meta.title,
        meta.description,
        `${SITE_URL}${pathname === '/' ? '' : pathname}`,
        meta.robots || 'index,follow',
        meta.image || DEFAULT_OG_IMAGE
      );
    } else {
      // NotFound page or unknown routes
      updateMeta(
        'Sayfa Bulunamadı - Kutup Grup',
        'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
        `${SITE_URL}${pathname === '/' ? '' : pathname}`,
        'noindex,follow',
        DEFAULT_OG_IMAGE
      );
    }
  }, [pathname]);

  return null;
}
