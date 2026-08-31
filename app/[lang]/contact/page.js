import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).contact;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/contact"),
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const d = getDict(lang).contact;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact STATIM MANAGEMENT",
    url: `https://www.statim-management.fr${href(lang, "/contact")}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <PageHero lang={lang} eyebrow={d.eyebrow} title={d.title} lead={d.lead} bgImage="/images/cta.webp" breadcrumb={[{ label: d.breadcrumb }]} />

      <section className="section">
        <div className="container split">
          <div>
            <h2 style={{ marginTop: 0 }}>{d.writeTitle}</h2>
            <ContactForm lang={lang} />
          </div>

          <aside>
            <div className="aside-card">
              <h3>{d.reachTitle}</h3>
              <p style={{ marginBottom: "0.4rem" }}>
                <strong>{d.emailLabel}</strong><br />
                <a href="mailto:contact@statim-management.fr" style={{ color: "var(--c-deep)" }}>contact@statim-management.fr</a>
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>{d.supportLabel}</strong><br />
                {d.supportValue}
              </p>
              <hr style={{ border: "none", borderTop: "1px solid var(--c-line)", margin: "1.4rem 0" }} />
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--c-ink-soft)" }}>
                {d.reachNote}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
