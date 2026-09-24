import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SERVICES, SERVICE_ORDER, SERVICE_IMG } from "@/lib/services";
import { getDict, href, SITE_URL } from "@/lib/i18n";

export default function ServiceLayout({ lang = "fr", slug }) {
  const d = getDict(lang);
  const s = SERVICES[lang][slug];
  const others = SERVICE_ORDER.filter((k) => k !== slug);
  const L = (p) => href(lang, p);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.nav,
    description: s.metaDesc,
    url: `${SITE_URL}${L(`/${slug}`)}`,
    areaServed: [{ "@type": "Country", name: "France" }, { "@type": "Place", name: "Europe" }],
    provider: { "@type": "ProfessionalService", name: "STATIM MANAGEMENT", url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        lang={lang}
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        bgImage={SERVICE_IMG[slug]}
        breadcrumb={[{ label: d.nav.solutions, href: L("/solutions-rh") }, { label: s.nav }]}
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            {s.intro.map((p, i) => <p key={i}>{p}</p>)}

            {s.sections.map((sec, i) => (
              <div key={i}>
                <h2>{sec.h}</h2>
                <ul>{sec.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              </div>
            ))}

            <h2>{d.service.faqTitle}</h2>
            {s.faq.map(([q, a], i) => (
              <div key={i}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>

          <aside>
            <div className="aside-card">
              <h3>{d.service.asideTitle}</h3>
              <p>{d.service.asideText}</p>
              <Link href={L("/contact")} className="btn btn-accent">{d.common.ctaDiagnosticShort}</Link>

              <h3 style={{ marginTop: "1.8rem" }}>{d.service.otherSolutions}</h3>
              <ul className="aside-list">
                {others.map((k) => (
                  <li key={k}><Link href={L(`/${k}`)}>{SERVICES[lang][k].nav}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="ctastrip">
        <div className="container ctastrip-inner">
          <h2>{d.service.ctaStripTitle(s.nav)}</h2>
          <p>{d.service.ctaStripText}</p>
          <Link href={L("/contact")} className="btn btn-accent">{d.common.ctaDiagnostic}</Link>
        </div>
      </section>
    </>
  );
}
