import { Container, Linkedin, Mail, Github, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to show/hide the back-to-top button
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full border-t border-white/5 bg-black/10 dark:bg-black/30 py-12 overflow-hidden mt-12"
    >
      {/* Visual Ambient Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-[-10%] w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-72 h-72 rounded-full bg-primary-custom/5 blur-3xl"
        />
      </div>

      <footer className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10 space-y-6">
        
        {/* Rotating & Pulsating Logo block */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="cursor-pointer"
        >
          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg hover:border-accent/30 transition-all duration-300">
            <Container className="w-6 h-6 text-accent animate-pulse-slow" />
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-black text-foreground tracking-wider flex items-center justify-center gap-1.5">
            <span className="text-accent">JT</span>
            <span className="text-[10px] text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg font-bold tracking-widest uppercase">DEV</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground/80 font-light max-w-sm">
            Développeur Full-Stack junior passionné par les technologies modernes et l'innovation logicielle.
          </p>
          <p className="text-[11px] text-muted-foreground/50 pt-2 font-mono">
            © {new Date().getFullYear()} Jie Traoré. Tous droits réservés.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/koukson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-white/[0.03] hover:bg-white/[0.08] dark:bg-black/20 dark:hover:bg-black/35 border border-white/10 rounded-xl text-muted-foreground hover:text-accent transition-all duration-300"
          >
            <Github className="w-4.5 h-4.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/jie-traore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-white/[0.03] hover:bg-white/[0.08] dark:bg-black/20 dark:hover:bg-black/35 border border-white/10 rounded-xl text-muted-foreground hover:text-accent transition-all duration-300"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:traorejie4@gmail.com"
            className="flex items-center justify-center w-10 h-10 bg-white/[0.03] hover:bg-white/[0.08] dark:bg-black/20 dark:hover:bg-black/35 border border-white/10 rounded-xl text-muted-foreground hover:text-accent transition-all duration-300"
          >
            <Mail className="w-4.5 h-4.5" />
          </motion.a>
        </div>
      </footer>

      {/* Modern Back to Top Floating Trigger */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-accent text-white border border-accent/20 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg shadow-accent/25 hover:bg-accent/95 hover:shadow-accent/35 transition-all duration-300"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Retourner en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Footer;