"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const WebGLHero = dynamic(() => import("./WebGLHero"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#F7F7F5] border-b border-[#15171B]/[0.08]"
    >
      {/* Interactive WebGL Spatial Canvas (Cobalt & Soft Coral Pointcloud) */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <WebGLHero />
      </div>

      {/* Atmospheric depth gradients on porcelain */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F7F5]/50 to-[#F7F7F5] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-px mx-auto max-w-[1440px] w-full relative z-10 flex-1 flex flex-col justify-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: heroOpacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Monumental Editorial Display Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Studio Status Pill */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3657E8] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#15171B]/60">
                Creative Engineering · London & New York
              </span>
            </motion.div>

            {/* Headline — Light, confident editorial scale */}
            <motion.div variants={itemVariants} style={{ y: headlineY }}>
              <h1 className="font-display text-[clamp(2.9rem,7.5vw,7.2rem)] font-light leading-[0.98] tracking-[-0.045em] text-[#15171B] uppercase">
                DIGITAL CRAFT.<br />
                <span className="text-[#3657E8] font-normal">APPLIED AI.</span><br />
                COMMERCIAL FORCE.
              </h1>
            </motion.div>

            {/* Body Description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#6E7179] text-base md:text-xl max-w-xl leading-relaxed font-light"
            >
              We design and engineer bespoke web flagships, spatial 3D interactions, and autonomous AI systems for category-defining brands.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#3657E8] text-white font-display font-medium text-sm hover:bg-[#2544CC] transition-all duration-300 shadow-[0_12px_24px_-6px_rgba(54,87,232,0.35)]"
                >
                  Initiate Commission
                  <ArrowRight size={15} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#15171B]/12 text-[#15171B] font-display font-medium text-sm hover:border-[#15171B]/30 hover:bg-[#F0F0EC] transition-all duration-300"
                >
                  Explore Selected Work
                  <ArrowUpRight size={15} />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Featured Cinematic Visual Art (5 cols) */}
          <motion.div
            variants={itemVariants}
            style={{ y: imageY }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-[#15171B]/10 bg-white group">
              {/* Bespoke high-resolution editorial imagery */}
              <Image
                src="/imagery/hero/spatial-monolith.webp"
                alt="Avorria Creative Technology & Spatial Engineering"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/80 via-transparent to-transparent" />

              {/* Floating Architectural Annotation Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-lg bg-white/95 backdrop-blur-md border border-[#15171B]/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono uppercase text-[10px] tracking-widest text-[#3657E8] block mb-1 font-semibold">
                    Featured Showcase
                  </span>
                  <p className="font-display font-medium text-[#15171B] text-sm">
                    Axiom Finance · Spatial WebGL Architecture
                  </p>
                </div>
                <Link
                  href="/work/axiom-finance"
                  className="w-8 h-8 rounded-full bg-[#15171B] text-white flex items-center justify-center hover:bg-[#3657E8] transition-colors shrink-0"
                  aria-label="View Axiom Finance Case Study"
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker strip at the foot of the hero */}
      <div className="container-px mx-auto max-w-[1440px] w-full pt-8 border-t border-[#15171B]/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-[#6E7179] gap-4 z-10">
        <span>LONDON · NEW YORK</span>
        <span className="text-[#3657E8] font-semibold">60% LIGHT EDITORIAL · 25% DEEP OBSIDIAN</span>
        <span>NEXT.JS 16 · THREE.JS · APPLIED AI</span>
      </div>
    </section>
  );
}
