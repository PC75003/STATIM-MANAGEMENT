import Link from "next/link";
import Image from "next/image";
import { getDict, href } from "@/lib/i18n";
import "./page.css";

export default function PageHero({ lang = "fr", eyebrow, title, lead, breadcrumb, bgImage }) {
  const d = getDict(lang);
  return (
    <section className="phero">
      {bgImage && (
        <div className="phero-bg" aria-hidden="true">
          <Image src={bgImage} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
      )}
      <div className="container phero-inner">
        {breadcrumb && (
          <nav className="crumb" aria-label={d.common.breadcrumb}>
            <Link href={href(lang, "/")}>{d.common.home}</Link>
            {breadcrumb.map((b, i) => (
              <span key={i}>
                <span className="crumb-sep" aria-hidden="true">/</span>
                {b.href ? <Link href={b.href}>{b.label}</Link> : <span aria-current="page">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="phero-lead">{lead}</p>}
      </div>
    </section>
  );
}
