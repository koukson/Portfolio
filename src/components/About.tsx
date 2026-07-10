import Title from "./Title";
import img from '../assets/img.png';
import { CalendarSync, LetterText, GlobeLock, CheckCircle2, Terminal, Code2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import tech images
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgCLAUDE from "../assets/techno/claude.webp";


const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Conception d'interfaces utilisateur modernes, ergonomiques et réactives avec React et Tailwind CSS.",
    extendedDescription: "Je crée des architectures front-end robustes, scalables et faciles à maintenir. Je prête une attention rigoureuse à l'accessibilité, au responsive design, à l'optimisation du SEO et au maintien de performances d'affichage élevées.",
    icon: <LetterText className="text-primary-custom w-6 h-6" />,
    proficiency: 85,
    colorClass: "from-primary-custom/20 to-accent/10"
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Création d'API RESTful et gestion de bases de données sécurisées avec Node.js, Express et SQL/NoSQL.",
    extendedDescription: "Je construis des serveurs backend stables et véloces. J'intègre des systèmes d'authentification sécurisés (JWT/OAuth), gère les architectures MVC et structure la modélisation des données pour les applications complexes.",
    icon: <CalendarSync className="text-secondary-custom w-6 h-6" />,
    proficiency: 75,
    colorClass: "from-secondary-custom/20 to-accent/10"
  },
{
    id: 3,
    title: "Cybersécurité",
    description: "Passionné par la sécurité applicative, l'analyse des menaces OWASP et la sécurisation des données.",
    extendedDescription: "J'audite la vulnérabilité des applications web pour neutraliser les failles de sécurité classiques (injections SQL, XSS, CSRF). Je me forme en continu via des plateformes de CTF (Root-Me, TryHackMe) pour concevoir du code nativement sécurisé.",
    icon: <GlobeLock className="text-accent w-6 h-6" />,
    proficiency: 50,
    colorClass: "from-accent/20 to-secondary-custom/10"
  },
];

const techStack = [
  { name: "React.js", img: imgREACT, glowColor: "rgba(34, 211, 238, 0.4)", borderHover: "hover:border-cyan-400/50" },
  { name: "Next.js", img: imgNEXT, glowColor: "rgba(192, 132, 252, 0.4)", borderHover: "hover:border-purple-400/50" },
  { name: "Node.js", img: imgNODE, glowColor: "rgba(74, 222, 128, 0.4)", borderHover: "hover:border-green-400/50" },
  { name: "Flutter", img: imgFLUTTER, glowColor: "rgba(56, 189, 248, 0.4)", borderHover: "hover:border-sky-400/50" },
  { name: "JavaScript", img: imgJS, glowColor: "rgba(250, 204, 21, 0.4)", borderHover: "hover:border-yellow-400/50" },
  { name: "CSS3", img: imgCSS, glowColor: "rgba(96, 165, 250, 0.4)", borderHover: "hover:border-blue-400/50" },
  { name: "HTML5", img: imgHTML, glowColor: "rgba(249, 115, 22, 0.4)", borderHover: "hover:border-orange-400/50" },
  { name: "Claude AI", img: imgCLAUDE, glowColor: "rgba(255, 255, 255, 0.4)", borderHover: "hover:border-white/50" },
];

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative"
      id="About"
    >
      <div className="w-full max-w-6xl mb-12">
        <Title title="A PROPOS ME" gradient={true} />
        <p className="text-center text-muted-foreground -mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Découvrez mon profil, mes compétences techniques majeures et les domaines dans lesquels j'excelle au quotidien.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Main Biography Presentation (Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-2 glass-enhanced p-8 rounded-3xl flex flex-col justify-between border-white/5 relative overflow-hidden"
        >
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-wider">Mon Profil</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Développeur Full-Stack & Explorateur Tech
            </h3>
            <p className="text-foreground/80 font-light leading-relaxed text-sm sm:text-base">
              Je suis un développeur passionné par la résolution de problèmes et la création d'expériences numériques élégantes. Mon but est d'unir l'art du code avec une ergonomie intuitive, assurant des performances optimales à l'échelle.
            </p>
            <p className="text-foreground/80 font-light leading-relaxed text-sm sm:text-base">
             Je combine une veille technologique active (frameworks hybrides, sécurité globale) avec l'usage d'outils d'IA pour accélérer l'analyse, la génération de tests et la détection de vulnérabilités, garantissant ainsi des applications plus robustes, maintenables et sécurisées.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5 mt-6 relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-custom flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">Code Propre & Clair</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary-custom flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">Design Responsive</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">Sécurité Native</span>
            </div>
          </div>
          
          {/* Subtle decoration vector */}
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Card 2: Interactive Statistics Card (Small) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-enhanced p-8 rounded-3xl flex flex-col justify-between border-white/5 bg-gradient-to-br from-accent/5 to-transparent"
        >
          <div className="flex items-center gap-2 text-primary-custom">
            <Terminal className="w-5 h-5" />
            <span className="text-xs uppercase font-extrabold tracking-wider">Statistiques</span>
          </div>

          <div className="flex flex-col space-y-6 my-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-primary-custom tracking-tight">1+</span>
              <span className="text-sm font-semibold text-foreground/75">Années d'Expérience</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-secondary-custom tracking-tight">2+</span>
              <span className="text-sm font-semibold text-foreground/75">Projets Réalisés</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-accent tracking-tight">100%</span>
              <span className="text-sm font-semibold text-foreground/75">Motivé & Curieux</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground leading-snug">
            Toujours en veille active et prêt à acquérir de nouvelles compétences.
          </div>
        </motion.div>

        {/* Card 3: Profile Visual Card (Medium) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-enhanced p-6 rounded-3xl flex flex-col items-center justify-center border-white/5 text-center relative overflow-hidden"
        >
          <div className="relative w-44 h-44 mb-4">
            {/* Soft glowing circle background */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse-slow" />
            <img
              src={img}
              alt="Jie Traoré"
              className="w-full h-full object-cover rounded-full border-2 border-accent shadow-xl relative z-10"
            />
          </div>
          <h4 className="text-xl font-bold text-foreground">Jie Traoré</h4>
          <p className="text-xs text-accent font-semibold tracking-wider uppercase mt-1">Abidjan, Côte d'Ivoire</p>
          <p className="text-xs text-muted-foreground max-w-[200px] mt-2 leading-relaxed">
            Développeur d'applications web & mobiles, passionné par l'innovation logicielle.
          </p>
        </motion.div>

        {/* Card 4: Technological Stack / Badges (Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-2 glass-enhanced p-8 rounded-3xl flex flex-col justify-between border-white/5"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary-custom">
              <Code2 className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-wider">Stack Technique</span>
            </div>
            <h3 className="text-2xl font-extrabold text-foreground">
              Mes Outils de Prédilection
            </h3>
            <p className="text-foreground/75 font-light text-sm sm:text-base">
              Voici les technologies principales que j'utilise régulièrement pour concevoir mes applications. Survolez-les pour voir leurs couleurs !
            </p>
            
            {/* Tech Badges Container */}
            <div className="flex flex-wrap gap-3 pt-4">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.03] dark:bg-black/15 border border-white/5 rounded-2xl cursor-default transition-all duration-300 ${tech.borderHover}`}
                  style={{
                    boxShadow: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${tech.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-foreground/90">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 5: Core Fields of Expertise (Span Columns) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              whileHover={{ y: -6 }}
              className="glass-enhanced p-6 rounded-3xl flex flex-col justify-between border-white/5 bg-gradient-to-b from-transparent to-white/[0.01] hover:to-white/[0.03] duration-300 group"
            >
              <div className="space-y-4">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-black text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {section.title}
                  </h3>
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed font-light min-h-[50px]">
                  {section.description}
                </p>

                {/* Progress bar with fix */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-bold text-muted-foreground/80">
                    <span>Niveau de Maîtrise</span>
                    <span className="text-accent">{section.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 dark:bg-black/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${section.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Expander component */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="text-xs font-extrabold text-accent uppercase tracking-wider hover:underline transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {expandedIndex === index ? 'Réduire' : 'En savoir plus'}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed pt-1 font-light">
                        {section.extendedDescription}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default About;