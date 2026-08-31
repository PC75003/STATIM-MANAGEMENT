// Articles du blog RH — bilingues (fr / en). Slugs identiques dans les deux langues.
// Ordre du tableau = ordre d'affichage (du plus récent au plus ancien).
const POSTS_FR = [
  {
    slug: "externaliser-fonction-rh-pme",
    title: "Pourquoi externaliser sa fonction RH quand on est une PME ?",
    cat: "DRH externalisée",
    date: "2026",
    excerpt:
      "Coût maîtrisé, expertise immédiate, souplesse : les bénéfices concrets d'un DRH à temps partagé pour une entreprise en croissance.",
    desc: "Coût maîtrisé, expertise immédiate, souplesse : les bénéfices d'un DRH à temps partagé pour une PME en croissance.",
    body: [
      ["p", "Beaucoup de PME atteignent une taille où la fonction RH devient stratégique, sans pour autant justifier le recrutement d'un DRH à temps plein. L'externalisation à temps partagé répond précisément à ce moment charnière."],
      ["h2", "Une expertise dimensionnée à vos besoins"],
      ["p", "Un DRH à temps partagé intervient quelques jours par mois. Vous bénéficiez d'une expertise de haut niveau, sans en supporter le coût complet, et le volume d'intervention évolue avec votre croissance."],
      ["h2", "Des résultats rapides et mesurables"],
      ["p", "Parce que l'accompagnement est piloté en mode projet, les actions sont concrètes et suivies d'indicateurs. La fonction RH se structure sans alourdir votre organisation."],
    ],
  },
  {
    slug: "entretiens-professionnels-reforme-2026",
    title: "Entretien de parcours professionnel : ce qui change avec la réforme",
    cat: "Conformité",
    date: "2026",
    excerpt:
      "Obligations, échéances et sanctions : le point sur le cadre légal des entretiens de parcours professionnels et comment rester conforme.",
    desc: "La loi du 24 octobre 2025 remplace l'entretien professionnel par l'entretien de parcours professionnel. Nouvelle périodicité, contenu enrichi et sanctions.",
    body: [
      ["p", "La loi n° 2025-989 du 24 octobre 2025 remplace l'entretien professionnel par l'entretien de parcours professionnel (EPP). Encadré par l'article L.6315-1 du Code du travail, il reste une obligation pour toutes les entreprises, quelle que soit leur taille."],
      ["h2", "Une nouvelle périodicité"],
      ["p", "Le premier entretien a désormais lieu dans l'année qui suit l'embauche, puis tous les 4 ans (contre 2 ans auparavant). Un état des lieux récapitulatif est réalisé tous les 8 ans (contre 6 ans). Les entreprises couvertes par un accord ont jusqu'au 1er octobre 2026 pour se mettre en conformité."],
      ["h2", "Un contenu enrichi"],
      ["p", "L'EPP aborde les compétences mobilisées, le parcours du salarié, ses besoins de formation, ses souhaits d'évolution, ainsi que le compte personnel de formation et le conseil en évolution professionnelle. C'est un rendez-vous stratégique tourné vers l'employabilité."],
      ["h2", "Le risque d'un défaut d'entretien"],
      ["p", "En cas de manquement constaté lors du bilan récapitulatif, l'employeur peut être tenu d'abonder le compte personnel de formation du salarié de 3 000 €. La conformité est donc un enjeu financier autant que juridique."],
      ["h2", "Externaliser pour sécuriser"],
      ["p", "Confier ces entretiens à un cabinet expert garantit l'application de la réforme, libère du temps RH et offre aux collaborateurs une écoute neutre et professionnelle."],
    ],
  },
  {
    slug: "reussir-recrutement-talents",
    title: "Les étapes essentielles pour recruter des talents d'exception",
    cat: "Recrutement",
    date: "2026",
    excerpt:
      "De la définition du poste à l'intégration, la méthode pour attirer et fidéliser les bons profils dans une PME.",
    desc: "De la définition du poste à l'intégration, la méthode pour attirer et fidéliser les bons profils.",
    body: [
      ["p", "Le recrutement est l'une des pierres angulaires du succès d'une entreprise. Une méthode structurée fait toute la différence pour attirer les bons profils."],
      ["h2", "Les étapes clés"],
      ["p", "Définir un profil de poste clair, sélectionner les bons canaux, valoriser votre culture, mener des entretiens structurés, vérifier les références et soigner l'intégration : chaque étape compte."],
      ["h2", "Ne négligez pas l'intégration"],
      ["p", "Un recrutement réussi ne s'arrête pas à la signature. Le suivi de l'intégration conditionne la réussite durable de l'embauche."],
    ],
  },
];

const POSTS_EN = [
  {
    slug: "externaliser-fonction-rh-pme",
    title: "Why outsource your HR function when you're an SME?",
    cat: "Fractional HR Director",
    date: "2026",
    excerpt:
      "Controlled cost, expertise on tap, flexibility: the concrete benefits of a fractional HR Director for a growing business.",
    desc: "Controlled cost, expertise on tap, flexibility: the benefits of a fractional HR Director for a growing SME.",
    body: [
      ["p", "Many SMEs reach a size where the HR function becomes strategic, yet without justifying the hire of a full-time HR Director. Fractional outsourcing is the answer to precisely this turning point."],
      ["h2", "Expertise sized to your needs"],
      ["p", "A fractional HR Director works a few days a month. You get high-level expertise without carrying its full cost, and the volume of support scales with your growth."],
      ["h2", "Fast, measurable results"],
      ["p", "Because the support is run as a project, actions are concrete and tracked with metrics. Your HR function takes shape without weighing down your organisation."],
    ],
  },
  {
    slug: "entretiens-professionnels-reforme-2026",
    title: "Career development reviews: what the reform changes",
    cat: "Compliance",
    date: "2026",
    excerpt:
      "Obligations, deadlines and penalties: a clear look at the legal framework for career development reviews and how to stay compliant.",
    desc: "The Act of 24 October 2025 replaces the professional review with the career development review. New frequency, richer content and penalties.",
    body: [
      ["p", "French Act No. 2025-989 of 24 October 2025 replaces the professional review with the career development review (EPP). Governed by Article L.6315-1 of the Labour Code, it remains mandatory for every company, whatever its size."],
      ["h2", "A new frequency"],
      ["p", "The first review now takes place within the year following hire, then every 4 years (down from 2). A summary review is carried out every 8 years (down from 6). Companies covered by an agreement have until 1 October 2026 to comply."],
      ["h2", "Richer content"],
      ["p", "The review covers the skills used, the employee's career path, their training needs, their development goals, as well as the personal training account (CPF) and career guidance. It's a strategic meeting focused on employability."],
      ["h2", "The risk of a missed review"],
      ["p", "If a shortfall is found at the summary review, the employer may have to top up the employee's personal training account by €3,000. Compliance is therefore a financial as much as a legal issue."],
      ["h2", "Outsource to stay secure"],
      ["p", "Entrusting these reviews to an expert firm guarantees the reform is applied, frees up HR time and gives employees a neutral, professional space to be heard."],
    ],
  },
  {
    slug: "reussir-recrutement-talents",
    title: "The essential steps to recruit exceptional talent",
    cat: "Recruitment",
    date: "2026",
    excerpt:
      "From role definition to onboarding, the method to attract and retain the right people in an SME.",
    desc: "From role definition to onboarding, the method to attract and retain the right people.",
    body: [
      ["p", "Recruitment is one of the cornerstones of a company's success. A structured method makes all the difference when it comes to attracting the right people."],
      ["h2", "The key steps"],
      ["p", "Define a clear role profile, choose the right channels, showcase your culture, run structured interviews, check references and care for onboarding: every step counts."],
      ["h2", "Don't overlook onboarding"],
      ["p", "A successful hire doesn't stop at the signature. Following up on onboarding is what makes the hire last."],
    ],
  },
];

export const POSTS = { fr: POSTS_FR, en: POSTS_EN };

// Article par langue + slug (undefined si introuvable).
export const getPost = (lang, slug) => (POSTS[lang] || POSTS.fr).find((p) => p.slug === slug);
