"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  /** Pass the headline as a render prop — receives className string */
  headline: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
}

const MASK_VARIANTS = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    y: 24,
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    opacity: 1,
  },
};

/**
 * PageHero — cinematic mask-reveal hero block for inner pages.
 *
 * The eyebrow dot fades in first, then the headline unclips from bottom
 * upward (like film revealing frame-by-frame), then body text fades in.
 *
 * Uses clip-path: inset() — hardware-accelerated, zero layout shift.
 * Falls back gracefully when prefers-reduced-motion is on (Framer Motion
 * detects this and skips the animation automatically).
 */
export default function PageHero({ eyebrow, headline, body, className = "" }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div ref={ref} className={`pt-40 pb-16 container-px mx-auto max-w-[1440px] ${className}`}>
      {/* Eyebrow pill — fades in */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#3657E8]" aria-hidden="true" />
        <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
          {eyebrow}
        </span>
      </motion.div>

      {/* Headline — clip-path mask reveal */}
      <div className="overflow-hidden mb-8">
        <motion.div
          variants={MASK_VARIANTS}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {headline}
        </motion.div>
      </div>

      {/* Body — fade in after headline */}
      {body && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {body}
        </motion.div>
      )}
    </div>
  );
}
