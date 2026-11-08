"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Brain,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import MagneticButton from "./MagneticButton";

interface InteractiveService {
  id: string;
  href: string;
  number: string;
  shortTitle: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  proofSlug: string;
  proofTitle: string;
}

const INTERACTIVE_SERVICES: InteractiveService[] = [
  {
    id: "build",
    href: "/services/build",
    number: "01",
    shortTitle: "Website Design & Development",
    title: "Bespoke Digital Platforms & High-Performance Web",
    icon: Globe,
    description:
      "Custom websites and digital platforms built to convert visitors, showcase brand authority, and load instantaneously on any device. We combine cinematic 3D craft with sub-second speeds, headless commerce, and zero compromise on accessibility.",
    tags: [
      "Next.js 16 App Architecture",
      "Sub-Second Global LCP",
      "Spatial 3D & WebGL",
      "Headless Commerce & CMS",
      "WCAG 2.1 AA Compliance",
    ],
    proofSlug: "/work/axiom-finance",
    proofTitle: "Fintech Platform Architecture",
  },
  {
    id: "ai",
    href: "/services/ai",
    number: "02",
    shortTitle: "AI Development & Automation",
    title: "Intelligent AI Systems & Business Automation",
    icon: Brain,
    description:
      "Practical AI solutions that automate processes, connect business knowledge, and create operational leverage. We implement secure RAG pipelines, autonomous task agents, and private vector storage.",
    tags: [
      "Connected Enterprise Knowledge",
      "Multi-Agent Workflow Routing",
      "Private Vector Memory",
      "Deterministic Guardrails",
      "Human-in-the-Loop Controls",
    ],
    proofSlug: "/work/vanta-ai",
    proofTitle: "Enterprise Operations AI",
  },
  {
    id: "systems",
    href: "/services/systems",
    number: "03",
    shortTitle: "Digital Systems & Integrations",
    title: "Connected Enterprise Applications & Edge Workflows",
    icon: ShoppingBag,
    description:
      "Modern API architectures, edge middleware, and real-time data synchronization designed for scale. We connect legacy databases, enterprise software, and cloud platforms with zero data loss.",
    tags: [
      "Edge API Gateways",
      "Real-Time Omnichannel Sync",
      "ERP & Payment Ledger Sync",
      "Sub-50ms Global Response",
      "Zero-Data-Loss Queues",
    ],
    proofSlug: "/work/bloom-health",
    proofTitle: "Headless Commerce Architecture",
  },
  {
    id: "search",
    href: "/services/search",
    number: "04",
    shortTitle: "Technical SEO & Search Architecture",
    title: "Search Architecture & Content Infrastructure",
    icon: Sparkles,
    description:
      "Code-level search optimization engineered directly into production systems. Server-side rendering, schema knowledge graphs, and Core Web Vitals remediation that ensure crawlers understand and rank your assets.",
    tags: [
      "Edge SSR Pre-Rendering",
      "JSON-LD Schema Knowledge Graph",
      "Core Web Vitals Remediation",
      "International Hreflang Routing",
      "Sustainable Organic Authority",
    ],
    proofSlug: "/work/meridian-arc",
    proofTitle: "Architectural Showcase",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService =
    INTERACTIVE_SERVICES[activeIndex] ?? INTERACTIVE_SERVICES[0];
  const ActiveIcon = activeService.icon;

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-12%" });

  return (
    <section ref={sectionRef} className="section-pad border-t border-[#15171B]/[0.08] relative bg-[var(--color-bg)] overflow-hidden">
      {/* Section annotation — 03 */}
      <span className="section-annotation hidden lg:block" aria-hidden="true">
        03 — Capabilities
      </span>

      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header — staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
                03 / Capabilities &amp; Solutions
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.042em] text-[#15171B]">
              Digital systems engineered to<br />
              <span className="text-gradient-silver">grow, streamline &amp; scale.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="font-mono text-xs uppercase tracking-widest text-[#15171B]/80 hover:text-[#3657E8] transition-colors duration-200 flex items-center gap-2 group pb-2"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>

        {/* Interactive 2-Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: 4 Capability Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {INTERACTIVE_SERVICES.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`group relative text-left w-full p-6 md:p-7 rounded-[var(--radius-card)] border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-panel-elevated)] text-[#15171B] border-white/20 shadow-xl"
                      : "bg-[#F7F7F5] text-[#15171B]/70 border-[#15171B]/[0.08] hover:border-white/20 hover:text-[#15171B]"
                  }`}
                >
                  {/* Left accent bar on active */}
                  {isActive && (
                    <motion.div
                      layoutId="active-service-indicator"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[var(--color-lime)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-5 pl-2">
                    <span
                      className={`font-mono text-xs tracking-wider tabular-nums font-semibold ${
                        isActive
                          ? "text-[#3657E8]"
                          : "text-[#6E7179] group-hover:text-[#15171B]/60"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="font-display text-base md:text-lg font-semibold tracking-tight text-[#15171B]">
                      {service.shortTitle}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`transition-all duration-200 ${
                      isActive
                        ? "text-[#3657E8] translate-x-1"
                        : "text-[#6E7179] group-hover:text-[#15171B] group-hover:translate-x-1 opacity-50"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] md:min-h-[480px] p-8 md:p-12 rounded-[var(--radius-card)] bg-[#F7F7F5] border border-[#15171B]/[0.08] overflow-hidden flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full relative z-10"
                >
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[#15171B]/[0.08] flex items-center justify-center">
                        <ActiveIcon
                          size={22}
                          className="text-[#3657E8]"
                        />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E7179] px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[#15171B]/[0.08] font-medium">
                        Practice {activeService.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-[#15171B] mb-4 leading-snug">
                      {activeService.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base text-[#6E7179] leading-relaxed mb-8 max-w-xl">
                      {activeService.description}
                    </p>

                    {/* Tags Pills */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs font-mono text-[#15171B]/80 bg-[var(--color-bg)] border border-[#15171B]/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: EXPLORE SERVICE + SCOPE ENGAGEMENT + CASE STUDY */}
                  <div className="pt-6 border-t border-[#15171B]/[0.08] flex flex-wrap items-center gap-4">
                    <Link
                      href={activeService.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200"
                    >
                      Explore Service
                      <ArrowRight size={13} />
                    </Link>

                    <MagneticButton>
                      <Link
                        href={`/contact?service=${activeService.id}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-[#15171B] font-mono text-xs uppercase tracking-wider hover:border-white transition-colors duration-200"
                      >
                        Scope Engagement
                      </Link>
                    </MagneticButton>

                    <Link
                      href={activeService.proofSlug}
                      data-cursor="view"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-transparent hover:border-white/20 text-[#15171B]/70 hover:text-[#15171B] font-mono text-xs uppercase tracking-wider transition-colors duration-200"
                    >
                      Case Study
                      <ArrowUpRight size={13} className="text-[#6E7179]" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Subdued Watermark */}
              <div
                className="absolute right-4 -bottom-4 font-display font-black text-[clamp(7rem,18vw,14rem)] leading-none text-[#15171B]/[0.02] select-none pointer-events-none tracking-tighter"
                aria-hidden="true"
              >
                {activeService.number}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
