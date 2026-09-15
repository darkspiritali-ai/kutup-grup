import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from '@/components/ui/Link';
import StructuredData from '@/components/seo/StructuredData';
import { getBlogPost } from '@/lib/blog-data';
import styles from './blog.module.css';

const SITE_URL = 'https://kutupgrup.com';

interface BlogPostProps {
  slug: string;
}

const sectionId = (heading: string) => heading
  .toLocaleLowerCase('tr-TR')
  .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi, '-')
  .replace(/^-|-$/g, '');

export default function BlogPost({ slug }: BlogPostProps) {
  const post = getBlogPost(slug);

  if (!post) {
    return <div><Header /><main className={styles.content}><h1>Sayfa bulunamadı</h1><Link href="/blog">Bloga dön</Link></main><Footer /></div>;
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const relatedPosts = post.relatedPosts
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: [`${SITE_URL}${post.image.src}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: 'tr-TR',
    keywords: post.keywords.join(', '),
    author: { '@type': 'Organization', name: 'Kutup Grup', url: `${SITE_URL}/hakkimizda` },
    publisher: {
      '@type': 'Organization',
      name: 'Kutup Grup',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };
  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}${post.image.src}`,
    url: `${SITE_URL}${post.image.src}`,
    name: post.image.title,
    description: post.image.alt,
    caption: post.image.caption,
    width: post.image.width,
    height: post.image.height,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const formatDate = (value: string) => new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00Z`));

  return (
    <div className={styles.page}>
      <StructuredData data={articleSchema} />
      <StructuredData data={imageSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main>
        <div className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> <span aria-hidden="true">/</span>{' '}
          <Link href="/blog">Blog</Link> <span aria-hidden="true">/</span>{' '}
          <span>{post.title}</span>
        </div>

        <div className={`${styles.content} ${styles.articleLayout}`}>
          <article className={styles.article}>
            <header className={styles.articleHeader}>
              <p className={styles.postMeta}>{post.category}</p>
              <h1>{post.title}</h1>
              <p className={styles.articleExcerpt}>{post.excerpt}</p>
              <p className={styles.articleByline}>
                Kutup Grup · Yayın: {formatDate(post.publishedAt)} · Güncelleme: {formatDate(post.updatedAt)}
              </p>
            </header>

            <figure className={styles.articleFigure}>
              <a href={canonical} aria-label={`${post.title} sayfasına geri dön`}>
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  title={post.image.title}
                  width={post.image.width}
                  height={post.image.height}
                />
              </a>
              <figcaption>{post.image.caption} Yapay editoryal illüstrasyon; gerçek saha fotoğrafı değildir.</figcaption>
            </figure>

            <div className={styles.articleBody}>
              {post.sections.map((section) => (
                <section className={styles.section} id={sectionId(section.heading)} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet} dangerouslySetInnerHTML={{ __html: bullet }} />
                      ))}
                    </ul>
                  )}
                  {section.note && <p className={styles.note}>{section.note}</p>}
                </section>
              ))}

              <section className={styles.section}>
                <h2>Sıkça sorulan sorular</h2>
                <div className={styles.faqList}>
                  {post.faqs.map((faq) => (
                    <div className={styles.faqItem} key={faq.question}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.section}>
                <h2>Kaynaklar ve ileri okuma</h2>
                <ul className={styles.sourceList}>
                  {post.sources.map((source) => (
                    <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>
                  ))}
                </ul>
              </section>

              <section className={styles.bottomCard}>
                <h2>İlgili hizmetler</h2>
                <ul className={styles.relatedList}>
                  {post.relatedServices.map((service) => (
                    <li key={service.href}><Link href={service.href}>{service.label}</Link></li>
                  ))}
                </ul>
              </section>

              {relatedPosts.length > 0 && (
                <section className={styles.bottomCard}>
                  <h2>İlgili yazılar</h2>
                  <div className={styles.relatedGrid}>
                    {relatedPosts.map((related) => (
                      <div className={styles.relatedCard} key={related.slug}>
                        <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                        <small>{related.category}</small>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className={styles.bottomCard}>
                <h2>Projenizi birlikte değerlendirelim</h2>
                <p>Yapı, saha veya görev bilgilerinizi paylaşın; uygun erişim ve risk değerlendirmesi için ilk keşif kapsamını birlikte netleştirelim.</p>
                <Link href="/iletisim" className="btn btn-primary">İletişime geçin</Link>
              </section>
            </div>
          </article>

          <aside className={styles.sideCard} aria-label="Yazı içindekiler">
            <h2>İçindekiler</h2>
            <ul>
              {post.sections.map((section) => (
                <li key={section.heading}><a href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
