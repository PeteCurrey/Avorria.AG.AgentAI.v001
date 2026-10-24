"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * MagneticButton — attracts toward the cursor on hover, snaps back on leave.
 *
 * Outer wrapper: translates up to (strength × distance from centre) pixels.
 * Inner face: subtly scales up on hover for a tactile depth impression.
 * Spring config tuned for quick attraction, soft snapping release.
 */
export default function MagneticButton({
  children,
  strength = 0.45,
  className = "inline-block",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Fast snap-back spring for the magnetic wrapper
  const springConfig = { stiffness: 260, damping: 20, mass: 0.18 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Separate, softer spring for inner face scale
  const scaleVal = useMotionValue(1);
  const springScale = useSpring(scaleVal, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
    scaleVal.set(1.04);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleVal.set(1);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {/* Inner face scales subtly on hover — gives physical depth */}
      <motion.div style={{ scale: springScale }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
