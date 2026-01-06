// // import React from 'react'

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <div className="flex justify-between mx-12 gap-8 py-8 text-gray-400 bg-transparent">
//         <div className="font-mono">
//           <Link to={`/`}>
//             <img
//               src="Images/Biggerprofile-copy.png"
//               alt=""
//               className="w-12 h-12 rounded-full bg-black"
//             />
//           </Link>
//         </div>
//         <div className="flex gap-8 justify-between">
//           <Link to={`/productdesign`}>UI/UX Design</Link>
//           <Link to={`/frontend`}>Frontend Development</Link>
//         </div>
//       </div>
//       {/* <div>
//         <a href="https://www.behance.net/wanguinjoroge" target="_blank">
//           <img
//             src="/Behance icon (1).png"
//             alt="behance"
//             // className="behance"
//           />
//         </a>
//         <a href="https://dribbble.com/Wangoi" target="_blank">
//           <img
//             src="/Dribble icon (1).png"
//             alt="dribble"
//             // className="dribble"
//           />
//         </a>
//         <a href="https://github.com/R-Wangui" target="_blank">
//           <img
//             src="/Github icon (1).png"
//             alt="github"
//             // className="github"
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
//           target="_blank"
//         >
//           <img
//             src="/Linkedin icon (1).png"
//             alt="linkedin"
//             // className="linkedin"
//           />
//         </a>
//       </div> */}
//     </>
//   );
// }

// export default Navbar

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-950/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Wangui
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={item.link}
                  // href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden text-slate-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                // href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "UI/UX",
    link: "/productdesign",
  },
  {
    title: "Front-end",
    link: "/frontend",
  },
];

export default Navbar;
