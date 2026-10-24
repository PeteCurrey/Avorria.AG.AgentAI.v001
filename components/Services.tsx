"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Brain, ShoppingBag, Sparkles, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
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
    shortTitle: "Immersive Web",
    title: "Immersive Web & 3D Flagships",
    icon: Globe,
    description:
      "Ultra-high performance web experiences engineered with Next.js 15, Three.js, and custom WebGL shaders. We achieve 60fps cinematic fluidity without compromising on Core Web Vitals or mobile accessibility.",
    tags: [
      "WebGL / Three.js",
      "Next.js 15",
      "GSAP & Lenis",
      "Shader Artistry",
      "Sub-second LCP",
    ],
    proofSlug: "/work/axiom-finance",
    proofTitle: "Axiom Finance Case Study",
  },
  {
    id: "ai-systems",
    number: "02",
    shortTitle: "AI Systems",
    title: "Autonomous AI Systems & Agents",
    icon: Brain,
    description:
      "Enterprise-grade AI engineering: fine-tuned LLMs, domain-trained RAG systems, and autonomous multi-agent networks that orchestrate complex business operations and scale efficiency 24/7.",
    tags: [
      "Agent Networks",
      "Enterprise RAG",
      "Fine-Tuning",
      "Automated Ops",
      "Vector Architectures",
    ],
    proofSlug: "/work/vanta-ai",
    proofTitle: "Vanta AI Case Study",
  },
  {
    id: "e-commerce",
    number: "03",
    shortTitle: "E-Commerce",
    title: "Headless Performance E-Commerce",
    icon: ShoppingBag,
    description:
      "Modern headless storefronts (Shopify Plus, Medusa, custom) engineered for hyper-growth brands. Blazing fast routing, 3D interactive product configurators, and checkouts that drive unmatched conversion rates.",
    tags: [
      "Headless Commerce",
      "3D Configurators",
      "Shopify Plus",
      "Global Checkout",
      "Conversion UX",
    ],
    proofSlug: "/work/bloom-health",
    proofTitle: "Bloom Health Case Study",
  },
  {
    id: "brand-motion-3d",
    number: "04",
    shortTitle: "Brand Motion 3D",
    title: "Brand Strategy, Motion & 3D",
    icon: Sparkles,
    description:
      "Full-spectrum visual identity and motion language tailored for the digital age. From generative 3D brand assets and typography systems to multi-channel design systems that command attention.",
    tags: [
      "Visual Identity",
      "3D Art Direction",
      "Motion Systems",
      "Brand Strategy",
      "Sonic Identity",
    ],
    proofSlug: "/work/nocturne-studio",
    proofTitle: "Nocturne Studio Case Study",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = INTERACTIVE_SERVICES[activeIndex] ?? INTERACTIVE_SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="section-pad border-t border-[var(--color-border)] relative bg-[var(--color-bg)] overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
              <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Our Capabilities
              </span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-tight text-white">
              Engineering impact at<br />
              <span className="text-gradient-lime">every touchpoint.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="font-display text-sm font-semibold text-[var(--color-lime)] hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            Explore all capabilities
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Interactive 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Buttons (01 - 04) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {INTERACTIVE_SERVICES.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`group relative text-left w-full p-6 md:p-8 rounded-[var(--radius-card)] border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-[var(--color-lime)] text-[var(--color-bg)] border-[var(--color-lime)] shadow-[0_0_30px_rgba(214,255,63,0.35)] scale-[1.02]"
                      : "bg-[var(--color-panel)] text-white border-[var(--color-border)] hover:border-[var(--color-lime)]/50 hover:bg-[var(--color-panel)]/80"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-sm tracking-wider tabular-nums font-bold ${
                        isActive ? "text-[var(--color-bg)]" : "text-[var(--color-muted)] group-hover:text-[var(--color-lime)]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`font-display text-lg md:text-xl font-bold tracking-tight ${
                        isActive ? "text-[var(--color-bg)]" : "text-white"
                      }`}
                    >
                      {service.shortTitle}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      isActive
                        ? "text-[var(--color-bg)] translate-x-1"
                        : "text-[var(--color-muted)] group-hover:text-white group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel with AnimatePresence */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] md:min-h-[500px] p-8 md:p-12 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] overflow-hidden flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full relative z-10"
                >
                  {/* Top content */}
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                        <ActiveIcon size={26} className="text-[var(--color-lime)]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
                        Specialization {activeService.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl md:text-4xl text-white mb-4 leading-tight">
                      {activeService.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-base md:text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl">
                      {activeService.description}
                    </p>

                    {/* Tags Pills */}
                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-full text-xs font-body text-white/90 bg-[var(--color-bg)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: GET QUOTE + SEE PROOF */}
                  <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-4">
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-sm hover:bg-white transition-colors duration-200"
                      >
                        GET QUOTE
                        <ArrowRight size={15} />
                      </Link>
                    </MagneticButton>

                    <Link
                      href={activeService.proofSlug}
                      data-cursor="view"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-lime)] text-white hover:text-[var(--color-lime)] font-display font-semibold text-sm transition-colors duration-200"
                    >
                      SEE PROOF
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Giant 01/02/03/04 Watermark */}
              <div
                className="absolute right-4 -bottom-6 font-display font-extrabold text-[clamp(9rem,24vw,17rem)] leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter"
                aria-hidden="true"
              >
                {activeService.number}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
