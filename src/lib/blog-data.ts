import { guvenlikAgiTeslimPost } from './blog/guvenlik-agi-teslim-kullanim-kontrolu.ts';
import { cepheAydinlatmaBakimPost } from './blog/dis-cephe-aydinlatma-bakim-gece-kabulu.ts';
import { gabionDrenajPost } from './blog/gabion-duvar-drenaj-zemin-planlamasi.ts';
import { sahneRiggingPost } from './blog/sahne-rigging-yuk-plani-teslim-kontrolu.ts';
import {
  cepheTemizligiContent,
  endustriyelDagcilikContent,
  karCigContent,
  kayaDusmesiContent,
  ruzgarTurbiniContent,
  sevOrtulemeContent,
  standByRescueContent,
  yuksekteCalismaContent,
} from './blog-content.ts';

export interface BlogImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSource {
  label: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  image: BlogImage;
  keywords: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedServices: Array<{ label: string; href: string }>;
  relatedPosts: string[];
  sources: BlogSource[];
}

const blogImage = (slug: string, alt: string, title: string, caption: string, width = 1774, height = 887): BlogImage => ({
  src: `/images/blog/${slug}.webp`,
  alt,
  title,
  caption,
  width,
  height,
});

export const BLOG_HUB = {
  title: 'Kutup Grup Blog - İple Erişim ve Jeoteknik Yazılar',
  metaDescription: 'Endüstriyel dağcılık, iple erişim, yüksekte çalışma güvenliği ve jeoteknik uygulamalar hakkında kaynaklı teknik yazılar.',
  excerpt: 'Kutup Grup blogu; yüksekte çalışma, iple erişim, kaya düşmesi, şev stabilizasyonu ve saha güvenliği konularında karar vermeyi kolaylaştıran teknik yazılar sunar.',
};

export const BLOG_POSTS: BlogPost[] = [
  guvenlikAgiTeslimPost,
  cepheAydinlatmaBakimPost,
  gabionDrenajPost,
  sahneRiggingPost,
  {
    slug: 'endustriyel-dagcilik-iple-erisim-rehberi',
    title: 'Endüstriyel Dağcılık ve İple Erişim Nedir?',
    metaDescription: 'Endüstriyel dağcılık ve iple erişimin ne olduğunu, hangi işlerde kullanıldığını, risk değerlendirmesini ve güvenli çalışma sürecini öğrenin.',
    excerpt: 'İple erişim sistemlerinin nasıl planlandığını, hangi projelerde tercih edildiğini ve güvenli bir çalışma sisteminin hangi adımlardan oluştuğunu açıklıyoruz.',
    category: 'İple Erişim Temelleri',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('endustriyel-dagcilik-iple-erisim-rehberi', 'Endüstriyel bir yapının cephesinde kontrollü iple erişim sistemi kullanan iki teknisyen', 'Endüstriyel dağcılık ve iple erişim rehberi', 'Editoryal teknik illüstrasyon: iple erişim operasyonunda planlı ve kontrollü çalışma.'),
    keywords: ['endüstriyel dağcılık', 'iple erişim', 'rope access', 'yüksekte çalışma', 'endüstriyel dağcı'],
    sections: endustriyelDagcilikContent,
    faqs: [
      { question: 'İple erişim hangi işlerde kullanılabilir?', answer: 'İple erişim; yapının ve görevin risk değerlendirmesi uygun olduğu sürece cephe inceleme ve temizliği, bakım, boya, montaj, muayene ve bazı jeoteknik uygulamalarda erişim yöntemi olarak değerlendirilebilir.' },
      { question: 'İple erişim her yüksekte çalışma işi için uygun mudur?', answer: 'Hayır. Önce yüksekte çalışmanın önlenip önlenemeyeceği, ardından toplu korunma ve diğer ekipman seçenekleri değerlendirilir. İple erişim, göreve ve sahaya özel risk değerlendirmesiyle seçilmelidir.' },
      { question: 'İple erişim projesi için hangi bilgiler gerekir?', answer: 'Yapının yüksekliği ve geometrisi, erişim noktaları, işin amacı, yüzey ve çevre koşulları, düşen cisim riski, çalışma süresi, ekipman kısıtları ve kurtarma planı başlangıç bilgileri arasındadır.' },
    ],
    relatedServices: [
      { label: 'Tersane ve Offshore Hizmetleri', href: '/hizmetler/tersane-ve-offshore-hizmetleri' },
      { label: 'İç ve Dış Cephe Temizlik Hizmetleri', href: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri' },
      { label: 'Yatay ve Düşey Yaşam Hattı Sistemleri', href: '/hizmetler/yatay-ve-dusey-yasam-hatti' },
    ],
    relatedPosts: ['yuksekte-calisma-guvenligi-yasam-hatti-rehberi', 'stand-by-rescue-kurtarma-plani-rehberi'],
    sources: [
      { label: 'HSE - Working at height safely', url: 'https://www.hse.gov.uk/work-at-height/introduction.htm' },
      { label: 'IRATA - International Code of Practice', url: 'https://irata.org/uploads/documents/International_Code_of_Practice_%28ICOP%29_-_English_TC-102ENG.pdf' },
      { label: 'SPRAT - Public documents and safe practices', url: 'https://www.sprat.org/wp-content/themes/divi-child/sprat_public_documents.php' },
    ],
  },
  {
    slug: 'yuksekte-calisma-guvenligi-yasam-hatti-rehberi',
    title: 'Yüksekte Çalışma Güvenliği ve Yaşam Hattı Seçimi',
    metaDescription: 'Yüksekte çalışma güvenliğinde risk değerlendirmesi, toplu korunma, yaşam hattı seçimi, ekipman kontrolü ve kurtarma planını öğrenin.',
    excerpt: 'Yaşam hattı seçimini yalnızca bir ekipman satın alma kararı olarak değil, sahaya özel güvenli çalışma sisteminin parçası olarak ele alıyoruz.',
    category: 'Yüksekte Çalışma Güvenliği',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('yuksekte-calisma-guvenligi-yasam-hatti-rehberi', 'Endüstriyel çatıda yatay yaşam hattını ve bağlantı noktalarını kontrol eden iş güvenliği ekibi', 'Yüksekte çalışma güvenliği ve yaşam hattı rehberi', 'Editoryal teknik illüstrasyon: yaşam hattı kurulumu öncesi planlama ve kontrol.' , 1942, 809),
    keywords: ['yüksekte çalışma güvenliği', 'yaşam hattı', 'yatay yaşam hattı', 'düşey yaşam hattı', 'kurtarma planı'],
    sections: yuksekteCalismaContent,
    faqs: [
      { question: 'Yaşam hattı seçerken ilk bakılması gereken konu nedir?', answer: 'İlk konu, işin ve yapının risk değerlendirmesidir. Kullanım amacı, hat geometrisi, ankraj noktaları, kullanıcı sayısı, düşüş mesafesi, kurtarma yöntemi ve ekipman uyumu birlikte değerlendirilmelidir.' },
      { question: 'Yatay ve düşey yaşam hattı arasındaki fark nedir?', answer: 'Yatay yaşam hattı yatay güzergâhta hareketi, düşey yaşam hattı ise merdiven veya benzeri düşey güzergâhta hareketi destekleyen bir sistemdir. Her ikisinin tasarımı ve kullanım yöntemi sahaya göre değişir.' },
      { question: 'Kurtarma planı neden yaşam hattı planının parçasıdır?', answer: 'Düşüş durdurulduktan sonra askıda kalma, erişim ve tahliye sorunları oluşabilir. Bu nedenle ekipmanın kurulması tek başına yeterli değildir; olası acil durum için uygulanabilir ve prova edilmiş bir plan gerekir.' },
    ],
    relatedServices: [
      { label: 'Yatay ve Düşey Yaşam Hattı Sistemleri', href: '/hizmetler/yatay-ve-dusey-yasam-hatti' },
      { label: 'Güvenlik Ağı Kurulumu', href: '/hizmetler/guvenlik-agi-kurulumu' },
      { label: 'Stand-by Rescue Hizmeti', href: '/hizmetler/stand-by-rescue-hizmeti' },
    ],
    relatedPosts: ['endustriyel-dagcilik-iple-erisim-rehberi', 'stand-by-rescue-kurtarma-plani-rehberi'],
    sources: [
      { label: 'HSE - Assessing all work at height', url: 'https://www.hse.gov.uk/construction/safetytopics/assess.htm' },
      { label: 'HSE - Step-by-step guide', url: 'https://www.hse.gov.uk/work-at-height/step-by-step-guide.htm' },
      { label: 'SPRAT - Safe Practices FAQ', url: 'https://sprat.org/ufaq-category/safe-practices/' },
    ],
  },
  {
    slug: 'kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi',
    title: 'Kaya Düşmesi Risk Analizi ve Kaya Bariyeri Seçimi',
    metaDescription: 'Kaya düşmesi risk analizi nasıl yapılır? Kaya bariyeri seçiminde jeoloji, enerji, güzergâh, bakım ve saha koşullarını anlatan teknik yazı.',
    excerpt: 'Kaya düşmesi riskini yalnızca bariyer yüksekliğiyle değil; kaynak alan, hareket yolu, etkilenecek unsur ve bakım koşullarıyla birlikte değerlendirin.',
    category: 'Jeoteknik Risk Yönetimi',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi', 'Kayalık yamaç altında kaya düşmesi bariyerini ve güvenli gözlem alanını inceleyen jeoteknik ekip', 'Kaya düşmesi risk analizi ve kaya bariyeri rehberi', 'Editoryal teknik illüstrasyon: kaya düşmesi riskinin güvenli alandan incelenmesi.', 1942, 809),
    keywords: ['kaya düşmesi', 'kaya bariyeri', 'rockfall barrier', 'risk analizi', 'jeoteknik'],
    sections: kayaDusmesiContent,
    faqs: [
      { question: 'Kaya bariyeri tek başına kaya düşmesi riskini ortadan kaldırır mı?', answer: 'Hayır. Bariyer, belirli bir tasarım senaryosunda riski azaltan mühendislik önlemidir. Kaynak alan, hareket yolu, enerji, temel koşulları, bakım ve kalan risk birlikte değerlendirilmelidir.' },
      { question: 'Kaya düşmesi incelemesinde hangi veriler toplanır?', answer: 'Kaya kütlesinin süreksizlikleri, blok boyutu, yamaç geometrisi, ayrışma, su ve drenaj izleri, geçmiş olay belirtileri, yol veya yapı konumu ve erişim koşulları temel veri gruplarıdır.' },
      { question: 'Kaya bariyeri seçimi nasıl doğrulanır?', answer: 'Seçim, saha incelemesi ve uygun mühendislik hesabı veya tasarım yaklaşımıyla yapılır. Üretici teknik dokümanları, sistem kapasitesi, ankraj ve temel koşulları projenin gerçek verileriyle karşılaştırılmalıdır.' },
    ],
    relatedServices: [
      { label: 'Kaya Bariyeri Kurulumu', href: '/hizmetler/kaya-bariyeri' },
      { label: 'Moloz Bariyer Sistemleri', href: '/hizmetler/moloz-bariyer' },
      { label: 'Jeoteknik Uygulamalar', href: '/hizmetler/jeoteknik-uygulamalar' },
    ],
    relatedPosts: ['sev-ortuleme-yamac-stabilizasyonu-rehberi', 'kar-cig-kontrolu-risk-degerlendirme-rehberi'],
    sources: [
      { label: 'USGS - Landslide hazards', url: 'https://www.usgs.gov/programs/water-resources/science/landslides' },
      { label: 'AFAD Bursa - Heyelan', url: 'https://bursa.afad.gov.tr/heyalan' },
      { label: 'Wikipedia - Kaya düşmesi', url: 'https://tr.wikipedia.org/wiki/Kaya_d%C3%BC%C5%9Fmesi' },
    ],
  },
  {
    slug: 'sev-ortuleme-yamac-stabilizasyonu-rehberi',
    title: 'Şev Örtüleme ve Yamaç Stabilizasyonu Nasıl Planlanır?',
    metaDescription: 'Şev örtüleme ve yamaç stabilizasyonu planlamasında saha incelemesi, drenaj, ağ sistemleri, ankraj ve bakım başlıklarını öğrenin.',
    excerpt: 'Şev örtülemenin hangi problemi çözebileceğini, hangi bilgilerin gerekli olduğunu ve tasarımın neden sahaya özel olması gerektiğini açıklıyoruz.',
    category: 'Şev ve Yamaç Stabilizasyonu',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('sev-ortuleme-yamac-stabilizasyonu-rehberi', 'Kayalık dik yamaçta ankraj ve çelik ağlarla uygulanan şev örtüleme sistemi', 'Şev örtüleme ve yamaç stabilizasyonu rehberi', 'Editoryal teknik illüstrasyon: şev örtüleme sisteminin yamaç üzerindeki görünümü.'),
    keywords: ['şev örtüleme', 'yamaç stabilizasyonu', 'şev stabilizasyonu', 'çelik ağ', 'ankraj'],
    sections: sevOrtulemeContent,
    faqs: [
      { question: 'Şev örtüleme neyi kontrol eder?', answer: 'Uygun tasarımda şev örtüleme, yüzeydeki gevşek malzemenin hareketini ve küçük blokların yamaçtan ayrılmasını sınırlamaya veya yönlendirmeye yardımcı olabilir. Her proje için kalan risk ayrıca değerlendirilir.' },
      { question: 'Şev örtüleme ile kaya bariyeri aynı şey midir?', answer: 'Hayır. Şev örtüleme yamaç yüzeyindeki malzemenin kontrolüne odaklanırken kaya bariyeri genellikle hareket yolunda enerji sönümleme ve yakalama amacı taşır. Aynı projede birlikte kullanılabilirler.' },
      { question: 'Drenaj neden şev stabilizasyonunda önemlidir?', answer: 'Su, boşluk basıncı, ayrışma ve yüzey akışı üzerinden şev davranışını etkileyebilir. Bu nedenle yalnızca ağ veya ankraj değil, suyun sahadaki hareketi de tasarımın parçası olarak incelenmelidir.' },
    ],
    relatedServices: [
      { label: 'Şev Örtüleme Sistemleri', href: '/hizmetler/sev-ortuleme' },
      { label: 'Deflektör Tip Şev Örtüleme', href: '/hizmetler/deflektor-tip-ortuleme' },
      { label: 'Yamaç Yüzeyi Temizleme', href: '/hizmetler/yamac-yuzeyi-temizleme' },
    ],
    relatedPosts: ['kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi', 'kar-cig-kontrolu-risk-degerlendirme-rehberi'],
    sources: [
      { label: 'AFAD - Heyelanlardan korunma ve zarar azaltma', url: 'https://bursa.afad.gov.tr/heyalan' },
      { label: 'USGS - Landslides', url: 'https://www.usgs.gov/programs/water-resources/science/landslides' },
      { label: 'Wikipedia - Heyelan', url: 'https://tr.wikipedia.org/wiki/Heyelan' },
    ],
  },
  {
    slug: 'yuksek-yapilarda-cephe-temizligi-iple-erisim',
    title: 'Yüksek Yapılarda Cephe Temizliği: İple Erişim ve İş Güvenliği',
    metaDescription: 'Yüksek yapılarda cephe temizliği planlanırken iple erişim, yüzey analizi, düşen cisim kontrolü, ekipman ve iş güvenliği adımlarını öğrenin.',
    excerpt: 'Cephe temizliğinde estetik sonuç kadar erişim yöntemi, çevre güvenliği, yüzey uyumu ve acil durum planının neden önemli olduğunu anlatıyoruz.',
    category: 'Cephe ve Yapı Bakımı',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('yuksek-yapilarda-cephe-temizligi-iple-erisim', 'Modern bir yüksek yapının cam cephesini kontrollü iple erişim sistemiyle temizleyen teknisyen', 'Yüksek yapılarda iple erişimle cephe temizliği', 'Editoryal teknik illüstrasyon: yüksek yapı cephesinde planlı temizlik operasyonu.'),
    keywords: ['cephe temizliği', 'iple erişimle cam temizliği', 'yüksek yapı temizliği', 'cephe bakımı', 'düşen cisim güvenliği'],
    sections: cepheTemizligiContent,
    faqs: [
      { question: 'İple erişim cephe temizliğinde ne zaman değerlendirilir?', answer: 'Erişim ekipmanı seçimi yapının geometrisi, yükseklik, süre, yüzey, çevre ve risk değerlendirmesine bağlıdır. İskele veya platformun uygun olmadığı ya da farklı bir yöntemin daha elverişli olduğu durumlarda iple erişim değerlendirilebilir.' },
      { question: 'Cephe temizliği öncesinde hangi kontroller yapılır?', answer: 'Yüzey ve kaplama türü, cam ve doğrama durumu, ankraj/erişim noktaları, hava koşulları, çevredeki yaya ve araç trafiği, düşen cisim alanı, su ve kimyasal kullanımı ile kurtarma düzeni incelenir.' },
      { question: 'Yapay görsel gerçek temizlik fotoğrafı olarak kullanılabilir mi?', answer: 'Hayır. Yapay görsel yalnızca konuyu anlatan editoryal illüstrasyon olarak etiketlenmelidir. Gerçek proje kanıtı için izinli saha fotoğrafı, tarih, kapsam ve doğrulanabilir açıklama gerekir.' },
    ],
    relatedServices: [
      { label: 'İç ve Dış Cephe Temizlik Hizmetleri', href: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri' },
      { label: 'Dış Cephe Dekoratif Aydınlatma', href: '/hizmetler/dis-cephe-dekoratif-aydinlatma' },
      { label: 'Hassas Endüstriyel Alan Koruması', href: '/hizmetler/hassas-endustriyel-alan-korumasi' },
    ],
    relatedPosts: ['endustriyel-dagcilik-iple-erisim-rehberi', 'yuksekte-calisma-guvenligi-yasam-hatti-rehberi'],
    sources: [
      { label: 'HSE - Introduction to working at height safely', url: 'https://www.hse.gov.uk/work-at-height/introduction.htm' },
      { label: 'HSE - Falling objects and work at height', url: 'https://www.hse.gov.uk/work-at-height/' },
      { label: 'IRATA - International Code of Practice', url: 'https://irata.org/uploads/documents/International_Code_of_Practice_%28ICOP%29_-_English_TC-102ENG.pdf' },
    ],
  },
  {
    slug: 'ruzgar-turbini-bakiminda-iple-erisim',
    title: 'Rüzgar Türbini Bakımında İple Erişim: Süreç ve Riskler',
    metaDescription: 'Rüzgar türbini bakımında iple erişim seçeneğini; planlama, muayene, hava koşulları, ekipman, kurtarma ve raporlama başlıklarıyla inceleyin.',
    excerpt: 'Rüzgar türbini bakım operasyonlarında erişim yöntemi seçimini, saha koordinasyonunu ve güvenli çalışma sınırlarını teknik bir çerçevede ele alıyoruz.',
    category: 'Enerji ve Endüstriyel Bakım',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('ruzgar-turbini-bakiminda-iple-erisim', 'Rüzgar türbini kulesinde planlı inceleme yapan iple erişim teknisyeni ve uzakta görünen türbinler', 'Rüzgar türbini bakımında iple erişim', 'Editoryal teknik illüstrasyon: rüzgar türbini bakımında kontrollü inceleme.' , 1842, 854),
    keywords: ['rüzgar türbini bakımı', 'rüzgar enerji santrali', 'türbin iple erişim', 'kanat bakım', 'endüstriyel bakım'],
    sections: ruzgarTurbiniContent,
    faqs: [
      { question: 'Rüzgar türbini bakımında iple erişim hangi amaçla kullanılır?', answer: 'İple erişim; uygun risk değerlendirmesiyle görsel inceleme, yüzey çalışmaları, erişimi zor noktalara ulaşma veya belirli bakım görevleri için değerlendirilebilir. Görevin teknik şartları ve üretici prosedürleri belirleyicidir.' },
      { question: 'Rüzgar türbininde hava koşulları neden kritiktir?', answer: 'Rüzgar, yağış, buzlanma, görüş ve yıldırım gibi koşullar erişim, ekipman ve iletişim planını etkileyebilir. Çalışma sınırları saha prosedürleri ve ilgili ekipman üretici talimatlarıyla belirlenmelidir.' },
      { question: 'Türbin bakımında raporlama neden önemlidir?', answer: 'Muayene bulgularının konumu, fotoğrafı, gözlem sınırı ve önerilen sonraki adım kayıt altına alınırsa bakım kararları izlenebilir olur. Rapor, yapılmayan bir incelemeyi yapılmış gibi göstermemelidir.' },
    ],
    relatedServices: [
      { label: 'Rüzgar Enerji Santralleri Bakım Hizmetleri', href: '/hizmetler/ruzgar-enerji-santralleri' },
      { label: 'Stand-by Rescue Hizmeti', href: '/hizmetler/stand-by-rescue-hizmeti' },
      { label: 'Hassas Endüstriyel Alan Koruması', href: '/hizmetler/hassas-endustriyel-alan-korumasi' },
    ],
    relatedPosts: ['endustriyel-dagcilik-iple-erisim-rehberi', 'stand-by-rescue-kurtarma-plani-rehberi'],
    sources: [
      { label: 'SPRAT - Industry specific resources', url: 'https://sprat.org/industry-specific-resources/' },
      { label: 'HSE - Work at height', url: 'https://www.hse.gov.uk/work-at-height/' },
      { label: 'IRATA - International Code of Practice', url: 'https://irata.org/uploads/documents/International_Code_of_Practice_%28ICOP%29_-_English_TC-102ENG.pdf' },
    ],
  },
  {
    slug: 'kar-cig-kontrolu-risk-degerlendirme-rehberi',
    title: 'Kar ve Çığ Kontrolü: Risk Değerlendirme ve Koruma Sistemleri',
    metaDescription: 'Kar ve çığ riskinin değerlendirilmesi, tehlike haritaları, koruma sistemleri, izleme ve operasyon planlaması hakkında kaynaklı teknik yazı.',
    excerpt: 'Çığ riskini yalnızca kar miktarıyla açıklamak yerine eğim, arazi, rüzgar, bitki örtüsü, geçmiş olaylar ve maruz kalan unsurlarla birlikte değerlendiriyoruz.',
    category: 'Kar ve Çığ Risk Yönetimi',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('kar-cig-kontrolu-risk-degerlendirme-rehberi', 'Karlı dik dağ yamacında koruma yapısı ve izleme alanını gösteren sakin bir kış manzarası', 'Kar ve çığ kontrolü risk değerlendirme rehberi', 'Editoryal teknik illüstrasyon: çığ risk yönetimi ve koruma altyapısı.'),
    keywords: ['çığ kontrolü', 'kar kontrolü', 'çığ riski', 'çığ bariyeri', 'risk değerlendirmesi'],
    sections: karCigContent,
    faqs: [
      { question: 'Çığ riski hangi faktörlerle değerlendirilir?', answer: 'Eğim, kar örtüsü, rüzgarla taşınan kar, sıcaklık değişimi, arazi ve bitki örtüsü, geçmiş olaylar, akış yolu ve etkilenecek insan/yapı/altyapı birlikte incelenir.' },
      { question: 'Çığ koruma sistemi riski tamamen ortadan kaldırır mı?', answer: 'Hayır. Koruma ve kontrol önlemleri belirli senaryolarda riski azaltır. Tasarım kapsamı, bakım, izleme, uyarı ve operasyonel kısıtlar açıkça tanımlanmalıdır.' },
      { question: 'Çığ haritası ile çığ risk haritası aynı mıdır?', answer: 'Hayır. Tehlike, olayın oluşabileceği alan ve davranışla; risk ise maruz kalan unsurlar ve olası kayıplarla ilişkilidir. Harita türlerinin kapsamı ve kullanılan veri açıklanmalıdır.' },
    ],
    relatedServices: [
      { label: 'Kar ve Çığ Kontrolü Uygulamaları', href: '/hizmetler/kar-ve-cig-kontrolu' },
      { label: 'Jeoteknik Uygulamalar', href: '/hizmetler/jeoteknik-uygulamalar' },
      { label: 'Kaya Bariyeri Kurulumu', href: '/hizmetler/kaya-bariyeri' },
    ],
    relatedPosts: ['kaya-dusmesi-risk-analizi-kaya-bariyeri-rehberi', 'sev-ortuleme-yamac-stabilizasyonu-rehberi'],
    sources: [
      { label: 'AFAD - Çığa hazırlıklı olmak için neler yapılmalı?', url: 'https://www.afad.gov.tr/ciga-hazirlikli-olmak-icin-neler-yapilmali' },
      { label: 'AFAD - Açıklamalı afet yönetimi terimleri sözlüğü', url: 'https://www.afad.gov.tr/aciklamali-afet-yonetimi-terimleri-sozlugu' },
      { label: 'Wikipedia - Çığ', url: 'https://tr.wikipedia.org/wiki/%C3%87%C4%B1%C4%9F' },
    ],
  },
  {
    slug: 'stand-by-rescue-kurtarma-plani-rehberi',
    title: 'Stand-by Rescue Nedir? Yüksekte ve Kapalı Alanda Kurtarma Planı',
    metaDescription: 'Stand-by rescue hizmetinin kapsamını, kurtarma planı hazırlığını, ekip iletişimini, ekipman kontrolünü ve saha sınırlarını öğrenin.',
    excerpt: 'Acil kurtarmayı son anda yapılacak bir müdahale değil, iş başlamadan önce tasarlanan bir saha sistemi olarak ele alıyoruz.',
    category: 'Kurtarma ve Acil Durum Planlaması',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    image: blogImage('stand-by-rescue-kurtarma-plani-rehberi', 'Endüstriyel yapının yanında kurtarma ekipmanını ve planlama alanını hazırlayan saha ekibi', 'Stand-by rescue ve kurtarma planı rehberi', 'Editoryal teknik illüstrasyon: kurtarma ekipmanı kontrolü ve saha brifingi.'),
    keywords: ['stand-by rescue', 'yüksekte kurtarma', 'kapalı alan kurtarma', 'kurtarma planı', 'acil durum planı'],
    sections: standByRescueContent,
    faqs: [
      { question: 'Stand-by rescue nedir?', answer: 'Stand-by rescue, yüksek riskli bir operasyon sırasında olası acil durumda müdahale edebilecek ekip, ekipman, iletişim ve prosedürlerin önceden hazır tutulduğu çalışma düzenidir.' },
      { question: 'Her yüksekte çalışma işinde ayrı kurtarma planı gerekir mi?', answer: 'Kurtarma planının içeriği sahaya ve göreve göre değişir. Erişim, tahliye rotası, askıda kalma, hava koşulları, ekipman ve sağlık hizmetlerine ulaşım gibi unsurlar işe başlamadan değerlendirilmelidir.' },
      { question: 'Kurtarma planı neden yalnızca itfaiyeye bırakılamaz?', answer: 'Dış acil yardımın ulaşma süresi ve sahaya erişim koşulları değişebilir. İşveren veya işi kontrol eden taraf, kendi çalışma düzenine uygun ilk müdahale ve kurtarma planını ayrıca değerlendirmelidir.' },
    ],
    relatedServices: [
      { label: 'Stand-by Rescue Hizmeti', href: '/hizmetler/stand-by-rescue-hizmeti' },
      { label: 'IRATA Eğitimi', href: '/hizmetler/irata-egitimi' },
      { label: 'Yatay ve Düşey Yaşam Hattı Sistemleri', href: '/hizmetler/yatay-ve-dusey-yasam-hatti' },
    ],
    relatedPosts: ['yuksekte-calisma-guvenligi-yasam-hatti-rehberi', 'endustriyel-dagcilik-iple-erisim-rehberi'],
    sources: [
      { label: 'HSE - Construction work at height FAQs', url: 'https://www.hse.gov.uk/construction/faq-height.htm' },
      { label: 'IRATA - International Code of Practice', url: 'https://irata.org/uploads/documents/International_Code_of_Practice_%28ICOP%29_-_English_TC-102ENG.pdf' },
      { label: 'SPRAT - Public documents', url: 'https://www.sprat.org/wp-content/themes/divi-child/sprat_public_documents.php' },
    ],
  },
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);

export const getBlogWordCount = (post: BlogPost) => post.sections
  .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || []), section.note || ''])
  .join(' ')
  .replace(/<[^>]+>/g, ' ')
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;
