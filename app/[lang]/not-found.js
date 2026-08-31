"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict, href } from "@/lib/i18n";
import "@/components/page.css";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
  const d = getDict(lang).notFound;

  return (
    <section className="phero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container phero-inner" style={{ textAlign: "center", marginInline: "auto" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>{d.eyebrow}</p>
        <h1>{d.title}</h1>
        <p className="phero-lead" style={{ marginInline: "auto" }}>{d.text}</p>
        <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", marginTop: "1.8rem", flexWrap: "wrap" }}>
          <Link href={href(lang, "/")} className="btn btn-accent">{d.home}</Link>
          <Link href={href(lang, "/solutions-rh")} className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}>{d.solutions}</Link>
        </div>
      </div>
    </section>
  );
}
