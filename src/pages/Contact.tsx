

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './contact.module.css';

interface FormData {
    ad_soyad: string;
    email: string;
    telefon: string;
    konu: string;
    mesaj: string;
    kvkk_onay: boolean;
}

interface FormErrors {
    [key: string]: string;
}

export default function ContactPageClient() {
    const [formData, setFormData] = useState<FormData>({
        ad_soyad: '',
        email: '',
        telefon: '',
        konu: '',
        mesaj: '',
        kvkk_onay: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.ad_soyad.trim()) {
            newErrors.ad_soyad = 'Ad Soyad gereklidir';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-posta gereklidir';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi girin';
        }

        if (!formData.telefon.trim()) {
            newErrors.telefon = 'Telefon gereklidir';
        } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.telefon)) {
            newErrors.telefon = 'Geçerli bir telefon numarası girin';
        }

        if (!formData.mesaj.trim()) {
            newErrors.mesaj = 'Mesaj gereklidir';
        } else if (formData.mesaj.trim().length < 10) {
            newErrors.mesaj = 'Mesaj en az 10 karakter olmalıdır';
        }

        if (!formData.kvkk_onay) {
            newErrors.kvkk_onay = 'KVKK metnini onaylamanız gerekmektedir';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus('success');
                setFormData({
                    ad_soyad: '',
                    email: '',
                    telefon: '',
                    konu: '',
                    mesaj: '',
                    kvkk_onay: false,
                });
                setErrors({});
            } else {
                console.error('Form submission failed:', data.message);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <>
            <Header />
            <div className={styles.contactPage}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>İletişime Geçin</h1>
                        <p className={styles.heroSubtitle}>
                            Projeleriniz için bize ulaşın, size en uygun çözümü sunalım
                        </p>
                    </div>
                </section>

                <div className={styles.container}>
                    {/* Contact Info Cards */}
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <h3>Adres</h3>
                            <p>Levent 199, Esentepe Mahallesi, Büyükdere Caddesi No:199</p>
                            <p>Şişli / İstanbul</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                            </div>
                            <h3>Telefon</h3>
                            <p><a href="tel:+902120000000">+90 (212) 000 00 00</a></p>
                            <p><a href="tel:+905335176609">+90 (533) 517 66 09</a></p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <h3>E-posta</h3>
                            <p><a href="mailto:info@kutupgrup.com">info@kutupgrup.com</a></p>
                            <p><a href="mailto:destek@kutupgrup.com">destek@kutupgrup.com</a></p>
                        </div>
                    </div>

                    {/* Form & Map Section */}
                    <section className={styles.formMapSection}>
                        {/* Form */}
                        <div className={styles.formCard}>
                            <h2 className={styles.formTitle}>Bize Mesaj Gönderin</h2>
                            <p className={styles.formDescription}>
                                Formu doldurarak detaylı bilgi talep edebilir veya projeleriniz için teklif alabilirsiniz.
                            </p>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <p>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className={styles.errorMessage}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    <p>Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan arayın.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="ad_soyad">
                                            Ad Soyad <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="ad_soyad"
                                            name="ad_soyad"
                                            value={formData.ad_soyad}
                                            onChange={handleChange}
                                            placeholder="Adınız ve Soyadınız"
                                            className={errors.ad_soyad ? styles.inputError : ''}
                                        />
                                        {errors.ad_soyad && <span className={styles.errorText}>{errors.ad_soyad}</span>}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">
                                            E-posta <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="ornek@email.com"
                                            className={errors.email ? styles.inputError : ''}
                                        />
                                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="telefon">
                                            Telefon <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefon"
                                            name="telefon"
                                            value={formData.telefon}
                                            onChange={handleChange}
                                            placeholder="05XX XXX XX XX"
                                            className={errors.telefon ? styles.inputError : ''}
                                        />
                                        {errors.telefon && <span className={styles.errorText}>{errors.telefon}</span>}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="konu">Konu</label>
                                        <select
                                            id="konu"
                                            name="konu"
                                            value={formData.konu}
                                            onChange={handleChange}
                                        >
                                            <option value="">Konu Seçiniz</option>
                                            <option value="teklif">Teklif Talebi</option>
                                            <option value="bilgi">Genel Bilgi</option>
                                            <option value="is_birligi">İş Birliği</option>
                                            <option value="diger">Diğer</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="mesaj">
                                        Mesajınız <span className={styles.required}>*</span>
                                    </label>
                                    <textarea
                                        id="mesaj"
                                        name="mesaj"
                                        value={formData.mesaj}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Projeniz veya talebiniz hakkında detaylı bilgi verin..."
                                        className={errors.mesaj ? styles.inputError : ''}
                                    />
                                    {errors.mesaj && <span className={styles.errorText}>{errors.mesaj}</span>}
                                </div>

                                <div className={styles.checkboxGroup}>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="kvkk_onay"
                                            checked={formData.kvkk_onay}
                                            onChange={handleChange}
                                            className={styles.checkbox}
                                        />
                                        <span>
                                            <a href="/gizlilik-politikasi" target="_blank" rel="noopener noreferrer">
                                                KVKK Aydınlatma Metni
                                            </a>
                                            'ni okudum, kabul ediyorum. <span className={styles.required}>*</span>
                                        </span>
                                    </label>
                                    {errors.kvkk_onay && <span className={styles.errorText}>{errors.kvkk_onay}</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={styles.submitButton}
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                                </button>
                            </form>
                        </div>

                        {/* Map Section */}
                        <div className={styles.mapSection}>
                            <h2 className={styles.sectionTitle}>Konum</h2>
                            <div className={styles.mapContainer}>
                                <iframe
                                    src="https://maps.google.com/maps?q=Levent%20199,%20Esentepe%20Mahallesi,%20%C5%9Ei%C5%9Fli,%20%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Kutup Grup Konum"
                                />
                            </div>

                            <div className={styles.workingHours}>
                                <h3 className={styles.hoursTitle}>Çalışma Saatleri</h3>
                                <ul className={styles.hoursList}>
                                    <li>
                                        <span>Pazartesi - Cuma:</span>
                                        <strong>09:00 - 18:00</strong>
                                    </li>
                                    <li>
                                        <span>Cumartesi:</span>
                                        <strong>Randevuyla</strong>
                                    </li>
                                    <li>
                                        <span>Pazar:</span>
                                        <strong>Kapalı</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* WhatsApp CTA */}
                    <section className={styles.whatsappSection}>
                        <div className={styles.whatsappCard}>
                            <div className={styles.whatsappIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
                            </div>
                            <div className={styles.whatsappContent}>
                                <h3>Hızlı İletişim için WhatsApp</h3>
                                <p>Acil durumlar için WhatsApp üzerinden bize ulaşabilirsiniz</p>
                            </div>
                            <a
                                href="https://wa.me/905335176609"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappButton}
                            >
                                WhatsApp ile İletişim
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
