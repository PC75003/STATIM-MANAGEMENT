import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CASES } from "@/lib/cases";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).references;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/references"),
  };
}

// Logos clients. `url: null` → logo affiché mais non cliquable.
const CLIENTS = [
  { name: "Magnitude", file: "magnitude.png", url: "https://magnitude.fr" },
  { name: "Sodimate", file: "sodimate.jpg", url: "https://sodimate.fr" },
  { name: "Pronal", file: "pronal.jpg", url: "https://www.pronal.com" },
  { name: "3Dcelo", file: "3d-celo.jpeg", url: "https://www.3dcelo.com" },
  { name: "ACOME", file: "acome.jpeg", url: "https://www.acome.com/fr" },
  { name: "Balt", file: "balt.jpg", url: "https://www.baltgroup.com" },
  { name: "Carta – Reichen et Robert Associés", file: "carta-reichen-robert.jpeg", url: "https://www.reichen-robert.com" },
  { name: "CEOS Groupe", file: "ceos-groupe.png", url: "https://www.ceos-groupe.com" },
  { name: "Cintoo", file: "cintoo.svg", url: "https://cintoo.com" },
  { name: "CoPrime", file: "coprime.jpeg", url: "https://www.coprime.fr" },
  { name: "École de Biologie Industrielle (EBI)", file: "ebi.jpg", url: "https://www.ebi-edu.com" },
  { name: "Mobelite", file: "mobelite.svg", url: "https://www.mobelite.fr" },
  { name: "Moderne Mécanique", file: "moderne-mecanique.png", url: "https://www.ocmigroup.com" },
  { name: "Opus Aerospace", file: "opus-aerospace.png", url: "https://www.opus-aerospace.com" },
  { name: "Parashop", file: "parashop.png", url: "https://www.parashop.com" },
  { name: "Pirtek", file: "pirtek.jpeg", url: "https://www.pirtek.fr" },
  { name: "PrimaDiag", file: "primadiag.jpg", url: "https://primadiag.com" },
  { name: "SGIV (groupe CEOS)", file: "sgiv-avemce.png", url: "https://ceos-groupe.com" },
  { name: "SoBox Formation", file: "sobox-formation.png", url: "https://soboxformation.com" },
  { name: "EasyVista", file: "easyvista.svg", url: "https://www.easyvista.com" },
];

function ClientLogo({ name, file }) {
  return <img src={`/images/clients/${file}`} alt={name} title={name} loading="lazy" />;
}

export default function Page({ params }) {
  const lang = params.lang;
  const dict = getDict(lang);
  const d = dict.references;
  const L = (p) => href(lang, p);
  const cases = CASES[lang];
  const labels = dict.caseLabels;

  return (
    <>
      <PageHero lang={lang} eyebrow={d.eyebrow} title={d.title} lead={d.lead} bgImage="/images/hero.webp" breadcrumb={[{ label: d.breadcrumb }]} />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>{d.clientsTitle}</h2>
            <p>{d.clientsLead}</p>
          </div>
          <ul className="client-grid">
            {CLIENTS.map((c) =>
              c.url ? (
                <li key={c.name}>
                  <a className="client-logo" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={d.visitAria(c.name)}>
                    <ClientLogo name={c.name} file={c.file} />
                  </a>
                </li>
              ) : (
                <li key={c.name}>
                  <span className="client-logo"><ClientLogo name={c.name} file={c.file} /></span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <h2>{d.casesTitle}</h2>
            <p>{d.casesLead}</p>
          </div>
          <div className="case-grid">
            {cases.map((c, i) => (
              <article className="case" key={i}>
                <span className="case-tag">{c.tag}</span>
                <p className="case-context">{c.context}</p>
                <dl className="case-sar">
                  <dt>{labels.situation}</dt>
                  <dd>{c.situation}</dd>
                  <dt>{labels.action}</dt>
                  <dd>{c.action}</dd>
                  <dt>{labels.result}</dt>
                  <dd>{c.result}</dd>
                </dl>
              </article>
            ))}
          </div>
          <p className="tmo-note">{d.casesNote}</p>
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
