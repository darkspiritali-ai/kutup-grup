

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import Stats from '@/components/sections/Stats';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StructuredData from '@/components/seo/StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';
import Link from '@/components/ui/Link';

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
const features = [
  { icon: <TrophyIcon />, title: 'Kapsamı netleştirme', description: 'Yapı, görev ve beklenen çıktıyı ilk değerlendirmede birlikte netleştiririz.', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' },
  { icon: <ShieldIcon />, title: 'Risk odaklı planlama', description: 'Erişim yöntemi, çalışma alanı, çevre ve kurtarma gerekliliklerini birlikte ele alırız.', color: '#3E92CC', bg: 'rgba(62, 146, 204, 0.1)' },
  { icon: <BoltIcon />, title: 'Sahaya uygun yöntem', description: 'İskele, platform veya iple erişim seçeneklerini işin koşullarına göre karşılaştırırız.', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' },
  { icon: <CheckCircleIcon />, title: 'İzlenebilir teslim', description: 'Kontrol, iletişim ve teslim kayıtlarını çalışma kapsamının bir parçası olarak planlarız.', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
];

const workingApproach = [
  { title: 'İlk görüşme', text: 'Yapı, saha, görev ve erişimle ilgili mevcut bilgileri toplar; hangi verilerin eksik olduğunu açıkça belirtiriz.' },
  { title: 'Saha ve risk değerlendirmesi', text: 'Çalışma alanını, çevredeki kişileri, düşen cisim riskini, ekipman gerekliliklerini ve acil durum senaryosunu inceleriz.' },
  { title: 'Yöntem ve teslim kapsamı', text: 'Uygun yöntemi, sorumlulukları, kontrol adımlarını ve teslim kayıtlarını proje kapsamına göre netleştiririz.' },
];

const certifications = [
  'Saha ve görev kapsamı', 'Ekipman ve üretici talimatları', 'Risk değerlendirmesi',
  'İş metodu ve iletişim', 'Acil durum ve kurtarma', 'Teslim ve kayıt düzeni',
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
                  Yüksekte çalışma ve jeoteknik hizmetlerinin kapsamını saha koşullarına göre değerlendirin
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

        {/* Working approach section */}
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <div className="section-header text-center">
                <p className="section-eyebrow">Çalışma yaklaşımımız</p>
                <h2 className="section-title">İlk görüşmeden teslimata</h2>
                <p className="section-subtitle">
                  Her işin kapsamı ve saha koşulu farklıdır; bu nedenle planlamayı gerçek ihtiyaç üzerinden kurarız.
                </p>
              </div>
            </ScrollReveal>

            <div className="testimonials-grid">
              {workingApproach.map((item, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 150}>
                  <div className="testimonial-card">
                    <div className="testimonial-quote"><CheckCircleIcon /></div>
                    <h3 className="testimonial-name">{item.title}</h3>
                    <p className="testimonial-text">{item.text}</p>
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
                <h2>Projenizin kapsamını birlikte netleştirelim</h2>
                <p>Yapı ve saha bilgilerinizi paylaşın; uygun değerlendirme adımlarını birlikte belirleyelim.</p>
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
        
        :global(.btn-cta-white) {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          background: white !important;
          color: var(--color-deep-navy) !important;
          padding: var(--spacing-4) var(--spacing-8) !important;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: var(--font-size-base);
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        :global(.btn-cta-white:hover) {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
          color: var(--color-deep-navy) !important;
          background: #f8fafc !important;
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
