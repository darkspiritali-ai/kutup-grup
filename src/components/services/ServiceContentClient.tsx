'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ServiceContent, SERVICES_DATA } from '@/lib/services-data';

/* ===== SVG Icon Map for Service Icons ===== */
const SERVICE_ICON_MAP: Record<string, React.ReactNode> = {
  '💡': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" /></svg>
  ),
  '⚓': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0020 0h-3" /></svg>
  ),
  '✨': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
  ),
  '🛡️': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  '🔗': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
  ),
  '🏔️': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="m4.14 15.08 2.86-2.7 3 2.7" /></svg>
  ),
  '🧱': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="22" height="4" rx="1" /><rect x="1" y="14" width="22" height="4" rx="1" /><line x1="12" y1="6" x2="12" y2="10" /><line x1="6" y1="14" x2="6" y2="18" /><line x1="18" y1="14" x2="18" y2="18" /></svg>
  ),
  '⚗️': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v6l-6 10a1 1 0 00.87 1.5h14.26a1 1 0 00.87-1.5L14 8V2" /><line x1="8.5" y1="2" x2="15.5" y2="2" /><path d="M7 16h10" /></svg>
  ),
  '🛑': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
  ),
  '🔀': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg>
  ),
  '🚧': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 6v12" /><path d="M2 12h20" /></svg>
  ),
  '🌲': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 22v-2" /><path d="M7 22v-2" /><path d="M17 13H7l5-10 5 10z" /><path d="M19 18H5l2-5h10l2 5z" /></svg>
  ),
  '🚑': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10H6" /><path d="M8 8v4" /><path d="M22 18v-7a2 2 0 00-.67-1.49L17 6H3a1 1 0 00-1 1v11" /><circle cx="7" cy="18" r="2" /><path d="M9 18h6" /><circle cx="17" cy="18" r="2" /></svg>
  ),
  '💨': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" /><path d="M9.6 4.6A2 2 0 1111 8H2" /><path d="M12.6 19.4A2 2 0 1014 16H2" /></svg>
  ),
  '🪨': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 18l1.5-6.5L18 9l-2-5-6 1L4 10l3 4 4 4z" /><path d="M20 21l-3-3" /><path d="M8 21l-2-6" /></svg>
  ),
  '❄️': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M20 16l-4-4 4-4" /><path d="M4 8l4 4-4 4" /><path d="M16 4l-4 4-4-4" /><path d="M8 20l4-4 4 4" /></svg>
  ),
  '🎭': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a5 5 0 005 5 8 8 0 001.5-.2 5 5 0 007 0A8 8 0 0017 17a5 5 0 005-5V7h-5a8 8 0 00-10 0H2v5z" /><path d="M6 11a.5.5 0 001 0 .5.5 0 00-1 0z" /><path d="M17 11a.5.5 0 001 0 .5.5 0 00-1 0z" /></svg>
  ),
  '🎓': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" /></svg>
  ),
  '📜': (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  ),
};

/* Fallback icon if no match found */
const FallbackIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);

/* Application area icon */
const BuildingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><line x1="8" y1="6" x2="10" y2="6" /><line x1="14" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /></svg>
);

/* Checkmark icon */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-arctic-blue, #3E92CC)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

function getServiceIcon(icon: string): React.ReactNode {
  return SERVICE_ICON_MAP[icon] || <FallbackIcon />;
}

function getRelatedServiceTitle(slug: string): string {
  const service = SERVICES_DATA[slug];
  return service ? service.title : slug;
}

interface ServiceContentClientProps {
  service: ServiceContent;
}

export default function ServiceContentClient({ service }: ServiceContentClientProps) {
  return (
    <>
      <main className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/">Anasayfa</Link>
              <span> / </span>
              <Link href="/hizmetler">Hizmetler</Link>
              <span> / </span>
              <span>{service.title}</span>
            </div>

            <div className="service-hero-layout">
              <div className="service-hero-text">
                <div className="service-icon-wrap">
                  {getServiceIcon(service.icon)}
                </div>
                <h1>{service.title}</h1>
                <p className="service-intro">{service.intro}</p>
                <Link href="/iletisim" className="btn btn-cta">
                  Ücretsiz Teklif Alın
                </Link>
              </div>
              {service.heroImage && (
                <div className="service-hero-image">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={560}
                    height={400}
                    priority
                    style={{ objectFit: 'cover', borderRadius: '16px', width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="service-content">
              <article className="service-article">
                {service.sections.map((section, index) => (
                  <div key={index} className="content-section">
                    <h2>{section.heading}</h2>
                    <p>{section.content}</p>
                  </div>
                ))}

                {/* Advantages */}
                {service.advantages.length > 0 && (
                  <div className="content-section">
                    <h2>Avantajlarımız</h2>
                    <ul className="advantages-list">
                      {service.advantages.map((advantage, index) => (
                        <li key={index}>
                          <span className="check-icon"><CheckIcon /></span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications */}
                {service.applications.length > 0 && (
                  <div className="content-section">
                    <h2>Uygulama Alanları</h2>
                    <div className="applications-grid">
                      {service.applications.map((app, index) => (
                        <div key={index} className="application-card">
                          <span className="app-icon"><BuildingIcon /></span>
                          <p>{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Details */}
                {service.technicalDetails.length > 0 && (
                  <div className="content-section">
                    <h2>Teknik Detaylar</h2>
                    <ul className="tech-list">
                      {service.technicalDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs.length > 0 && (
                  <div className="content-section">
                    <h2>Sıkça Sorulan Sorular</h2>
                    <div className="faq-list">
                      {service.faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                          <h3>{faq.question}</h3>
                          <p>{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="service-sidebar">
                <div className="sidebar-card card-premium">
                  <h3>İletişime Geçin</h3>
                  <p>Projeniz için ücretsiz keşif ve teklif almak ister misiniz?</p>
                  <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%' }}>
                    Teklif İsteyin
                  </Link>
                </div>

                {service.relatedServices.length > 0 && (
                  <div className="sidebar-card">
                    <h3>İlgili Hizmetler</h3>
                    <ul className="related-services">
                      {service.relatedServices.map((relatedSlug, index) => (
                        <li key={index}>
                          <Link href={`/hizmetler/${relatedSlug}`}>
                            {getRelatedServiceTitle(relatedSlug)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.whyChooseUs.length > 0 && (
                  <div className="sidebar-card">
                    <h3>Neden Kutup Grup?</h3>
                    <ul className="why-list">
                      {service.whyChooseUs.map((reason, index) => (
                        <li key={index}>
                          <span className="check-icon"><CheckIcon /></span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .service-page {
          margin-top: 80px;
        }
        
        .service-hero {
          background: var(--gradient-subtle);
          padding: var(--spacing-12) 0 var(--spacing-16);
          border-bottom: 1px solid var(--border-default);
          position: relative;
        }

        .service-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-10);
          align-items: center;
        }

        .service-hero-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.15);
          border: 3px solid rgba(62,146,204,0.15);
        }
        
        .breadcrumb {
          margin-bottom: var(--spacing-6);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }
        
        .breadcrumb a {
          color: var(--color-arctic-blue);
        }
        
        .breadcrumb span {
          margin: 0 var(--spacing-2);
        }
        
        .service-hero-text {
          text-align: left;
        }
        
        .service-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(62, 146, 204, 0.12), rgba(10, 36, 99, 0.08));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-6);
          color: var(--color-arctic-blue);
        }
        
        .service-hero-content h1 {
          font-size: var(--font-size-h1);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-6);
        }
        
        .service-intro {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-8);
        }
        
        .service-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-12);
        }
        
        .service-article {
          max-width: 100%;
        }
        
        .content-section {
          margin-bottom: var(--spacing-12);
        }
        
        .content-section h2 {
          font-size: var(--font-size-h3);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-6);
          padding-bottom: var(--spacing-3);
          border-bottom: 3px solid var(--color-ice-blue);
        }
        
        .content-section p {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
        }
        
        .advantages-list, .tech-list, .why-list {
          list-style: none;
          padding: 0;
        }
        
        .advantages-list li, .why-list li {
          padding: var(--spacing-3) 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-default);
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .tech-list li {
          padding: var(--spacing-3) 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-default);
          padding-left: var(--spacing-4);
          position: relative;
        }

        .tech-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-arctic-blue);
        }
        
        .check-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-4);
        }
        
        .application-card {
          background: var(--bg-secondary);
          padding: var(--spacing-5);
          border-radius: var(--radius-base);
          text-align: center;
          border: 1px solid var(--border-default);
          transition: all 0.3s ease;
        }

        .application-card:hover {
          border-color: var(--color-arctic-blue);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(62,146,204,0.1);
        }
        
        .app-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-3);
          color: var(--color-arctic-blue);
        }
        
        .application-card p {
          font-size: var(--font-size-sm);
          color: var(--text-primary);
          margin: 0;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }
        
        .faq-item {
          background: var(--bg-secondary);
          padding: var(--spacing-6);
          border-radius: var(--radius-base);
          border-left: 4px solid var(--color-arctic-blue);
        }
        
        .faq-item h3 {
          font-size: var(--font-size-lg);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-3);
        }
        
        .faq-item p {
          margin: 0;
        }
        
        .service-sidebar {
          position: sticky;
          top: 100px;
          align-self: start;
        }
        
        .sidebar-card {
          background: white;
          border: 2px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }
        
        .sidebar-card h3 {
          font-size: var(--font-size-h5);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
        }
        
        .sidebar-card p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
        }
        
        .related-services {
          list-style: none;
          padding: 0;
        }
        
        .related-services li {
          margin-bottom: var(--spacing-3);
        }
        
        .related-services a {
          color: var(--text-primary);
          display: block;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
          font-size: var(--font-size-sm);
        }
        
        .related-services a:hover {
          background: var(--bg-secondary);
          color: var(--color-arctic-blue);
        }
        
        @media (max-width: 1024px) {
          .service-content {
            grid-template-columns: 1fr;
          }
          
          .service-sidebar {
            position: static;
          }
        }
        
        @media (max-width: 768px) {
          .service-hero-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .service-hero-image {
            order: -1;
          }

          .service-hero-text {
            text-align: center;
          }

          .service-hero-text h1 {
            font-size: 1.65rem;
            line-height: 1.25;
          }

          .service-intro {
            font-size: 0.95rem;
          }

          .service-icon-wrap {
            margin: 0 auto var(--spacing-5);
          }

          .btn-cta {
            display: inline-flex;
            margin: 0 auto;
          }

          .service-hero {
            padding: var(--spacing-8) 0 var(--spacing-10);
          }
          
          .applications-grid {
            grid-template-columns: 1fr;
          }

          .section-content h2 {
            font-size: 1.35rem;
          }

          .section-content p {
            font-size: 0.92rem;
            line-height: 1.7;
          }

          .sidebar-card {
            padding: var(--spacing-5);
          }

          .breadcrumb {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .service-page {
            margin-top: 70px;
          }

          .service-hero {
            padding: var(--spacing-6) 0 var(--spacing-8);
          }

          .service-hero-text h1 {
            font-size: 1.4rem;
          }

          .service-intro {
            font-size: 0.9rem;
          }

          .service-icon-wrap {
            width: 52px;
            height: 52px;
            border-radius: 14px;
          }

          .section-content {
            padding: var(--spacing-8) 0;
          }

          .section-content h2 {
            font-size: 1.2rem;
          }

          .application-card {
            padding: var(--spacing-4);
          }

          .why-list li {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </>
  );
}
