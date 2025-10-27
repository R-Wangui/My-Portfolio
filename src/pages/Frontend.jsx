// import Navbar from "@/components/layout/Navbar";

// function Frontend() {
//   return (
//     <>
//       <div></div>
//       <Navbar />

//     </>
//   );
// }

// export default Frontend;

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function Frontend() {
  return (
    <>
      <div className="bg-gray-900">
        <Navbar />
        <div className="relative text-white">
          {/* Background Animation */}
          <BackgroundAnimation />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl font-bold mb-4 text-teal-400">
                Frontend Development
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Building intuitive, high-performing, and accessible digital
                experiences that turn complex ideas into seamless user
                interactions.
              </p>
            </motion.div>
            {/* Process Section */}
            <section className="mb-24">
              <h2 className="text-3xl font-semibold text-center mb-12">
                My Development Process
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl backdrop-blur-lg hover:bg-gray-700/60 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-teal-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
            {/* Projects Section */}
            <section>
              <h2 className="text-3xl font-semibold text-center mb-12">
                Featured Development Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl backdrop-blur-lg hover:bg-gray-700/60 transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                      {proj.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border rounded-full border-gray-700 px-4 py-1 text-gray-300"
                    >
                      {" "}
                      View Project
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

/* ===== Background Animation Component ===== */
function BackgroundAnimation() {
  const dots = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-amber-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
const processSteps = [
  {
    title: "1. Understanding the Design",
    desc: "I collaborate closely with designers to understand the vision, functionality, and constraints behind every interface.",
  },
  {
    title: "2. Component Architecture",
    desc: "I translate UI designs into reusable, scalable components, ensuring consistency and maintainability across the app.",
  },
  {
    title: "3. Building the Interface",
    desc: "I bring interfaces to life using React, Next.js, and Tailwind CSS — focusing on pixel-perfect implementation and performance.",
  },
  {
    title: "4. Responsiveness & Accessibility",
    desc: "Every interface is tested across breakpoints and accessibility standards to ensure it’s usable by everyone.",
  },
  {
    title: "5. Integration & Optimization",
    desc: "I integrate APIs, manage state efficiently, and optimize performance through lazy loading and clean architecture.",
  },
  {
    title: "6. Testing & Deployment",
    desc: "I test thoroughly before deploying, using modern tools and workflows to ensure reliability and smooth handoff.",
  },
];

const projects = [
  {
    title: "Goldies Confectionaries",
    desc: "A full-stack confectionary platform built with Next.js, and React Query. Features product management, cart state, and checkout flow.",
    tech: ["Next.js", "TypeScript", "React Query", "Tailwind CSS", "ShadCN"],
    link: "https://goldies-frontend-v3.vercel.app",
  },
  {
    title: "Local Dish Corner",
    desc: "A data visualization dashboard displaying real-time stats using Firebase and Recharts. Includes user tracking and performance analytics.",
    tech: ["React", "Firebase", "Recharts"],
    link: "https://localdishcorner.netlify.app/",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with Vite and Tailwind CSS, showcasing both design and development work with smooth animations.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    title: "Link Management Platform",
    desc: "Built a SaaS-style link management tool with CRUD functionality, drag-and-drop interface, and responsive layouts.",
    tech: ["Next.js", "TypeScript", "Supabase", "ShadCN/UI"],
  },
];
