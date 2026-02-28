import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Hakkımızda',
    description: 'Kutup Grup olarak endüstriyel dağcılık ve jeoteknik çözümler alanında 15+ yıldır güvenilir hizmet sunuyoruz. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi alın.',
    keywords: ['kutup grup hakkında', 'endüstriyel dağcılık şirketi', 'jeoteknik çözümler', 'iple erişim uzmanları', 'kutup grup tarihçe'],
    image: '/og-hakkimizda.jpg',
});

export default function AboutPage() {
    return <AboutPageClient />;
}
