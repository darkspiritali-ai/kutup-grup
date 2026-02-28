import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GizlilikPolitikasiClient from './GizlilikPolitikasiClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Gizlilik Politikası ve KVKK',
    description: 'Kutup Grup gizlilik politikası ve kişisel verilerin korunması (KVKK) hakkında detaylı bilgiler. Verilerinizin güvenliği bizim için önceliklidir.',
    keywords: ['gizlilik politikası', 'kvkk', 'kişisel verilerin korunması', 'veri güvenliği', 'gizlilik'],
    image: '/og-gizlilik.jpg',
});

export default function GizlilikPolitikasiPage() {
    return (
        <>
            <Header />
            <GizlilikPolitikasiClient />
            <Footer />
        </>
    );
}
