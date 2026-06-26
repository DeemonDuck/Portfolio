import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 60);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 50,
          background: "linear-gradient(90deg, #6c63ff, #ff6584)",
        }}
      />
      <motion.header
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link
          to="/"
          style={{ fontWeight: 700, color: "white", fontSize: "1.125rem", textDecoration: "none" }}
        >
          RH<span style={{ color: "#6c63ff" }}>.</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.875rem" }}>
          {location.pathname === "/" ? (
            <>
              {["#projects", "#about", "#contact"].map((href, i) => (
                <a
                  key={href}
                  href={href}
                  style={{ color: "#8888aa", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8888aa")}
                >
                  {["Work", "About", "Contact"][i]}
                </a>
              ))}
            </>
          ) : (
            <Link
              to="/"
              style={{ color: "#8888aa", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8888aa")}
            >
              ← Back
            </Link>
          )}
          <a
            href="/resume.pdf"
            download
            style={{
              padding: "0.375rem 0.875rem",
              borderRadius: "0.375rem",
              background: "#6c63ff",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </nav>
      </motion.header>
    </>
  );
}
