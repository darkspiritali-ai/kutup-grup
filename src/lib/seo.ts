// SEO Helper Functions and Constants

export const SITE_NAME = 'Kutup Grup'
export const SITE_URL = 'https://kutupgrup.com'
export const SITE_DESCRIPTION = 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.'

// JSON-LD Structured Data Generators

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo/logo.png`,
        description: SITE_DESCRIPTION,
        address: {
            '@type': 'PostalAddress',
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
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
            '@type': 'Organization',
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
}: {
    title: string
    description: string
    canonical?: string
    keywords?: string[]
    image?: string
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
            type: 'website',
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
