"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface CaseStudyHeroProps {
  title: string;
  category: string;
}

export default function CaseStudyHero({ title, category }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.98]);

  return (
    <div
      ref={containerRef}
      className="aspect-[16/8] md:aspect-[21/9] rounded-3xl bg-gradient-to-br from-[#151525] via-[#0b0b14] to-[#050508] border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl relative"
      role="img"
      aria-label={`${title} Hero Showcase Image`}
    >
      {/* Background kinetic grid lines */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,255,63,0.03)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : y,
          scale: shouldReduceMotion ? 1 : scale,
        }}
        className="text-center relative z-10 select-none pointer-events-none will-change-transform"
      >
        <span className="font-display font-black text-5xl md:text-8xl lg:text-9xl text-white/20 uppercase tracking-wider block transition-colors duration-500 hover:text-white/30">
          {title}
        </span>
        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--color-lime)] mt-3 block">
          {category} Flagship
        </span>
      </motion.div>

      {/* Vignette gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
