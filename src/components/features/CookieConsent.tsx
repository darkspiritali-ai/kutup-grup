'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className={styles.cookieBanner}>
            <div className={styles.cookieContent}>
                <p className={styles.cookieText}>
                    🍪 Bu web sitesi, deneyiminizi geliştirmek için çerezler kullanmaktadır.
                    Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.{' '}
                    <Link href="/cerez-politikasi" className={styles.cookieLink}>
                        Çerez Politikası
                    </Link>
                </p>
                <div className={styles.cookieButtons}>
                    <button onClick={handleAccept} className={styles.acceptButton}>
                        Kabul Et
                    </button>
                    <button onClick={handleDecline} className={styles.declineButton}>
                        Reddet
                    </button>
                </div>
            </div>
        </div>
    );
}
