// // import React from 'react'
// import '../styles/Footer.css'

// function Footer() {
//   return (
//     <>
//       <div className="mt-30">
//         <h3 className="text-gray-300 text-center text-2xl">
//           Let&apos;s Connect and Talk
//         </h3>
//         <div className="mt-8 flex justify-center gap-4">
//           {/* <div>
//             <h5>Reach me on my socials</h5>
//             </div> */}
//           <a href="https://www.behance.net/wanguinjoroge" target="_blank">
//             <img src="/Behance icon.png" alt="behance" className="footerIcon" />
//           </a>
//           <a href="https://dribbble.com/Wangoi" target="_blank">
//             <img src="/Dribble icon.png" alt="dribble" className="footerIcon" />
//           </a>
//           <a href="https://github.com/R-Wangui" target="_blank">
//             <img src="/Github icon.png" alt="github" className="footerIcon" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
//             target="_blank"
//           >
//             <img
//               src="/Linkedin icon.png"
//               alt="linkedin"
//               className="footerIcon"
//             />
//           </a>
//         </div>
//         <hr className="text-gray-500 mt-8 py-8" />
//       </div>
//     </>
//   );
// }

// export default Footer

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Dribbble } from "lucide-react";

function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="bg-slate-900 border-t border-slate-800 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Wangui
              </h3>
              <p className="text-slate-400">
                Frontend Developer & UI/UX Designer creating meaningful digital
                experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Quick Links</h4>
              <div className="space-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link}
                    href={link.link}
                    className="block text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Connect</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/R-Wangui"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://dribbble.com/Wangoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <Dribbble size={24} />
                </motion.a>
                {/* <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <Github size={24} />
                </motion.a> */}
                <motion.a
                  href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:wangoinjoroge450@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                wangoinjoroge450@gmail.com
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Wangui Njoroge. Built with React & Framer Motion.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const footerLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "UI/UX",
    link: "/productdesign",
  },
  {
    name: "Front-end",
    link: "/frontend"
   },
];

export default Footer;
