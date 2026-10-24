"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Layers, Rocket, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Ignite",
    badge: "48h Prototype",
    timeline: "WEEK 0–1",
    icon: Flame,
    description:
      "Rapid architectural spike, visual direction, and an interactive 48h functional prototype. We align stakeholders and validate performance before writing a single line of production code.",
    deliverables: ["Interactive Proof-of-Concept", "Performance Budget", "Design Sprint"],
  },
  {
    number: "02",
    title: "Build",
    badge: "Senior Sprints",
    timeline: "WEEK 1–6",
    icon: Layers,
    description:
      "High-velocity 2-week engineering sprints executed exclusively by senior staff. Next.js 15 App Router, Three.js shaders, custom CMS architecture, and weekly live preview deployments.",
    deliverables: ["Weekly Staging Links", "100/100 Core Web Vitals", "Zero Junior Delegation"],
  },
  {
    number: "03",
    title: "Amplify",
    badge: "Scale & Retain",
    timeline: "WEEK 6+",
    icon: Rocket,
    description:
      "Global edge deployment, real-time analytics instrumentation, and autonomous AI system handoff. We transition directly into ongoing retainers to compound your advantage.",
    deliverables: ["Global Edge Rollout", "AI Swarm Monitoring", "Ongoing Growth Retainer"],
  },
];

const LIME_STATS = [
  { value: "47+", label: "Flagships Delivered" },
  { value: "100", label: "PageSpeed Index" },
  { value: "£14M+", label: "Client Revenue Added" },
  { value: "94%", label: "Annual Retainer Rate" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* ── Process 3 Cards ── */}
      <div className="section-pad container-px mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
              <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Our Delivery Methodology
              </span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-tight text-white">
              Senior engineering.<br />
              <span className="text-gradient-lime">Zero agency bloat.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-sm">
            We operate in tight, high-tempo sprints. You work directly with founding engineers and principal designers — never account managers.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Giant Number in Corner */}
                <span
                  className="absolute right-6 -top-4 font-display font-extrabold text-7xl md:text-9xl text-white/[0.04] group-hover:text-[var(--color-lime)]/[0.12] transition-colors duration-300 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-lime)]/40 transition-colors duration-200">
                      <Icon size={22} className="text-[var(--color-lime)]" />
                    </div>
                    <span className="font-mono text-xs text-[var(--color-lime)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-lime)]/10 border border-[var(--color-lime)]/20">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-display font-bold text-3xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      {step.badge}
                    </span>
                  </div>

                  <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-6 border-t border-[var(--color-border)] relative z-10 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                    Key Outcomes
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-body text-white/80">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-lime)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 2. Lime Stats Band (Black text on Lime) ── */}
      <div className="bg-[var(--color-lime)] py-12 md:py-16 text-[var(--color-bg)] border-y border-[var(--color-lime)] select-none">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {LIME_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start md:items-center text-left md:text-center space-y-1"
              >
                <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[var(--color-bg)]">
                  {stat.value}
                </span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-bg)]/80 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
