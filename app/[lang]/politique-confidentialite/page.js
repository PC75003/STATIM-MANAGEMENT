import PageHero from "@/components/PageHero";
import { getDict, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).legal.privacy;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/politique-confidentialite"),
    robots: { index: false, follow: true },
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const d = getDict(lang).legal.privacy;

  return (
    <>
      <PageHero lang={lang} title={d.title} bgImage="/images/about.webp" breadcrumb={[{ label: d.title }]} />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginInline: "auto" }}>
            <p>{d.intro}</p>

            <h2>{d.collectedTitle}</h2>
            <p>{d.collectedText}</p>

            <h2>{d.purposeTitle}</h2>
            <p>{d.purposeText}</p>

            <h2>{d.retentionTitle}</h2>
            <p>{d.retentionText}</p>

            <h2>{d.rightsTitle}</h2>
            <ul>{d.rights.map((r, i) => <li key={i}>{r}</li>)}</ul>
            <p>
              {d.rightsBefore}
              <a href="mailto:contact@statim-management.fr" style={{ color: "var(--c-deep)", textDecoration: "underline" }}>contact@statim-management.fr</a>
              {d.rightsAfter}
            </p>

            <h2>{d.cookiesTitle}</h2>
            <p>{d.cookiesText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
