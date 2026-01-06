import { motion } from "framer-motion";

function Doodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Hand-drawn circles */}
      <motion.svg
        className="absolute top-20 left-10"
        width="100"
        height="100"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#ec4899"
          strokeWidth="3"
          strokeDasharray="5,5"
          opacity="0.3"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-40 right-20"
        width="80"
        height="80"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="3"
          strokeDasharray="3,3"
          opacity="0.3"
        />
      </motion.svg>

      {/* Squiggly lines */}
      <motion.svg
        className="absolute bottom-40 left-1/4"
        width="150"
        height="50"
        initial={{ x: 0 }}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path
          d="M 10 25 Q 40 10 70 25 T 130 25"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="3"
          opacity="0.3"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-1/3 right-1/4"
        width="120"
        height="40"
        initial={{ x: 0 }}
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path
          d="M 10 20 Q 35 5 60 20 T 110 20"
          fill="none"
          stroke="#ec4899"
          strokeWidth="2"
          opacity="0.3"
        />
      </motion.svg>

      {/* Stars */}
      {/* <motion.div
        className="absolute top-1/4 left-1/3 text-4xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⭐
      </motion.div> */}

      {/* <motion.div
        className="absolute bottom-1/3 right-1/3 text-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✨
      </motion.div> */}

      {/* Arrows */}
      <motion.svg
        className="absolute top-1/2 left-20"
        width="60"
        height="60"
        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <path
          d="M 10 30 L 40 30 L 35 25 M 40 30 L 35 35"
          stroke="#8b5cf6"
          strokeWidth="3"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Hearts */}
      {/* <motion.div
        className="absolute bottom-1/4 left-1/2 text-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💜
      </motion.div> */}
    </div>
  );
}

export default Doodles;
