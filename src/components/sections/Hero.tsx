'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated Background Layers */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-gradient-orb hero-orb-1" />
        <div className="hero-gradient-orb hero-orb-2" />
        <div className="hero-gradient-orb hero-orb-3" />
      </div>

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
              Yüksekteki{' '}
              <span className="hero-gradient-text">Güvenliğiniz</span>
              <br />
              Bizim İşimiz
            </h1>
            <p className="hero-subtitle">
              Endüstriyel dağcılık, jeoteknik uygulamalar ve yüksek yapı çözümlerinde
              15+ yıllık deneyim. Heyelan, kaya düşmesi ve yüksekte çalışma
              problemlerinize profesyonel çözümler sunuyoruz.
            </p>
            <div className="hero-cta">
              <Link href="/iletisim" className="btn btn-cta">
                Ücretsiz Teklif Alın
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/hizmetler" className="btn btn-secondary">
                Hizmetlerimiz
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span>IRATA Sertifikalı</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span>ISO 9001 & 45001</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
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
          margin-top: 80px;
          background: #f8fafc;
        }
        
        /* Dot grid background */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(10, 36, 99, 0.035) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        
        /* Floating gradient orbs */
        .hero-gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .hero-orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(62, 146, 204, 0.3) 0%, transparent 70%);
          top: -10%;
          right: -5%;
          animation: orbFloat1 20s ease-in-out infinite;
        }
        
        .hero-orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(165, 216, 221, 0.25) 0%, transparent 70%);
          bottom: -5%;
          left: -5%;
          animation: orbFloat2 25s ease-in-out infinite;
        }
        
        .hero-orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(10, 36, 99, 0.15) 0%, transparent 70%);
          top: 40%;
          left: 50%;
          animation: orbFloat3 18s ease-in-out infinite;
        }
        
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -25px); }
        }
        
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, -20px); }
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: var(--spacing-20) 0;
        }
        
        .hero-text {
          max-width: 900px;
          text-align: center;
          margin: 0 auto;
        }
        
        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(10, 36, 99, 0.06);
          border: 1px solid rgba(10, 36, 99, 0.1);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-deep-navy);
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
          font-size: clamp(2.75rem, 6vw, 4.75rem);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: var(--spacing-6);
          color: var(--color-deep-navy);
          letter-spacing: -0.02em;
          animation: fadeIn 0.8s ease-out 0.1s both;
        }
        
        .hero-gradient-text {
          background: linear-gradient(135deg, #3E92CC 0%, #0A2463 50%, #A5D8DD 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientText 6s ease infinite;
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
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-10);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .hero-cta {
          display: flex;
          gap: var(--spacing-4);
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeIn 0.8s ease-out 0.3s both;
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
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        .trust-item svg {
          color: var(--color-success-green);
          flex-shrink: 0;
        }
        
        .trust-divider {
          width: 1px;
          height: 20px;
          background: var(--border-default);
        }
        
        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .scroll-line {
          width: 2px;
          height: 40px;
          background: var(--border-default);
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
            margin-top: 70px;
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
          
          .hero-orb-1 {
            width: 300px;
            height: 300px;
          }
          
          .hero-orb-2 {
            width: 250px;
            height: 250px;
          }
          
          .hero-orb-3 {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
