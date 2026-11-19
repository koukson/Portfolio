/**
 * Définition des compétences - Structure extensible
 * Ajoutez autant de catégories et compétences que vous voulez
 * Chaque compétence peut avoir : nom, description courte/longue, icône, niveau, couleur, tags, etc.
 */

import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Server,
  Shield,
  Terminal,
  Globe,
  Database,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Network,
  Lock,
  Bug,
  GitBranch,
  Container,
  Monitor,
  Layers,
  Zap,
  Brain,
  Search,
  FileCode,
  GraduationCap,
  BookOpen,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

// Map des icônes disponibles (pour éviter d'importer tout lucide-react dans les composants)
export const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Server,
  Shield,
  Terminal,
  Globe,
  Database,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Network,
  Lock,
  Bug,
  GitBranch,
  Container,
  Monitor,
  Layers,
  Zap,
  Brain,
  Search,
  FileCode,
  GraduationCap,
  BookOpen,
  Wrench,
};

/**
 * Rend une icône Lucide en tant que ReactNode
 * Résout le problème de type LucideIcon vs ReactNode
 */
export function renderIcon(iconName: string, props?: React.SVGProps<SVGSVGElement>): ReactNode {
  const Icon = iconMap[iconName] || Code2;
  return <Icon {...props} />;
}

/**
 * Récupère le composant d'icône Lucide (pour usage direct en JSX)
 */
export function getSkillIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Code2;
}

// Types
export interface Skill {
  id: string;
  name: string;
  description: string;
  extendedDescription: string;
  icon: string; // Clé de iconMap
  proficiency: number; // 0-100
  colorClass: string; // Classes Tailwind pour le gradient (ex: "from-blue-500/20 to-cyan-500/10")
  tags?: string[]; // Tags pour filtrage/recherche future
  featured?: boolean; // Pour mise en avant
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  colorClass: string;
  skills: Skill[];
  order: number; // Ordre d'affichage
}

/**
 * CATÉGORIES DE COMPÉTENCES
 * Ajoutez de nouvelles catégories ici - elles apparaîtront automatiquement dans la section "À propos"
 * L'ordre est défini par la propriété `order`
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Développement Frontend",
    description: "Interfaces utilisateur modernes, performantes et accessibles",
    icon: "LayoutDashboard",
    colorClass: "from-cyan-500/20 to-blue-500/10",
    order: 1,
    skills: [
      {
        id: "react",
        name: "React / Next.js",
        description: "Architectures composants, hooks, SSR/SSG, gestion d'état (Zustand, Redux)",
        extendedDescription: "Je crée des architectures front-end robustes, scalables et faciles à maintenir. Je prête une attention rigoureuse à l'accessibilité (WCAG), au responsive design, à l'optimisation du SEO et au maintien de performances d'affichage élevées (Core Web Vitals).",
        icon: "Code2",
        proficiency: 85,
        colorClass: "from-cyan-500/20 to-blue-500/10",
        tags: ["react", "nextjs", "typescript", "tailwind", "hooks"],
        featured: true,
      },
      {
        id: "flutter",
        name: "Flutter / Dart",
        description: "Applications mobiles cross-platform natives iOS/Android",
        extendedDescription: "Développement d'applications mobiles fluides avec gestion d'état (Riverpod, Bloc), animations personnalisées, intégration native (Method Channels) et déploiement sur les stores.",
        icon: "Smartphone",
        proficiency: 75,
        colorClass: "from-sky-500/20 to-blue-500/10",
        tags: ["flutter", "dart", "mobile", "riverpod", "bloc"],
        featured: true,
      },
      {
        id: "ui-ux",
        name: "UI/UX & Design System",
        description: "Design responsive, composants réutilisables, Tailwind CSS",
        extendedDescription: "Création de systèmes de design cohérents, composants accessibles, tokens de design, dark mode, et collaboration étroite avec designers via Figma.",
        icon: "Monitor",
        proficiency: 80,
        colorClass: "from-purple-500/20 to-pink-500/10",
        tags: ["tailwind", "figma", "design-system", "accessibility"],
      },
    ],
  },
  {
    id: "backend",
    name: "Développement Backend",
    description: "APIs robustes, bases de données, architecture serveur",
    icon: "Server",
    colorClass: "from-green-500/20 to-emerald-500/10",
    order: 2,
    skills: [
      {
        id: "nodejs",
        name: "Node.js / Express / NestJS",
        description: "APIs REST/GraphQL, authentification JWT/OAuth, validation, tests",
        extendedDescription: "Je construis des serveurs backend stables et véloces. J'intègre des systèmes d'authentification sécurisés (JWT, OAuth2, sessions), gère les architectures MVC/Modular et structure la modélisation des données pour les applications complexes.",
        icon: "Code2",
        proficiency: 75,
        colorClass: "from-green-500/20 to-emerald-500/10",
        tags: ["nodejs", "express", "nestjs", "graphql", "rest"],
        featured: true,
      },
      {
        id: "databases",
        name: "Bases de données",
        description: "SQL (PostgreSQL, MySQL) & NoSQL (MongoDB), modélisation, optimisation",
        extendedDescription: "Conception de schémas relationnels normalisés, requêtes optimisées, indexes, transactions, migrations (Prisma, TypeORM), réplication et stratégies de backup.",
        icon: "Database",
        proficiency: 70,
        colorClass: "from-blue-500/20 to-indigo-500/10",
        tags: ["postgresql", "mysql", "mongodb", "redis", "prisma", "typeorm"],
      },
      {
        id: "api-design",
        name: "Architecture API & Microservices",
        description: "REST, GraphQL, gRPC, message queues, event-driven",
        extendedDescription: "Conception d'APIs versionnées, documentation OpenAPI/Swagger, rate limiting, caching stratégique (Redis), communication inter-services (RabbitMQ, Kafka).",
        icon: "Layers",
        proficiency: 65,
        colorClass: "from-orange-500/20 to-red-500/10",
        tags: ["graphql", "grpc", "rabbitmq", "kafka", "microservices"],
      },
    ],
  },
  {
    id: "sysadmin",
    name: "Administration Système & DevOps",
    description: "Infrastructure Linux, conteneurisation, CI/CD, cloud",
    icon: "Terminal",
    colorClass: "from-violet-500/20 to-purple-500/10",
    order: 3,
    skills: [
      {
        id: "linux",
        name: "Linux / Administration Serveur",
        description: "Gestion VPS, services systemd, scripts bash, monitoring, logs",
        extendedDescription: "Configuration et maintenance de serveurs Linux (Ubuntu, Debian, Alpine), gestion des permissions, services systemd, cron jobs, analyse de logs (journalctl, grep), durcissement sécurité (fail2ban, ufw, SSH hardening).",
        icon: "Terminal",
        proficiency: 70,
        colorClass: "from-slate-500/20 to-gray-500/10",
        tags: ["linux", "ubuntu", "debian", "bash", "systemd", "ssh"],
        featured: true,
      },
      {
        id: "docker",
        name: "Docker & Conteneurisation",
        description: "Dockerfile multi-stage, Docker Compose, registries, optimisation images",
        extendedDescription: "Création d'images légères et sécurisées (multi-stage builds, distroless), orchestration locale avec Docker Compose, gestion des volumes, réseaux, variables d'environnement, scan de vulnérabilités (Trivy).",
        icon: "Container",
        proficiency: 75,
        colorClass: "from-blue-500/20 to-cyan-500/10",
        tags: ["docker", "dockerfile", "compose", "containerd", "trivy"],
        featured: true,
      },
      {
        id: "kubernetes",
        name: "Kubernetes (Apprentissage)",
        description: "Pods, Services, Deployments, ConfigMaps, Secrets, Helm",
        extendedDescription: "Déploiement d'applications sur clusters K8s (kind, minikube, cloud managés), gestion des ressources, autoscaling (HPA), Ingress controllers, opérateurs, Helm charts pour packaging.",
        icon: "Cloud",
        proficiency: 45,
        colorClass: "from-indigo-500/20 to-blue-500/10",
        tags: ["kubernetes", "k8s", "helm", "kubectl", "ingress"],
      },
      {
        id: "cicd",
        name: "CI/CD & GitOps",
        description: "GitHub Actions, GitLab CI, pipelines, déploiement automatisé",
        extendedDescription: "Pipelines multi-environnements (dev, staging, prod), tests automatisés, scans sécurité (SAST/DAST), déploiements blue-green/canary, rollback automatique, GitOps avec ArgoCD/Flux.",
        icon: "GitBranch",
        proficiency: 60,
        colorClass: "from-orange-500/20 to-amber-500/10",
        tags: ["github-actions", "gitlab-ci", "argocd", "flux", "gitops"],
      },
      {
        id: "cloud",
        name: "Cloud & Infrastructure as Code",
        description: "AWS/GCP/Azure, Terraform, Ansible, serverless",
        extendedDescription: "Provisionning d'infrastructure via Terraform, configuration management avec Ansible, services managés (RDS, S3, CloudRun, Functions), estimation coûts, 태깅 et governance.",
        icon: "Cloud",
        proficiency: 50,
        colorClass: "from-teal-500/20 to-cyan-500/10",
        tags: ["aws", "gcp", "terraform", "ansible", "serverless"],
      },
    ],
  },
  {
    id: "security",
    name: "Cybersécurité",
    description: "Sécurité applicative, offensive, défensive, conformité",
    icon: "Shield",
    colorClass: "from-red-500/20 to-rose-500/10",
    order: 4,
    skills: [
      {
        id: "appsec",
        name: "Sécurité Applicative (AppSec)",
        description: "OWASP Top 10, SAST/DAST, revues de code, threat modeling",
        extendedDescription: "Audit de vulnérabilités web (injections SQL, XSS, CSRF, SSRF, IDOR), intégration d'outils SAST (SonarQube, Semgrep) et DAST dans la CI/CD, modélisation des menaces (STRIDE), secure code review.",
        icon: "Bug",
        proficiency: 60,
        colorClass: "from-red-500/20 to-orange-500/10",
        tags: ["owasp", "sast", "dast", "threat-modeling", "code-review"],
        featured: true,
      },
      {
        id: "netsec",
        name: "Sécurité Réseau & Infrastructure",
        description: "Pare-feu, VPN, IDS/IPS, segmentation, zero-trust",
        extendedDescription: "Configuration de firewalls (iptables, nftables, pfSense), VPN (WireGuard, OpenVPN), surveillance réseau (Suricata, Zeek), segmentation VLAN, principes Zero Trust, hardening noyau Linux.",
        icon: "Network",
        proficiency: 55,
        colorClass: "from-blue-500/20 to-indigo-500/10",
        tags: ["firewall", "vpn", "ids", "ips", "zero-trust", "suricata"],
      },
      
    ],
  },
  {
    id: "emerging",
    name: "Technologies Émergentes & Veille",
    description: "IA, Web3, Edge, Rust, WebAssembly - Exploration continue",
    icon: "Brain",
    colorClass: "from-fuchsia-500/20 to-purple-500/10",
    order: 5,
    skills: [
      {
        id: "ai-ml",
        name: "IA / ML Appliquée",
        description: "LLMs, RAG, embeddings, fine-tuning, agents, MLOps",
        extendedDescription: "Intégration de modèles LLM (OpenAI, Anthropic, locaux via Ollama), architectures RAG (LangChain, LlamaIndex), vector stores (Pinecone, Qdrant, pgvector), évaluation et guardrails, déploiement modèles (vLLM, TGI).",
        icon: "Brain",
        proficiency: 55,
        colorClass: "from-green-500/20 to-teal-500/10",
        tags: ["llm", "rag", "langchain", "embeddings", "vector-db", "mlops"],
      },
      
    ],
  },
];

/**
 * Aide : Récupère toutes les compétences aplaties (pour filtres, recherche, etc.)
 */
export function getAllSkills(): Skill[] {
  return skillCategories.flatMap((cat) => cat.skills);
}

/**
 * Aide : Récupère les compétences en vedette (featured: true)
 */
export function getFeaturedSkills(): Skill[] {
  return getAllSkills().filter((s) => s.featured);
}

/**
 * Aide : Récupère une compétence par ID
 */
export function getSkillById(id: string): Skill | undefined {
  return getAllSkills().find((s) => s.id === id);
}

/**
 * Aide : Récupère les compétences par tag
 */
export function getSkillsByTag(tag: string): Skill[] {
  return getAllSkills().filter((s) => s.tags?.includes(tag));
}

