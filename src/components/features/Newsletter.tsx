'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // TODO: Implement newsletter API endpoint
            // For now, just simulate success
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus('success');
            setMessage('Başarıyla abone oldunuz! E-postanızı kontrol edin.');
            setEmail('');

            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (error) {
            setStatus('error');
            setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    };

    return (
        <div className={styles.newsletter}>
            <h3 className={styles.title}>Bültenimize Abone Olun</h3>
            <p className={styles.subtitle}>
                Yeni projeler, güncellemeler ve özel tekliflerden haberdar olun
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-posta adresiniz"
                        required
                        disabled={status === 'loading'}
                        className={styles.input}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={styles.button}
                    >
                        {status === 'loading' ? 'Gönderiliyor...' : 'Abone Ol'}
                    </button>
                </div>

                {message && (
                    <p className={`${styles.message} ${status === 'success' ? styles.success : styles.error}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
