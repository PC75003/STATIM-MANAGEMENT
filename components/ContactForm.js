"use client";

import { useState } from "react";
import { getDict, href } from "@/lib/i18n";
import "./contact.css";

export default function ContactForm({ lang = "fr" }) {
  const d = getDict(lang);
  const t = d.contactForm;
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [form, setForm] = useState({ nom: "", societe: "", email: "", tel: "", message: "", company: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.nom || !form.societe || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    // Anti-spam : si le honeypot est rempli, on simule un succès sans rien envoyer.
    if (form.company) {
      setStatus("ok");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/pchevalier@statim-management.fr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nom: form.nom,
          Société: form.societe,
          Email: form.email,
          Téléphone: form.tel || "—",
          Message: form.message,
          _subject: t.mailSubject,
          _template: "table",
          _captcha: "false",
          _replyto: form.email,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ nom: "", societe: "", email: "", tel: "", message: "", company: "" });
    } catch {
      setStatus("senderror");
    }
  };

  if (status === "ok") {
    return (
      <div className="form-success" role="status">
        <h3>{t.successTitle}</h3>
        <p>{t.successText}</p>
      </div>
    );
  }

  return (
    <div className="form" aria-live="polite">
      <div className="field">
        <label htmlFor="nom">{t.nom} <span aria-hidden="true">*</span></label>
        <input id="nom" type="text" autoComplete="name" value={form.nom} onChange={update("nom")} required />
      </div>
      <div className="field">
        <label htmlFor="societe">{t.societe} <span aria-hidden="true">*</span></label>
        <input id="societe" type="text" autoComplete="organization" value={form.societe} onChange={update("societe")} required />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">{t.email} <span aria-hidden="true">*</span></label>
          <input id="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} required />
        </div>
        <div className="field">
          <label htmlFor="tel">{t.tel}</label>
          <input id="tel" type="tel" autoComplete="tel" value={form.tel} onChange={update("tel")} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">{t.message} <span aria-hidden="true">*</span></label>
        <textarea id="message" rows={5} value={form.message} onChange={update("message")} required />
      </div>
      {/* Honeypot anti-spam */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={update("company")}
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />
      {status === "error" && (
        <p className="form-error" role="alert">{t.errorRequired}</p>
      )}
      {status === "senderror" && (
        <p className="form-error" role="alert">{t.errorSend}</p>
      )}
      <button type="button" className="btn btn-primary form-submit" onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send}
      </button>
      <p className="form-legal">
        {t.legalBefore}
        <a href={href(lang, "/politique-confidentialite")}>{t.legalLink}</a>{t.legalAfter}
      </p>
    </div>
  );
}
