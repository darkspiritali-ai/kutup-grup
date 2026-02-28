import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = generateMetaTags({
    title: 'İletişim',
    description: 'Kutup Grup ile iletişime geçin. Endüstriyel dağcılık ve jeoteknik çözümler için teklif alın. Profesyonel ekibimiz projeleriniz için yanınızda.',
    keywords: ['kutup grup iletişim', 'teklif al', 'iletişim formu', 'endüstriyel dağcılık teklif', 'jeoteknik hizmetler iletişim'],
    image: '/og-iletisim.jpg',
});

export default function ContactPage() {
    return (
        <>
            <Header />
            <ContactPageClient />
            <Footer />
        </>
    );
}
