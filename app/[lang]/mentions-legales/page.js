import PageHero from "@/components/PageHero";
import FounderText from "@/components/FounderText";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).legal.mentions;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/mentions-legales"),
    robots: { index: false, follow: true },
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const d = getDict(lang).legal.mentions;

  return (
    <>
      <PageHero lang={lang} title={d.title} bgImage="/images/about.webp" breadcrumb={[{ label: d.title }]} />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginInline: "auto" }}>
            <h2>{d.editorTitle}</h2>
            <p>
              {d.editorLines.map((line, i) => (
                <span key={i}>{i === 0 ? <strong>{line}</strong> : <FounderText>{line}</FounderText>}<br /></span>
              ))}
            </p>
            <h2>{d.hostTitle}</h2>
            <p>{d.hostLines.map((line, i) => <span key={i}>{line}<br /></span>)}</p>

            <h2>{d.ipTitle}</h2>
            <p>{d.ipText}</p>

            <h2>{d.dataTitle}</h2>
            <p>
              {d.dataBefore}
              <a href={href(lang, "/politique-confidentialite")} style={{ color: "var(--c-deep)", textDecoration: "underline" }}>{d.dataLink}</a>
              {d.dataAfter}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
