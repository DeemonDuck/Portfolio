import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Zap, GitFork } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/" />;

  const idx = projects.findIndex((p) => p.id === id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  const staggerItems = [
    { key: "cat", content: (
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono px-3 py-1 rounded-full"
          style={{ background: `${project.color}22`, color: project.color }}>
          {project.category}
        </span>
        <span className="text-xs font-mono" style={{ color: "#555" }}>
          0{idx + 1} / 0{projects.length}
        </span>
      </div>
    )},
    { key: "title", content: (
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
        <span className="mr-4">{project.icon}</span>{project.title}
      </h1>
    )},
    { key: "tagline", content: (
      <p className="text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "#aaaacc" }}>
        {project.tagline}
      </p>
    )},
    { key: "tech", content: (
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(255,255,255,0.06)", color: "#ccccee", border: "1px solid rgba(255,255,255,0.08)" }}>
            {t}
          </span>
        ))}
      </div>
    )},
    { key: "links", content: (
      <div className="flex items-center gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ border: `1px solid ${project.color}66`, color: project.color, textDecoration: "none" }}>
            <GitFork size={15} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: project.color, textDecoration: "none" }}>
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    )},
  ];

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Hero strip */}
      <div className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}18 0%, transparent 60%)`, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 py-24">
          {staggerItems.map(({ key, content }, i) => (
            <motion.div key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}>
              {content}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story sections */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {[
          { title: "The Problem", text: project.problem },
          { title: "The Solution", text: project.solution },
          { title: "My Approach", text: project.process },
        ].map(({ title, text }) => (
          <Section key={title} title={title} accent={project.color}>
            <p className="text-base leading-relaxed" style={{ color: "#aaaacc" }}>{text}</p>
          </Section>
        ))}

        <Section title="Key Challenges" accent={project.color}>
          <div className="space-y-6">
            {project.challenges.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ background: "#111118", border: `1px solid ${project.color}33` }}>
                <div className="flex items-start gap-3 mb-3">
                  <Zap size={16} style={{ color: project.color, marginTop: "2px", flexShrink: 0 }} />
                  <h4 className="font-semibold text-white">{c.title}</h4>
                </div>
                <p className="text-sm leading-relaxed pl-7" style={{ color: "#8888aa" }}>{c.solution}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Results & Impact" accent={project.color}>
          <div className="space-y-3">
            {project.results.map((r, i) => (
              <motion.div key={i} className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <CheckCircle size={16} style={{ color: project.color, marginTop: "2px", flexShrink: 0 }} />
                <p className="text-base" style={{ color: "#aaaacc" }}>{r}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Prev / Next */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 py-12 flex items-center justify-between gap-4">
          {prev ? (
            <a href={`/project/${prev.id}`} className="flex flex-col gap-1 group" style={{ textDecoration: "none" }}>
              <span className="text-xs" style={{ color: "#555" }}>← Previous</span>
              <span className="text-sm font-semibold text-white group-hover:opacity-70 transition-opacity">{prev.title}</span>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/project/${next.id}`} className="flex flex-col gap-1 items-end group" style={{ textDecoration: "none" }}>
              <span className="text-xs" style={{ color: "#555" }}>Next →</span>
              <span className="text-sm font-semibold text-white group-hover:opacity-70 transition-opacity">{next.title}</span>
            </a>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-5 rounded-full" style={{ background: accent }} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}
