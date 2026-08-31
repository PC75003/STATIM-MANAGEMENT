# Site STATIM MANAGEMENT — Next.js

Refonte complète du site de STATIM MANAGEMENT, cabinet de conseil en ressources humaines.
Site optimisé SEO, orienté conversion, fidèle à la charte graphique officielle
(#0A5254 / #4AC4DE, Raleway + Poppins).

---

## 1. Stack technique

- **Next.js 14** (App Router), rendu majoritairement statique
- **Polices auto-hébergées** (Raleway / Poppins via `@fontsource`) — aucun appel externe, build reproductible
- **Images** optimisées en WebP (toutes < 160 Ko)
- **Zéro dépendance lourde** — React + Next uniquement
- First Load JS : ~94–99 Ko selon les pages

## 2. Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
# ou en production locale :
npm run build && npm start
```

## 3. Arborescence des pages

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/a-propos` | Qui sommes-nous |
| `/references` | Nos références |
| `/solutions-rh` | Hub des solutions RH |
| `/drh-externalisee` | DRH externalisée |
| `/audit-rh` | Audit RH |
| `/conseil-rh` | Conseil RH |
| `/entretiens-professionnels` | Entretiens de parcours professionnel |
| `/recrutement` | Recrutement |
| `/coaching` | Coaching |
| `/blog` | Blog RH (liste) |
| `/blog/[slug]` | Article de blog (3 articles de démonstration) |
| `/contact` | Contact (formulaire, sans carte) |
| `/mentions-legales` | Mentions légales (noindex) |
| `/politique-confidentialite` | Politique de confidentialité (noindex) |
| `/sitemap.xml` | Plan du site (généré) |
| `/robots.txt` | Robots (généré) |
| 404 | Page personnalisée |

## 4. SEO intégré

- Balises `title` et `meta description` uniques par page
- Un seul `H1` par page, hiérarchie Hn correcte
- Données structurées Schema.org : `ProfessionalService`, `Service`, `FAQPage`, `Article`, `ContactPage`
- Open Graph + Twitter Card
- URLs propres et lisibles
- `sitemap.xml` et `robots.txt` générés automatiquement
- Maillage interne (hub Solutions RH ↔ pages services ↔ contact)
- Attributs `alt` sur les images, `lazy loading` natif
- Mots-clés ciblés (sans ville, intervention nationale) : DRH temps partagé, DRH externalisé,
  consultant RH, structuration RH PME, audit RH, entretiens professionnels

## 5. Formulaire de contact — à finaliser

Le formulaire (`/contact`) envoie vers l'API `app/api/contact/route.js`.
**Aujourd'hui, la demande est journalisée** (pas encore d'email réel).

Pour activer l'envoi vers `contact@statim-management.fr` :

1. Créer un compte sur [Resend](https://resend.com) (gratuit pour un faible volume).
2. `npm install resend`
3. Dans Vercel → Settings → Environment Variables, ajouter `RESEND_API_KEY`.
4. Dans `app/api/contact/route.js`, décommenter le bloc Resend.

Tant que ce n'est pas fait, un repli automatique ouvre le client mail du visiteur.

## 6. Déploiement sur Vercel

1. Pousser ce dossier sur un dépôt Git (GitHub, GitLab ou Bitbucket).
2. Sur [vercel.com](https://vercel.com) → New Project → importer le dépôt.
3. Framework détecté automatiquement : **Next.js**. Aucune configuration à modifier.
4. Cliquer sur **Deploy**.
5. Brancher le domaine : Project → Settings → Domains → ajouter `www.statim-management.fr`
   et `statim-management.fr`.
6. Chez votre registrar (OVH), pointer les DNS vers Vercel :
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
   - Le certificat SSL est automatique (Let's Encrypt).

## 7. Checklist post-lancement SEO

- [ ] Vérifier le domaine dans **Google Search Console**.
- [ ] Soumettre `https://www.statim-management.fr/sitemap.xml`.
- [ ] Vérifier l'indexation (`site:statim-management.fr`).
- [ ] Mettre en place une redirection 301 des anciennes URL WordPress vers les nouvelles.
- [ ] Installer GA4 ou Matomo (avec bandeau de consentement CNIL).
- [ ] Vérifier le score Lighthouse (cible > 90 sur tous les critères).
- [ ] Demander quelques avis Google et backlinks (partenaires, AFCODEV).

## 8. À compléter avec vos éléments réels

- **Témoignages** : les 3 actuels sont des placeholders signalés comme tels.
- **Logos clients** : MAGNITUDE, ACOME, PRONAL, PIRTEK affichés en texte — remplacer par les
  fichiers image, plus les logos repris de l'ancien site.
- **Mentions légales** : compléter forme juridique, capital, SIRET, TVA, RCS.
- **Articles de blog** : 3 articles de démonstration à enrichir dans la durée.
- **Photos** : 6 visuels Adobe Stock réutilisés ; remplaçables dans `public/images/`.

## 9. Intégrations préparées (à activer)

Bandeau cookies CNIL, GA4 / GTM, Cal.com (prise de RDV), Search Console : emplacements
prévus. À brancher selon vos choix (voir point 7).

---

## Révision — cas clients réels

Les cas d'usage de la page d'accueil et de la page Nos références utilisent désormais les
**deux cas clients réels** fournis (PME industrielle / société de services), anonymisés par
secteur d'activité, au format Situation / Action menée / Résultat obtenu.
Source unique : `lib/cases.js` (partagée entre les deux pages).
