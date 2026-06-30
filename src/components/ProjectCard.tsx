import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../data/projects";

/**
 * Glassmorphic project card. Featured cards span wider and taller.
 * Tilts toward the cursor and tracks a glass highlight; click navigates
 * to the project detail route.
 */
export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onClick={() => navigate(`/project/${project.id}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/project/${project.id}`);
      }}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`bento-card group cursor-pointer p-8 flex flex-col justify-between ${
        featured ? "min-h-[340px]" : "min-h-[300px]"
      }`}
    >
      <div className="glass-highlight" />

      <div className="flex items-start justify-between">
        <span className="text-4xl" aria-hidden>
          {project.icon}
        </span>
        <span
          className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
          style={{
            color: project.color,
            borderColor: `${project.color}55`,
            background: `${project.color}14`,
          }}
        >
          {project.category}
        </span>
      </div>

      <div className="mt-6">
        <h3
          className={`font-bold text-on-surface mb-2 ${featured ? "text-3xl" : "text-2xl"}`}
        >
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-2xl">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.slice(0, featured ? 6 : 4).map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full border border-outline-variant font-mono text-xs text-on-surface-variant"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
          style={{ color: project.color }}
        >
          View case study
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>
      </div>
    </motion.div>
  );
}
