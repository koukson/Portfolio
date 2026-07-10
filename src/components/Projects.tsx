import Title from "./Title";
import img1 from '../assets/projects/1.png';
import { Github, Play, ArrowUpRight, Code } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: 'Plateforme E-commerce',
    description: "Une boutique en ligne complète dotée d'un catalogue dynamique, d'un panier persistant, et d'une architecture API robuste.",
    technologies: ['React', 'Tailwind CSS'],
    demoLink: 'https://e-commerce-p7gn.onrender.com',
    repoLink: 'https://github.com/koukson/E-commerceStatique.git',
    deo:'',
    image: img1,
    color: "from-cyan-500/20 to-blue-500/10"
  },

];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 relative"
      id="Projects"
    >
      <div className="w-full max-w-4xl mb-16 text-center">
        <Title title="MES PROJETS" gradient={true} />
        <p className="text-muted-foreground -mt-2 max-w-md mx-auto text-sm sm:text-base">
          Une sélection de projets représentatifs de mes compétences techniques de développeur.
        </p>
      </div>

      <div className="w-full max-w-6xl px-4 relative">
        {/* Decorative ambient glowing backdrops */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-custom/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              className="group"
            >
              <div className="glass-enhanced rounded-3xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
                
                {/* Visual Image Container with Blur Effect Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-30 z-10`} />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Glassmorphic Play/Hover button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.deo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-accent hover:border-accent/40 shadow-xl text-white transition-all duration-300 flex items-center gap-2 font-bold text-sm"
                    >
                      <Play className="w-4 h-4 fill-white" /> Lancer la Démo
                    </motion.a>
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/75 font-light leading-relaxed min-h-[64px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/[0.04] dark:bg-black/20 border border-white/5 rounded-xl text-xs font-semibold text-accent/80 hover:bg-accent/10 hover:text-accent hover:border-accent/20 cursor-default transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons (Row) */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                      >
                        Démo <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] dark:bg-black/20 dark:hover:bg-black/35 border border-white/10 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-foreground transition-all duration-300"
                      >
                        <Github className="w-4 h-4" /> Code <Code className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;