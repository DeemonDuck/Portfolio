import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 14 } },
};

const headline = "I build software that solves real problems.";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Intro label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm uppercase tracking-widest mb-6 font-medium"
        style={{ color: "#6c63ff" }}
      >
        AI/ML Engineer · Final-year B.Tech CSE
      </motion.p>

      {/* Animated headline */}
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl"
        aria-label={headline}
      >
        {headline.split("").map((char, i) => (
          <motion.span key={i} variants={letter} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-lg max-w-xl leading-relaxed"
        style={{ color: "#8888aa" }}
      >
        I build software that matters — from deep learning pipelines to full-stack systems.
        Everything here is shipped and documented. Explore the engineering decisions behind each one.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg glow"
          style={{ background: "linear-gradient(135deg, #6c63ff, #ff6584)" }}
        >
          Explore My Work
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </a>
        <a
          href="#about"
          className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:text-white"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#8888aa",
          }}
        >
          About Me
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ color: "#444" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
