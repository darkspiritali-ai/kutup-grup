

import { useState } from 'react';
import Link from '@/components/ui/Link';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/lib/seo';
import styles from './sss.module.css';

interface FAQ {
    id: number;
    category: string;
    question: string;
    answer: string;
}

const FAQS: FAQ[] = [
    {
        id: 1,
        category: 'Genel',
        question: 'Kutup Grup hangi hizmetleri sunuyor?',
        answer: 'Kutup Grup olarak endüstriyel dağcılık (iple erişim teknikleri) ve jeoteknik uygulamalar olmak üzere iki ana kategoride hizmet sunuyoruz. Cephe temizliği, aydınlatma kurulumu, tersane işleri, rüzgar türbini bakımı, kaya bariyeri, şev örtüleme, yamaç stabilizasyonu gibi 19 farklı hizmet alanımız bulunmaktadır.',
    },
    {
        id: 2,
        category: 'Genel',
        question: 'Hangi bölgelerde hizmet veriyorsunuz?',
        answer: 'Türkiye\'nin tüm bölgelerinde hizmet vermekteyiz. Merkez ofisimiz İstanbul\'da olmakla birlikte, mobil ekiplerimiz sayesinde ülkenin her noktasında proje gerçekleştirebiliyoruz. Özellikle İstanbul, Ankara, İzmir, Bursa, Kocaeli ve çevre illerde yoğun olarak çalışmaktayız.',
    },
    {
        id: 3,
        category: 'Sertifikasyon',
        question: 'IRATA nedir ve neden önemlidir?',
        answer: 'IRATA (Industrial Rope Access Trade Association), endüstriyel iple erişim çalışmaları için dünya çapında kabul görmüş bir sertifikasyon sistemidir. IRATA sertifikalı teknisyenlerimiz uluslararası güvenlik standartlarına uygun olarak eğitilmiş ve düzenli olarak yetkinlikleri denetlenmektedir. Bu, çalışanlarımızın en yüksek güvenlik düzeyinde iş yapmasını garanti eder.',
    },
    {
        id: 4,
        category: 'Sertifikasyon',
        question: 'SPRAT ve IRATA arasındaki fark nedir?',
        answer: 'SPRAT (Society of Professional Rope Access Technicians) ve IRATA, iple erişim alanında kabul görmüş iki ana sertifikasyon kuruluşudur. Her ikisi de benzer güvenlik standartlarına sahiptir. IRATA daha çok Avrupa ve Asya\'da, SPRAT ise Amerika kıtasında yaygındır. Kutup Grup olarak her iki sertifikaya sahip teknisyenlere sahibiz.',
    },
    {
        id: 5,
        category: 'Güvenlik',
        question: 'İş güvenliği önlemleriniz nelerdir?',
        answer: 'İş güvenliği bizim için en öncelikli konudur. Tüm projelerimizde ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi standartlarına uygun çalışırız. IRATA/SPRAT sertifikalı teknisyenler, CE onaylı ekipmanlar, kapsamlı risk analizleri, iş öncesi güvenlik brifingleri, kurtarma planları ve 7/24 güvenlik gözetimi sağlarız.',
    },
    {
        id: 6,
        category: 'Güvenlik',
        question: 'Çalışanlarınız sigortalı mı?',
        answer: 'Evet, tüm çalışanlarımız SGK sigortalıdır ve ek olarak özel iş kazası sigortası kapsamındadır. Ayrıca yaptığımız her proje için sorumluluk sigortası poliçesi mevcuttur.',
    },
    {
        id: 7,
        category: 'Proje Süreci',
        question: 'Proje süreci nasıl işliyor?',
        answer: 'Proje sürecimiz şu adımlardan oluşur: 1) İlk görüşme ve ihtiyaç analizi, 2) Saha keşfi ve teknik inceleme, 3) Risk analizi ve metod belirleme, 4) Detaylı teklif sunumu, 5) Sözleşme imzalama, 6) Proje uygulama, 7) Kalite kontrol ve teslimat, 8) Garanti ve periyodik bakım desteği.',
    },
    {
        id: 8,
        category: 'Proje Süreci',
        question: 'Teklif almak için ne yapmam gerekiyor?',
        answer: 'İletişim sayfamızdaki formu doldurarak veya telefon/e-posta ile bize ulaşabilirsiniz. Projeniz hakkında temel bilgileri paylaştığınızda, ekibimiz en kısa sürede sizinle iletişime geçerek detaylı bilgi alacak ve saha keşfi için randevu ayarlayacaktır. Saha keşfi sonrası 3-5 iş günü içinde detaylı teklifimizi sunuyoruz.',
    },
    {
        id: 9,
        category: 'Hizmet Detayları',
        question: 'Cephe temizliği ne kadar sürer?',
        answer: 'Cephe temizliği süresi binanın yüksekliği, toplam metrekaresi, cam yüzeyinin kirliliği ve hava koşullarına göre değişir. Ortalama bir 10 katlı binanın cephesi 2-3 gün içinde tamamlanabilir. Detaylı süre tahmini için saha keşfi yapmamız gerekir.',
    },
    {
        id: 10,
        category: 'Hizmet Detayları',
        question: 'Kaya bariyeri fiyatı nasıl hesaplanır?',
        answer: 'Kaya bariyeri fiyatı şu faktörlere göre belirlenir: 1) Bariyerin enerji emme kapasitesi (kJ cinsinden), 2) Metre cinsinden uzunluk, 3) Arazinin tehlike derecesi ve erişilebilirliği, 4) Montaj zorluk derecesi, 5) Kullanılacak malzeme standardı (EN 1317). Her proje özeldir, bu nedenle kesin fiyat için saha incelemesi gerekir.',
    },
    {
        id: 11,
        category: 'Hizmet Detayları',
        question: 'Rüzgar türbini bakımı ne sıklıkla yapılmalıdır?',
        answer: 'Rüzgar türbinlerinin periyodik bakımı yılda en az 2 kez (bahar ve sonbahar) yapılmalıdır. İlave olarak fırtına sonrası acil kontroller, kanat temizliği (performans için), ve üretici tavsiyelerine göre major bakımlar gerekebilir. Kutup Grup olarak yıllık bakım kontratları sunuyoruz.',
    },
    {
        id: 12,
        category: 'Hizmet Detayları',
        question: 'Şev örtüleme nedir ve neden gereklidir?',
        answer: 'Şev örtüleme, eğimli arazilerde (yamaçlarda) toprak erozyonunu ve kaya/moloz düşmesini önlemek için yapılan jeoteknik bir uygulamadır. Özellikle karayolu kenarları, demiryolu hatları ve yerleşim alanlarına yakın yamaçlarda can ve mal güvenliği için kritik önem taşır. Çelik tel örgü veya özel sentezik ağlarla yamaç yüzeyi sabitlenir.',
    },
    {
        id: 13,
        category: 'Teknik',
        question: 'Hangi ekipmanları kullanıyorsunuz?',
        answer: 'Tüm ekipmanlarımız CE sertifikalı ve uluslararası standartlara uygundur. Statik ve dinamik ipler (EN 1891, EN 892), askı sistemleri, descent cihazları, karabinalar, kasklar, emniyet kemerleri kullanırız. Ekipmanlar düzenli olarak test edilir ve yıllık sertifikasyon yenilenir.',
    },
    {
        id: 14,
        category: 'Teknik',
        question: 'ATEX bölgelerinde çalışabiliyor musunuz?',
        answer: 'Evet, patlayıcı atmosfer (ATEX) riski olan hassas endüstriyel alanlarda çalışma yetkimiz ve deneyimimiz vardır. Bu tür alanlarda antistatic ekipman, izinsiz elektrik kaynağı olmayan aletler, gaz dedektörleri ve özel eğitimli personel ile çalışırız.',
    },
    {
        id: 15,
        category: 'Fiyatlandırma',
        question: 'Fiyatlarınız neden farklılık gösterir?',
        answer: 'Her proje kendine özgüdür. Fiyatlandırmada şu faktörler etkilidir: çalışma yüksekliği, tehlike derecesi, erişilebilirlik, malzeme gereksinimi, proje süresi, mevsimsel koşullar, özel ekipman ihtiyacı. Bu nedenle standardize fiyat vermek yerine her proje için özel teklif hazırlıyoruz.',
    },
    {
        id: 16,
        category: 'Fiyatlandırma',
        question: 'Ödeme koşullarınız nedir?',
        answer: 'Genellikle %40 avans, %60 iş bitiminde ödeme şeklinde çalışırız. Büyük projelerde hakediş usulü ödeme de kabul edilebilir. Kurumsal müşterilerimize ödeme vadeleri sunabiliyoruz. Detaylar sözleşme aşamasında belirlenir.',
    },
    {
        id: 17,
        category: 'Garanti',
        question: 'Garanti süreleriniz nedir?',
        answer: 'Hizmet garantimiz işin türüne göre değişir: İskele/lift montajları: 6 ay, Kaya/moloz bariyerleri: 2 yıl, Şev örtüleme sistemleri: 5 yıl, Yaşam hattı sistemleri: 10 yıl (paslanmaz çelik). Tüm garantiler malzeme ve işçilik hatalarını kapsar.',
    },
    {
        id: 18,
        category: 'Acil Durum',
        question: 'Acil durumlar için nasıl ulaşabilirim?',
        answer: 'Acil durumlar için 7/24 ulaşabileceğiniz telefon hattımız mevcuttur. Kaza, hasar veya tehlikeli durumlar için acil müdahale ekibimiz 2-4 saat içinde sahaya intikal edebilir. İletişim sayfamızdaki acil durum numarasını kaydetmenizi öneririz.',
    },
];

const CATEGORIES = ['Tümü', 'Genel', 'Sertifikasyon', 'Güvenlik', 'Proje Süreci', 'Hizmet Detayları', 'Teknik', 'Fiyatlandırma', 'Garanti', 'Acil Durum'];

export default function SSSPageClient() {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [openId, setOpenId] = useState<number | null>(null);

    const filteredFAQs = selectedCategory === 'Tümü'
        ? FAQS
        : FAQS.filter(faq => faq.category === selectedCategory);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    // Generate FAQ Schema for SEO
    const faqSchema = generateFAQSchema(
        FAQS.map(faq => ({
            question: faq.question,
            answer: faq.answer
        }))
    );

    return (
        <div className={styles.sssPage}>
            <StructuredData data={faqSchema} />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Sıkça Sorulan Sorular</h1>
                    <p className={styles.heroSubtitle}>
                        Kutup Grup hizmetleri hakkında merak ettikleriniz
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Filter Section */}
                <section className={styles.filterSection}>
                    <div className={styles.filterButtons}>
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.filterButtonActive : ''
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <p className={styles.filterCount}>
                        {filteredFAQs.length} soru görüntüleniyor
                    </p>
                </section>

                {/* FAQ List */}
                <section className={styles.faqList}>
                    {filteredFAQs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`${styles.faqItem} ${openId === faq.id ? styles.faqItemOpen : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <span className={styles.faqQuestionText}>
                                    <span className={styles.faqCategory}>{faq.category}</span>
                                    {faq.question}
                                </span>
                                <span className={styles.faqIcon}>
                                    {openId === faq.id ? '−' : '+'}
                                </span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Sorunuza Cevap Bulamadınız mı?</h2>
                        <p className={styles.ctaText}>
                            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
                        </p>
                        <Link href="/iletisim" className={styles.ctaButton}>
                            İletişime Geçin
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
