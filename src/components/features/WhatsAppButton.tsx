

import { useState } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = '905335176609'; // Müşteri whatsapp numarası
    const message = encodeURIComponent('Merhaba, Kutup Grup hizmetleriniz hakkında bilgi almak istiyorum.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="WhatsApp ile iletişime geçin"
        >
            <svg viewBox="0 0 32 32" className={styles.icon}>
                <path
                    d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.332 22.616c-.39 1.1-2.274 2.104-3.156 2.168-.792.058-1.756.082-2.832-.178a25.9 25.9 0 01-2.566-.948c-4.512-1.946-7.458-6.542-7.682-6.846-.224-.302-1.83-2.434-1.83-4.642 0-2.208 1.158-3.294 1.568-3.744.39-.428 1.068-.612 1.714-.612.208 0 .394.01.562.018.45.02.676.046 .972.752.37.882 1.27 3.09 1.38 3.314.112.224.186.486.038.784-.15.302-.224.486-.448.748-.224.262-.47.584-.674.784-.224.224-.458.466-.196.914.262.448 1.164 1.92 2.5 3.112 1.718 1.532 3.168 2.006 3.614 2.23.45.224.71.186.972-.112.262-.3 1.12-1.306 1.42-1.756.298-.448.598-.374.998-.224.402.15 2.544 1.2 2.982 1.42.436.222.728.332.836.516.108.186.108 1.072-.282 2.168z"
                    fill="currentColor"
                />
            </svg>
            {isHovered && (
                <span className={styles.tooltip}>WhatsApp ile yazın</span>
            )}
        </a>
    );
}
