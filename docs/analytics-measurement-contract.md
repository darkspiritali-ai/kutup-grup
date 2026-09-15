# GA4 / GTM Ölçüm Sözleşmesi

## Durum

15 Eylül 2026 tarihinde açık Google Analytics mülkünde yalnızca `ucuzpromosyon.com` web akışı görüldü. `kutupgrup.com` için bu mülkte veri akışı veya ölçüm kimliği bulunmadığı için mevcut kod yanlış bir kimliğe bağlanmadı.

## Uygulanan kod davranışı

- `VITE_GTM_CONTAINER_ID` verilirse Google Tag Manager, `dataLayer` üzerinden çalışır.
- Sadece `VITE_GA_MEASUREMENT_ID` verilirse doğrudan GA4 gtag akışı çalışır.
- İki değer de yoksa dış analitik script’i yüklenmez ve event gönderilmez.
- Her iki senaryoda da takip yalnızca kullanıcı çerez tercihini `Kabul Et` olarak verdikten sonra başlar.
- Form event’leri kişisel veri göndermez; yalnızca form adı, lead tipi ve seçilen konu gibi sınırlı bağlamsal alanlar kullanılır.

## Event listesi

| Event | Tetikleyici | Temel parametreler |
|---|---|---|
| `page_view` | Route değişimi | `page_path`, `page_location`, `page_title` |
| `click_to_call` | `tel:` bağlantısı | `link_url`, `page_path` |
| `click_to_email` | `mailto:` bağlantısı | `page_path` |
| `click_to_whatsapp` | WhatsApp bağlantısı | `page_path` |
| `generate_lead` | İletişim formu başarılı API yanıtı | `form_name`, `lead_type`, `topic` |

## Provider kurulumu sonrası yapılacaklar

1. Kutup Grup adına ayrı bir GA4 web data stream’i açılmalı veya doğru mevcut stream doğrulanmalı.
2. Production ortamına yalnızca doğrulanmış `VITE_GA_MEASUREMENT_ID` veya `VITE_GTM_CONTAINER_ID` eklenmeli.
3. GA4’te `generate_lead`, `click_to_call`, `click_to_email` ve `click_to_whatsapp` dönüşüm olarak işaretlenmeli.
4. GTM kullanılıyorsa `dataLayer` event isimleriyle GA4 Event tag’leri eşleştirilmeli; doğrudan GA4 ve GTM aynı anda etkinleştirilerek çift sayım yapılmamalı.
5. GA4 DebugView ve gerçek zamanlı raporda izin kabulü, sayfa görüntüleme, iletişim tıklaması ve başarılı form gönderimi ayrı ayrı test edilmeli.

Bu doküman kodun hazır olduğunu gösterir; provider kurulumu, production env erişimi ve gerçek zamanlı veri doğrulaması ayrı canlı kanıtlardır.
