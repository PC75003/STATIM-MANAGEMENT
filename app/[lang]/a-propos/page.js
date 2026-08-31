import Link from "next/link";
import PageHero from "@/components/PageHero";
import FounderText from "@/components/FounderText";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).about;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/a-propos"),
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const dict = getDict(lang);
  const d = dict.about;
  const L = (p) => href(lang, p);

  return (
    <>
      <PageHero lang={lang} eyebrow={d.eyebrow} title={d.title} lead={d.lead} bgImage="/images/about.webp" breadcrumb={[{ label: d.breadcrumb }]} />

      <section className="section">
        <div className="container split">
          <div className="prose">
            {d.intro.map((p, i) => <p key={i}><FounderText>{p}</FounderText></p>)}

            <h2>{d.promiseTitle}</h2>
            <p>{d.promiseText}</p>

            <h2>{d.commitmentsTitle}</h2>
            <ul>{d.commitments.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>

          <aside>
            <div className="aside-card">
              <h3>{d.asideTitle}</h3>
              <ul className="aside-list" style={{ marginBottom: 0 }}>
                {d.asideList.map(([n, t]) => <li key={t}><strong>{n}</strong> — {t}</li>)}
              </ul>
              <Link href={L("/contact")} className="btn btn-accent" style={{ marginTop: "1.4rem" }}>{dict.common.ctaDiagnosticShort}</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="ctastrip">
        <div className="container ctastrip-inner">
          <h2>{d.ctaTitle}</h2>
          <p>{d.ctaText}</p>
          <Link href={L("/contact")} className="btn btn-accent">{dict.common.ctaDiagnostic}</Link>
        </div>
      </section>
    </>
  );
}
