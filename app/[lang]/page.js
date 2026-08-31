import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CASES } from "@/lib/cases";
import { getDict, href, buildAlternates } from "@/lib/i18n";
import "./home.css";

export function generateMetadata({ params }) {
  const d = getDict(params.lang).home;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: buildAlternates(params.lang, "/"),
  };
}

export default function Home({ params }) {
  const lang = params.lang;
  const d = getDict(lang).home;
  const L = (p) => href(lang, p);
  const cases = CASES[lang];
  const labels = getDict(lang).caseLabels;
  const common = getDict(lang).common;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container hero-inner">
          <div className="hero-content reveal in">
            <p className="eyebrow">{d.heroEyebrow}</p>
            <h1>
              {d.heroTitle1}<br />
              <span className="hero-accent">{d.heroTitle2}</span>
            </h1>
            <p className="hero-lead">{d.heroLead}</p>
            <div className="hero-cta">
              <Link href={L("/contact")} className="btn btn-accent">{common.ctaDiagnostic}</Link>
              <Link href={L("/solutions-rh")} className="btn btn-ghost hero-ghost">{d.heroCtaSecondary}</Link>
            </div>
            <ul className="hero-trust">
              {d.trust.map(([n, t]) => <li key={t}><strong>{n}</strong> {t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* VALEUR */}
      <section className="section">
        <div className="container value-grid">
          <div className="value-text reveal">
            <p className="eyebrow">{d.valueEyebrow}</p>
            <h2>{d.valueTitle}</h2>
            <p>{d.valueP1}</p>
            <p>{d.valueP2}</p>
            <Link href={L("/a-propos")} className="value-link">{d.valueLink}</Link>
          </div>
          <div className="value-points reveal">
            {d.valueCards.map(([t, desc]) => (
              <div className="value-card" key={t}>
                <span className="value-mark" aria-hidden="true" />
                <h3>{t}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow" style={{ justifyContent: "center" }}>{d.solutionsEyebrow}</p>
            <h2>{d.solutionsTitle}</h2>
            <p>{d.solutionsLead}</p>
          </div>
          <div className="svc-grid">
            {d.services.map((s) => (
              <Link href={L(`/${s.slug}`)} className="svc-card reveal" key={s.slug}>
                <div className="svc-img">
                  <Image src={s.img} alt="" fill loading="lazy" sizes="(max-width:700px) 100vw, 380px" style={{ objectFit: "cover" }} />
                </div>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="svc-link">{common.learnMore}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{d.methodEyebrow}</p>
            <h2>{d.methodTitle}</h2>
          </div>
          <ol className="steps">
            {d.steps.map((s) => (
              <li className="step reveal" key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="figures">
        <div className="container figures-inner">
          {d.figures.map(([n, t]) => (
            <div className="fig reveal" key={t}><strong>{n}</strong><span>{t}</span></div>
          ))}
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow" style={{ justifyContent: "center" }}>{d.casesEyebrow}</p>
            <h2>{d.casesTitle}</h2>
            <p>{d.casesLead}</p>
          </div>
          <div className="case-grid">
            {cases.map((c, i) => (
              <article className="case reveal" key={i}>
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

      {/* CTA FINAL */}
      <section className="finalcta">
        <div className="container finalcta-inner reveal">
          <h2>{d.finalCtaTitle}</h2>
          <p>{d.finalCtaText}</p>
          <Link href={L("/contact")} className="btn btn-accent">{common.ctaDiagnostic}</Link>
        </div>
      </section>
    </>
  );
}
