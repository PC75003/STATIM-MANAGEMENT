import { getDict } from "@/lib/i18n";
import "./approach.css";

// Icône linéaire (dégradé charte deep → cyan), décorative.
function ApproachIcon({ id, children }) {
  return (
    <svg className="approach-svg" viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A5254" />
          <stop offset="1" stopColor="#4AC4DE" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const APPROACH_ICONS = {
  budget: (
    <ApproachIcon id="ap-budget">
      <path d="M12 4v16M8 21h8" />
      <path d="M6 8l12-2.5M6 8l-3 5.5a3 3 0 0 0 6 0L6 8ZM18 5.5l-3 5.5a3 3 0 0 0 6 0l-3-5.5Z" />
    </ApproachIcon>
  ),
  capital: (
    <ApproachIcon id="ap-capital">
      <circle cx="12" cy="9" r="5.2" />
      <path d="M12 6.4l1 2 2.2.3-1.6 1.55.38 2.2L12 11.4l-1.96 1.05.38-2.2L8.8 8.7l2.2-.3 1-2Z" />
      <path d="M8.4 13.3 6.8 21l5.2-2.6L17.2 21l-1.6-7.7" />
    </ApproachIcon>
  ),
  coconstruct: (
    <ApproachIcon id="ap-coconstruct">
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 19.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
    </ApproachIcon>
  ),
  flex: (
    <ApproachIcon id="ap-flex">
      <path d="M12 3v18M2.5 12h19" />
      <path d="M12 3 9.2 5.8M12 3l2.8 2.8M12 21l-2.8-2.8M12 21l2.8-2.8M2.5 12l2.8-2.8M2.5 12l2.8 2.8M21.5 12l-2.8-2.8M21.5 12l-2.8 2.8" />
    </ApproachIcon>
  ),
  suivi: (
    <ApproachIcon id="ap-suivi">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </ApproachIcon>
  ),
};

export default function ApproachSection({ lang = "fr" }) {
  const d = getDict(lang).home;
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>{d.approachEyebrow}</p>
          <h2>{d.approachTitle}</h2>
          <p>{d.approachLead}</p>
        </div>
        <ul className="approach-grid">
          {d.approach.map((a) => (
            <li className="approach-card" key={a.key}>
              <span className="approach-icon">{APPROACH_ICONS[a.key]}</span>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
