// Rend un texte en transformant « Pierre Chevalier » en lien LinkedIn cliquable.
// Fonctionne pour le FR et l'EN (le nom est identique dans les deux langues).
export const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/pierre-chevalier-drh-externalise/";
const FOUNDER_NAME = "Pierre Chevalier";

export default function FounderText({ children }) {
  const text = String(children);
  const idx = text.indexOf(FOUNDER_NAME);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href={FOUNDER_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pierre Chevalier sur LinkedIn (nouvel onglet)"
        style={{ color: "var(--c-deep)", textDecoration: "underline", textUnderlineOffset: "2px" }}
      >
        {FOUNDER_NAME}
      </a>
      {text.slice(idx + FOUNDER_NAME.length)}
    </>
  );
}
