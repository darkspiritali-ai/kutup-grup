'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';

/* === Inline SVG Icons (Lucide-style) === */
const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" /><path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);

const MountainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="m4.14 15.08 2.86-2.7 3 2.7" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);

const WindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1111 8H2" />
    <path d="M12.6 19.4A2 2 0 1014 16H2" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const services = [
  {
    title: 'Jeoteknik Uygulamalar',
    description: 'Şev stabilizasyonu, kaya bariyeri ve heyelan önleme sistemleri.',
    icon: <MountainIcon />,
    href: '/hizmetler/jeoteknik-uygulamalar',
    color: '#10B981',
    image: '/services/kaya-bariyeri.png',
  },
  {
    title: 'Dış Cephe Dekoratif Aydınlatma',
    description: 'Yüksek yapılarınıza modern ve estetik aydınlatma çözümleri.',
    icon: <LightbulbIcon />,
    href: '/hizmetler/dis-cephe-dekoratif-aydinlatma',
    color: '#F59E0B',
    image: '/services/dis-cephe-aydinlatma.png',
  },
  {
    title: 'İç ve Dış Cephe Temizliği',
    description: 'Yüksek yapılarda profesyonel temizlik ve bakım hizmetleri.',
    icon: <SparklesIcon />,
    href: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri',
    color: '#3E92CC',
    image: '/services/cephe-temizlik.png',
  },
  {
    title: 'Güvenlik Ağı Kurulumu',
    description: 'İş güvenliği için kalıcı ve geçici güvenlik ağı sistemleri.',
    icon: <ShieldIcon />,
    href: '/hizmetler/guvenlik-agi-kurulumu',
    color: '#EF4444',
    image: '/services/guvenlik-agi.png',
  },
  {
    title: 'Yatay & Düşey Yaşam Hattı',
    description: 'Yüksekte çalışan personel için can güvenliği sistemleri.',
    icon: <LinkIcon />,
    href: '/hizmetler/yatay-ve-dusey-yasam-hatti',
    color: '#8B5CF6',
    image: '/services/yasam-hatti.png',
  },
  {
    title: 'Rüzgar Enerji Santralleri',
    description: 'RES bakım, onarım ve montaj hizmetleri.',
    icon: <WindIcon />,
    href: '/hizmetler/ruzgar-enerji-santralleri',
    color: '#06B6D4',
    image: '/services/ruzgar-turbini.png',
  },
];

export default function ServicesShowcase() {
  return (
    <section className="section services-showcase-section">
      <div className="container">
        <FadeUp className="section-header text-center">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Yüksekte çalışma, jeoteknik ve iş güvenliğinde kapsamlı çözümler sunuyoruz
          </p>
        </FadeUp>

        <div className="services-grid">
          {services.map((service, index) => (
            <FadeUp key={index} delay={index * 0.1} className="service-card-wrapper">
              <Link
                href={service.href}
                className="service-card"
              >
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="service-icon-wrapper" style={{ '--icon-color': service.color } as React.CSSProperties}>
                    {service.icon}
                  </div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <span className="service-link">
                    Detaylı Bilgi <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-showcase-section {
          background: #f8fafc;
          padding: var(--spacing-20) 0;
        }

        .section-header {
          margin-bottom: var(--spacing-16);
        }
        
        .section-title {
          font-size: var(--font-size-h2);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: var(--line-height-relaxed);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: var(--spacing-8);
        }

        :global(.service-card-wrapper) {
          height: 100%;
        }
        
        .service-card {
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          height: 100%;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 3;
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-arctic-blue);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.12);
        }
        
        .service-card-image {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          background: #f1f5f9;
        }
        
        .service-card-image :global(img) {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        .service-card:hover .service-card-image :global(img) {
          transform: scale(1.06);
        }
        
        .service-icon-wrapper {
          position: absolute;
          bottom: 16px;
          left: 16px;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.95);
          color: var(--icon-color);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .service-card:hover .service-icon-wrapper {
          background: var(--icon-color);
          color: white;
          transform: scale(1.05);
        }
        
        .service-card-content {
          padding: var(--spacing-6);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-2);
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: var(--color-arctic-blue);
        }
        
        .service-desc {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
          line-height: var(--line-height-relaxed);
          font-size: 0.95rem;
          flex-grow: 1;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-arctic-blue);
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          transition: all 0.2s ease;
          margin-top: auto;
        }
        
        .service-card:hover .service-link {
          gap: 10px;
          color: var(--color-deep-navy);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }
          .service-card-image {
            height: 180px;
          }
          .services-showcase-section {
            padding: var(--spacing-12) 0;
          }
        }
      `}</style>
    </section>
  );
}
