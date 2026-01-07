import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Doodles from "@/components/ui/Doodles";
import DesignProjectCard from "@/components/layout/DesignProjectCard";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import {
  Heart,
  Lightbulb,
  Zap,
  CheckCircle,
  Sparkles,
  Smile,
  Target,
  HandHeart,
  SplinePointer,
  FlaskConical,
} from "lucide-react";

export default function productDesign() {
  return (
    <>
      <Navbar />
      <div className="relative mb-20 h-full bg-gradient-to-b from-white via-gray-100 to-gray-50 text-gray-900 overflow-hidden">
        {/* Background Animation */}
        <Doodles />
        {/* Hero */}
        <section className="min-h-screen relative z-10 mt-4 pt-16 px-4">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl text-center font-black relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Design with
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Purpose
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path
                    d="M 5 8 Q 150 2 295 8"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icn: Heart, text: "User-Centered" },
              { icn: Lightbulb, text: "Creative" },
              { icn: Target, text: "Goal-Driven" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg"
              >
                <item.icn size={20} className="text-purple-600" />
                <span className="font-semibold text-slate-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div>
            <img
              src="/Images/Design hero.png"
              alt="design page hero"
              className=" bg-amber-100"
            />
          </motion.div>
        </section>
        {/* Design Process Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-pink-500 text-center m-4 ">
            My Design Process
          </h2>
          <p className="text-center mb-14">
            I always apply the design thinking approach in every project I work
            on to ensure that I put the user front and center of the design.
          </p>
          <div className=" w-full mx-auto p-10 mt-12">
            {/* Steps container */}
            <div className=" flex justify-between items-start z-10 ">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col items-center text-center flex-1 max-w-[180px] ${
                    index % 2 === 0 ? "mt-0" : "mt-32 md:mt-40"
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-pink-400">
                    0{index + 1}
                  </div>

                  {/* Icon circle */}
                  <div
                    className="flex items-center justify-center w-20 h-20 text-purple-500 rounded-full bg-white border-2 shadow-lg mb-4"
                    // style={{ borderColor: step.borderColor || "#e5e7eb" }}
                  >
                    {step.icon}
                  </div>
                  {/* Title and description */}
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section */}
        {/* <section className="p">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Selected UI/UX Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 m-5 bg-amber-200">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="m-5 bg-white/70 border border-gray-200 p-6 rounded-2xl backdrop-blur-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-pink-600">
                  {proj.title}
                </h3>
                <p className="text-gray-700 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            to={`/frontend`}
            className="absolute leftt-20 -bottom-20 border rounded-full border-gray-700 px-4 py-1 mb-20 text-gray-300"
          >
            Go to Projects
          </Link>
        </section> */}
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
              <p className="text-xl text-slate-600">
                Real problems, real solutions, real impact
              </p>
            </motion.div>

            <div className="space-y-16">
              {designProjects.map((project, idx) => (
                <DesignProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

const processSteps = [
  {
    title: "Empathize",
    description:
      "I begin every project by understanding users and business goals through research, interviews, and analysis to define clear design problems.",
    icon: <HandHeart />,
  },
  {
    title: "Define",
    description:
      "I map out user journeys and explore ideas through wireframes and low-fidelity sketches to create a strong UX foundation.",
    icon: <Target />,
  },
  {
    title: "Ideation & Information Architecture",
    description:
      "I map out user journeys and explore ideas through wireframes and low-fidelity sketches to create a strong UX foundation.",
    icon: <Zap />,
  },
  {
    title: "Design & Prototyping",
    description:
      "I create high-fidelity mockups and interactive prototypes using Figma or Adobe XD to bring ideas to life with visual clarity and usability in mind.",
    icon: <SplinePointer />,
  },
  {
    title: "Testing & Iteration",
    description:
      "I conduct usability testing to gather feedback, identify friction points, and refine the designs based on real user insights.",
    icon: <FlaskConical />,
  },
  // {
  //   title: "Design Systems & Handoff",
  //   description:
  //     "I build scalable design systems, document patterns, and collaborate closely with developers for smooth handoff and consistent implementation.",
  //   icon: Zap,
  // },
];
const designProjects = [
  {
    title: "Team-Iq",
    subtitle: "AI analytics platform",
    role: "Lead UX Co-designer",
    duration: "6 months",
    color: "from-blue-400 to-cyan-400",
    emoji: "🚀",
    challenge:
      "Users were finding it hard to rate their skill progression, team contribution and work quality over time",
    solution:
      "An AI-driven analytics platform that provides actionable insights on team performance, productivity patterns, and collaboration metrics using machine learning.",
    impact: [
      { label: "Skill progression", value: "60%", icon: Zap },
      { label: "Team performance", value: "85%", icon: Smile },
      {
        label: "Actionable insights",
        value: "+40%",
        icon: CheckCircle,
      },
    ],
    process: [
      "Conducted user research on existing platforms ans feasibility of the product",
      "Created user personas and journey maps",
      "Ran 3 rounds of usability testing with prototypes",
      "Collaborated closely with developers for implementation",
    ],
    tools: ["Figma", "Google Docs", "Dribble"],
    deliverables: [
      "User Research Report",
      "Wireframes & Prototypes",
      "Design System",
      "Responsive Designs (Mobile/Desktop)",
      "Developer Handoff Docs",
    ],
  },
  {
    title: "Fix-it App",
    subtitle: "Home maintenance Application",
    role: "UI/UX Designer",
    duration: "8 weeks",
    color: "from-green-400 to-emerald-400",
    emoji: "🛠️",
    challenge:
      "Busy working class individuals hardly have time for home maintenance or fixing issues in their homes.",
    solution:
      "Created a product that allows users to access experienced plumbers from within their location at any time of the day or night.",
    impact: [
      { label: "Users drop-off", value: "-45%", icon: Target },
      {
        label: "Userbility",
        value: "+70%",
        icon: Sparkles,
      },
      { label: "Brand recognition", value: "92%", icon: Heart },
    ],
    process: [
      "Competitive analysis of 5 home maintenance platforms",
      "User jouner maps",
      "Created micro-interactions for delight moments",
      // "Established comprehensive brand guidelines",
    ],
    tools: ["Figma"],
    deliverables: [
      "Low and high fidelity ",
      "Wireframes & Prototypes",
      // "Responsive Designs (Mobile/Desktop/Tablet)",
      // "Micro-interactions Library",
      "Usability studies Reports",
      // "Marketing Assets",
    ],
  },
  {
    title: "Bold Beauty",
    subtitle: "Neubrutalism landing page",
    role: "Product Designer",
    duration: "1 week",
    color: "from-purple-400 to-pink-400",
    emoji: "💎",
    challenge:
      "Users felt overwhelmed by features and struggled to discover key functionality. Low engagement with collaboration tools and high support ticket volume.",
    solution:
      "Created a landing page applying the concept of neubrutalism. Used bold color palette and typography, and added intuitive CTA based on user behavior.",
    impact: [
      { label: "concept application", value: "98%", icon: Zap },
      {
        label: "Userbility",
        value: "80%",
        icon: CheckCircle,
      },
      {
        label: "Brand Identity",
        value: "98%",
        icon: Sparkles,
      },
    ],
    process: [
      "Clear application of the concept of nuebrutalism throughout the page",
      "Created interactive Figma prototypes",
      // "Designed component library for consistency",
      // "Documented design patterns and principles",
    ],
    tools: ["Figma", "Dribble", "Notion"],
    deliverables: [
      "Landing page",
      // "Journey Maps",
      // "Component Library",
      // "Design System Documentation",
      // "Onboarding Flows",
    ],
  },
];

// const projects = [
//   {
//     title: "Sneaker Palace Redesign",
//     desc: "Redesigned a sneaker shop????. Resulted in a 40% improvement in task completion time.",
//     tools: ["Figma", "FigJam", "Notion"],
//   },
//   {
//     title: "I-Sentry Website",
//     desc: "Collaborated with another designer to design the I-Sentry website that showcases the company's value proposition, and products.",
//     tools: ["Figma", "Maze", "Photoshop"],
//   },
//   {
//     title: "SaaS Analytics Platform",
//     desc: "Led the UX design for a B2B SaaS analytics product, optimizing navigation and introducing a modular dashboard layout.",
//     tools: ["Figma", "Miro", "Illustrator"],
//   },
//   {
//     title: "Portfolio Redesign",
//     desc: "Redesigned my own design portfolio for better storytelling and interaction flow, emphasizing accessibility and clean layout systems.",
//     tools: ["Figma", "Framer", "Notion"],
//   },
// ];
