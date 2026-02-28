'use client';

import styles from '../gizlilik-politikasi/legal.module.css';

export default function CerezPolitikasiClient() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Çerez Politikası</h1>
                    <p className={styles.heroSubtitle}>
                        Son Güncelleme: 15 Şubat 2026
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                <article className={styles.content}>
                    <section className={styles.section}>
                        <h2>1. Giriş</h2>
                        <p>
                            Bu Çerez Politikası, Kutup Grup'un web sitesinde (kutupgrup.com) kullanılan çerezler ve benzeri teknolojiler
                            hakkında sizi bilgilendirmek amacıyla hazırlanmıştır. Web sitemizi ziyaret ettiğinizde çerezlerin kullanımına
                            ilişkin tercihlerinizi belirtebilirsiniz.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Çerez Nedir?</h2>
                        <p>
                            Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin
                            dosyalarıdır.  Çerezler, web sitelerinin daha verimli çalışmasını sağlamak ve web sitesi sahiplerine bilgi
                            sağlamak için yaygın olarak kullanılır.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Çerez Türleri</h2>
                        <p>Web sitemizde kullanılan çerezler aşağıdaki kategorilerde sınıflandırılabilir:</p>

                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Çerez Türü</th>
                                        <th>Amaç</th>
                                        <th>Süre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Zorunlu Çerezler</strong></td>
                                        <td>Web sitesinin temel işlevlerini yerine getirmesi için gereklidir</td>
                                        <td>Oturum / Kalıcı</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Performans Çerezleri</strong></td>
                                        <td>Web sitesinin performansını analiz etmek ve iyileştirmek için kullanılır</td>
                                        <td>1-2 yıl</td>
                                    </tr>
                                    <tr>
                                        <td><strong>İşlevsellik Çerezleri</strong></td>
                                        <td>Tercihlerinizi hatırlamak ve kişiselleştirilmiş deneyim sunmak için kullanılır</td>
                                        <td>1 yıl</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Hedefleme/Reklam Çerezleri</strong></td>
                                        <td>İlgi alanlarınıza uygun reklamlar göstermek için kullanılır</td>
                                        <td>1-2 yıl</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Kullandığımız Çerezler</h2>

                        <h3>4.1. Zorunlu Çerezler</h3>
                        <ul>
                            <li><strong>Oturum Çerezleri:</strong> Web sitesinde gezinmenizi sağlar ve güvenlik için gereklidir</li>
                            <li><strong>Form Çerezleri:</strong> İletişim formlarının doğru çalışmasını sağlar</li>
                            <li><strong>Güvenlik Çerezleri:</strong> Güvenlik önlemlerini destekler ve kötüye kullanımı önler</li>
                        </ul>

                        <h3>4.2. Analitik Çerezler</h3>
                        <ul>
                            <li><strong>Google Analytics:</strong> Ziyaretçi istatistikleri, sayfa görüntülemeleri, kaynak analizi</li>
                            <li><strong>Kullanım verileri:</strong> Hangi sayfaların ziyaret edildiği, ne kadar süre kalındığı</li>
                        </ul>

                        <h3>4.3. İşlevsellik Çerezleri</h3>
                        <ul>
                            <li><strong>Dil tercihleri:</strong> Seçtiğiniz dil ayarını hatırlar</li>
                            <li><strong>Filtreleme tercihleri:</strong> Hizmet filtreleme seçimlerinizi saklar</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Üçüncü Taraf Çerezleri</h2>
                        <p>Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılmaktadır:</p>
                        <ul>
                            <li>
                                <strong>Google Analytics:</strong> Web sitesi performansını ve kullanıcı davranışlarını analiz etmek için.
                                Daha fazla bilgi için: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Gizlilik Politikası</a>
                            </li>
                            <li>
                                <strong>Google Maps:</strong> Konum bilgilerini görüntülemek için.
                            </li>
                            <li>
                                <strong>Font Providers (Google Fonts):</strong> Web fontlarını yüklemek için.
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
                        <p>
                            Çerezleri kontrol etmek ve yönetmek için tarayıcı ayarlarınızı kullanabilirsiniz. Çoğu tarayıcı otomatik olarak
                            çerezleri kabul eder, ancak bunu değiştirmek için tarayıcı ayarlarınızı düzenleyebilirsiniz.
                        </p>

                        <h3>Popüler Tarayıcılarda Çerez Ayarları:</h3>
                        <ul>
                            <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri</li>
                            <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
                            <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezleri ve web sitesi verilerini yönet</li>
                            <li><strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri → Çerezleri yönet ve sil</li>
                        </ul>

                        <div className={styles.warningBox}>
                            <p>
                                ⚠️ <strong>Önemli:</strong> Çerezleri tamamen devre dışı bırakırsanız, web sitemizin bazı özellikleri
                                düzgün çalışmayabilir veya bazı hizmetlere erişiminiz kısıtlanabilir.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Çerez Tercihlerinizi Değiştirme</h2>
                        <p>
                            Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Daha önce verdiğiniz onayı geri çekmek için
                            tarayıcınızın ayarlarından çerezleri silebilir veya bu sayfanın altındaki bağlantıyı kullanabilirsiniz.
                        </p>
                        <div className={styles.buttonGroup}>
                            <button className={styles.primaryButton}>Çerez Tercihlerini Yönet</button>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>8. "Do Not Track" (İzleme Yapma) Sinyalleri</h2>
                        <p>
                            Bazı tarayıcılar "Do Not Track" (DNT) sinyali gönderme özelliğine sahiptir. Şu anda DNT sinyallerini nasıl
                            ele alacağımız konusunda evrensel bir standart bulunmamaktadır. Bu nedenle, web sitemiz şu anda DNT sinyallerine
                            otomatik olarak yanıt vermemektedir.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>9. Çocukların Gizliliği</h2>
                        <p>
                            Web sitemiz 18 yaşın altındaki çocuklara yönelik değildir ve bilerek 18 yaşın altındaki bireylerden kişisel veri
                            toplamayız.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>10. Politika Güncellemeleri</h2>
                        <p>
                            Bu Çerez Politikası'nı zaman zaman güncelleyebiliriz. Yapılan değişiklikler bu sayfada yayınlanacaktır ve
                            "Son Güncelleme" tarihi değiştirilecektir. Düzenli olarak bu sayfayı kontrol etmenizi öneririz.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>11. İletişim</h2>
                        <p>
                            Çerez Politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                        </p>
                        <div className={styles.contactBox}>
                            <p><strong>E-posta:</strong> info@kutupgrup.com</p>
                            <p><strong>Telefon:</strong> +90 (212) 123 45 67</p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
