/**
 * Expériences & Formation - Structure extensible
 * Ajoutez autant d'entrées que vous voulez (emplois, stages, formations, certifications, bénévolat...)
 * Chaque entrée est typée et peut être catégorisée
 */

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location?: string;
  period: string; // Format libre : "2023-2026", "Jan 2024 - Présent", "Juin 2023", etc.
  startDate?: string; // YYYY-MM (pour tri automatique)
  endDate?: string; // YYYY-MM ou "present"
  description: string[]; // Points clés (bullets)
  technologies?: string[]; // Techs utilisées/apprises
  category?: ExperienceCategory; // Pour regroupement/filtrage
  highlights?: string[]; // Réalisations marquantes (optionnel)
  links?: ExperienceLink[]; // Liens : certificat, projet, lettre, etc.
  featured?: boolean; // Mis en avant
}

export type ExperienceType =
  | "education"      // Formation diplômante
  | "certification"  // Certification professionnelle
  | "work"           // Emploi / CDI / Freelance
  | "internship"     // Stage
  | "freelance"      // Mission freelance
  | "volunteer"      // Bénévolat / Open source
  | "project"        // Projet personnel significatif
  | "training";      // Formation courte / Bootcamp / MOOC

export type ExperienceCategory =
  | "development"
  | "sysadmin"
  | "security"
  | "devops"
  | "management"
  | "design"
  | "data"
  | "other";

export interface ExperienceLink {
  label: string;
  url: string;
  type: "certificate" | "project" | "reference" | "article" | "other";
}

// Configuration d'affichage par type
export const experienceTypeConfig: Record<ExperienceType, { label: string; icon: string; color: string }> = {
  education: { label: "Formation", icon: "GraduationCap", color: "text-blue-400 bg-blue-500/10" },
  certification: { label: "Certification", icon: "Award", color: "text-yellow-400 bg-yellow-500/10" },
  work: { label: "Expérience Pro", icon: "Briefcase", color: "text-green-400 bg-green-500/10" },
  internship: { label: "Stage", icon: "Building2", color: "text-cyan-400 bg-cyan-500/10" },
  freelance: { label: "Freelance", icon: "Laptop", color: "text-purple-400 bg-purple-500/10" },
  volunteer: { label: "Bénévolat", icon: "Heart", color: "text-rose-400 bg-rose-500/10" },
  project: { label: "Projet Personnel", icon: "Code2", color: "text-violet-400 bg-violet-500/10" },
  training: { label: "Formation Continue", icon: "BookOpen", color: "text-orange-400 bg-orange-500/10" },
};

// Configuration d'affichage par catégorie
export const experienceCategoryConfig: Record<ExperienceCategory, { label: string; color: string }> = {
  development: { label: "Développement", color: "from-cyan-500/20 to-blue-500/10" },
  sysadmin: { label: "Admin Système", color: "from-violet-500/20 to-purple-500/10" },
  security: { label: "Sécurité", color: "from-red-500/20 to-rose-500/10" },
  devops: { label: "DevOps", color: "from-green-500/20 to-emerald-500/10" },
  management: { label: "Management", color: "from-yellow-500/20 to-orange-500/10" },
  design: { label: "Design", color: "from-pink-500/20 to-rose-500/10" },
  data: { label: "Data / IA", color: "from-indigo-500/20 to-purple-500/10" },
  other: { label: "Autres", color: "from-gray-500/20 to-slate-500/10" },
};

/**
 * LISTE DES EXPÉRIENCES
 * Ajoutez vos nouvelles expériences ici - elles apparaîtront automatiquement dans la timeline
 * L'ordre dans le tableau = ordre d'affichage (plus récent en premier recommandé)
 */
export const experiences: Experience[] = [
   
  {
    id: "bac-s",
    type: "education",
    title: "Baccalauréat Scientifique Série D",
    organization: "Groupe Scolaire Michel Vako",
    location: "Abidjan, Côte d'Ivoire",
    period: "2022 - 2023",
    startDate: "2022-09",
    endDate: "2023-06",
    description: [
      "Spécialité Mathématiques / Physique-Chimie / SVT",
    ],
    technologies: [ "Mathématiques", "Physique"],
    featured: true,
  },
  {
    id: "licence-igl",
    type: "education",
    title: "Licence en Informatique - Génie Logiciel (IGL)",
    organization: "Université de Technologies d'Abidjan",
    location: "Abidjan, Côte d'Ivoire",
    period: "2023 - 2027",
    startDate: "2023-09",
    endDate: "2027-11",
    description: [
      "Programmation orientée objet (Java, C++, Python), structures de données & algorithmes",
      "Bases de données relationnelles (SQL, modélisation Merise/UML), normalisation",
      "Architecture logicielle : patterns (MVC, Repository, Factory), principes SOLID, Clean Code",
      "Développement Web : HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express",
      "Gestion de projet agile (Scrum), versioning Git, CI/CD basique, tests unitaires",
      "Anglais technique, droit de l'informatique, économie numérique",
    ],
    technologies: [],
    category: "development",
    featured: true,
    highlights: [
      "Projet de fin d'études :  (Full-Stack)",
      "Major de promotion mention  (2026-2027)",
    ],
  },
 {
    id: "freelance-ecommerce",
    type: "freelance",
    title: "Développement Plateforme E-commerce Sur Mesure",
    organization: "projet personnel",
    location: "Abidjan, Côte d'Ivoire",
    period: "2025-01 → 2026-04",
    startDate: "2025-01",
    endDate: "2026-04",
    description: [
      "Recueil besoins, conception BDD, architecture technique",
      "Frontend React + Next.js + Tailwind : catalogue, panier, checkout, compte client",
      "Admin dashboard : CRUD produits, gestion commandes, stats ventes, export CSV",
    ],
    technologies: ["React", "TypeScript", "Tailwind", ],
    category: "development",
    featured: true,
    highlights: [ "Plateforme e-commerce fonctionnelle et responsive, avec tableau de bord admin complet", "Optimisation SEO et performance, intégration paiement Stripe" ],
    links: [
      { label: "Voir la démo", url: "https://e-commerce-p7gn.onrender.com", type: "project" },
      { label: "Code source", url: "https://github.com/koukson/E-commerceStatique.git", type: "project" },
    ],
  },
  {
    id: "training-dev",
    type: "training",
    title: "",
    organization: "",
    period: "2026 - 2030",
    startDate: "2026-09",
    endDate: "2030-06",
    description: [],
    technologies: [],
    category: "development",
    featured: true,
    highlights: [],
  },
  {
    id: "training-sysadmin",
    type: "training",
    title: "",
    organization: "",
    period: "2026 - 2030",
    startDate: "2026-09",
    endDate: "2030-06",
    description: [],
    technologies: [],
    category: "sysadmin",
    featured: true,
    highlights: [],
  },
 
];

/**
 * Aide : Récupère les expériences par type
 */
export function getExperiencesByType(type: ExperienceType): Experience[] {
  return experiences.filter((e) => e.type === type);
}

/**
 * Aide : Récupère les expériences par catégorie
 */
export function getExperiencesByCategory(category: ExperienceCategory): Experience[] {
  return experiences.filter((e) => e.category === category);
}



/**
 * Aide : Récupère une expérience par ID
 */
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id);
}

/**
 * Aide : Trie les expériences par date de début (plus récent en premier)
 */
export function getExperiencesSortedByDate(): Experience[] {
  return [...experiences].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate + "-01").getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate + "-01").getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * Aide : Récupère tous les types utilisés
 */
export function getUsedExperienceTypes(): ExperienceType[] {
  const types = new Set(experiences.map((e) => e.type));
  return Array.from(types);
}

/**
 * Aide : Récupère toutes les catégories utilisées
 */
export function getUsedExperienceCategories(): ExperienceCategory[] {
  const cats = new Set(experiences.map((e) => e.category).filter(Boolean));
  return Array.from(cats) as ExperienceCategory[];
}