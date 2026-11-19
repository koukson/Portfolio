import Title from "./Title";
import img from "../assets/img.png";
import { Code2, Terminal, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, renderIcon } from "../data/skills";
import { techStack } from "../data/techStack";

const About = () => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const [expandedSkillIndex, setExpandedSkillIndex] = useState<number | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  const toggleSkill = (index: number) => {
    setExpandedSkillIndex(expandedSkillIndex === index ? null : index);
  };

  // Aplatir toutes les compétences avec leur index global pour l'expand
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id, categoryName: cat.name }))
  );

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative"
      id="About"
    >
      <div className="w-full max-w-6xl mb-12">
        <Title title="À PROPOS DE MOI" gradient={true} />
        <p className="text-center text-muted-foreground -mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Découvrez mon profil, mes domaines d'expertise et les technologies que j'utilise au quotidien.
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
              Je suis un développeur passionné par la résolution de problèmes et la création d'expériences numériques élégantes.
              Mon but est d'unir l'art du code avec une ergonomie intuitive, assurant des performances optimales à l'échelle.
            </p>
            <p className="text-foreground/80 font-light leading-relaxed text-sm sm:text-base">
              Je combine une veille technologique active (frameworks hybrides, sécurité globale, infrastructure as code)
              avec l'usage d'outils d'IA pour accélérer l'analyse, la génération de tests et la détection de vulnérabilités,
              garantissant ainsi des applications plus robustes, maintenables et sécurisées.
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
              <span className="text-5xl font-black text-primary-custom tracking-tight">2+</span>
              <span className="text-sm font-semibold text-foreground/75">Années d'Expérience</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-secondary-custom tracking-tight">{allSkills.length}+</span>
              <span className="text-sm font-semibold text-foreground/75">Compétences Répertoriées</span>
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
            Développeur Full-Stack, Admin Système & Passionné Sécurité
          </p>
        </motion.div>

        {/* Card 4: Technological Stack / Badges (Large) - Maintenant data-driven */}
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
              Voici les technologies principales que j'utilise régulièrement. Survolez-les pour voir leurs couleurs !
            </p>

            {/* Tech Badges Container - Data-driven from techStack.ts */}
            <div className="flex flex-wrap gap-3 pt-4">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.03] dark:bg-black/15 border border-white/5 rounded-2xl cursor-default transition-all duration-300 ${tech.borderHover}`}
                  style={{ boxShadow: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${tech.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-foreground/90">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 5: Core Fields of Expertise - Maintenant data-driven depuis skills.ts */}
        <div className="lg:col-span-3 space-y-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.05, duration: 0.5 }}
              className="glass-enhanced rounded-3xl border-white/5 overflow-hidden"
            >
              {/* Category Header - Clickable pour expand/reduce */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/[0.02] transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {renderIcon(category.icon, { className: "w-6 h-6" })}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-black text-foreground leading-snug">{category.name}</h3>
                    <span className="px-2 py-0.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full">
                      {category.skills.length} compétences
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 font-light mt-1">{category.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${expandedCategoryId === category.id ? 'rotate-180' : 'rotate-0'}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Expandable Skills List */}
              <AnimatePresence>
                {expandedCategoryId === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-6 space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const globalIndex = allSkills.findIndex(s => s.id === skill.id);
                        return (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                            className="group"
                          >
                            {/* Skill Header */}
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-black/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {renderIcon(skill.icon, { className: "w-5 h-5" })}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 flex-wrap">
                                  <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{skill.name}</h4>
                                  {skill.featured && (
                                    <span className="px-2 py-0.5 text-[10px] font-extrabold text-accent bg-accent/10 border border-accent/20 rounded-full uppercase tracking-wider">
                                      Vedette
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-foreground/70 font-light mt-1 line-clamp-2">{skill.description}</p>

                                {/* Progress Bar */}
                                <div className="mt-3 space-y-1.5">
                                  <div className="flex justify-between text-xs font-bold text-muted-foreground/80">
                                    <span>Maîtrise</span>
                                    <span className="text-accent">{skill.proficiency}%</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-white/5 dark:bg-black/20 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                                      style={{ width: `${skill.proficiency}%` }}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Expand Button for Extended Description */}
                              {skill.extendedDescription && (
                                <button
                                  type="button"
                                  onClick={() => toggleSkill(globalIndex)}
                                  className="flex-shrink-0 p-2 text-muted-foreground hover:text-accent transition-colors"
                                  aria-label={expandedSkillIndex === globalIndex ? `Réduire ${skill.name}` : `Étendre ${skill.name}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className={`w-4 h-4 transition-transform duration-300 ${expandedSkillIndex === globalIndex ? 'rotate-180' : 'rotate-0'}`}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </button>
                              )}
                            </div>

                            {/* Extended Description */}
                            <AnimatePresence>
                              {expandedSkillIndex === globalIndex && skill.extendedDescription && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, marginTop: -8 }}
                                  animate={{ height: 'auto', opacity: 1, marginTop: 0 }}
                                  exit={{ height: 0, opacity: 0, marginTop: -8 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden ml-14 border-l-2 border-accent/20 pl-4"
                                >
                                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-light">
                                    {skill.extendedDescription}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default About;