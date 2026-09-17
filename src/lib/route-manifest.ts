export interface RouteManifestItem {
  path: string;
  type: "page" | "service" | "legal" | "api";
  indexable: boolean;
  includeInSitemap: boolean;
  includeInLlms: boolean;
  prerender: boolean;
  updatedAt?: string;
}

export const ROUTE_MANIFEST: RouteManifestItem[] = [
  // 1. General Indexable Pages
  { path: '/', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hakkimizda', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/iletisim', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/sss', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/gabion-duvar-drenaj-zemin-planlamasi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true, updatedAt: '2026-09-17' },
  { path: '/blog/sahne-rigging-yuk-plani-teslim-kontrolu', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true, updatedAt: '2026-09-17' },
  { path: '/blog/endustriyel-dagcilik-iple-erisim-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/yuksekte-calisma-guvenligi-yasam-hatti-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/sev-ortuleme-yamac-stabilizasyonu-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/yuksek-yapilarda-cephe-temizligi-iple-erisim', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/ruzgar-turbini-bakiminda-iple-erisim', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/kar-cig-kontrolu-risk-degerlendirme-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/blog/stand-by-rescue-kurtarma-plani-rehberi', type: 'page', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  // Keep the placeholder page crawlable for users, but do not present it as a finished reference archive.
  { path: '/referanslar', type: 'page', indexable: false, includeInSitemap: false, includeInLlms: false, prerender: true },

  // 2. Legal Pages (Noindex, excluded from sitemap and llms.txt per specifications)
  { path: '/gizlilik-politikasi', type: 'legal', indexable: false, includeInSitemap: false, includeInLlms: false, prerender: true },
  { path: '/cerez-politikasi', type: 'legal', indexable: false, includeInSitemap: false, includeInLlms: false, prerender: true },

  // 3. Backend API Endpoints (Noindex, no sitemap, no llms, no prerender)
  { path: '/api/contact', type: 'api', indexable: false, includeInSitemap: false, includeInLlms: false, prerender: false },
  { path: '/api/newsletter', type: 'api', indexable: false, includeInSitemap: false, includeInLlms: false, prerender: false },

  // 4. Dynamic Services Pages (Indexable, inside sitemap and llms.txt)
  { path: '/hizmetler/dis-cephe-dekoratif-aydinlatma', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/tersane-ve-offshore-hizmetleri', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/guvenlik-agi-kurulumu', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/yatay-ve-dusey-yasam-hatti', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/jeoteknik-uygulamalar', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/yamac-yuzeyi-temizleme', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/sev-ortuleme', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/hassas-endustriyel-alan-korumasi', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/kaya-bariyeri', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/deflektor-tip-ortuleme', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/moloz-bariyer', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/ormanda-iple-erisim-hizmetleri', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/stand-by-rescue-hizmeti', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/ruzgar-enerji-santralleri', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/gabion-duvar', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/sahne-isleri-rigging', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/sprat-egitimi', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/irata-egitimi', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true },
  { path: '/hizmetler/kar-ve-cig-kontrolu', type: 'service', indexable: true, includeInSitemap: true, includeInLlms: true, prerender: true }
];
