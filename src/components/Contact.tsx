import { Mail, Github, Linkedin, Loader, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      const mailtoLink = `mailto:traorejie4@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Message depuis le portfolio"
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setShowSuccess(true);
      setIsSubmitting(false);

      // Reset form after delay
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 relative" 
      id="Contact"
    >
      <div className="w-full max-w-4xl mb-16 text-center">
        <Title title="CONTACT" gradient={true} />
        <p className="text-muted-foreground -mt-2 max-w-md mx-auto text-sm sm:text-base">
          Un projet en tête ou une simple question ? Écrivez-moi, je vous répondrai dans les plus brefs délais.
        </p>
      </div>

      <div className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Side: Contact Info Badges (2/5 columns) */}
        <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-foreground">
              Discutons de vos projets !
            </h3>
            <p className="text-sm sm:text-base text-foreground/75 font-light leading-relaxed">
              Que ce soit pour un site web personnalisé, une application mobile avec Flutter ou une assistance technique générale, je suis à votre disposition.
            </p>
          </div>

          {/* Direct Link Options */}
          <div className="space-y-4 my-6">
            {/* Email Badge */}
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="mailto:traorejie4@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] dark:bg-black/15 border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold">Envoyez-moi un email</p>
                <p className="text-sm font-bold text-foreground">traorejie4@gmail.com</p>
              </div>
            </motion.a>

            {/* Direct LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="https://linkedin.com/in/jie-traore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] dark:bg-black/15 border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold">Réseau Professionnel</p>
                <p className="text-sm font-bold text-foreground">Jie Traoré</p>
              </div>
            </motion.a>
          </div>

          {/* Social Network Row */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Mes Réseaux Sociaux</h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/koukson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.05] dark:bg-black/20 border border-white/10 hover:border-accent/40 flex items-center justify-center text-foreground hover:text-accent transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/jie-traore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.05] dark:bg-black/20 border border-white/10 hover:border-accent/40 flex items-center justify-center text-foreground hover:text-accent transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:traorejie4@gmail.com"
                className="w-11 h-11 rounded-xl bg-white/[0.05] dark:bg-black/20 border border-white/10 hover:border-accent/40 flex items-center justify-center text-foreground hover:text-accent transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Side: Form (3/5 columns) */}
        <div className="lg:col-span-3">
          <motion.form
            onSubmit={handleSubmit}
            className="glass-enhanced rounded-3xl p-6 sm:p-8 space-y-5 border-white/5"
          >
            {/* Success Message Banner */}
            {showSuccess && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-center font-semibold text-sm"
              >
                ✅ Message préparé ! Redirection vers votre messagerie en cours...
              </motion.div>
            )}

            {/* Inputs Wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Ex: Jie Traoré"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Ex: jie@exemple.com"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                Sujet du Message
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: Proposition de mission"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                Détail de votre message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea-field"
                placeholder="Ex: Bonjour Jie, j'aimerais collaborer sur..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-accent py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-accent/20 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin text-white" />
                  Traitement en cours...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white" />
                  Envoyer le message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;