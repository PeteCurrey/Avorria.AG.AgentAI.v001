"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const WebGLHero = dynamic(() => import("./WebGLHero"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 2.2, staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Parallax depth layers ─────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Headline drifts up slowly — stays behind
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  // Subtext drifts up faster — appears closer to viewer
  const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  // Whole hero fades out gracefully
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Refined WebGL Topographical Lattice */}
      <WebGLHero />

      {/* Subtle depth vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: heroOpacity }}
        className="relative z-10 container-px mx-auto max-w-[1440px] text-center pt-32 pb-24 lg:py-36"
      >
        {/* Institutional Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--color-panel)] border border-[var(--color-border)] mb-10 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 font-medium">
            London · New York · Global Practice
          </span>
        </motion.div>

        {/* Headline — slow parallax layer */}
        <motion.div style={{ y: headlineY }}>
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-[clamp(2.75rem,8vw,7rem)] leading-[0.98] tracking-[-0.035em] text-white mb-8 max-w-5xl mx-auto"
          >
            Architecting digital flagships &amp;{" "}
            <span className="text-gradient-lime">applied intelligence.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle — faster parallax layer */}
        <motion.div style={{ y: subtextY }}>
          <motion.p
            variants={itemVariants}
            className="font-body text-[clamp(1.05rem,1.8vw,1.25rem)] text-[var(--color-muted)] max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            Avorria partners with ambitious industry leaders to design and engineer
            immersive WebGL platforms, custom autonomous systems, and category-defining
            digital experiences built for enduring scale.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-display font-semibold text-sm hover:bg-[var(--color-lime)] hover:text-black transition-all duration-200 group shadow-[0_4px_24px_rgba(255,255,255,0.12)]"
              >
                Initiate an Engagement
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </MagneticButton>

            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[var(--color-border)] bg-[var(--color-panel)]/40 text-white/90 font-display font-medium text-sm hover:border-white/30 hover:text-white transition-all duration-200"
            >
              Explore Selected Work
              <ArrowUpRight size={15} className="text-[var(--color-muted)]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Metadata & Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-[var(--color-border)] max-w-4xl mx-auto hidden md:grid grid-cols-3 gap-8 text-left text-xs font-mono text-[var(--color-muted)]"
        >
          <div>
            <span className="text-white font-medium block mb-1">PRACTICE FOCUS</span>
            <span>Immersive 3D &amp; Next.js 15 Flagships</span>
          </div>
          <div>
            <span className="text-white font-medium block mb-1">AI INFRASTRUCTURE</span>
            <span>Domain-Trained Agent Swarms</span>
          </div>
          <div>
            <span className="text-white font-medium block mb-1">AVAILABILITY</span>
            <span>Commissions Open for Q1 2027</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
