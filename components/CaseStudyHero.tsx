"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  category: string;
  image?: string;
}

const PROJECT_IMAGE_MAP: Record<string, string> = {
  "Axiom Finance": "/imagery/projects/axiom-finance.webp",
  "Nocturne Studio": "/imagery/projects/nocturne-studio.webp",
  "Vanta AI": "/imagery/projects/vanta-ai.webp",
  "Vanguard AI": "/imagery/projects/vanta-ai.webp",
  "Bloom Health": "/imagery/projects/bloom-health.webp",
  "Meridian Arc": "/imagery/projects/meridian-arc.webp",
};

export default function CaseStudyHero({ title, category, image }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.02, 0.98]);

  const activeImage = image || PROJECT_IMAGE_MAP[title] || "/imagery/hero/spatial-monolith.webp";

  return (
    <div
      ref={containerRef}
      className="aspect-[16/8] md:aspect-[21/9] rounded-2xl bg-[#15171B] border border-[#15171B]/15 overflow-hidden shadow-2xl relative group card-arch"
      role="img"
      aria-label={`${title} Hero Showcase Image`}
    >
      {/* High-Resolution Project Artwork */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : y,
          scale: shouldReduceMotion ? 1 : scale,
        }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src={activeImage}
          alt={`${title} — ${category}`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1400px"
          className="object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-95"
        />
      </motion.div>

      {/* Atmospheric depth overlay in deep charcoal and subtle cobalt */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#15171B] via-transparent to-[#15171B]/30 opacity-80 pointer-events-none" />

      {/* Foreground title overlay */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 space-y-2 pointer-events-none">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/95 text-[#15171B] font-medium backdrop-blur-md inline-block">
          {category} Flagship
        </span>
        <h2 className="font-display font-light text-3xl md:text-6xl text-white tracking-[-0.035em]">
          {title}
        </h2>
      </div>
    </div>
  );
}
