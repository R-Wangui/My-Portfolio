// import React from 'react'
// import NavBar from '../components/layout/NavBar'
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Users,
} from "lucide-react";

function AboutMe() {
  return (
    <>
      {/* <img src="/aboutme-image.png" alt="" />
      <div id="aboutme">
        <img src="/Aboutme.png" alt="" className="aboutImage" />
        <div className="aboutmeText">
          <h2>Hi there, I&apos;m Wangui</h2>
          <h5>
            A product designer and frontend developer My background in product
            design has given me a keen eye for detail and a strong understanding
            of user experience, which I now apply to create seamless and
            visually appealing web interfaces. I am proficient in HTML, CSS,
            JavaScript, and React, and have experience working with various
            front-end frameworks and libraries. I&apos;m currently seeking an
            internship or an entry-level front-end development position where I
            can continue to grow and learn on the job. I&apos;m excited to bring
            my unique blend of design and development skills to a dynamic team
            and contribute to creating amazing digital experiences
          </h5>
        </div>
      </div> */}

      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* <img src="/Images/Hero-img.png" alt=""
                className="rounded-full"
              /> */}
              <div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Hi, I&apos;m Wangui, a frontend developer with a strong foundation in
                  UI/UX design, bridging the gap between aesthetics and
                  functionality. With 2+ years of experience, I specialize in
                  creating responsive, accessible web applications that
                  prioritize user experience.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  My design background allows me to translate complex user needs
                  into intuitive interfaces, while my development skills ensure
                  pixel-perfect implementation with clean, maintainable code.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I believe the best digital products emerge when design
                  thinking and engineering excellence work in harmony.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {about.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-slate-300 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors"
                  >
                    <item.icon className="text-cyan-400 mb-3" size={32} />
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const about = [
  {
    icon: Code,
    label: "Clean Code",
    desc: "Maintainable & scalable",
  },
  {
    icon: Palette,
    label: "Design Systems",
    desc: "Consistent UI/UX",
  },
  {
    icon: Zap,
    label: "Performance",
    desc: "Optimized experiences",
  },
  {
    icon: Users,
    label: "User-Centric",
    desc: "Research-driven design",
  },
];

export default AboutMe