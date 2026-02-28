import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import HizmetlerPageClient from './HizmetlerPageClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Tüm Hizmetlerimiz',
    description: 'Kutup Grup endüstriyel dağcılık, jeoteknik çözümler, yüksekte çalışma ve iş güvenliği hizmetleri. 20+ farklı hizmet alanında profesyonel çözümler.',
    keywords: ['endüstriyel dağcılık hizmetleri', 'jeoteknik çözümler', 'yüksekte çalışma', 'iple erişim hizmetleri', 'kutup grup hizmetler'],
    image: '/og-hizmetler.jpg',
});

export default function HizmetlerPage() {
    return <HizmetlerPageClient />;
}
