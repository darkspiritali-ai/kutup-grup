# GSC + GA4 Aylık Hizmet İzleme Tablosu

Bu kayıt, organik görünürlüğü tek başına sıra hedefi olarak değil; gösterim, tıklama, CTR ve gerçek iletişim sinyalleriyle birlikte izlemek için kullanılır. GSC konumu ortalama metriktir; tek bir aramada görülen sabit sıra değildir.

## Her ay doldurulacak alanlar

| Ay | Hizmet URL’si | Hedef sorgu | Cihaz | Ülke | Gösterim | Tıklama | CTR | Ort. konum | `generate_lead` | `click_to_call` | `click_to_email` | `click_to_whatsapp` | Not / karar |
|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-09 baz | Tüm hizmetler | Marka + marka dışı karma | Tümü | Türkiye ağırlıklı | 472 | 18 | %3,8 | 15,4 | Provider doğrulaması bekliyor | Provider doğrulaması bekliyor | Provider doğrulaması bekliyor | Provider doğrulaması bekliyor | İlk baz; konu dışı sorgular hedeflenmeyecek |

## Veri alma standardı

1. Search Console’da aynı tarih aralığıyla Web aramasını açın; sorgu, sayfa, cihaz ve ülke boyutlarını ayrı ayrı dışa aktarın.
2. Marka sorgularını (`kutup`, `kutup grup` ve yazım varyantları) marka dışı ticari sorgulardan ayırın.
3. Hedef sorgu haritasındaki hizmet URL’si ile GSC sayfa filtresini eşleştirin; sayfa ortalamasını sorgu ortalaması gibi raporlamayın.
4. GA4’te aynı ay için olayları hizmet sayfası ve `service_slug` parametresiyle kırın. Telefon, e-posta ve WhatsApp tıklamalarını form gönderiminden ayrı sayın.
5. Düşük CTR’yi yalnızca title/meta değişikliğiyle açıklamayın; sorgu niyeti, sayfa konumu, marka dışı trafik ve snippet uygunluğunu birlikte inceleyin.

## GA4 olay sözleşmesi

- `page_view`: sayfa ve route görüntüleme.
- `click_to_call`: `tel:` bağlantısı.
- `click_to_email`: `mailto:` bağlantısı.
- `click_to_whatsapp`: WhatsApp bağlantısı.
- `generate_lead`: iletişim API’si başarıyla döndükten sonra; `service_slug` varsa hizmet bazlı ilişkilendirme.

GA4’te dönüşüm olarak işaretlenecek olaylar provider tarafında ayrıca kontrol edilmelidir. İzin verilmemiş oturumlarda analitik olay gönderilmez; bu nedenle GA4 toplamı form backend kayıtlarıyla birebir aynı olmak zorunda değildir.
