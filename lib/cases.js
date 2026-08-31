// Cas clients réels, anonymisés par secteur — bilingues (fr / en).
const CASES_FR = [
  {
    tag: "DRH à temps partagé & audit RH",
    context: "PME industrielle — équipements sur-mesure B2B, ~50 collaborateurs",
    situation:
      "Une réputation solide et des équipes fidèles, mais une fonction RH dispersée, sans pilotage : process non formalisés (risque pour la certification ISO 9001), aucun indicateur RH, marque employeur inexistante et points de vigilance juridiques (temps de travail, entretiens, dialogue social).",
    action:
      "Diagnostic RH complet (conformité, cartographie des process et du « qui fait quoi »), exploration de la culture et de la proposition de valeur employeur via des entretiens dirigeants, managers et collaborateurs, appui au comité de direction et montée en compétences de l'équipe RH interne, puis plan d'action priorisé.",
    result:
      "Diagnostic finalisé à 95 % en 5 mois (15 personnes rencontrées, 7 présences sur site). Situations individuelles résolues, recrutements et fins de période d'essai fluidifiés, points de conformité sécurisés (DUERP, courriers types) et feuille de route partagée pour préparer l'audit ISO 9001.",
  },
  {
    tag: "Audit RH",
    context: "Société de services — prestations terrain, ~20 salariés permanents",
    situation:
      "Une forte croissance et des seuils d'effectifs franchis, mais une structuration RH à la traîne : charge administrative lourde pour les managers, statuts et rémunérations hétérogènes, obligations non couvertes (entretiens, CSE inactif, obligation d'emploi handicap, DUERP daté) et outils RH manuels.",
    action:
      "Audit RH sur 5 semaines en immersion, entretiens croisés direction / managers / support, analyse des statuts et des écarts de rémunération, sécurisation juridique (contrats, entretiens obligatoires, préparation des élections CSE, règlement intérieur), cadrage d'un projet SIRH et lancement d'un comité managers avec codéveloppement.",
    result:
      "Plan de charge clair et chiffré : 10 chantiers RH identifiés (≈ 33 jours), du SIRH aux élections CSE. Risques juridiques majeurs cartographiés et quantifiés, dispositifs de partage de la valeur et de RTT instruits, avec démarrage immédiat du support RH aux managers et de la migration outil.",
  },
];

const CASES_EN = [
  {
    tag: "Fractional HR Director & HR audit",
    context: "Industrial SME — custom B2B equipment, ~50 employees",
    situation:
      "A solid reputation and loyal teams, but a scattered HR function with no steering: informal processes (a risk for ISO 9001 certification), no HR metrics, a non-existent employer brand and legal red flags (working time, reviews, employee relations).",
    action:
      "Full HR assessment (compliance, mapping of processes and 'who does what'), exploration of the culture and employer value proposition through interviews with leaders, managers and employees, support to the leadership team and upskilling of the in-house HR team, then a prioritised action plan.",
    result:
      "Assessment 95% complete in 5 months (15 people interviewed, 7 on-site visits). Individual situations resolved, recruitment and probation exits streamlined, compliance points secured (risk assessment document, template letters) and a shared roadmap to prepare the ISO 9001 audit.",
  },
  {
    tag: "HR Audit",
    context: "Services company — field operations, ~20 permanent staff",
    situation:
      "Strong growth and headcount thresholds crossed, but HR structuring lagging behind: a heavy administrative load on managers, inconsistent contracts and pay, unmet obligations (reviews, inactive works council, disability employment obligation, outdated risk assessment) and manual HR tools.",
    action:
      "A 5-week immersive HR audit, cross-interviews with leadership / managers / support, analysis of contracts and pay gaps, legal safeguarding (contracts, mandatory reviews, preparing works-council elections, internal rules), scoping of an HRIS project and launch of a managers' forum with peer coaching.",
    result:
      "A clear, costed workload plan: 10 HR workstreams identified (~33 days), from the HRIS to works-council elections. Major legal risks mapped and quantified, value-sharing and time-off schemes assessed, with an immediate start on HR support to managers and the tool migration.",
  },
];

export const CASES = { fr: CASES_FR, en: CASES_EN };
