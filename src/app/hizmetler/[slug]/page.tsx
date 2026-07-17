import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/services-data';
import { generateMetaTags, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceContentClient from '@/components/services/ServiceContentClient';

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const service = SERVICES_DATA[decodedSlug];

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return generateMetaTags({
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    canonical: `https://kutupgrup.com/hizmetler/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const service = SERVICES_DATA[decodedSlug];

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.metaDescription,
    url: `https://kutupgrup.com/hizmetler/${service.slug}`,
  });

  const faqSchema = service.faqs.length > 0 ? generateFAQSchema(service.faqs) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Anasayfa', url: 'https://kutupgrup.com' },
    { name: 'Hizmetler', url: 'https://kutupgrup.com/#hizmetler' },
    { name: service.title, url: `https://kutupgrup.com/hizmetler/${service.slug}` },
  ]);

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceContentClient service={service} />

      <Footer />
    </>
  );
}
