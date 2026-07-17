

import { useState, useEffect, useRef } from 'react';
import Image from '@/components/ui/Image';
import Link from '@/components/ui/Link';
import { useLocation } from 'react-router-dom';
import './header.css';

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
  // { title: 'Referanslar', href: '/referanslar' },
  { title: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const megaRef = useRef<HTMLLIElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();

  const toggleMobileCategory = (title: string) => {
    setActiveMobileCategory(activeMobileCategory === title ? null : title);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMegaOpen(false);
    setActiveMobileCategory(null);
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
            <Image src="/logo/logo.png" alt="Kutup Grup" width={125} height={60} priority />
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
                        <h4 className="mega-category-title">
                          <span className="mega-icon-wrapper" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                            {cat.icon}
                          </span>
                          <span className="mega-title-text" style={{ color: cat.color }}>{cat.title}</span>
                        </h4>
                        <ul className="mega-list">
                          {cat.services.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className={`mega-link ${isActive(s.href) ? 'mega-link-active' : ''}`}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cat.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mega-arrow">
                                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                                <span className="mega-link-text">{s.title}</span>
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
            {/* <li><Link href="/referanslar" className={isActive('/referanslar') ? 'active' : ''}>Referanslar</Link></li> */}
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

      {/* ===== ULTRA-PREMIUM DARK MOBILE MENU ===== */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Header */}
        <div className="mobile-drawer-header">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mobile-logo">
            <Image src="/logo/logo.png" alt="Kutup Grup" width={100} height={48} style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
          <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Menüyü kapat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Body */}
        <div className="mobile-drawer-scroll">
          <nav className="mobile-drawer-nav">
            
            {/* ANASAYFA */}
            <Link href="/" className={`drawer-main-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Anasayfa
            </Link>

            {/* HİZMETLERİMİZ (Accordion) */}
            <div className="drawer-accordion-group">
              <button 
                className={`drawer-main-link drawer-accordion-btn ${servicesOpen ? 'open' : ''} ${isActive('/hizmetler') ? 'active' : ''}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Hizmetlerimiz</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drawer-chevron">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              
              <div className={`drawer-accordion-content ${servicesOpen ? 'expanded' : ''}`}>
                {MEGA_CATEGORIES.map((cat) => {
                  const isCatOpen = activeMobileCategory === cat.title;
                  return (
                    <div key={cat.title} className="drawer-sub-group">
                      <button 
                        className={`drawer-sub-btn ${isCatOpen ? 'open' : ''}`}
                        onClick={() => toggleMobileCategory(cat.title)}
                      >
                        <span style={{ color: isCatOpen ? cat.color : 'inherit' }}>{cat.title}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drawer-sub-chevron">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div className={`drawer-sub-links-container ${isCatOpen ? 'expanded' : ''}`}>
                        <div className="drawer-sub-links">
                          {cat.services.map((s) => (
                            <Link 
                              key={s.href} 
                              href={s.href} 
                              className={`drawer-sub-link ${isActive(s.href) ? 'active' : ''}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link href="/hizmetler" className="drawer-all-services" onClick={() => setMobileMenuOpen(false)}>
                  Tüm Hizmetleri Gör ➔
                </Link>
              </div>
            </div>

            {/* OTHER LINKS */}
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`drawer-main-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="mobile-drawer-footer">
          <Link href="/iletisim" className="drawer-cta" onClick={() => setMobileMenuOpen(false)}>
            Projeye Başlayalım
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <div className="drawer-contact">
            <a href="mailto:info@kutupgrup.com">info@kutupgrup.com</a>
            <a href="tel:+905335176609">+90 (533) 517 66 09</a>
          </div>
        </div>
      </div>

    </header>
  );
}
