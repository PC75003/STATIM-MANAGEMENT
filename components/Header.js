"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDict, href, toCanonicalPath, LOCALES, LOCALE_LABEL } from "@/lib/i18n";
import "./header.css";

// Drapeaux SVG (rendu fiable multi-OS, contrairement aux emojis 🇫🇷/🇬🇧 sur Windows).
function FRFlag() {
  return (
    <svg className="flag" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="3" height="2" fill="#fff" />
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  );
}
function GBFlag({ uid }) {
  return (
    <svg className="flag" viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id={`${uid}-a`}><path d="M0 0v30h60V0z" /></clipPath>
      <clipPath id={`${uid}-b`}><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath>
      <g clipPath={`url(#${uid}-a)`}>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath={`url(#${uid}-b)`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
function Flag({ code, uid }) {
  return code === "fr" ? <FRFlag /> : <GBFlag uid={uid} />;
}

// Sélecteur de langue : les deux drapeaux affichés directement, bascule sur la même page.
function LangFlags({ lang, canonical, label, size, onNavigate }) {
  return (
    <div className={`lang ${size === "lg" ? "lang-lg" : ""}`} role="group" aria-label={label}>
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={href(l, canonical)}
          hrefLang={l}
          className={`lang-flag-btn ${l === lang ? "active" : ""}`}
          aria-label={LOCALE_LABEL[l]}
          aria-current={l === lang ? "true" : undefined}
          title={LOCALE_LABEL[l]}
          onClick={onNavigate}
        >
          <Flag code={l} uid={`flag-${size || "d"}-${l}`} />
          {size === "lg" && <span className="lang-name">{LOCALE_LABEL[l]}</span>}
        </Link>
      ))}
    </div>
  );
}

export default function Header({ lang }) {
  const d = getDict(lang);
  const L = (p) => href(lang, p);
  const diagUrl = lang === "en" ? "/diagnostic-en.html" : "/diagnostic.html";
  const SOLUTIONS = d.home.services.map((s) => ({ href: L(`/${s.slug}`), label: s.title }));

  const pathname = usePathname() || "/";
  const canonical = toCanonicalPath(pathname);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`hdr ${scrolled ? "hdr-scrolled" : ""}`}>
      <a href="#contenu" className="skip-link">{d.nav.skip}</a>
      <div className="container hdr-inner">
        <Link href={L("/")} className="hdr-logo" aria-label={d.nav.logoAria}>
          <Image src="/images/logo-hr-management.png" alt="STATIM — HR Management" width={150} height={139} priority />
        </Link>

        <nav className="hdr-nav" aria-label={d.nav.main}>
          <Link href={L("/a-propos")}>{d.nav.about}</Link>
          <div
            className="hdr-drop"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button
              className="hdr-drop-btn"
              aria-expanded={solOpen}
              aria-haspopup="true"
              onClick={() => setSolOpen((v) => !v)}
            >
              {d.nav.solutions}
              <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
            </button>
            <div className={`hdr-menu ${solOpen ? "open" : ""}`} role="menu">
              {SOLUTIONS.map((s) => (
                <Link key={s.href} href={s.href} role="menuitem">{s.label}</Link>
              ))}
            </div>
          </div>
          <Link href={L("/references")}>{d.nav.references}</Link>
          <Link href={L("/blog")}>{d.nav.blog}</Link>
          <Link href={L("/contact")}>{d.nav.contact}</Link>
        </nav>

        <div className="hdr-actions">
          <LangFlags lang={lang} canonical={canonical} label={d.nav.langLabel} />
          <a href={diagUrl} className="btn btn-accent hdr-cta">{d.nav.cta}</a>
        </div>

        <button
          className="hdr-burger"
          aria-label={open ? d.nav.close : d.nav.open}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`hdr-mobile ${open ? "open" : ""}`}>
        <nav aria-label={d.nav.mobile}>
          <Link href={L("/a-propos")} onClick={() => setOpen(false)}>{d.nav.about}</Link>
          <Link href={L("/references")} onClick={() => setOpen(false)}>{d.nav.references}</Link>
          <span className="hdr-mobile-label">{d.nav.solutions}</span>
          {SOLUTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="indent" onClick={() => setOpen(false)}>{s.label}</Link>
          ))}
          <Link href={L("/blog")} onClick={() => setOpen(false)}>{d.nav.blog}</Link>
          <Link href={L("/contact")} onClick={() => setOpen(false)}>{d.nav.contact}</Link>
          <a href={diagUrl} className="btn btn-accent" onClick={() => setOpen(false)}>{d.nav.cta}</a>
          <div className="hdr-mobile-lang">
            <LangFlags lang={lang} canonical={canonical} label={d.nav.langLabel} size="lg" onNavigate={() => setOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
}
