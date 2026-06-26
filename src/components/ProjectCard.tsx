import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => navigate(`/project/${project.id}`)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative cursor-pointer rounded-2xl p-px overflow-hidden"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${project.color}66, transparent)` }}
      />

      {/* Card body */}
      <div
        className="relative rounded-2xl p-8 h-full flex flex-col gap-4"
        style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Icon + number */}
        <div className="flex items-start justify-between">
          <span className="text-4xl">{project.icon}</span>
          <span className="text-xs font-mono" style={{ color: "#444" }}>
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#8888aa" }}>
          {project.tagline}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ background: `${project.color}18`, color: project.color }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono" style={{ color: "#444" }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-sm font-medium mt-2" style={{ color: project.color }}>
          <span>View Project</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>
      </div>
    </motion.div>
  );
}
