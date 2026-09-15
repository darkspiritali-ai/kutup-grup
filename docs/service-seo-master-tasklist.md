# Kutup Grup Hizmet Sayfaları SEO Master Task Listesi

Bu liste, hizmet sayfalarının organik arama, kullanıcı güveni, dönüşüm, teknik SEO ve LLM keşfedilebilirliği için uygulanacak çalışma sırasını tanımlar. Bir madde ancak ilgili kaynak, build, canlı sayfa veya Search Console kanıtı görüldüğünde tamamlanmış kabul edilir.

## 0. Ölçüm sözleşmesi ve mevcut baz

- [x] Search Console mülkünü doğrula: `kutupgrup.com`.
- [x] Hizmet URL envanterini doğrula: 20 URL.
- [x] GSC bazını kaydet: son 3 ay görünümünde 472 gösterim, 18 tıklama, %3,8 CTR, ortalama 15,4 pozisyon.
- [x] Her hizmet URL’si için GSC sayfa bazlı ortalama pozisyonu kaydet.
- [x] Her hizmet URL’si için sorgu + sayfa kırılımını Search Console baz raporuna kaydet.
- [x] Mobil/masaüstü ve ülke kırılımını ayrı kaydet; Türkiye bazını raporla.
- [x] Marka sorguları ile marka dışı ticari sorguları ayır.
- [x] Her hizmet için hedef sorgu sözlüğü ve ikincil sorgu kümesi oluştur: [seo-target-query-map.md](./seo-target-query-map.md).
- [x] Aylık izleme tablosu oluştur: [gsc-ga4-monthly-monitoring.md](./gsc-ga4-monthly-monitoring.md).

## 1. Canlı–repo ve indeksleme kapısı

- [ ] Canlı deployment SHA’sını son commit ile eşleştir.
- [ ] Canlı HTML ile prerender çıktısını hizmet bazında karşılaştır.
- [ ] Eski/ham claim’lerin canlıda kalmadığını doğrula.
- [x] 20 hizmet URL’sinin 200 durum kodunu doğrula: validate:live-seo.
- [x] Canonical’ın URL ile birebir eşleştiğini doğrula: canlı 20/20 kontrolü.
- [x] `index,follow` ve sitemap kapsamını doğrula: canlı kontrol script’i meta robots ve discovery kapsamını denetler.
- [x] Sitemap URL’lerinin canonical URL’lerle aynı olduğunu doğrula.
- [x] `robots.txt`, sitemap ve `llms.txt` canlı URL parity’sini ve sitemap direktifini kontrol et.
- [x] Google URL Inspection ile örnek hizmet URL’sini kontrol et: canlı testte Kaya Bariyeri URL’si kullanılabilir ve dizine eklenebilir göründü.
- [ ] Yeniden tarama isteklerini yalnızca içerik/build doğrulamasından sonra gönder.

## 2. Claim, güven ve kanıt matrisi

- [x] Her hizmet için izin verilen iddialar, kanıt alanı ve doğrulama durumu sütunlarını oluştur.
- [ ] Sertifika/üyelik ifadelerini belge veya resmi profil bağlantısıyla doğrula.
- [ ] Standart numarası geçen her cümleyi ilgili resmi dokümanla eşleştir.
- [ ] Garanti, sigorta, yetkili satıcı, marka, müşteri ve proje isimlerini izin/belge ile doğrula.
- [ ] Müdahale süresi, ekip büyüklüğü, kapasite ve başarı yüzdesi gibi nicel iddiaları doğrula.
- [x] “En iyi”, “lider”, “sıfır kaza”, “%100”, “en hızlı” gibi mutlak ifadeleri kanıt yoksa kaldır.
- [x] Ham kaynak katalog ile yayınlanan güvenli katalog arasındaki farkı görünür içerik claim kapısıyla kontrol altına al.
- [x] Sanitizer’ın hizmet adlarını silmemesi ve görünür metnin claim validator’dan geçmesi için kontrol ekle.
- [ ] Her hizmet sayfasına gerçek ekip, süreç veya saha kanıtı ekle; kanıt yoksa alanı yayınlama.
- [ ] Referanslar sayfası gerçek izinli proje arşivi hazır olana kadar noindex kalmalı.

## 3. Hizmet bazlı arama niyeti ve içerik

Her sayfa için aşağıdaki alt görevler uygulanacak:

- [x] Birincil ticari sorguyu belirle: [seo-target-query-map.md](./seo-target-query-map.md).
- [x] Kullanıcının problemini ilk ekranda açıkla.
- [x] Hizmetin kapsamını ve kapsam dışını yaz; saha koşullarına bağlı sınırlamalar görünür copy içinde belirtiliyor.
- [ ] Uygulama alanlarını gerçek örneklerle ayır.
- [x] Keşif ve ön değerlendirme adımlarını yaz.
- [x] Yöntem, ekipman ve saha koşullarını yalnızca doğrulanabilir biçimde yaz.
- [x] İş güvenliği, izin ve operasyon bağımlılıklarını açıkla.
- [x] Teslim çıktısını yaz: rapor, kontrol listesi, fotoğraf, bakım planı veya teklif girdisi.
- [x] Sık sorulan teknik ve ticari soruları ekle.
- [x] Teklif sürecini ve müşteriden beklenen bilgileri belirt.
- [x] Uygun olmayan kullanım durumlarını ve sınırlamaları belirt.
- [x] İlgili hizmet ve blog bağlantılarını metin içinde bağlamsal olarak ekle.

### Sayfa bazlı öncelik sırası

- [x] 20 hizmetin GSC öncelik sırasına göre editorial copy revizyonu uygulandı; aşağıdaki değerler değişim karşılaştırması için başlangıç bazıdır.

Not: Pozisyonlar GSC’de sayfa bazlı ortalama değerlerdir; tek bir anahtar kelimenin sabit sırası olarak yorumlanmamalıdır.

## 4. Metadata ve SERP snippet

- [x] Her hizmet için benzersiz, doğal ve ticari arama niyetine uygun title yaz.
- [x] 20 hizmet meta açıklamasını benzersiz, doğal ve 120–160 karakter hedefiyle yeniden yaz.
- [x] Meta açıklamasında hizmet + kullanım alanı + sonraki adımı dengeli biçimde belirt.
- [x] H1 ile title arasında anlam ve ana sorgu uyumu sağla.
- [ ] Keyword listesini doldurma amacıyla değil, sayfa kapsamını doğrulamak için kullan.
- [x] Canonical, Open Graph ve Twitter metadata’sını aynı kaynaktan üret.
- [x] Open Graph görselinin mevcut ve paylaşılabilir olduğunu doğrula.
- [x] Snippet’te kanıtlanamayan garanti, süre, yüzde veya sertifika ifadelerini kullanma.

## 5. Teknik HTML ve erişilebilirlik

- [x] Her hizmet için benzersiz H1 ve canonical üretimini koru.
- [x] Uzun metinleri gerçek paragraf bloklarına ayır.
- [x] Bölümleri semantik `<section>` ve benzersiz heading ID’leriyle işaretle.
- [x] Breadcrumb’ı görsel ve schema düzeyinde aynı tut.
- [x] İlgili hizmetler alanını semantik nav olarak işaretle.
- [x] Link metinlerini “detaylı bilgi” yerine mümkün olduğunca hedef hizmeti anlatacak şekilde yaz.
- [x] Mobilde sidebar akışı, CTA ve iç linklerin kullanılabilirliğini otomatik smoke testiyle kontrol et.
- [ ] Klavye odağı, heading sırası ve görsel alt metinlerini kontrol et.
- [x] FAQ içeriklerini görünür HTML ile JSON-LD’nin birebir eşleşmesiyle yayınla ve validator’a bağla.

## 6. Structured data ve entity

- [x] Service schema’ya `serviceType`, `category`, `image` ve dil bilgisi ekle.
- [ ] Organization schema’daki adres, telefon ve logo bilgilerini gerçek kayıtlarla eşleştir.
- [x] BreadcrumbList URL’lerini canonical ile eşleştir; 20 hizmet için yerel validator kapısı eklendi.
- [x] FAQ schema’yı yalnızca sayfada görünür ve gerçek FAQ varsa üret.
- [ ] Review, rating, offer, price veya warranty schema’sı ekleme; gerçek veri ve izin olmadan kullanılmamalı.
- [ ] Rich Results Test ile service, organization, breadcrumb ve FAQ çıktılarını test et.

## 7. Görsel SEO ve performans

- [x] 18 tekrar kullanılan PNG hizmet görselini WebP türevleriyle sun.
- [x] Görsellerde doğru width/height, `decoding` ve fetch priority kullan.
- [x] Hero görsellerinde anlamlı alt metin kullan.
- [x] Dosya adlarını hizmet niyetiyle eşleştir.
- [ ] Görsel boyutlarını ve LCP etkisini Lighthouse/Chrome ile ölç.
- [ ] Gerçek saha görselleri için izin, tarih, konum ve alt metin kaydı tut.
- [ ] Dekoratif görselleri içerik görsellerinden ayır.

## 8. İç link ve konu kümeleri

- [x] Jeoteknik hub → kaya bariyeri, şev örtüleme, moloz bariyer, yamaç temizleme bağlantılarını kur.
- [x] İple erişim hub → tersane, rüzgar, cephe, orman ve rigging bağlantılarını kur.
- [x] Yaşam hattı ↔ güvenlik ağı bağlantılarını kur.
- [x] IRATA/SPRAT eğitim ↔ operasyon hizmetleri bağlantılarını kur.
- [x] Hizmet sayfalarına ilgili blog bağlantılarını içerik içinde ekle.
- [x] Her hizmet sayfasından en az iki alakalı hizmete ve bir alakalı bloga bağlan.
- [x] Orphan page kontrolü yap; 20 hizmetin her biri hizmet hub’ı ve site navigation içinden erişilebilir.
- [x] Anchor text’leri doğal, açıklayıcı ve tekrar etmeyen ifadelerle güncelle.

## 9. Dış kaynak, otorite ve LLM keşfi

- [x] IRATA, SPRAT, mevzuat ve standart bağlantılarını resmi kaynaklardan seç.
- [ ] Şirket profillerindeki ad, hizmet, iletişim ve konum bilgisini tutarlı hale getir.
- [ ] İzinli proje ve müşteri referanslarını dış profillerde aynı adlandırmayla yayımla.
- [x] `llms.txt` ve `llms-full.txt` içeriğini yerel canlı içerik kaynağıyla eşleştir; deployment sonrası parity ayrıca kontrol edilecek.
- [x] LLM’lerin kullanabileceği net hizmet tanımı, kapsam, sınırlama ve kaynak bağlantıları ekle.
- [x] Yapay zekâlarda birinci sıra veya sürekli önerilme garantisi verme; ölçülebilir görünürlük ve referans sinyallerini takip et.

## 10. Dönüşüm ve kullanıcı deneyimi

- [x] Her hizmette tek birincil CTA yolu belirle; hero ve sidebar aynı hizmet teklif akışına bağlanır.
- [x] Teklif formuna hizmet slug’ını güvenilir biçimde taşı.
- [x] Telefon, e-posta, WhatsApp ve başarılı form gönderimini GA4/GTM uyumlu event sözleşmesiyle ölç; provider akışı için `VITE_GA_MEASUREMENT_ID` veya `VITE_GTM_CONTAINER_ID` gerekir.
- [x] Form gönderimi ve başarı yanıtını `generate_lead` dönüşümü olarak kaydet.
- [x] Hizmet bazlı teklif kaynaklarını `service_slug` ile raporlamaya hazırla.
- [ ] Mobil CTA görünürlüğünü ve form kullanılabilirliğini test et.
- [ ] Kullanıcıyı gereksiz popup, iddia veya satış metniyle bölme.

## 11. QA, release ve canlı kabul

- [x] TypeScript, lint ve production build çalıştır.
- [x] Hizmet route, canonical, status, hydration ve sitemap testlerini çalıştır.
- [x] Hizmet SEO validation script’ini çalıştır.
- [x] 20 hizmetin prerender HTML’inde title, description, H1, schema, hero görseli ve linklerini kontrol et.
- [x] Görsel asset’lerinin 200 döndüğünü kontrol et: 20/20 canlı hero asset kontrolü.
- [ ] Değişiklikleri yalnızca ilgili dosyalarla stage et.
- [ ] Commit öncesi staged diff ve whitespace kontrolü yap.
- [ ] Commit SHA’sını deployment SHA’sı ile eşleştir.
- [ ] Canlı smoke test, Search Console URL Inspection ve schema testi yap.
- [ ] Deploy sonrası eski claim, canonical, sitemap ve cache kontrolü yap.

## 12. Sürekli işletim

- [x] Haftalık Search Console değişim raporu için alanları ve karşılaştırma kuralını oluştur.
- [ ] Aylık hizmet sayfası içerik doğrulaması yap.
- [ ] Yeni sertifika, standart veya proje iddiasını yayın öncesi kanıtla.
- [ ] CTR düşük fakat gösterimi yüksek URL’leri önceliklendir.
- [ ] Pozisyon iyileşmesini tek başına başarı sayma; nitelikli teklif ve dönüşümle birlikte değerlendir.
- [ ] İçerik güncellemesinde gerçek `updatedAt` tarihi kullan.

## Uygulama sırası

1. Canlı–repo parity ve claim doğrulama kapısı.
2. Teknik HTML, schema, görsel ve validation altyapısı.
3. Rüzgar, IRATA, SPRAT ve cephe hizmetlerinin yeniden yazımı.
4. Kalan 16 hizmetin niyet ve içerik revizyonu.
5. İç link/topic cluster ve hizmet–blog bağlantıları.
6. GSC query/page ölçümü, CTR testleri ve dönüşüm izleme.
7. Canlı kabul, yeniden tarama ve aylık optimizasyon döngüsü.

## Uygulama günlüğü

### 2026-09-15 — Adım 1 ve 2

- [x] 20 hizmet için 120–160 karakter hedefli metadata seti güncellendi.
- [x] Service JSON-LD; hizmet tipi, kategori, dil, görsel ve güncelleme alanlarıyla zenginleştirildi.
- [x] Hizmet HTML’i paragraf ve section yapısına ayrıldı; ana içerik, heading ve related-services nav semantiği güçlendirildi.
- [x] 18 hizmet görseli WebP türevine taşındı ve hero görsel alt metinleri iyileştirildi.
- [x] Tüm hizmet sayfalarına gerçek blog içeriklerinden en az bir alakalı okuma bağlantısı eklendi.
- [x] `validate:services-seo` ile metadata, canonical, H1, JSON-LD, görsel ve bağlantı kapısı eklendi.
- [x] `validate:service-claims` ile görünür hizmet metninde kanıtsız numeric, garanti ve üstünlük iddiaları için kapı eklendi.
- [x] Search Console sorgu, cihaz ve ülke baz raporu oluşturuldu: [search-console-service-baseline.md](./search-console-service-baseline.md).
- [x] GA4/GTM event katmanı eklendi; Kutup Grup web stream’i (`G-79T22B37EE`) oluşturuldu ve consent-mode akışıyla canlı etiket algılama testi geçti. Event DebugView ve dönüşüm işaretleme provider kabul kapısı olarak ayrıca izlenecek.
- [x] Dış otorite ve LLM görünürlük çalışması kaydedildi: [external-authority-llm-visibility.md](./external-authority-llm-visibility.md).
- [x] Canlı URL Inspection tamamlandı; Rich Results testinde Kaya Bariyeri sayfasında 1 geçerli Breadcrumb öğesi görüldü. `Service` schema’sı Google’ın desteklediği zengin sonuç türlerinden biri olmadığından ayrıca rich-result kartı üretmesi beklenmez.
- [x] `validate:all-seo` yerel rotalar, prerender HTML, status, hydration, filmstrip, llms ve blog kontrolleriyle tamamlandı.
- [x] `validate:live-seo` ile canlıda 20/20 hizmet URL’si, meta robots, canonical, hero görseli, sitemap/llms URL parity’si ve robots sitemap direktifi kontrol edildi.

### 2026-09-15 — Adım 3: içerik, ölçüm ve UX kapıları

- [x] 20 hizmet için kanıt odaklı editorial copy katmanı eklendi; giriş, kapsam, keşif, yöntem, saha/izin bağımlılıkları, teslim, sınırlamalar ve FAQ blokları görünür HTML’de yayınlanıyor.
- [x] Hizmet bazlı hedef sorgu haritası ve aylık GSC + GA4 izleme şablonu eklendi.
- [x] Hizmet CTA’ları iletişim formuna hizmet slug’ı taşıyor; backend bildiriminde alan güvenli biçimde kaçışlanıyor.
- [x] Hizmet sayfaları için OG/Twitter metadata, breadcrumb eşleşmesi, FAQ görünür/schema eşleşmesi, içerik yoğunluğu ve hizmet-atıflı CTA validator kontrollerine eklendi.
- [x] 20 hizmet için mobil UX smoke testi eklendi: CTA görünürlüğü, yatay taşma, heading sırası, alt metin, breadcrumb ve ilgili hizmet nav kontrolleri geçiyor.

Canlı 20/20 yapı, meta robots, canonical, hero asset ve discovery parity kontrolleri geçmiştir. `bc8d988` dağıtımından sonra canlı bundle ve yeni editorial copy parity’si doğrulanmıştır. Sonraki claim-sanitization düzeltmesi bu commit ile birlikte yayınlanacak ve aynı canlı kontroller yeniden çalıştırılacaktır. Search Console URL Inspection yapısal olarak başarılıdır; yeniden tarama isteği provider işlemidir ve yalnızca deploy parity’si doğrulandıktan sonra ayrıca gönderilmelidir. GA4 etiket algılama başarılıdır; DebugView olay kanıtı ve dönüşüm işaretleme provider kabul kapısı olarak ayrı tutulur.
