import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kutupgrup.com'

    // Ana sayfalar
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/referanslar`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sss`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gizlilik-politikasi`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cerez-politikasi`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    // Hizmet sayfaları
    const services = [
        'dis-cephe-dekoratif-aydinlatma',
        'tersane-ve-offshore-hizmetleri',
        'ic-ve-dis-cephe-temizlik-hizmetleri',
        'guvenlik-agi-kurulumu',
        'yatay-ve-dusey-yasam-hatti',
        'hassas-endustriyel-alan-korumasi',
        'ormanda-iple-erisim-hizmetleri',
        'stand-by-rescue-hizmeti',
        'ruzgar-enerji-santralleri',
        'yamac-yuzeyi-temizleme',
        'sev-ortuleme',
        'deflektor-tip-ortuleme',
        'kaya-bariyeri',
        'moloz-bariyer',
        'gabion-duvar',
        'kar-cig-kontrolu-uygulamalari',
        'sahne-isleri-rigging',
        'sprat-egitimi',
        'irata-egitimi',
    ]

    const servicePages = services.map((slug) => ({
        url: `${baseUrl}/hizmetler/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...staticPages, ...servicePages]
}
