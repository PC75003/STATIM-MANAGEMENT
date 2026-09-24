"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDict, href } from "@/lib/i18n";
import "./cookie.css";

const KEY = "statim-consent";
const MAX_AGE_DAYS = 182; // CNIL : redemander le consentement au bout de ~6 mois.

function readConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    if (!v || !v.date || !v.choice) return null;
    const ageDays = (Date.now() - new Date(v.date).getTime()) / 86400000;
    if (ageDays > MAX_AGE_DAYS) return null;
    return v.choice; // "granted" | "denied"
  } catch {
    return null;
  }
}

// Diffuse le choix. Point d'extension : charger ici la mesure d'audience
// (Google Analytics, Matomo…) UNIQUEMENT si choice === "granted".
function applyConsent(choice) {
  if (typeof window === "undefined") return;
  window.__statimConsent = choice;
  window.dispatchEvent(new CustomEvent("statim:consent", { detail: choice }));
}

export default function CookieConsent({ lang = "fr" }) {
  const c = getDict(lang).cookies;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) applyConsent(existing);
    else setOpen(true);

    const onOpen = () => setOpen(true);
    window.addEventListener("statim:open-consent", onOpen);
    return () => window.removeEventListener("statim:open-consent", onOpen);
  }, []);

  const choose = (choice) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
    } catch {
      /* stockage indisponible (navigation privée) : on applique quand même le choix pour la session */
    }
    applyConsent(choice);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-label={c.aria} aria-live="polite">
      <div className="cookie-inner">
        <div className="cookie-text">
          <strong>{c.title}</strong>
          <p>
            {c.message}{" "}
            <Link href={href(lang, "/politique-confidentialite")}>{c.privacy}</Link>
          </p>
        </div>
        <div className="cookie-actions">
          <button type="button" className="btn btn-ghost" onClick={() => choose("denied")}>
            {c.refuse}
          </button>
          <button type="button" className="btn btn-accent" onClick={() => choose("granted")}>
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
