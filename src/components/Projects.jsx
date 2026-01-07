// Projects that go on the Landing page

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function Projects() {
  return (
    <>
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 h-20 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {pastProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-cyan-400/50 transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-300">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-semibold">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    // href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-slate-300 text-xs mt-4 px-4 py-2 border-2 border-cyan-400 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-cyan-400/10"
                  >
                    View Project <ChevronRight size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-300 px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-cyan-400/10"
            >
              View All Projects <ChevronRight size={20} />
            </motion.a>
          </motion.div> */}
        </div>
      </section>
    </>
  );
}

const pastProjects = [
  {
    title: "I-Sentry Website",
    type: "UI/UX Design + Frontend",
    desc: "Website for the organization",
    tags: ["Figma", "React", "Tailwind", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    link: "https://isentrytechnologies.com/",
  },
  // {
  //   title: "MediCare Mobile App",
  //   type: "UI/UX Design",
  //   desc: "Patient-centric healthcare app improving appointment scheduling by 60%",
  //   tags: ["User Research", "Prototyping", "iOS Design", "Accessibility"],
  //   gradient: "from-purple-500 to-pink-500",
  // },
  {
    title: "Goldies Confectionaries",
    type: "Frontend Development",
    desc: "Sustainable e-commerce platform with 75% increase in conversion rate",
    tags: ["Next.js", "Tailwind", "Tanstack Query", "Performance"],
    gradient: "from-green-500 to-emerald-500",
    link: "https://goldies-frontend-v3.vercel.app",
  },
  {
    title: "TeamIq",
    type: "Frontend Development",
    desc: "AI-driven Analytics Application",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Recharts",
    ],
    gradient: "from-orange-500 to-red-500",
    // link: "https://localdishcorner.netlify.app/",
  },
];

export default Projects;
