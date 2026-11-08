"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Code2, ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Strategy & Architecture",
    badge: "Commercial Alignment",
    timeline: "WEEKS 01–02",
    icon: Compass,
    description:
      "Comprehensive technical discovery, interactive visual spikes, and clear system architecture. We de-risk core technical decisions and align executive goals before engineering begins.",
    deliverables: [
      "Interactive Architecture Prototype",
      "Performance Budget & Tech Stack Spec",
      "Product Roadmap & Security Blueprint",
    ],
  },
  {
    number: "02",
    title: "Rapid Agile Engineering",
    badge: "Dedicated Senior Pod",
    timeline: "WEEKS 02–08",
    icon: Code2,
    description:
      "Focused two-week delivery cycles executed exclusively by senior engineers and designers. Next.js 16 App Architecture, real-time feedback loops, and weekly live preview deployments.",
    deliverables: [
      "Weekly Staging Preview Deployments",
      "Automated Testing & Regression Gates",
      "Direct Senior Engineering Access",
    ],
  },
  {
    number: "03",
    title: "Launch, Scale & Governance",
    badge: "Long-Term Partnership",
    timeline: "POST-LAUNCH",
    icon: ShieldCheck,
    description:
      "Production rollout across global edge infrastructure, team handover, and structured long-term partnership retainers to continuously expand features and optimize conversion.",
    deliverables: [
      "Global Edge Rollout & DNS Transition",
      "Real-Time Observability & Monitoring",
      "Ongoing Evolution & Support Retainer",
    ],
  },
];

const DELIVERY_BENCHMARKS = [
  { value: "100", label: "Performance Score", detail: "Sub-second LCP benchmarked globally" },
  { value: "100%", label: "Senior Team Execution", detail: "Direct collaboration with principal talent" },
  { value: "0", label: "Agency Bureaucracy", detail: "Lean, transparent 2-week delivery sprints" },
  { value: "24/7", label: "Production Reliability", detail: "Engineered for resilient high-availability" },
];

// Individual stat that count-ups when in view
function StatItem({
  value,
  label,
  detail,
  inView,
}: {
  value: string;
  label: string;
  detail: string;
  inView: boolean;
}) {
  const displayed = useCountUp(value, inView, 1400);
  return (
    <div className="flex flex-col space-y-2 pb-6 sm:pb-0 border-b sm:border-b-0 border-[#15171B]/[0.08] last:border-b-0">
      <span className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[#15171B] tabular-nums">
        {displayed}
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-[#15171B]/90 font-medium">
        {label}
      </span>
      <span className="font-mono text-[11px] text-[#6E7179]">
        {detail}
      </span>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const statsInView = useInView(statsRef, { once: true, margin: "-5%" });

  return (
    <section
      className="border-t border-[#15171B]/[0.08] bg-[var(--color-bg)] relative overflow-hidden"
      ref={ref}
    >
      {/* Section annotation — 06 */}
      <span className="section-annotation hidden lg:block" aria-hidden="true">
        06 — How We Work
      </span>

      {/* ── Process 3 Cards ── */}
      <div className="section-pad container-px mx-auto max-w-[1440px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#15171B]/[0.08]"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
                06 / How We Work &amp; Partnership
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.042em] text-[#15171B]">
              Collaborative delivery with<br />
              <span className="text-gradient-silver">senior engineering leadership.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-[#6E7179] max-w-sm leading-relaxed">
            We work as an integrated senior pod with your team. Direct access to principal designers and engineers, rapid feedback loops, and zero agency bureaucracy.
          </p>
        </motion.div>

        {/* 3 Process Cards — staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + idx * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-card)] bg-[#FFFFFF] border border-[#15171B]/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle corner number */}
                <span
                  className="absolute right-6 top-6 font-mono text-xs font-semibold text-[#6E7179]/50 group-hover:text-[#15171B]/40 transition-colors duration-200"
                  aria-hidden="true"
                >
                  PHASE {step.number}
                </span>

                <div className="relative z-10">
                  {/* Top metadata */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-bg)] border border-[#15171B]/[0.08] flex items-center justify-center group-hover:border-white/20 transition-colors duration-200">
                      <Icon size={20} className="text-[#15171B]/80 group-hover:text-[#3657E8] transition-colors duration-200" />
                    </div>
                    <span className="font-mono text-[11px] text-[#6E7179] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[#15171B]/[0.08]">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-4">
                    <h3 className="font-display font-semibold text-2xl text-[#15171B] mb-1.5 group-hover:text-[#15171B] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#6E7179]">
                      {step.badge}
                    </span>
                  </div>

                  <p className="font-body text-sm text-[#6E7179] leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-6 border-t border-[#15171B]/[0.08] relative z-10 space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E7179] block mb-1">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs font-mono text-[#15171B]/80">
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

      {/* ── Architectural Institutional Metrics Strip — count-up ── */}
      <div ref={statsRef} className="border-y border-[#15171B]/[0.08] bg-[#FFFFFF] py-14 select-none">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {DELIVERY_BENCHMARKS.map((stat, i) => (
              <StatItem
                key={i}
                value={stat.value}
                label={stat.label}
                detail={stat.detail}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
