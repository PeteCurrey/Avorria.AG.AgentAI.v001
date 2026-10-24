"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Code2, ShieldCheck, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Architecture & Discovery",
    badge: "Risk Elimination",
    timeline: "WEEKS 01–02",
    icon: Compass,
    description:
      "Comprehensive technical discovery, visual direction spikes, and an interactive architectural prototype. We de-risk core technical hypotheses and align executive stakeholders before enterprise buildout.",
    deliverables: [
      "Interactive Architectural Spike",
      "Core Web Vitals Performance Budget",
      "Technical Stack & Security Specification",
    ],
  },
  {
    number: "02",
    title: "High-Velocity Engineering",
    badge: "Dedicated Senior Pods",
    timeline: "WEEKS 02–08",
    icon: Code2,
    description:
      "Focused two-week delivery cycles executed exclusively by principal engineers and senior designers. Next.js 15 App Architecture, bespoke WebGL pipelines, and weekly preview deployments.",
    deliverables: [
      "Weekly Staging Environments",
      "Automated CI/CD & Visual Regression Gates",
      "Direct Technical Leadership Access",
    ],
  },
  {
    number: "03",
    title: "Global Scale & Governance",
    badge: "Enterprise SLA",
    timeline: "POST-LAUNCH",
    icon: ShieldCheck,
    description:
      "Multi-region edge deployment, real-time observability instrumentation, and continuous AI model fine-tuning. We transition into structured long-term governance retainers.",
    deliverables: [
      "Global Multi-Region Edge Rollout",
      "Continuous Performance Monitoring",
      "Dedicated Evolution Retainer",
    ],
  },
];

const INSTITUTIONAL_STATS = [
  { value: "47+", label: "Digital Flagships Delivered", detail: "Global enterprise & hyper-growth clients" },
  { value: "100", label: "Core Vitals Perfect Score", detail: "Sub-second LCP benchmarked globally" },
  { value: "£14M+", label: "Client Revenue Generated", detail: "Measurable commercial conversion lift" },
  { value: "94%", label: "Institutional Retainer Rate", detail: "Multi-year client partnerships" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden"
      ref={ref}
    >
      {/* ── Process 3 Cards ── */}
      <div className="section-pad container-px mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[var(--color-border)]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Delivery Methodology
              </span>
            </div>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight text-white">
              Principal engineering.<br />
              <span className="text-gradient-silver">Institutional rigor.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-sm leading-relaxed">
            We assemble compact, senior-only engineering pods. Clients collaborate directly
            with founding engineers and principal designers — zero agency overhead.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle corner number */}
                <span
                  className="absolute right-6 top-6 font-mono text-xs font-semibold text-[var(--color-muted)]/50 group-hover:text-white/40 transition-colors duration-200"
                  aria-hidden="true"
                >
                  PHASE {step.number}
                </span>

                <div className="relative z-10">
                  {/* Top metadata */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-white/20 transition-colors duration-200">
                      <Icon size={20} className="text-white/80 group-hover:text-[var(--color-lime)] transition-colors duration-200" />
                    </div>
                    <span className="font-mono text-[11px] text-[var(--color-muted)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-4">
                    <h3 className="font-display font-semibold text-2xl text-white mb-1.5 group-hover:text-white transition-colors duration-200">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      {step.badge}
                    </span>
                  </div>

                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-6 border-t border-[var(--color-border)] relative z-10 space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs font-mono text-white/80">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-lime)] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 2. Architectural Institutional Metrics Strip ── */}
      <div className="border-y border-[var(--color-border)] bg-[var(--color-panel)] py-14 select-none">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {INSTITUTIONAL_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col space-y-2 pb-6 sm:pb-0 border-b sm:border-b-0 border-[var(--color-border)] last:border-b-0"
              >
                <span className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-white/90 font-medium">
                  {stat.label}
                </span>
                <span className="font-mono text-[11px] text-[var(--color-muted)]">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
