// Configuration i18n — français (racine) + anglais (/en).
import { fr } from "./dictionaries/fr";
import { en } from "./dictionaries/en";

export const LOCALES = ["fr", "en"];
export const DEFAULT_LOCALE = "fr";

export const LOCALE_FLAG = { fr: "🇫🇷", en: "🇬🇧" };
export const LOCALE_LABEL = { fr: "Français", en: "English" };

export function isLocale(value) {
  return LOCALES.includes(value);
}

// Correspondance des slugs : canonique (FR, = nom de dossier) -> slug public anglais.
// Pages + articles de blog. Les slugs identiques dans les deux langues sont omis.
export const SLUG_EN = {
  "a-propos": "about",
  "solutions-rh": "hr-solutions",
  "drh-externalisee": "fractional-hr-director",
  "audit-rh": "hr-audit",
  "conseil-rh": "hr-advisory",
  "entretiens-professionnels": "career-development-reviews",
  recrutement: "recruitment",
  references: "clients",
  "mentions-legales": "legal-notice",
  "politique-confidentialite": "privacy-policy",
  // Articles de blog
  "externaliser-fonction-rh-pme": "why-outsource-hr-sme",
  "entretiens-professionnels-reforme-2026": "career-development-reviews-reform",
  "reussir-recrutement-talents": "recruiting-exceptional-talent",
};
const SLUG_TO_CANONICAL = Object.fromEntries(Object.entries(SLUG_EN).map(([fr, en]) => [en, fr]));

// Traduit chaque segment d'un chemin canonique vers l'anglais (ou l'inverse).
function mapSegments(path, table) {
  return path
    .split("/")
    .filter(Boolean)
    .map((seg) => table[seg] || seg)
    .join("/");
}

// Construit une URL publique localisée à partir d'un chemin canonique (racine FR).
// href("fr", "/a-propos") -> "/a-propos"   |   href("en", "/a-propos") -> "/en/about"
export function href(lang, path = "/") {
  if (lang === DEFAULT_LOCALE) return path;
  if (path === "/") return "/en";
  return `/en/${mapSegments(path, SLUG_EN)}`;
}

// Slug anglais public -> slug canonique (pour le routage interne / middleware).
export function toCanonicalSlugs(pathWithoutLangPrefix) {
  const inner = mapSegments(pathWithoutLangPrefix, SLUG_TO_CANONICAL);
  return inner ? `/${inner}` : "/";
}

// URL publique affichée -> chemin canonique racine FR (pour le sélecteur de langue).
export function toCanonicalPath(pathname) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return toCanonicalSlugs(pathname.slice(3));
  return pathname || "/";
}

const DICTS = { fr, en };
export function getDict(lang) {
  return DICTS[lang] || DICTS[DEFAULT_LOCALE];
}

// Alternances de langue (canonical + hreflang) pour un chemin canonique donné.
export function buildAlternates(lang, path = "/") {
  return {
    canonical: href(lang, path),
    languages: { fr: href("fr", path), en: href("en", path), "x-default": href("fr", path) },
  };
}
