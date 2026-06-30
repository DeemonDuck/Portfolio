import { useEffect, useRef } from "react";

/**
 * Global animated background: a drifting CSS aurora, two ambient
 * blur "blobs", and a fluid glow that follows the cursor.
 * Fixed behind all content (z-index < content).
 */
export default function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion: skip the cursor glow entirely.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX}px`;
          glowRef.current.style.top = `${e.clientY}px`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="aurora-bg" />
      </div>
      <div className="aura-blob aura-primary" aria-hidden />
      <div className="aura-blob aura-secondary" aria-hidden />
      <div ref={glowRef} className="mouse-glow" aria-hidden />
    </>
  );
}
