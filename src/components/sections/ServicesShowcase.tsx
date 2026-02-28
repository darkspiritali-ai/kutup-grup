'use client';

import Link from 'next/link';

/* === Inline SVG Icons (Lucide-style) === */
const LightbulbIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" /><path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);

const MountainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="m4.14 15.08 2.86-2.7 3 2.7" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);

const WindIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Dış Cephe Dekoratif Aydınlatma',
    description: 'Yüksek yapılarınıza modern ve estetik aydınlatma çözümleri.',
    icon: <LightbulbIcon />,
    href: '/hizmetler/dis-cephe-dekoratif-aydinlatma',
    color: '#F59E0B',
  },
  {
    title: 'Jeoteknik Uygulamalar',
    description: 'Şev stabilizasyonu, kaya bariyeri ve heyelan önleme sistemleri.',
    icon: <MountainIcon />,
    href: '/hizmetler/yamac-yuzeyi-temizleme',
    color: '#10B981',
  },
  {
    title: 'İç ve Dış Cephe Temizliği',
    description: 'Yüksek yapılarda profesyonel temizlik ve bakım hizmetleri.',
    icon: <SparklesIcon />,
    href: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri',
    color: '#3E92CC',
  },
  {
    title: 'Güvenlik Ağı Kurulumu',
    description: 'İş güvenliği için kalıcı ve geçici güvenlik ağı sistemleri.',
    icon: <ShieldIcon />,
    href: '/hizmetler/guvenlik-agi-kurulumu',
    color: '#EF4444',
  },
  {
    title: 'Yatay & Düşey Yaşam Hattı',
    description: 'Yüksekte çalışan personel için can güvenliği sistemleri.',
    icon: <LinkIcon />,
    href: '/hizmetler/yatay-ve-dusey-yasam-hatti',
    color: '#8B5CF6',
  },
  {
    title: 'Rüzgar Enerji Santralleri',
    description: 'RES bakım, onarım ve montaj hizmetleri.',
    icon: <WindIcon />,
    href: '/hizmetler/ruzgar-enerji-santralleri',
    color: '#06B6D4',
  },
];

export default function ServicesShowcase() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Yüksekte çalışma, jeoteknik ve iş güvenliğinde kapsamlı çözümler sunuyoruz
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="service-card"
            >
              <div className="service-icon-wrapper" style={{ '--icon-color': service.color } as React.CSSProperties}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <span className="service-link">
                Detaylı Bilgi <ArrowRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: var(--spacing-12);
        }
        
        .section-title {
          font-size: var(--font-size-h2);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
        }
        
        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-8);
        }
        
        .service-card {
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--spacing-8);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
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
          transition: transform 0.35s ease;
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-arctic-blue);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.12);
        }
        
        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-5);
          background: color-mix(in srgb, var(--icon-color) 12%, transparent);
          color: var(--icon-color);
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon-wrapper {
          background: color-mix(in srgb, var(--icon-color) 20%, transparent);
          transform: scale(1.1);
        }
        
        .service-title {
          font-size: var(--font-size-h5);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-3);
        }
        
        .service-desc {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
          line-height: var(--line-height-relaxed);
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-arctic-blue);
          font-weight: 600;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          transition: all 0.2s ease;
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
        }
      `}</style>
    </section>
  );
}
