// SEO Helper Functions and Constants

export const SITE_NAME = 'Kutup Grup'
export const SITE_URL = 'https://kutupgrup.com'
export const SITE_DESCRIPTION = 'Heyelan, kaya ve taş düşmesi riskleri, iple erişim, jeoteknik uygulamalar ve yüksek yapı çalışmalarında kapsamı birlikte netleştirmeye yönelik bilgi alın.'

// JSON-LD Structured Data Generators

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: 'KUTUP GRUP İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ',
        alternateName: 'Kutup Grup',
        url: SITE_URL,
        logo: `${SITE_URL}/logo/logo.png`,
        description: SITE_DESCRIPTION,
        email: 'info@kutupgrup.com',
        telephone: '+90-533-517-6609',
        sameAs: ['https://www.instagram.com/kutup_endustriyel_dagcilik'],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'İstanbul',
            addressCountry: 'TR',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['tr', 'en']
        },
    }
}

export function generateServiceSchema(service: {
    name: string
    description: string
    url: string
    serviceType?: string
    category?: string
    image?: string
    updatedAt?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: service.url,
        serviceType: service.serviceType || service.name,
        category: service.category,
        image: service.image,
        inLanguage: 'tr-TR',
        ...(service.updatedAt ? { dateModified: service.updatedAt } : {}),
        provider: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Turkey',
        },
    }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

// Meta Tag Helpers
export function generateMetaTags({
    title,
    description,
    canonical,
    keywords,
    image = '/og-image.jpg',
    type = 'website',
}: {
    title: string
    description: string
    canonical?: string
    keywords?: string[]
    image?: string
    type?: 'website' | 'article'
}) {
    return {
        title: `${title} | ${SITE_NAME}`,
        description,
        keywords: keywords?.join(', '),
        openGraph: {
            title,
            description,
            url: canonical || SITE_URL,
            siteName: SITE_NAME,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
            locale: 'tr_TR',
            type,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        alternates: {
            canonical: canonical || SITE_URL,
        },
    }
}
