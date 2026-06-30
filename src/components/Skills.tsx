import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Server, Database, Code2, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  label: string;
  detail: string;
  accent: "primary" | "secondary";
}

const skills: Skill[] = [
  { icon: BrainCircuit, label: "Deep Learning", detail: "CNN · BiLSTM · Attention · TensorFlow/Keras", accent: "primary" },
  { icon: Cpu, label: "ML Engineering", detail: "Scikit-learn · XGBoost · LightGBM · CatBoost", accent: "secondary" },
  { icon: Server, label: "Python Backend", detail: "FastAPI · SQLAlchemy · Pydantic · SQLite", accent: "primary" },
  { icon: Database, label: "Data & Pipelines", detail: "Pandas · NumPy · Feature Engineering · CI/CD", accent: "secondary" },
  { icon: Code2, label: "Frontend", detail: "React · TypeScript · Tailwind · Vite", accent: "primary" },
  { icon: Cloud, label: "Deployment", detail: "Railway · Hugging Face Spaces · Streamlit Cloud", accent: "secondary" },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-32">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-primary mb-8 pl-4 border-l-2 border-primary-container"
      >
        Technical Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => {
          const Icon = s.icon;
          const color = s.accent === "primary" ? "text-primary-container" : "text-secondary";
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card hover-shimmer p-7"
            >
              <div className="glass-highlight" />
              <Icon size={36} className={`${color} mb-4`} />
              <h3 className="text-lg font-semibold text-on-surface mb-1">{s.label}</h3>
              <p className="text-sm text-on-surface-variant font-mono leading-relaxed">
                {s.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
