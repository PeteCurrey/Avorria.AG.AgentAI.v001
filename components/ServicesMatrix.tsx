"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Brain, Layers, Search, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const DISCIPLINES = [
  {
    id: "build",
    href: "/services/build",
    num: "01",
    icon: Globe,
    title: "Website Design & Development",
    stack: ["Next.js 16", "Three.js WebGL", "Headless Commerce", "Framer Motion", "Sanity CMS"],
    sla: "100/100 Core Web Vitals · Sub-second LCP",
    velocity: "3–6 Weeks Delivery",
    target: "Bespoke digital platforms engineered for performance, brand distinction, and commercial growth.",
  },
  {
    id: "ai",
    href: "/services/ai",
    num: "02",
    icon: Brain,
    title: "AI Development & Automation",
    stack: ["Enterprise RAG", "Multi-Agent Networks", "Private Vector DBs", "Deterministic Guards"],
    sla: "SOC-2 Aligned · Zero Public Training Leakage",
    velocity: "4–8 Weeks Delivery",
    target: "Practical AI solutions that automate processes, connect business knowledge, and create operational leverage.",
  },
  {
    id: "systems",
    href: "/services/systems",
    num: "03",
    icon: Layers,
    title: "Digital Systems & Integrations",
    stack: ["Next.js Edge Workers", "Omnichannel Sync", "Stripe / ERP", "Redis Caching"],
    sla: "Zero-Data-Loss · Sub-50ms Global Edge Response",
    velocity: "4–8 Weeks Delivery",
    target: "Connected applications, integrations, and intelligent workflows that reduce friction and improve operations.",
  },
  {
    id: "search",
    href: "/services/search",
    num: "04",
    icon: Search,
    title: "Technical SEO & Search Architecture",
    stack: ["Next.js 16 Edge SSR", "JSON-LD Schema Graph", "CrUX Telemetry", "Hreflang Routing"],
    sla: "100% Crawl Coverage · Googlebot TTFB < 50ms",
    velocity: "2–4 Weeks Delivery",
    target: "Search architecture, technical optimization, and content infrastructure that earn sustainable organic visibility.",
  },
];

export default function ServicesMatrix() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = DISCIPLINES[activeIdx];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="card-arch p-6 md:p-8 bg-[var(--color-panel)] border border-[var(--color-border)] mb-16 shadow-2xl">
      {/* Header telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[var(--color-lime)]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-medium">
            Core Service Architecture Matrix
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
          Select discipline for stack breakdown
        </span>
      </div>

      {/* 4 Interactive Discipline Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {DISCIPLINES.map((d, idx) => {
          const Icon = d.icon;
          const isSelected = activeIdx === idx;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-[110px] ${
                isSelected
                  ? "bg-white/[0.08] border-[var(--color-lime)] text-white shadow-lg"
                  : "bg-white/[0.02] border-white/5 hover:border-white/15 text-[var(--color-muted)] hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs tracking-wider opacity-60">{d.num}</span>
                <Icon size={16} className={isSelected ? "text-[var(--color-lime)]" : "opacity-60"} />
              </div>
              <div>
                <span className="font-display font-semibold text-sm block leading-tight text-white">
                  {d.title}
                </span>
                <span className="font-mono text-[10px] text-[var(--color-muted)] block mt-0.5">
                  {d.velocity}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Discipline Detail Strip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <p className="font-body text-sm md:text-base text-white/90 leading-relaxed">
              {active.target}
            </p>

            {/* Stack Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] mr-1">
                Engine:
              </span>
              {active.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* SLA Guarantee */}
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-lime)] pt-1">
              <ShieldCheck size={14} />
              <span>SLA: {active.sla}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={active.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200"
            >
              EXPLORE PAGE
              <ArrowRight size={14} />
            </Link>

            <a
              href={`#${active.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors duration-200"
            >
              DELIVERABLES
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
