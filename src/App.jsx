import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />

      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 bg-black dark:bg-white text-yellow-400 dark:text-black p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        title="Toggle Theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
