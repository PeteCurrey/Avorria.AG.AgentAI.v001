"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

// Stats metadata for selected work items
const PROJECT_STATS: Record<
  string,
  Array<{ value: string; label: string }>
> = {
  "axiom-finance": [
    { value: "+340%", label: "Conversion" },
    { value: "0.7s", label: "LCP Speed" },
    { value: "CSSDA", label: "Award Winner" },
  ],
  "nocturne-studio": [
    { value: "60fps", label: "WebGL Engine" },
    { value: "4.2M", label: "Impressions" },
    { value: "Awwwards", label: "Site of the Day" },
  ],
  "vanta-ai": [
    { value: "8s", label: "Time-to-Value" },
    { value: "-74%", label: "OpEx Cost" },
    { value: "100/100", label: "Lighthouse" },
  ],
  "bloom-health": [
    { value: "+210%", label: "Shopify Rev" },
    { value: "1.4s", label: "Global Checkout" },
    { value: "98%", label: "Satisfaction" },
  ],
  "meridian-arc": [
    { value: "4K", label: "3D Configurator" },
    { value: "+180%", label: "Qualified Leads" },
    { value: "FWA", label: "FWA of the Day" },
  ],
};

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked horizontal transform: 4% to -42%
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-42%"]);

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-[var(--color-bg)]">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-[var(--color-border)]">
        {/* Section Header */}
        <div className="container-px mx-auto max-w-[1440px] w-full mb-8 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
                <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Selected Work
                </span>
              </div>
              <h2 className="font-display font-semibold text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight text-white">
                Engineered for <span className="text-gradient-silver">category leadership.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[var(--color-muted)]">
              <span>Scroll to navigate case studies</span>
              <span className="text-white">→</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="w-full overflow-hidden" data-cursor="drag">
          <motion.div
            style={{ x }}
            className="flex gap-8 items-stretch will-change-transform pl-4 md:pl-12"
          >
            {projects.map((project) => {
              const stats = PROJECT_STATS[project.slug] || [
                { value: "100%", label: "Performance" },
                { value: "Next.js", label: "Architecture" },
                { value: "2025", label: "Delivered" },
              ];

              return (
                <div
                  key={project.slug}
                  className="w-[82vw] sm:w-[50vw] lg:w-[38vw] shrink-0 rounded-3xl p-6 md:p-8 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor="view"
                    aria-label={`View ${project.title} case study`}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      {/* Image Showcase */}
                      <div className="h-[340px] rounded-2xl overflow-hidden relative mb-6 bg-gradient-to-br from-[#12121B] via-[#0C0C12] to-[#07070A] border border-white/5">
                        {/* Hover Zoom Visual */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-out group-hover:scale-105">
                          <span className="font-display font-semibold text-2xl md:text-3xl text-white/30 uppercase tracking-widest text-center select-none">
                            {project.title}
                          </span>
                          <span className="mt-2 text-xs font-mono tracking-widest text-white/50">
                            {project.category}
                          </span>
                        </div>

                        {/* Category + Year Pills */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                            {project.year}
                          </span>
                        </div>

                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-panel)] via-transparent to-transparent opacity-80" />
                      </div>

                      {/* Title + Luxury Arrow */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white group-hover:text-white transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-[var(--color-muted)] text-sm mt-1 line-clamp-1">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Architectural Circular Arrow */}
                        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white group-hover:bg-white group-hover:text-black group-hover:border-white flex items-center justify-center shrink-0 transition-all duration-300">
                          <ArrowUpRight
                            size={18}
                            className="group-hover:rotate-45 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stats Strip (3 columns) */}
                    <div className="grid grid-cols-3 gap-3 pt-5 mt-4 border-t border-[var(--color-border)]">
                      {stats.map((st, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <p className="font-display font-bold text-base md:text-lg text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                            {st.value}
                          </p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-muted)]">
                            {st.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* End Card: VIEW ALL WORK dashed card */}
            <div className="w-[82vw] sm:w-[50vw] lg:w-[38vw] shrink-0 rounded-3xl border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-lime)] bg-[var(--color-panel)]/40 hover:bg-[var(--color-panel)] transition-all duration-300 flex flex-col items-center justify-center p-12 text-center group shadow-xl">
              <Link
                href="/work"
                data-cursor="view"
                aria-label="View all portfolio projects"
                className="flex flex-col items-center justify-center gap-6"
              >
                <div className="w-20 h-20 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-lime)] flex items-center justify-center group-hover:bg-[var(--color-lime)] text-white group-hover:text-[var(--color-bg)] transition-all duration-300 shadow-[0_0_25px_rgba(214,255,63,0.2)]">
                  <ArrowRight
                    size={28}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] mb-2 block">
                    Portfolio Archive
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                    VIEW ALL WORK
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[var(--color-muted)] mt-2 max-w-xs">
                    Explore all 47+ shipped digital flagships, WebGL experiences and AI platforms.
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
