interface EditorialSection {
    heading: string;
    content: string;
}

interface EditorialFaq {
    question: string;
    answer: string;
}

interface EditorialServiceCopy {
    intro: string;
    sections: EditorialSection[];
    faqs: EditorialFaq[];
}

/**
 * Public, evidence-conscious copy for service pages. The older catalogue still
 * contains campaign language, so this layer keeps the indexable copy focused
 * on scope, decision points, process and deliverables.
 */
export const SERVICE_EDITORIAL_COPY: Record<string, EditorialServiceCopy> = {
    'dis-cephe-dekoratif-aydinlatma': {
        intro: 'Dış cephe dekoratif aydınlatma; yapının mimarisi, cephe malzemesi, erişim yöntemi ve elektrik altyapısı birlikte değerlendirilerek planlanır. Kutup Grup, keşif ve uygulama kapsamını yapının gerçek koşullarına göre netleştirir.',
        sections: [
            {
                heading: 'Cephe aydınlatması nasıl planlanır?',
                content: 'İyi bir cephe aydınlatması yalnızca armatür seçmekten ibaret değildir. Yapının gündüz ve gece görünümü, çevredeki kullanıcılar, ışığın komşu alanlara etkisi, bakım erişimi ve mevcut elektrik altyapısı birlikte ele alınır. İlk değerlendirmede cephe çizimleri, fotoğraflar, çalışma saatleri ve istenen görsel etki toplanır. Böylece teklif, yalnızca ürün listesine değil, gerçek bir uygulama kapsamına dayanır.\n\nCephe kaplaması, derzler, parapetler, saçaklar ve sabitleme noktaları armatür yerleşimini etkileyebilir. Bu nedenle aydınlatma senaryosu ile montaj yöntemi aynı aşamada düşünülür. Erişimi sınırlı yüzeylerde iple erişim, platform veya başka bir yöntem; yapıya, zemine ve görev süresine göre karşılaştırılır.',
            },
            {
                heading: 'Uygulama, kontrol ve teslim kapsamı',
                content: 'Uygulama öncesinde çalışma alanı, enerji kesintisi gereksinimi, malzeme sevkiyatı, çevre güvenliği ve iletişim yöntemi belirlenir. Montaj sırasında kablo güzergâhları, bağlantı noktaları ve armatür yönleri proje kapsamına uygun biçimde kontrol edilir. Renk veya senaryo seçimi varsa, devreye alma öncesinde işletme sorumlusu ile birlikte gözden geçirilir.\n\nTeslim kapsamında yapılan işin özeti, kullanılan ürünlerin bilgisi, bakım için erişim notları ve gözlenen eksikler paylaşılabilir. Periyodik kontrol ihtiyacı; armatür tipi, çevre koşulları, çalışma süresi ve yapının kullanımına göre ayrıca belirlenir. Uygulama kararı, yerinde inceleme ve elektriksel gereklilikler doğrulandıktan sonra kesinleştirilir.',
            },
        ],
        faqs: [
            { question: 'Dış cephe aydınlatması için keşifte hangi bilgiler gerekir?', answer: 'Yapının konumu, cephe fotoğrafları veya çizimleri, aydınlatılacak yüzeyler, çalışma saatleri, mevcut elektrik altyapısı ve istenen görsel etki ilk değerlendirme için yeterli bir başlangıç sağlar.' },
            { question: 'Aydınlatma montajında erişim yöntemi nasıl belirlenir?', answer: 'Cephe geometrisi, zemin koşulları, sabitleme noktaları, çevredeki kullanıcılar ve iş güvenliği gereklilikleri incelenir. Uygun yöntem bu veriler karşılaştırıldıktan sonra belirlenir.' },
        ],
    },
    'tersane-ve-offshore-hizmetleri': {
        intro: 'Tersane ve deniz yapılarındaki erişim, bakım ve yüzey çalışmaları; geminin veya tesisin operasyonu, çalışma alanı ve izin düzeniyle birlikte planlanır. Kutup Grup, görev kapsamını saha bilgileriyle netleştirmeye odaklanır.',
        sections: [
            {
                heading: 'Tersane ve deniz yapılarında çalışma kapsamı',
                content: 'Tersane sahalarında aynı anda birden fazla ekip, kaldırma faaliyeti, kaynak işi, boya süreci ve gemi hareketi bulunabilir. Bu nedenle erişim planı yalnızca çalışılacak yüzeyi değil, çevredeki faaliyetleri ve iletişim noktalarını da kapsamalıdır. Gemi bordası, tank çevresi, vinç yapıları, iskele altları ve erişimi sınırlı metal yüzeyler görev bazında değerlendirilir.\n\nİlk görüşmede işin amacı, yüzeyin durumu, kullanılacak malzeme, kapatılması gereken alanlar ve teslim beklenentileri yazılı hale getirilir. Muayene, temizlik, yüzey hazırlığı, küçük bakım veya fotoğraflı durum tespiti gibi işler birbirinden ayrılır; her iş için farklı ekipman ve kontrol adımları gerekebileceği belirtilir.',
            },
            {
                heading: 'İzin, koordinasyon ve teslim',
                content: 'Deniz yapılarında çalışma başlamadan önce saha yetkilisi, gemi operasyonu, erişim noktaları, kurtarma yaklaşımı ve malzeme indirme yöntemi birlikte koordine edilir. Çalışma alanının altında veya yanında devam eden operasyonlar varsa durdurma ve yeniden başlatma koşulları belirlenir. Hava, deniz hareketi ve yüzey koşulları da günlük planın parçasıdır.\n\nTeslim; yapılan işin kapsamı, kontrol edilen alanlar, tespit edilen durumlar ve takip gerektiren noktalar üzerinden hazırlanır. Boya veya onarım gibi uzmanlık gerektiren işlerde ürün ve uygulama talimatları ayrıca doğrulanır. Teklifin kapsamı, yerinde inceleme ve tesisin izin düzeni görüldükten sonra kesinleştirilir.',
            },
        ],
        faqs: [
            { question: 'Tersane sahasında çalışmaya başlamadan önce ne gerekir?', answer: 'Çalışma alanı, gemi veya tesis operasyonu, saha izinleri, erişim noktaları, malzeme yöntemi ve acil durum iletişimi birlikte değerlendirilmelidir.' },
            { question: 'İple erişim her tersane işi için uygun mudur?', answer: 'Hayır. Yüzey, görev, operasyon trafiği, ekipman ve kurtarma koşulları incelenir; iple erişim, platform veya başka bir yöntem arasından saha için uygun seçenek belirlenir.' },
        ],
    },
    'ic-ve-dis-cephe-temizlik-hizmetleri': {
        intro: 'İç ve dış cephe temizliği; yüzey türü, kirin niteliği, erişim koşulları ve binanın günlük kullanımı dikkate alınarak planlanır. Kutup Grup, temizlik yöntemini yüzeye zarar vermeyecek ve kontrol edilebilir bir çalışma düzeniyle belirler.',
        sections: [
            {
                heading: 'Yüzey ve kir analizine göre temizlik',
                content: 'Cam, kompozit panel, taş, metal, boya ve hassas kaplama yüzeyleri aynı yöntemle temizlenmez. Ön incelemede yüzeyin malzemesi, önceki uygulamalar, su izleri, kireç, toz, yağ veya yapışmış kalıntılar gözden geçirilir. Küçük bir deneme alanı, seçilecek fırça, su, kimyasal veya mekanik işlemin yüzeye etkisini anlamaya yardımcı olabilir.\n\nDış cephede rüzgâr, yağış, çevredeki araç ve yaya trafiği; iç cephede ise zemin kullanımı, mobilyalar, ziyaretçi akışı ve düşen malzeme riski planlamaya dâhil edilir. Çalışma alanı sınırları ve bina sorumlusuyla iletişim yöntemi baştan belirlenir.',
            },
            {
                heading: 'Erişim, uygulama ve bakım önerisi',
                content: 'Erişim yöntemi; cephe yüksekliği, girinti ve çıkıntılar, ankraj imkânı, zemin ve çevredeki engeller incelendikten sonra seçilir. Uygulama sırasında yüzeyin temizlenme durumu, su akışı, kullanılan ürünler ve çevreye sıçrama ihtimali kontrol edilir. İç alanlarda zemin ve dolaşım yolları çalışma öncesinde korunur.\n\nTeslim sonrasında temizlenen alanlar, görülen yüzey kusurları ve tekrar kontrol edilmesi gereken noktalar kayda alınabilir. Temizlik sıklığı; binanın konumu, trafik ve üretim ortamı, yüzey malzemesi ve estetik beklentiye göre belirlenmelidir. Teklif için cephe fotoğrafları, yaklaşık alan ve erişim bilgileri paylaşılabilir.',
            },
        ],
        faqs: [
            { question: 'Cephe temizliği için fotoğrafla teklif alınabilir mi?', answer: 'Fotoğraf, yaklaşık alan ve bina bilgisi ilk değerlendirmeyi kolaylaştırır; yöntem ve kesin kapsam için erişim noktalarının ve yüzeyin ayrıca görülmesi gerekebilir.' },
            { question: 'Her cephede aynı temizlik ürünü kullanılır mı?', answer: 'Hayır. Yüzey malzemesi, kirin niteliği ve üretici talimatları incelenir. Uygun ürün ve yöntem mümkünse küçük bir deneme alanı üzerinden belirlenir.' },
        ],
    },
    'guvenlik-agi-kurulumu': {
        intro: 'Güvenlik ağı kurulumu; düşme riski, açıklığın geometrisi, taşıyıcı noktalar, ağın kullanım amacı ve söküm ihtiyacı birlikte değerlendirilerek planlanır. Kutup Grup, sistem seçiminden kontrol adımlarına kadar kapsamı saha bilgileriyle netleştirir.',
        sections: [
            {
                heading: 'Güvenlik ağı hangi koşullarda değerlendirilir?',
                content: 'Şantiye döşeme kenarları, çatı boşlukları, atriumlar, üretim alanları ve geçici çalışma platformları farklı ağ çözümleri gerektirebilir. Ön incelemede açıklığın ölçüsü, ağın altındaki boşluk, düşebilecek malzemenin niteliği, çevredeki çalışma düzeni ve sabitleme yüzeyleri incelenir. Ağın personel düşmesine karşı mı, malzeme düşmesine karşı mı kullanılacağı da açıkça yazılmalıdır.\n\nMevcut kiriş, kolon, çelik konstrüksiyon veya ankraj noktaları sistemin yerleşimini etkiler. Montaj yöntemi; erişim, kaldırma ve saha trafiğiyle birlikte planlanır. Geçici uygulamalarda söküm sırası ve yeniden kullanım koşulları da baştan değerlendirilir.',
            },
            {
                heading: 'Montaj, kontrol ve kullanım süreci',
                content: 'Montaj öncesinde ağın sınırları, bağlantı noktaları, çalışma alanı ve iletişim yöntemi belirlenir. Kurulum tamamlandıktan sonra bağlantılar, boşluklar, kenar sürekliliği ve çevredeki kesici yüzeyler kontrol edilir. Ağın üzerine malzeme bırakılmaması, yetkisiz müdahalenin önlenmesi ve periyodik gözlem sorumluluğunun belirlenmesi gerekir.\n\nTeslim kaydı; kurulan alanı, gözlenen kısıtları, kontrol tarihini ve takip edilmesi gereken noktaları içerebilir. Ağın kapasitesi ve kullanım koşulları, seçilen sistemin teknik dokümanlarıyla doğrulanmadan kesin bir uygunluk ifadesi kullanılmamalıdır.',
            },
        ],
        faqs: [
            { question: 'Güvenlik ağı kurulumu için hangi saha bilgileri gerekir?', answer: 'Açıklığın ölçüsü, taşıyıcı yüzeyler, düşme veya malzeme riski, kullanım amacı, çalışma süresi ve montaj erişimi temel değerlendirme başlıklarıdır.' },
            { question: 'Kurulan ağ ne sıklıkla kontrol edilmelidir?', answer: 'Kontrol aralığı kullanım yoğunluğu, çevre koşulları, ağın yeri ve sistem üreticisinin talimatlarına göre belirlenir. Hasar, gevşeme veya değişiklik görüldüğünde ayrıca kontrol gerekir.' },
        ],
    },
    'yatay-ve-dusey-yasam-hatti': {
        intro: 'Yatay ve düşey yaşam hattı sistemleri, yapının kullanım biçimi, erişim rotası, ankraj yüzeyi ve kurtarma yaklaşımı birlikte incelenerek planlanır. Kutup Grup, sistemin yalnızca montajını değil, kullanım ve kontrol kapsamını da açıklar.',
        sections: [
            {
                heading: 'Yaşam hattı ihtiyacı nasıl belirlenir?',
                content: 'Çatı, merdiven, bakım yolu, makine platformu ve cephe erişim rotalarında çalışanların nereden yaklaşacağı ve hangi noktalar arasında hareket edeceği önce haritalanır. Kullanıcı sayısı, geçiş sıklığı, düşme yönü, kenar mesafeleri ve mevcut ankrajlar değerlendirilir. Yatay bir sistemin kesintisiz ilerlemesi ile düşey bir hatta geçiş gereksinimi aynı çözüm içinde ele alınabilir.\n\nYapı malzemesi, taşıyıcı elemanlar, kaplama ve su yalıtımı sabitleme kararını etkiler. Sistem seçimi yapılırken kullanıcı ekipmanı, bağlantı şekli, bakım ihtiyacı ve olası kurtarma senaryosu birlikte yazılı hale getirilmelidir.',
            },
            {
                heading: 'Montaj sonrası kullanım ve kontrol',
                content: 'Montaj öncesinde çalışma alanı, düşen cisim riski, yaya trafiği, ekipman sevkiyatı ve iletişim yöntemi belirlenir. Kurulum sonrasında hat boyunca bağlantılar, uç noktalar, ara elemanlar, yön değişimleri ve uyarı işaretleri kontrol edilir. Kullanıcıların sistemi nasıl bağlayacağı ve hangi kısıtların bulunduğu açık bir teslim notuyla anlatılır.\n\nPeriyodik kontrol; sistemin kullanım yoğunluğuna, çevreye ve üretici talimatlarına göre planlanır. Yapıda tadilat, kaplama değişikliği veya hattın darbe alması durumunda yeniden inceleme gerekir. Uygunluk kararı, gerçek ankraj ve yapı verileri doğrulandıktan sonra verilmelidir.',
            },
        ],
        faqs: [
            { question: 'Yatay ve düşey yaşam hattı arasındaki fark nedir?', answer: 'Yatay hatlar çatı veya bakım yolu boyunca hareket için, düşey hatlar ise merdiven ve benzeri dikey rotalarda bağlantıyı sürdürmek için değerlendirilir. Aynı projede iki sistem birlikte gerekebilir.' },
            { question: 'Yaşam hattı montajından önce yapı incelemesi gerekir mi?', answer: 'Evet. Ankraj yüzeyi, taşıyıcı elemanlar, kaplama, kullanım rotası ve kurtarma yaklaşımı görülmeden sistem seçimi kesinleştirilmemelidir.' },
        ],
    },
    'jeoteknik-uygulamalar': {
        intro: 'Jeoteknik uygulamalar; kaya, şev, yamaç, toprak ve yapı çevresindeki hareket risklerini anlamaya yönelik keşif ve koruma çalışmalarını kapsar. Kutup Grup, çözüm başlığını zemin verisi, arazi erişimi ve proje gereklilikleriyle birlikte değerlendirir.',
        sections: [
            {
                heading: 'Jeoteknik saha değerlendirmesi',
                content: 'Bir yamaç veya kaya yüzeyinde karar verebilmek için yalnızca görünen çatlaklara bakmak yeterli değildir. Eğim, yüzey süreksizlikleri, su akışı, ayrışma, bitki örtüsü, dolgu, yol veya yapı yakınlığı ve geçmişte yapılan müdahaleler birlikte kaydedilir. Fotoğraf, kroki, ölçüm ve gözlem notları; sonraki mühendislik kararları için ortak bir zemin oluşturur.\n\nSaha erişimi de teknik değerlendirmenin parçasıdır. Yaya yaklaşımı, iple erişim, platform veya başka bir yöntem; yüzeyin konumuna ve yapılacak göreve göre seçilir. İlk keşif, nihai tasarım yerine geçmez; gerekli hesap, proje ve izin başlıkları ayrıca belirlenir.',
            },
            {
                heading: 'Koruma çözümünün seçimi ve teslim',
                content: 'Kaya bariyeri, şev örtüleme, moloz bariyeri, yamaç temizliği veya başka bir koruma yaklaşımı; riskin kaynağı, beklenen hareket, korunacak alan ve bakım imkânı karşılaştırılarak ele alınır. Suyun yönlendirilmesi, yüzeyin temizlenmesi ve mevcut yapıların korunması çoğu projede çözümün tamamlayıcı parçalarıdır.\n\nTeslim kapsamında saha bulguları, önerilen sonraki adımlar, erişim kısıtları ve karar için gereken ek veriler açıkça ayrılır. Uygulama öncesinde zemin, malzeme ve yapısal gerekliliklerin ilgili uzmanlarca doğrulanması gerekir.',
            },
        ],
        faqs: [
            { question: 'Jeoteknik keşif ile uygulama projesi aynı şey midir?', answer: 'Hayır. Keşif mevcut koşulları ve risk başlıklarını anlamaya yarar. Uygulama projesi için gerekli hesap, çizim, izin ve malzeme kararları ayrıca hazırlanmalıdır.' },
            { question: 'Kaya veya şev fotoğrafları ilk değerlendirme için yeterli olur mu?', answer: 'Fotoğraflar ön bilgi sağlar; eğim, su, süreksizlikler, çevre ve erişim koşulları görülmeden kesin çözüm veya maliyet kararı verilmemelidir.' },
        ],
    },
    'yamac-yuzeyi-temizleme': {
        intro: 'Yamaç yüzeyi temizleme; kaya, gevşek blok, bitki, moloz ve su akışının çevredeki yol veya yapı üzerindeki etkisi değerlendirilerek planlanır. Çalışma alanı ve müdahale sınırı arazi verileriyle netleştirilir.',
        sections: [
            {
                heading: 'Yamaçta temizlik öncesi keşif',
                content: 'Yamaç yüzeyinde yapılacak temizlik, yalnızca görünen malzemeyi aşağı indirmek anlamına gelmez. Blokların oturduğu yüzey, çatlakların yönü, alt kotta bulunan yol veya yapı, su akışı ve çalışma sırasında oluşabilecek ikincil hareketler incelenir. Fotoğraf ve kroki ile hangi parçaların alınacağı, hangilerinin korunacağı ve malzemenin nereye yönlendirileceği belirlenir.\n\nErişim rotası, üst ve alt yaklaşım, ekipman indirme yöntemi ve çevredeki trafik çalışma planına dâhil edilir. Yağış, rüzgâr, görüş ve yüzeyin ıslaklığı gibi koşullar günlük kararları etkileyebilir; plan bu değişkenlere göre güncellenebilir.',
            },
            {
                heading: 'Kontrollü müdahale ve saha teslimi',
                content: 'Müdahale sırasında üst kot, çalışma hattı ve alt güvenlik alanı arasında iletişim kurulur. Alınan malzeme kontrollü biçimde yönlendirilir; çalışanların ve çevredeki kişilerin bulunduğu alanlar birbirinden ayrılır. Temizleme sonrasında yüzey tekrar gözlenir ve açıkta kalan çatlak, su yolu veya takip edilmesi gereken bloklar kayıt altına alınır.\n\nTemizlik, kalıcı stabilizasyon gerektiren bir yamaçta tek başına yeterli olmayabilir. Bu durumda şev örtüleme, kaya bariyeri, drenaj veya başka bir mühendislik çözümü ayrıca değerlendirilir. Teslim notu, tamamlanan alanı ve kalan risk başlıklarını ayırmalıdır.',
            },
        ],
        faqs: [
            { question: 'Yamaç temizliği hangi durumlarda yapılır?', answer: 'Gevşek kaya, taş, bitki veya molozun yol, yapı ya da çalışma alanına etkisi olduğunda; önce saha koşulları incelenerek kontrollü temizlik gerekip gerekmediği belirlenir.' },
            { question: 'Temizlikten sonra tekrar hareket riski kalır mı?', answer: 'Kalabilir. Temizlik mevcut malzemeyi azaltır; yüzeyin su, çatlak ve stabilite koşulları ayrıca incelenerek izleme veya kalıcı koruma ihtiyacı belirlenmelidir.' },
        ],
    },
    'sev-ortuleme': {
        intro: 'Şev örtüleme, yüzeydeki erozyon, taş düşmesi ve su etkisini azaltmaya yönelik bir koruma yaklaşımıdır. Örtü tipi, ankraj düzeni, şev geometrisi ve bakım ihtiyacı birlikte değerlendirilir.',
        sections: [
            {
                heading: 'Şev örtüleme hangi problemi çözer?',
                content: 'Şev yüzeyinde ayrışan malzeme, yağışla taşınan toprak ve kontrolsüz yüzey akışı; yol, yapı veya çalışma alanı için sorun yaratabilir. Örtüleme, yüzeyin tamamını aynı biçimde kapatmak yerine hangi bölgenin hangi etkiye maruz kaldığını anlamayı gerektirir. Kaya yüzeyi, toprak şev, dolgu ve bitkilenmiş alanlar için farklı ürün ve sabitleme kararları gerekebilir.\n\nKeşifte eğim, yüzey sürekliliği, su izleri, mevcut drenaj, üst ve alt kot kullanımı ve erişim rotası kaydedilir. Örtünün yalnızca yüzeyde durması değil, kenar ve ara ankrajlarla sürekliliğinin sağlanması da tasarımın parçasıdır.',
            },
            {
                heading: 'Montaj ve bakım planı',
                content: 'Montaj öncesinde yüzeyin temizlenmesi, gevşek parçaların alınması, ankraj yerlerinin belirlenmesi ve malzeme taşıma yöntemi planlanır. Uygulama sırasında örtü ekleri, bindirmeler, kenarlar, ankrajlar ve drenajla kesişen noktalar kontrol edilir. Çalışma tamamlandığında yüzeyin erişilebilirliği ve sonraki kontroller için referans noktaları kayda alınabilir.\n\nÖrtüleme her zaman tek başına çözüm değildir. Su akışı, blok hareketi veya alt kot riski devam ediyorsa bariyer, drenaj, temizlik veya izleme gibi ek başlıklar gündeme gelir. Bakım aralığı çevre koşullarına ve yüzeydeki değişime göre belirlenmelidir.',
            },
        ],
        faqs: [
            { question: 'Şev örtüleme ile kaya bariyeri arasındaki fark nedir?', answer: 'Örtüleme yüzeydeki malzeme ve erozyon etkisini kontrol etmeye odaklanır. Bariyer ise hareket eden malzemenin belirli bir hatta tutulması veya yönlendirilmesi için değerlendirilir; aynı sahada ikisi birlikte gerekebilir.' },
            { question: 'Şev örtüsü montajından önce yüzey temizlenir mi?', answer: 'Gevşek ve müdahale edilmesi gereken parçalar incelenir. Temizleme kapsamı, yüzeye, risk kaynağına ve seçilecek örtü sistemine göre belirlenir.' },
        ],
    },
    'hassas-endustriyel-alan-korumasi': {
        intro: 'Hassas endüstriyel alanlarda erişim ve koruma çalışmaları; tesisin operasyonu, ekipman hassasiyeti, izin düzeni ve acil durum planıyla birlikte yürütülür. Kutup Grup, görev sınırlarını tesis sorumlularıyla netleştirir.',
        sections: [
            {
                heading: 'Tesis koşulları ve çalışma sınırları',
                content: 'Üretim hattı, enerji ekipmanı, boru geçişleri, tank çevresi veya dar bakım alanları; standart bir dış cephe çalışmasından farklı riskler taşır. Keşifte tesisin giriş prosedürü, çalışma izni, enerji izolasyonu, proses devamlılığı, hassas yüzeyler ve çevredeki ekipler değerlendirilir. Erişim için kullanılacak ekipmanın yüzeye, prosese veya temiz alan düzenine etkisi ayrıca yazılır.\n\nGörevin muayene, fotoğraflama, temizlik, küçük bakım veya malzeme taşıma olup olmadığı netleştirilmelidir. Her görev için kullanılacak araç, alanı koruma yöntemi, haberleşme ve durdurma koşulları farklı olabilir.',
            },
            {
                heading: 'Koordinasyon ve teslim kayıtları',
                content: 'Çalışma öncesinde tesis sorumlusu, saha ekibi ve varsa bakım veya iş güvenliği birimi arasında kısa bir koordinasyon yapılır. İzole edilmesi gereken hatlar, erişim sınırları, düşen cisim kontrolü ve acil durumda toplanma yöntemi belirlenir. Çalışma sırasında plan dışı bir durum görüldüğünde görev durdurularak yeniden değerlendirme yapılır.\n\nTeslim; erişilen noktalar, yapılan işlem, gözlenen durum, fotoğraf veya kontrol notları üzerinden hazırlanabilir. Proses ekipmanı ve özel alan prosedürleri, tesisin kendi talimatlarıyla birlikte doğrulanmadan kesin uygunluk veya süre vaadi verilmemelidir.',
            },
        ],
        faqs: [
            { question: 'Hassas tesiste çalışmadan önce hangi belgeler gerekir?', answer: 'Gereken belgeler tesisin izin düzenine ve görevin niteliğine göre değişir. Çalışma izni, görev tanımı, risk değerlendirmesi, ekipman kayıtları ve acil durum iletişimi baştan belirlenmelidir.' },
            { question: 'Üretim devam ederken erişim çalışması yapılabilir mi?', answer: 'Bazı görevler planlanabilir, bazıları için duruş veya izolasyon gerekebilir. Karar tesis operasyonu, ekipman hassasiyeti ve iş güvenliği koşulları birlikte değerlendirildikten sonra verilir.' },
        ],
    },
    'kaya-bariyeri': {
        intro: 'Kaya bariyeri; kaya, blok ve taş düşmesi riskinin bulunduğu yamaçlarda yol, yapı veya tesisleri korumaya yönelik bir çözüm olarak değerlendirilir. Sistem seçimi, arazi verileri ve beklenen hareket koşullarıyla birlikte yapılır.',
        sections: [
            {
                heading: 'Kaya bariyeri ihtiyacı nasıl incelenir?',
                content: 'Bariyer kararı vermeden önce düşmenin kaynağı, yamaç eğimi, blokların izlediği yol, alt kotta korunacak alan ve mevcut doğal veya yapay engeller incelenir. Saha gözlemi; çatlaklar, kopma yüzeyleri, su akışı, bitki kökleri ve önceki taş düşmesi izleriyle desteklenir. Fotoğraf ve kroki, bariyer hattının neden o noktada önerildiğini açıklamaya yardımcı olur.\n\nBariyerin yüksekliği, konumu, ankraj zemini, erişim yolu ve bakım şekli proje hesaplarıyla belirlenmelidir. Bu nedenle genel bir ürün adı, her arazi için doğrudan uygunluk anlamına gelmez; teknik seçim yetkili tasarım ve üretici dokümanlarıyla doğrulanır.',
            },
            {
                heading: 'Kurulum, kontrol ve bakım',
                content: 'Kurulum öncesinde yamaç yüzeyi, malzeme taşıma rotası, ankraj noktaları, çalışma hattı ve alt kot güvenliği planlanır. Uygulama sırasında direkler, halatlar, ağ bağlantıları, uçlar ve zeminle birleşen noktalar kontrol edilir. Kurulum tamamlandıktan sonra bariyer hattı boyunca açık kalan geçişler ve takip edilmesi gereken bloklar ayrıca kayda alınır.\n\nBariyerin düzenli kontrolü; yeni taş düşmesi, korozyon, deformasyon, ankraj değişimi ve çevredeki kazı veya dolgu çalışmalarına göre planlanır. Hasar veya yeni jeolojik bulgu görüldüğünde yeniden inceleme yapılmadan sistemin durumu hakkında kesin hüküm verilmemelidir.',
            },
        ],
        faqs: [
            { question: 'Kaya bariyeri hangi alanlarda değerlendirilir?', answer: 'Yol kenarları, yapı çevreleri, enerji ve ulaşım tesisleri veya kaya düşmesi riski görülen çalışma alanları için değerlendirme yapılabilir. Uygunluk arazi incelemesine bağlıdır.' },
            { question: 'Kaya bariyeri kurulduktan sonra bakım gerekir mi?', answer: 'Evet. Bariyer hattı, ankrajlar, ağ, halatlar ve çevredeki yamaç değişimleri belirlenen aralıklarla kontrol edilmelidir.' },
        ],
    },
    'deflektor-tip-ortuleme': {
        intro: 'Deflektör tip örtüleme, yamaçtan gelen taş veya molozun korunacak alana ulaşmasını azaltmak ve hareket yönünü yönetmek için değerlendirilir. Geometri, ankraj, alt kot ve bakım koşulları birlikte incelenir.',
        sections: [
            {
                heading: 'Deflektör çözümünün kullanım amacı',
                content: 'Deflektör uygulamasında amaç, yüzeyi yalnızca kapatmak değil, hareket eden malzemenin yolunu ve enerjisini yönetmektir. Bu nedenle yamaç eğimi, hareket güzergâhı, korunacak alanın konumu, dönüş noktaları ve alt kotta bulunan yapılar incelenir. Mevcut drenaj, yol genişliği, enerji hatları ve erişim kısıtları tasarım kararını etkileyebilir.\n\nÖn keşifte taş düşmesi izleri, yüzeydeki gevşek malzeme, suyun taşıdığı parçalar ve daha önce yapılmış koruma imalatları kaydedilir. Deflektörün konumu ve örtüyle birleşimi, mühendislik hesabı ve ürün dokümanlarıyla doğrulanmadan kesinleştirilmemelidir.',
            },
            {
                heading: 'Uygulama ve kontrol başlıkları',
                content: 'Montaj öncesinde yüzey temizliği, ankraj noktaları, malzeme taşıma, çalışma hattı ve alt kotun korunması planlanır. Örtü birleşimleri, kenar ankrajları, geçiş noktaları ve suyun sistem çevresindeki davranışı uygulama sırasında kontrol edilir. Teslim kaydında sistemin hangi alanı korumak üzere kurulduğu ve hangi koşullarda yeniden incelenmesi gerektiği belirtilir.\n\nYeni kazı, dolgu, drenaj değişikliği veya yamaç hareketi deflektörün çalışma koşulunu etkileyebilir. Periyodik gözlem ve bakım kapsamı, arazi ve tesis sorumlularıyla birlikte belirlenmelidir.',
            },
        ],
        faqs: [
            { question: 'Deflektör tip örtüleme ile normal şev örtüsü aynı mıdır?', answer: 'Aynı amaçla kullanılmayabilir. Deflektör hareket yönünü yönetmeye odaklanır; şev örtüsü ise yüzeydeki malzeme ve erozyon etkisini kontrol etmek için değerlendirilir.' },
            { question: 'Deflektör uygulaması için hangi arazi bilgileri gerekir?', answer: 'Hareket yönü, yamaç geometrisi, korunacak alan, mevcut su yolları, ankraj zemini ve erişim koşulları temel değerlendirme verileridir.' },
        ],
    },
    'moloz-bariyer': {
        intro: 'Moloz bariyeri; taş, toprak, dal, inşaat artığı veya yamaçtan gelen parçaların belirli bir alana ulaşmasını azaltmak için değerlendirilen bir koruma çözümüdür. Bariyerin yeri ve kapasitesi saha koşullarıyla belirlenir.',
        sections: [
            {
                heading: 'Bariyer hattı nasıl belirlenir?',
                content: 'Molozun kaynağı, akış veya düşüş yönü, birikme alanı, korunacak yol ya da yapı ve mevcut drenaj birlikte incelenir. Bariyerin yalnızca alt kotta görünür bir engel olarak konumlandırılması yeterli olmayabilir; suyun bariyere taşıdığı ince malzeme, temizlik erişimi ve taşma ihtimali de değerlendirilmelidir.\n\nKeşifte mevsimsel değişiklikler, yağış sonrası izler, eğim, yol trafiği ve çevredeki kullanım kaydedilir. Geçici bir çalışma alanı koruması ile kalıcı yamaç çözümü birbirinden ayrılır; teklif ve teslim kapsamı bu ayrıma göre yazılır.',
            },
            {
                heading: 'Kurulum sonrası izleme',
                content: 'Kurulum öncesinde zemin hazırlığı, ankraj veya temel ihtiyacı, malzeme sevkiyatı, erişim ve alt kot güvenliği planlanır. Uygulama sonrasında bariyerin hattı, bağlantıları, birikme alanı ve temizlik için bırakılan yaklaşım noktaları kontrol edilir. Aşırı birikme görüldüğünde bariyerin çalışma koşulu yeniden değerlendirilmelidir.\n\nYağış, kazı, yol genişletme veya yamaç temizliği gibi değişiklikler sistemi etkileyebilir. Bu nedenle bakım ve gözlem sorumluluğu, saha sahibine aktarılacak açık bir kontrol notuyla birlikte belirlenir.',
            },
        ],
        faqs: [
            { question: 'Moloz bariyeri hangi riskler için kullanılır?', answer: 'Yamaçtan gelen taş, toprak, dal veya benzeri parçaların yol, yapı ve çalışma alanına ulaşmasını azaltmak için değerlendirilir. Sistem seçimi malzemenin niteliğine bağlıdır.' },
            { question: 'Bariyerin önünde biriken malzeme ne yapılır?', answer: 'Birikme düzenli olarak gözlenir ve temizlik erişimi önceden planlanır. Birikme kapasiteyi veya su akışını etkiliyorsa saha yeniden değerlendirilmelidir.' },
        ],
    },
    'ormanda-iple-erisim-hizmetleri': {
        intro: 'Orman ve eğimli arazilerde iple erişim; ağaç, kaya, yamaç ve çevre kullanımını birlikte gözeten bir çalışma planı gerektirir. Görev, erişim rotası ve doğal çevreye etkisi saha incelemesiyle belirlenir.',
        sections: [
            {
                heading: 'Orman arazisinde erişim planlaması',
                content: 'Orman içindeki çalışma alanları, yapı çevresinden farklı olarak değişken zemin, ağaç yoğunluğu, eğim, görüş ve araç erişimi koşullarına sahiptir. Keşifte yaklaşım yolu, üst ve alt çalışma noktaları, ağaçların durumu, kaya veya su geçişleri ve çevredeki insan hareketi değerlendirilir. Kullanılacak halat ve ekipmanın bitki örtüsüne, ağaç kabuğuna ve zemine etkisi azaltılacak şekilde rota belirlenir.\n\nGörevin ağaçta budama, kabloya erişim, kaya yüzeyine ulaşım, gözlem, ölçüm veya bakım olup olmadığı netleştirilmelidir. Her görev için farklı ekipman, çevre koruması ve teslim kaydı gerekebilir.',
            },
            {
                heading: 'Çevre koruması ve saha teslimi',
                content: 'Çalışma öncesinde kesilecek veya taşınacak malzeme, düşme hattı, araç ve yaya geçişi, yangın veya hava koşulu gibi saha başlıkları konuşulur. Ağaçlara bağlanacak sistemler için yüzeyin korunması ve bağlantının uygunluğu kontrol edilir. Çalışma sırasında planlanmayan bir dal, kaya veya zemin hareketi görülürse görev yeniden değerlendirilir.\n\nTeslim notu; erişilen alanı, yapılan işlemi, gözlenen çevre durumunu ve takip edilmesi gereken noktaları içerebilir. Orman izinleri veya arazi sahibinin kuralları varsa çalışma öncesinde ayrıca doğrulanmalıdır.',
            },
        ],
        faqs: [
            { question: 'Orman arazisinde iple erişim için araç yolu şart mıdır?', answer: 'Her zaman değil. Yaklaşım yolu, ekipman taşıma ve kurtarma planı saha koşullarına göre incelenir; erişim mümkün değilse görev kapsamı yeniden düzenlenebilir.' },
            { question: 'Ağaçlara halat bağlanırken nelere dikkat edilir?', answer: 'Ağacın durumu, bağlantı yüzeyi, yük yönü, çevredeki dallar ve çalışma amacı değerlendirilir. Uygun olmayan bir ağaç bağlantı noktası olarak kullanılmamalıdır.' },
        ],
    },
    'stand-by-rescue-hizmeti': {
        intro: 'Stand-by ve rescue hizmeti, erişimi zor bir çalışmada olası acil duruma önceden hazırlanmak için planlanan destek kapsamıdır. Görevin yeri, ekipman, iletişim ve kurtarma rotası birlikte değerlendirilir.',
        sections: [
            {
                heading: 'Kurtarma planı neden işe başlamadan hazırlanır?',
                content: 'Bir çalışma alanında kişinin askıda kalması, erişim hattında sorun yaşanması, yaralanma veya hava koşulunun değişmesi gibi durumlarda normal çalışma düzeni yeterli olmayabilir. Stand-by planı; kimin müdahale edeceğini, hangi noktadan yaklaşılacağını, kullanılacak ekipmanı ve saha sorumlusuyla iletişim sırasını önceden netleştirir.\n\nPlan hazırlanırken çalışma yüksekliği, alt ve üst erişim, ankrajlar, taşıma alanı, ilk yardım yaklaşımı ve dış destek çağırma yöntemi incelenir. Senaryo, gerçek sahaya göre kurulmadığında kâğıt üzerinde kalabilir; bu nedenle görev öncesi kısa bir saha toplantısı önemlidir.',
            },
            {
                heading: 'Operasyon sırasında koordinasyon',
                content: 'Stand-by ekibinin konumu, ana çalışma ekibiyle haberleşmesi ve müdahale için gerekli boş alan operasyon başlamadan belirlenir. Ekipman kontrolü, bağlantı noktaları ve kurtarma rotası görev değiştiğinde yeniden gözden geçirilir. Saha sorumlusu, durdurma koşullarını ve acil durumda haber verilecek kişileri bilmelidir.\n\nTeslim kaydı; görev süresini, uygulanan planı, tatbikat veya kontrol notlarını ve gözlenen iyileştirme alanlarını içerebilir. Gerçek acil durumlar için tesisin kendi prosedürleri, yerel acil yardım düzeni ve görev yetkinlikleri ayrıca doğrulanmalıdır.',
            },
        ],
        faqs: [
            { question: 'Stand-by rescue hizmeti hangi işlerde düşünülür?', answer: 'İple erişim, kapalı veya erişimi sınırlı alan, yüksek yapı bakımı ve kurtarma yaklaşımının zor olduğu görevlerde, çalışma başlamadan önce destek kapsamı değerlendirilir.' },
            { question: 'Kurtarma planı her projede aynı mıdır?', answer: 'Hayır. Çalışma rotası, ekipman, ankraj, saha erişimi, kişi sayısı ve tesis prosedürü değiştiği için plan görev özelinde hazırlanmalıdır.' },
        ],
    },
    'ruzgar-enerji-santralleri': {
        intro: 'Rüzgâr enerji santrallerinde bakım ve erişim çalışmaları; türbinin durumu, kanat veya kule bölgesi, enerji izolasyonu, hava koşulları ve saha prosedürleriyle birlikte planlanır. Görev kapsamı üretici ve tesis talimatlarıyla netleştirilir.',
        sections: [
            {
                heading: 'Türbin bakımında görev kapsamı',
                content: 'Kule dış yüzeyi, nacelle çevresi, kanat, merdiven, platform ve bağlantı noktaları farklı erişim ve kontrol ihtiyaçlarına sahiptir. Ön görüşmede türbin modeli, çalışılacak bölüm, planlanan işlem, duruş süresi, ekipman ve tesis giriş koşulları toplanır. Fotoğraf, bakım kaydı veya üretici talimatı mevcutsa yöntem değerlendirmesine yardımcı olur.\n\nRüzgâr, yağış, görüş, yıldırım ve enerji izolasyonu kararın temel parçalarıdır. Ekipman indirme, düşen cisim kontrolü ve kurtarma rotası da bakım planına yazılır. Bir arıza veya anomali görülürse kapsam genişletilmeden tesis sorumlusuna bildirilir.',
            },
            {
                heading: 'Kontrol, raporlama ve tekrar ziyaret',
                content: 'Çalışma sırasında kontrol edilen parçalar, fotoğraf noktaları, ölçüm veya gözlem yöntemi ve kabul ölçütleri önceden belirlenir. Bakım veya temizlik sonrası bağlantılar, yüzey durumu ve erişim ekipmanı yeniden gözden geçirilir. Böylece tesis ekibi hangi alanın kontrol edildiğini ve hangi noktanın takip gerektirdiğini anlayabilir.\n\nTeslim raporu; türbin veya bölüm bilgisi, görev kapsamı, gözlenen durumlar ve önerilen takip adımlarını içerir. Üretici talimatı, tesis prosedürü veya enerji izolasyonu ile çelişen bir uygulama yapılmamalıdır.',
            },
        ],
        faqs: [
            { question: 'Rüzgâr türbininde bakım için hangi bilgiler gerekir?', answer: 'Türbin veya bölüm bilgisi, yapılacak iş, mevcut bakım kaydı, tesis prosedürü, duruş planı, erişim yöntemi ve hava koşulu sınırları ilk değerlendirme için gereklidir.' },
            { question: 'Hava koşulları türbin erişimini etkiler mi?', answer: 'Evet. Rüzgâr, yağış, yıldırım, görüş ve yüzey koşulları erişim ve kurtarma kararını etkiler. Çalışma bu koşullar uygun olduğunda planlanmalıdır.' },
        ],
    },
    'gabion-duvar': {
        intro: 'Gabion duvar uygulaması; taş dolgu, çelik kafes, temel zemini, su akışı ve korunacak şev veya yapı birlikte değerlendirilerek planlanır. Amaç, araziye uygun bir tutma ve yüzey koruma çözümü oluşturmaktır.',
        sections: [
            {
                heading: 'Gabion duvar hangi koşullarda değerlendirilir?',
                content: 'Gabion sistemleri şev ayağı, yol kenarı, drenaj hattı, erozyona açık yüzey ve peyzaj sınırında farklı görevler üstlenebilir. Ön incelemede zeminin taşıma durumu, suyun geldiği yön, duvarın arkasındaki dolgu, üst kot yükü ve komşu yapıların konumu incelenir. Duvarın yalnızca görünüşü değil, suyu yönetme ve yükü taşıma biçimi de değerlendirilmelidir.\n\nTaş boyutu, kafes türü, temel hazırlığı, geotekstil veya drenaj ihtiyacı, proje ve üretici bilgileriyle belirlenir. Mevcut istinat yapısı, yol veya altyapı yakınında yapılacak değişiklikler ayrıca kontrol edilmelidir.',
            },
            {
                heading: 'Uygulama ve saha kontrolü',
                content: 'Uygulama öncesinde zemin hazırlığı, malzeme sevkiyatı, çalışma alanı, suyun geçici yönlendirilmesi ve ekipman erişimi planlanır. Kafeslerin birleşimleri, taş dolgunun yerleşimi, duvar yüzeyi, arka dolgu ve drenaj noktaları aşama aşama kontrol edilir. Çalışma alanının çevresindeki yapı ve yol kullanımı korunur.\n\nTeslimde uygulanan bölümler, kullanılan malzeme bilgisi, drenaj ve bakım notları paylaşılabilir. Yağış, kazı veya üst kot yükü değişirse duvarın durumu yeniden incelenmelidir.',
            },
        ],
        faqs: [
            { question: 'Gabion duvar için zemin incelemesi gerekir mi?', answer: 'Evet. Temel zemini, su, arka dolgu, üst kot yükü ve komşu yapılar görülmeden duvarın boyutu veya uygunluğu kesinleştirilmemelidir.' },
            { question: 'Gabion duvar drenaj sağlar mı?', answer: 'Taş dolgulu yapı suyun geçişine yardımcı olabilir; ancak drenaj ihtiyacı ve suyun güvenli yönü saha ve proje koşullarına göre ayrıca tasarlanmalıdır.' },
        ],
    },
    'sahne-isleri-rigging': {
        intro: 'Sahne ve rigging işleri; yükün niteliği, asılma noktaları, sahne planı, ekipman akışı ve etkinlik programıyla birlikte planlanır. Kutup Grup, görev sınırlarını teknik ekip ve etkinlik sorumlularıyla netleştirir.',
        sections: [
            {
                heading: 'Rigging planında hangi başlıklar bulunur?',
                content: 'Sahne üstü ışık, ses, dekor, ekran veya mekanik ekipmanların asılması; yalnızca halat veya bağlantı seçmekten ibaret değildir. Yükün ağırlığı ve dağılımı, asılma noktası, taşıyıcı yapı, hareketli parçalar, kablo yolları ve sahne altındaki kullanıcılar birlikte değerlendirilir. Etkinlik kurulumu, prova, gösteri ve söküm aşamaları ayrı çalışma düzenleri yaratabilir.\n\nMevcut çizimler, üretici bilgileri, yük listesi, sahne planı ve mekanın izinleri ilk görüşmede toplanmalıdır. Bilgi eksikse bu durum teklif ve uygulama kapsamına açıkça yazılmalıdır.',
            },
            {
                heading: 'Kurulum, prova ve söküm koordinasyonu',
                content: 'Kurulum öncesinde ekipman kabulü, kaldırma yöntemi, çalışma alanı, haberleşme ve düşen cisim kontrolü belirlenir. Bağlantılar ve yük yolları görsel olarak kontrol edilir; prova sırasında yapılan değişiklikler kayıt altına alınır. Etkinlik esnasında yalnızca yetkili kişilerin ekipmana müdahale etmesi ve değişikliklerin teknik sorumlu üzerinden yürütülmesi gerekir.\n\nSöküm, kurulum kadar planlı yapılmalıdır. Parçaların indirme sırası, sahne trafiği ve depolama alanı belirlenir. Teslim kaydı, kurulan veya sökülen ekipmanları ve takip gerektiren noktaları ayırabilir.',
            },
        ],
        faqs: [
            { question: 'Rigging işi için sahne planı neden önemlidir?', answer: 'Yükler, asılma noktaları, kablolar, hareket alanı ve sahne altındaki kullanıcılar plan üzerinde görülmeden güvenilir bir kurulum sırası oluşturmak zorlaşır.' },
            { question: 'Etkinlik sırasında ekipman değiştirilebilir mi?', answer: 'Değişiklik, yük ve taşıyıcı sistem yeniden değerlendirilmeden yapılmamalıdır. Yeni düzen teknik sorumlu ve etkinlik yetkilisiyle birlikte onaylanmalıdır.' },
        ],
    },
    'sprat-egitimi': {
        intro: 'SPRAT eğitimi araştırılırken eğitim seviyesinin, sınav sürecinin, katılımcı ön koşullarının ve güncel kuruluş kurallarının birlikte doğrulanması gerekir. Kutup Grup, eğitim kapsamını güncel resmi kaynaklar ve katılımcının hedefi üzerinden netleştirmeye odaklanır.',
        sections: [
            {
                heading: 'Eğitim seçerken hangi bilgiler kontrol edilir?',
                content: 'Katılımcının amacı saha çalışmasına hazırlanmak, mevcut becerilerini geliştirmek veya resmi değerlendirme sürecine girmek olabilir. Bu hedefler aynı eğitim planı değildir. Başlangıç seviyesi, deneyim, fiziksel hazırlık, ekipman kullanımı ve sınav beklentisi ilk görüşmede açıklanmalıdır.\n\nProgramın güncel içeriği, ders süresi, uygulama ortamı, eğitmen yetkinliği, sınav başvurusu ve belge süreci SPRAT’ın resmi yayınlarıyla karşılaştırılmalıdır. Bir kurumun eğitim vermesi, katılımcının otomatik olarak sertifika aldığı anlamına gelmez; değerlendirme koşulları ayrıca ele alınmalıdır.',
            },
            {
                heading: 'Uygulamalı öğrenme ve eğitim sonrası adımlar',
                content: 'Uygulamalı çalışmalarda kişisel ekipman, bağlantı noktaları, yükselme ve iniş, geçiş, konumlanma, kurtarma ve iletişim başlıkları görev üzerinden işlenir. Katılımcının yalnızca hareketi yapması değil, neden o yöntemi seçtiğini ve çalışma alanını nasıl kontrol edeceğini anlaması önemlidir.\n\nEğitim sonunda sınav, kayıt, yenileme veya saha deneyimi gibi sonraki adımlar katılımcıya yazılı biçimde anlatılmalıdır. Güncel şartlar değişebileceği için kayıt öncesi resmi SPRAT sayfaları kontrol edilmelidir.',
            },
        ],
        faqs: [
            { question: 'SPRAT eğitimi ile SPRAT sertifikası aynı şey midir?', answer: 'Hayır. Eğitim, katılımcıyı uygulama ve değerlendirmeye hazırlar. Sertifika veya seviye sonucu için güncel kuruluş kuralları ve sınav süreci ayrıca doğrulanmalıdır.' },
            { question: 'SPRAT eğitimi öncesinde deneyim gerekir mi?', answer: 'Gereksinim seviyeye ve güncel programa göre değişebilir. Kayıt öncesinde katılımcının deneyimi, hedefi ve resmi ön koşullar birlikte kontrol edilmelidir.' },
        ],
    },
    'irata-egitimi': {
        intro: 'IRATA eğitimi için seviye, katılımcı ön koşulları, eğitim süreci ve değerlendirme adımları güncel resmi kaynaklarla doğrulanmalıdır. Kutup Grup, başvuru hedefini ve gerekli hazırlığı açık biçimde konuşmayı amaçlar.',
        sections: [
            {
                heading: 'IRATA eğitim sürecini anlamak',
                content: 'Endüstriyel iple erişim eğitimi; ekipmanı tanımak, bağlantıları kurmak, ip üzerinde hareket etmek, geçiş yapmak, konumlanmak ve acil durum yaklaşımını anlamak gibi uygulamalı başlıklar içerir. Katılımcının hedef seviyesi ve önceki deneyimi programın nasıl ele alınacağını etkiler.\n\nEğitim seçerken kuruluşun güncel kuralları, eğitmen ve tesis bilgisi, uygulama alanı, sınav düzeni ve kayıt belgeleri birlikte kontrol edilmelidir. Eğitim merkezinin adı veya bir kursa katılım, tek başına belirli bir seviye veya saha yetkisi anlamına gelmez.',
            },
            {
                heading: 'Hazırlık, değerlendirme ve devamlılık',
                content: 'Katılımcının fiziksel hazırlığı, ekipman kullanma alışkanlığı, yüksekte çalışma deneyimi ve öğrenme hedefi kayıt öncesinde konuşulmalıdır. Uygulamalar sırasında hareketin yanında kontrol, iletişim, ekip çalışması ve kurtarma düşüncesi de ele alınır.\n\nDeğerlendirme sonrasında belge, yenileme, logbook veya çalışma deneyimi gibi gereklilikler resmi IRATA kaynaklarından takip edilmelidir. Program ve sınav koşulları zaman içinde değişebileceği için kayıt öncesi güncel sayfalar esas alınmalıdır.',
            },
        ],
        faqs: [
            { question: 'IRATA eğitimine kayıt olurken hangi bilgi gerekir?', answer: 'Katılımcının hedef seviyesi, önceki deneyimi, fiziksel hazırlığı, eğitim tarihi tercihi ve resmi ön koşulları ilk görüşmede değerlendirilmelidir.' },
            { question: 'IRATA eğitimi bitince saha çalışmasına hemen başlanır mı?', answer: 'Eğitim ve değerlendirme sonucu, işverenin görev tanımı, saha prosedürü ve güncel kuruluş koşulları birlikte incelenmelidir. Tek başına kurs katılımı her görev için yeterli kabul edilmemelidir.' },
        ],
    },
    'kar-ve-cig-kontrolu': {
        intro: 'Kar ve çığ kontrolü; kar birikimi, yamaç geometrisi, hava koşulları, korunacak altyapı ve müdahale sınırları birlikte değerlendirilerek planlanır. Kutup Grup, saha gözlemini koruma ve erişim çözümleriyle birlikte ele alır.',
        sections: [
            {
                heading: 'Çığ riskini anlamaya yönelik saha çalışması',
                content: 'Çığ riski tek bir göstergeden okunamaz. Yamaç eğimi ve yönü, kar tabakalarının durumu, rüzgârla taşınan kar, sıcaklık değişimi, yağış, geçmiş hareket izleri ve korunacak alanın konumu birlikte incelenir. Yol, tesis, enerji hattı, kayak alanı veya yerleşim çevresinde riskin hangi koşullarda arttığı yazılı hale getirilmelidir.\n\nSaha çalışması; gözlem, fotoğraf, ölçüm, haritalama ve yerel kayıtların karşılaştırılmasıyla yürütülebilir. Bu çalışma, tek başına kesin bir tahmin veya müdahale yetkisi vermez; yetkili mühendislik, meteoroloji ve tesis prosedürleriyle birlikte değerlendirilmelidir.',
            },
            {
                heading: 'Koruma, izleme ve operasyon planı',
                content: 'Kar tutucu, bariyer, yönlendirici yapı, drenaj, erişim kısıtı veya izleme yaklaşımı; hareketin kaynağı ve korunacak varlığa göre karşılaştırılır. Aktif bir müdahale düşünülüyorsa güvenlik alanı, haberleşme, hava koşulu, ekipman, yetki ve tahliye sırası açıkça belirlenir. Plan dışı kar hareketi veya görüş değişikliği görüldüğünde operasyon durdurulabilir.\n\nTeslim; risk alanlarını, gözlem tarihini, önerilen kontrolleri ve ek veri ihtiyacını ayırmalıdır. Sistem kurulduktan sonra yeni yağış, sıcaklık, rüzgâr veya arazi değişimi nedeniyle yeniden inceleme gerekebilir.',
            },
        ],
        faqs: [
            { question: 'Çığ kontrolü için yalnızca bariyer kurmak yeterli midir?', answer: 'Her sahada aynı çözüm yeterli olmaz. Kar birikimi, yamaç, korunacak alan, su ve operasyon koşulları incelenerek bariyer, izleme veya başka bir yaklaşım değerlendirilmelidir.' },
            { question: 'Çığ kontrol planı ne zaman güncellenir?', answer: 'Yeni yağış, rüzgâr, sıcaklık değişimi, yamaç hareketi, tesis kullanımı veya koruma sisteminde değişiklik olduğunda plan yeniden gözden geçirilmelidir.' },
        ],
    },
};
