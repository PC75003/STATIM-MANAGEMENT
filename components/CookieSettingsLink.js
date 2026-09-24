"use client";

// Lien « Gérer les cookies » (pied de page) : rouvre la bannière de consentement.
export default function CookieSettingsLink({ label, className }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("statim:open-consent"))}
    >
      {label}
    </button>
  );
}
