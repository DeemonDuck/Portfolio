import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="text-sm uppercase tracking-widest mb-4 font-medium" style={{ color: "#6c63ff" }}>
          Featured Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Projects That Matter
        </h2>
        <p className="max-w-xl mx-auto text-base" style={{ color: "#8888aa" }}>
          Each project represents a real problem, a deliberate engineering decision, and a measurable outcome.
        </p>
      </motion.div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
