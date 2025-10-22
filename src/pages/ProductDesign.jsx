import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function productDesign() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-50 text-gray-900 overflow-hidden">
        {/* Background Animation */}
        <BackgroundAnimation />
       
          {/* Hero */}
          <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl font-bold mb-4 text-purple-500">
                UI/UX Design
              </h1>
              <p className="text-gray-700 w-2xl mx-auto">
                Creating purposeful, intuitive, and visually engaging designs
                that bridge user needs with business goals from concept to
                prototype.
              </p>
            </motion.div>
          </section>
          {/* Design Process Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-semibold text-center ">
              My Design Process
            </h2>
            <p>
              I always apply the design thinking approach in every project i
              work on to ensure that I put the user front and center of the
              design.
            </p>
            <div className=" max-w-6xl mx-auto px-6">
              {/* Dashed connecting line */}
              {/* <svg
                className="absolute hidden md:block top-0 left-0 w-full h-full z-0 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  d="M 10 20 L 30 60 L 50 20 L 70 60 L 90 20"
                  stroke="#cbd5e1"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg> */}
              {/* Steps container */}
              <div className=" flex justify-between items-start z-10 mt-12">
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
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-purple-400">
                      0{index + 1}
                    </div>

                    {/* Icon circle */}
                    <div
                      className={`flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 shadow-lg mb-4 ${step.color}`}
                      style={{ borderColor: step.borderColor || "#e5e7eb" }}
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
          <section className="m-12">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Selected UI/UX Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 border border-gray-200 p-6 rounded-2xl backdrop-blur-md hover:shadow-lg transition-all"
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
          </section>
        
      </div>
    </>
  );
}

const processSteps = [
  {
    title: "Research & Discovery",
    description:
      "I begin every project by understanding users and business goals through research, interviews, and analysis to define clear design problems.",
    icon: "🔍",
  },
  {
    title: "Ideation & Information Architecture",
    description:
      "I map out user journeys and explore ideas through wireframes and low-fidelity sketches to create a strong UX foundation.",
    icon: "💡",
  },
  {
    title: "Visual Design & Prototyping",
    description:
      "I create high-fidelity mockups and interactive prototypes using Figma or Adobe XD to bring ideas to life with visual clarity and usability in mind.",
    icon: "🎨",
  },
  {
    title: "Testing & Iteration",
    description:
      "I conduct usability testing to gather feedback, identify friction points, and refine the designs based on real user insights.",
    icon: "🧩",
  },
  {
    title: "Design Systems & Handoff",
    description:
      "I build scalable design systems, document patterns, and collaborate closely with developers for smooth handoff and consistent implementation.",
    icon: "🤝",
  },
];

const projects = [
  {
    title: "Fintech Dashboard Redesign",
    desc: "Redesigned a cross-border payments dashboard to simplify onboarding and enhance accessibility. Resulted in a 40% improvement in task completion time.",
    tools: ["Figma", "FigJam", "Notion"],
  },
  {
    title: "E-commerce Mobile App",
    desc: "Created a mobile shopping experience focusing on personalization and faster checkout. Improved user retention and engagement metrics.",
    tools: ["Figma", "Maze", "Photoshop"],
  },
  {
    title: "SaaS Analytics Platform",
    desc: "Led the UX design for a B2B SaaS analytics product, optimizing navigation and introducing a modular dashboard layout.",
    tools: ["Figma", "Miro", "Illustrator"],
  },
  {
    title: "Portfolio Redesign",
    desc: "Redesigned my own design portfolio for better storytelling and interaction flow, emphasizing accessibility and clean layout systems.",
    tools: ["Figma", "Framer", "Notion"],
  },
];

// Background Component
function BackgroundAnimation() {
  const dots = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
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

/* ===== Gradient Blob Background Component ===== */
// function GradientBlobBackground() {
//   const blobs = [
//     "from-pink-400 to-purple-500",
//     "from-indigo-400 to-blue-400",
//     "from-amber-300 to-pink-400",
//   ];

//   return (
//     <>
//       <div className="absolute inset-0 overflow-hidden">
//         {blobs.map((color, i) => (
//           <motion.div
//             key={i}
//             className={`absolute w-[500px] h-[500px] bg-gradient-to-r ${color} rounded-full mix-blend-multiply filter blur-3xl opacity-40`}
//             initial={{
//               x: Math.random() * window.innerWidth - 250,
//               y: Math.random() * window.innerHeight - 250,
//               scale: Math.random() * 0.8 + 0.8,
//             }}
//             animate={{
//               x: [
//                 Math.random() * window.innerWidth - 250,
//                 Math.random() * window.innerWidth - 250,
//               ],
//               y: [
//                 Math.random() * window.innerHeight - 250,
//                 Math.random() * window.innerHeight - 250,
//               ],
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: Math.random() * 20 + 20,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
