import { motion } from "framer-motion";
import { Mail, GitFork, Link2, Send } from "lucide-react";

const channels = [
  { icon: Mail, label: "ridham643@gmail.com", href: "mailto:ridham643@gmail.com", accent: "primary" as const },
  { icon: GitFork, label: "github.com/DeemonDuck", href: "https://github.com/DeemonDuck", accent: "primary" as const },
  { icon: Link2, label: "linkedin.com/in/ridham-taneja", href: "https://www.linkedin.com/in/ridham-taneja/", accent: "secondary" as const },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-32">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-primary mb-8 pl-4 border-l-2 border-primary-container"
      >
        Get in touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: invitation + channels */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card col-span-1 md:col-span-5 p-8 md:p-10"
        >
          <h3 className="text-3xl font-bold text-on-surface mb-4">Let's build something.</h3>
          <p className="text-on-surface-variant leading-relaxed mb-10">
            I'm open to full-time roles, internships, and interesting collaborations.
            If you have a hard problem that needs an engineer who ships — reach out.
          </p>

          <div className="space-y-5">
            {channels.map(({ icon: Icon, label, href, accent }) => {
              const hoverColor =
                accent === "primary"
                  ? "hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(0,227,131,0.3)]"
                  : "hover:text-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(112,0,255,0.3)]";
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group"
                >
                  <span
                    className={`w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant transition-all ${hoverColor}`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-sm break-all">{label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right: message form (mailto) */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card col-span-1 md:col-span-7 p-8 md:p-10"
        >
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = encodeURIComponent(String(data.get("name") || ""));
              const msg = encodeURIComponent(String(data.get("message") || ""));
              window.location.href = `mailto:ridham643@gmail.com?subject=Portfolio contact from ${name}&body=${msg}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field id="name" label="Name" type="text" />
              <Field id="email" label="Email" type="email" />
            </div>
            <Field id="message" label="Message" textarea />
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-outline-variant text-on-surface hover:text-primary hover:border-primary text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 group"
              >
                Send message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 py-3 text-on-surface outline-none transition-colors placeholder-transparent";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={4} placeholder={label} className={`${base} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} placeholder={label} className={base} />
      )}
      <label
        htmlFor={id}
        className="absolute left-0 top-3 font-mono text-sm text-on-surface-variant transition-all pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}
