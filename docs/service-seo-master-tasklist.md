# Kutup Grup Hizmet Sayfaları SEO Master Task Listesi

Bu liste, hizmet sayfalarının organik arama, kullanıcı güveni, dönüşüm, teknik SEO ve LLM keşfedilebilirliği için uygulanacak çalışma sırasını tanımlar. Bir madde ancak ilgili kaynak, build, canlı sayfa veya Search Console kanıtı görüldüğünde tamamlanmış kabul edilir.

## 0. Ölçüm sözleşmesi ve mevcut baz

- [x] Search Console mülkünü doğrula: `kutupgrup.com`.
- [x] Hizmet URL envanterini doğrula: 20 URL.
- [x] GSC bazını kaydet: son 3 ay görünümünde 472 gösterim, 18 tıklama, %3,8 CTR, ortalama 15,4 pozisyon.
- [x] Her hizmet URL’si için GSC sayfa bazlı ortalama pozisyonu kaydet.
- [ ] Her hizmet URL’si için sorgu + sayfa kırılımını dışa aktar.
- [ ] Mobil/masaüstü ve Türkiye geneli kırılımını ayrı kaydet.
- [ ] Marka sorguları ile marka dışı ticari sorguları ayır.
- [ ] Her hizmet için hedef sorgu sözlüğü ve ikincil sorgu kümesi oluştur.
- [ ] Aylık izleme tablosu oluştur: gösterim, tıklama, CTR, pozisyon, teklif formu, telefon ve e-posta dönüşümü.

## 1. Canlı–repo ve indeksleme kapısı

- [ ] Canlı deployment SHA’sını son commit ile eşleştir.
- [ ] Canlı HTML ile prerender çıktısını hizmet bazında karşılaştır.
- [ ] Eski/ham claim’lerin canlıda kalmadığını doğrula.
- [ ] 20 hizmet URL’sinin 200 durum kodunu doğrula.
- [ ] Canonical’ın URL ile birebir eşleştiğini doğrula.
- [ ] `index,follow` ve sitemap kapsamını doğrula.
- [ ] Sitemap URL’lerinin canonical URL’lerle aynı olduğunu doğrula.
- [ ] `robots.txt`, sitemap ve `llms.txt` canlı içeriğini karşılaştır.
- [ ] Google URL Inspection ile örnek hizmet URL’lerini kontrol et.
- [ ] Yeniden tarama isteklerini yalnızca içerik/build doğrulamasından sonra gönder.

## 2. Claim, güven ve kanıt matrisi

- [x] Her hizmet için izin verilen iddialar, kanıt alanı ve doğrulama durumu sütunlarını oluştur.
- [ ] Sertifika/üyelik ifadelerini belge veya resmi profil bağlantısıyla doğrula.
- [ ] Standart numarası geçen her cümleyi ilgili resmi dokümanla eşleştir.
- [ ] Garanti, sigorta, yetkili satıcı, marka, müşteri ve proje isimlerini izin/belge ile doğrula.
- [ ] Müdahale süresi, ekip büyüklüğü, kapasite ve başarı yüzdesi gibi nicel iddiaları doğrula.
- [ ] “En iyi”, “lider”, “sıfır kaza”, “%100”, “en hızlı” gibi mutlak ifadeleri kanıt yoksa kaldır.
- [x] Ham kaynak katalog ile yayınlanan güvenli katalog arasındaki farkı görünür içerik claim kapısıyla kontrol altına al.
- [x] Sanitizer’ın hizmet adlarını silmemesi ve görünür metnin claim validator’dan geçmesi için kontrol ekle.
- [ ] Her hizmet sayfasına gerçek ekip, süreç veya saha kanıtı ekle; kanıt yoksa alanı yayınlama.
- [ ] Referanslar sayfası gerçek izinli proje arşivi hazır olana kadar noindex kalmalı.

## 3. Hizmet bazlı arama niyeti ve içerik

Her sayfa için aşağıdaki alt görevler uygulanacak:

- [ ] Birincil ticari sorguyu belirle.
- [ ] Kullanıcının problemini ilk ekranda açıkla.
- [ ] Hizmetin kapsamını ve kapsam dışını yaz.
- [ ] Uygulama alanlarını gerçek örneklerle ayır.
- [ ] Keşif ve ön değerlendirme adımlarını yaz.
- [ ] Yöntem, ekipman ve saha koşullarını yalnızca doğrulanabilir biçimde yaz.
- [ ] İş güvenliği, izin ve operasyon bağımlılıklarını açıkla.
- [ ] Teslim çıktısını yaz: rapor, kontrol listesi, fotoğraf, bakım planı veya teklif girdisi.
- [ ] Sık sorulan teknik ve ticari soruları ekle.
- [ ] Teklif sürecini ve müşteriden beklenen bilgileri belirt.
- [ ] Uygun olmayan kullanım durumlarını ve sınırlamaları belirt.
- [ ] İlgili hizmet ve blog bağlantılarını metin içinde bağlamsal olarak ekle.

### Sayfa bazlı öncelik sırası

- [ ] Rüzgar Enerji Santralleri — GSC pozisyonu 31,0; 62 gösterim / 1 tıklama.
- [ ] SPRAT Eğitimi — GSC pozisyonu 21,5; 46 gösterim / 0 tıklama.
- [ ] İç ve Dış Cephe Temizliği — GSC pozisyonu 18,7; 21 gösterim / 0 tıklama.
- [ ] IRATA Eğitimi — GSC pozisyonu 18,7; 74 gösterim / 0 tıklama.
- [ ] Ormanda İple Erişim — GSC pozisyonu 14,8; 8 gösterim / 1 tıklama.
- [ ] Yatay ve Düşey Yaşam Hattı — GSC pozisyonu 10,1; 17 gösterim / 0 tıklama.
- [ ] Kaya Bariyeri — GSC pozisyonu 8,3; 22 gösterim / 2 tıklama.
- [ ] Güvenlik Ağı — GSC pozisyonu 8,2; 20 gösterim / 1 tıklama.
- [ ] Deflektör Tip Örtüleme — GSC pozisyonu 8,0; 8 gösterim / 0 tıklama.
- [ ] Gabion Duvar — GSC pozisyonu 7,0; 22 gösterim / 1 tıklama.
- [ ] Stand-by & Rescue — GSC pozisyonu 6,6; 26 gösterim / 0 tıklama.
- [ ] Kar ve Çığ Kontrolü — GSC pozisyonu 5,9; 57 gösterim / 1 tıklama.
- [ ] Jeoteknik Uygulamalar — GSC pozisyonu 5,0; 8 gösterim / 0 tıklama.
- [ ] Şev Örtüleme — GSC pozisyonu 4,9; 22 gösterim / 0 tıklama.
- [ ] Dış Cephe Dekoratif Aydınlatma — GSC pozisyonu 4,7; 17 gösterim / 0 tıklama.
- [ ] Sahne İşleri / Rigging — GSC pozisyonu 4,7; 27 gösterim / 0 tıklama.
- [ ] Moloz Bariyer — GSC pozisyonu 3,9; 7 gösterim / 0 tıklama.
- [ ] Tersane ve Offshore — GSC pozisyonu 3,4; 19 gösterim / 0 tıklama.
- [ ] Hassas Endüstriyel Alan Koruması — GSC pozisyonu 6,0; 1 gösterim / 0 tıklama.

Not: Pozisyonlar GSC’de sayfa bazlı ortalama değerlerdir; tek bir anahtar kelimenin sabit sırası olarak yorumlanmamalıdır.

## 4. Metadata ve SERP snippet

- [ ] Her hizmet için benzersiz, doğal ve ticari arama niyetine uygun title yaz.
- [x] 20 hizmet meta açıklamasını benzersiz, doğal ve 120–160 karakter hedefiyle yeniden yaz.
- [ ] Meta açıklamasında hizmet + kullanım alanı + sonraki adımı dengeli biçimde belirt.
- [ ] H1 ile title arasında anlam ve ana sorgu uyumu sağla.
- [ ] Keyword listesini doldurma amacıyla değil, sayfa kapsamını doğrulamak için kullan.
- [ ] Canonical, Open Graph ve Twitter metadata’sını aynı kaynaktan üret.
- [ ] Open Graph görselinin mevcut ve paylaşılabilir olduğunu doğrula.
- [ ] Snippet’te kanıtlanamayan garanti, süre, yüzde veya sertifika ifadelerini kullanma.

## 5. Teknik HTML ve erişilebilirlik

- [x] Her hizmet için benzersiz H1 ve canonical üretimini koru.
- [x] Uzun metinleri gerçek paragraf bloklarına ayır.
- [x] Bölümleri semantik `<section>` ve benzersiz heading ID’leriyle işaretle.
- [ ] Breadcrumb’ı görsel ve schema düzeyinde aynı tut.
- [x] İlgili hizmetler alanını semantik nav olarak işaretle.
- [ ] Link metinlerini “detaylı bilgi” yerine mümkün olduğunca hedef hizmeti anlatacak şekilde yaz.
- [ ] Mobilde sticky sidebar, CTA ve iç linklerin kullanılabilirliğini test et.
- [ ] Klavye odağı, heading sırası ve görsel alt metinlerini kontrol et.
- [ ] FAQ içeriklerini görünür HTML ile JSON-LD’nin birebir eşleşmesiyle yayınla.

## 6. Structured data ve entity

- [x] Service schema’ya `serviceType`, `category`, `image` ve dil bilgisi ekle.
- [ ] Organization schema’daki adres, telefon ve logo bilgilerini gerçek kayıtlarla eşleştir.
- [ ] BreadcrumbList URL’lerini canonical ile eşleştir.
- [ ] FAQ schema’yı yalnızca sayfada görünür ve gerçek FAQ varsa üret.
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

- [ ] Jeoteknik hub → kaya bariyeri, şev örtüleme, moloz bariyer, yamaç temizleme bağlantılarını kur.
- [ ] İple erişim hub → tersane, rüzgar, cephe, orman ve rigging bağlantılarını kur.
- [ ] Yaşam hattı ↔ güvenlik ağı bağlantılarını kur.
- [ ] IRATA/SPRAT eğitim ↔ operasyon hizmetleri bağlantılarını kur.
- [x] Hizmet sayfalarına ilgili blog bağlantılarını içerik içinde ekle.
- [x] Her hizmet sayfasından en az iki alakalı hizmete ve bir alakalı bloga bağlan.
- [ ] Orphan page kontrolü yap.
- [ ] Anchor text’leri doğal, açıklayıcı ve tekrar etmeyen ifadelerle güncelle.

## 9. Dış kaynak, otorite ve LLM keşfi

- [ ] IRATA, SPRAT, mevzuat ve standart bağlantılarını resmi kaynaklardan seç.
- [ ] Şirket profillerindeki ad, hizmet, iletişim ve konum bilgisini tutarlı hale getir.
- [ ] İzinli proje ve müşteri referanslarını dış profillerde aynı adlandırmayla yayımla.
- [ ] `llms.txt` ve `llms-full.txt` içeriğini canlı hizmet metinleriyle eşleştir.
- [ ] LLM’lerin kullanabileceği net hizmet tanımı, kapsam, sınırlama ve kaynak bağlantıları ekle.
- [ ] Yapay zekâlarda birinci sıra veya sürekli önerilme garantisi verme; ölçülebilir görünürlük ve referans sinyallerini takip et.

## 10. Dönüşüm ve kullanıcı deneyimi

- [ ] Her hizmette tek birincil CTA belirle.
- [ ] Teklif formuna hizmet slug’ını güvenilir biçimde taşı.
- [ ] Telefon, e-posta ve form tıklamalarını GA4/GTM ile ölç.
- [ ] Form gönderimi ve teşekkür/başarı durumunu dönüşüm olarak kaydet.
- [ ] Hizmet bazlı teklif kaynaklarını raporla.
- [ ] Mobil CTA görünürlüğünü ve form kullanılabilirliğini test et.
- [ ] Kullanıcıyı gereksiz popup, iddia veya satış metniyle bölme.

## 11. QA, release ve canlı kabul

- [x] TypeScript, lint ve production build çalıştır.
- [x] Hizmet route, canonical, status, hydration ve sitemap testlerini çalıştır.
- [x] Hizmet SEO validation script’ini çalıştır.
- [x] 20 hizmetin prerender HTML’inde title, description, H1, schema, hero görseli ve linklerini kontrol et.
- [ ] Görsel asset’lerinin 200 döndüğünü kontrol et.
- [ ] Değişiklikleri yalnızca ilgili dosyalarla stage et.
- [ ] Commit öncesi staged diff ve whitespace kontrolü yap.
- [ ] Commit SHA’sını deployment SHA’sı ile eşleştir.
- [ ] Canlı smoke test, Search Console URL Inspection ve schema testi yap.
- [ ] Deploy sonrası eski claim, canonical, sitemap ve cache kontrolü yap.

## 12. Sürekli işletim

- [ ] Haftalık Search Console değişim raporu oluştur.
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
- [x] `validate:all-seo` yerel rotalar, prerender HTML, status, hydration, filmstrip, llms ve blog kontrolleriyle tamamlandı.

Canlı deployment SHA’sı, canlı HTML parity’si, Search Console URL Inspection ve provider/deploy kanıtları bu yerel çalışmadan ayrı kapılardır; deploy sonrası ayrıca doğrulanacaktır.
