'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ===== Mega Menu Service Data ===== */
const MEGA_CATEGORIES = [
  {
    title: 'Endüstriyel Dağcılık',
    color: '#3E92CC',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3E92CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 22h20L12 2z" /><path d="M12 13v4" /><circle cx="12" cy="9" r="1" />
      </svg>
    ),
    services: [
      { title: 'Dış Cephe Dekoratif Aydınlatma', href: '/hizmetler/dis-cephe-dekoratif-aydinlatma' },
      { title: 'Tersane ve Offshore Hizmetleri', href: '/hizmetler/tersane-ve-offshore-hizmetleri' },
      { title: 'İç ve Dış Cephe Temizlik', href: '/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri' },
      { title: 'Güvenlik Ağı Kurulumu', href: '/hizmetler/guvenlik-agi-kurulumu' },
      { title: 'Yatay & Düşey Yaşam Hattı', href: '/hizmetler/yatay-ve-dusey-yasam-hatti' },
      { title: 'Rüzgar Enerji Santralleri', href: '/hizmetler/ruzgar-enerji-santralleri' },
      { title: 'Hassas Endüstriyel Alan Koruması', href: '/hizmetler/hassas-endustriyel-alan-korumasi' },
      { title: 'Ormanda İple Erişim', href: '/hizmetler/ormanda-iple-erisim-hizmetleri' },
    ],
  },
  {
    title: 'Jeoteknik Çözümler',
    color: '#10B981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22L12 2l10 20" /><path d="M6 16h12" />
      </svg>
    ),
    services: [
      { title: 'Yamaç Yüzeyi Temizleme', href: '/hizmetler/yamac-yuzeyi-temizleme' },
      { title: 'Şev Örtüleme Sistemleri', href: '/hizmetler/sev-ortuleme' },
      { title: 'Kaya Bariyeri Kurulumu', href: '/hizmetler/kaya-bariyeri' },
      { title: 'Deflektör Tip Örtüleme', href: '/hizmetler/deflektör-tip-ortuleme' },
      { title: 'Moloz Bariyer Sistemleri', href: '/hizmetler/moloz-bariyer' },
      { title: 'Gabion Duvar', href: '/hizmetler/gabion-duvar' },
      { title: 'Kar ve Çığ Kontrolü', href: '/hizmetler/kar-ve-cig-kontrolu' },
    ],
  },
  {
    title: 'Diğer Hizmetler',
    color: '#8B5CF6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    services: [
      { title: 'Stand-by Rescue Hizmeti', href: '/hizmetler/stand-by-rescue-hizmeti' },
      { title: 'Sahne İşleri & Rigging', href: '/hizmetler/sahne-isleri-rigging' },
      { title: 'SPRAT Eğitimi', href: '/hizmetler/sprat-egitimi' },
      { title: 'IRATA Eğitimi', href: '/hizmetler/irata-egitimi' },
    ],
  },
];

const NAV_LINKS = [
  { title: 'Anasayfa', href: '/' },
  { title: 'Hakkımızda', href: '/hakkimizda' },
  { title: 'Referanslar', href: '/referanslar' },
  { title: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <Image src="/logo/logo.png" alt="Kutup Grup" width={180} height={60} priority />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Anasayfa</Link></li>
            <li
              ref={megaRef}
              className="nav-mega-trigger"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <span className={`nav-mega-label ${isActive('/hizmetler') ? 'active' : ''}`}>
                Hizmetlerimiz
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`mega-chevron ${megaOpen ? 'open' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>

              {/* === MEGA MENU === */}
              <div className={`mega-menu ${megaOpen ? 'active' : ''}`}>
                <div className="mega-inner">
                  <div className="mega-columns">
                    {MEGA_CATEGORIES.map((cat) => (
                      <div key={cat.title} className="mega-column">
                        <h4 className="mega-category-title" style={{ color: cat.color }}>
                          <span className="mega-dot" style={{ background: cat.color }} />
                          {cat.title}
                        </h4>
                        <ul className="mega-list">
                          {cat.services.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className={`mega-link ${isActive(s.href) ? 'mega-link-active' : ''}`}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cat.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mega-arrow">
                                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* CTA Panel */}
                  <div className="mega-cta-panel">
                    <div className="mega-cta-content">
                      <div className="mega-cta-text">
                        <p className="mega-cta-eyebrow">Tüm Hizmetler</p>
                        <h5 className="mega-cta-title">20+ Hizmet Alanında Uzman Çözümler</h5>
                        <p className="mega-cta-desc">Endüstriyel dağcılık ve jeoteknik alanında profesyonel çözümler.</p>
                      </div>
                      <Link href="/hizmetler" className="mega-cta-btn">
                        Tüm Hizmetleri Gör
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/hakkimizda" className={isActive('/hakkimizda') ? 'active' : ''}>Hakkımızda</Link></li>
            <li><Link href="/referanslar" className={isActive('/referanslar') ? 'active' : ''}>Referanslar</Link></li>
            <li><Link href="/iletisim" className={isActive('/iletisim') ? 'active' : ''}>İletişim</Link></li>
          </ul>

          <Link href="/iletisim" className="btn btn-primary nav-cta desktop-only">
            Teklif Alın
          </Link>

          {/* Modern Hamburger */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-inner">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* ===== PREMIUM MOBILE MENU ===== */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Header with logo + close */}
        <div className="mobile-menu-header">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo/logo.png" alt="Kutup Grup" width={130} height={44} />
          </Link>
          <button className="mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Menüyü kapat">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav body */}
        <div className="mobile-nav-scroll">
          <nav className="mobile-nav">
            {/* Primary links */}
            <Link href="/" className={`mobile-nav-link ${isActive('/') ? 'mobile-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              <div className="mobile-link-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Anasayfa</span>
              </div>
              {isActive('/') && <span className="mobile-active-dot" />}
            </Link>

            {/* Services Accordion */}
            <button
              className={`mobile-nav-link mobile-dropdown-btn ${servicesOpen ? 'open' : ''} ${isActive('/hizmetler') ? 'mobile-active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <div className="mobile-link-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
                <span>Hizmetlerimiz</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-chevron">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Mobile Services Dropdown */}
            <div className={`mobile-dropdown ${servicesOpen ? 'active' : ''}`}>
              {MEGA_CATEGORIES.map((cat) => (
                <div key={cat.title} className="mobile-mega-group">
                  <div className="mobile-mega-header" style={{ borderLeftColor: cat.color }}>
                    {cat.icon}
                    <span style={{ color: cat.color }}>{cat.title}</span>
                  </div>
                  <div className="mobile-mega-links">
                    {cat.services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={isActive(s.href) ? 'mobile-service-active' : ''}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="mobile-service-dot" style={{ background: cat.color }} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link href="/hizmetler" className="mobile-all-services" onClick={() => setMobileMenuOpen(false)}>
                <span>Tüm Hizmetleri Gör</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${isActive(link.href) ? 'mobile-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-link-inner">
                  {link.href === '/hakkimizda' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  {link.href === '/referanslar' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                  {link.href === '/iletisim' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  )}
                  <span>{link.title}</span>
                </div>
                {isActive(link.href) && <span className="mobile-active-dot" />}
              </Link>
            ))}
          </nav>
        </div>

        {/* Premium Footer */}
        <div className="mobile-menu-footer">
          <Link href="/iletisim" className="mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.88 19.88 0 013.09 5.22 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.41 6.41l2.33-2.25a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.03z" />
            </svg>
            Ücretsiz Teklif Alın
          </Link>
          <div className="mobile-contact-row">
            <a href="tel:+905320000000" className="mobile-contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.88 19.88 0 013.09 5.22 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.41 6.41l2.33-2.25a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.03z" />
              </svg>
              <span>+90 (532) 000 00 00</span>
            </a>
            <a href="mailto:info@kutupgrup.com" className="mobile-contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
              </svg>
              <span>info@kutupgrup.com</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== HEADER ===== */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          z-index: var(--z-fixed);
          padding: var(--spacing-4) 0;
          transition: all 0.3s ease;
        }
        .header.scrolled {
          border-bottom-color: var(--border-default);
          box-shadow: 0 1px 12px rgba(10, 36, 99, 0.06);
        }
        
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-8);
        }
        
        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        
        /* ===== DESKTOP NAV ===== */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-menu > li > a, .nav-mega-label {
          color: var(--text-primary);
          font-weight: 600;
          font-family: var(--font-heading);
          transition: color 0.2s ease;
          cursor: pointer;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 4px;
        }
        
        .nav-menu > li > a::after, .nav-mega-label::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-arctic-blue);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .nav-menu > li > a:hover, .nav-mega-label:hover {
          color: var(--color-arctic-blue);
        }
        .nav-menu > li > a:hover::after, .nav-mega-label:hover::after {
          transform: scaleX(1);
        }
        .nav-menu > li > a.active, .nav-mega-label.active {
          color: var(--color-arctic-blue);
        }
        .nav-menu > li > a.active::after, .nav-mega-label.active::after {
          transform: scaleX(1);
        }
        
        .nav-mega-label {
          display: inline-flex;
          align-items: center;
          user-select: none;
        }
        
        .mega-chevron {
          margin-left: 4px;
          transition: transform 0.3s ease;
        }
        .mega-chevron.open {
          transform: rotate(180deg);
        }
        
        .nav-cta { margin-left: var(--spacing-4); }

        /* ===== DESKTOP MEGA MENU ===== */
        .nav-mega-trigger {
          position: static;
        }

        .mega-menu {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: white;
          border-top: 2px solid var(--color-arctic-blue);
          box-shadow: 0 25px 60px rgba(10, 36, 99, 0.15), 0 0 0 1px rgba(10, 36, 99, 0.04);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
        }
        .mega-menu.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .mega-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-8) var(--spacing-6);
        }
        .mega-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-8);
          margin-bottom: var(--spacing-6);
        }
        .mega-column {
          padding-right: var(--spacing-4);
        }
        .mega-category-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--spacing-4);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
        }
        .mega-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .mega-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mega-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mega-link:hover,
        .mega-link-active {
          background: var(--bg-secondary);
          color: var(--color-deep-navy);
          padding-left: 14px;
        }
        .mega-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .mega-link:hover .mega-arrow,
        .mega-link-active .mega-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Mega CTA Panel */
        .mega-cta-panel {
          background: linear-gradient(135deg, #0A2463 0%, #1e3a8a 50%, #3E92CC 100%);
          border-radius: var(--radius-lg);
          padding: var(--spacing-5) var(--spacing-8);
          position: relative;
          overflow: hidden;
        }
        .mega-cta-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .mega-cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
        }
        .mega-cta-text {
          flex: 1;
        }
        .mega-cta-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6);
          margin: 0 0 4px 0;
        }
        .mega-cta-title {
          font-size: 1.05rem;
          color: white;
          margin: 0 0 4px 0;
          font-family: var(--font-heading);
        }
        .mega-cta-desc {
          color: rgba(255,255,255,0.65);
          font-size: 0.82rem;
          margin: 0;
          line-height: 1.5;
        }
        .mega-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          background: white;
          color: var(--color-deep-navy);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.85rem;
          font-family: var(--font-heading);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .mega-cta-btn:hover {
          background: var(--color-ice-blue);
          transform: translateX(4px);
        }

        /* ===== MODERN HAMBURGER ===== */
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          padding: 0;
          background: transparent;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: calc(var(--z-modal) + 10);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }
        .hamburger::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: var(--bg-secondary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hamburger:hover::before {
          opacity: 1;
        }
        .hamburger:active {
          transform: scale(0.92);
        }
        .hamburger.active::before {
          background: rgba(62, 146, 204, 0.1);
          opacity: 1;
        }

        .hamburger-inner {
          position: relative;
          width: 22px;
          height: 16px;
          z-index: 1;
        }

        .hamburger-line {
          display: block;
          position: absolute;
          left: 0;
          height: 2.5px;
          background: var(--color-deep-navy);
          border-radius: 3px;
          transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .line-1 {
          top: 0;
          width: 100%;
        }
        .line-2 {
          top: 50%;
          transform: translateY(-50%);
          width: 65%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line-3 {
          bottom: 0;
          width: 40%;
          transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
          transition-delay: 0.05s;
        }

        .hamburger:hover .line-2 {
          width: 100%;
        }
        .hamburger:hover .line-3 {
          width: 80%;
        }

        /* Active → X morphing */
        .hamburger.active .hamburger-line {
          background: var(--color-arctic-blue);
        }
        .hamburger.active .line-1 {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 100%;
        }
        .hamburger.active .line-2 {
          opacity: 0;
          transform: translateX(10px);
          width: 0;
        }
        .hamburger.active .line-3 {
          bottom: auto;
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
          width: 100%;
        }

        /* ===== MOBILE OVERLAY ===== */
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(10, 36, 99, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .mobile-overlay.active {
          display: block;
          opacity: 1;
          pointer-events: auto;
        }

        /* ===== PREMIUM MOBILE MENU ===== */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100dvh;
          height: 100vh;
          background: #ffffff;
          z-index: 9999;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
          box-shadow: -8px 0 40px rgba(10, 36, 99, 0.2);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(10, 36, 99, 0.08);
          background: white;
        }

        .mobile-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--bg-secondary);
          border: none;
          border-radius: 12px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mobile-close:hover {
          background: rgba(10, 36, 99, 0.08);
          transform: rotate(90deg);
        }

        /* Scrollable nav */
        .mobile-nav-scroll {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .mobile-nav {
          padding: 12px 0;
        }

        /* Nav links */
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 20px;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-heading);
          transition: all 0.2s ease;
          position: relative;
        }
        .mobile-nav-link:hover {
          background: rgba(62, 146, 204, 0.04);
        }
        .mobile-nav-link.mobile-active {
          color: var(--color-arctic-blue);
          background: rgba(62, 146, 204, 0.06);
        }

        .mobile-link-inner {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mobile-link-inner svg {
          opacity: 0.5;
        }
        .mobile-active .mobile-link-inner svg {
          opacity: 1;
          color: var(--color-arctic-blue);
          stroke: var(--color-arctic-blue);
        }

        .mobile-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-arctic-blue);
          flex-shrink: 0;
        }

        /* Chevron in service accordion */
        .mobile-chevron {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.4;
          flex-shrink: 0;
        }
        .mobile-dropdown-btn.open .mobile-chevron {
          transform: rotate(180deg);
          opacity: 1;
          color: var(--color-arctic-blue);
          stroke: var(--color-arctic-blue);
        }

        /* Services dropdown */
        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-dropdown.active {
          max-height: 1400px;
        }

        .mobile-mega-group {
          padding: 8px 0 4px;
        }

        .mobile-mega-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 20px 6px 24px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-left: 3px solid;
          margin-left: 20px;
          margin-right: 20px;
        }

        .mobile-mega-links {
          display: flex;
          flex-direction: column;
        }

        .mobile-mega-links a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px 10px 48px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }
        .mobile-mega-links a:hover {
          color: var(--color-deep-navy);
          background: rgba(62, 146, 204, 0.04);
          padding-left: 52px;
        }
        .mobile-mega-links a.mobile-service-active {
          color: var(--color-arctic-blue);
          font-weight: 600;
          background: rgba(62, 146, 204, 0.06);
        }

        .mobile-service-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.5;
        }
        .mobile-mega-links a:hover .mobile-service-dot,
        .mobile-mega-links a.mobile-service-active .mobile-service-dot {
          opacity: 1;
        }

        .mobile-all-services {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px !important;
          margin: 4px 20px 0;
          background: linear-gradient(135deg, rgba(62, 146, 204, 0.06) 0%, rgba(62, 146, 204, 0.02) 100%) !important;
          border-radius: 12px;
          color: var(--color-arctic-blue) !important;
          font-weight: 700 !important;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-all-services:hover {
          background: rgba(62, 146, 204, 0.1) !important;
        }

        /* ===== PREMIUM MOBILE FOOTER ===== */
        .mobile-menu-footer {
          padding: 16px 20px;
          border-top: 1px solid rgba(10, 36, 99, 0.08);
          background: white;
          flex-shrink: 0;
        }

        .mobile-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-arctic-blue) 100%);
          color: white;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.95rem;
          font-family: var(--font-heading);
          text-decoration: none;
          text-align: center;
          margin-bottom: 12px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(62, 146, 204, 0.3);
        }
        .mobile-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(62, 146, 204, 0.4);
        }

        .mobile-contact-row {
          display: flex;
          gap: 8px;
        }

        .mobile-contact-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px;
          background: var(--bg-secondary);
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .mobile-contact-item:hover {
          background: rgba(62, 146, 204, 0.06);
          color: var(--color-arctic-blue);
        }
        .mobile-contact-item svg {
          flex-shrink: 0;
          opacity: 0.6;
        }
        .mobile-contact-item span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .desktop-only { display: inline-flex; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .nav-menu, .desktop-only { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            display: flex;
          }
          .mobile-menu.active {
            transform: translateX(0);
          }
        }

        @media (max-width: 480px) {
          .logo img {
            width: 140px;
            height: auto;
          }
        }
      `}</style>
    </header>
  );
}
