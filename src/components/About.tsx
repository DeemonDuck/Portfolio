import { motion } from "framer-motion";
import { GitFork, Link2, Mail, Download, BrainCircuit } from "lucide-react";

const timeline = [
  {
    title: "Final-year B.Tech — CSE (AI/ML)",
    meta: "Present",
    body: "Specializing in machine learning and deep learning, with a focus on building systems that actually ship and get deployed — not just notebooks.",
    accent: "primary" as const,
  },
  {
    title: "Building & shipping in public",
    meta: "Ongoing",
    body: "8+ deployed projects spanning deep learning pipelines, ML engineering, full-stack apps, and automation — each documented with the engineering decisions behind it.",
    accent: "secondary" as const,
  },
  {
    title: "Open to opportunities",
    meta: "Now",
    body: "Looking for full-time roles and internships where I can build ML and full-stack systems that reach production.",
    accent: "muted" as const,
  },
];

const dot = {
  primary: "bg-primary-container shadow-[0_0_10px_rgba(0,255,148,0.8)]",
  secondary: "bg-secondary-container shadow-[0_0_10px_rgba(112,0,255,0.8)]",
  muted: "bg-surface-bright border-2 border-outline-variant",
};

const socials = [
  { icon: GitFork, href: "https://github.com/DeemonDuck", label: "GitHub" },
  { icon: Link2, href: "https://www.linkedin.com/in/ridham-taneja/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ridham643@gmail.com", label: "Email" },
];

export default function About() {
  return (
    <section id="about" className="mb-32">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-primary mb-8 pl-4 border-l-2 border-primary-container"
      >
        Trajectory
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card col-span-1 md:col-span-7 p-8 md:p-10"
        >
          {timeline.map((item, i) => (
            <div key={item.title} className={`relative pl-12 ${i < timeline.length - 1 ? "pb-8" : ""}`}>
              {i < timeline.length - 1 && (
                <span className="absolute left-[19px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-primary-container/40 to-transparent" />
              )}
              <span className={`absolute left-[14px] top-1.5 w-3 h-3 rounded-full ${dot[item.accent]}`} />
              <h3 className="text-xl font-semibold text-on-surface mb-1">{item.title}</h3>
              <p className="font-mono text-sm text-primary-container mb-3">{item.meta}</p>
              <p className="text-on-surface-variant leading-relaxed">{item.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card col-span-1 md:col-span-5 p-8 md:p-10 flex flex-col items-center text-center"
        >
          <div className="w-28 h-28 rounded-full mb-7 bg-surface-container-high border-2 border-primary/30 p-2 shadow-[0_0_30px_rgba(0,227,131,0.2)]">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <BrainCircuit size={52} className="text-primary-container" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-3">Ridham Taneja</h3>
          <p className="text-on-surface-variant leading-relaxed mb-7">
            I build shipped, deployed projects instead of just theory — and I care deeply
            about engineering decisions: why an architecture was chosen, what tradeoffs were
            made, and how it holds up in production.
          </p>

          <div className="flex items-center gap-3 mb-7">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(0,227,131,0.3)] transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-7 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,227,131,0.6)] transition-all duration-300 active:scale-95"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
