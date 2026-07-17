

import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Tamamlanan Proje',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    number: 15,
    suffix: '+',
    label: 'Yıllık Deneyim',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    number: 200,
    suffix: '+',
    label: 'Mutlu Müşteri',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: 50,
    suffix: '+',
    label: 'Uzman Ekip',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

function Counter({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <>{count}</>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Wave divider top */}
      <div className="section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 50C960 52 1056 44 1152 36C1248 28 1344 20 1392 16L1440 12V60H0Z" fill="#0A2463" />
        </svg>
      </div>

      <section ref={sectionRef} className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
                }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  <Counter end={stat.number} isVisible={isVisible} />
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
                    .stats-section {
                        padding: var(--spacing-20) 0;
                        background: var(--gradient-dark);
                        position: relative;
                        overflow: hidden;
                    }

                    .stats-section::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background-image:
                            radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                        background-size: 28px 28px;
                        pointer-events: none;
                    }

                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: var(--spacing-8);
                        position: relative;
                        z-index: 1;
                    }
                    
                    .stat-card {
                        text-align: center;
                        padding: var(--spacing-8) var(--spacing-4);
                        border-radius: var(--radius-lg);
                        background: rgba(255, 255, 255, 0.04);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(4px);
                        transition: all 0.3s ease;
                    }

                    .stat-card:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.15);
                        transform: translateY(-4px) !important;
                    }

                    .stat-icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: rgba(62, 146, 204, 0.15);
                        color: var(--color-ice-blue);
                        margin: 0 auto var(--spacing-4);
                    }
                    
                    .stat-number {
                        font-size: clamp(2.5rem, 5vw, 3.5rem);
                        font-weight: 800;
                        font-family: var(--font-heading);
                        background: linear-gradient(135deg, #FFFFFF 0%, #A5D8DD 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: var(--spacing-2);
                        letter-spacing: -0.02em;
                    }
                    
                    .stat-label {
                        font-size: var(--font-size-base);
                        color: rgba(255, 255, 255, 0.65);
                        font-weight: 500;
                        font-family: var(--font-heading);
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    
                    @media (max-width: 768px) {
                        .stats-grid {
                            grid-template-columns: repeat(2, 1fr);
                            gap: var(--spacing-4);
                        }

                        .stat-card {
                            padding: var(--spacing-6) var(--spacing-3);
                        }
                    }
                `}</style>
      </section>

      {/* Wave divider bottom */}
      <div className="section-divider section-divider-flip">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 50C960 52 1056 44 1152 36C1248 28 1344 20 1392 16L1440 12V60H0Z" fill="#0A2463" />
        </svg>
      </div>
    </>
  );
}
