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
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
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

  const headlineY  = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const subtextY   = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  // Ghosted watermark drifts at a slightly different rate — deepest layer
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* WebGL lattice */}
      <WebGLHero />

      {/* Depth vignettes */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Ghosted AVORRIA watermark — deepest z-layer ───────────────────── */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display text-white uppercase leading-none"
          style={{
            fontSize: "clamp(10rem, 30vw, 28rem)",
            fontWeight: 200,
            letterSpacing: "-0.05em",
            opacity: 0.022,
            whiteSpace: "nowrap",
          }}
        >
          AVORRIA
        </span>
      </motion.div>

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: heroOpacity }}
        className="relative z-10 container-px mx-auto max-w-[1440px] w-full pt-32 pb-24 lg:py-36"
      >
        {/* Eyebrow — LEFT aligned, institutional */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] shrink-0" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
            London · New York · Global Practice
          </span>
        </motion.div>

        {/* Headline — balanced scale, slow parallax */}
        <motion.div style={{ y: headlineY }}>
          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.042em] text-white mb-8 max-w-5xl"
          >
            Architecting digital<br className="hidden sm:block" />
            flagships &amp;{" "}
            <span className="text-gradient-lime">applied intelligence.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle + CTAs — faster parallax */}
        <motion.div style={{ y: subtextY }} className="max-w-3xl">
          <motion.p
            variants={itemVariants}
            className="font-body text-[clamp(1rem,1.6vw,1.2rem)] text-[var(--color-muted)] mb-12 leading-[1.7] max-w-xl"
          >
            Avorria partners with ambitious industry leaders to design and engineer
            immersive WebGL platforms, custom autonomous systems, and
            category-defining digital experiences built for enduring scale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-display font-semibold text-sm hover:bg-[var(--color-lime)] transition-all duration-200 group shadow-[0_4px_24px_rgba(255,255,255,0.10)]"
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
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[var(--color-border)] bg-transparent text-white/80 font-display font-light text-sm hover:border-white/25 hover:text-white transition-all duration-200"
            >
              Explore Selected Work
              <ArrowUpRight size={14} className="text-[var(--color-muted)]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Bottom Metadata Strip ─────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="mt-24 pt-6 border-t border-[var(--color-border)] hidden md:grid grid-cols-3 gap-8 text-left"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 block mb-1.5">Practice Focus</span>
            <span className="font-mono text-xs text-white/60">Immersive 3D · Next.js 16 Flagships</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 block mb-1.5">AI Infrastructure</span>
            <span className="font-mono text-xs text-white/60">Domain-Trained Agent Swarms</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 block mb-1.5">Availability</span>
            <span className="font-mono text-xs text-[var(--color-lime)]">Commissions Open — Q1 2027</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
