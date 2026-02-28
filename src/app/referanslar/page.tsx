import type { Metadata } from 'next';
import { generateMetaTags } from '@/lib/seo';
import ReferanslarPageClient from './ReferanslarPageClient';

export const metadata: Metadata = generateMetaTags({
    title: 'Referanslar ve Projeler',
    description: 'Kutup Grup\'un başarıyla tamamladığı 500+ projeden seçilmiş referanslar. Endüstriyel dağcılık, jeoteknik uygulamalar ve yüksek yapı çözümleri portföyümüzü inceleyin.',
    keywords: ['kutup grup referanslar', 'projeler', 'tamamlanan işler', 'başarı hikayeleri', 'proje portföyü'],
    image: '/og-referanslar.jpg',
});

export default function ReferanslarPage() {
    return <ReferanslarPageClient />;
}
