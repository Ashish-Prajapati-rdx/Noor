import { motion } from "framer-motion";

const StageTwo = () => {
  // Animation settings for the letters
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="z-10 relative flex flex-col items-center justify-center min-h-screen w-full bg-transparent">
      {/* 1. Animated Glowing Moon Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="text-9xl mb-12 drop-shadow-[0_0_35px_rgba(234,179,8,0.8)]"
      >
        🌙
      </motion.div>

      {/* 2. Main Title: EID MUBARAK */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-x-4 mb-4"
      >
        {"EID MUBARAK".split(" ").map((word, index) => (
          <div key={index} className="flex">
            {word.split("").map((char, charIndex) => (
              <motion.span
                variants={child}
                key={charIndex}
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-yellow-700 via-yellow-400 to-yellow-100 drop-shadow-md"
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* 3. Subtitle: MADAM JI */}
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "0.8em" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="text-xl md:text-2xl text-yellow-600/80 font-light mt-4 uppercase"
      >
        Madam Ji
      </motion.div>

      {/* 4. Decorative Animated Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "150px" }}
        transition={{ delay: 2, duration: 1.5 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8"
      />

      {/* 5. Floating Sparkles (Background Layer) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-yellow-200 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StageTwo;
