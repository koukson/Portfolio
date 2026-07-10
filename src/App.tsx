import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  // Track mouse coordinates for cursor glow effect (no-rerender method)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      {/* Interactive Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.12), rgba(0, 245, 255, 0.03), transparent 75%)`
        }}
      />
      
      {/* Noise overlay for premium texture */}
      <div className="pointer-events-none fixed inset-0 z-40 noise-bg" />

      {/* Main Content Layout */}
      <div className="p-5 md:px-[15%] pt-28">
        <Navbar />
        <Home />
      </div>
      
      <About />
      
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects />
      </div>
      
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
