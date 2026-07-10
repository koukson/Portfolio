import { Container, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../theme/themeContext";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Apply theme to document element on theme state change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dracula" : "light");

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        document.documentElement.setAttribute("data-theme", e.newValue === "dark" ? "dracula" : "light");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [theme]);

  // Track scroll position for header glassmorphism strength
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "ACCUEIL" },
    { href: "#About", label: "A PROPOS" },
    { href: "#Experiences", label: "EXPERIENCES" },
    { href: "#Projects", label: "PROJETS" },
    { href: "#Contact", label: "CONTACT" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
          scrollPosition > 20
            ? "bg-background/70 backdrop-blur-xl border-glass-border shadow-lg py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center font-bold text-2xl gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"
            >
              <Container className="w-5 h-5" />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-accent font-black tracking-wider text-xl">JT</span>
              <span className="text-[10px] text-muted-foreground font-semibold tracking-widest">DEV</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold rounded-xl text-foreground/85 hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons: Theme Toggler & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Elegant Theme Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-black/20 border border-glass-border text-accent hover:bg-accent/15 hover:text-accent transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 animate-pulse-slow" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2.5 rounded-xl bg-white/5 dark:bg-black/20 border border-glass-border hover:bg-accent/15 hover:text-accent transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open mobile menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Stop event bubbling to overlay
            >
              <div className="glass-enhanced p-8 rounded-3xl w-[85%] max-w-sm flex flex-col space-y-4 text-center border-white/10 shadow-2xl relative">
                {/* Close Button Inside Card */}
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-black text-accent tracking-wider mb-2">NAVIGUER</h3>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-lg font-bold rounded-2xl text-foreground hover:bg-accent/10 hover:text-accent transition-all duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;