import { useParams, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '@/lib/services-data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceContentClient from '@/components/services/ServiceContentClient';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = decodeURIComponent(slug || '');
  const service = SERVICES_DATA[decodedSlug];

  if (!service) {
    return <Navigate to="/404" replace />;
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
