import { motion } from "framer-motion";
import { GitFork, Link2, Mail, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-widest mb-4 font-medium" style={{ color: "#6c63ff" }}>
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let's build something together
        </h2>
        <p className="text-base leading-relaxed mb-12" style={{ color: "#8888aa" }}>
          I'm open to full-time roles, internships, and interesting project collaborations.
          If you have a hard problem that needs an engineer who ships — reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ridham@example.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6c63ff, #ff6584)" }}
          >
            <Mail size={16} />
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/ridham-taneja/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#8888aa", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#6c63ff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8888aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            <Link2 size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/DeemonDuck"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#8888aa", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#6c63ff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8888aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            <GitFork size={16} />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#8888aa", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#6c63ff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8888aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
