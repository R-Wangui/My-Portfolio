
import { motion } from "framer-motion";
import { Code, MoveRight } from "lucide-react";
import Navbar from "./layout/Navbar";
import Resume from "../assets/Wangui Resume with Portfolio.pdf";

function Hero() {
  const downloadResume = () => {
    window.open(Resume, "_blank");
  };
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Code size={48} className="text-slate-950" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design Meets Code
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Frontend Developer & UI/UX Designer crafting beautiful, functional
              digital experiences that users love and developers admire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                // href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2"
                onClick={() => downloadResume}
              >
                Get Resume
                <MoveRight size={20} />
              </motion.a>
              {/* <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 text-slate-400 border-cyan-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400/10"
              >
                View My Work <Code size={20} />
              </motion.a> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
