// Données centralisées des 6 solutions RH — bilingues (fr / en).
export const SERVICE_ORDER = [
  "drh-externalisee",
  "audit-rh",
  "conseil-rh",
  "entretiens-professionnels",
  "recrutement",
  "coaching",
];

// Images partagées entre les langues (page Solutions RH).
export const SERVICE_IMG = {
  "drh-externalisee": "/images/drh.webp",
  "audit-rh": "/images/conseil.webp",
  "conseil-rh": "/images/about.webp",
  "entretiens-professionnels": "/images/entretiens.webp",
  recrutement: "/images/hero.webp",
  coaching: "/images/cta.webp",
};

const SERVICES_FR = {
  "drh-externalisee": {
    slug: "drh-externalisee",
    nav: "DRH externalisée",
    title: "DRH externalisée à temps partagé",
    eyebrow: "Solutions RH",
    metaTitle: "DRH externalisée à temps partagé pour PME",
    metaDesc:
      "Confiez le pilotage de votre fonction RH à un DRH externalisé à temps partagé. Expertise modulable, sans recruter à temps plein. STATIM MANAGEMENT, partout en France et en Europe.",
    lead:
      "Pilotez votre fonction ressources humaines avec une approche transversale et opérationnelle, sans supporter le coût d'un DRH à temps plein.",
    intro: [
      "Parce qu'il est essentiel de piloter la fonction RH en cohérence avec la stratégie de l'entreprise, notre équipe d'experts intervient à vos côtés à chaque étape de la vie de votre PME : création, croissance, réorganisation, fusion ou acquisition.",
      "Après un audit initial, nous prenons en charge votre fonction RH à temps partiel, de façon modulaire et évolutive. Vous bénéficiez d'une direction RH expérimentée, dimensionnée à vos besoins réels.",
    ],
    sections: [
      {
        h: "Quand faire appel à un DRH à temps partagé ?",
        items: [
          "Votre structure ne justifie pas encore un poste de DRH à temps plein.",
          "Vous créez une société, un établissement secondaire ou une filiale.",
          "Vous traversez une réorganisation, une fusion ou une acquisition.",
          "Vous devez mettre en place le socle juridique et réglementaire RH.",
          "Vous souhaitez optimiser votre masse salariale et vos process.",
        ],
      },
      {
        h: "Ce que nous prenons en charge",
        items: [
          "Structuration et sécurisation de la fonction RH.",
          "Pilotage opérationnel au quotidien, sur site ou à distance.",
          "Mise en place et optimisation des process RH.",
          "Accompagnement des dirigeants dans leurs décisions RH.",
          "Reporting et suivi d'indicateurs concrets.",
        ],
      },
    ],
    faq: [
      ["Combien de jours par mois intervient le DRH ?", "Le volume est défini après l'audit initial, en fonction de vos besoins. Il évolue avec votre croissance, de quelques jours par mois à un accompagnement plus soutenu."],
      ["L'intervention se fait-elle sur site ?", "Sur site ou à distance, par journée ou demi-journée. Nous adaptons le format à votre organisation, partout en France et en Europe."],
    ],
  },

  "audit-rh": {
    slug: "audit-rh",
    nav: "Audit RH",
    title: "Audit RH : faites le point sur vos pratiques",
    eyebrow: "Solutions RH",
    metaTitle: "Audit RH : conformité, organisation et paie",
    metaDesc:
      "Audit RH complet pour PME : audit de conformité, audit organisationnel et audit de paie. Un état des lieux clair pour décider de vos priorités. STATIM MANAGEMENT.",
    lead:
      "Un état des lieux objectif de votre fonction RH pour identifier les risques, les leviers d'optimisation et les priorités d'action.",
    intro: [
      "L'audit RH est souvent la première étape d'un accompagnement réussi. Il vous donne une vision claire et factuelle de vos pratiques, de leur conformité et de leur efficacité.",
      "À l'issue de l'audit, vous disposez d'un rapport synthétique et d'un plan d'action priorisé, directement exploitable.",
    ],
    sections: [
      {
        h: "Trois angles d'audit",
        items: [
          "Audit de conformité : respect du cadre légal et conventionnel.",
          "Audit organisationnel : process, outils, répartition des rôles.",
          "Audit de paie : fiabilité et sécurisation du processus de paie.",
        ],
      },
      {
        h: "Ce que vous obtenez",
        items: [
          "Un diagnostic factuel et hiérarchisé des risques.",
          "Des recommandations concrètes et chiffrées.",
          "Un plan d'action priorisé aligné sur votre stratégie.",
        ],
      },
    ],
    faq: [
      ["Combien de temps dure un audit RH ?", "La durée dépend de la taille de l'entreprise et du périmètre. Un audit ciblé peut être réalisé en quelques jours, un audit complet sur quelques semaines."],
      ["L'audit débouche-t-il sur un accompagnement ?", "C'est à vous de décider. L'audit est livrable en lui-même. Si vous le souhaitez, nous pouvons ensuite piloter la mise en œuvre du plan d'action."],
    ],
  },

  "conseil-rh": {
    slug: "conseil-rh",
    nav: "Conseil RH",
    title: "Conseil RH pour sécuriser vos décisions",
    eyebrow: "Solutions RH",
    metaTitle: "Conseil RH et droit du travail pour PME",
    metaDesc:
      "Conseil RH pour PME : droit du travail, relations sociales, développement RH. Des réponses fiables et sécurisées à vos questions du quotidien. STATIM MANAGEMENT.",
    lead:
      "Une expertise fiable et réactive sur vos questions RH du quotidien, du droit du travail au développement des compétences.",
    intro: [
      "Nos équipes assurent une veille juridique, légale et conventionnelle permanente. Nous nous appuyons sur des outils professionnels reconnus pour vous apporter des réponses précises et sécuriser l'ensemble de nos interventions.",
      "Que ce soit pour une question ponctuelle ou un accompagnement régulier, vous disposez d'un interlocuteur expert qui connaît votre contexte.",
    ],
    sections: [
      {
        h: "Nos domaines de conseil",
        items: [
          "Droit du travail et application des conventions collectives.",
          "Relations sociales et dialogue avec les instances.",
          "Développement RH et gestion des compétences.",
          "Sécurisation des procédures sensibles.",
        ],
      },
    ],
    faq: [
      ["Proposez-vous un conseil ponctuel ?", "Oui. Vous pouvez nous solliciter pour une question précise comme pour un accompagnement récurrent, selon vos besoins."],
      ["Vos réponses sont-elles à jour des évolutions légales ?", "Oui. Nous assurons une veille juridique permanente et nous appuyons sur des outils professionnels reconnus."],
    ],
  },

  "entretiens-professionnels": {
    slug: "entretiens-professionnels",
    nav: "Entretiens de parcours professionnel",
    title: "Entretiens de parcours professionnel",
    eyebrow: "Solutions RH",
    metaTitle: "Entretien de parcours professionnel externalisé",
    metaDesc:
      "Externalisez vos entretiens de parcours professionnels avec STATIM MANAGEMENT. Réforme de la loi du 24 octobre 2025 appliquée : nouvelle périodicité, contenu enrichi, conformité garantie.",
    lead:
      "Externalisez vos entretiens de parcours professionnels et appliquez sereinement la réforme du 24 octobre 2025, en toute conformité.",
    intro: [
      "Depuis la loi n° 2025-989 du 24 octobre 2025, l'entretien professionnel est remplacé par l'entretien de parcours professionnel (EPP), encadré par l'article L.6315-1 du Code du travail. C'est désormais un rendez-vous stratégique centré sur l'évolution des carrières et l'employabilité, obligatoire quelle que soit la taille de l'entreprise.",
      "La réforme modifie la périodicité et enrichit le contenu de l'entretien. L'actualité sociale chargée des RH et des dirigeants ne permet pas toujours de mener ces entretiens et d'en assurer le suivi : notre cabinet vous accompagne pour appliquer la réforme et sécuriser vos pratiques.",
    ],
    sections: [
      {
        h: "Ce que change la réforme (appliquée)",
        items: [
          "Nouveau nom : l'entretien de parcours professionnel remplace l'entretien professionnel.",
          "Premier entretien dans l'année qui suit l'embauche, puis tous les 4 ans (au lieu de 2 ans).",
          "État des lieux récapitulatif tous les 8 ans (au lieu de 6 ans).",
          "Contenu enrichi : compétences, parcours, besoins de formation, souhaits d'évolution, CPF et conseil en évolution professionnelle.",
          "Mise en conformité au plus tard le 1er octobre 2026 pour les entreprises couvertes par un accord.",
        ],
      },
      {
        h: "Les avantages de l'externalisation",
        items: [
          "Une fonction RH recentrée sur ses missions internes.",
          "Une écoute experte des projets d'évolution de vos collaborateurs.",
          "Un accompagnement sur mesure et un suivi précis auprès du service RH.",
          "La garantie de conformité au regard de la nouvelle réglementation.",
        ],
      },
      {
        h: "Pour aller plus loin",
        items: [
          "Mise à jour de vos trames d'entretien selon le nouveau contenu obligatoire.",
          "Évaluation des capacités, motivations et aptitudes avec un outil dédié.",
          "Analyse fine des résultats par des consultants certifiés et pistes d'évolution.",
        ],
      },
    ],
    faq: [
      ["Qu'est-ce qui change avec la réforme de 2025 ?", "La loi du 24 octobre 2025 remplace l'entretien professionnel par l'entretien de parcours professionnel. La périodicité passe à un premier entretien la première année, puis tous les 4 ans, avec un bilan récapitulatif tous les 8 ans et un contenu enrichi."],
      ["Quel est le risque en cas d'entretiens non réalisés ?", "En cas de manquement constaté lors du bilan récapitulatif, l'employeur peut être tenu d'abonder le compte personnel de formation du salarié de 3 000 €. La conformité est donc un enjeu financier autant que juridique."],
      ["L'entretien de parcours professionnel est-il obligatoire pour toutes les entreprises ?", "Oui, quelle que soit la taille de l'entreprise. Chaque salarié doit être informé dès son embauche qu'il en bénéficie, selon la nouvelle périodicité issue de la réforme."],
    ],
  },

  recrutement: {
    slug: "recrutement",
    nav: "Recrutement",
    title: "Recrutement : attirez les bons talents",
    eyebrow: "Solutions RH",
    metaTitle: "Recrutement et approche directe pour PME",
    metaDesc:
      "Recrutement structuré pour PME : définition du poste, sourcing, approche directe, entretiens et intégration. STATIM MANAGEMENT vous aide à attirer les bons talents.",
    lead:
      "Une approche structurée du recrutement, de la définition du besoin à l'intégration, pour attirer et fidéliser les bons profils.",
    intro: [
      "Le recrutement est l'une des pierres angulaires du succès d'une entreprise. Trouver et attirer des talents d'exception peut faire toute la différence.",
      "Nous vous accompagnons à chaque étape, avec une méthode éprouvée et, lorsque c'est pertinent, une approche directe des profils ciblés.",
    ],
    sections: [
      {
        h: "Notre méthode de recrutement",
        items: [
          "Définir un profil de poste clair et partagé.",
          "Sélectionner les bons canaux et activer l'approche directe.",
          "Valoriser votre culture d'entreprise auprès des candidats.",
          "Mener des entretiens structurés et vérifier les références.",
          "Soigner l'expérience candidat et l'intégration des nouveaux arrivants.",
        ],
      },
    ],
    faq: [
      ["Pratiquez-vous l'approche directe ?", "Oui. Lorsque le profil recherché est rare ou stratégique, nous activons une approche directe ciblée en complément des canaux classiques."],
      ["Accompagnez-vous l'intégration ?", "Oui. Le recrutement ne s'arrête pas à la signature : nous veillons au suivi de l'intégration pour sécuriser la réussite de l'embauche."],
    ],
  },

  coaching: {
    slug: "coaching",
    nav: "Coaching",
    title: "Coaching et accompagnement managérial",
    eyebrow: "Solutions RH",
    metaTitle: "Coaching managérial et codéveloppement",
    metaDesc:
      "Coaching individuel, accompagnement managérial et codéveloppement pour dirigeants et managers de PME. Faites grandir vos compétences clés avec STATIM MANAGEMENT.",
    lead:
      "Accompagnez la montée en compétences de vos managers et dirigeants grâce au coaching individuel et au codéveloppement.",
    intro: [
      "Le développement des personnes est au cœur de la performance durable. Nous accompagnons vos managers et dirigeants pour renforcer leur posture, leur leadership et leur capacité à décider.",
      "Notre approche intègre le codéveloppement : une méthode collaborative où les participants s'appuient sur l'intelligence collective du groupe pour résoudre leurs problématiques concrètes.",
    ],
    sections: [
      {
        h: "Nos modalités d'accompagnement",
        items: [
          "Coaching individuel de dirigeants et de managers.",
          "Ateliers de codéveloppement en groupe.",
          "Accompagnement managérial sur des situations concrètes.",
          "Renforcement de la posture de leadership.",
        ],
      },
    ],
    faq: [
      ["Qu'est-ce que le codéveloppement ?", "Une méthode collaborative où un groupe de pairs s'entraide pour résoudre des problématiques réelles. Chacun progresse grâce à l'expérience et au regard des autres."],
      ["Le coaching s'adresse-t-il aux dirigeants ?", "Oui, dirigeants comme managers. L'accompagnement est individualisé selon les enjeux de chaque personne."],
    ],
  },
};

const SERVICES_EN = {
  "drh-externalisee": {
    slug: "drh-externalisee",
    nav: "Fractional HR Director",
    title: "Fractional, outsourced HR Director",
    eyebrow: "HR Solutions",
    metaTitle: "Fractional, outsourced HR Director for SMEs",
    metaDesc:
      "Entrust the steering of your HR function to a fractional, outsourced HR Director. Flexible expertise, without a full-time hire. STATIM MANAGEMENT, across France and Europe.",
    lead:
      "Steer your human resources function with a cross-functional, hands-on approach — without carrying the cost of a full-time HR Director.",
    intro: [
      "Because your HR function needs to be steered in line with your business strategy, our team of experts works alongside you at every stage of your company's life: launch, growth, reorganisation, merger or acquisition.",
      "After an initial audit, we take on your HR function part-time, in a modular and scalable way. You get an experienced HR leadership sized to your real needs.",
    ],
    sections: [
      {
        h: "When to bring in a fractional HR Director",
        items: [
          "Your organisation doesn't yet justify a full-time HR Director.",
          "You're setting up a company, a secondary site or a subsidiary.",
          "You're going through a reorganisation, merger or acquisition.",
          "You need to put the legal and regulatory HR foundations in place.",
          "You want to optimise your payroll costs and your processes.",
        ],
      },
      {
        h: "What we take on",
        items: [
          "Structuring and securing the HR function.",
          "Day-to-day operational steering, on-site or remotely.",
          "Setting up and optimising HR processes.",
          "Supporting leaders in their HR decisions.",
          "Reporting and tracking of concrete metrics.",
        ],
      },
    ],
    faq: [
      ["How many days a month does the HR Director work?", "The volume is set after the initial audit, based on your needs. It scales with your growth, from a few days a month to more intensive support."],
      ["Do you work on-site?", "On-site or remotely, by the day or half-day. We adapt the format to your organisation, anywhere in France and Europe."],
    ],
  },

  "audit-rh": {
    slug: "audit-rh",
    nav: "HR Audit",
    title: "HR Audit: take stock of your practices",
    eyebrow: "HR Solutions",
    metaTitle: "HR Audit: compliance, organisation and payroll",
    metaDesc:
      "Comprehensive HR audit for SMEs: compliance audit, organisational audit and payroll audit. A clear picture to set your priorities. STATIM MANAGEMENT.",
    lead:
      "An objective picture of your HR function to pinpoint risks, opportunities to optimise and priorities for action.",
    intro: [
      "The HR audit is often the first step of a successful engagement. It gives you a clear, fact-based view of your practices, their compliance and their effectiveness.",
      "At the end of the audit, you have a concise report and a prioritised action plan that you can put straight to work.",
    ],
    sections: [
      {
        h: "Three audit angles",
        items: [
          "Compliance audit: adherence to the legal and collective-agreement framework.",
          "Organisational audit: processes, tools, allocation of roles.",
          "Payroll audit: reliability and security of the payroll process.",
        ],
      },
      {
        h: "What you get",
        items: [
          "A factual, prioritised assessment of risks.",
          "Concrete, costed recommendations.",
          "A prioritised action plan aligned with your strategy.",
        ],
      },
    ],
    faq: [
      ["How long does an HR audit take?", "It depends on the size of the company and the scope. A focused audit can be done in a few days; a full audit takes a few weeks."],
      ["Does the audit lead to an ongoing engagement?", "That's up to you. The audit is a deliverable in itself. If you wish, we can then drive the delivery of the action plan."],
    ],
  },

  "conseil-rh": {
    slug: "conseil-rh",
    nav: "HR Advisory",
    title: "HR Advisory to secure your decisions",
    eyebrow: "HR Solutions",
    metaTitle: "HR Advisory: employment law & relations",
    metaDesc:
      "HR advisory for SMEs: employment law, employee relations, HR development. Reliable, secure answers to your day-to-day questions. STATIM MANAGEMENT.",
    lead:
      "Reliable, responsive expertise on your day-to-day HR questions, from employment law to skills development.",
    intro: [
      "Our teams maintain ongoing legal and regulatory monitoring. We rely on recognised professional tools to give you precise answers and secure every engagement.",
      "Whether for a one-off question or ongoing support, you have an expert point of contact who knows your context.",
    ],
    sections: [
      {
        h: "Our advisory areas",
        items: [
          "Employment law and application of collective agreements.",
          "Employee relations and dialogue with representative bodies.",
          "HR development and skills management.",
          "Securing sensitive procedures.",
        ],
      },
    ],
    faq: [
      ["Do you offer one-off advice?", "Yes. You can call on us for a specific question or for ongoing support, depending on your needs."],
      ["Is your advice up to date with legal changes?", "Yes. We maintain ongoing legal monitoring and rely on recognised professional tools."],
    ],
  },

  "entretiens-professionnels": {
    slug: "entretiens-professionnels",
    nav: "Career development reviews",
    title: "Career development reviews",
    eyebrow: "HR Solutions",
    metaTitle: "Outsourced career development reviews",
    metaDesc:
      "Outsource your career development reviews with STATIM MANAGEMENT. The reform of 24 October 2025 applied: new frequency, richer content, compliance guaranteed.",
    lead:
      "Outsource your career development reviews and apply the 24 October 2025 reform with confidence and full compliance.",
    intro: [
      "Under Act No. 2025-989 of 24 October 2025, the French \"entretien professionnel\" is replaced by the career development review (EPP), governed by Article L.6315-1 of the Labour Code. It is now a strategic meeting focused on career progression and employability, mandatory whatever the size of the company.",
      "The reform changes the frequency and enriches the content of the review. A busy HR and leadership agenda doesn't always leave room to run these reviews and follow up on them: our firm helps you apply the reform and secure your practices.",
    ],
    sections: [
      {
        h: "What the reform changes (applied)",
        items: [
          "New name: the career development review replaces the professional review.",
          "First review within the year following hire, then every 4 years (instead of 2).",
          "Summary review every 8 years (instead of 6).",
          "Richer content: skills, career path, training needs, development goals, personal training account (CPF) and career guidance.",
          "Compliance required by 1 October 2026 at the latest for companies covered by an agreement.",
        ],
      },
      {
        h: "The benefits of outsourcing",
        items: [
          "An HR function refocused on its internal priorities.",
          "Expert listening to your employees' development plans.",
          "Tailored support and precise follow-up with your HR team.",
          "A guarantee of compliance with the new regulations.",
        ],
      },
      {
        h: "Going further",
        items: [
          "Updating your review templates to the new mandatory content.",
          "Assessing abilities, motivations and aptitudes with a dedicated tool.",
          "In-depth analysis of results by certified consultants, with development paths.",
        ],
      },
    ],
    faq: [
      ["What changes with the 2025 reform?", "The Act of 24 October 2025 replaces the professional review with the career development review. The frequency becomes a first review in the first year, then every 4 years, with a summary review every 8 years and richer content."],
      ["What's the risk if reviews aren't carried out?", "If a shortfall is found at the summary review, the employer may have to top up the employee's personal training account by €3,000. Compliance is therefore a financial as much as a legal issue."],
      ["Is the career development review mandatory for every company?", "Yes, whatever the size of the company. Every employee must be told when they are hired that they are entitled to it, under the new frequency set by the reform."],
    ],
  },

  recrutement: {
    slug: "recrutement",
    nav: "Recruitment",
    title: "Recruitment: attract the right talent",
    eyebrow: "HR Solutions",
    metaTitle: "Recruitment and direct search for SMEs",
    metaDesc:
      "Structured recruitment for SMEs: role definition, sourcing, direct search, interviews and onboarding. STATIM MANAGEMENT helps you attract the right talent.",
    lead:
      "A structured approach to recruitment, from defining the need to onboarding, to attract and retain the right people.",
    intro: [
      "Recruitment is one of the cornerstones of a company's success. Finding and attracting exceptional talent can make all the difference.",
      "We support you at every stage, with a proven method and, where relevant, a direct search for targeted profiles.",
    ],
    sections: [
      {
        h: "Our recruitment method",
        items: [
          "Define a clear, shared role profile.",
          "Select the right channels and activate direct search.",
          "Showcase your company culture to candidates.",
          "Run structured interviews and check references.",
          "Care for the candidate experience and onboarding of new joiners.",
        ],
      },
    ],
    faq: [
      ["Do you do direct search?", "Yes. When the profile is rare or strategic, we run a targeted direct search alongside the usual channels."],
      ["Do you support onboarding?", "Yes. Recruitment doesn't stop at the signature: we follow up on onboarding to secure the success of the hire."],
    ],
  },

  coaching: {
    slug: "coaching",
    nav: "Coaching",
    title: "Coaching and management support",
    eyebrow: "HR Solutions",
    metaTitle: "Management coaching and peer coaching",
    metaDesc:
      "One-to-one coaching, management support and peer coaching for SME leaders and managers. Grow your key skills with STATIM MANAGEMENT.",
    lead:
      "Support the growth of your managers and leaders through one-to-one coaching and peer coaching.",
    intro: [
      "Developing people is at the heart of lasting performance. We support your managers and leaders in strengthening their stance, their leadership and their ability to decide.",
      "Our approach includes peer coaching (co-development): a collaborative method where participants draw on the group's collective intelligence to solve their real-world challenges.",
    ],
    sections: [
      {
        h: "How we support you",
        items: [
          "One-to-one coaching for leaders and managers.",
          "Group peer-coaching workshops.",
          "Management support on concrete situations.",
          "Strengthening leadership presence.",
        ],
      },
    ],
    faq: [
      ["What is peer coaching (co-development)?", "A collaborative method where a group of peers helps one another solve real challenges. Each person grows through the experience and perspective of the others."],
      ["Is coaching aimed at leaders?", "Yes, leaders and managers alike. Support is tailored to each person's challenges."],
    ],
  },
};

export const SERVICES = { fr: SERVICES_FR, en: SERVICES_EN };
