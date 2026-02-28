'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

/* SVG Icon Components */
const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);
const BuildingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" /><path d="M9 20v-6h6v6" />
    </svg>
);
const UsersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
);
const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);
const BoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);
const LightbulbIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" /><path d="M10 22h4" />
    </svg>
);
const HandshakeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 17a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
        <path d="M20 8.35V4a2 2 0 00-2-2h-4l-4 4h-2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-5.35" />
    </svg>
);
const GlobeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
);
const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
);
const TargetIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
);
const RocketIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const stats = [
    { icon: <CalendarIcon />, label: 'Deneyim', value: '15+ Yıl', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' },
    { icon: <BuildingIcon />, label: 'Tamamlanan Proje', value: '500+', color: '#3E92CC', bg: 'rgba(62, 146, 204, 0.1)' },
    { icon: <UsersIcon />, label: 'Mutlu Müşteri', value: '200+', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
    { icon: <StarIcon />, label: 'Başarı Oranı', value: '%100', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' },
];

const values = [
    { icon: <ShieldIcon />, title: 'Güvenlik', description: 'İş güvenliği ve personel sağlığı bizim için en öncelikli konudur. IRATA ve SPRAT standartlarına uygun çalışmalarla sıfır kaza hedefleriz.', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.08)' },
    { icon: <BoltIcon />, title: 'Kalite', description: 'ISO sertifikalı süreçler, CE onaylı ekipmanlar ve deneyimli ekibimizle en yüksek kalite standartlarını garanti ediyoruz.', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.08)' },
    { icon: <LightbulbIcon />, title: 'İnovasyon', description: 'Sektördeki en son teknolojileri takip eder, yenilikçi çözümler geliştirerek müşterilerimize değer katarız.', color: '#3E92CC', bg: 'rgba(62, 146, 204, 0.08)' },
    { icon: <HandshakeIcon />, title: 'Müşteri Memnuniyeti', description: 'Her projede müşteri beklentilerini aşmayı hedefleriz. Şeffaf iletişim ve zamanında teslimat prensiplerimizdir.', color: '#10B981', bg: 'rgba(16, 185, 129, 0.08)' },
    { icon: <GlobeIcon />, title: 'Çevre Bilinci', description: 'Doğaya saygılı çalışma prensipleriyle çevresel etkiyi minimuma indirerek sürdürülebilir projeler gerçekleştiririz.', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.08)' },
    { icon: <BookIcon />, title: 'Sürekli Gelişim', description: 'Ekibimize düzenli eğitimler vererek sektördeki gelişmeleri takip eder, kendimizi sürekli geliştiririz.', color: '#EC4899', bg: 'rgba(236, 72, 153, 0.08)' },
];

const certifications = [
    'IRATA Sertifikalı Teknisyenler',
    'SPRAT Eğitimli Personel',
    'ISO 9001 Kalite Yönetim Sistemi',
    'ISO 14001 Çevre Yönetim Sistemi',
    'ISO 45001 İş Sağlığı ve Güvenliği',
    'CE Sertifikalı Ekipmanlar',
];

export default function AboutPageClient() {
    return (
        <div>
            <Header />
            <main>
                {/* Hero */}
                <section className="about-hero">
                    <div className="hero-grid-bg" />
                    <div className="container">
                        <div className="hero-content">
                            <p className="hero-eyebrow">Hakkımızda</p>
                            <h1>Kutup Grup Hakkında</h1>
                            <p className="hero-subtitle">
                                Endüstriyel dağcılık ve jeoteknik çözümler alanında Türkiye&apos;nin önde gelen şirketi
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="stats-bar">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <ScrollReveal key={index} variant="fadeUp" delay={index * 100}>
                                    <div className="stat-item">
                                        <div className="stat-icon" style={{ background: stat.bg, color: stat.color }}>
                                            {stat.icon}
                                        </div>
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Story */}
                <section className="section dot-grid" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="story-layout">
                            <ScrollReveal variant="fadeLeft">
                                <div className="story-text">
                                    <p className="section-eyebrow">Hikayemiz</p>
                                    <h2 className="section-title">2008&apos;den Bugüne Güçlü Bir Yolculuk</h2>
                                    <p>
                                        <strong>Kutup Grup</strong>, 2008 yılında endüstriyel dağcılık ve iple erişim
                                        teknikleri alanında uzmanlaşmış bir ekip tarafından kuruldu. Kuruluşumuzdan bu
                                        yana, heyelan, kaya düşmesi ve yüksek yapı çözümleri konusunda Türkiye&apos;nin en
                                        güvenilir firmalarından biri haline geldik.
                                    </p>
                                    <p>
                                        İlk projelerimizde küçük ölçekli cephe temizleme işleriyle başlayan yolculuğumuz,
                                        bugün 500&apos;den fazla büyük ölçekli projeyi başarıyla tamamlamış, sektörün öncü
                                        firmalarından biri konumuna ulaşmıştır.
                                    </p>
                                    <p>
                                        Türkiye&apos;nin dört bir yanında, enerji santrallerinden köprü bakımlarına, tersane
                                        işlerinden yüksek bina aydınlatmalarına kadar geniş bir yelpazede hizmet sunuyoruz.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal variant="fadeRight">
                                <div className="story-visual">
                                    <div className="story-card">
                                        <div className="story-card-number">15+</div>
                                        <div className="story-card-text">Yıllık Sektör Deneyimi</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="section">
                    <div className="container">
                        <ScrollReveal>
                            <div className="section-header text-center">
                                <p className="section-eyebrow">Misyon & Vizyon</p>
                                <h2 className="section-title">Amacımız ve Hedefimiz</h2>
                            </div>
                        </ScrollReveal>
                        <div className="mv-grid">
                            <ScrollReveal variant="fadeLeft">
                                <div className="mv-card mission">
                                    <div className="mv-icon-wrapper">
                                        <TargetIcon />
                                    </div>
                                    <h3>Misyonumuz</h3>
                                    <p>
                                        Endüstriyel dağcılık ve jeoteknik uygulamalar alanında, uluslararası standartlara
                                        uygun, güvenli ve kaliteli hizmet sunarak müşterilerimizin ihtiyaçlarına en uygun
                                        çözümleri üretmek.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal variant="fadeRight">
                                <div className="mv-card vision">
                                    <div className="mv-icon-wrapper">
                                        <RocketIcon />
                                    </div>
                                    <h3>Vizyonumuz</h3>
                                    <p>
                                        Türkiye ve bölge ülkelerinde endüstriyel dağcılık ve jeoteknik çözümler alanında
                                        lider konumunu pekiştirerek, global standartlarda hizmet sunan bir organizasyon olmak.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section dot-grid" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <ScrollReveal>
                            <div className="section-header text-center">
                                <p className="section-eyebrow">Değerlerimiz</p>
                                <h2 className="section-title">Temel Değerlerimiz</h2>
                            </div>
                        </ScrollReveal>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <ScrollReveal key={index} variant="fadeUp" delay={index * 80}>
                                    <div className="value-card">
                                        <div className="value-icon" style={{ background: value.bg, color: value.color }}>
                                            {value.icon}
                                        </div>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="section">
                    <div className="container">
                        <ScrollReveal>
                            <div className="section-header text-center">
                                <p className="section-eyebrow">Sertifikalar</p>
                                <h2 className="section-title">Sertifikalar & Standartlar</h2>
                            </div>
                        </ScrollReveal>
                        <div className="cert-grid">
                            {certifications.map((cert, index) => (
                                <ScrollReveal key={index} variant="scaleIn" delay={index * 60}>
                                    <div className="cert-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10B981' }}>
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <span>{cert}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="container">
                        <ScrollReveal variant="scaleIn">
                            <div className="cta-inner">
                                <h2>Bizimle Çalışmaya Hazır Mısınız?</h2>
                                <p>Projeleriniz için profesyonel çözümler sunmaya hazırız.</p>
                                <div className="cta-buttons">
                                    <Link href="/iletisim" className="btn btn-cta">
                                        İletişime Geçin
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/referanslar" className="btn btn-secondary-light">
                                        Referanslarımız
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                /* Hero */
                .about-hero {
                    position: relative;
                    padding: 160px 0 80px;
                    background: linear-gradient(135deg, #0A2463 0%, #1e3a8a 60%, #3E92CC 100%);
                    overflow: hidden;
                    text-align: center;
                }
                .hero-grid-bg {
                    position: absolute; inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 28px 28px;
                }
                .hero-content { position: relative; z-index: 1; }
                .hero-eyebrow {
                    font-size: 0.85rem; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 0.15em; color: var(--color-ice-blue); margin-bottom: var(--spacing-3);
                }
                .about-hero h1 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem); color: white;
                    letter-spacing: -0.02em; margin-bottom: var(--spacing-4);
                }
                .hero-subtitle { font-size: var(--font-size-lg); color: rgba(255,255,255,0.75); max-width: 560px; margin: 0 auto; }

                /* Shared */
                .section-header { margin-bottom: var(--spacing-12); }
                .section-eyebrow {
                    font-size: var(--font-size-sm); font-weight: 700; text-transform: uppercase;
                    letter-spacing: 0.1em; color: var(--color-arctic-blue); margin-bottom: var(--spacing-2);
                }
                .section-title { font-size: var(--font-size-h2); color: var(--color-deep-navy); letter-spacing: -0.02em; }
                .text-center { text-align: center; }

                /* Stats Bar */
                .stats-bar { padding: var(--spacing-12) 0; background: white; border-bottom: 1px solid var(--border-default); }
                .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-6); }
                .stat-item { text-align: center; }
                .stat-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-3); }
                .stat-value { font-size: var(--font-size-h3); font-weight: 800; color: var(--color-deep-navy); font-family: var(--font-heading); }
                .stat-label { font-size: var(--font-size-sm); color: var(--text-muted); font-weight: 500; }

                /* Story */
                .story-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: var(--spacing-12); align-items: center; }
                .story-text h2 { margin-bottom: var(--spacing-6); }
                .story-text p { color: var(--text-secondary); line-height: var(--line-height-relaxed); }
                .story-visual { display: flex; justify-content: center; }
                .story-card {
                    background: var(--gradient-primary); border-radius: var(--radius-xl);
                    padding: var(--spacing-12) var(--spacing-8); text-align: center; color: white; width: 280px;
                }
                .story-card-number { font-size: 4rem; font-weight: 800; font-family: var(--font-heading); line-height: 1; margin-bottom: var(--spacing-2); }
                .story-card-text { font-size: var(--font-size-lg); opacity: 0.85; }

                /* Mission & Vision */
                .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-8); }
                .mv-card {
                    background: white; border-radius: var(--radius-lg); padding: var(--spacing-10);
                    border: 1px solid var(--border-default); transition: all 0.35s ease; position: relative; overflow: hidden;
                }
                .mv-card::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
                    background: var(--gradient-primary); transform: scaleX(0); transform-origin: left;
                    transition: transform 0.4s ease;
                }
                .mv-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,36,99,0.1); }
                .mv-card:hover::before { transform: scaleX(1); }
                .mv-icon-wrapper {
                    width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
                    margin-bottom: var(--spacing-5);
                }
                .mission .mv-icon-wrapper { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
                .vision .mv-icon-wrapper { background: rgba(139, 92, 246, 0.1); color: #8B5CF6; }
                .mv-card h3 { font-size: var(--font-size-h4); color: var(--color-deep-navy); margin-bottom: var(--spacing-4); }
                .mv-card p { color: var(--text-secondary); line-height: var(--line-height-relaxed); margin: 0; }

                /* Values */
                .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-6); }
                .value-card {
                    background: white; border-radius: var(--radius-lg); padding: var(--spacing-8) var(--spacing-6);
                    border: 1px solid var(--border-default); transition: all 0.35s ease; text-align: center;
                }
                .value-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(10,36,99,0.1); }
                .value-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-4); }
                .value-card h3 { font-size: var(--font-size-h5); color: var(--color-deep-navy); margin-bottom: var(--spacing-3); }
                .value-card p { color: var(--text-secondary); line-height: var(--line-height-relaxed); margin: 0; font-size: var(--font-size-sm); }

                /* Certifications */
                .cert-grid { display: flex; flex-wrap: wrap; gap: var(--spacing-4); justify-content: center; }
                .cert-item {
                    display: flex; align-items: center; gap: var(--spacing-2);
                    padding: var(--spacing-3) var(--spacing-5); background: white;
                    border: 1px solid var(--border-default); border-radius: var(--radius-full);
                    font-size: var(--font-size-sm); font-weight: 600; color: var(--color-deep-navy);
                    transition: all 0.3s ease;
                }
                .cert-item:hover { border-color: var(--color-arctic-blue); box-shadow: 0 4px 12px rgba(62,146,204,0.15); transform: translateY(-2px); }

                /* CTA */
                .cta-section { background: var(--gradient-primary); padding: var(--spacing-24) 0; text-align: center; position: relative; overflow: hidden; }
                .cta-inner { position: relative; z-index: 1; }
                .cta-inner h2 { color: white; font-size: var(--font-size-h2); margin-bottom: var(--spacing-4); }
                .cta-inner p { color: rgba(255,255,255,0.85); font-size: var(--font-size-lg); margin-bottom: var(--spacing-8); }
                .cta-buttons { display: flex; gap: var(--spacing-4); justify-content: center; flex-wrap: wrap; }
                .btn-secondary-light {
                    display: inline-flex; align-items: center; gap: var(--spacing-2);
                    background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5);
                    padding: var(--spacing-4) var(--spacing-8); border-radius: var(--radius-md);
                    font-weight: 600; font-family: var(--font-heading); text-decoration: none; transition: all 0.3s ease;
                }
                .btn-secondary-light:hover { background: rgba(255,255,255,0.15); border-color: white; color: white; }

                @media (max-width: 768px) {
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .story-layout { grid-template-columns: 1fr; }
                    .mv-grid { grid-template-columns: 1fr; }
                    .values-grid { grid-template-columns: 1fr; }
                    .about-hero { padding: 130px 0 60px; }
                    .cta-buttons { flex-direction: column; align-items: center; }
                }
            `}</style>
        </div>
    );
}
