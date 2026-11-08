"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const WebGLHero = dynamic(() => import("./WebGLHero"), { ssr: false });
const AvorriaSculpturalObject = dynamic(() => import("./AvorriaSculpturalObject"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const sculptureY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#F7F7F5] border-b border-[#15171B]/[0.08]"
    >
      {/* Background Spatial WebGL Pointcloud */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <WebGLHero />
      </div>

      {/* Atmospheric Porcelain Vignettes */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F7F5]/40 to-[#F7F7F5] pointer-events-none"
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
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3657E8] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#15171B]/60">
                Independent Creative Technology Studio · London · New York
              </span>
            </motion.div>

            {/* Headline — Requested exact copy with oversized editorial hierarchy */}
            <motion.div variants={itemVariants} style={{ y: headlineY }}>
              <h1 className="font-display text-[clamp(3.1rem,7.8vw,7.6rem)] font-light leading-[0.96] tracking-[-0.045em] text-[#15171B]">
                Digital experiences.<br />
                <span className="text-[#3657E8] font-normal">Intelligent possibilities.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy — Exact requested text */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#6E7179] text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
            >
              We design and engineer exceptional digital experiences and intelligent systems that help ambitious businesses move forward.
            </motion.p>

            {/* CTAs — Exact requested text & routing */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              <MagneticButton>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3657E8] text-white font-display font-medium text-sm hover:bg-[#2544CC] transition-all duration-300 shadow-[0_12px_24px_-6px_rgba(54,87,232,0.35)]"
                >
                  <span>Explore What We Do</span>
                  <ArrowRight size={15} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-[#15171B]/12 text-[#15171B] font-display font-medium text-sm hover:border-[#3657E8] hover:text-[#3657E8] hover:bg-[#FFFFFF] transition-all duration-300 shadow-sm"
                >
                  <span>Discover Our Work</span>
                  <ArrowUpRight size={15} />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Spectacular 3D Object with genuine depth & lighting (5 cols) */}
          <motion.div
            variants={itemVariants}
            style={{ y: sculptureY }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#15171B]/10 bg-gradient-to-b from-[#FFFFFF] via-[#F7F7F5] to-[#E5E5E0] group">
              {/* Real-time WebGL Procedural 3D Sculpture */}
              <div className="absolute inset-0 z-0">
                <AvorriaSculpturalObject className="w-full h-full" interactive={true} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/70 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Cue & Annotation Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-[#15171B]/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono uppercase text-[10px] tracking-widest text-[#3657E8] block mb-1 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
                    Interactive 3D Sculpture
                  </span>
                  <p className="font-display font-medium text-[#15171B] text-sm">
                    Move cursor to rotate & explore materials
                  </p>
                </div>
                <Link
                  href="/lab"
                  className="w-9 h-9 rounded-full bg-[#15171B] text-white flex items-center justify-center hover:bg-[#3657E8] transition-colors shrink-0 shadow-sm"
                  aria-label="Open 3D Spatial Web Experience in The Lab"
                >
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Ticker Strip */}
      <div className="container-px mx-auto max-w-[1440px] w-full pt-8 border-t border-[#15171B]/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-[#6E7179] gap-4 z-10">
        <span className="tracking-widest uppercase">LONDON · NEW YORK</span>
        <span className="text-[#3657E8] font-medium tracking-wider">STRATEGY · CREATIVE · ENGINEERING · INTELLIGENCE</span>
        <span className="tracking-widest uppercase">NEXT.JS 16 · THREE.JS · APPLIED AI</span>
      </div>
    </section>
  );
}
