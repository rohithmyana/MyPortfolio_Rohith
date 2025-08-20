import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
// import Lottie from "lottie-react";
// import waveAnimation from "../assets/wave.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/*
      <Lottie
        animationData={waveAnimation}
        loop
        autoplay
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0"
      /> */}

      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[120px] opacity-10 animate-pulse z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 text-center mb-6 drop-shadow-md z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="max-w-2xl text-center text-gray-300 text-base md:text-lg leading-relaxed mb-12 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Whether you're building your next SaaS, scaling a frontend, or need
        battle-tested code — let’s talk. I deliver clean UIs, scalable logic,
        and real-world dev experience.
      </motion.p>

      <motion.a
        href="mailto:rohithmyana124@gmail.com"
        className="group inline-flex items-center gap-3 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-110 hover:shadow-yellow-400 transition-all duration-300 text-lg z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Say Hello
        <FiSend className="group-hover:translate-x-1 transition-transform duration-300 text-xl" />
      </motion.a>

      <motion.p
        className="text-sm text-yellow-400 font-semibold mt-16 z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <strong className="text-lg text-white">
          &copy; {new Date().getFullYear()} Rohith Myana
        </strong>{" "}
        — Built with focus, finished with flair.
      </motion.p>
    </section>
  );
}
