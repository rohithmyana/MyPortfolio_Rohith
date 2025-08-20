import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Customer Feedback Analysis Platform",
    description:
      "Built backend APIs with Python and FastAPI to perform NLP-based sentiment scoring on structured and unstructured text. Designed a responsive analytics dashboard using React.js and Redux with interactive charts and filterable KPIs for marketing teams.",
  tech: ["Python", "FastAPI", "React.js", "Redux", "NLP", "Chart.js"],
    image: "",
    live: "",
    github: "",
  },
  {
   title: "SEO Audit Automation Tool",
  description:
    "Developed backend scanners in Python for automated audits on metadata, mobile responsiveness, page load speed, and accessibility compliance. Displayed audit results in an interactive dashboard built with Vue.js, Bootstrap, and Chart.js for visualization of SEO performance trends.",
  tech: ["Python", "Vue.js", "Bootstrap", "Chart.js", "SEO"],
  image: "",
  live: "",
  github: "",
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.25}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.03}
              transitionSpeed={2500}
              className="rounded-3xl bg-gradient-to-tr from-yellow-400/10 via-white/10 to-pink-500/10 border border-yellow-400/10 p-1 shadow-2xl hover:shadow-yellow-400/20 overflow-hidden relative"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 h-full flex flex-col justify-between">
                {proj.image && (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-40 object-cover rounded-xl mb-4 border border-yellow-400/20"
                  />
                )}

                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-yellow-400/10 border border-yellow-300 text-yellow-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-5 pt-4 mt-4 border-t border-gray-800">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-500 flex items-center gap-1 text-sm"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-500 flex items-center gap-1 text-sm"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>

              <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse blur-2xl opacity-20 rounded-3xl z-[-1]" />

              <div className="absolute inset-0 rounded-3xl z-0 pointer-events-none group-hover:scale-105 transition-transform duration-500">
                <div className="absolute w-32 h-32 bg-yellow-500 blur-2xl opacity-10 rounded-full -top-10 -left-10 animate-ping" />
                <div className="absolute w-24 h-24 bg-pink-500 blur-2xl opacity-10 rounded-full -bottom-8 -right-8 animate-ping" />
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
