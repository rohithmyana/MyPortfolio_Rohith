import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "Java Full Stack Developer",
    company: "PNC Bank (Remote)",
    duration: "Jul 2025 – Present",
    bullets: [
      "Designed scalable fraud analytics architecture with real-time anomaly detection.",
      "Built backend services using FastAPI & Next.js API Routes for fraud detection.",
      "Implemented MongoDB + Prisma ORM for efficient handling of high-volume transaction data.",
      "Developed interactive dashboards with Next.js + Zustand for real-time fraud monitoring.",
    ],
  },
  {
    role: "Java Full Stack Intern",
    company: "PNC Bank",
    duration:  "Nov 2024 – May 2025",
    bullets: [
      "Built WCAG-compliant React UIs with TypeScript & Context API; +15% mobile conversion.",
      "Created Spring Boot microservices for pricing, inventory & orders with zero-downtime deploys.",
      "Implemented Kafka streams for async events, traffic load balancing & real-time sale events.",
      "Built GraphQL endpoints for product listings, reducing API payload size by 40%.",
      "Dockerized microservices with AWS EC2-based deploy pipeline and CloudWatch logging.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "TatvaSoft",
    duration:  "Aug 2020 – Jul 2023",
    bullets: [
       "Delivered Inventory & Billing System for retail chains to streamline operations.",
      "Built REST APIs with Spring Boot for billing & inventory communication.",
      "Developed dynamic UIs using HTML5, CSS3, Bootstrap, and jQuery.",
      "Integrated MySQL + MongoDB hybrid data storage for billing & inventory logs.",
      "Implemented JWT authentication for secure user access and role management.",
      "Automated CI/CD pipelines with Jenkins, Git, and Bitbucket.",
      "Collaborated in Agile Scrum teams using JIRA for sprint planning & coordination.",
      "Increased code reliability with 50% higher test coverage using JUnit.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-[#111111] to-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.35}
              glareColor="#fff"
              glarePosition="all"
              className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-500 to-pink-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-wide">
                  {exp.role}
                </h3>
                <p className="text-gray-400 mt-1 text-sm md:text-base font-medium">
                  {exp.company} • {exp.duration}
                </p>

                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm md:text-base text-gray-300"
                    >
                      <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
