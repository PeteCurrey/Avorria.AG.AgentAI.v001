"use client";

import React from "react";
import { Compass, Lightbulb, Sparkles, Code2, Rocket, RefreshCw } from "lucide-react";

const DELIVERY_PHASES = [
  {
    step: "01",
    title: "Discovery",
    tagline: "Commercial Diagnostics",
    description: "Deep dive into business objectives, technical constraints, and user economics before selecting tools.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Strategy",
    tagline: "Architecture Blueprint",
    description: "De-risking core systems, establishing performance budgets, and locking sprint milestone scopes.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Creative Direction",
    tagline: "Distinction & Immersion",
    description: "Bespoke typographic systems, 3D spatial graphics, and kinetic interfaces that establish market authority.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Engineering",
    tagline: "Senior Sprint Execution",
    description: "Next.js 16 App Router, edge functions, and compositor-only animations with weekly preview staging links.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Deployment",
    tagline: "Global Edge Rollout",
    description: "Zero-downtime DNS transition, edge cache warm-up, and strict automated accessibility regression gates.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Evolution",
    tagline: "Structured Partnership",
    description: "Continuous CRO, feature expansion, and model performance monitoring on a dedicated senior retainer.",
    icon: RefreshCw,
  },
];

export default function HowWeWork() {
  return (
    <section className="section-pad bg-[#F7F7F5] border-b border-[#15171B]/[0.08] relative overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
              07 / How We Work
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] text-[#15171B] leading-[1.02] tracking-[-0.04em] font-light">
            Six disciplined stages. <br />
            <span className="text-[#3657E8] font-normal">Zero agency bureaucracy.</span>
          </h2>
          <p className="font-body text-[#6E7179] text-base md:text-lg font-light leading-relaxed">
            Every engagement operates in focused two-week delivery cycles executed exclusively by senior engineers and designers.
          </p>
        </div>

        {/* 6-Stage Horizontal Delivery Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERY_PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.step}
                className="bg-white rounded-3xl border border-[#15171B]/[0.08] p-8 flex flex-col justify-between group hover:border-[#3657E8]/40 hover:shadow-lg transition-all duration-300 card-arch min-h-[260px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-9 h-9 rounded-full bg-[#3657E8]/10 text-[#3657E8] font-mono text-xs font-semibold flex items-center justify-center">
                      {p.step}
                    </span>
                    <Icon size={18} className="text-[#6E7179] group-hover:text-[#3657E8] transition-colors" />
                  </div>

                  <h3 className="font-display font-medium text-2xl text-[#15171B] mb-1">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-[#3657E8] font-medium block mb-3">
                    {p.tagline}
                  </span>

                  <p className="font-body text-xs text-[#6E7179] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Guarantee Strip */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-[#15171B]/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display font-bold text-3xl text-[#15171B]">100%</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#6E7179] mt-1">Senior Talent Only</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl text-[#3657E8]">&lt; 0.8s</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#6E7179] mt-1">Verified LCP</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl text-[#15171B]">24h</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#6E7179] mt-1">Direct Partner SLA</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl text-[#3657E8]">Fixed</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#6E7179] mt-1">Guaranteed Sprints</p>
          </div>
        </div>
      </div>
    </section>
  );
}
