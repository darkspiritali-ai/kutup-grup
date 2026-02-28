import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CerezPolitikasiClient from './CerezPolitikasiClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Çerez Politikası',
    description: 'Kutup Grup web sitesinde kullanılan çerezler (cookies) hakkında detaylı bilgiler. Çerez yönetimi ve gizliliğiniz.',
    keywords: ['çerez politikası', 'cookies', 'kullanıcı deneyimi', 'gizlilik', 'web sitesi çerezleri'],
    image: '/og-cerez.jpg',
});

export default function CerezPolitikasiPage() {
    return (
        <>
            <Header />
            <CerezPolitikasiClient />
            <Footer />
        </>
    );
}
