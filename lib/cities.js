// Pages locales (SEO local) — bilingues (fr / en).
// Pour ajouter une ville : ajouter son slug à CITY_SLUGS, ses coordonnées à
// CITY_GEO, et une entrée dans CITIES.fr et CITIES.en. La route, le sitemap et
// le maillage du footer se mettent à jour automatiquement.

export const CITY_SLUGS = [
  "montpellier",
  "nancy",
  "metz",
  "dijon",
  "angers",
  "clermont-ferrand",
  "annecy",
  "chambery",
];

export const CITY_GEO = {
  montpellier: {
    lat: 43.610769,
    lng: 3.876716,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Montpellier", en: "https://en.wikipedia.org/wiki/Montpellier" },
  },
  nancy: {
    lat: 48.692054,
    lng: 6.184417,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Nancy", en: "https://en.wikipedia.org/wiki/Nancy,_France" },
  },
  metz: {
    lat: 49.119309,
    lng: 6.175716,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Metz", en: "https://en.wikipedia.org/wiki/Metz" },
  },
  dijon: {
    lat: 47.321581,
    lng: 5.041480,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Dijon", en: "https://en.wikipedia.org/wiki/Dijon" },
  },
  angers: {
    lat: 47.478419,
    lng: -0.563166,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Angers", en: "https://en.wikipedia.org/wiki/Angers" },
  },
  "clermont-ferrand": {
    lat: 45.777222,
    lng: 3.087025,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Clermont-Ferrand", en: "https://en.wikipedia.org/wiki/Clermont-Ferrand" },
  },
  annecy: {
    lat: 45.899247,
    lng: 6.129384,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Annecy", en: "https://en.wikipedia.org/wiki/Annecy" },
  },
  chambery: {
    lat: 45.564601,
    lng: 5.917781,
    wikipedia: { fr: "https://fr.wikipedia.org/wiki/Chamb%C3%A9ry", en: "https://en.wikipedia.org/wiki/Chamb%C3%A9ry" },
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
    nearby: ["Lattes", "Castelnau-le-Lez", "Pérols", "Saint-Jean-de-Védas", "Jacou", "Mauguio", "Lunel", "Sète", "Nîmes", "Béziers"],
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

  nancy: {
    name: "Nancy",
    region: "Meurthe-et-Moselle (54) · Grand Est",
    metaTitle: "DRH externalisé à Nancy",
    metaDesc:
      "DRH externalisé et conseil RH à Nancy et en Meurthe-et-Moselle. STATIM MANAGEMENT accompagne les PME et ETI du Grand Est sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Nancy",
    title: "DRH externalisé à Nancy",
    lead:
      "Vous dirigez une PME à Nancy ou en Meurthe-et-Moselle ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Capitale historique des Ducs de Lorraine, Nancy est un pôle universitaire, hospitalier et industriel majeur du Grand Est. Son tissu de PME et d'ETI — métallurgie, matériaux, santé, ingénierie — fait face à des enjeux RH exigeants, souvent sans direction des ressources humaines à temps plein.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Nancy et son agglomération. Vous bénéficiez d'une expertise RH de haut niveau, dimensionnée à vos besoins, sans le coût d'un recrutement permanent.",
    ],
    servicesTitle: "Nos services RH à Nancy",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Nancy et de Meurthe-et-Moselle :",
    whyTitle: "Pourquoi un DRH externalisé à Nancy ?",
    why: [
      "Une intervention de proximité sur Nancy et le Grand Nancy, sur site ou à distance.",
      "Une connaissance des enjeux du bassin d'emploi lorrain et de ses secteurs industriels.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Industrie & métallurgie", p: "Un socle industriel lorrain historique, aux besoins RH lourds : paie, conventions, relations sociales." },
      { h: "Santé & biotech", p: "Un pôle hospitalo-universitaire (CHRU) et de recherche, aux compétences très spécialisées." },
      { h: "Matériaux & ingénierie", p: "Pôles de compétitivité et bureaux d'études, où structurer la croissance des équipes." },
      { h: "Numérique & services", p: "Un écosystème tertiaire en développement autour de l'université et des startups." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de la Métropole du Grand Nancy et, au-delà, de toute la Meurthe-et-Moselle et du sud de la Lorraine.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Vandœuvre-lès-Nancy", "Laxou", "Maxéville", "Toul", "Lunéville", "Pont-à-Mousson", "Épinal", "Metz"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Nancy ?", "Oui. Nous accompagnons les PME sur Nancy et tout le Grand Nancy, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Meurthe-et-Moselle ?", "Des PME et ETI de tous secteurs — industrie, santé, matériaux, numérique, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Nancy ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Nancy, Meurthe-et-Moselle & Grand Est"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Nancy",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  metz: {
    name: "Metz",
    region: "Moselle (57) · Grand Est",
    metaTitle: "DRH externalisé à Metz",
    metaDesc:
      "DRH externalisé et conseil RH à Metz et en Moselle. STATIM MANAGEMENT accompagne les PME et ETI du nord lorrain et du transfrontalier sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Metz",
    title: "DRH externalisé à Metz",
    lead:
      "Vous dirigez une PME à Metz ou en Moselle ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Carrefour européen aux portes du Luxembourg et de l'Allemagne, Metz conjugue logistique, industrie automobile, numérique et économie transfrontalière. Ses PME et ETI doivent attirer et fidéliser des talents sur un bassin d'emploi sous forte pression frontalière.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Metz et son agglomération, pour structurer votre fonction RH et sécuriser vos recrutements, sans le coût d'un poste permanent.",
    ],
    servicesTitle: "Nos services RH à Metz",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Metz et de Moselle :",
    whyTitle: "Pourquoi un DRH externalisé à Metz ?",
    why: [
      "Une intervention de proximité sur Metz et Metz Métropole, sur site ou à distance.",
      "Une connaissance des enjeux frontaliers (Luxembourg) et de la fidélisation des talents.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Logistique & supply chain", p: "Une position de hub européen, avec des besoins RH saisonniers et de forte volumétrie." },
      { h: "Automobile & équipementiers", p: "Un tissu industriel structuré, où conformité et dialogue social sont clés." },
      { h: "Numérique & technopôle", p: "Le Technopôle de Metz et un écosystème tech en croissance." },
      { h: "Économie transfrontalière", p: "La concurrence du Luxembourg sur les salaires rend la fidélisation stratégique." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de Metz Métropole et, au-delà, de toute la Moselle et du sillon lorrain.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Woippy", "Montigny-lès-Metz", "Thionville", "Hagondange", "Sarreguemines", "Forbach", "Nancy"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Metz ?", "Oui. Nous accompagnons les PME sur Metz et toute la métropole, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Moselle ?", "Des PME et ETI de tous secteurs — logistique, automobile, industrie, numérique, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Metz ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Metz, Moselle & Grand Est"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Metz",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  dijon: {
    name: "Dijon",
    region: "Côte-d'Or (21) · Bourgogne-Franche-Comté",
    metaTitle: "DRH externalisé à Dijon",
    metaDesc:
      "DRH externalisé et conseil RH à Dijon et en Côte-d'Or. STATIM MANAGEMENT accompagne les PME et ETI de Bourgogne-Franche-Comté sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Dijon",
    title: "DRH externalisé à Dijon",
    lead:
      "Vous dirigez une PME à Dijon ou en Côte-d'Or ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Métropole gastronomique et universitaire, Dijon s'appuie sur un tissu dynamique d'agroalimentaire, de santé, de pharmacie et de viticulture. Beaucoup de ses PME et ETI atteignent une taille où la fonction RH devient stratégique, sans justifier un DRH à temps plein.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Dijon et son agglomération, avec une expertise RH dimensionnée à vos besoins réels.",
    ],
    servicesTitle: "Nos services RH à Dijon",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Dijon et de Côte-d'Or :",
    whyTitle: "Pourquoi un DRH externalisé à Dijon ?",
    why: [
      "Une intervention de proximité sur Dijon et Dijon Métropole, sur site ou à distance.",
      "Une connaissance des enjeux du bassin bourguignon et de ses filières.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Agroalimentaire & gastronomie", p: "Un pôle d'excellence (Cité de la gastronomie), entre production et saisonnalité." },
      { h: "Santé & pharmacie", p: "Un bassin santé et pharmaceutique dense, aux métiers réglementés." },
      { h: "Viticulture & négoce", p: "La filière des vins de Bourgogne, entre savoir-faire et transmission." },
      { h: "Mécanique & industrie", p: "Des PME industrielles régionales aux besoins RH structurants." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de Dijon Métropole et, au-delà, de toute la Côte-d'Or et de la Bourgogne.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Chenôve", "Talant", "Quetigny", "Beaune", "Chalon-sur-Saône", "Dole", "Auxonne"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Dijon ?", "Oui. Nous accompagnons les PME sur Dijon et toute la métropole, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Côte-d'Or ?", "Des PME et ETI de tous secteurs — agroalimentaire, santé, viticulture, industrie, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Dijon ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Dijon, Côte-d'Or & Bourgogne"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Dijon",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  angers: {
    name: "Angers",
    region: "Maine-et-Loire (49) · Pays de la Loire",
    metaTitle: "DRH externalisé à Angers",
    metaDesc:
      "DRH externalisé et conseil RH à Angers et en Maine-et-Loire. STATIM MANAGEMENT accompagne les PME et ETI des Pays de la Loire sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Angers",
    title: "DRH externalisé à Angers",
    lead:
      "Vous dirigez une PME à Angers ou en Maine-et-Loire ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Régulièrement classée parmi les villes les plus attractives de France, Angers conjugue un pôle végétal de rang mondial (Végépolys Valley), l'électronique, le numérique (French Tech) et un cadre de vie qui attire les talents. Son tissu de PME en croissance a des besoins RH croissants.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Angers et son agglomération, pour piloter votre fonction RH sans le coût d'un poste à temps plein.",
    ],
    servicesTitle: "Nos services RH à Angers",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises d'Angers et de Maine-et-Loire :",
    whyTitle: "Pourquoi un DRH externalisé à Angers ?",
    why: [
      "Une intervention de proximité sur Angers et Angers Loire Métropole, sur site ou à distance.",
      "Une connaissance des enjeux du bassin ligérien et de ses filières d'excellence.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Végétal & agroalimentaire", p: "Le pôle Végépolys Valley, filière d'excellence du végétal spécialisé." },
      { h: "Électronique & numérique", p: "Un écosystème industriel et French Tech en forte croissance." },
      { h: "Santé & services", p: "CHU, mutuelles et services qualifiés, aux compétences recherchées." },
      { h: "Tourisme & culture", p: "Une économie résidentielle et touristique à forte saisonnalité." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises d'Angers Loire Métropole et, au-delà, de tout le Maine-et-Loire et des Pays de la Loire.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Avrillé", "Trélazé", "Beaucouzé", "Les Ponts-de-Cé", "Cholet", "Saumur"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Angers ?", "Oui. Nous accompagnons les PME sur Angers et toute la métropole, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Maine-et-Loire ?", "Des PME et ETI de tous secteurs — végétal, électronique, numérique, santé, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Angers ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Angers, Maine-et-Loire & Pays de la Loire"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Angers",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  "clermont-ferrand": {
    name: "Clermont-Ferrand",
    region: "Puy-de-Dôme (63) · Auvergne-Rhône-Alpes",
    metaTitle: "DRH externalisé à Clermont-Ferrand",
    metaDesc:
      "DRH externalisé et conseil RH à Clermont-Ferrand et dans le Puy-de-Dôme. STATIM MANAGEMENT accompagne les PME et ETI d'Auvergne sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Clermont-Ferrand",
    title: "DRH externalisé à Clermont-Ferrand",
    lead:
      "Vous dirigez une PME à Clermont-Ferrand ou dans le Puy-de-Dôme ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Plus grand bassin d'emploi de sa catégorie, Clermont-Ferrand est le berceau de Michelin et un territoire industriel, de santé et de recherche en pleine montée en gamme. Ses PME et ETI, souvent sous-traitantes ou en forte croissance, ont des besoins RH exigeants.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Clermont-Ferrand et son agglomération, avec une expertise RH dimensionnée à vos besoins.",
    ],
    servicesTitle: "Nos services RH à Clermont-Ferrand",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Clermont-Ferrand et du Puy-de-Dôme :",
    whyTitle: "Pourquoi un DRH externalisé à Clermont-Ferrand ?",
    why: [
      "Une intervention de proximité sur Clermont-Ferrand et sa métropole, sur site ou à distance.",
      "Une connaissance des enjeux du bassin auvergnat et de ses industries.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Industrie & pneumatique", p: "Un écosystème industriel dense autour de Michelin et de ses sous-traitants." },
      { h: "Santé & biotech", p: "CHU, recherche et biotech, aux métiers spécialisés et réglementés." },
      { h: "Numérique & ingénierie", p: "Un tertiaire supérieur et des bureaux d'études en développement." },
      { h: "Agroalimentaire", p: "Des filières auvergnates ancrées, entre terroir et industrie." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de Clermont Auvergne Métropole et, au-delà, de tout le Puy-de-Dôme et de l'Auvergne.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Aubière", "Cournon-d'Auvergne", "Riom", "Issoire", "Vichy", "Thiers"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Clermont-Ferrand ?", "Oui. Nous accompagnons les PME sur Clermont-Ferrand et toute la métropole, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous dans le Puy-de-Dôme ?", "Des PME et ETI de tous secteurs — industrie, santé, numérique, agroalimentaire, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Clermont-Ferrand ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Clermont-Ferrand, Puy-de-Dôme & Auvergne"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Clermont-Ferrand",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  annecy: {
    name: "Annecy",
    region: "Haute-Savoie (74) · Auvergne-Rhône-Alpes",
    metaTitle: "DRH externalisé à Annecy",
    metaDesc:
      "DRH externalisé et conseil RH à Annecy et en Haute-Savoie. STATIM MANAGEMENT accompagne les PME et ETI du bassin annécien et de la vallée de l'Arve sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Annecy",
    title: "DRH externalisé à Annecy",
    lead:
      "Vous dirigez une PME à Annecy ou en Haute-Savoie ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Portée par l'une des plus fortes dynamiques d'emploi de France, Annecy conjugue mécanique de précision, industrie du sport et de l'outdoor, numérique et tourisme. À proximité de Genève, la fidélisation des talents y est un enjeu quotidien pour les PME.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Annecy et son bassin, pour structurer votre fonction RH et sécuriser vos recrutements, sans le coût d'un poste permanent.",
    ],
    servicesTitle: "Nos services RH à Annecy",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises d'Annecy et de Haute-Savoie :",
    whyTitle: "Pourquoi un DRH externalisé à Annecy ?",
    why: [
      "Une intervention de proximité sur Annecy et le Grand Annecy, sur site ou à distance.",
      "Une connaissance des enjeux frontaliers (Genève) et de la fidélisation des talents.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Mécanique de précision", p: "Le décolletage et la mécanique de la vallée de l'Arve, savoir-faire mondial." },
      { h: "Sport & outdoor", p: "Un pôle d'industries du sport et de l'outdoor (sièges et PME de marques)." },
      { h: "Numérique & image", p: "Un écosystème numérique et d'animation de rayonnement international." },
      { h: "Tourisme & services", p: "Une économie touristique premium à forte saisonnalité." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises du Grand Annecy et, au-delà, de toute la Haute-Savoie et de la vallée de l'Arve.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["Annecy-le-Vieux", "Seynod", "Cran-Gevrier", "Rumilly", "La Roche-sur-Foron", "Cluses", "Genève"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Annecy ?", "Oui. Nous accompagnons les PME sur Annecy et tout le Grand Annecy, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Haute-Savoie ?", "Des PME et ETI de tous secteurs — industrie, mécanique de précision, sport, numérique, tourisme — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Annecy ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Annecy, Haute-Savoie & vallée de l'Arve"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Annecy",
    ctaText: "30 minutes pour identifier vos priorités. Sans engagement.",
  },

  chambery: {
    name: "Chambéry",
    region: "Savoie (73) · Auvergne-Rhône-Alpes",
    metaTitle: "DRH externalisé à Chambéry",
    metaDesc:
      "DRH externalisé et conseil RH à Chambéry et en Savoie. STATIM MANAGEMENT accompagne les PME et ETI du sillon alpin sur tous leurs enjeux RH. Pré-diagnostic offert.",
    eyebrow: "Ressources humaines · Chambéry",
    title: "DRH externalisé à Chambéry",
    lead:
      "Vous dirigez une PME à Chambéry ou en Savoie ? STATIM MANAGEMENT structure, sécurise et pilote votre fonction RH — sur site ou à distance.",
    intro: [
      "Au cœur du sillon alpin, Chambéry s'appuie sur Savoie Technolac et l'INES (énergie solaire), une industrie diversifiée, une économie de montagne et un tertiaire de recherche. Ses PME et ETI doivent structurer leur croissance sur un territoire attractif mais tendu en recrutement.",
      "STATIM MANAGEMENT met à votre disposition un DRH externalisé à temps partagé, qui intervient directement sur Chambéry et son agglomération, avec une expertise RH dimensionnée à vos besoins réels.",
    ],
    servicesTitle: "Nos services RH à Chambéry",
    servicesLead:
      "Toute l'expertise RH de STATIM MANAGEMENT, disponible pour les entreprises de Chambéry et de Savoie :",
    whyTitle: "Pourquoi un DRH externalisé à Chambéry ?",
    why: [
      "Une intervention de proximité sur Chambéry et Grand Chambéry, sur site ou à distance.",
      "Une connaissance des enjeux du sillon alpin et de ses PME industrielles.",
      "Une expertise modulable, de quelques jours par mois à un accompagnement soutenu.",
      "Une réponse rapide aux besoins de structuration, de conformité et de recrutement.",
      "Un coût maîtrisé, sans recruter un DRH à temps plein.",
    ],
    sectorsTitle: "Des secteurs que nous connaissons",
    sectors: [
      { h: "Énergie & cleantech", p: "Savoie Technolac et l'INES, pôle national de l'énergie solaire." },
      { h: "Industrie & montagne", p: "Industrie diversifiée et équipementiers de la montagne et de l'outdoor." },
      { h: "Numérique & recherche", p: "Un tertiaire supérieur adossé à l'université et aux laboratoires." },
      { h: "Logistique & services", p: "Une position stratégique sur l'axe alpin, entre Lyon et l'Italie." },
    ],
    territoryTitle: "Un accompagnement ancré dans le territoire",
    territoryText:
      "Nous accompagnons les entreprises de Grand Chambéry et, au-delà, de toute la Savoie et du sillon alpin.",
    nearbyIntro: "Nous intervenons également à",
    nearby: ["La Motte-Servolex", "Aix-les-Bains", "Montmélian", "Albertville", "Annecy", "Grenoble"],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Intervenez-vous directement à Chambéry ?", "Oui. Nous accompagnons les PME sur Chambéry et tout Grand Chambéry, sur site ou à distance, par journée ou demi-journée selon vos besoins."],
      ["Quelles entreprises accompagnez-vous en Savoie ?", "Des PME et ETI de tous secteurs — énergie, industrie, numérique, logistique, services — à chaque étape : création, croissance, réorganisation ou transformation."],
      ["Combien coûte un DRH externalisé à Chambéry ?", "Le volume d'intervention est défini après un pré-diagnostic offert, puis évolue avec vos besoins : de quelques jours par mois à un accompagnement plus soutenu."],
      ["Comment démarrer ?", "Par un pré-diagnostic RH offert de 30 minutes, pour identifier vos priorités et voir comment nous pouvons vous aider. Sans engagement."],
    ],
    asideTitle: "En bref",
    asideList: [
      ["Zone", "Chambéry, Savoie & sillon alpin"],
      ["Format", "Sur site ou à distance"],
      ["Entreprises", "PME et ETI, tous secteurs"],
      ["Premier contact", "Pré-diagnostic offert"],
    ],
    ctaTitle: "Parlons de vos enjeux RH à Chambéry",
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
    nearby: ["Lattes", "Castelnau-le-Lez", "Pérols", "Saint-Jean-de-Védas", "Jacou", "Mauguio", "Lunel", "Sète", "Nîmes", "Béziers"],
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

  nancy: {
    name: "Nancy",
    region: "Meurthe-et-Moselle (54) · Grand Est",
    metaTitle: "Outsourced HR Director in Nancy",
    metaDesc:
      "Outsourced HR Director and HR advisory in Nancy and Meurthe-et-Moselle. STATIM MANAGEMENT supports SMEs and mid-caps across the Grand Est on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Nancy",
    title: "Outsourced HR Director in Nancy",
    lead:
      "Running an SME in Nancy or Meurthe-et-Moselle? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "The historic capital of the Dukes of Lorraine, Nancy is a major university, hospital and industrial hub of the Grand Est. Its network of SMEs and mid-caps — metalworking, materials, healthcare, engineering — faces demanding HR challenges, often without a full-time HR Director.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Nancy and its metropolitan area. You get high-level HR expertise, scaled to your needs, without the cost of a permanent hire.",
    ],
    servicesTitle: "Our HR services in Nancy",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Nancy and Meurthe-et-Moselle:",
    whyTitle: "Why an outsourced HR Director in Nancy?",
    why: [
      "Local support across Nancy and the Grand Nancy area, on-site or remotely.",
      "Knowledge of the Lorraine employment market and its industrial sectors.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Industry & metalworking", p: "A long-standing Lorraine industrial base, with heavy HR needs: payroll, agreements, employee relations." },
      { h: "Healthcare & biotech", p: "A teaching-hospital and research hub (CHRU) with highly specialised skills." },
      { h: "Materials & engineering", p: "Competitiveness clusters and design offices, where team growth must be structured." },
      { h: "Tech & services", p: "A growing service ecosystem around the university and start-ups." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across the Métropole du Grand Nancy and, beyond, throughout Meurthe-et-Moselle and southern Lorraine.",
    nearbyIntro: "We also work in",
    nearby: ["Vandœuvre-lès-Nancy", "Laxou", "Maxéville", "Toul", "Lunéville", "Pont-à-Mousson", "Épinal", "Metz"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Nancy?", "Yes. We support SMEs across Nancy and the whole Grand Nancy area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in Meurthe-et-Moselle?", "SMEs and mid-caps in every sector — industry, healthcare, materials, tech, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Nancy cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Nancy, Meurthe-et-Moselle & Grand Est"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Nancy",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  metz: {
    name: "Metz",
    region: "Moselle (57) · Grand Est",
    metaTitle: "Outsourced HR Director in Metz",
    metaDesc:
      "Outsourced HR Director and HR advisory in Metz and the Moselle. STATIM MANAGEMENT supports SMEs and mid-caps across northern Lorraine and the cross-border area. Free initial assessment.",
    eyebrow: "Human resources · Metz",
    title: "Outsourced HR Director in Metz",
    lead:
      "Running an SME in Metz or the Moselle? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "A European crossroads at the gates of Luxembourg and Germany, Metz combines logistics, automotive industry, tech and a cross-border economy. Its SMEs and mid-caps must attract and retain talent in a job market under strong cross-border pressure.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Metz and its metropolitan area, to structure your HR function and secure your hiring, without the cost of a permanent role.",
    ],
    servicesTitle: "Our HR services in Metz",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Metz and the Moselle:",
    whyTitle: "Why an outsourced HR Director in Metz?",
    why: [
      "Local support across Metz and Metz Métropole, on-site or remotely.",
      "Knowledge of cross-border dynamics (Luxembourg) and talent retention.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Logistics & supply chain", p: "A European hub location, with seasonal and high-volume HR needs." },
      { h: "Automotive & suppliers", p: "A structured industrial base where compliance and social dialogue are key." },
      { h: "Tech & technopole", p: "The Metz Technopole and a growing tech ecosystem." },
      { h: "Cross-border economy", p: "Luxembourg's pull on salaries makes retention strategic." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Metz Métropole and, beyond, throughout the Moselle and the Lorraine corridor.",
    nearbyIntro: "We also work in",
    nearby: ["Woippy", "Montigny-lès-Metz", "Thionville", "Hagondange", "Sarreguemines", "Forbach", "Nancy"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Metz?", "Yes. We support SMEs across Metz and the whole metropolitan area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in the Moselle?", "SMEs and mid-caps in every sector — logistics, automotive, industry, tech, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Metz cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Metz, Moselle & Grand Est"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Metz",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  dijon: {
    name: "Dijon",
    region: "Côte-d'Or (21) · Bourgogne-Franche-Comté",
    metaTitle: "Outsourced HR Director in Dijon",
    metaDesc:
      "Outsourced HR Director and HR advisory in Dijon and the Côte-d'Or. STATIM MANAGEMENT supports SMEs and mid-caps across Burgundy-Franche-Comté on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Dijon",
    title: "Outsourced HR Director in Dijon",
    lead:
      "Running an SME in Dijon or the Côte-d'Or? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "A gastronomic and university metropolis, Dijon relies on a dynamic base of agri-food, healthcare, pharmaceuticals and winemaking. Many of its SMEs and mid-caps reach a size where HR becomes strategic, without justifying a full-time HR Director.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Dijon and its metropolitan area, with HR expertise scaled to your real needs.",
    ],
    servicesTitle: "Our HR services in Dijon",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Dijon and the Côte-d'Or:",
    whyTitle: "Why an outsourced HR Director in Dijon?",
    why: [
      "Local support across Dijon and Dijon Métropole, on-site or remotely.",
      "Knowledge of the Burgundy job market and its industries.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Agri-food & gastronomy", p: "A centre of excellence (Cité de la gastronomie), between production and seasonality." },
      { h: "Healthcare & pharma", p: "A dense health and pharmaceutical base with regulated professions." },
      { h: "Winemaking & trade", p: "The Burgundy wine industry, between craftsmanship and succession." },
      { h: "Mechanics & industry", p: "Regional industrial SMEs with structuring HR needs." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Dijon Métropole and, beyond, throughout the Côte-d'Or and Burgundy.",
    nearbyIntro: "We also work in",
    nearby: ["Chenôve", "Talant", "Quetigny", "Beaune", "Chalon-sur-Saône", "Dole", "Auxonne"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Dijon?", "Yes. We support SMEs across Dijon and the whole metropolitan area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in the Côte-d'Or?", "SMEs and mid-caps in every sector — agri-food, healthcare, winemaking, industry, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Dijon cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Dijon, Côte-d'Or & Burgundy"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Dijon",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  angers: {
    name: "Angers",
    region: "Maine-et-Loire (49) · Pays de la Loire",
    metaTitle: "Outsourced HR Director in Angers",
    metaDesc:
      "Outsourced HR Director and HR advisory in Angers and Maine-et-Loire. STATIM MANAGEMENT supports SMEs and mid-caps across the Pays de la Loire on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Angers",
    title: "Outsourced HR Director in Angers",
    lead:
      "Running an SME in Angers or Maine-et-Loire? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "Regularly ranked among France's most attractive cities, Angers combines a world-class plant-science cluster (Végépolys Valley), electronics, tech (French Tech) and a quality of life that draws talent. Its growing base of SMEs has rising HR needs.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Angers and its metropolitan area, to steer your HR function without the cost of a full-time role.",
    ],
    servicesTitle: "Our HR services in Angers",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Angers and Maine-et-Loire:",
    whyTitle: "Why an outsourced HR Director in Angers?",
    why: [
      "Local support across Angers and Angers Loire Métropole, on-site or remotely.",
      "Knowledge of the Loire-valley job market and its flagship industries.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Plant science & agri-food", p: "The Végépolys Valley cluster, a centre of excellence in specialised horticulture." },
      { h: "Electronics & tech", p: "A fast-growing industrial and French Tech ecosystem." },
      { h: "Healthcare & services", p: "University hospital, mutual insurers and skilled services with sought-after talent." },
      { h: "Tourism & culture", p: "A residential and tourism economy with strong seasonality." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Angers Loire Métropole and, beyond, throughout Maine-et-Loire and the Pays de la Loire.",
    nearbyIntro: "We also work in",
    nearby: ["Avrillé", "Trélazé", "Beaucouzé", "Les Ponts-de-Cé", "Cholet", "Saumur"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Angers?", "Yes. We support SMEs across Angers and the whole metropolitan area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in Maine-et-Loire?", "SMEs and mid-caps in every sector — plant science, electronics, tech, healthcare, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Angers cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Angers, Maine-et-Loire & Pays de la Loire"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Angers",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  "clermont-ferrand": {
    name: "Clermont-Ferrand",
    region: "Puy-de-Dôme (63) · Auvergne-Rhône-Alpes",
    metaTitle: "Outsourced HR Director in Clermont-Ferrand",
    metaDesc:
      "Outsourced HR Director and HR advisory in Clermont-Ferrand and the Puy-de-Dôme. STATIM MANAGEMENT supports SMEs and mid-caps across Auvergne on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Clermont-Ferrand",
    title: "Outsourced HR Director in Clermont-Ferrand",
    lead:
      "Running an SME in Clermont-Ferrand or the Puy-de-Dôme? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "The largest employment basin in its category, Clermont-Ferrand is the birthplace of Michelin and an industrial, healthcare and research territory moving steadily upmarket. Its SMEs and mid-caps — often subcontractors or fast-growing — have demanding HR needs.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Clermont-Ferrand and its metropolitan area, with HR expertise scaled to your needs.",
    ],
    servicesTitle: "Our HR services in Clermont-Ferrand",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Clermont-Ferrand and the Puy-de-Dôme:",
    whyTitle: "Why an outsourced HR Director in Clermont-Ferrand?",
    why: [
      "Local support across Clermont-Ferrand and its metropolitan area, on-site or remotely.",
      "Knowledge of the Auvergne job market and its industries.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Industry & tyres", p: "A dense industrial ecosystem around Michelin and its subcontractors." },
      { h: "Healthcare & biotech", p: "University hospital, research and biotech, with specialised and regulated professions." },
      { h: "Tech & engineering", p: "A growing higher-tertiary sector and design offices." },
      { h: "Agri-food", p: "Well-rooted Auvergne industries, between terroir and industry." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Clermont Auvergne Métropole and, beyond, throughout the Puy-de-Dôme and Auvergne.",
    nearbyIntro: "We also work in",
    nearby: ["Aubière", "Cournon-d'Auvergne", "Riom", "Issoire", "Vichy", "Thiers"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Clermont-Ferrand?", "Yes. We support SMEs across Clermont-Ferrand and the whole metropolitan area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in the Puy-de-Dôme?", "SMEs and mid-caps in every sector — industry, healthcare, tech, agri-food, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Clermont-Ferrand cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Clermont-Ferrand, Puy-de-Dôme & Auvergne"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Clermont-Ferrand",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  annecy: {
    name: "Annecy",
    region: "Haute-Savoie (74) · Auvergne-Rhône-Alpes",
    metaTitle: "Outsourced HR Director in Annecy",
    metaDesc:
      "Outsourced HR Director and HR advisory in Annecy and Haute-Savoie. STATIM MANAGEMENT supports SMEs and mid-caps across the Annecy basin and the Arve Valley. Free initial assessment.",
    eyebrow: "Human resources · Annecy",
    title: "Outsourced HR Director in Annecy",
    lead:
      "Running an SME in Annecy or Haute-Savoie? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "Driven by one of France's strongest employment dynamics, Annecy combines precision mechanics, the sports and outdoor industry, tech and tourism. Close to Geneva, talent retention is a daily challenge for local SMEs.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Annecy and its basin, to structure your HR function and secure your hiring, without the cost of a permanent role.",
    ],
    servicesTitle: "Our HR services in Annecy",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Annecy and Haute-Savoie:",
    whyTitle: "Why an outsourced HR Director in Annecy?",
    why: [
      "Local support across Annecy and the Grand Annecy area, on-site or remotely.",
      "Knowledge of cross-border dynamics (Geneva) and talent retention.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Precision mechanics", p: "The bar-turning and precision mechanics of the Arve Valley, a world-class skill base." },
      { h: "Sports & outdoor", p: "A hub of sports and outdoor industries (brand headquarters and SMEs)." },
      { h: "Tech & image", p: "A tech and animation ecosystem with international reach." },
      { h: "Tourism & services", p: "A premium tourism economy with strong seasonality." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across the Grand Annecy area and, beyond, throughout Haute-Savoie and the Arve Valley.",
    nearbyIntro: "We also work in",
    nearby: ["Annecy-le-Vieux", "Seynod", "Cran-Gevrier", "Rumilly", "La Roche-sur-Foron", "Cluses", "Geneva"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Annecy?", "Yes. We support SMEs across Annecy and the whole Grand Annecy area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in Haute-Savoie?", "SMEs and mid-caps in every sector — industry, precision mechanics, sports, tech, tourism — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Annecy cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Annecy, Haute-Savoie & Arve Valley"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Annecy",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },

  chambery: {
    name: "Chambéry",
    region: "Savoie (73) · Auvergne-Rhône-Alpes",
    metaTitle: "Outsourced HR Director in Chambéry",
    metaDesc:
      "Outsourced HR Director and HR advisory in Chambéry and the Savoie. STATIM MANAGEMENT supports SMEs and mid-caps across the Alpine corridor on every HR challenge. Free initial assessment.",
    eyebrow: "Human resources · Chambéry",
    title: "Outsourced HR Director in Chambéry",
    lead:
      "Running an SME in Chambéry or the Savoie? STATIM MANAGEMENT structures, secures and steers your HR function — on-site or remotely.",
    intro: [
      "At the heart of the Alpine corridor, Chambéry relies on Savoie Technolac and the INES (solar energy), a diversified industry, a mountain economy and a research-driven service sector. Its SMEs and mid-caps must structure their growth in an attractive but tight hiring market.",
      "STATIM MANAGEMENT provides a fractional, outsourced HR Director who works directly in Chambéry and its metropolitan area, with HR expertise scaled to your real needs.",
    ],
    servicesTitle: "Our HR services in Chambéry",
    servicesLead:
      "All of STATIM MANAGEMENT's HR expertise, available to companies in Chambéry and the Savoie:",
    whyTitle: "Why an outsourced HR Director in Chambéry?",
    why: [
      "Local support across Chambéry and Grand Chambéry, on-site or remotely.",
      "Knowledge of the Alpine corridor and its industrial SMEs.",
      "Scalable expertise, from a few days a month to more sustained support.",
      "Fast response to structuring, compliance and recruitment needs.",
      "Controlled cost, without hiring a full-time HR Director.",
    ],
    sectorsTitle: "Sectors we know",
    sectors: [
      { h: "Energy & cleantech", p: "Savoie Technolac and the INES, France's national solar-energy hub." },
      { h: "Industry & mountain", p: "Diversified industry and suppliers to the mountain and outdoor sectors." },
      { h: "Tech & research", p: "A higher-tertiary sector backed by the university and laboratories." },
      { h: "Logistics & services", p: "A strategic position on the Alpine axis, between Lyon and Italy." },
    ],
    territoryTitle: "Support rooted in the territory",
    territoryText:
      "We support companies across Grand Chambéry and, beyond, throughout the Savoie and the Alpine corridor.",
    nearbyIntro: "We also work in",
    nearby: ["La Motte-Servolex", "Aix-les-Bains", "Montmélian", "Albertville", "Annecy", "Grenoble"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you work directly in Chambéry?", "Yes. We support SMEs across Chambéry and the whole Grand Chambéry area, on-site or remotely, by the day or half-day depending on your needs."],
      ["Which companies do you support in the Savoie?", "SMEs and mid-caps in every sector — energy, industry, tech, logistics, services — at every stage: start-up, growth, reorganisation or transformation."],
      ["How much does an outsourced HR Director in Chambéry cost?", "The level of involvement is defined after a free initial assessment, then evolves with your needs: from a few days a month to more sustained support."],
      ["How do we get started?", "With a free 30-minute HR assessment, to identify your priorities and see how we can help. No strings attached."],
    ],
    asideTitle: "At a glance",
    asideList: [
      ["Area", "Chambéry, Savoie & Alpine corridor"],
      ["Format", "On-site or remote"],
      ["Companies", "SMEs and mid-caps, all sectors"],
      ["First contact", "Free initial assessment"],
    ],
    ctaTitle: "Let's talk about your HR challenges in Chambéry",
    ctaText: "30 minutes to identify your priorities. No strings attached.",
  },
};

export const CITIES = { fr: CITIES_FR, en: CITIES_EN };

export function getCity(lang, slug) {
  return (CITIES[lang] || CITIES.fr)[slug];
}
