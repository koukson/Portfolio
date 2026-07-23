import React from "react";
import Title from "./Title";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase  } from "lucide-react";


const information = [
  {
    id: "1",
    title: "",
    period: "",
    description: [],
  },
  {
    id: "2",
    title: "LICENCE EN IGL (INFORMATIQUE GENIE LOGICIEL) ",
    period: "2023 - 2026",
    description: ["Université de Technologies d'Abidjan, Côte d'Ivoire", ],
  },
  {
    id: "3",
    title: "BACCALAURÉAT SCIENTIFIQUE SERIE D",
    period: "2022 - 2023",
    description: ["Goupe Scolaire Michel Vako, Abidjan, Côte d'Ivoire"],
  },
];

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

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
          Découvrez ma parcours académique et mes certifications.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-5xl px-6">
        
        {/* Central Vertical Line (centered on desktop, left-aligned on mobile) */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent/20 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {information.map((info, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedIndex === info.id;

            return (
              <div 
                key={info.id}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-9 md:items-center gap-6 md:gap-0"
              >
                
                {/* 1. Year Container (desktop only, alternates position) */}
                <div className={`hidden md:flex md:col-span-4 items-center ${
                  isLeft ? 'md:justify-end md:pr-10 md:order-1' : 'md:justify-start md:pl-10 md:order-3'
                }`}>
                  <motion.div 
                    initial={{ x: isLeft ? -15 : 15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-block"
                  >
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-wider shadow-sm">
                      {info.period}
                    </span>
                  </motion.div>
                </div>

                {/* 2. Timeline central dot (Absolute on mobile, grid column 5 on desktop) */}
                <div className="absolute left-[31px] md:relative md:left-0 md:col-span-1 md:flex md:justify-center md:items-center z-20 -translate-x-1/2 md:translate-x-0 md:order-2 top-6 md:top-auto">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/15 cursor-pointer"
                    onClick={() => toggleExpand(info.id)}
                  >
                    <Briefcase className="w-4 h-4 text-accent" />
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
                        {info.period}
                      </span>
                    </div>

                    {/* Card Header (flex directions adapted to side alignment) */}
                    <div className={`flex items-center gap-4 mb-4 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                     
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-foreground group-hover:text-accent leading-snug">
                          {info.title}
                        </h3>
                      </div>
                    </div>

                    {/* Task bullet list */}
                    <ul className={`space-y-2.5 text-sm text-foreground/80 font-light mb-5 flex flex-col ${!isLeft ? 'md:items-end' : ''}`}>
                      {info.description.map((desc, descIndex) => (
                        <li key={descIndex} className={`flex items-start gap-2.5 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className={`${!isLeft ? 'md:text-right' : ''}`}>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges Used in Experience */}
                    <div className={`flex flex-wrap gap-2 pt-2 border-t border-white/5 ${!isLeft ? 'md:justify-end' : ''}`}>
                
                    </div>

                    

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
                          <p className={`text-xs text-muted-foreground leading-relaxed pt-3 mt-3 border-t border-white/5 font-light ${!isLeft ? 'md:text-right' : ''}`}>
                            
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

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