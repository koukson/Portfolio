import React from "react";
import Title from "./Title";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  Briefcase,
  Building2,
  Laptop,
  Heart,
  Code2,
  BookOpen,
} from "lucide-react";
import { getExperiencesSortedByDate, experienceTypeConfig, experienceCategoryConfig } from "../data/experiences";

const typeIconMap = {
  GraduationCap,
  Award,
  Briefcase,
  Building2,
  Laptop,
  Heart,
  Code2,
  BookOpen,
};

const Experiences = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Utiliser les expériences triées par date (plus récent en premier)
  const sortedExperiences = getExperiencesSortedByDate();

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 relative"
      id="Experiences"
    >
      <div className="w-full max-w-4xl mb-16 text-center">
        <Title title="MON PARCOURS" gradient={true} />
        <p className="text-muted-foreground -mt-2 max-w-md mx-auto text-sm sm:text-base">
          Découvrez mon parcours académique, mes certifications, expériences professionnelles et formations continues.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-5xl px-6">

        {/* Central Vertical Line (centered on desktop, left-aligned on mobile) */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent/20 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {sortedExperiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedId === exp.id;
            const typeConfig = experienceTypeConfig[exp.type];
            const categoryConfig = exp.category ? experienceCategoryConfig[exp.category] : null;
            const TypeIcon = typeIconMap[typeConfig.icon as keyof typeof typeIconMap] || Briefcase;

            return (
              <div
                key={exp.id}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-9 md:items-center gap-6 md:gap-0"
              >

                {/* 1. Year/Period Container (desktop only, alternates position) */}
                <div className={`hidden md:flex md:col-span-4 items-center ${
                  isLeft ? 'md:justify-end md:pr-10 md:order-1' : 'md:justify-start md:pl-10 md:order-3'
                }`}>
                  <motion.div
                    initial={{ x: isLeft ? -15 : 15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-block"
                  >
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-wider shadow-sm whitespace-nowrap">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>

                {/* 2. Timeline central dot (Absolute on mobile, grid column 5 on desktop) */}
                <div className="absolute left-[31px] md:relative md:left-0 md:col-span-1 md:flex md:justify-center md:items-center z-20 -translate-x-1/2 md:translate-x-0 md:order-2 top-6 md:top-auto">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/15 cursor-pointer"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <TypeIcon className="w-4 h-4 text-accent" />
                  </motion.div>
                </div>

                {/* 3. Card Container (desktop alternates, full width mobile with pl padding) */}
                <div className={`w-full md:col-span-4 ${
                  isLeft ? 'md:order-3 text-left' : 'md:order-1 text-left md:text-right'
                }`}>
                  <motion.div
                    initial={{ x: isLeft ? 20 : -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="glass-enhanced p-6 rounded-2xl border-white/5 relative overflow-hidden"
                  >
                    {/* Mobile Period Badge */}
                    <div className="md:hidden mb-3 inline-block">
                      <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase">
                        {exp.period}
                      </span>
                    </div>

                    {/* Type Badge + Category Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${typeConfig.color}`}>
                        {typeConfig.label}
                      </span>
                      {categoryConfig && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r text-white/90"
                          style={{ background: categoryConfig.color }}>
                          {categoryConfig.label}
                        </span>
                      )}
                    </div>

                    {/* Card Header */}
                    <div className={`flex items-start gap-4 mb-4 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mt-1">
                          {exp.organization}
                          {exp.location && <span className="mx-2">·</span>}
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description bullet list */}
                    <ul className={`space-y-2.5 text-sm text-foreground/80 font-light mb-5 flex flex-col ${!isLeft ? 'md:items-end' : ''}`}>
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className={`flex items-start gap-2.5 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className={`${!isLeft ? 'md:text-right' : ''}`}>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Used */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className={`flex flex-wrap gap-2 pt-3 border-t border-white/5 mb-4 ${!isLeft ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/[0.03] dark:bg-black/15 border border-white/5 rounded-xl text-xs font-medium text-accent/80 hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className={`space-y-2 pt-3 border-t border-white/5 mb-4 ${!isLeft ? 'md:text-right' : ''}`}>
                        <h5 className="text-xs font-extrabold uppercase tracking-wider text-accent mb-2">Points forts</h5>
                        <ul className="space-y-1.5">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-xs text-foreground/70 font-light">
                              <span className="w-1 h-1 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className={`flex flex-wrap gap-2 pt-3 border-t border-white/5 ${!isLeft ? 'md:justify-end' : ''}`}>
                        {exp.links.map((link, lIndex) => (
                          <motion.a
                            key={lIndex}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl text-xs font-semibold text-foreground hover:text-accent transition-all duration-200 flex items-center gap-1.5"
                          >
                            {link.label}
                          </motion.a>
                        ))}
                      </div>
                    )}

                    {/* Expandable Box */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`pt-4 mt-4 border-t border-white/5 space-y-3 ${!isLeft ? 'md:text-right' : ''}`}>
                            {exp.highlights && exp.highlights.length > 0 && (
                              <>
                                <h5 className="text-xs font-extrabold uppercase tracking-wider text-accent">Réalisations marquantes</h5>
                                <ul className="space-y-1.5">
                                  {exp.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start gap-2 text-xs text-muted-foreground font-light">
                                      <span className="w-1 h-1 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Click hint on dot */}
                    <div className="absolute bottom-2 right-2 md:hidden text-[10px] text-muted-foreground/50 flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                        <TypeIcon className="w-2.5 h-2.5" />
                      </span>
                      Appuyer pour détails
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;