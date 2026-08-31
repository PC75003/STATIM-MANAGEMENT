import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const data = await request.json();
    const { nom, societe, email, tel, message, company } = data || {};

    // Anti-spam : si le honeypot est rempli, on ignore silencieusement.
    if (company) return NextResponse.json({ ok: true });

    if (!nom || !societe || !email || !message) {
      return NextResponse.json({ ok: false, error: "Champs requis manquants." }, { status: 400 });
    }

    const destinataire = "contact@statim-management.fr";

    // ----------------------------------------------------------------
    // ENVOI D'EMAIL — à brancher selon votre fournisseur.
    //
    // Option recommandée sur Vercel : Resend (https://resend.com).
    //   1. npm install resend
    //   2. Ajouter la variable d'environnement RESEND_API_KEY dans Vercel.
    //   3. Décommenter le bloc ci-dessous.
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Site STATIM <site@statim-management.fr>",
    //   to: destinataire,
    //   reply_to: email,
    //   subject: `Demande de diagnostic RH — ${nom}`,
    //   text: `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${tel || "—"}\n\n${message}`,
    // });
    // ----------------------------------------------------------------

    // Tant que le fournisseur n'est pas configuré, on journalise la demande.
    console.log("[CONTACT] Nouvelle demande pour", destinataire, { nom, societe, email, tel, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}
