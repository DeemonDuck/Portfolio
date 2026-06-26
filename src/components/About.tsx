import { motion } from "framer-motion";
import { GitFork, Link2, Mail } from "lucide-react";

const skills = [
  { label: "Deep Learning", detail: "CNN, BiLSTM, Attention, TensorFlow/Keras" },
  { label: "ML Engineering", detail: "Scikit-learn, XGBoost, LightGBM, CatBoost" },
  { label: "Python Backend", detail: "FastAPI, SQLAlchemy, Pydantic, SQLite" },
  { label: "Data & Pipelines", detail: "Pandas, NumPy, feature engineering, CI/CD" },
  { label: "Frontend", detail: "React, TypeScript, Tailwind, Vite" },
  { label: "Deployment", detail: "Railway, Hugging Face Spaces, Streamlit Cloud" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-widest mb-4 font-medium" style={{ color: "#6c63ff" }}>
            About
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">Ridham Taneja</h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#aaaacc" }}>
            Final-year B.Tech CSE (AI/ML) student who builds shipped, deployed projects instead of just theory.
            My work spans deep learning pipelines, automation systems, full-stack applications, and ML experiments —
            the common thread is solving real problems and shipping something people can actually use.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#8888aa" }}>
            I care deeply about engineering decisions — why an architecture was chosen, what tradeoffs were made,
            and how a system holds up in production. Every project on this site documents that reasoning.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: GitFork, href: "https://github.com/DeemonDuck", label: "GitHub" },
              { icon: Link2, href: "https://www.linkedin.com/in/ridham-taneja/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ridham@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#8888aa",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6c63ff";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#8888aa";
                }}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-1 gap-3"
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ background: "#6c63ff" }}
              />
              <div>
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
