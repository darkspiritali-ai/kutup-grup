# Kutup Grup Blog İçerik Mimarisi

Bu plan, organik arama ve LLM keşfedilebilirliği için konu kümesi (hub-and-spoke) yapısını tanımlar. Her makale yayınlanmadan önce kaynakları ve şirket iddiaları ayrı ayrı doğrulanmalıdır.

## Mimari

- `/blog`: sekiz makaleyi ve konu kümelerini özetleyen ana hub.
- Her makale: tek bir arama niyeti, tek bir canonical URL, 2.000+ Türkçe kelime, açıklayıcı H2/H3 hiyerarşisi ve doğrudan iletişim CTA'sı.
- Her makale en az üç ilgili hizmet sayfasına, iki ilgili makaleye ve bir ana `/blog` hub'ına bağlanır.
- Hizmet sayfaları ilgili makalelere bağlanır; blog sayfaları hizmet sayfalarının yerine geçmez.
- Dış bağlantılar Wikipedia yerine mümkün olduğunda IRATA, SPRAT, HSE, AFAD, mevzuat veya üretici dokümanı gibi birincil/otoritatif kaynaklara verilir. Wikipedia, yalnızca temel kavram açıklaması için ikincil kaynak olabilir.
- Görseller yapay olarak üretilmiş editoryal illüstrasyon olarak etiketlenir; gerçek müşteri sahası veya gerçek proje kanıtı gibi sunulmaz.

## Makale kümesi

| # | Başlık | Slug | Birincil niyet | İlgili hizmetler | Görsel dosyası |
|---|---|---|---|---|---|
| 1 | Endüstriyel Dağcılık ve İple Erişim Nedir? | `/blog/endustriyel-dagcilik-iple-erisim-rehberi` | Bilgilendirici / çözüm araştırması | Tersane, cephe temizliği, yatay-düşey yaşam hattı | `endustriyel-dagcilik-iple-erisim-rehberi.webp` |
| 2 | Yüksekte Çalışma Güvenliği ve Yaşam Hattı Seçim Rehberi | `/blog/yuksekte-calisma-guvenligi-yasam-hatti-rehberi` | Güvenlik / satın alma öncesi araştırma | Yatay-düşey yaşam hattı, güvenlik ağı, stand-by rescue | `yuksekte-calisma-guvenligi-yasam-hatti-rehberi.webp` |
| 3 | Kaya Düşmesi Risk Analizi ve Kaya Bariyeri Rehberi | `/blog/kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi` | Problem çözümü / teknik araştırma | Kaya bariyeri, moloz bariyeri, jeoteknik uygulamalar | `kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi.webp` |
| 4 | Şev Örtüleme ve Yamaç Stabilizasyonu Nasıl Planlanır? | `/blog/sev-ortuleme-yamac-stabilizasyonu-rehberi` | Teknik araştırma / teklif hazırlığı | Şev örtüleme, deflektör tip örtüleme, yamaç yüzeyi temizleme | `sev-ortuleme-yamac-stabilizasyonu-rehberi.webp` |
| 5 | Yüksek Yapılarda Cephe Temizliği: İple Erişim ve İş Güvenliği | `/blog/yuksek-yapilarda-cephe-temizligi-iple-erisim` | Hizmet araştırması / ticari | İç-dış cephe temizliği, iple erişim, hassas alan koruması | `yuksek-yapilarda-cephe-temizligi-iple-erisim.webp` |
| 6 | Rüzgar Türbini Bakımında İple Erişim: Süreç ve Riskler | `/blog/ruzgar-turbini-bakiminda-iple-erisim` | Sektörel / ticari araştırma | Rüzgar enerji santralleri, stand-by rescue, iple erişim | `ruzgar-turbini-bakiminda-iple-erisim.webp` |
| 7 | Kar ve Çığ Kontrolü: Risk Değerlendirme ve Koruma Sistemleri | `/blog/kar-cig-kontrolu-risk-degerlendirme-rehberi` | Teknik / risk araştırması | Kar-çığ kontrolü, kaya bariyeri, jeoteknik uygulamalar | `kar-cig-kontrolu-risk-degerlendirme-rehberi.webp` |
| 8 | Stand-by Rescue Nedir? Yüksekte ve Kapalı Alanda Kurtarma Planı | `/blog/stand-by-rescue-kurtarma-plani-rehberi` | Güvenlik / hizmet araştırması | Stand-by rescue, IRATA eğitimi, yaşam hattı | `stand-by-rescue-kurtarma-plani-rehberi.webp` |

## Link kuralları

1. Anchor text, hedef sayfanın gerçek konusunu açıklamalı; aynı kelimeyi yapay biçimde tekrarlamamalıdır.
2. Her yazının girişinde hub'a veya konu kümesine, gövdesinde hizmet sayfalarına, sonunda ilgili iki makaleye bağlantı bulunmalıdır.
3. Dış bağlantılar yalnızca iddiayı destekleyen sayfaya verilir; kaynaksız istatistik, sertifika veya mevzuat iddiası yazılmaz.
4. Her görsel için `filename`, `alt`, `title`, `caption`, `width`, `height` ve canonical makale bağlantısı tutulur.
5. Görsellerde anahtar kelime doldurma yapılmaz. Alt metin, görselde gerçekten görülen sahneyi anlatır.
6. `lastmod`, içerik gerçekten güncellendiğinde değiştirilir; otomatik tarih şişirmesi yapılmaz.

## Yayın kabul kriterleri

- Makale gövdesi 2.000+ Türkçe kelime ve özgün olmalı.
- Başlık, meta açıklama, canonical ve `BlogPosting` JSON-LD birbiriyle uyumlu olmalı.
- FAQ yalnızca makale içinde gerçekten cevaplanan sorulardan oluşturulmalı.
- En az bir uzman/kurum kaynağı ve birincil kaynak bağlantısı bulunmalı.
- Şirketin proje, müşteri, sertifika, fiyat, garanti veya sonuç iddiaları kanıt yoksa genellenmiş/koşullu dille yazılmalı.
- WebP görsel dosyası optimize edilmeli ve gerçek dosya boyutu/ölçüleri HTML'e yazılmalı.
- Sitemap, `llms.txt` ve blog hub ile URL eşleşmesi doğrulanmalı.
