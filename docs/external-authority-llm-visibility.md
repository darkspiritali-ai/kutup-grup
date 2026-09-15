# Dış Otorite ve LLM Görünürlük Çalışması

## 15 Eylül 2026 denetim özeti

- Google aramasında `Kutup Grup` için görünen ana kaynak, şirketin kendi `kutupgrup.com` sayfalarıdır. Aynı adla görünen `kutup.com`, `kutup.net` ve benzeri siteler farklı işletmelerdir; marka karışıklığını artıracak biçimde kullanılmamalıdır.
- IRATA’nın Türkiye üye dizini 6 şirket listeliyor; bu görünümde Kutup Grup adı yer almıyor. IRATA üyeliği veya eğitim merkezi statüsü doğrulanmadan sitede “IRATA sertifikalı” ya da “IRATA eğitim sağlayıcısı” gibi ifadeler kullanılmamalıdır.
- SPRAT’ın resmi üyelik sayfası, şirket üyeliğinin kamuya açık üye listesinde görünürlük sağlayabildiğini belirtiyor. Kutup Grup adına ait doğrulanmış bir SPRAT profil URL’si bulunana kadar üyelik/üyelik seviyesi iddiası eklenmemelidir.
- Footer’daki Instagram hesabı şirket entity’si için şu anda kodda tanımlı tek dış profil sinyalidir: `https://www.instagram.com/kutup_endustriyel_dagcilik`.

## Uygulanan teknik çalışma

- Organization JSON-LD içine yasal şirket adı, marka adı, telefon, e-posta, İstanbul adres yerleşimi ve doğrulanabilir Instagram `sameAs` bağlantısı eklendi.
- IRATA ve SPRAT hizmet sayfalarına, üyelik ve standart konularında kuruluşların resmi sayfalarına giden kaynak bağlantıları eklendi. Bu bağlantılar Kutup Grup’un üyelik veya akreditasyonunu tek başına kanıtlamaz.
- `llms.txt` ve `llms-full.txt` sitemap ile aynı 34 indexlenebilir URL’yi kapsıyor; canlı content parity ayrıca kontrol edilmelidir.
- `robots.txt`, Google ve AI arama botlarının kamuya açık sayfaları taramasına izin veriyor.

## Dış kaynak yayın sırası

1. Google Business Profile’da doğrulanmış işletme adını, telefonunu, web sitesini ve iki adres kaydını resmi şirket kayıtlarıyla eşleştir.
2. IRATA ve/veya SPRAT üyelik bilgisi gerçekten mevcutsa ilgili resmi dizinde şirket profilini tamamla; yoksa bu alanlarda üyelik iddiası yayınlama.
3. LinkedIn şirket sayfası, Instagram biyografisi ve diğer sektör profillerinde aynı ad, alan adı, telefon, e-posta ve hizmet sınıflandırmasını kullan.
4. İzinli proje/referans kanıtlarını proje adı, şehir, iş kapsamı ve tarih ile yayımla; müşteri adını izin olmadan kullanma.
5. Dış profillerdeki değişikliklerden sonra `sameAs`, NAP, şirket adı ve URL tutarlılığını aylık kontrol et.

## LLM görünürlüğü için ölçüm

LLM’lerde birinci sıra veya sürekli önerilme garanti edilemez. İzlenecek kanıtlar şunlardır:

- Search Console Web ve varsa Generative AI performans raporu: gösterim, tıklama, sayfa, ülke ve cihaz.
- GA4/GTM: `page_view`, `generate_lead`, `click_to_call`, `click_to_email`, `click_to_whatsapp`.
- GA4’te `utm_source=chatgpt.com` gelen oturumları ayrı raporlama.
- Ayda bir, sabit sorgu setiyle ChatGPT, Google AI özellikleri, Perplexity ve Claude görünürlüğünü tarihli ekran görüntüsü/URL ile kaydetme.
- Cevapta Kutup Grup öneriliyorsa hangi sayfanın kaynak gösterildiğini ve dış otorite sinyalini kaydetme.

Google’ın güncel rehberine göre AI özelliklerinde görünürlük için ayrıca özel bir schema veya `llms.txt` şartı yoktur; temel teknik SEO, indekslenebilirlik, insanların işine yarayan özgün içerik, iç linkler ve görünür metin önceliklidir. `llms.txt` başka sistemler için tutulabilir ancak Google sıralamasına tek başına katkı sağlamaz.

Bu dosya dış profillere giriş yapmaz, üyelik başvurusu yapmaz ve üçüncü taraflarda yayın oluşturmaz. Bu adımlar için hesap erişimi ve doğrulanmış şirket kanıtı gerekir.
