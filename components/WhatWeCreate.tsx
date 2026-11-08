"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe, Brain, Layers, Search } from "lucide-react";
import MagneticButton from "./MagneticButton";

const CORE_CAPABILITIES = [
  {
    num: "01",
    id: "build",
    href: "/services/build",
    title: "Website Design & Development",
    subtitle: "High-Performance Digital Flagships",
    description:
      "Bespoke web platforms built to convert visitors, showcase brand authority, and load instantaneously on every device. We combine cinematic 3D craft with sub-second speeds, headless architecture, and zero compromise on accessibility.",
    image: "/imagery/services/web-dev-flagship.jpg",
    tags: ["Next.js 16", "Three.js WebGL", "Headless CMS", "Sub-Second LCP", "WCAG 2.2 AA"],
    investment: "From £14,000 / $18,000",
    timeline: "3–6 Weeks",
    isReversed: false,
  },
  {
    num: "02",
    id: "ai",
    href: "/services/ai",
    title: "AI Development & Business Automation",
    subtitle: "Applied Multi-Agent Systems",
    description:
      "Practical AI solutions that automate workflows, connect fragmented corporate knowledge, and create operational leverage. Private enterprise RAG pipelines, deterministic agent routing, and strict zero-leakage security.",
    image: "/imagery/services/ai-orchestration.jpg",
    tags: ["Private Enterprise RAG", "Multi-Agent Routing", "Deterministic Workflows", "Vector Sharding"],
    investment: "From £16,000 / $20,000",
    timeline: "3–8 Weeks",
    isReversed: true,
  },
  {
    num: "03",
    id: "systems",
    href: "/services/systems",
    title: "Digital Systems & Integrations",
    subtitle: "Connected Enterprise Workflows",
    description:
      "Connected applications, unified APIs, and intelligent data pipelines that eliminate organizational drag. We modernize legacy technology and link mission-critical systems into seamless real-time workflows.",
    image: "/imagery/editorial/creative-technologist.webp",
    tags: ["Unified API Architecture", "Headless Commerce Sync", "Edge Middleware", "High-Throughput ETL"],
    investment: "From £12,000 / $15,000",
    timeline: "2–6 Weeks",
    isReversed: false,
  },
  {
    num: "04",
    id: "search",
    href: "/services/search",
    title: "Technical SEO & Search Architecture",
    subtitle: "Sustainable Organic Discoverability",
    description:
      "Search architecture, technical optimization, and structured entity graphs that help ambitious businesses earn sustainable organic dominance. Server-side rendering, schema graphs, and Core Web Vitals engineering.",
    image: "/imagery/brand/spatial-audio-motion.jpg",
    tags: ["Schema.org Entity Graphs", "Core Web Vitals Engineering", "Indexability Architecture", "SSR Infrastructure"],
    investment: "From £8,000 / $10,000",
    timeline: "2–4 Weeks",
    isReversed: true,
  },
];

export default function WhatWeCreate() {
  return (
    <section className="section-pad bg-[#F7F7F5] border-b border-[#15171B]/[0.08] relative overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
              03 / What We Create
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] text-[#15171B] leading-[1.02] tracking-[-0.04em] font-light">
            Commercial capabilities. <br />
            <span className="text-[#3657E8] font-normal">Engineered for measurable impact.</span>
          </h2>
          <p className="font-body text-[#6E7179] text-base md:text-lg font-light leading-relaxed">
            Each capability is executed as a dedicated engineering sprint with locked milestones, senior talent, and guaranteed delivery SLAs.
          </p>
        </div>

        {/* Alternating Showcase Cards */}
        <div className="space-y-16">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className={`bg-white rounded-3xl border border-[#15171B]/[0.08] p-8 md:p-14 shadow-sm hover:shadow-xl transition-all duration-300 card-arch grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                cap.isReversed ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text & Specs Column (5 cols) */}
              <div className={`space-y-6 ${cap.isReversed ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#3657E8] font-semibold tracking-widest uppercase">
                    Capability {cap.num}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#15171B]/20" />
                  <span className="font-mono text-xs text-[#6E7179]">{cap.timeline}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl md:text-4xl text-[#15171B] font-light tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="font-mono text-xs text-[#3657E8] font-medium tracking-wide">
                    {cap.subtitle}
                  </p>
                </div>

                <p className="font-body text-[#6E7179] text-sm md:text-base leading-relaxed font-light">
                  {cap.description}
                </p>

                {/* Capability tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#15171B]/[0.08] text-[11px] font-mono text-[#15171B]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Investment & Route Link */}
                <div className="pt-6 border-t border-[#15171B]/[0.08] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E7179] block">
                      Senior Sprint Pricing
                    </span>
                    <span className="font-display font-medium text-sm text-[#15171B]">
                      {cap.investment}
                    </span>
                  </div>

                  <MagneticButton>
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15171B] text-white font-display text-xs uppercase tracking-wider hover:bg-[#3657E8] transition-colors group shadow-sm"
                    >
                      <span>Explore Capability</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              {/* Showcase Imagery Column (7 cols) */}
              <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border border-[#15171B]/10 group ${
                cap.isReversed ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-7"
              }`}>
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/60 via-transparent to-transparent opacity-50" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#15171B]/10 text-xs font-mono text-[#15171B] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
                  <span>Production Ready Execution</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
