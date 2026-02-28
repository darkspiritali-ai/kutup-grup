import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SSSPageClient from './SSSPageClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Sıkça Sorulan Sorular (SSS)',
    description: 'Kutup Grup endüstriyel dağcılık ve jeoteknik hizmetleri hakkında en sık sorulan sorular ve cevapları. IRATA, SPRAT, güvenlik standartları, proje süreçleri hakkında detaylı bilgiler.',
    keywords: ['sss', 'sıkça sorulan sorular', 'irata nedir', 'sprat nedir', 'iple erişim güvenlik', 'kaya bariyeri fiyat', 'cephe temizliği nasıl yapılır'],
    image: '/og-sss.jpg',
});

export default function SSSPage() {
    return (
        <>
            <Header />
            <SSSPageClient />
            <Footer />
        </>
    );
}
