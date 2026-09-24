import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { POSTS, getPost } from "@/lib/posts";
import { LOCALES, getDict, href, buildAlternates } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => POSTS[lang].map((p) => ({ lang, slug: p.slug })));
}

export function generateMetadata({ params }) {
  const post = getPost(params.lang, params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.desc,
    alternates: buildAlternates(params.lang, `/blog/${params.slug}`),
    openGraph: { title: `${post.title} | STATIM MANAGEMENT`, description: post.desc, type: "article" },
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const post = getPost(lang, params.slug);
  if (!post) notFound();
  const d = getDict(lang).blog;
  const L = (p) => href(lang, p);

  const pageUrl = `https://www.statim-management.fr${L(`/blog/${params.slug}`)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.desc,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang === "en" ? "en-GB" : "fr-FR",
    image: `https://www.statim-management.fr/images/og-statim-${lang === "en" ? "en" : "fr"}.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: { "@type": "Organization", name: "STATIM MANAGEMENT", url: "https://www.statim-management.fr" },
    publisher: {
      "@type": "Organization",
      name: "STATIM MANAGEMENT",
      logo: {
        "@type": "ImageObject",
        url: "https://www.statim-management.fr/images/logo-hr-management.png",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        lang={lang}
        eyebrow={post.cat}
        title={post.title}
        bgImage="/images/entretiens.webp"
        breadcrumb={[{ label: d.breadcrumb, href: L("/blog") }, { label: post.cat }]}
      />
      <section className="section">
        <div className="container">
          <article className="prose" style={{ marginInline: "auto" }}>
            {post.body.map(([tag, txt], i) =>
              tag === "h2" ? <h2 key={i}>{txt}</h2> : <p key={i}>{txt}</p>
            )}
            <p style={{ marginTop: "2.5rem" }}>
              <Link href={L("/blog")} className="value-link">{d.back}</Link>
            </p>
          </article>
        </div>
      </section>
      <section className="ctastrip">
        <div className="container ctastrip-inner">
          <h2>{d.ctaTitle}</h2>
          <p>{d.ctaText}</p>
          <Link href={L("/contact")} className="btn btn-accent">{getDict(lang).common.ctaDiagnostic}</Link>
        </div>
      </section>
    </>
  );
}
