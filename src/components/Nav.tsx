import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-primary-container"
      />

      <motion.header
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92vw)]"
      >
        <nav className="flex items-center justify-between gap-4 rounded-full px-5 py-3 bg-surface-container/40 backdrop-blur-xl border border-primary/20 shadow-[0_0_40px_rgba(0,227,131,0.1)]">
          <Link
            to="/"
            className="font-bold text-lg tracking-tighter text-primary pl-1 shrink-0"
          >
            Ridham<span className="text-primary-container">.</span>
          </Link>

          {onHome ? (
            <div className="hidden md:flex items-center gap-7 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : (
            <Link
              to="/"
              className="hidden md:block text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              ← Back to home
            </Link>
          )}

          <a
            href="/resume.pdf"
            download
            className="shrink-0 bg-primary text-on-primary text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,227,131,0.6)] transition-all duration-300 active:scale-95"
          >
            Resume
          </a>
        </nav>
      </motion.header>
    </>
  );
}
