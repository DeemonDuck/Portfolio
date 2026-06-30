export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-on-surface-variant">
        <div className="text-2xl font-extrabold text-primary">
          Ridham<span className="text-primary-container">.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider">
          <a href="https://github.com/DeemonDuck" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ridham-taneja/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:ridham643@gmail.com" className="hover:text-primary transition-colors">Email</a>
          <a href="/resume.pdf" download className="hover:text-primary transition-colors">Resume</a>
        </div>

        <div className="font-mono text-xs text-on-surface-variant/60 text-center">
          © {new Date().getFullYear()} Ridham Taneja · React + TS + Framer Motion
        </div>
      </div>
    </footer>
  );
}
