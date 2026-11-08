"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Web Design & Development",
  "Applied AI & Systems",
  "Brand & Digital",
] as const;

// Project-specific editorial attributes
const PROJECT_METRICS: Record<string, { badge: string; highlight: string; type: string; bgGradient: string }> = {
  "axiom-finance": {
    badge: "Commercial Commission",
    highlight: "0.68s LCP · 100/100 Core Web Vitals",
    type: "Fintech & WebGL Experience",
    bgGradient: "from-[#101914] via-[#09110d] to-[#040806]",
  },
  "nocturne-studio": {
    badge: "Commercial Commission",
    highlight: "60fps Audio-Reactive WebGL",
    type: "Spatial Audio & Motion Design",
    bgGradient: "from-[#181124] via-[#0d0914] to-[#050408]",
  },
  "vanta-ai": {
    badge: "Commercial Commission",
    highlight: "Sub-140ms Streaming TTFT",
    type: "Autonomous Operations Sandbox",
    bgGradient: "from-[#161d15] via-[#0b120a] to-[#040704]",
  },
  "bloom-health": {
    badge: "Commercial Commission",
    highlight: "1.24s Global Checkout LCP",
    type: "Headless D2C Commerce",
    bgGradient: "from-[#0e1724] via-[#070d14] to-[#03060a]",
  },
  "meridian-arc": {
    badge: "Avorria Technical Demonstration",
    highlight: "72% Compressed glTF 3D Stream",
    type: "Spatial Architecture Canvas",
    bgGradient: "from-[#1c1b18] via-[#100f0d] to-[#070605]",
  },
};

export default function WorkFilterGrid({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills & Transparency note */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-[var(--color-bg)] font-bold" : "text-[var(--color-muted)] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="work-filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-lime)]"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <span className="font-mono text-xs text-[var(--color-muted)]">
          5 Verified Records &amp; Demonstrations
        </span>
      </div>

      {/* Editorial Grid of Filtered Projects with Varied Layouts */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const meta = PROJECT_METRICS[project.slug] ?? {
              badge: "Verified Record",
              highlight: "Production SLA",
              type: project.category,
              bgGradient: "from-[#131322] via-[#0b0b14] to-[#050508]",
            };

            // Varied editorial spans: 1st is 12-cols (flagship), 2nd is 7-cols, 3rd is 5-cols, 4th is 5-cols, 5th is 7-cols
            let colSpan = "md:col-span-6";
            if (selectedCategory === "All") {
              if (idx === 0) colSpan = "md:col-span-12";
              else if (idx === 1) colSpan = "md:col-span-7";
              else if (idx === 2) colSpan = "md:col-span-5";
              else if (idx === 3) colSpan = "md:col-span-5";
              else if (idx === 4) colSpan = "md:col-span-7";
            }

            const isFlagship = colSpan === "md:col-span-12";

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={colSpan}
              >
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="view"
                  aria-label={`View case study: ${project.title}`}
                  className="group block card-arch p-8 md:p-10 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 shadow-xl relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Top Meta Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 text-[var(--color-muted)]">
                          {project.year}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-lime)]">
                        {meta.badge}
                      </span>
                    </div>

                    {/* Image / Visual Canvas Showcase */}
                    <div
                      className={`relative ${
                        isFlagship
                          ? "aspect-[16/8] md:aspect-[21/9] min-h-[320px] md:min-h-[420px]"
                          : "aspect-[16/10] min-h-[240px] md:min-h-[280px]"
                      } rounded-xl bg-gradient-to-br ${meta.bgGradient} border border-white/5 overflow-hidden flex flex-col justify-between p-6 md:p-8 mb-6 group`}
                      role="img"
                      aria-label={`${project.title} project showcase`}
                    >
                      <div className="flex items-center gap-2 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white/90">
                          {meta.type}
                        </span>
                      </div>

                      <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                        <span
                          className={`font-display font-black ${
                            isFlagship ? "text-4xl md:text-6xl" : "text-2xl md:text-4xl"
                          } text-white tracking-tight block`}
                        >
                          {project.title}
                        </span>
                        <p className="font-body text-xs md:text-sm text-[var(--color-muted)] max-w-xl mt-2 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/[0.03] transition-colors duration-500" />
                    </div>

                    {/* Description */}
                    <p className="font-body text-xs md:text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom strip: Verified Benchmark + Action */}
                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-white/70">
                      {meta.highlight}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-display font-bold text-[var(--color-lime)] group-hover:text-white transition-colors duration-200 shrink-0">
                      <span>CASE STUDY</span>
                      <div className="w-7 h-7 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
