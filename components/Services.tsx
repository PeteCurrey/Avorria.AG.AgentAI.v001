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
    id: "immersive-web",
    number: "01",
    shortTitle: "Spatial Web & Flagships",
    title: "Immersive Web & Spatial 3D Flagships",
    icon: Globe,
    description:
      "High-performance digital flagships engineered with Next.js 15, Three.js, and custom WebGL shaders. We achieve 60fps cinematic fluidity without compromising Core Web Vitals, accessibility, or mobile delivery.",
    tags: [
      "WebGL / Three.js Shaders",
      "Next.js 15 App Architecture",
      "Sub-second Global LCP",
      "Spatial Interaction Design",
      "WCAG 2.1 AA Compliance",
    ],
    proofSlug: "/work/axiom-finance",
    proofTitle: "Axiom Finance Case Study",
  },
  {
    id: "ai-systems",
    number: "02",
    shortTitle: "Applied AI & Agent Networks",
    title: "Autonomous Systems & Applied AI Practice",
    icon: Brain,
    description:
      "Enterprise-grade applied intelligence: domain-fine-tuned models, deterministic RAG pipelines, and autonomous multi-agent networks that orchestrate business workflows with zero human latency.",
    tags: [
      "Multi-Agent Orchestration",
      "Enterprise RAG Architectures",
      "Deterministic Guardrails",
      "Private Vector Stores",
      "Automated Operational Flow",
    ],
    proofSlug: "/work/vanta-ai",
    proofTitle: "Vanta AI Case Study",
  },
  {
    id: "e-commerce",
    number: "03",
    shortTitle: "Headless Digital Commerce",
    title: "High-Performance Headless Commerce",
    icon: ShoppingBag,
    description:
      "Modern headless commerce architectures (Shopify Plus, Medusa, custom microservices) engineered for enterprise velocity. Instant routing, real-time 3D product configurators, and checkouts tuned for maximum conversion.",
    tags: [
      "Headless Storefronts",
      "3D Product Configurators",
      "Shopify Plus Enterprise",
      "Sub-100ms API Response",
      "Global Checkout UX",
    ],
    proofSlug: "/work/bloom-health",
    proofTitle: "Bloom Health Case Study",
  },
  {
    id: "brand-motion-3d",
    number: "04",
    shortTitle: "Brand Systems & Motion",
    title: "Brand Strategy, Design Systems & Motion",
    icon: Sparkles,
    description:
      "Comprehensive visual identity, typographic hierarchies, and motion languages built for digital-first enterprises. From generative 3D brand assets to multi-channel design tokens that scale across global touchpoints.",
    tags: [
      "Enterprise Design Systems",
      "3D Visual Direction",
      "Motion Identity Systems",
      "Typography Engineering",
      "Multi-Channel Tokens",
    ],
    proofSlug: "/work/nocturne-studio",
    proofTitle: "Nocturne Studio Case Study",
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
    <section ref={sectionRef} className="section-pad border-t border-[var(--color-border)] relative bg-[var(--color-bg)] overflow-hidden">
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
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.06] tracking-tight text-white">
              Engineering impact at<br />
              <span className="text-gradient-silver">institutional scale.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-[var(--color-lime)] transition-colors duration-200 flex items-center gap-2 group pb-2"
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
                      ? "bg-[var(--color-panel-elevated)] text-white border-white/20 shadow-xl"
                      : "bg-[var(--color-panel)] text-white/70 border-[var(--color-border)] hover:border-white/20 hover:text-white"
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
                          ? "text-[var(--color-lime)]"
                          : "text-[var(--color-muted)] group-hover:text-white/60"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="font-display text-base md:text-lg font-semibold tracking-tight text-white">
                      {service.shortTitle}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`transition-all duration-200 ${
                      isActive
                        ? "text-[var(--color-lime)] translate-x-1"
                        : "text-[var(--color-muted)] group-hover:text-white group-hover:translate-x-1 opacity-50"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] md:min-h-[480px] p-8 md:p-12 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] overflow-hidden flex flex-col justify-between">
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
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                        <ActiveIcon
                          size={22}
                          className="text-[var(--color-lime)]"
                        />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-muted)] px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] font-medium">
                        Practice {activeService.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4 leading-snug">
                      {activeService.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl">
                      {activeService.description}
                    </p>

                    {/* Tags Pills */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs font-mono text-white/80 bg-[var(--color-bg)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: SCOPE ENGAGEMENT + CASE STUDY */}
                  <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-4">
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-colors duration-200"
                      >
                        Scope Engagement
                        <ArrowRight size={13} />
                      </Link>
                    </MagneticButton>

                    <Link
                      href={activeService.proofSlug}
                      data-cursor="view"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-border)] hover:border-white/30 text-white/90 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors duration-200"
                    >
                      Case Study
                      <ArrowUpRight size={13} className="text-[var(--color-muted)]" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Subdued Watermark */}
              <div
                className="absolute right-4 -bottom-4 font-display font-black text-[clamp(7rem,18vw,14rem)] leading-none text-white/[0.02] select-none pointer-events-none tracking-tighter"
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
