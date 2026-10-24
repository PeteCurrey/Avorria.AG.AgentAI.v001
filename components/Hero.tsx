"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

const WebGLHero = dynamic(() => import("./WebGLHero"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 2.4, staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      {/* WebGL Background */}
      <WebGLHero />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/20 via-transparent to-[var(--color-bg)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.08)_0%,transparent_70%)]" aria-hidden />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-px mx-auto max-w-[1440px] text-center py-32"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          <span className="font-body text-sm text-[var(--color-muted)] uppercase tracking-widest">
            UK & USA Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-[clamp(2.75rem,13.5vw,7.5rem)] leading-[0.94] tracking-[-0.04em] text-white mb-8"
        >
          We build what others
          <br />
          <span className="text-gradient-lime">can&apos;t imagine.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="font-body text-[clamp(1rem,2vw,1.25rem)] text-[var(--color-muted)] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Avorria crafts performance-first immersive websites and autonomous AI systems for ambitious brands demanding Awwwards-level craft.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-base hover:bg-white transition-colors duration-200 group"
            >
              Start a project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </MagneticButton>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--color-border)] text-white font-display font-semibold text-base hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors duration-200"
          >
            View our work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--color-muted)] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-lime)] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
