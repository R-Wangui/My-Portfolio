import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/layout/ProjectCard";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Box,
  Zap,
  Github,
  ArrowUpRight,
  FileCode,
  Server,
  Layers,
  FolderCode,
} from "lucide-react";

export default function Frontend() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar variant="frontend" />
        <div className="relative text-white">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 px-4 relative"
          >
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code size={40} className="text-white" />
                  </div>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
                  <span className="text-slate-400">&gt;</span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Frontend
                  </span>
                  <br />
                  <span className="text-slate-400">&gt;</span>{" "}
                  <span className="text-slate-200">Developer</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl font-mono">
                  Building performant, accessible web applications with clean
                  architecture and modern best practices.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { label: "JavaScript", icon: FolderCode },
                    { label: "TypeScript", icon: FileCode },
                    { label: "React", icon: Box },
                    { label: "Next.js", icon: Server },
                    { label: "Performance", icon: Zap },
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg"
                    >
                      <tech.icon size={16} className="text-cyan-400" />
                      <span className="text-sm font-mono text-slate-300">
                        {tech.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    // href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold font-mono flex items-center justify-center gap-2 group"
                  >
                    <span>view_projects()</span>
                    <ArrowUpRight
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.a>

                  <motion.a
                    href="https://github.com/R-Wangui"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold font-mono flex items-center justify-center gap-2 hover:bg-cyan-400/10"
                  >
                    <Github size={20} />
                    <span>github.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Tech Stack Section */}
          <section id="stack" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
                  <span className="text-cyan-400">{"// "}</span>
                  <span className="text-slate-200">Tech Stack</span>
                </h2>
                <p className="text-slate-400 mb-12 font-mono">
                  {" "}
                  Tools and technologies I have used
                  {/* const expertise = technologies.filter(tech =&gt;
                  tech.proficiency &gt;= &apos;advanced&apos;); */}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      category: "Frontend Core",
                      icon: Code,
                      skills: [
                        "React and Next.js",
                        "TypeScript",
                        "JavaScript (ES6+)",
                        "HTML5 / CSS3",
                        "Responsive Design",
                      ],
                    },
                    {
                      category: "Styling & Animation",
                      icon: Layers,
                      skills: [
                        "Tailwind CSS",
                        "Styled Components",
                        "CSS Modules",
                        "Framer Motion",
                        // "SASS/SCSS",
                      ],
                    },
                    {
                      category: "Tools & Ecosystem",
                      icon: Terminal,
                      skills: [
                        "Git / GitHub",
                        "Webpack / Vite",
                        "Jest / Testing Library",
                        "CI/CD Pipelines",
                        "Performance Optimization",
                      ],
                    },
                  ].map((stack, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                          <stack.icon size={24} className="text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold font-mono text-slate-200">
                          {stack.category}
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {stack.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-400 font-mono text-sm group"
                          >
                            <span className="text-cyan-400 mt-0.5">▹</span>
                            <span className="group-hover:text-slate-300 transition-colors">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 grid md:grid-cols-2 gap-8"
                >
                  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold font-mono text-cyan-400 mb-4">
                      State Management
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Tanstack Query", "Zustand", "Context API"].map(
                        (item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm font-mono text-cyan-300"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold font-mono text-cyan-400 mb-4">
                      Backend Integration
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["REST APIs"].map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm font-mono text-cyan-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
                  <span className="text-cyan-400">{"// "}</span>
                  <span className="text-slate-200">Featured Projects</span>
                </h2>
                <p className="text-slate-400 mb-12 font-mono">
                  {" "}
                  Solutions I have created before
                  {/* return projects.map(project =&gt; &lt;Solution /&gt;); */}
                </p>

                <div className="space-y-12">
                  {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} index={idx} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            {/* Projects Section */}
            {/* <section>
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
            </section> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

const projects = [
  // {
  //   title: "Local Dish Corner",
  //   type: "Dashboard Analytics Web Application",
  //   description:
  //     "A data-driven dashboard that tracks and visualizes user engagement metrics for a food-ordering platform, including application visits, food item clicks, and top-ordered meals.",
  //   tech: ["React", "JavaScript", "Tailwind CSS", "Recharts", "Firebase"],
  //   responsibilities: [
  //     "Designed and implemented a scalable analytics dashboard architecture using React and Context API",
  //     "Modeled Firestore collections to support persistent analytics data across user sessions",
  //     "Built responsive layouts supporting mobile displays with CSS Grid and Flexbox",
  //     "Optimized data fetching by separating Firestore queries into a dedicated service layer",
  //     "Implemented data aggregation logic for visits, clicks per food item, and top-ordered foods",
  //   ],
  //   highlights: [
  //     {
  //       label: "Load Time",
  //       value: "-40%",
  //       desc: "through code splitting & lazy loading",
  //     },
  //     {
  //       label: "Dashboard load",
  //       value: "Real-time analytics updates",
  //       desc: "Firestore sync",
  //     },
  //     {
  //       label: "Bundle Size",
  //       value: "-60%",
  //       desc: "via Dead Code Elimination",
  //     },
  //   ],
  //   architecture: [
  //     "Component-driven architecture",
  //     "Modular service layer for analytics queries",
  //     "Context API + Tanstack Query for state management",
  //     "Firebase Realtime Database for storage and authentication",
  //   ],
  //   github: "github.com/alexchen/fintrack",
  //   live: "https://localdishcorner.netlify.app/",
  //   gradient: "from-blue-500 to-cyan-500",
  // },
  {
    title: "TeamIq",
    type: "AI-driven Analytics Application",
    description:
      "An intelligent analytics platform that automatically connects to developers’ work tools and uses AI to evaluate the quality, consistency, and impact of their contributions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Recharts",
      "Zustand",
      "ShadCn",
    ],
    responsibilities: [
      "Designed and implemented a scalable analytics dashboard architecture using Next.js",
      "Integrated OAuth2 authentication flow with JWT token refresh mechanism",
      "Built responsive layouts supporting mobile displays with CSS Grid and Flexbox",
      "Optimized data fetching by separating queries into a dedicated service layer",
      "Implemented real-time WebSocket connections for live data streaming with automatic reconnection logic",
    ],
    highlights: [
      {
        label: "Integrated Aplications",
        value: "1",
        desc: "Github integrated",
      },
      {
        label: "Dashboard load",
        value: "Real-time analytics updates",
        desc: "ProsgresSQL sync",
      },
      {
        label: "AI Layer ingestion",
        value: "Ongoing",
        desc: "End-to-end AI analytics architecture from ingested insights",
      },
    ],
    architecture: [
      "Component-driven architecture",
      "Modular service layer for analytics queries",
      "Context API + Tanstack Query for state management",
      "Next.js with App Router for optimal performance",
    ],
    // github: "github.com/alexchen/fintrack",
    live: "https://localdishcorner.netlify.app/",
    ongoing: true,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "I-Sentry Website",
    type: "Company Website",
    description: "An optimised website using Next.js and TypeScript",
    tech: ["Next.js", "TypeScript", "Tanstack Query", "Tailwind CSS", "Shadcn"],
    responsibilities: [
      "Built a modular component library using TypeScript and Tailwind CSS, ensuring 100% design consistency.",
      "Implemented automated Metadata generation to increase organic search visibility.",
      "Optimized SEO with Next.js SSR/SSG achieving 95+ Lighthouse SEO score",
    ],
    highlights: [
      {
        label: "Concurrent Users",
        value: "1K+",
        desc: "handles multiple users' visits efficiently",
      },
      {
        label: "Bundle size",
        value: "45%",
        desc: "Optimized total bundle size",
      },
      {
        label: "SEO Score",
        value: "95+",
        desc: "with SSR implementation",
      },
    ],
    architecture: [
      "Next.js with App Router for optimal performance",
      "Tanstack Query for server state management",
      "Tailwind CSS with custom design system",
      "Vercel Edge Functions for dynamic content",
    ],
    // github: "github.com/alexchen/streamhub",
    live: "https://isentrytechnologies.com/",
    ongoing: false,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Goldies Confectionaries",
    type: "E-commerce Application",
    description:
      "Sustainable e-commerce platform with 75% increase in conversion rate.",
    tech: ["Next.js", "TypeScript", "Tanstack Query", "Zustand", "ShadCn"],
    responsibilities: [
      "NextAuth and JWT for secure admin access and encrypted user sessions",
      "Implemented complex state management with Tanstack Query",
      // "Integrated Stripe for subscription billing with webhook handlers",
      // "Created comprehensive test suite with Jest and React Testing Library (85% coverage)",
      "Established CI/CD pipeline with GitHub Actions for automated testing and deployment",
    ],
    highlights: [
      {
        label: "Deployment",
        value: "Zero-downtime",
        desc: "automated CI/CD pipeline",
      },
      {
        label: "Lighthouse",
        value: "98/100",
        desc: "performance score achieved",
      },
      {
        label: "Accessibility",
        value: "WCAG 2.1 AA",
        desc: "fully compliant",
      },
    ],
    architecture: [
      "Tanstack Query for state management",
      "Zustand for immediate UI feedback and database synchronization for across the application.",
      "Shadcn customized component library",
      "Comprehensive unit and integration tests",
    ],
    // github: "github.com/alexchen/taskflow",
    live: "https://goldies-frontend-v3.vercel.app",
    ongoing: false,
    gradient: "from-green-500 to-emerald-500",
  },
];

// const projects = [
//   {
//     title: "Goldies Confectionaries",
//     desc: "A full-stack confectionary platform built with Next.js, and React Query. Features product management, cart state, and checkout flow.",
//     tech: ["Next.js", "TypeScript", "React Query", "Tailwind CSS", "ShadCN"],
//     link: "https://goldies-frontend-v3.vercel.app",
//   },
//   {
//     title: "Local Dish Corner",
//     desc: "A data visualization dashboard displaying real-time stats using Firebase and Recharts. Includes user tracking and performance analytics.",
//     tech: ["React", "Firebase", "Recharts"],
//     link: "https://localdishcorner.netlify.app/",
//   },
//   {
//     title: "Portfolio Website",
//     desc: "My personal portfolio built with Vite and Tailwind CSS, showcasing both design and development work with smooth animations.",
//     tech: ["React", "Vite", "Tailwind", "Framer Motion"],
//   },
//   // {
//   //   title: "Link Management Platform",
//   //   desc: "Built a SaaS-style link management tool with CRUD functionality, drag-and-drop interface, and responsive layouts.",
//   //   tech: ["Next.js", "TypeScript", "Supabase", "ShadCN/UI"],
//   // },
// ];
