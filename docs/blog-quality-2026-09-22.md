# Blog yayın öncesi kalite kaydı — 22 Eylül 2026

## Kapsam ve çalışma ortamı

- Başlangıç: `main`, `aaaa2699878b677117d493fdb59950e2d06f4f18`; uzak depo aynı commit üzerinde doğrulandı.
- Asıl çalışma dizini `/Users/innovation/Documents/kutup-grup` içindeki Git indeksi, package.json ve doğrulama dosyaları macOS `dataless` durumundaydı. Dosya indirme talebine rağmen okuma işlemleri tamamlanmadı; bu dizinin temizliği doğrulanmış sayılmadı, kaynakları ve indeksi değiştirilmedi.
- İş, origin/main tabanlı temiz ve bağımsız kopyada tamamlandı: `/Users/innovation/CodexWorkspaces/kutup-grup-blog-2026-09-22`.
- İlk kopya `.codex` altında olduğundan Express `sendFile` gizli üst dizini reddetti; ilk tüm-SEO denemesinde yerel HTTP kapısı 404 nedeniyle başarısız oldu. Kopya normal dizine taşındı; uygulama koduna istisna eklenmedi. Tüm SEO paketi yeniden çalıştırılarak geçti.
- Önceki 10 makale korunmuştur. `blog-data.ts` değişiklikleri yalnızca iki import ve iki envanter girdisidir; önceki içerik modüllerinde fark yoktur.
- Üretim deployu, canlı site testi ve harici uygulama değişikliği yapılmadı. Commit/push teslimi üretime alınma kanıtı değildir.

## Yeni içerikler

| Yazı | Gövde kelimesi (yalnızca teknik kontrol) | İç bağlantı | Kaynak | FAQ |
|---|---:|---:|---:|---:|
| Güvenlik Ağı: Teslim ve Kullanım Kontrolü | 2114 | 8 | 2 | 4 |
| Dış Cephe Aydınlatması: Bakım Erişimi ve Gece Kabulü | 2144 | 7 | 2 | 4 |

- Slug'lar: `guvenlik-agi-teslim-kullanim-kontrolu`, `dis-cephe-aydinlatma-bakim-gece-kabulu`.
- İlk konu genel yüksekte çalışma yazısından farklı olarak kabul dosyası, kullanım kısıtları, alt boşluk yönetimi, revizyon ve kayıt devrine odaklanır.
- İkinci konu cephe temizliği yazısından farklı olarak armatür envanteri, bakım erişimi, ışık etkisi, kontrol senaryoları ve gece kabulüne odaklanır.
- Hizmet kapsamı `src/lib/service-editorial-copy.ts` içindeki kamuya gösterilen güvenlik ağı ve dekoratif aydınlatma metinleriyle karşılaştırıldı. Eski ham katalogdaki kanıtsız pazarlama iddiaları yeni metne taşınmadı.
- Müşteri/proje/ekip/ofis/sertifika/fiyat/garanti/sonuç iddiası eklenmedi. Örnekler açıkça varsayımsal olarak etiketlendi. Montaj ölçüsü, elektrik bağlantısı veya kurtarma manevrası tarifi verilmedi.
- Her yazıda bir H1, bölüm H2'leri, niyete uygun başlık/meta açıklama, blog hub bağlantısı, anlamlı hizmet bağlantıları ve iki ilgili makale bulunur. İlgili iki hizmetten yeni yazılara geri bağlantı eklendi.
- Kelime sayısı gövde ve bölüm başlıklarından, HTML etiketleri çıkarılarak hesaplandı; FAQ ve ilişkili içerik kelimeleri eşiğe dahil edilmedi. Görünür sayaç eklenmedi.

## Kaynak kontrolü

Aşağıdaki birincil kaynaklar 22 Eylül 2026'da açılıp incelendi; makale gövdesinde iddiaların yanında ve kaynak listesinde bağlantılandırıldı.

- [HSE — Safety nets and soft landing systems](https://www.hse.gov.uk/construction/safetytopics/safety-nets.htm): sistemin deformasyonu, alt boşluk, kurulum sonrası kontrol/teslim ve olay sonrası değerlendirme.
- [HSE — Assessing all work at height](https://www.hse.gov.uk/construction/safetytopics/assess.htm): kaçınma, önleme ve kalan riski azaltma sırası.
- [HSE — Work on electrical equipment, machinery or installations](https://www.hse.gov.uk/electricity/withequip.htm): yetkinlik ve enerji izolasyonu çerçevesi.
- [DarkSky / IES — Five Principles for Responsible Outdoor Lighting](https://darksky.org/resources/guides-and-how-tos/lighting-principles/): amaç, hedefleme, ışık seviyesi, kontrol ve renk yaklaşımı.

Yabancı kurum açıklamaları Türkiye mevzuatı, ürün onayı veya Kutup Grup sertifikasyonu olarak sunulmadı. Kalan bölümler, kaynakların uzun aktarımı yerine işverenin dosya ve karar hazırlığına yönelik özgün editoryal önerilerdir.

## Görseller ve makale ilişkisi

Yerleşik `image_gen` kullanıldı; CLI/API fallback kullanılmadı. Üretilen iki PNG görsel incelendi ve `cwebp -q 84` ile 1774 × 887 WebP dosyalarına dönüştürüldü. Marka, gerçek müşteri sahası veya teknik onay iddiası taşımazlar.

| Dosya | Boyut | Alt metin | Title |
|---|---:|---|---|
| `public/images/blog/guvenlik-agi-teslim-kullanim-kontrolu.webp` | 250126 bayt | Çelik taşıyıcılar arasında gerilmiş turkuaz ağ, altında boş alan ve önde kontrol panosu bulunan yapı illüstrasyonu | Güvenlik ağında teslim kaydı ve alt boşluk |
| `public/images/blog/dis-cephe-aydinlatma-bakim-gece-kabulu.webp` | 255610 bayt | Alacakaranlıkta sıcak ışıkla aydınlatılmış taş ve cam cephe, önde cephe çizimi ve örnek armatür bulunan illüstrasyon | Cephe aydınlatmasında gece görünümü ve bakım planı |

Caption'lar makale verisinde tanımlıdır. Şablon ayrıca yapay editoryal illüstrasyon olduklarını görünür biçimde belirtir. Görsel bağlantısı kendi makalesinin canonical URL'sine gider; BlogPosting.image ve ImageObject.contentUrl aynı WebP'yi gösterir. Public, dist ve dist-server kopyaları build ile üretildi.

### Güvenlik ağı görselinin tam istemi

> Use case: illustration-story. Create one polished editorial illustration for a Turkish technical article about construction safety-net handover and inspection. Wide horizontal 2:1 composition. Architectural cutaway of a generic unoccupied steel-frame construction bay, a taut but visibly flexible teal safety net spanning below the work level, substantial clear empty space beneath, perimeter steel members, a clipboard and rolled plan in the foreground on a safe ground-level desk. Quiet muted navy, teal and warm concrete palette, meticulous contemporary architectural magazine illustration, slightly isometric perspective. No people standing on nets, no falling person, no installation instruction details or numerical dimensions, no text, no lettering, no logos, no certification marks, no photographic claim about any real project. The image should communicate system context and inspection documentation, not serve as an engineering detail.

### Aydınlatma görselinin tam istemi

> Use case: illustration-story. Create a refined editorial architectural illustration for a Turkish facilities-management article about exterior decorative facade lighting, maintenance access and nighttime acceptance. Wide horizontal 2:1 landscape. An imaginary medium-rise contemporary stone-and-glass building at blue hour viewed from street level, restrained warm downward wall-washing fixtures mounted beneath horizontal facade ledges, some facade areas intentionally unlit, light directed onto the building rather than into the sky or neighbouring windows. Foreground shows a safe ground-level desk with a simple unlabelled facade elevation drawing and a closed sample LED luminaire; no wiring exposed. Muted navy twilight, warm cream illumination, teal accents, detailed high-end architecture magazine rendering. No text, numbers, logos, company branding or real landmarks. No people at height, no ladders, no procedural electrical diagram, no claims of a real completed project. Balanced subtle illumination, avoid dramatic beams shooting upwards.

## Doğrulama

| Kapı | Sonuç |
|---|---|
| `npm ci` | PASS — kilit dosyası değişmedi |
| `npm run build` | PASS — sitemap/llms, client/SSR ve prerender üretildi |
| `npm run lint` | PASS |
| `npm run validate:blog` | PASS — 12 makale |
| `npm run validate:all-seo` | PASS — normal dizinde tam tekrar; 38 indekslenebilir URL |
| `git diff --check` | PASS |
| Yeni sayfa HTML/JSON-LD kontrolü | PASS — H1/H2, meta, canonical, FAQ, ImageObject, dosya eşliği |
| Yeni sayfa görünür kelime sayacı kontrolü | PASS — sayaç/kelime sayısı etiketi yok |
| Eski 10 makalenin kaynaklarının korunması | PASS |
| Deploy / canlı doğrulama | NOT_RUN — görev kapsamı dışında |

Tüm SEO paketi route/canonical/prerender, yerel HTTP ve gerçek 404, Playwright hydration ve filmstrip, llms, hizmet SEO/iddia/UX ve blog kontrollerini içerir. İlk başarısız deneme başarı olarak sayılmadı. Ek HTML kontrolündeki mainEntityOfPage beklentisi, şablonun kullandığı geçerli WebPage/@id yapısına göre düzeltildi; ürün kodu değişmedi.

Mevcut araç zinciri uyarıları: modül türü bildirimi, statik/dinamik import çakışması ve büyük JS paketi. `npm ci` ayrıca mevcut kilitli bağımlılıklarda 3 orta ve 7 yüksek önem dereceli güvenlik bulgusu bildirdi; bağımlılıklar bu içerik çalışmasında güncellenmedi ve bu bulgular giderilmiş sayılmadı.
