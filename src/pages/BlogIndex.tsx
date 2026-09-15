import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from '@/components/ui/Image';
import Link from '@/components/ui/Link';
import StructuredData from '@/components/seo/StructuredData';
import { BLOG_HUB, BLOG_POSTS } from '@/lib/blog-data';
import styles from './blog.module.css';

const SITE_URL = 'https://kutupgrup.com';

export default function BlogIndex() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: BLOG_HUB.title,
    description: BLOG_HUB.metaDescription,
    url: `${SITE_URL}/blog`,
    inLanguage: 'tr-TR',
    isPartOf: { '@type': 'WebSite', name: 'Kutup Grup', url: SITE_URL },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: BLOG_POSTS.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className={styles.page}>
      <StructuredData data={schema} />
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Kutup Grup teknik kütüphanesi</p>
            <h1>{BLOG_HUB.title}</h1>
            <p>{BLOG_HUB.excerpt}</p>
          </div>
        </section>

        <div className={styles.content}>
          <div className={styles.hubLayout}>
            <aside className={styles.hubSidebar} aria-label="Blog yönlendirme">
              <div className={styles.sideCard}>
                <p className={styles.cardMeta}>İçerik haritası</p>
                <h2>İhtiyacınıza göre ilerleyin</h2>
                <nav aria-label="Blog konu başlıkları">
                  <ul className={styles.topicList}>
                    {BLOG_POSTS.map((post) => (
                      <li key={post.slug}>
                        <a href={`#${post.slug}`}>{post.category}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className={styles.sidebarCallout}>
                <p className={styles.cardMeta}>Kutup Grup</p>
                <h2>Bir saha sorunuz mu var?</h2>
                <p>
                  Yapı, yamaç veya endüstriyel alanınızla ilgili ilk bilgileri paylaşın;
                  uygun değerlendirme başlıklarını birlikte netleştirelim.
                </p>
                <Link href="/iletisim" className={styles.sidebarLink}>
                  İletişime geçin <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>

            <div className={styles.hubMain}>
              <div className={styles.intro}>
                <h2>Karar vermeyi kolaylaştıran saha yazıları</h2>
                <p>
                  Bu merkezdeki yazılar; erişim yöntemi, risk değerlendirmesi, koruma sistemi,
                  bakım ve kurtarma planlamasını birlikte ele alır. Teknik kaynaklar ve ilgili
                  hizmet sayfalarıyla bağlantılıdır. Proje kapsamı, uygunluk ve uygulama kararı
                  her zaman gerçek saha verileriyle ayrıca doğrulanmalıdır.
                </p>
              </div>

              <div className={styles.grid}>
                {BLOG_POSTS.map((post) => (
                  <article className={styles.card} id={post.slug} key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className={styles.cardImageLink}>
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        title={post.image.title}
                        width={post.image.width}
                        height={post.image.height}
                        className={styles.cardImage}
                      />
                    </Link>
                    <div className={styles.cardBody}>
                      <p className={styles.cardMeta}>{post.category}</p>
                      <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                      <p>{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                        Devamını oku <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
