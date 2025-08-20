import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 flex flex-col items-center justify-center text-white relative"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="absolute w-[450px] h-[450px] bg-yellow-500 opacity-10 blur-3xl rounded-full animate-pulse z-0 top-24 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-pink-500 opacity-10 blur-2xl rounded-full animate-pulse z-0 top-60 left-1/4 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl rounded-[2rem] p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-2xl hover:shadow-yellow-300/30 transition-shadow duration-500"
      >
        <div className="bg-black/80 backdrop-blur-xl rounded-[2rem] p-10">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            University of North Texas
          </motion.h3>

          <motion.p
            className="text-lg text-yellow-300 mt-2 text-center font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Master of Science in Advanced Data Analytics
          </motion.p>

          <motion.p
            className="text-sm text-gray-400 mt-2 text-center font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Aug 2023 – May 2025
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-center text-yellow-400 font-semibold tracking-wide"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            GPA: 3.83
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
