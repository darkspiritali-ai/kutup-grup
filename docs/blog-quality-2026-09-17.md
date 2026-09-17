# Blog yayın öncesi kontrolü — 17 Eylül 2026

## Kapsam ve özgünlük

Başlangıç çalışma ağacı temizdi; `main`, `git pull --ff-only origin main` ile güncel doğrulandı. Önceki sekiz makale ve slug korunmuştur. Yeni konular, yayınlanan hizmetlerin editoryal kapsamı (`service-editorial-copy.ts`) ile karşılaştırılmıştır.

| Yazı | Arama niyeti | Gövde teknik kelime sayısı | Meta açıklaması |
|---|---|---:|---:|
| `gabion-duvar-drenaj-zemin-planlamasi` | Gabion için zemin/su bilgisi toplama, teklif kapsamını karşılaştırma ve teslim | 2100 | 151 karakter |
| `sahne-rigging-yuk-plani-teslim-kontrolu` | Organizatörün yük envanteri, revizyon ve teslim koordinasyonu | 2066 | 152 karakter |

Kelime sayısı mevcut `getBlogWordCount` yöntemiyle bölüm başlıkları, paragraflar ve madde metinlerinde ölçüldü. FAQ ve kaynaklar bu sayıya dahil değildir. Sayfada/kartta kelime sayacı veya uzunluk etiketi yoktur. Yeni yazılar genel şev, erişim veya kurtarma yazılarının yeniden yazımı değildir; konuya özgü karar akışı ve varsayımsal örnek içerir. Varsayımsal örnekler gerçek müşteri/proje olarak sunulmamıştır.

## Editoryal inceleme

- Yeni müşteri, proje, ekip, ofis, sertifika, fiyat, başarı oranı, garanti veya kesin sonuç iddiası eklenmedi.
- Teknik metinlerde projeye özel boyut, kapasite veya uygulama reçetesi verilmedi.
- HSE kaynakları yerel mevzuat yerine geçirilmedi; FHWA HEC-11 belgesinin arşiv niteliği açıklandı. Maccaferri kaynağı ticari ilişki veya ürün tavsiyesi olarak sunulmadı.
- Her makale 13 anlamlı H2 bölüm, dört FAQ, üç ilgili hizmet, iki ilgili makale ve yedi gövde iç bağlantısı içerir. Genel şablon ayrıca kaynaklar, ilgili yazılar ve hizmetler başlıklarını üretir.
- Kaynaklar 17 Eylül 2026'da açılarak incelendi: Maccaferri Mass Gravity Retaining Walls; FHWA HEC-11; HSE Planning and Organising Lifting Operations, Venue and Site Design, Managing an Event, Temporary Demountable Structures. Doğrudan URL'ler makale kaynak alanlarında ve ilgili paragraflarda bulunur.

## Görseller ve keşfedilebilirlik

İki görsel imagegen ile üretildi; özgün PNG çıktılarından WebP'ye dönüştürüldü. Her biri 1774 × 887 pikseldir. Dosya adı slug ile eşleşir; alt, title, caption, boyut ve makale bağlantısı tanımlıdır. Mevcut makale şablonu görseli canonical makaleye bağlar ve yapay illüstrasyon olduğunu açıkça belirtir. Gabion görseli ölçülü uygulama detayı olarak sunulmaz.

Yeni yazılar blog envanterine ve route manifestine eklendi. İlgili iki hizmet sayfasına yeni yazı bağlantıları eklendi. Sitemap, llms.txt, llms-full.txt ve takip edilen client/SSR/prerender çıktıları build ile güncellendi. Diğer sayfalardaki üretilmiş bundle referansı değişiklikleri bu build'in parçasıdır.

## Doğrulama

- `npm run build`: PASS; client/SSR ve prerender tamamlandı.
- `npm run lint`: PASS.
- `npm run validate:blog`: PASS; on yazının tamamı kontrol edildi.
- `npm run validate:all-seo`: PASS; route, canonical, prerender, yerel HTTP/404, hydration, filmstrip, llms, hizmet SEO/iddia/UX ve blog kontrolleri tamamlandı.
- `git diff --check`: PASS.
- Yeni iki makalenin üretilmiş HTML'inde tek H1, canonical, BlogPosting, ImageObject, FAQPage ve görünür kelime etiketi bulunmaması ayrıca doğrulandı.
- Blog doğrulayıcısındaki sabit sekiz yazı koşulu envanter/route eşleşmesine çevrildi. Eksik route, yinelenen route, kapalı llms görünürlüğü, boş görsel caption ve geçersiz ilgili yazı örnekleri ayrı geçici dosyalarda beklendiği gibi reddedildi.

Build'in mevcut modül türü, statik/dinamik import ve büyük JS paketi uyarıları sürmektedir; bunlar başarısız kontrol olarak raporlanmadı veya giderilmiş sayılmadı. Mevcut TSX bileşenlerindeki satır sonu boşlukları, yeniden üretilen HTML ve yeni JS paketinin stage sonrası biçim kontrolünü geçmesi için kaynağında temizlendi; bu dosyalarda işlevsel değişiklik yapılmadı. Boşluk farkları yok sayıldığında bu bileşenler HEAD ile aynıdır.

Bu çalışma commit/push kapsamındadır. Deploy, üretim değişikliği ve canlı kabul testi yapılmadı. Yerel kontroller canlı yayın kanıtı değildir.
