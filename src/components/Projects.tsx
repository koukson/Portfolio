import Title from "./Title";
import { Github, Play, ArrowUpRight, Code, Star } from "lucide-react";
import { motion } from "framer-motion";
import { projects, projectCategoryConfig, projectStatusConfig, getUsedCategories } from "../data/projects";

const Projects = () => {
  const usedCategories = getUsedCategories();

  // Fonction pour obtenir une image par défaut
  const getProjectImage = (project: typeof projects[0]) => {
    // Pour l'instant on utilise l'image importée, plus tard on peut faire du dynamic import
    return project.image;
  };

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
          Une sélection de projets représentatifs de mes compétences techniques. Filtrez par catégorie ou découvrez les projets vedettes.
        </p>
      </div>

      <div className="w-full max-w-6xl px-4 relative">
        {/* Decorative ambient glowing backdrops */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-custom/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          <button
            className="px-4 py-2 bg-accent/20 border border-accent/30 text-accent font-semibold rounded-2xl transition-all hover:shadow-lg hover:shadow-accent/20"
            data-category="all"
          >
            Tous ({projects.length})
          </button>
          {usedCategories.map((cat) => {
            const config = projectCategoryConfig[cat];
            const count = projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                className="px-4 py-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-foreground/80 hover:text-accent font-medium rounded-2xl transition-all"
                data-category={cat}
              >
                {config.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const categoryConfig = projectCategoryConfig[project.category];
            const statusConfig = projectStatusConfig[project.status];
            const projectImage = getProjectImage(project);

            return (
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
                    <div className={`absolute inset-0 bg-gradient-to-tr ${categoryConfig.color} opacity-30 z-10`} />

                    <img
                      src={projectImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r text-white/90"
                        style={{ background: categoryConfig.color }}>
                        {categoryConfig.label}
                      </span>
                    </div>

                    {/* Glassmorphic Action Buttons Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 z-20 p-4">
                      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                        {project.demoLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-accent hover:border-accent/40 shadow-xl text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold text-sm"
                          >
                            <Play className="w-4 h-4 fill-white" /> Démo Live
                          </motion.a>
                        )}
                        {project.repoLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 shadow-xl text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold text-sm"
                          >
                            <Github className="w-4 h-4" /> Code
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-extrabold text-yellow-300 uppercase">Vedette</span>
                      </div>
                    )}
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        )}
                      </div>
                      <p className="text-sm text-foreground/75 font-light leading-relaxed min-h-[64px] line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 8).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/[0.04] dark:bg-black/20 border border-white/5 rounded-xl text-xs font-semibold text-accent/80 hover:bg-accent/10 hover:text-accent hover:border-accent/20 cursor-default transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 8 && (
                          <span className="px-3 py-1 bg-white/[0.04] dark:bg-black/20 border border-white/5 rounded-xl text-xs font-semibold text-muted-foreground">
                            +{project.technologies.length - 8}
                          </span>
                        )}
                      </div>

                      {/* Metrics */}
                      {project.metrics && Object.keys(project.metrics).length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-1.5 p-2 bg-white/[0.02] rounded-xl">
                              <span className="text-[10px] text-muted-foreground font-medium">{key}</span>
                              <span className="text-xs font-bold text-accent">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action buttons (Row) */}
                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
                        {project.demoLink && (
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
                        )}
                        {project.repoLink && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] dark:bg-black/20 dark:hover:bg-black/35 border border-white/10 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-foreground transition-all duration-300"
                          >
                            <Github className="w-4 h-4" /> Code
                          </motion.a>
                        )}
                        {!project.demoLink && !project.repoLink && (
                          <div className="col-span-2 text-center text-xs text-muted-foreground py-2">
                            Projet privé / En cours de développement
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <Code className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Aucun projet pour l'instant</h3>
            <p className="text-muted-foreground">Ajoutez vos premiers projets dans <code>src/data/projects.ts</code></p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;