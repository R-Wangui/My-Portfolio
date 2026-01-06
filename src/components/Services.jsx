import { motion } from "framer-motion";

function Services() {
  return (
    <>
      {/* <div className=" my-16">
        <h2 className="text-gray-300 text-3xl text-center">What I do</h2>
        <div className="my-8 mx-8 grid grid-cols-1 lg:grid lg:grid-cols-2 gap-8 font-light text-gray-300 text-center items-center ">
          {skills.map((service, i) => (
            <div key={i} className="border rounded-xl p-4 flex flex-col items-center">
              <img
                className="filter invert brightness-75 mb-5"
                src={service.icon}
                alt="Code or design icon"
              />
              <h5 className="mb-4 font-semibold text-xl">{service.role}</h5>
              <ul className=" text-center list-disc list-inside">
                {service.skill.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

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
    tools: ["Storybook", "Figma Libraries", "CSS-in-JS", "Documentation"],
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
