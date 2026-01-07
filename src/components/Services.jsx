import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const skills = [
  {
    title: "UI/UX Design",
    desc: "User research, wireframing, prototyping, and visual design. Creating intuitive interfaces backed by data-driven decisions.",
    tools: ["Figma", "Adobe XD", "Sketch", "UserTesting"],
  },
  {
    title: "Frontend Development",
    desc: "Building responsive, performant web applications with modern frameworks and best practices.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    title: "Design Systems",
    desc: "Creating scalable component libraries and design tokens for consistent brand experiences across products.",
    tools: [
      "Storybook",
      "Figma Libraries",
      "Figma",
      "AdobeXD",
      "Documentation",
    ],
  },
];

export default Services;

// const skills = [
//   {
//     icon: "/undraw_code.svg",
//     role: "Software Development",
//     skill: ["JavaScript", "Tailwind CSS", "React", "NextJS"],
//   },
//   {
//     icon: "/undraw_command-button.svg",
//     role: "UI/UX Design",
//     skill: [
//       "User Interface (UI)",
//       "User Experience (UX)",
//       "Wireframing and Prototyping",
//       "Design thinking",
//     ],
//   },
// ];
