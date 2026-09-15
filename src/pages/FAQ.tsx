

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
        answer: 'Endüstriyel dağcılık, iple erişim, yüksek yapı çalışmaları ve jeoteknik uygulamalarla ilgili hizmet başlıklarını Hizmetler sayfasında bulabilirsiniz. Bir işin uygulanabilirliği; yapı, görev, erişim ve saha koşulları incelendikten sonra netleştirilir.',
    },
    {
        id: 2,
        category: 'Genel',
        question: 'Hangi bölgelerde hizmet veriyorsunuz?',
        answer: 'Hizmet alanı; projenin kapsamı, saha koşulları ve ekip planına göre belirlenir. İletişim sayfasındaki bilgilerle yapı, görev ve konum bilgisini paylaşarak ön değerlendirme başlatabilirsiniz.',
    },
    {
        id: 3,
        category: 'Sertifikasyon',
        question: 'IRATA nedir ve neden önemlidir?',
        answer: 'IRATA (Industrial Rope Access Trade Association), endüstriyel iple erişim alanında eğitim, yetkinlik ve uygulama çerçevesi sunan uluslararası bir kuruluştur. Bir şirketin veya personelin güncel belge durumu ayrıca doğrulanmalıdır; sertifika ifadesi tek başına saha risk değerlendirmesinin yerine geçmez.',
    },
    {
        id: 4,
        category: 'Sertifikasyon',
        question: 'SPRAT ve IRATA arasındaki fark nedir?',
        answer: 'SPRAT (Society of Professional Rope Access Technicians) ve IRATA, iple erişim alanında eğitim ve uygulama çerçeveleri sunan iki ayrı kuruluştur. Kapsam, seviye ve güncel belge durumu personel ve proje bazında doğrulanmalıdır.',
    },
    {
        id: 5,
        category: 'Güvenlik',
        question: 'İş güvenliği önlemleriniz nelerdir?',
        answer: 'İşin kapsamına göre risk değerlendirmesi, iş metodu, ekipman kontrolü, çalışma alanının ve çevrenin korunması, iletişim düzeni ve kurtarma planı ele alınır. Gerekli yetkinlik ve belgeler proje öncesi doğrulanır; tek bir standart veya sertifika her saha için yeterli kabul edilmez.',
    },
    {
        id: 6,
        category: 'Güvenlik',
        question: 'Proje öncesi hangi iş güvenliği bilgileri paylaşılır?',
        answer: 'İşin niteliğine göre görev, sorumluluk, yetkinlik, ekipman, saha kuralları, sigorta ve gerekli belge kapsamı teklif veya sözleşme öncesi karşılıklı olarak netleştirilir. Kesin bilgiler proje özelindeki kayıtlarla doğrulanmalıdır.',
    },
    {
        id: 7,
        category: 'Proje Süreci',
        question: 'Proje süreci nasıl işliyor?',
        answer: 'Süreç genellikle ilk görüşme ve bilgi toplama, saha keşfi veya teknik inceleme, risk ve yöntem değerlendirmesi, kapsamı açık teklif, sözleşme, saha uygulaması, kontrol ve teslim kayıtlarından oluşur. Bakım veya takip ihtiyacı varsa kapsamı ayrıca yazılı olarak belirlenir.',
    },
    {
        id: 8,
        category: 'Proje Süreci',
        question: 'Teklif almak için ne yapmam gerekiyor?',
        answer: 'İletişim sayfasındaki form, telefon veya e-posta üzerinden yapı, konum, görev, erişim ve beklenen çıktı hakkında temel bilgileri paylaşabilirsiniz. Teklif süresi; kapsamın açıklığı, saha incelemesi ve gerekli teknik değerlendirmeye göre netleştirilir.',
    },
    {
        id: 9,
        category: 'Hizmet Detayları',
        question: 'Cephe temizliği ne kadar sürer?',
        answer: 'Cephe temizliği süresi binanın yüksekliği, toplam alanı, yüzey ve kirlilik türü, erişim yöntemi, çevre güvenliği ve hava koşullarına göre değişir. Takvim, saha bilgileri ve iş kapsamı incelendikten sonra gerçekçi biçimde belirlenir.',
    },
    {
        id: 10,
        category: 'Hizmet Detayları',
        question: 'Kaya bariyeri fiyatı nasıl hesaplanır?',
        answer: 'Kaya bariyeri maliyeti; kaynak alan, hareket yolu, tasarım senaryosu, gerekli enerji kapasitesi, güzergâh uzunluğu, zemin ve ankraj koşulları, erişim ve montaj gereklilikleriyle birlikte değerlendirilir. Kesin kapsam ve fiyat için saha verisi gerekir; ilgili ürün standardı üretici ve tasarım dokümanlarından doğrulanmalıdır.',
    },
    {
        id: 11,
        category: 'Hizmet Detayları',
        question: 'Rüzgar türbini bakımı ne sıklıkla yapılmalıdır?',
        answer: 'Rüzgâr türbinlerinde bakım periyodu; üretici talimatları, işletme koşulları, ekipmanın durumu ve saha riskine göre belirlenir. Fırtına veya olağan dışı olay sonrasında ek kontrol gerekebilir. Takvim ve bakım kapsamı proje dokümanında açıkça yazılmalıdır.',
    },
    {
        id: 12,
        category: 'Hizmet Detayları',
        question: 'Şev örtüleme nedir ve neden gereklidir?',
        answer: 'Şev örtüleme, eğimli arazilerde yüzey erozyonunu ve gevşek malzemenin hareketini sınırlamaya veya yönlendirmeye yardımcı olabilen jeoteknik bir uygulamadır. Ağ, ankraj, drenaj ve diğer önlemlerin seçimi; yamaç geometrisi, zemin, su ve beklenen hareket türü incelenerek yapılır. Her sahada kalan risk ayrıca değerlendirilir.',
    },
    {
        id: 13,
        category: 'Teknik',
        question: 'Hangi ekipmanları kullanıyorsunuz?',
        answer: 'Ekipman seçimi; işin türü, erişim yöntemi, yükler, çevre, kullanıcı uyumu ve üretici talimatlarına göre yapılır. İp, bağlantı elemanı, düşüş durdurma veya kurtarma ekipmanı için uygunluk, kullanım ömrü, kontrol ve kayıt gereklilikleri proje öncesi doğrulanmalıdır.',
    },
    {
        id: 14,
        category: 'Teknik',
        question: 'ATEX bölgelerinde çalışabiliyor musunuz?',
        answer: 'ATEX riski bulunan alanlarda işe başlamadan önce bölge sınıflandırması, izin sistemi, gaz ölçümü, ekipman uygunluğu, statik elektrik ve acil durum prosedürleri yetkili işveren ve uzmanlarla birlikte doğrulanmalıdır. Çalışma yetkisi, personel ve ekipman kapsamı proje özelinde yazılı olarak teyit edilmeden varsayılmamalıdır.',
    },
    {
        id: 15,
        category: 'Fiyatlandırma',
        question: 'Fiyatlarınız neden farklılık gösterir?',
        answer: 'Her proje kendine özgüdür. Fiyatlandırmada çalışma yüksekliği, tehlike ve erişilebilirlik, malzeme, ekipman, çevre güvenliği, proje süresi ve mevsimsel koşullar gibi unsurlar etkili olabilir. Kapsam netleşmeden verilen birim fiyat, gerçek işi ve kalan riskleri temsil etmeyebilir.',
    },
    {
        id: 16,
        category: 'Fiyatlandırma',
        question: 'Ödeme koşullarınız nedir?',
        answer: 'Ödeme koşulları; işin kapsamı, malzeme ve ekipman gereklilikleri, süre ve tarafların mutabakatına göre teklif ve sözleşmede yazılı olarak belirlenir. Avans, hakediş, teslim ve faturalama koşulları imza öncesi açık olmalıdır.',
    },
    {
        id: 17,
        category: 'Garanti',
        question: 'Garanti ve bakım koşulları nasıl belirlenir?',
        answer: 'Garanti ve bakım koşulları; işin türü, kullanılan malzeme, üretici şartları, montaj ve teslim kapsamı, kontrol sıklığı ve tarafların sözleşmesine göre belirlenir. Süre, kapsam, istisnalar ve bakım sorumlulukları yazılı belgede açıkça yer almalıdır.',
    },
    {
        id: 18,
        category: 'Acil Durum',
        question: 'Acil durumlar için nasıl ulaşabilirim?',
        answer: 'Acil durumlarda önce saha ve işverenin mevcut acil durum prosedürü, yerel acil servisler ve yetkili sorumlular devreye alınmalıdır. İletişim, müdahale kapsamı, ulaşılabilir kişiler ve olası yanıt süresi proje öncesi hazırlanan plana göre yazılı olarak netleştirilmelidir.',
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
