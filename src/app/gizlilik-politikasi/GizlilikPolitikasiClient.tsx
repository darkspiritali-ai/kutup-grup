'use client';

import styles from './legal.module.css';

export default function GizlilikPolitikasiClient() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Gizlilik Politikası ve KVKK</h1>
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
                            Kutup Grup olarak, kişisel verilerinizin gizliliğini ve güvenliğini korumayı en önemli önceliklerimiz arasında
                            tutmaktayız. Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel
                            verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Veri Sorumlusu</h2>
                        <p>
                            KVKK kapsamında veri sorumlusu Kutup Grup olup, toplanan kişisel verilerinizin işlenme amaçlarını ve vasıtalarını
                            belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan taraf Kutup Grup'tur.
                        </p>
                        <div className={styles.contactBox}>
                            <p><strong>Adres:</strong> Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul</p>
                            <p><strong>E-posta:</strong> kvkk@kutupgrup.com</p>
                            <p><strong>Telefon:</strong> +90 (533) 517 66 09</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Toplanan Kişisel Veriler</h2>
                        <p>Şirketimiz tarafından toplanan kişisel veriler aşağıdaki kategorilerde sınıflandırılmaktadır:</p>
                        <ul>
                            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (yasal zorunluluk halinde)</li>
                            <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, açık adres</li>
                            <li><strong>Müşteri İşlem Bilgileri:</strong> Talep edilen hizmet bilgileri, proje detayları, teklif bilgileri</li>
                            <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, çerez verileri, oturum kayıtları</li>
                            <li><strong>Finansal Bilgiler:</strong> Fatura bilgileri, ödeme bilgileri (ödeme işlemcisi üzerinden)</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Kişisel Verilerin İşlenme Amaçları</h2>
                        <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Hizmet taleplerinizi değerlendirmek ve teklif sunmak</li>
                            <li>Sözleşme süreçlerini yürütmek ve hizmet sağlamak</li>
                            <li>Faturalandırma ve ödeme işlemlerini gerçekleştirmek</li>
                            <li>Yasal yükümlülükleri yerine getirmek</li>
                            <li>Müşteri memnuniyetini ölçmek ve hizmet kalitesini artırmak</li>
                            <li>İstatistiksel analiz ve raporlama yapmak</li>
                            <li>Pazarlama ve iletişim faaliyetleri yürütmek (açık rıza ile)</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Kişisel Verilerin Aktarımı</h2>
                        <p>
                            Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde ve bu Gizlilik Politikası'nda
                            belirtilen amaçlarla sınırlı olarak:
                        </p>
                        <ul>
                            <li>İş ortaklarımız ve tedarikçilerimiz ile (proje gereksinimleri kapsamında)</li>
                            <li>Yasal yükümlülükler gereği kamu kurum ve kuruluşları ile</li>
                            <li>Hukuki işlemlerin yürütülmesi amacıyla hukuk danışmanları ve denetçiler ile</li>
                            <li>Bilişim altyapı hizmeti sağlayıcıları ile (veri güvenliği sağlanarak)</li>
                        </ul>
                        <p>paylaşılabilmektedir.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Kişisel Verilerin Saklanma Süresi</h2>
                        <p>
                            Kişisel verileriniz, ilgili mevzuatta öngörülen ve işlendikleri amaç için gerekli olan azami süre ve herhalde kanuni
                            zamanaşımı süreleri kadar muhafaza edilmektedir. Saklama süreleri sona erdiğinde kişisel veriler silinir, yok edilir
                            veya anonim hale getirilir.
                        </p>
                        <ul>
                            <li><strong>Sözleşme ve Fatura Bilgileri:</strong> 10 yıl (Vergi Usul Kanunu gereği)</li>
                            <li><strong>İletişim Kayıtları:</strong> 2 yıl</li>
                            <li><strong>Pazarlama Onayları:</strong> Onay geri çekilene kadar</li>
                            <li><strong>Website Logları:</strong> 6 ay</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>7. KVKK Kapsamındaki Haklarınız</h2>
                        <p>KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
                        <ul>
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                            <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                            <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıdaki değişikliklerin bildirilmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize sonuç çıkmasına itiraz etme</li>
                            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Haklarınızı Kullanma</h2>
                        <p>
                            Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici belgeler ile birlikte talebinizi;
                        </p>
                        <ul>
                            <li><strong>Yazılı olarak:</strong> Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul adresine</li>
                            <li><strong>E-posta ile:</strong> kvkk@kutupgrup.com adresine</li>
                            <li><strong>KEP adresi ile:</strong> kutupgrup@hs03.kep.tr adresine</li>
                        </ul>
                        <p>
                            iletebilirsiniz. Talebiniz en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir
                            maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>9. Çerezler (Cookies)</h2>
                        <p>
                            Web sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılmaktadır. Çerezlerin kullanımı hakkında
                            detaylı bilgi için <a href="/cerez-politikasi">Çerez Politikamızı</a> inceleyebilirsiniz.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>10. Güvenlik</h2>
                        <p>
                            Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alınmaktadır. Verileriniz,
                            yetkisiz erişime, kaybolmaya, kötüye kullanıma karşı korunmaktadır. SSL sertifikası, güvenlik duvarları,
                            şifreleme teknolojileri ve erişim kontrolleri kullanılarak verileriniz korunmaktadır.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>11. Değişiklikler</h2>
                        <p>
                            Bu Gizlilik Politikası'nda yapılacak değişiklikler web sitemizde yayınlanacaktır. Politika'nın güncel versiyonunu
                            düzenli olarak kontrol etmenizi öneririz.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>12. İletişim</h2>
                        <p>
                            Gizlilik Politikamız ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                        </p>
                        <div className={styles.contactBox}>
                            <p><strong>E-posta:</strong> kvkk@kutupgrup.com</p>
                            <p><strong>Telefon:</strong> +90 (533) 517 66 09</p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
