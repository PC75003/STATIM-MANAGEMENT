import Link from "next/link";
import PageHero from "@/components/PageHero";
import { POSTS } from "@/lib/posts";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).blog;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/blog"),
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const d = getDict(lang).blog;
  const L = (p) => href(lang, p);
  const posts = POSTS[lang];

  return (
    <>
      <PageHero lang={lang} eyebrow={d.eyebrow} title={d.title} lead={d.lead} bgImage="/images/conseil.webp" breadcrumb={[{ label: d.breadcrumb }]} />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((a) => (
              <article className="post" key={a.slug}>
                <div className="post-body">
                  <span className="post-cat">{a.cat}</span>
                  <h2><Link href={L(`/blog/${a.slug}`)}>{a.title}</Link></h2>
                  <p>{a.excerpt}</p>
                  <Link href={L(`/blog/${a.slug}`)} className="svc-link">{d.read}</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="tmo-note" style={{ textAlign: "center", marginTop: "2.5rem" }}>{d.note}</p>
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
