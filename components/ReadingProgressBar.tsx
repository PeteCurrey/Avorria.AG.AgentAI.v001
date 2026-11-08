"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ReadingProgressBar — slim lime indicator across the top of the page.
 *
 * Uses useScroll on the document, then spring-smooths the value so the bar
 * glides rather than jerking. Zero impact on compositor thread — single
 * scaleX transform on a fixed strip.
 */
export default function ReadingProgressBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left center",
        willChange: "transform",
      }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-lime)] z-[200] pointer-events-none"
      aria-hidden="true"
    />
  );
}
