# GA4 / GTM Ölçüm Sözleşmesi

## Durum

15 Eylül 2026 tarihinde Kutup Grup için ayrı GA4 web data stream’i oluşturuldu:

- Stream: `Kutup Grup Web`
- URL: `https://kutupgrup.com`
- Stream ID: `15783801846`
- Measurement ID: `G-79T22B37EE`
- Enhanced measurement: açık

Canlı GA4 etiket algılama testi başarılı olarak raporlandı. Olayların DebugView/Realtime içinde tek tek görülmesi ve dönüşüm olarak işaretlenmesi ayrı provider kabul kapısıdır.

## Uygulanan kod davranışı

- `VITE_GTM_CONTAINER_ID` verilirse Google Tag Manager, `dataLayer` üzerinden çalışır.
- Sadece `VITE_GA_MEASUREMENT_ID` verilirse doğrudan GA4 gtag akışı çalışır.
- İki değer de yoksa dış analitik script’i yüklenmez ve event gönderilmez.
- GA4 doğrudan akışında consent mode başlangıçta analitik depolamayı reddeder; kullanıcı `Kabul Et` seçtiğinde izin güncellenir.
- Her iki senaryoda da event gönderimi yalnızca kullanıcı çerez tercihini `Kabul Et` olarak verdikten sonra başlar.
- Form event’leri kişisel veri göndermez; yalnızca form adı, lead tipi, seçilen konu ve varsa hizmet slug’ı gibi sınırlı bağlamsal alanlar kullanılır.

## Event listesi

| Event | Tetikleyici | Temel parametreler |
|---|---|---|
| `page_view` | Route değişimi | `page_path`, `page_location`, `page_title` |
| `click_to_call` | `tel:` bağlantısı | `link_url`, `page_path` |
| `click_to_email` | `mailto:` bağlantısı | `page_path` |
| `click_to_whatsapp` | WhatsApp bağlantısı | `page_path` |
| `generate_lead` | İletişim formu başarılı API yanıtı | `form_name`, `lead_type`, `topic`, `service_slug` |

## Provider kurulumu sonrası yapılacaklar

1. `G-79T22B37EE` yalnızca production deployment env’de tanımlı tutulmalı; kaynak koduna veya commit’e secret eklenmemeli.
2. GA4’te `generate_lead`, `click_to_call`, `click_to_email` ve `click_to_whatsapp` olayları iş hedeflerine göre dönüşüm olarak işaretlenmeli.
3. GTM kullanılacaksa doğrudan GA4 akışı kapatılmalı veya tek bir gönderim yolu seçilerek çift sayım önlenmeli.
4. GA4 DebugView ve gerçek zamanlı raporda izin kabulü, sayfa görüntüleme ve iletişim tıklamaları kişisel veri göndermeden test edilmeli. Yetkili test oturumunda URL’ye yalnızca `?ga_debug=1` eklenebilir; bu işaret normal ziyaretlerde etkin değildir ve çerez izni yoksa olay gönderimini açmaz.
5. Başarılı form gönderimi testi gerçek kişi verisi veya uydurma iletişim bilgisi ile otomatik çalıştırılmamalı; backend kabulü ve GA4 `generate_lead` doğrulaması yetkili test verisiyle ayrı yapılmalı.

Bu doküman kodun hazır olduğunu gösterir; provider kurulumu, production env erişimi ve gerçek zamanlı veri doğrulaması ayrı canlı kanıtlardır.
