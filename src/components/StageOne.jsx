import { motion } from "framer-motion";

const StageOne = ({ onProceed }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 relative flex items-center justify-center min-h-screen w-full bg-slate-950 overflow-hidden"
    >
      {/* --- EXTRA LIGHTING SECTION --- */}

      {/* 1. Top Left Blue-ish Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px]"
      />

      {/* 2. Bottom Right Gold Glow */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-yellow-700 rounded-full blur-[150px]"
      />

      {/* 3. Central Pulsing Aura (Jo pehle tha but improved) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600 rounded-full blur-[130px]"
        />
      </div>

      {/* --- CONTENT CARD --- */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative group p-[1.5px] rounded-[30px] overflow-hidden"
      >
        {/* Border Light Beam Effect (Isse card ke edge chamkenge) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#EAB308_100%)]"
        />

        <div className="relative bg-slate-950/90 backdrop-blur-3xl p-12 rounded-[29px] text-center max-w-sm border border-white/5 shadow-2xl">
          {/* Glowing Diamond Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full" />
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 mx-auto relative border-2 border-yellow-500/50 rotate-45 flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.6)]" />
            </motion.div>
          </div>

          {/* Typography */}
          <h2 className="text-3xl font-extralight text-white tracking-[0.2em] mb-4">
            MAHENOOR
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8" />

          <div className="mb-10">
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic tracking-wide font-light">
              "Humare toh naam mein hi noor hai{" "}
              <span className="text-yellow-500 font-medium">Mahenoor</span>,
            </p>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic tracking-wide font-light mt-2">
              Lagta hai chand bhi{" "}
              <span className="text-yellow-500 font-medium font-serif italic">
                Tum
              </span>{" "}
              hi se mashur hai{" "}
              <span className="text-yellow-500 font-medium text-2xl">
                Mahenoor
              </span>
              ."
            </p>
          </div>

          {/* Improved Royal Button with Inner Shimmer */}
          <button
            onClick={onProceed}
            className="w-full py-4 relative group overflow-hidden border border-yellow-600/50 rounded-lg transition-all duration-500 hover:border-yellow-400"
          >
            {/* Shimmer Effect on Hover */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 -skew-x-12"
            />

            <div className="absolute inset-0 bg-yellow-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-yellow-500 text-xs tracking-[0.4em] font-bold group-hover:text-yellow-400">
              CLICK HERE
            </span>
          </button>

          <p className="mt-6 text-[9px] text-slate-600 tracking-[0.6em] uppercase opacity-60">
            Exclusive for Madam Ji
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StageOne;
