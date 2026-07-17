"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="background-noise"></div>
      <div className="not-found-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="logo-wrap">
            <Image 
              src="/logo/logo.png" 
              alt="Kutup Grup" 
              width={140} 
              height={67} 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Sayfa Bulunamadı</h2>
          <p className="error-desc">
            Aradığınız sayfayı bulamadık. Belki taşınmış, silinmiş veya geçici olarak ulaşılamıyor olabilir.
          </p>
          <Link href="/" className="back-btn">
            <span>Ana Sayfaya Dön</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .not-found-container {
          position: relative;
          min-height: 100vh;
          background: #030816;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          font-family: var(--font-sans);
          padding: 20px;
        }

        .background-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 0;
        }

        .not-found-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 500px;
        }

        .logo-wrap {
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .error-code {
          font-family: var(--font-heading);
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.04em;
        }

        .error-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 600;
          margin: 1rem 0;
          color: #f0f4f9;
        }

        .error-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #0a2463 0%, #247ba0 50%, #3e92cc 100%);
          color: white;
          text-decoration: none;
          border-radius: 100px;
          font-weight: 600;
          font-size: 1.1rem;
          font-family: var(--font-heading);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(36, 123, 160, 0.25);
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(36, 123, 160, 0.4);
        }

        .back-btn svg {
          transition: transform 0.3s ease;
        }

        .back-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
