import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { SERVICES, SERVICE_ORDER, SERVICE_IMG } from "@/lib/services";
import { getDict, href, buildAlternates } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).solutions;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/solutions-rh"),
  };
}

export default function Page({ params }) {
  const lang = params.lang;
  const dict = getDict(lang);
  const d = dict.solutions;
  const L = (p) => href(lang, p);

  return (
    <>
      <PageHero lang={lang} eyebrow={d.eyebrow} title={d.title} lead={d.lead} bgImage="/images/drh.webp" breadcrumb={[{ label: d.breadcrumb }]} />

      <section className="section">
        <div className="container">
          <div className="svc-grid">
            {SERVICE_ORDER.map((slug) => {
              const s = SERVICES[lang][slug];
              return (
                <Link href={L(`/${slug}`)} className="svc-card" key={slug}>
                  <div className="svc-img">
                    <Image src={SERVICE_IMG[slug]} alt="" fill loading="lazy" sizes="(max-width:700px) 100vw, 380px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="svc-body">
                    <h3>{s.nav}</h3>
                    <p>{s.lead}</p>
                    <span className="svc-link">{dict.common.learnMore}</span>
                  </div>
                </Link>
              );
            })}
          </div>
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
