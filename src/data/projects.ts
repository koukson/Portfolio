/**
 * Projets du portfolio - Structure extensible
 * Ajoutez autant de projets que vous voulez
 * Chaque projet peut être taggé par catégorie, technologie, etc.
 */

import img1 from "../assets/projects/1.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Pour les cartes (max ~160 chars)
  longDescription?: string; // Description détaillée (optionnelle, pour modal/page dédiée)
  technologies: string[]; // Liste des techs utilisées
  category: ProjectCategory; // Catégorie principale
  tags?: string[]; // Tags additionnels pour filtrage
  demoLink?: string; // Lien vers la démo live
  repoLink?: string; // Lien vers le repo GitHub
  image?: string; // Chemin relatif vers l'image (dans src/assets/projects/)
  featured?: boolean; // Projet mis en avant
  status: ProjectStatus; // État du projet
  startDate?: string; // YYYY-MM (optionnel)
  endDate?: string; // YYYY-MM ou "present" (optionnel)
  highlights?: string[]; // Points forts / réalisations clés
  metrics?: ProjectMetrics; // Métriques quantifiables
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "mobile"
  | "devops"
  | "security"
  | "tooling"
  | "learning"
  | "other";

export type ProjectStatus = "completed" | "in-progress" | "archived" | "on-hold";

export interface ProjectMetrics {
  users?: string; // Ex: "1k+"
  performance?: string; // Ex: "Lighthouse 95+"
  uptime?: string; // Ex: "99.9%"
  loadTime?: string; // Ex: "< 1.2s"
  testCoverage?: string; // Ex: "85%"
  [key: string]: string | undefined;
}

// Configuration des catégories pour l'affichage
export const projectCategoryConfig: Record<ProjectCategory, { label: string; color: string; icon: string }> = {
  fullstack: { label: "Full-Stack", color: "from-violet-500/20 to-purple-500/10", icon: "Layers" },
  frontend: { label: "Frontend", color: "from-cyan-500/20 to-blue-500/10", icon: "LayoutDashboard" },
  backend: { label: "Backend", color: "from-green-500/20 to-emerald-500/10", icon: "Server" },
  mobile: { label: "Mobile", color: "from-sky-500/20 to-blue-500/10", icon: "Smartphone" },
  devops: { label: "DevOps / SysAdmin", color: "from-violet-500/20 to-purple-500/10", icon: "Terminal" },
  security: { label: "Sécurité", color: "from-red-500/20 to-rose-500/10", icon: "Shield" },
  tooling: { label: "Outils / CLI", color: "from-orange-500/20 to-amber-500/10", icon: "Wrench" },
  learning: { label: "Apprentissage / POC", color: "from-fuchsia-500/20 to-purple-500/10", icon: "GraduationCap" },
  other: { label: "Autres", color: "from-gray-500/20 to-slate-500/10", icon: "FileCode" },
};

export const projectStatusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  completed: { label: "Terminé", color: "text-green-400 bg-green-500/10" },
  "in-progress": { label: "En cours", color: "text-blue-400 bg-blue-500/10" },
  archived: { label: "Archivé", color: "text-gray-400 bg-gray-500/10" },
  "on-hold": { label: "En pause", color: "text-yellow-400 bg-yellow-500/10" },
};

/**
 * LISTE DES PROJETS
 * Ajoutez vos nouveaux projets ici - ils apparaîtront automatiquement
 * L'ordre dans le tableau définit l'ordre d'affichage (premier = plus récent/mis en avant)
 */
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Plateforme E-commerce Complète",
    shortDescription: "Boutique en ligne avec catalogue dynamique, panier persistant, paiement simulé et espace admin.",
    longDescription: `
      Développement d'une solution e-commerce complète de A à Z.
      **Frontend** : React 18 + Next.js 14 (App Router), TypeScript, Tailwind CSS, Zustand pour l'état global.
      **Backend** : Node.js + Express, API REST versionnée, Prisma ORM + PostgreSQL.
      **Fonctionnalités** : Authentification JWT (access/refresh tokens), rôles utilisateur (client/admin), catalogue avec filtres/facettes, panier côté client + serveur, simulation de paiement Stripe, espace d'administration (CRUD produits, gestion commandes, stats), emails transactionnels (Nodemailer), tests unitaires (Vitest) et E2E (Playwright).
      **DevOps** : Docker multi-stage, Docker Compose pour dev, CI/CD GitHub Actions (lint, test, build, deploy sur Render), variables d'environnement par environnement.
    `,
    technologies: ["React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    category: "frontend",
    tags: ["ecommerce", "payments", "admin-dashboard", "auth"],
    demoLink: "https://e-commerce-p7gn.onrender.com",
    repoLink: "https://github.com/koukson/E-commerceStatique.git",
    image: img1,
    featured: true,
    status: "completed",
    startDate: "2024-01",
    endDate: "2024-04",
    highlights: [
      "Architecture modulaire scalable (feature-based)",
      "Authentification complète avec refresh tokens rotation",
      "Pipeline CI/CD zero-downtime deployment",
      "Score Lighthouse > 95 sur toutes les métriques",
    ],
  },

];

/**
 * Aide : Récupère les projets mis en avant
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/**
 * Aide : Récupère les projets par catégorie
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

/**
 * Aide : Récupère les projets par statut
 */
export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

/**
 * Aide : Récupère un projet par ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Aide : Récupère toutes les catégories utilisées
 */
export function getUsedCategories(): ProjectCategory[] {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories);
}

/**
 * Aide : Récupère toutes les technologies utilisées (dédupliquées)
 */
export function getAllTechnologies(): string[] {
  const techs = new Set(projects.flatMap((p) => p.technologies));
  return Array.from(techs).sort();
}