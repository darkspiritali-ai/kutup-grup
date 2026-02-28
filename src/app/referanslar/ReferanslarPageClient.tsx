'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '@/lib/projects-data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './referanslar.module.css';

export default function ReferanslarPageClient() {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects =
        selectedCategory === 'Tümü'
            ? PROJECTS
            : PROJECTS.filter((project) => project.category === selectedCategory);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className={styles.referanslarPage}>
            <Header />
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGridBg} />
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>Portföyümüz</p>
                    <h1 className={styles.heroTitle}>Referanslarımız</h1>
                    <p className={styles.heroSubtitle}>
                        500+ başarılı projeden seçilmiş referanslarımız
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Filter Section */}
                <section className={styles.filterSection}>
                    <div className={styles.filterButtons}>
                        {PROJECT_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.filterButtonActive : ''
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <p className={styles.filterCount}>
                        {filteredProjects.length} proje görüntüleniyor
                    </p>
                </section>

                {/* Projects Grid */}
                <section className={styles.projectsGrid}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImageWrapper}>
                                <div className={styles.projectImagePlaceholder}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                        <path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" /><path d="M9 20v-6h6v6" />
                                    </svg>
                                </div>
                                <div className={styles.projectCategory}>{project.category}</div>
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.projectMeta}>
                                    <span className={styles.projectLocation}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        {project.location}
                                    </span>
                                    <span className={styles.projectYear}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        {project.year}
                                    </span>
                                </div>
                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className={styles.projectTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => openModal(project)}
                                    className={styles.projectButton}
                                >
                                    Detayları Gör
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Siz de Projeleriniz İçin Teklif Alın</h2>
                        <p className={styles.ctaText}>
                            Profesyonel ekibimizle projelerinize hemen başlayalım
                        </p>
                        <Link href="/iletisim" className={styles.ctaButton}>
                            Teklif Talep Edin
                        </Link>
                    </div>
                </section>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.modalClose} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.modalImageWrapper}>
                            <div className={styles.modalImagePlaceholder}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                    <path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" /><path d="M9 20v-6h6v6" />
                                </svg>
                            </div>
                            <div className={styles.modalCategory}>{selectedProject.category}</div>
                        </div>

                        <div className={styles.modalBody}>
                            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>

                            <div className={styles.modalMeta}>
                                <div className={styles.modalMetaItem}>
                                    <span className={styles.modalMetaLabel}>Konum:</span>
                                    <span className={styles.modalMetaValue}>{selectedProject.location}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <span className={styles.modalMetaLabel}>Yıl:</span>
                                    <span className={styles.modalMetaValue}>{selectedProject.year}</span>
                                </div>
                            </div>

                            <div className={styles.modalDescription}>
                                <h3>Proje Detayları</h3>
                                <p>{selectedProject.fullDescription}</p>
                            </div>

                            <div className={styles.modalTags}>
                                <h4>Etiketler:</h4>
                                <div className={styles.modalTagsWrapper}>
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className={styles.modalTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedProject.services.length > 0 && (
                                <div className={styles.modalServices}>
                                    <h4>İlgili Hizmetler:</h4>
                                    <div className={styles.modalServicesLinks}>
                                        {selectedProject.services.map((serviceSlug, index) => (
                                            <Link
                                                key={index}
                                                href={`/hizmetler/${serviceSlug}`}
                                                className={styles.modalServiceLink}
                                                onClick={closeModal}
                                            >
                                                Hizmeti İncele →
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
