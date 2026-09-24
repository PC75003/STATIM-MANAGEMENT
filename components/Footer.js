import Link from "next/link";
import ApproachSection from "@/components/ApproachSection";
import CookieSettingsLink from "@/components/CookieSettingsLink";
import { getDict, href } from "@/lib/i18n";
import "./footer.css";

export default function Footer({ lang }) {
  const d = getDict(lang);
  const f = d.footer;
  const L = (p) => href(lang, p);

  return (
    <>
      {/* Section « approche » — présente en bas de toutes les pages */}
      <ApproachSection lang={lang} />

      <footer className="ftr">
        <div className="container ftr-grid">
          <div className="ftr-brand">
            <span className="ftr-name">STATIM<span> MANAGEMENT</span></span>
            <p>{f.brandDesc}</p>
            <p className="ftr-contact">
              <a href="mailto:contact@statim-management.fr">contact@statim-management.fr</a>
            </p>
          </div>

          <nav className="ftr-col" aria-label={f.colSolutions}>
            <h3>{f.colSolutions}</h3>
            {d.home.services.map((s) => (
              <Link key={s.slug} href={L(`/${s.slug}`)}>{s.title}</Link>
            ))}
          </nav>

          <nav className="ftr-col" aria-label={f.colCabinet}>
            <h3>{f.colCabinet}</h3>
            <Link href={L("/a-propos")}>{f.linkAbout}</Link>
            <Link href={L("/references")}>{f.linkReferences}</Link>
            <Link href={L("/blog")}>{f.linkBlog}</Link>
            <Link href={L("/contact")}>{f.linkContact}</Link>
          </nav>

          <nav className="ftr-col" aria-label={f.colInfo}>
            <h3>{f.colInfo}</h3>
            <Link href={L("/mentions-legales")}>{f.linkLegal}</Link>
            <Link href={L("/politique-confidentialite")}>{f.linkPrivacy}</Link>
          </nav>
        </div>

        <div className="ftr-bottom">
          <div className="container ftr-bottom-inner">
            <span>© {new Date().getFullYear()} STATIM MANAGEMENT — {f.rights}</span>
            <CookieSettingsLink label={d.cookies.manage} className="ftr-cookie" />
            <span className="ftr-labels">{f.labels}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
