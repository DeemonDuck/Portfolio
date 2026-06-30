import { Terminal, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

const roles = ["AI/ML Engineer", "Deep Learning", "Full-Stack Builder"];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
      {/* Main hero card */}
      <TiltCard className="col-span-1 md:col-span-8 p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
        <div style={{ transform: "translateZ(30px)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-container mb-5">
            AI/ML Engineer · Final-year B.Tech CSE (AI/ML)
          </p>
          <h1 className="text-[40px] leading-[1.05] sm:text-6xl md:text-[72px] md:leading-[1.05] font-extrabold tracking-tight text-glint mb-5">
            I build software that
            <br />
            solves real problems.
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            From deep learning pipelines to full-stack systems — everything here is
            shipped, deployed, and documented. Explore the engineering decisions behind each one.
          </p>
        </div>
      </TiltCard>

      {/* Role rotator */}
      <TiltCard
        delay={0.1}
        className="col-span-1 md:col-span-4 p-8 flex flex-col justify-center items-center min-h-[400px] group"
      >
        <div className="flex flex-col items-center w-full" style={{ transform: "translateZ(20px)" }}>
          <Terminal
            size={48}
            className="text-primary-container mb-6 group-hover:scale-110 transition-transform"
          />
          <div className="h-12 overflow-hidden relative w-full text-center">
            <div className="absolute w-full animate-[slideUp_6s_infinite]">
              {[...roles, roles[0]].map((role, i) => (
                <div
                  key={i}
                  className="text-2xl font-semibold h-12 flex items-center justify-center text-primary"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Location */}
      <TiltCard delay={0.2} className="col-span-1 md:col-span-4 p-8 flex items-center">
        <div className="flex items-center gap-6" style={{ transform: "translateZ(15px)" }}>
          <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center border border-secondary/30 shrink-0">
            <MapPin className="text-secondary" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-1">
              Based in
            </div>
            <div className="text-2xl font-semibold text-on-surface">India</div>
          </div>
        </div>
      </TiltCard>

      {/* Availability */}
      <TiltCard
        delay={0.2}
        className="col-span-1 md:col-span-8 p-8 flex items-center bg-gradient-to-r from-surface-container/60 to-surface-container-high/60"
      >
        <div className="w-full flex flex-wrap items-center justify-between gap-4" style={{ transform: "translateZ(15px)" }}>
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_rgba(0,255,148,0.8)]" />
            <span className="font-mono text-sm text-primary">
              Open to full-time roles &amp; internships
            </span>
          </div>
          <a
            href="#contact"
            className="border border-outline-variant text-on-surface hover:text-primary hover:border-primary text-xs font-semibold tracking-wide px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </TiltCard>
    </section>
  );
}
