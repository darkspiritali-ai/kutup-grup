'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import Stats from '@/components/sections/Stats';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StructuredData from '@/components/seo/StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';
import Link from 'next/link';

/* SVG Icons */
const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 9 8 9 8s2-4 4.5-4a2.5 2.5 0 010 5H12" />
    <path d="M12 9v12" /><path d="M6 9h12l-1.5 12h-9L6 9z" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const features = [
  { icon: <TrophyIcon />, title: 'Deneyimli Ekip', description: '15 yılı aşkın sektör deneyimi ile uzman kadromuz her projede yanınızda.', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' },
  { icon: <ShieldIcon />, title: 'Güvenlik Odaklı', description: 'İş güvenliği standartlarına tam uyum, sertifikalı ekipman ve süreçler.', color: '#3E92CC', bg: 'rgba(62, 146, 204, 0.1)' },
  { icon: <BoltIcon />, title: 'Hızlı Çözüm', description: 'Acil durumlarda 7/24 müdahale, projelerde zamanında teslimat.', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' },
  { icon: <CheckCircleIcon />, title: 'Kalite Garantisi', description: 'ISO sertifikalı süreçler, kaliteli malzeme ve işçilik garantisi.', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
];

const testimonials = [
  { name: 'Mehmet Kaya', company: 'Yapı A.Ş.', text: 'Kutup Grup ile birçok projede çalıştık. Profesyonellikleri ve güvenlik odaklı yaklaşımları bizi her zaman etkiledi.', rating: 5 },
  { name: 'Ayşe Demir', company: 'İnşaat Ltd.', text: 'Acil durumlarda bile hızlı müdahale kapasiteleri mükemmel. Her projede kaliteli iş çıkardılar.', rating: 5 },
  { name: 'Can Özkan', company: 'Enerji Grubu', text: 'Rüzgar türbini bakım projelerimizde güvenle çalıştığımız tek firma. IRATA sertifikalı ekipleri fark yaratıyor.', rating: 5 },
];

const certifications = [
  'IRATA Sertifikası', 'SPRAT Belgesi', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'CE Belgesi',
];

export default function Home() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <StructuredData data={organizationSchema} />
      <Header />
      <main>
        <Hero />
        <ServicesShowcase />
        <Stats />

        {/* Why Choose Us Section */}
        <section className="section dot-grid" style={{ background: '#f8fafc' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-header text-center">
                <p className="section-eyebrow">Avantajlarımız</p>
                <h2 className="section-title">Neden Kutup Grup?</h2>
                <p className="section-subtitle">
                  Yüksekte çalışma ve jeoteknik alanında güvenilir çözüm ortağınız
                </p>
              </div>
            </ScrollReveal>

            <div className="features-grid">
              {features.map((feature, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 120}>
                  <div className="feature-card card-premium">
                    <div className="feature-icon" style={{ background: feature.bg, color: feature.color }}>
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <div className="section-header text-center">
                <p className="section-eyebrow">Müşteri Yorumları</p>
                <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
                <p className="section-subtitle">
                  Birlikte çalıştığımız firmalardan geri bildirimler
                </p>
              </div>
            </ScrollReveal>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 150}>
                  <div className="testimonial-card">
                    <div className="testimonial-quote"><QuoteIcon /></div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-company">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / Certifications Section */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-header text-center">
                <p className="section-eyebrow">Sertifikalarımız</p>
                <h2 className="section-title">Güvenilir Standartlar</h2>
              </div>
            </ScrollReveal>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} variant="scaleIn" delay={index * 80}>
                  <div className="cert-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>{cert}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-bg-shapes">
            <div className="cta-shape cta-shape-1" />
            <div className="cta-shape cta-shape-2" />
          </div>
          <div className="container">
            <ScrollReveal variant="scaleIn">
              <div className="cta-content">
                <h2>Projeniz İçin Ücretsiz Teklif Alın</h2>
                <p>Uzman ekibimiz projenizi değerlendirip size en uygun çözümü sunmaya hazır.</p>
                <Link href="/iletisim" className="btn btn-cta-white">
                  Hemen İletişime Geçin
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* Section header shared styling */
        .section-header {
          margin-bottom: var(--spacing-12);
        }

        .section-eyebrow {
          font-size: var(--font-size-sm);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-arctic-blue);
          margin-bottom: var(--spacing-2);
          font-family: var(--font-heading);
        }
        
        .section-title {
          font-size: var(--font-size-h2);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-6);
        }
        
        .feature-card {
          text-align: center;
          padding: var(--spacing-8) var(--spacing-6);
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-5);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.12) rotate(3deg);
        }
        
        .feature-card h3 {
          font-size: var(--font-size-h5);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-3);
        }
        
        .feature-card p {
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-6);
        }

        .testimonial-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: var(--spacing-8);
          border: 1px solid var(--border-default);
          transition: all 0.35s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.1);
          border-color: rgba(62, 146, 204, 0.2);
        }

        .testimonial-quote {
          margin-bottom: var(--spacing-4);
          color: var(--color-arctic-blue);
        }

        .testimonial-text {
          font-size: var(--font-size-base);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-4);
          font-style: italic;
        }

        .testimonial-stars {
          display: flex;
          gap: 2px;
          margin-bottom: var(--spacing-4);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--border-default);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
        }

        .testimonial-name {
          font-weight: 600;
          color: var(--color-deep-navy);
          font-size: var(--font-size-sm);
        }

        .testimonial-company {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
        }

        /* Certifications */
        .certifications-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-4);
          justify-content: center;
        }

        .cert-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3) var(--spacing-5);
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-deep-navy);
          transition: all 0.3s ease;
          cursor: default;
        }

        .cert-badge:hover {
          border-color: var(--color-arctic-blue);
          box-shadow: 0 4px 12px rgba(62, 146, 204, 0.15);
          transform: translateY(-2px);
        }

        .cert-badge svg {
          color: var(--color-success-green);
        }

        /* CTA Section */
        .cta-section {
          background: var(--gradient-primary);
          padding: var(--spacing-24) 0;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .cta-bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cta-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          background: white;
        }

        .cta-shape-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
        }

        .cta-shape-2 {
          width: 200px;
          height: 200px;
          bottom: -60px;
          left: -40px;
        }
        
        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: var(--font-size-h2);
          color: white;
          margin-bottom: var(--spacing-4);
          letter-spacing: -0.02em;
        }
        
        .cta-content p {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: var(--spacing-8);
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .btn-cta-white {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          background: white;
          color: var(--color-deep-navy);
          padding: var(--spacing-5) var(--spacing-10);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: var(--font-size-base);
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-cta-white:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
          color: var(--color-deep-navy);
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }

          .certifications-grid {
            gap: var(--spacing-3);
          }

          .cert-badge {
            font-size: var(--font-size-xs);
            padding: var(--spacing-2) var(--spacing-4);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
