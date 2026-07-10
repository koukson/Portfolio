import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import img from "../assets/img.png";
import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [isTyped, setIsTyped] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Trigger typewriter state after component load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyped(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 3D tilt effect on profile image based on cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      // Limit tilt angles to prevent extreme distortion
      const tiltX = Math.max(-12, Math.min(12, y * 15));
      const tiltY = Math.max(-12, Math.min(12, -x * 15));

      imageRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      imageRef.current.style.transition = "transform 0.1s ease-out";
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      imageRef.current.style.transition = "transform 0.5s ease-out";
    }
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[85vh] flex items-center justify-center relative py-12 md:py-20"
      id="home"
    >
      {/* Background Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="particle" 
          style={{ top: '15%', left: '15%', width: '12px', height: '12px', animationDelay: '0s', background: 'var(--primary)' }}
        />
        <div 
          className="particle" 
          style={{ top: '75%', left: '80%', width: '8px', height: '8px', animationDelay: '2s', background: 'var(--secondary)' }}
        />
        <div 
          className="particle" 
          style={{ top: '35%', left: '55%', width: '16px', height: '16px', animationDelay: '4s', background: 'var(--accent)' }}
        />
        <div 
          className="particle" 
          style={{ top: '65%', left: '20%', width: '10px', height: '10px', animationDelay: '1s', background: 'var(--primary)' }}
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12 lg:gap-8 z-10">
        
        {/* Left: Text & Bio Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold tracking-wider text-xs uppercase"
          >
            Disponible pour vos projets
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-foreground">
            Bonjour, <br/>
            <span className="block mt-1 font-light text-3xl sm:text-4xl text-foreground/80">je suis</span>
            <span className="bg-gradient-text animate-gradient-x font-black text-5xl sm:text-6xl md:text-7xl">
              JIE TRAORE
            </span>
          </h1>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-foreground/70 max-w-lg leading-relaxed font-light">
            {isTyped ? (
              <>
                Je suis un développeur fullstack junior passionné par la création d'applications web et mobiles modernes, fluides et performantes. Je maîtrise React et Node.js, ainsi que Flutter pour le mobile, avec un intérêt grandissant pour la cybersécurité.
              </>
            ) : (
              <>
                Je suis un développeur fullstack junior passionné par la création d'applications web et mobiles modernes, fluides et performantes. Je maîtrise React et Node.js, ainsi que Flutter pour le mobile, avec un intérêt grandissant pour la cybersécurité.
              </>
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/[0.08] dark:bg-black/35 hover:bg-white/[0.15] border border-glass-border font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5 text-primary-custom" /> Télécharger CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#Contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-accent text-white font-bold hover:bg-accent/90 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Mail className="w-5 h-5"/> Contactez-moi
            </motion.a>
          </div>
        </div>

        {/* Right: Avatar Image container */}
        <div className="relative flex justify-center w-full lg:w-auto">
          {/* Decorative glowing background behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/20 dark:bg-accent/15 blur-3xl -z-10 animate-pulse-slow" />
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="relative cursor-pointer group"
          >
            {/* Outline Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary-custom rounded-3d opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md -z-10"
              style={{
                borderRadius: '30% 70% 70% 30% / 67% 62% 38% 33%',
              }}
            />

            <motion.img
              ref={imageRef}
              src={img}
              alt="Jie Traoré"
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover border-4 border-white/10 dark:border-white/5 shadow-2xl transition-all duration-300"
              style={{
                borderRadius: '30% 70% 70% 30% / 67% 62% 38% 33%',
                transformStyle: "preserve-3d"
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;