

import { useState } from 'react';
import Link from '@/components/ui/Link';
import Image from '@/components/ui/Image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SERVICES_DATA, type ServiceContent } from '@/lib/services-data';

/* Category config */
const CATEGORIES = [
    { key: 'all', label: 'Tümü' },
    { key: 'endustriyel', label: 'Endüstriyel Dağcılık' },
    { key: 'jeoteknik', label: 'Jeoteknik Çözümler' },
    { key: 'diger', label: 'Diğer Hizmetler' },
];

/* Category-aware SVG icon set */
const categoryIcons: Record<string, React.ReactNode> = {
    endustriyel: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" /><path d="M9 20v-6h6v6" />
        </svg>
    ),
    jeoteknik: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    diger: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
};

const categoryColors: Record<string, { bg: string; color: string }> = {
    endustriyel: { bg: 'rgba(62, 146, 204, 0.1)', color: '#3E92CC' },
    jeoteknik: { bg: 'rgba(16, 185, 129, 0.1)', color: '#10B981' },
    diger: { bg: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' },
};

export default function HizmetlerPageClient() {
    const [activeCategory, setActiveCategory] = useState('all');
    const allServices = Object.values(SERVICES_DATA);

    const filteredServices = activeCategory === 'all'
        ? allServices
        : allServices.filter((s: ServiceContent) => s.category === activeCategory);

    return (
        <div>
            <Header />
            <main>
                {/* Hero */}
                <section className="hizmetler-hero">
                    <div className="hero-grid-bg" />
                    <div className="container">
                        <div className="hero-content">
                            <p className="hero-eyebrow">Profesyonel Çözümler</p>
                            <h1>Tüm Hizmetlerimiz</h1>
                            <p className="hero-subtitle">
                                Endüstriyel dağcılık, jeoteknik uygulamalar ve iş güvenliği alanında
                                {' '}<strong>{allServices.length}</strong> farklı hizmet sunuyoruz
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter + Grid */}
                <section className="section dot-grid" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        {/* Category Filter */}
                        <div className="filter-container">
                            <div className="filter-bar filter-buttons">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="filter-count">{filteredServices.length} hizmet görüntüleniyor</p>

                        {/* Services Grid */}
                        <div className="services-grid">
                            {filteredServices.map((service: ServiceContent, index: number) => {
                                const colors = categoryColors[service.category] || categoryColors.diger;
                                const icon = categoryIcons[service.category] || categoryIcons.diger;
                                return (
                                    <ScrollReveal key={service.slug} variant="fadeUp" delay={Math.min(index * 80, 400)}>
                                        <Link href={`/hizmetler/${service.slug}`} className="service-card-link">
                                            <div className="service-card">
                                                {service.heroImage && (
                                                    <div className="service-card-image">
                                                        <Image
                                                            src={service.heroImage}
                                                            alt={service.title}
                                                            width={400}
                                                            height={220}
                                                            style={{ objectFit: 'cover', width: '100%', height: '180px' }}
                                                        />
                                                    </div>
                                                )}
                                                <div className="service-card-body">
                                                    <div className="service-icon" style={{ background: colors.bg, color: colors.color }}>
                                                        {icon}
                                                    </div>
                                                    <div className="service-category">{
                                                        service.category === 'endustriyel' ? 'Endüstriyel' :
                                                            service.category === 'jeoteknik' ? 'Jeoteknik' : 'Diğer'
                                                    }</div>
                                                    <h3>{service.title}</h3>
                                                    <p>{service.metaDescription.slice(0, 120)}...</p>
                                                    <span className="service-link">
                                                        Detayları İncele
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="container">
                        <ScrollReveal variant="scaleIn">
                            <div className="cta-inner">
                                <h2>İhtiyacınıza Uygun Hizmeti Bulamadınız mı?</h2>
                                <p>Uzman ekibimize danışarak projenize özel çözüm oluşturabilirsiniz.</p>
                                <Link href="/iletisim" className="btn btn-cta">
                                    Bizimle İletişime Geçin
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
                /* Hero */
                .hizmetler-hero {
                    position: relative;
                    padding: 160px 0 80px;
                    background: linear-gradient(135deg, #0A2463 0%, #1e3a8a 60%, #3E92CC 100%);
                    overflow: hidden;
                    text-align: center;
                }

                .hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 28px 28px;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                }

                .hero-eyebrow {
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-ice-blue);
                    margin-bottom: var(--spacing-3);
                }

                .hizmetler-hero h1 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    color: white;
                    letter-spacing: -0.02em;
                    margin-bottom: var(--spacing-4);
                }

                .hero-subtitle {
                    font-size: var(--font-size-lg);
                    color: rgba(255,255,255,0.75);
                    max-width: 560px;
                    margin: 0 auto;
                    line-height: var(--line-height-relaxed);
                }

                .hero-subtitle strong {
                    color: white;
                }

                /* Filter Bar */
                .filter-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--spacing-3);
                    justify-content: center;
                    margin-bottom: var(--spacing-4);
                }

                .filter-btn {
                    padding: var(--spacing-2) var(--spacing-5);
                    border: 1px solid var(--border-default);
                    border-radius: var(--radius-full);
                    background: white;
                    font-size: var(--font-size-sm);
                    font-weight: 600;
                    font-family: var(--font-heading);
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.25s ease;
                }

                .filter-btn:hover {
                    border-color: var(--color-arctic-blue);
                    color: var(--color-arctic-blue);
                }

                .filter-btn.active {
                    background: var(--color-deep-navy);
                    color: white;
                    border-color: var(--color-deep-navy);
                }

                .filter-count {
                    text-align: center;
                    font-size: var(--font-size-sm);
                    color: var(--text-muted);
                    margin-bottom: var(--spacing-10);
                }

                /* Services Grid */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--spacing-6);
                }

                .service-card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    height: 100%;
                }

                .service-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-default);
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                }

                .service-card-image {
                    width: 100%;
                    overflow: hidden;
                }

                .service-card-image img {
                    transition: transform 0.5s ease;
                }

                .service-card:hover .service-card-image img {
                    transform: scale(1.05);
                }

                .service-card-body {
                    padding: var(--spacing-6);
                }

                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--gradient-primary);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }

                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(10,36,99,0.12);
                    border-color: rgba(62,146,204,0.25);
                }

                .service-card:hover::before {
                    transform: scaleX(1);
                }

                .service-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: var(--spacing-4);
                    transition: transform 0.3s ease;
                }

                .service-card:hover .service-icon {
                    transform: scale(1.1) rotate(3deg);
                }

                .service-category {
                    font-size: var(--font-size-xs);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--text-muted);
                    margin-bottom: var(--spacing-2);
                }

                .service-card h3 {
                    font-size: var(--font-size-h6);
                    color: var(--color-deep-navy);
                    margin-bottom: var(--spacing-3);
                    line-height: 1.3;
                }

                .service-card p {
                    font-size: var(--font-size-sm);
                    color: var(--text-secondary);
                    line-height: var(--line-height-relaxed);
                    margin-bottom: var(--spacing-4);
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: var(--font-size-sm);
                    font-weight: 600;
                    color: var(--color-arctic-blue);
                    transition: gap 0.3s ease;
                }

                .service-card:hover .service-link {
                    gap: 10px;
                }

                /* CTA */
                .cta-section {
                    background: var(--gradient-primary);
                    padding: var(--spacing-20) 0;
                    text-align: center;
                }

                .cta-inner {
                    position: relative;
                    z-index: 1;
                }

                .cta-inner h2 {
                    color: white;
                    font-size: var(--font-size-h3);
                    margin-bottom: var(--spacing-4);
                }

                .cta-inner p {
                    color: rgba(255,255,255,0.85);
                    font-size: var(--font-size-lg);
                    margin-bottom: var(--spacing-8);
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: var(--spacing-4);
                    }

                    .hizmetler-hero {
                        padding: 110px 0 48px;
                    }

                    .hizmetler-hero h1 {
                        font-size: 1.75rem;
                        line-height: 1.25;
                    }

                    .hizmetler-hero p {
                        font-size: 0.95rem;
                    }

                    .filter-container {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        padding-bottom: 4px;
                    }

                    .filter-container::-webkit-scrollbar {
                        display: none;
                    }

                    .filter-buttons {
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        gap: 8px;
                        padding: 0 var(--spacing-4);
                    }

                    .filter-btn {
                        white-space: nowrap;
                        padding: 8px 16px;
                        font-size: 0.82rem;
                        flex-shrink: 0;
                    }

                    .service-card-body {
                        padding: var(--spacing-4) var(--spacing-5);
                    }

                    .service-card h3 {
                        font-size: 1rem;
                    }

                    .service-card p {
                        font-size: 0.85rem;
                        line-height: 1.55;
                    }

                    .service-card-image img {
                        height: 160px !important;
                    }

                    .cta-section {
                        padding: var(--spacing-12) 0;
                    }

                    .cta-inner h2 {
                        font-size: 1.5rem;
                    }

                    .cta-inner p {
                        font-size: 0.95rem;
                    }

                    .section-content {
                        padding: var(--spacing-12) 0;
                    }
                }

                @media (max-width: 480px) {
                    .hizmetler-hero {
                        padding: 100px 0 40px;
                    }

                    .hizmetler-hero h1 {
                        font-size: 1.5rem;
                    }

                    .service-card-image img {
                        height: 140px !important;
                    }

                    .service-card-body {
                        padding: var(--spacing-4);
                    }

                    .service-icon {
                        width: 44px;
                        height: 44px;
                        border-radius: 12px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}
