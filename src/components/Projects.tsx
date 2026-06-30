import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="mb-32">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-primary mb-8 pl-4 border-l-2 border-primary-container"
      >
        Selected Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured project spans full width */}
        <div className="col-span-1 md:col-span-12">
          <ProjectCard project={featured} index={0} featured />
        </div>

        {/* Remaining projects, two per row on desktop */}
        {rest.map((p, i) => (
          <div key={p.id} className="col-span-1 md:col-span-6">
            <ProjectCard project={p} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
