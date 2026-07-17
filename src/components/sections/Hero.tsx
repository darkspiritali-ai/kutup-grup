

import Link from '@/components/ui/Link';
import Image from '@/components/ui/Image';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image & Overlay */}
      <div className="hero-bg">
        <Image
          src="/images/slope-stabilization.png"
          alt="Kutup Grup Hero Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            {/* Badge */}
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Türkiye&apos;nin Öncü Endüstriyel Dağcılık Firması
            </div>

            <h1 className="hero-title">
              Yüksekteki <span className="hero-gradient-text">Güvenliğiniz</span>
              <br />
              Bizim İşimiz
            </h1>
            
            <p className="hero-subtitle">
              Endüstriyel dağcılık, jeoteknik uygulamalar ve yüksek yapı çözümlerinde
              15+ yıllık deneyim. Heyelan, kaya düşmesi ve yüksekte çalışma
              problemlerinize profesyonel çözümler sunuyoruz.
            </p>

            <div className="hero-cta">
              <MagneticButton>
                <Link href="/iletisim" className="btn btn-cta">
                  Ücretsiz Teklif Alın
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/hizmetler" className="btn btn-secondary">
                  Hizmetlerimiz
                </Link>
              </MagneticButton>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span>IRATA Sertifikalı</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span>ISO 9001 & 45001</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span>500+ Proje</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
          background: #030712;
        }
        
        /* Full width background image container */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transform: scale(1.02);
          animation: zoomSlow 30s ease-out infinite alternate;
        }

        @keyframes zoomSlow {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
        
        /* Brightened premium overlay for readability without dimming the image */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3, 7, 18, 0.3) 0%, rgba(3, 7, 18, 0.65) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: var(--spacing-20) 0;
        }
        
        .hero-text {
          max-width: 840px;
          text-align: center;
          margin: 0 auto;
        }
        
        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 22px;
          background: rgba(3, 7, 18, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          font-family: var(--font-heading);
          margin-bottom: var(--spacing-8);
          animation: fadeInDown 0.8s ease-out;
        }
        
        .hero-badge svg {
          color: var(--color-arctic-blue);
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-title {
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: var(--spacing-6);
          color: white;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 16px rgba(3, 7, 18, 0.85);
          animation: fadeIn 0.8s ease-out 0.1s both;
        }
        
        .hero-gradient-text {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00f2fe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientText 6s ease infinite;
          font-weight: 900;
        }
        
        @keyframes gradientText {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-subtitle {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.95);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-10);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 2px 10px rgba(3, 7, 18, 0.9);
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .hero-cta {
          display: flex;
          gap: var(--spacing-4);
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeIn 0.8s ease-out 0.3s both;
        }

         .hero-cta .btn-cta {
          background: linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-arctic-blue) 100%) !important;
          color: white !important;
          padding: var(--spacing-4) var(--spacing-8);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-family: var(--font-heading);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 10px 25px rgba(62, 146, 204, 0.3);
        }

        .hero-cta .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(62, 146, 204, 0.5);
          color: white !important;
        }

        .hero-cta :global(.btn-secondary) {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border: 1.5px solid #ffffff !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: var(--spacing-4) var(--spacing-8);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-family: var(--font-heading);
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .hero-cta :global(.btn-secondary:hover) {
          background: #ffffff !important;
          color: var(--color-deep-navy) !important;
          transform: translateY(-2px);
          border-color: #ffffff !important;
        }
        
        /* Trust bar */
        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-6);
          margin-top: var(--spacing-12);
          animation: fadeIn 0.8s ease-out 0.5s both;
        }
        
        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-shadow: 0 2px 8px rgba(3, 7, 18, 0.8);
        }
        
        .trust-item svg {
          color: var(--color-success-green);
          flex-shrink: 0;
        }
        
        .trust-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.25);
        }
        
        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .scroll-line {
          width: 2px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        
        .scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: var(--color-arctic-blue);
          border-radius: 2px;
          animation: scrollDown 1.8s ease-in-out infinite;
        }
        
        @keyframes scrollDown {
          0% { top: -50%; }
          100% { top: 150%; }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 85vh;
            padding: var(--spacing-12) 0;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-cta .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .hero-trust {
            flex-direction: column;
            gap: var(--spacing-3);
          }
          
          .trust-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
