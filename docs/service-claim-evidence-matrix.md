# Hizmet Claim / Kanıt Matrisi

Bu kayıt, hizmet sayfalarında kullanılabilecek iddiaların hangi kanıtla yayınlanabileceğini tanımlar. Kanıtı bulunmayan ifade kamuya açık metinde kullanılmaz; sanitizer ve prerender claim validator bu kuralın teknik emniyet kemeridir.

Durumlar:

- `PUBLIC_COPY_PASS`: Mevcut prerender HTML’inde yasaklı sayısal, garanti veya üstünlük kalıbı bulunmuyor.
- `EVIDENCE_REQUIRED`: Aşağıdaki iddia alanları ancak belge, resmi profil, üretici dokümanı veya izinli saha kaydıyla açılabilir.

| Hizmet | GSC baz pozisyonu | Gösterim / tıklama | Kamu metni | Kanıt bekleyen alan |
|---|---:|---:|---|---|
| Dış Cephe Dekoratif Aydınlatma | 4,7 | 17 / 0 | PUBLIC_COPY_PASS | Ürün/armatür, montaj kapsamı, bakım ve garanti koşulları |
| Tersane ve Offshore Hizmetleri | 3,4 | 19 / 0 | PUBLIC_COPY_PASS | Tesis izinleri, ekip yetkinliği, operasyon kapsamı ve saha referansları |
| İç ve Dış Cephe Temizlik Hizmetleri | 18,7 | 21 / 0 | PUBLIC_COPY_PASS | Kullanılan yöntem, ekipman, kimyasal ve saha güvenliği prosedürü |
| Güvenlik Ağı Kurulumu | 8,2 | 20 / 1 | PUBLIC_COPY_PASS | Ürün sınıfı, üretici dokümanı, montaj ve periyodik kontrol prosedürü |
| Yatay ve Düşey Yaşam Hattı | 10,1 | 17 / 0 | PUBLIC_COPY_PASS | Sistem üreticisi, ankraj hesabı, kurulum ve kontrol yetkisi |
| Jeoteknik Uygulamalar | 5,0 | 8 / 0 | PUBLIC_COPY_PASS | Mühendislik sorumluluğu, keşif çıktısı ve tasarım kapsamı |
| Yamaç Yüzeyi Temizleme | 9,1 | 11 / 0 | PUBLIC_COPY_PASS | Saha risk değerlendirmesi, izinler, ekip ve teslim raporu |
| Şev Örtüleme Sistemleri | 4,9 | 22 / 0 | PUBLIC_COPY_PASS | Mesh/ankraj üretici bilgisi, tasarım hesabı ve bakım kapsamı |
| Hassas Endüstriyel Alan Koruması | 6,0 | 1 / 0 | PUBLIC_COPY_PASS | Tesis prosedürleri, izinler, izolasyon ve ekipman uygunluğu |
| Kaya Bariyeri Kurulumu | 8,3 | 22 / 2 | PUBLIC_COPY_PASS | Üretici test raporu, enerji kapasitesi, proje hesabı ve montaj kaydı |
| Deflektör Tip Şev Örtüleme | 8,0 | 8 / 0 | PUBLIC_COPY_PASS | Sistem teknik föyü, yönlendirme tasarımı ve saha kabul kaydı |
| Moloz Bariyer Sistemleri | 3,9 | 7 / 0 | PUBLIC_COPY_PASS | Sistem sınıfı, üretici dokümanı, montaj ve darbe sonrası kontrol süreci |
| Ormanda İple Erişim Hizmetleri | 14,8 | 8 / 1 | PUBLIC_COPY_PASS | Arazi/çevre izinleri, ağaç çalışması kapsamı ve ekip yetkinliği |
| Stand-by & Rescue Hizmeti | 6,6 | 26 / 0 | PUBLIC_COPY_PASS | Saha acil durum planı, ekipman listesi, görev tanımı ve tatbikat kaydı |
| Rüzgar Enerji Santralleri Bakım Hizmetleri | 31,0 | 62 / 1 | PUBLIC_COPY_PASS | OEM yetkisi, türbin erişim kapsamı, bakım/muayene prosedürü ve rapor örneği |
| Gabion Duvar Uygulamaları | 7,0 | 22 / 1 | PUBLIC_COPY_PASS | Zemin/temel tasarımı, sepet üreticisi, drenaj ve saha teslimi |
| Sahne İşleri (Rigging) Hizmetleri | 4,7 | 27 / 0 | PUBLIC_COPY_PASS | Yük planı, ekipman sertifikaları, mühendislik ve etkinlik izinleri |
| SPRAT Eğitimi ve Sertifikasyonu | 21,5 | 46 / 0 | PUBLIC_COPY_PASS | Güncel eğitim merkezi/ değerlendirici yetkisi, program ve sınav kapsamı |
| IRATA Eğitimi ve Sertifikasyonu | 18,7 | 74 / 0 | PUBLIC_COPY_PASS | Güncel IRATA üyelik/teknik yetki, kurs kapsamı ve sınav koşulları |
| Kar ve Çığ Kontrolü Uygulamaları | 5,9 | 57 / 1 | PUBLIC_COPY_PASS | Proje mühendisliği, meteorolojik veri, sistem üreticisi ve izinler |

## Kanıt kabul standardı

1. Belgenin sahibi, geçerlilik tarihi ve kapsamı kayıt altına alınır.
2. Resmi kurum, standart kuruluşu, üretici veya şirket içi imzalı saha kaydı tercih edilir.
3. Kanıt yalnızca iddianın kapsadığı hizmet ve coğrafya için kullanılır; başka sayfaya genellenmez.
4. Kanıt süresi dolduğunda ifade otomatik olarak tekrar incelemeye alınır.
5. Müşteri, proje ve saha görselleri yalnızca yazılı izin ve tarih/konum bilgisiyle yayınlanır.

Bu dosyada kanıt bulunmayan alanlar tamamlanmış sayılmaz. `validate-service-claims.mjs` yalnızca görünür metin güvenlik kapısıdır; belge doğrulamasının yerine geçmez.
