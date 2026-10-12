import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { SERVICE_ORDER, SERVICES } from "@/lib/services";
import { CITY_SLUGS, CITY_GEO, getCity } from "@/lib/cities";
import { LOCALES, getDict, href, buildAlternates, SITE_URL } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => CITY_SLUGS.map((ville) => ({ lang, ville })));
}

export function generateMetadata({ params }) {
  const c = getCity(params.lang, params.ville);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: buildAlternates(params.lang, `/${params.ville}`),
    openGraph: {
      title: `${c.metaTitle} | STATIM MANAGEMENT`,
      description: c.metaDesc,
      url: href(params.lang, `/${params.ville}`),
    },
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const ville = params.ville;
  const c = getCity(lang, ville);
  if (!c) notFound();

  const dict = getDict(lang);
  const L = (p) => href(lang, p);
  const url = `${SITE_URL}${L(`/${ville}`)}`;
  const geo = CITY_GEO[ville];
  const services = SERVICE_ORDER.map((slug) => ({ slug, label: SERVICES[lang][slug].nav }));

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `STATIM MANAGEMENT — ${c.title}`,
    description: c.metaDesc,
    url,
    image: `${SITE_URL}/images/og-statim-${lang === "en" ? "en" : "fr"}.jpg`,
    areaServed: [
      {
        "@type": "City",
        name: c.name,
        ...(geo ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } } : {}),
        ...(geo && geo.wikipedia ? { sameAs: geo.wikipedia[lang] || geo.wikipedia.fr } : {}),
      },
      { "@type": "AdministrativeArea", name: "Hérault" },
      { "@type": "AdministrativeArea", name: "Occitanie" },
    ],
    provider: {
      "@type": "ProfessionalService",
      name: "STATIM MANAGEMENT",
      url: SITE_URL,
      email: "contact@statim-management.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 rue des Filles du Calvaire",
        postalCode: "75003",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        lang={lang}
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        bgImage="/images/conseil.webp"
        breadcrumb={[{ label: c.name }]}
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            {c.intro.map((p, i) => <p key={i}>{p}</p>)}

            <h2>{c.servicesTitle}</h2>
            <p>{c.servicesLead}</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={L(`/${s.slug}`)} className="value-link">{s.label}</Link></li>
              ))}
            </ul>

            <h2>{c.whyTitle}</h2>
            <ul>{c.why.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>

          <aside>
            <div className="aside-card">
              <h3>{c.asideTitle}</h3>
              <ul className="aside-list" style={{ marginBottom: 0 }}>
                {c.asideList.map(([k, v]) => <li key={k}><strong>{k}</strong> — {v}</li>)}
              </ul>
              <Link href={L("/contact")} className="btn btn-accent" style={{ marginTop: "1.4rem" }}>
                {dict.common.ctaDiagnosticShort}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>{c.sectorsTitle}</h2>
          </div>
          <div className="feat-grid">
            {c.sectors.map((s, i) => (
              <div className="feat" key={i}>
                <span className="mark" />
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "820px" }}>
            <h2>{c.territoryTitle}</h2>
            <p>{c.territoryText}</p>
            <p>{c.nearbyIntro} {c.nearby.join(", ")}.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="prose" style={{ marginInline: "auto" }}>
            <h2>{c.faqTitle}</h2>
            {c.faq.map(([q, a], i) => (
              <div key={i}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ctastrip">
        <div className="container ctastrip-inner">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <Link href={L("/contact")} className="btn btn-accent">{dict.common.ctaDiagnostic}</Link>
        </div>
      </section>
    </>
  );
}
