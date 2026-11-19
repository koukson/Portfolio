/**
 * Configuration centrale du portfolio
 * Modifiez ce fichier pour personnaliser les informations générales du site
 */

export const siteConfig = {
  // Identité
  name: " Jie Haounan Traoré",
  shortName: "JT",
  title: "Développeur Full-Stack & Explorateur Tech",
  location: "Abidjan, Côte d'Ivoire",
  email: "traorejie4@gmail.com",
  github: "https://github.com/koukson",
  linkedin: "https://linkedin.com/in/jie-traore",

  // SEO / Meta
  description: "Portfolio de Jie Traoré - Développeur Full-Stack passionné par les technologies modernes, l'administration système et la cybersécurité.",
  ogImage: "/og-image.png", // À ajouter dans public/

  // Navigation (ordre affiché dans la navbar)
  navigation: [
    { href: "#home", label: "ACCUEIL" },
    { href: "#About", label: "À PROPOS" },
    { href: "#Experiences", label: "PARCOURS" },
    { href: "#Projects", label: "PROJETS" },
    { href: "#Contact", label: "CONTACT" },
  ],

  // Footer
  footerTagline: "Développeur Full-Stack junior passionné par les technologies modernes et l'innovation logicielle.",

  // Disponibilité
  availableForWork: true,
  availabilityLabel: "Disponible pour vos projets",
};