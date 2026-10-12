// Pages locales (SEO local) — bilingues (fr / en).
// Pour ajouter une ville : ajouter son slug à CITY_SLUGS, ses coordonnées à
// CITY_GEO, et une entrée dans CITIES.fr et CITIES.en. La route, le sitemap et
// le maillage du footer se mettent à jour automatiquement.

export const CITY_SLUGS = ["montpellier"];

export const CITY_GEO = {
  montpellier: {
    lat: 43.610769,
    lng: 3.876716,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Montpellier", en: "https://en.wikipedia.org/wiki/Montpellier" },
  },
};

const CITIES_FR = {
  montpellier: {
    name: "Montpellier",
    region: "Hérault (34) · Occitanie",
    metaTitle: "DRH externalisé à Montpellier",
    metaDesc:
      "DRH externalisé et conseil RH à Montpellier et dans l'Hérault. STATIM MANAGEMENT accompagne les PME de la métropole sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Montpellier",
    title: "DRH externalisé à Montpellier",
    lead:
      "Vous dirigez une PME à Montpellier ou dans l'Hérault ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Septième ville de France et métropole en forte croissance, Montpellier concentre un tissu dense de PME et d'ETI dans la santé, le numérique, l'agroalimentaire et le tourisme. Beaucoup atteignent une taille où la fonction RH devient stratégique, sans pour autant justifier le recrutement d'un DRH à temps plein.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Montpellier et sa région. Vous bénéficiez d'une direction des ressources humaines expérimentée, dimensionnée à vos besoins réels, sans le coût d'un poste permanent.",
    ],
    servicesTitle: "Nos services RH à Montpellier",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Montpellier et de l'Hérault :",
    whyTitle: "Pourquoi un DRH externalisé à Montpellier ?",
    why: [
      "Une intervention de proximité sur Montpellier et sa métropole, sur site ou à distance.",
      "Une connaissance des enjeux du bassin d'emploi héraultais et de ses secteurs clés.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Santé & biotech", p: "Un pôle majeur autour du CHU, de la recherche et des medtech, aux besoins RH exigeants." },
      { h: "Numérique & French Tech", p: "Un écosystème tech dynamique, où la croissance des équipes doit être structurée." },
      { h: "Agroalimentaire & viticulture", p: "Des filières ancrées dans le territoire, entre saisonnalité et transmission." },
      { h: "Tourisme & commerce", p: "Des organisations à forte saisonnalité, où la gestion RH est un levier clé." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de Montpellier Méditerranée Métropole et, au-delà, de tout le département de l'Hérault et de la région Occitanie.",
    nearbyIntro: "Nous intervenons également à",
    nearby: [
      "Lattes",
      "Castelnau-le-Lez",
      "Pérols",
      "Saint-Jean-de-Védas",
      "Jacou",
      "Mauguio",
      "Lunel",
      "Sète",
      "Nîmes",
      "Béziers",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Montpellier ?", "Oui. Nous accompagnons les PME sur Montpellier et toute la métropole, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous dans l'Hérault ?", "Des PME et ETI de tous secteurs — santé, numérique, agroalimentaire, tourisme, industrie — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Montpellier ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Montpellier, Hérault & Occitanie"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Montpellier",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },
};

const CITIES_EN = {
  montpellier: {
    name: "Montpellier",
    region: "Hérault (34) · Occitanie",
    metaTitle: "Outsourced HR Director in Montpellier",
    metaDesc:
      "Outsourced HR Director and HR advisory in Montpellier and the Hérault. STATIM MANAGEMENT supports SMEs across the metropolitan area on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Montpellier",
    title: "Outsourced HR Director in Montpellier",
    lead:
      "Running an SME in Montpellier or the Hérault? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "France's seventh-largest city and a fast-growing metropolis, Montpellier is home to a dense network of SMEs and mid-caps in healthcare, tech, agri-food and tourism. Many reach a size where HR becomes strategic, without yet justifying a full-time HR Director.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Montpellier and its region. You get experienced HR leadership, scaled to your real needs, without the cost of a permanent hire.",
    ],
    servicesTitle: "Our HR services in Montpellier",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Montpellier and the Hérault:",
    whyTitle: "Why an outsourced HR Director in Montpellier?",
    why: [
      "Local support across Montpellier and its metropolitan area, on-site or remotely.",
      "Knowledge of the Hérault employment market and its key sectors.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Healthcare & biotech", p: "A major hub around the university hospital, research and medtech, with demanding HR needs." },
      { h: "Tech & French Tech", p: "A dynamic tech ecosystem where team growth must be properly structured." },
      { h: "Agri-food & wine", p: "Industries rooted in the territory, between seasonality and succession." },
      { h: "Tourism & retail", p: "Highly seasonal organisations where HR management is a key lever." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Montpellier Méditerranée Métropole and, beyond, throughout the Hérault department and the Occitanie region.",
    nearbyIntro: "We also work in",
    nearby: [
      "Lattes",
      "Castelnau-le-Lez",
      "Pérols",
      "Saint-Jean-de-Védas",
      "Jacou",
      "Mauguio",
      "Lunel",
      "Sète",
      "Nîmes",
      "Béziers",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Montpellier?", "Yes. We support SMEs across Montpellier and the whole metropolitan area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in the Hérault?", "SMEs and mid-caps in every sector — healthcare, tech, agri-food, tourism, industry — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Montpellier cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Montpellier, Hérault & Occitanie"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Montpellier",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },
};

export const CITIES = { fr: CITIES_FR, en: CITIES_EN };

export function getCity(lang, slug) {
  return (CITIES[lang] || CITIES.fr)[slug];
}
