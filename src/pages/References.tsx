

import Link from '@/components/ui/Link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ReferanslarPageClient() {
    return (
        <div className="maintenance-page">
            <Header />
            <main className="maintenance-main">
                <div className="maintenance-bg-grid" />
                <div className="maintenance-glow-1" />
                <div className="maintenance-glow-2" />
                
                <div className="maintenance-container">
                    <div className="maintenance-card">
                        <div className="maintenance-icon-wrapper">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        
                        <p className="maintenance-eyebrow">Yapım Aşamasında</p>
                        <h1 className="maintenance-title">Referanslarımız Yakında Burada</h1>
                        <p className="maintenance-description">
                            Kutup Grup olarak gerçekleştirdiğimiz 500+ endüstriyel dağcılık ve jeoteknik projelerimizin detaylı portföyü ve vaka analizleri çok yakında yayında olacaktır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.
                        </p>
                        
                        <div className="maintenance-buttons">
                            <Link href="/iletisim" className="btn btn-primary">
                                Bizimle İletişime Geçin
                            </Link>
                            <Link href="/" className="btn btn-secondary">
                                Anasayfaya Dön
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style jsx>{`
                .maintenance-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: #030712;
                    overflow: hidden;
                    position: relative;
                }
                
                .maintenance-main {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--spacing-16) 0;
                    margin-top: 80px;
                    position: relative;
                }
                
                .maintenance-bg-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                }
                
                .maintenance-glow-1 {
                    position: absolute;
                    top: 20%;
                    left: 10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(62, 146, 204, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                }
                
                .maintenance-glow-2 {
                    position: absolute;
                    bottom: 20%;
                    right: 10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                }
                
                .maintenance-container {
                    max-width: 700px;
                    width: 100%;
                    padding: 0 var(--spacing-6);
                    position: relative;
                    z-index: 2;
                }
                
                .maintenance-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: var(--spacing-10) var(--spacing-8);
                    text-align: center;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }
                
                .maintenance-icon-wrapper {
                    width: 90px;
                    height: 90px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, rgba(62, 146, 204, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%);
                    color: var(--color-arctic-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--spacing-6);
                    border: 1px solid rgba(62, 146, 204, 0.2);
                    box-shadow: 0 10px 25px rgba(62, 146, 204, 0.1);
                    animation: float-anim 4s ease-in-out infinite;
                }
                
                @keyframes float-anim {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                
                .maintenance-eyebrow {
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: var(--color-arctic-blue);
                    margin-bottom: var(--spacing-3);
                }
                
                .maintenance-title {
                    font-size: 2.2rem;
                    color: white;
                    margin-bottom: var(--spacing-4);
                    font-family: var(--font-heading);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.25;
                }
                
                .maintenance-description {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                    margin-bottom: var(--spacing-8);
                    max-width: 580px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .maintenance-buttons {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--spacing-4);
                    flex-wrap: wrap;
                }
                
                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 28px;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.9rem;
                    font-family: var(--font-heading);
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    border: 1px solid transparent;
                }
                
                .btn-primary {
                    background: linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-arctic-blue) 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(62, 146, 204, 0.2);
                }
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(62, 146, 204, 0.35);
                }
                
                .btn-secondary {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border-color: rgba(255, 255, 255, 0.1);
                }
                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    transform: translateY(-2px);
                }
                
                @media (max-width: 640px) {
                    .maintenance-title {
                        font-size: 1.8rem;
                    }
                    .maintenance-card {
                        padding: var(--spacing-8) var(--spacing-5);
                    }
                    .maintenance-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    .btn {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
