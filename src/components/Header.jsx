import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 shadow-xl backdrop-blur-lg border-b border-yellow-400/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white relative">
        <div
          className="text-2xl font-extrabold tracking-widest hover:text-yellow-400 dark:hover:text-yellow-300 transition cursor-pointer flex items-center gap-2"
          onClick={() => scrollTo("hero")}
        >
          <FaRocket className="text-yellow-400 dark:text-yellow-300 animate-pulse" />
          <span className="font-heading">Rohith Myana's Portfolio</span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {[
            "hero",
            "tools",
            "experience",
            "education",
            "projects",
            "contact",
          ].map((id, idx) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative uppercase tracking-wide transition text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{id}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 dark:bg-yellow-300 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        <div className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-yellow-500/10 via-pink-500/10 to-indigo-500/10 z-[-1] rounded-full" />
      </div>
    </motion.header>
  );
}
