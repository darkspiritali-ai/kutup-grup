

import Image from '@/components/ui/Image';
import Link from '@/components/ui/Link';
import Newsletter from '../features/Newsletter';
import CookieConsent from '../features/CookieConsent';
import WhatsAppButton from '../features/WhatsAppButton';
import ScrollToTop from '../features/ScrollToTop';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    {/* Newsletter Container */}
                    <div className="newsletter-wrapper">
                        <Newsletter />
                    </div>

                    <div className="footer-grid">
                        {/* Logo ve Açıklama */}
                        <div className="footer-col brand-col">
                            <div className="logo-container">
                                <Image
                                    src="/logo/logo-white.png"
                                    alt="Kutup Grup"
                                    width={110}
                                    height={53}
                                    className="footer-logo"
                                />
                            </div>
                            <p className="footer-desc">
                                Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz.
                            </p>
                            <div className="social-links">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </Link>
                                <Link href="https://www.instagram.com/kutup_endustriyel_dagcilik" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </Link>
                                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Hizmetler */}
                        <div className="footer-col links-col services-col">
                            <h4>Hizmetlerimiz</h4>
                            <ul className="services-links-grid">
                                <li>
                                    <Link href="/hizmetler/dis-cephe-dekoratif-aydinlatma" className="sliding-link">
                                        <span className="bullet"></span>Dış Cephe Aydınlatma
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/tersane-ve-offshore-hizmetleri" className="sliding-link">
                                        <span className="bullet"></span>Tersane & Offshore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri" className="sliding-link">
                                        <span className="bullet"></span>Dış Cephe Temizliği
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/guvenlik-agi-kurulumu" className="sliding-link">
                                        <span className="bullet"></span>Güvenlik Ağı Kurulumu
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/yatay-ve-dusey-yasam-hatti" className="sliding-link">
                                        <span className="bullet"></span>Yaşam Hattı Sistemleri
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/jeoteknik-uygulamalar" className="sliding-link">
                                        <span className="bullet"></span>Jeoteknik Çözümler
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/yamac-yuzeyi-temizleme" className="sliding-link">
                                        <span className="bullet"></span>Yamaç Temizleme
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/sev-ortuleme" className="sliding-link">
                                        <span className="bullet"></span>Şev Örtüleme
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/hassas-endustriyel-alan-korumasi" className="sliding-link">
                                        <span className="bullet"></span>Hassas Alan Koruması
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/kaya-bariyeri" className="sliding-link">
                                        <span className="bullet"></span>Kaya Bariyeri
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/deflektör-tip-ortuleme" className="sliding-link">
                                        <span className="bullet"></span>Deflektör Örtüleme
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/moloz-bariyer" className="sliding-link">
                                        <span className="bullet"></span>Moloz Bariyeri
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/ormanda-iple-erisim-hizmetleri" className="sliding-link">
                                        <span className="bullet"></span>Ormanda İple Erişim
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/stand-by-rescue-hizmeti" className="sliding-link">
                                        <span className="bullet"></span>Stand-by & Rescue
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/ruzgar-enerji-santralleri" className="sliding-link">
                                        <span className="bullet"></span>RES Bakım Onarım
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/gabion-duvar" className="sliding-link">
                                        <span className="bullet"></span>Gabion Duvar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/sahne-isleri-rigging" className="sliding-link">
                                        <span className="bullet"></span>Rigging & Sahne
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/sprat-egitimi" className="sliding-link">
                                        <span className="bullet"></span>SPRAT Eğitimi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/irata-egitimi" className="sliding-link">
                                        <span className="bullet"></span>IRATA Eğitimi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hizmetler/kar-ve-cig-kontrolu" className="sliding-link">
                                        <span className="bullet"></span>Kar & Çığ Kontrolü
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Kurumsal */}
                        <div className="footer-col links-col">
                            <h4>Kurumsal</h4>
                            <ul>
                                <li>
                                    <Link href="/hakkimizda" className="sliding-link">
                                        <span className="bullet"></span>Hakkımızda
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/referanslar" className="sliding-link">
                                        <span className="bullet"></span>Referanslar
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/iletisim" className="sliding-link">
                                        <span className="bullet"></span>İletişim
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sss" className="sliding-link">
                                        <span className="bullet"></span>Sıkça Sorulan Sorular
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* İletişim */}
                        <div className="footer-col contact-col">
                            <h4>İletişim</h4>
                            <ul className="contact-info">
                                <li>
                                    <a href="mailto:info@kutupgrup.com" className="contact-item">
                                        <div className="icon-wrapper">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                                        </div>
                                        <span>info@kutupgrup.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+905335176609" className="contact-item">
                                        <div className="icon-wrapper">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 3.09 5.22 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 11.5a16 16 0 0 0 6.41 6.41l2.33-2.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.03z" /></svg>
                                        </div>
                                        <span>+90 (533) 517 66 09</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="contact-item no-click">
                                        <div className="icon-wrapper">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <span>İstanbul, Türkiye</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-flex">
                            <p className="copyright">&copy; {new Date().getFullYear()} Kutup Grup. Tüm hakları saklıdır.</p>
                            <div className="bottom-links">
                                <Link href="/gizlilik-politikasi" className="bottom-link">Gizlilik Politikası</Link>
                                <span className="separator">•</span>
                                <Link href="/cerez-politikasi" className="bottom-link">Çerez Politikası</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
        .footer {
          background: #030712;
          background-image: 
            radial-gradient(circle at 100% 0%, rgba(62, 146, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(165, 216, 221, 0.1) 0%, transparent 40%),
            linear-gradient(rgba(3, 7, 18, 0.6) 0%, #030712 100%),
            radial-gradient(circle, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 24px 24px;
          color: var(--color-polar-white);
          padding: var(--spacing-16) 0 var(--spacing-8);
          position: relative;
          z-index: 5;
          overflow: visible;
          border-top: 1px solid rgba(165, 216, 221, 0.15);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(62, 146, 204, 0.5), transparent);
          z-index: 10;
        }
        
        .newsletter-wrapper {
          position: relative;
          margin-top: 0;
          margin-bottom: var(--spacing-16);
          z-index: 12;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.6fr 0.7fr 1fr;
          gap: var(--spacing-10);
          margin-bottom: var(--spacing-16);
          position: relative;
          z-index: 2;
        }

        .services-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 20px;
        }

        @media (max-width: 480px) {
          .services-links-grid {
            grid-template-columns: 1fr;
            gap: 6px 0;
          }
        }
        
        .footer-col h4 {
          color: var(--color-polar-white);
          font-size: var(--font-size-base);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--spacing-6);
          position: relative;
          padding-bottom: var(--spacing-2);
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-arctic-blue), var(--color-ice-blue));
          border-radius: 2px;
        }
        
        .logo-container {
          margin-bottom: var(--spacing-4);
          opacity: 0.95;
        }

        .footer-logo {
          object-fit: contain;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
        }
        
        .footer-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: var(--line-height-relaxed);
          font-size: 0.95rem;
          margin-bottom: var(--spacing-6);
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .social-btn:hover {
          color: var(--color-polar-white);
          background: linear-gradient(135deg, var(--color-arctic-blue) 0%, var(--color-deep-navy) 100%);
          border-color: rgba(62, 146, 204, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(62, 146, 204, 0.3);
        }
        
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-col li {
          margin-bottom: var(--spacing-4);
        }
        
        :global(.sliding-link) {
          color: rgba(255, 255, 255, 0.7) !important;
          display: inline-flex;
          align-items: center;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .bullet {
          width: 0;
          height: 1.5px;
          background: var(--color-ice-blue);
          margin-right: 0;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          opacity: 0;
        }

        :global(.sliding-link:hover) {
          color: var(--color-ice-blue) !important;
          transform: translateX(6px);
        }

        :global(.sliding-link:hover) .bullet {
          width: 8px;
          margin-right: 8px;
          opacity: 1;
        }
        
        .contact-info li {
          margin-bottom: var(--spacing-4);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-item.no-click {
          cursor: default;
        }

        .icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(62, 146, 204, 0.1);
          border: 1px solid rgba(62, 146, 204, 0.15);
          color: var(--color-ice-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        a.contact-item:hover {
          color: var(--color-ice-blue);
        }

        a.contact-item:hover .icon-wrapper {
          background: rgba(62, 146, 204, 0.25);
          border-color: rgba(62, 146, 204, 0.4);
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(62, 146, 204, 0.15);
        }
        
        .footer-bottom {
          padding-top: var(--spacing-8);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 2;
        }

        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .footer-bottom p.copyright {
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          font-size: 0.9rem;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .bottom-link:hover {
          color: var(--color-ice-blue);
          text-decoration: underline;
        }

        .separator {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
        }
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 0 0 var(--spacing-6);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-10);
            margin-bottom: var(--spacing-10);
          }

          .footer-bottom-flex {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-3);
          }
        }
      `}</style>
            </footer>

            <CookieConsent />
            <WhatsAppButton />
            <ScrollToTop />
        </>
    );
}
