/**
 * Stack Technologique - Vitrine des outils maîtrisés
 * Structure plate pour la section "Mes Outils de Prédilection" (badges avec glow au hover)
 * Complémentaire aux compétences détaillées dans skills.ts
 */

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgCLAUDE from "../assets/techno/claude.webp";
import imgMongodb from "../assets/techno/mangodb.png";
import imgLinux from "../assets/techno/linux.jpg";
import imgTailwind from "../assets/techno/tailwindcss.jpg";
import imgPostgreSQL from "../assets/techno/postgresql.png";
import imgTypeScript from "../assets/techno/ts.png";
import imgGit from "../assets/techno/git.png";
import imgDocker from "../assets/techno/docker.jpg";
import imgGitHub from "../assets/techno/githubactions.jpg";

export interface TechItem {
  id: string;
  name: string;
  image: string; // Chemin vers l'image (dans src/assets/techno/)
  category: TechCategory;
  proficiency: number; // 0-100 (pour éventuelle barre de progression future)
  glowColor: string; // Couleur du glow au hover (rgba)
  borderHover: string; // Classe Tailwind pour border au hover
  description?: string; // Tooltip / description courte
  officialUrl?: string; // Lien vers site officiel
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "devops"
  | "tools"
  | "design"
  | "security"
  | "cloud"
  | "other";

// Configuration des catégories pour regroupement/affichage futur
export const techCategoryConfig: Record<TechCategory, { label: string; color: string }> = {
  frontend: { label: "Frontend", color: "from-cyan-500/20 to-blue-500/10" },
  backend: { label: "Backend", color: "from-green-500/20 to-emerald-500/10" },
  mobile: { label: "Mobile", color: "from-sky-500/20 to-blue-500/10" },
  database: { label: "Base de données", color: "from-blue-500/20 to-indigo-500/10" },
  devops: { label: "DevOps / SysAdmin", color: "from-violet-500/20 to-purple-500/10" },
  tools: { label: "Outils", color: "from-gray-500/20 to-slate-500/10" },
  design: { label: "Design", color: "from-pink-500/20 to-rose-500/10" },
  security: { label: "Sécurité", color: "from-red-500/20 to-rose-500/10" },
  cloud: { label: "Cloud", color: "from-teal-500/20 to-cyan-500/10" },
  other: { label: "Autres", color: "from-amber-500/20 to-orange-500/10" },
};

/**
 * LISTE DES TECHNOLOGIES
 * Ajoutez vos nouveaux outils ici - ils apparaîtront dans la grille de badges
 * L'ordre = ordre d'affichage
 * Pour ajouter une technologie : ajoutez l'image dans src/assets/techno/ et référencez-la ici
 */
export const techStack: TechItem[] = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    image: imgREACT,
    category: "frontend",
    proficiency: 85,
    glowColor: "rgba(34, 211, 238, 0.4)",
    borderHover: "hover:border-cyan-400/50",
    description: "Bibliothèque UI composants, hooks, ecosystem",
    officialUrl: "https://react.dev",
  },
  {
    id: "nextjs",
    name: "Next.js",
    image: imgNEXT,
    category: "frontend",
    proficiency: 80,
    glowColor: "rgba(192, 132, 252, 0.4)",
    borderHover: "hover:border-purple-400/50",
    description: "Framework React full-stack (App Router, SSR, SSG)",
    officialUrl: "https://nextjs.org",
  },
  {
    id: "typescript",
    name: "TypeScript",
    image: imgTypeScript,
    category: "frontend",
    proficiency: 85,
    glowColor: "rgba(49, 120, 198, 0.4)",
    borderHover: "hover:border-blue-400/50",
    description: "JavaScript typé statiquement",
    officialUrl: "https://www.typescriptlang.org",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    image: imgTailwind,
    category: "frontend",
    proficiency: 90,
    glowColor: "rgba(56, 189, 248, 0.4)",
    borderHover: "hover:border-sky-400/50",
    description: "Framework CSS utility-first",
    officialUrl: "https://tailwindcss.com",
  },
  {
    id: "html",
    name: "HTML5",
    image: imgHTML,
    category: "frontend",
    proficiency: 95,
    glowColor: "rgba(249, 115, 22, 0.4)",
    borderHover: "hover:border-orange-400/50",
    description: "Langage de balisage sémantique",
    officialUrl: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    id: "css",
    name: "CSS3",
    image: imgCSS,
    category: "frontend",
    proficiency: 90,
    glowColor: "rgba(96, 165, 250, 0.4)",
    borderHover: "hover:border-blue-400/50",
    description: "Feuilles de style modernes (Grid, Flex, Variables)",
    officialUrl: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    id: "javascript",
    name: "JavaScript ",
    image: imgJS,
    category: "frontend",
    proficiency: 90,
    glowColor: "rgba(250, 204, 21, 0.4)",
    borderHover: "hover:border-yellow-400/50",
    description: "Langage de programmation du Web",
    officialUrl: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    image: imgNODE,
    category: "backend",
    proficiency: 80,
    glowColor: "rgba(74, 222, 128, 0.4)",
    borderHover: "hover:border-green-400/50",
    description: "Runtime JS côté serveur",
    officialUrl: "https://nodejs.org",
  },
  
 
 

  // Mobile
  {
    id: "flutter",
    name: "Flutter",
    image: imgFLUTTER,
    category: "mobile",
    proficiency: 75,
    glowColor: "rgba(56, 189, 248, 0.4)",
    borderHover: "hover:border-sky-400/50",
    description: "Framework UI cross-platform (iOS/Android/Web/Desktop)",
    officialUrl: "https://flutter.dev",
  },
  

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    image: imgPostgreSQL,
    category: "database",
    proficiency: 75,
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderHover: "hover:border-blue-500/50",
    description: "BDD relationnelle avancée open-source",
    officialUrl: "https://www.postgresql.org",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    image: imgMongodb,
    category: "database",
    proficiency: 60,
    glowColor: "rgba(34, 197, 94, 0.4)",
    borderHover: "hover:border-green-500/50",
    description: "BDD document NoSQL",
    officialUrl: "https://www.mongodb.com",
  },
  

  // DevOps / SysAdmin
  {
    id: "docker",
    name: "Docker",
    image: imgDocker,
    category: "devops",
    proficiency: 80,
    glowColor: "rgba(34, 211, 238, 0.4)",
    borderHover: "hover:border-cyan-400/50",
    description: "Conteneurisation d'applications",
    officialUrl: "https://www.docker.com",
  },
  {
    id: "linux",
    name: "Linux (Ubuntu/Debian)",
    image: imgLinux,
    category: "devops",
    proficiency: 75,
    glowColor: "rgba(220, 38, 38, 0.4)",
    borderHover: "hover:border-red-500/50",
    description: "Administration système, scripting, services",
    officialUrl: "https://www.linux.org",
  },
  
  
  {
    id: "github-actions",
    name: "GitHub Actions",
    image: imgGitHub,
    category: "devops",
    proficiency: 70,
    glowColor: "rgba(139, 92, 246, 0.4)",
    borderHover: "hover:border-purple-400/50",
    description: "CI/CD natif GitHub",
    officialUrl: "https://github.com/features/actions",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    image: imgGit,
    category: "tools",
    proficiency: 90,
    glowColor: "rgba(249, 115, 22, 0.4)",
    borderHover: "hover:border-orange-400/50",
    description: "Contrôle de version distribué",
    officialUrl: "https://git-scm.com",
  },
  

  // AI
  {
    id: "claude",
    name: "Claude AI",
    image: imgCLAUDE,
    category: "tools",
    proficiency: 70,
    glowColor: "rgba(244, 63, 94, 0.4)",
    borderHover: "hover:border-rose-400/50",
    description: "Assistant IA pour le développement",
    officialUrl: "https://www.claude.com",
  },
];

/**
 * Aide : Récupère les technologies par catégorie
 */
export function getTechByCategory(category: TechCategory): TechItem[] {
  return techStack.filter((t) => t.category === category);
}

/**
 * Aide : Récupère les catégories utilisées
 */
export function getUsedTechCategories(): TechCategory[] {
  const cats = new Set(techStack.map((t) => t.category));
  return Array.from(cats);
}

/**
 * Aide : Récupère une tech par ID
 */
export function getTechById(id: string): TechItem | undefined {
  return techStack.find((t) => t.id === id);
}

/**
 * Aide : Trie par niveau de maîtrise (décroissant)
 */
export function getTechSortedByProficiency(): TechItem[] {
  return [...techStack].sort((a, b) => b.proficiency - a.proficiency);
}