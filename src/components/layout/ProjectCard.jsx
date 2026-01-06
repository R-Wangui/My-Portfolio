import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
} from "lucide-react";

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/30 transition-all group"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}
            ></div>
            <h3 className="text-2xl md:text-3xl font-bold font-mono text-slate-200">
              {project.title}
            </h3>
          </div>
          <p className="text-cyan-400 font-mono text-sm mb-2">{project.type}</p>
          <p className="text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <motion.a
            href={`https://${project.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-700 hover:border-cyan-400/50 transition-colors"
          >
            <Github size={20} className="text-slate-400" />
          </motion.a>
          <motion.a
            href={`https://${project.live}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-700 hover:border-cyan-400/50 transition-colors"
          >
            <ExternalLink size={20} className="text-slate-400" />
          </motion.a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
          <Code size={16} />
          TECH_STACK
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm font-mono text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="mb-6">
        <h4 className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
          <CheckCircle2 size={16} />
          KEY_RESPONSIBILITIES
        </h4>
        <ul className="space-y-2">
          {project.responsibilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-slate-400 text-sm"
            >
              <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Performance Highlights */}
      <div className="mb-6">
        <h4 className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
          <Zap size={16} />
          PERFORMANCE_METRICS
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          {project.highlights.map((metric, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mb-1 font-mono">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div>
        <h4 className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
          <Layers size={16} />
          ARCHITECTURE
        </h4>
        <div className="grid md:grid-cols-2 gap-2">
          {project.architecture.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-slate-400 text-sm"
            >
              <CheckCircle2
                size={14}
                className="text-green-400 mt-0.5 flex-shrink-0"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ).isRequired,
    architecture: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    gradient: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// const projects = [
//   {
//     title: "FinTrack Analytics Dashboard",
//     type: "Full-Stack Web Application",
//     description:
//       "Real-time financial analytics platform processing 10M+ data points daily with complex data visualizations and live updates.",
//     tech: ["React", "TypeScript", "D3.js", "WebSockets", "PostgreSQL"],
//     responsibilities: [
//       "Architected scalable component library with 50+ reusable components following atomic design principles",
//       "Implemented real-time WebSocket connections for live data streaming with automatic reconnection logic",
//       "Optimized rendering performance for complex visualizations using React.memo, useMemo, and virtualization",
//       "Built responsive layouts supporting mobile to 4K displays with CSS Grid and Flexbox",
//       "Established comprehensive testing strategy achieving 85% code coverage",
//     ],
//     highlights: [
//       {
//         label: "Load Time",
//         value: "-40%",
//         desc: "through code splitting & lazy loading",
//       },
//       {
//         label: "Lighthouse",
//         value: "98/100",
//         desc: "performance score achieved",
//       },
//       {
//         label: "Bundle Size",
//         value: "-60%",
//         desc: "via tree shaking & optimization",
//       },
//     ],
//     architecture: [
//       "Component-driven architecture with TypeScript strict mode",
//       "Custom hooks for business logic separation",
//       "Context API + React Query for state management",
//       "Modular SCSS with BEM methodology",
//     ],
//     github: "github.com/alexchen/fintrack",
//     live: "fintrack-demo.vercel.app",
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "StreamHub Video Platform",
//     type: "Progressive Web App",
//     description:
//       "Video streaming platform with adaptive bitrate streaming, offline support, and infinite scroll feed handling 100K+ concurrent users.",
//     tech: ["Next.js", "React Query", "Tailwind CSS", "Service Workers", "AWS"],
//     responsibilities: [
//       "Implemented custom video player with HLS.js for adaptive streaming and quality switching",
//       "Built Service Worker architecture for offline video caching and background sync",
//       "Created infinite scroll feed with virtual scrolling reducing DOM nodes by 90%",
//       "Integrated OAuth2 authentication flow with JWT token refresh mechanism",
//       "Optimized SEO with Next.js SSR/SSG achieving 95+ Lighthouse SEO score",
//     ],
//     highlights: [
//       {
//         label: "Concurrent Users",
//         value: "100K+",
//         desc: "handled simultaneously",
//       },
//       {
//         label: "Architecture",
//         value: "PWA",
//         desc: "offline-first design",
//       },
//       {
//         label: "SEO Score",
//         value: "95+",
//         desc: "with SSR implementation",
//       },
//     ],
//     architecture: [
//       "Next.js with App Router for optimal performance",
//       "React Query for server state management",
//       "Tailwind CSS with custom design system",
//       "Vercel Edge Functions for dynamic content",
//     ],
//     github: "github.com/alexchen/streamhub",
//     live: "streamhub-demo.vercel.app",
//     gradient: "from-purple-500 to-pink-500",
//   },
//   {
//     title: "TaskFlow Project Manager",
//     type: "SaaS Application",
//     description:
//       "Collaborative project management tool with real-time sync, drag-and-drop interfaces, and subscription management.",
//     tech: ["React", "Redux Toolkit", "Material-UI", "Firebase", "Stripe"],
//     responsibilities: [
//       "Built drag-and-drop kanban boards using React DnD with optimistic UI updates",
//       "Implemented complex state management with Redux Toolkit and RTK Query",
//       "Integrated Stripe for subscription billing with webhook handlers",
//       "Created comprehensive test suite with Jest and React Testing Library (85% coverage)",
//       "Established CI/CD pipeline with GitHub Actions for automated testing and deployment",
//     ],
//     highlights: [
//       {
//         label: "Deployment",
//         value: "Zero-downtime",
//         desc: "automated CI/CD pipeline",
//       },
//       {
//         label: "Collaboration",
//         value: "Real-time",
//         desc: "Firestore sync",
//       },
//       {
//         label: "Accessibility",
//         value: "WCAG 2.1 AA",
//         desc: "fully compliant",
//       },
//     ],
//     architecture: [
//       "Redux Toolkit for predictable state management",
//       "Firebase Realtime Database for live collaboration",
//       "Material-UI customized component library",
//       "Comprehensive unit and integration tests",
//     ],
//     github: "github.com/alexchen/taskflow",
//     live: "taskflow-demo.vercel.app",
//     gradient: "from-green-500 to-emerald-500",
//   },
// ];
