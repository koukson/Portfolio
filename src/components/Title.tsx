import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  gradient?: boolean;
}

const Title = ({ title, gradient = false }: TitleProps) => {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`uppercase font-bold mb-5 text-center text-3xl ${
        gradient
          ? "bg-gradient-text animate-gradient-x"
          : ""
      }`}
    >
      {title}
    </motion.h1>
  );
};

export default Title;