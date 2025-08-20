import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Font Awesome
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";

// Simple Icons
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiSpringboot,
  SiTypescript,
  SiJest,
  SiGraphql,
  SiNextdotjs,
  SiPrisma,
  SiReactquery,
  SiVite,
  SiCypress,
  SiFirebase,
  SiBootstrap,
  SiFastapi,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiTestinglibrary,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiMysql,
  SiMongoose,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    items: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
      { icon: <SiReactquery />, name: "React Query" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
  {
    title: "Backend",
    animation: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
    items: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <SiNextdotjs />, name: "Next.js API Routes" },
    ],
  },
  {
    title: "Databases",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiMongoose />, name: "Mongoose" },
    ],
  },
  {
    title: "Cloud & DevOps",
    animation: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    items: [
      { icon: <FaAws />, name: "AWS (EC2, S3, Lambda)" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaGithub />, name: "GitHub Actions" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiNetlify />, name: "Netlify" },
      { icon: <FaJenkins />, name: "Jenkins" },
    ],
  },
  {
    title: "Testing & Tools",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    items: [
      { icon: <SiJest />, name: "Jest" },
      { icon: <SiTestinglibrary />, name: "React Testing Library" },
      { icon: <SiCypress />, name: "Cypress" },
      { icon: <FaJava />, name: "JUnit" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiEslint />, name: "ESLint" },
      { icon: <SiPrettier />, name: "Prettier" },
      { icon: <SiWebpack />, name: "Webpack" },
    ],
  },
];

export default function Skills() {
  // one in-view hook per card (5 cards)
  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [dbRef, dbInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [cloudRef, cloudInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [testingRef, testingInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const refs = [frontendRef, backendRef, dbRef, cloudRef, testingRef];
  const inViews = [frontendInView, backendInView, dbInView, cloudInView, testingInView];

  return (
    <section
      id="tools"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-[120px] opacity-10 rounded-full z-0 animate-pulse left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-yellow-400 tracking-wide z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tools & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {categories.map((cat, index) => (
          <motion.div
            ref={refs[index]}
            key={cat.title}
            className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-800"
            initial={cat.animation.initial}
            animate={inViews[index] ? cat.animation.animate : {}}
            transition={{ duration: 0.8, delay: 0.15 * index }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">
              {cat.title}
            </h3>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {cat.items.map((tool, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-yellow-400 gap-2 group hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    delay: i * 0.12,
                  }}
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform">
                    {tool.icon}
                  </div>
                  <p className="text-sm text-white text-center">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
