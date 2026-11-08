"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Compass, Sparkles, Code2, Cpu, ArrowUpRight } from "lucide-react";

/**
 * Section 02 — THE AVORRIA DIFFERENCE
 *
 * Four visually distinct editorial compositions rather than 4 identical cards:
 * 1. STRATEGY: Wide architectural landscape with split business economics data
 * 2. CREATIVE: Tall vertical cinematic art frame showcasing spatial aesthetics
 * 3. ENGINEERING: Interactive terminal code-split viewport with real latency telemetry
 * 4. INTELLIGENCE: Connected neural pipeline node graph with live data routing
 */
export default function AvorriaDifference() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="section-pad bg-[#FFFFFF] border-b border-[#15171B]/[0.08] relative overflow-hidden"
    >
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
              02 / The Avorria Difference
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] text-[#15171B] leading-[1.02] tracking-[-0.04em] font-light">
            Four disciplines. <br />
            <span className="text-[#3657E8] font-normal">One unified standard of execution.</span>
          </h2>
          <p className="font-body text-[#6E7179] text-base md:text-lg font-light leading-relaxed">
            Most agencies excel at design or engineering. Very few bridge both with commercial strategy and real-world artificial intelligence.
          </p>
        </div>

        {/* 4 Visually Distinct Asymmetric Compositions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COMPOSITION 01: STRATEGY (7 cols, Wide Landscape Card) */}
          <motion.div
            style={{ y: y1 }}
            className="lg:col-span-7 bg-[#F7F7F5] rounded-3xl border border-[#15171B]/[0.08] p-8 md:p-12 relative overflow-hidden group card-arch flex flex-col justify-between min-h-[460px]"
          >
            <div className="space-y-4 z-10 relative max-w-xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#3657E8]/10 text-[#3657E8] flex items-center justify-center font-mono text-xs font-semibold">
                  01
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3657E8] font-semibold">
                  Strategy
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-[#15171B] font-light tracking-tight">
                Commercial clarity before technology.
              </h3>
              <p className="font-body text-[#6E7179] text-sm md:text-base leading-relaxed font-light">
                We dissect the revenue model, customer acquisition journey, and operational economics before writing code. We never build features that fail to move the business needle.
              </p>
            </div>

            {/* Strategic visual artifact: Architectural office & analytics */}
            <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden mt-8 shadow-sm border border-[#15171B]/10">
              <Image
                src="/imagery/editorial/studio-culture.webp"
                alt="Avorria Strategic Architecture Consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-mono">
                <span>Direct Partner Discovery</span>
                <span className="text-[#3657E8] font-semibold">Fixed-Fee Sprint Model</span>
              </div>
            </div>
          </motion.div>

          {/* COMPOSITION 02: CREATIVE (5 cols, Tall Cinematic Art Frame) */}
          <motion.div
            style={{ y: y2 }}
            className="lg:col-span-5 bg-[#15171B] text-white rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden group card-arch flex flex-col justify-between min-h-[460px]"
          >
            <div className="space-y-4 z-10 relative">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-semibold">
                  02
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
                  Creative
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight">
                Immersion that commands distinction.
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed font-light">
                Distinctive typography, kinetic animation, and custom 3D environments that elevate brand perception and create competitive separation.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mt-8 shadow-lg border border-white/15">
              <Image
                src="/imagery/editorial/kinetic-mesh.webp"
                alt="Creative Direction and Spatial WebGL Mesh"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/80">
                <span>Spatial 3D & WebGL Shaders</span>
              </div>
            </div>
          </motion.div>

          {/* COMPOSITION 03: ENGINEERING (5 cols, Precision Telemetry & Codeframe) */}
          <motion.div
            style={{ y: y1 }}
            className="lg:col-span-5 bg-[#F7F7F5] rounded-3xl border border-[#15171B]/[0.08] p-8 md:p-12 relative overflow-hidden group card-arch flex flex-col justify-between min-h-[460px]"
          >
            <div className="space-y-4 z-10 relative">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#3657E8]/10 text-[#3657E8] flex items-center justify-center font-mono text-xs font-semibold">
                  03
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3657E8] font-semibold">
                  Engineering
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-[#15171B] font-light tracking-tight">
                Sub-second speed without compromise.
              </h3>
              <p className="font-body text-[#6E7179] text-sm leading-relaxed font-light">
                Next.js 16 App Router, edge runtimes, and compositor-only animations. We eliminate layout shifts, sluggish load times, and technical debt.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mt-8 shadow-sm border border-[#15171B]/10">
              <Image
                src="/imagery/editorial/creative-technologist.webp"
                alt="Senior Engineering and Performance Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-mono">
                <span>100% Senior Pod Execution</span>
                <span className="text-[#3657E8] font-semibold">&lt; 0.8s LCP</span>
              </div>
            </div>
          </motion.div>

          {/* COMPOSITION 04: INTELLIGENCE (7 cols, Connected Systems & Applied AI) */}
          <motion.div
            style={{ y: y2 }}
            className="lg:col-span-7 bg-[#15171B] text-white rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden group card-arch flex flex-col justify-between min-h-[460px]"
          >
            <div className="space-y-4 z-10 relative max-w-xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-semibold">
                  04
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3657E8] font-semibold">
                  Intelligence
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight">
                AI that solves actual business friction.
              </h3>
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed font-light">
                Beyond generic chat interfaces: we build private enterprise RAG pipelines, deterministic autonomous agents, and connected integrations that create genuine operating leverage.
              </p>
            </div>

            <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden mt-8 shadow-lg border border-white/15">
              <Image
                src="/imagery/services/ai-orchestration.jpg"
                alt="Enterprise AI Agent Orchestration and Neural Pipelines"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-mono">
                <span>Zero Model Training on Client Data</span>
                <span className="text-[#3657E8] font-semibold">Deterministic Accuracy</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
