import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f0f0f" },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              color: "#facc15",
              distance: 140,
              opacity: 0.4,
              width: 1,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hello, I’m Rohith Myana
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >

       I’m a Full Stack Developer with 3+ years of experience building scalable applications in
<strong> banking, retail, and analytics</strong>. I work with <strong>Java</strong>,
<strong>Spring Boot</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong>, and
<strong> React.js</strong> to create secure backend systems and modern, responsive frontends.
I also have hands-on experience with <span className="text-yellow-400 font-medium">
AWS, Docker, and CI/CD pipelines (GitHub Actions, Vercel, Netlify)
</span>, delivering reliable and production-ready solutions.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-5 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href="/Rohith_Java_Developer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 hover:scale-105 transition duration-300"
        >
          View Resume
        </a>
        <a
          href="/Rohith_Java_Developer_Resume.pdf"
          download
          className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 hover:text-black hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
