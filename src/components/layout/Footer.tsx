'use client';

import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '../features/Newsletter';
import CookieConsent from '../features/CookieConsent';
import WhatsAppButton from '../features/WhatsAppButton';
import ScrollToTop from '../features/ScrollToTop';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        {/* Logo ve Açıklama */}
                        <div className="footer-col">
                            <Image
                                src="/logo/logo-white.png"
                                alt="Kutup Grup"
                                width={160}
                                height={53}
                            />
                            <p className="footer-desc">
                                Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz.
                            </p>
                        </div>

                        {/* Hizmetler */}
                        <div className="footer-col">
                            <h4>Hizmetlerimiz</h4>
                            <ul>
                                <li><Link href="/hizmetler/dis-cephe-dekoratif-aydinlatma">Dış Cephe Aydınlatma</Link></li>
                                <li><Link href="/hizmetler/tersane-ve-offshore-hizmetleri">Tersane Hizmetleri</Link></li>
                                <li><Link href="/hizmetler/guvenlik-agi-kurulumu">Güvenlik Ağı</Link></li>
                                <li><Link href="/hizmetler/ruzgar-enerji-santralleri">RES Hizmetleri</Link></li>
                            </ul>
                        </div>

                        {/* Kurumsal */}
                        <div className="footer-col">
                            <h4>Kurumsal</h4>
                            <ul>
                                <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                                <li><Link href="/referanslar">Referanslar</Link></li>
                                <li><Link href="/iletisim">İletişim</Link></li>
                                <li><Link href="/sss">Sıkça Sorulan Sorular</Link></li>
                                <li><Link href="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
                                <li><Link href="/cerez-politikasi">Çerez Politikası</Link></li>
                            </ul>
                        </div>

                        {/* İletişim */}
                        <div className="footer-col">
                            <h4>İletişim</h4>
                            <ul className="contact-info">
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                                    info@kutupgrup.com
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.88 19.88 0 013.09 5.22 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.41 6.41l2.33-2.25a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.03z" /></svg>
                                    +90 (532) 000 00 00
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    İstanbul, Türkiye
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="newsletter-section">
                        <Newsletter />
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Kutup Grup. Tüm hakları saklıdır.</p>
                    </div>
                </div>

                <style jsx>{`
        .footer {
          background: var(--gradient-dark);
          color: var(--color-polar-white);
          padding: var(--spacing-16) 0 var(--spacing-8);
          margin-top: var(--spacing-24);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-10);
          margin-bottom: var(--spacing-12);
        }
        
        .footer-col h4 {
          color: var(--color-ice-blue);
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-4);
        }
        
        .footer-desc {
          color: rgba(255, 255, 255, 0.8);
          margin-top: var(--spacing-4);
          line-height: var(--line-height-relaxed);
        }
        
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-col li {
          margin-bottom: var(--spacing-3);
        }
        
        .footer-col a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s ease;
        }
        
        .footer-col a:hover {
          color: var(--color-ice-blue);
        }
        
        .contact-info li {
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: var(--spacing-8);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
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
