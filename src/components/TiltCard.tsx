import { useRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Max tilt in degrees. Set 0 to disable tilt but keep the highlight. */
  max?: number;
  /** Reveal animation delay (seconds). */
  delay?: number;
  className?: string;
}

/**
 * Glassmorphic bento card with a subtle 3D tilt toward the cursor and a
 * radial "glass highlight" that tracks the mouse. Reveals on scroll into view.
 */
export default function TiltCard({
  children,
  max = 5,
  delay = 0,
  className = "",
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Cursor-tracking highlight position
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);

    if (max > 0) {
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -max;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * max;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`bento-card ${className}`}
      style={{ transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)", willChange: "transform" }}
      {...rest}
    >
      <div className="glass-highlight" />
      {children}
    </motion.div>
  );
}
