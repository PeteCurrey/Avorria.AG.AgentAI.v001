"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Cpu, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

// Step 1: Build Types
const BUILD_TYPES = [
  { id: "website", name: "Website", base: 14000, desc: "Immersive WebGL flagship" },
  { id: "ecom", name: "Ecom", base: 24000, desc: "Headless Shopify / 3D store" },
  { id: "ai", name: "AI", base: 16000, desc: "Custom LLM & RAG pipeline" },
  { id: "combo", name: "Combo", base: 34000, desc: "Flagship Web + Full AI Swarm" },
];

// Step 2: Complexities
const COMPLEXITIES = [
  { id: "launch", name: "Launch", multiplier: 1.0, weeks: 3, label: "x1 · 3 wks" },
  { id: "growth", name: "Growth", multiplier: 1.6, weeks: 6, label: "x1.6 · 6 wks" },
  { id: "flagship", name: "Flagship", multiplier: 2.4, weeks: 10, label: "x2.4 · 10 wks" },
];

export default function AILab() {
  const [selectedType, setSelectedType] = useState(BUILD_TYPES[0]);
  const [selectedComplexity, setSelectedComplexity] = useState(COMPLEXITIES[0]);

  // Terminal build log lines
  const [logs, setLogs] = useState<string[]>([
    "[09:14:02] INITIALIZING AVORRIA NEURAL CORE...",
    "[09:14:03] RAG PIPELINE CONNECTED TO VECTOR DB (qdrant)",
    "[09:14:04] MULTI-AGENT SWARM ACTIVE ON 4 WORKERS",
    "[09:14:06] SCOPE SELECTOR READY: AWAITING PARAMETERS",
  ]);

  // Round calculated price to nearest £500
  const rawPrice = selectedType.base * selectedComplexity.multiplier;
  const price = Math.round(rawPrice / 500) * 500;

  const handleSelectType = (type: typeof BUILD_TYPES[0]) => {
    setSelectedType(type);
    const time = new Date().toLocaleTimeString("en-GB", { hour12: false });
    setLogs((prev) => [
      ...prev.slice(-7),
      `[${time}] SCOPE: TYPE=${type.name.toUpperCase()} BASE=£${(type.base / 1000).toFixed(0)}k`,
      `[${time}] RECALCULATING TIMELINE: ${selectedComplexity.weeks} WKS`,
    ]);
  };

  const handleSelectComplexity = (complexity: typeof COMPLEXITIES[0]) => {
    setSelectedComplexity(complexity);
    const time = new Date().toLocaleTimeString("en-GB", { hour12: false });
    setLogs((prev) => [
      ...prev.slice(-7),
      `[${time}] SCALE: ${complexity.name.toUpperCase()} (x${complexity.multiplier}, ${complexity.weeks} WEEKS)`,
      `[${time}] EST TOTAL: £${(Math.round((selectedType.base * complexity.multiplier) / 500) * 500).toLocaleString("en-GB")}`,
    ]);
  };

  return (
    <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[var(--color-cyan)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[var(--color-lime)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, 3 Mini Stats & Terminal Log */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cpu size={16} className="text-[var(--color-lime)]" />
                <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-lime)]">
                  Autonomous AI Engineering
                </span>
              </div>
              <h2 className="font-display font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-tight text-white uppercase">
                AI THAT PAYS<br />
                <span className="text-gradient-lime">FOR ITSELF.</span>
              </h2>
              <p className="mt-6 font-body text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-xl">
                We design and deploy autonomous AI systems, domain-fine-tuned models, and intelligent workflows that reduce manual overhead and unlock scalable revenue.
              </p>
            </div>

            {/* 3 Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-[var(--color-border)] py-6">
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-[var(--color-lime)]">
                  -74%
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                  OpEx Overhead
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-white">
                  24/7
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                  Autonomous Ops
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-[var(--color-cyan)]">
                  0s
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                  Human Latency
                </p>
              </div>
            </div>

            {/* Terminal-style Build Log font-mono */}
            <div className="rounded-2xl bg-[#07070c] border border-white/10 p-5 shadow-2xl font-mono text-xs text-white/80 overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] text-[var(--color-muted)]">
                    avorria-scope-engine.sh
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-lime)] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] animate-ping" />
                  LIVE
                </span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {logs.map((log, idx) => (
                  <p key={idx} className="leading-relaxed">
                    <span className="text-[var(--color-lime)]">{">"}</span> {log}
                  </p>
                ))}
                <div className="flex items-center text-[var(--color-muted)]">
                  <span>waiting for input</span>
                  <span className="inline-block w-2 h-3.5 bg-[var(--color-lime)] animate-pulse ml-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Estimator Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 md:p-10 backdrop-blur-2xl bg-white/[0.03] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[var(--color-lime)]" />
                  <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
                    Interactive Scope Estimator
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[var(--color-lime)]/10 text-[var(--color-lime)] border border-[var(--color-lime)]/30">
                  Fixed Pricing SLA
                </span>
              </div>

              {/* Step 1: 4 Build Types */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    Step 01 · Select Build Type
                  </span>
                  <span className="font-mono text-xs text-[var(--color-lime)]">
                    Base: £{(selectedType.base / 1000).toFixed(0)}k
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {BUILD_TYPES.map((type) => {
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleSelectType(type)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                          isSelected
                            ? "bg-[var(--color-lime)] text-[var(--color-bg)] border-[var(--color-lime)] shadow-[0_0_20px_rgba(214,255,63,0.3)]"
                            : "bg-white/[0.02] text-white border-white/10 hover:border-white/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-bold text-base md:text-lg">
                            {type.name}
                          </span>
                          <span
                            className={`font-mono text-xs font-semibold ${
                              isSelected ? "text-[var(--color-bg)]" : "text-[var(--color-muted)]"
                            }`}
                          >
                            £{(type.base / 1000).toFixed(0)}k
                          </span>
                        </div>
                        <p
                          className={`text-[11px] leading-tight ${
                            isSelected ? "text-[var(--color-bg)]/80" : "text-[var(--color-muted)]"
                          }`}
                        >
                          {type.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: 3 Complexities */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    Step 02 · Select Scale & Velocity
                  </span>
                  <span className="font-mono text-xs text-white/80">
                    {selectedComplexity.label}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {COMPLEXITIES.map((complexity) => {
                    const isSelected = selectedComplexity.id === complexity.id;
                    return (
                      <button
                        key={complexity.id}
                        type="button"
                        onClick={() => handleSelectComplexity(complexity)}
                        className={`p-3.5 rounded-2xl border text-center transition-all duration-200 ${
                          isSelected
                            ? "bg-[var(--color-lime)] text-[var(--color-bg)] border-[var(--color-lime)] shadow-[0_0_20px_rgba(214,255,63,0.3)] font-bold"
                            : "bg-white/[0.02] text-white border-white/10 hover:border-white/30"
                        }`}
                      >
                        <p className="font-display text-sm md:text-base font-bold">
                          {complexity.name}
                        </p>
                        <p
                          className={`font-mono text-[10px] mt-0.5 ${
                            isSelected ? "text-[var(--color-bg)]" : "text-[var(--color-muted)]"
                          }`}
                        >
                          {complexity.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Price & Metrics Summary */}
              <div className="pt-6 border-t border-white/10 space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                      Estimated Investment
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight"
                      >
                        £{price.toLocaleString("en-GB")}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-[11px] text-[var(--color-lime)] block">
                      {selectedComplexity.weeks} WEEKS DELIVERY
                    </span>
                    <span className="font-mono text-[11px] text-white/70 block mt-0.5">
                      ROI x4.2 PROJECTED
                    </span>
                  </div>
                </div>

                {/* CTA "LOCK THIS SCOPE" */}
                <MagneticButton className="w-full block">
                  <Link
                    href={`/contact?scope=${selectedType.id}&scale=${selectedComplexity.id}&price=${price}`}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-base hover:bg-white transition-colors duration-200 shadow-[0_0_30px_rgba(214,255,63,0.35)]"
                  >
                    LOCK THIS SCOPE
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>

                <p className="text-center font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                  Guaranteed delivery date · 100% IP ownership · NDA included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
