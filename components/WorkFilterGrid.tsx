"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Web Design & Development",
  "Applied AI & Systems",
  "Brand & Digital",
] as const;

// Project-specific editorial attributes in Design System 2.0
const PROJECT_METRICS: Record<
  string,
  {
    badge: string;
    isConcept: boolean;
    highlight: string;
    type: string;
    image: string;
    accentColor: string;
    pillBg: string;
  }
> = {
  "axiom-finance": {
    badge: "Commercial Commission",
    isConcept: false,
    highlight: "0.68s LCP · 100/100 Core Web Vitals",
    type: "Fintech & WebGL Architecture",
    image: "/imagery/projects/axiom-finance.webp",
    accentColor: "#3657E8",
    pillBg: "bg-[#3657E8]/10 text-[#3657E8] border-[#3657E8]/20",
  },
  "nocturne-studio": {
    badge: "Commercial Commission",
    isConcept: false,
    highlight: "60fps Audio-Reactive WebGL",
    type: "Spatial Audio & Motion Design",
    image: "/imagery/projects/nocturne-studio.webp",
    accentColor: "#A78BFA",
    pillBg: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  },
  "vanta-ai": {
    badge: "Commercial Commission",
    isConcept: false,
    highlight: "Sub-140ms Streaming TTFT",
    type: "Autonomous Operations Sandbox",
    image: "/imagery/projects/vanta-ai.webp",
    accentColor: "#10B981",
    pillBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  },
  "bloom-health": {
    badge: "Commercial Commission",
    isConcept: false,
    highlight: "1.24s Global Checkout LCP",
    type: "Headless D2C Commerce",
    image: "/imagery/projects/bloom-health.webp",
    accentColor: "#E77B68",
    pillBg: "bg-[#E77B68]/10 text-[#E77B68] border-[#E77B68]/20",
  },
  "meridian-arc": {
    badge: "Avorria Technical Demonstration",
    isConcept: true,
    highlight: "72% Compressed glTF 3D Stream",
    type: "Spatial Architecture Canvas",
    image: "/imagery/projects/meridian-arc.webp",
    accentColor: "#F59E0B",
    pillBg: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#15171B]/10">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-white font-bold" : "text-[#6E7179] hover:text-[#15171B] bg-white border border-[#15171B]/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="work-filter-pill-2"
                    className="absolute inset-0 rounded-full bg-[#3657E8]"
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

        <div className="flex items-center gap-2 font-mono text-xs text-[#6E7179]">
          <span className="w-2 h-2 rounded-full bg-[#3657E8]" />
          <span>5 Curated Project Showcases</span>
        </div>
      </div>

      {/* Editorial Grid of Filtered Projects with Varied Layouts */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const meta = PROJECT_METRICS[project.slug] ?? {
              badge: "Commercial Commission",
              isConcept: false,
              highlight: "Production Benchmark",
              type: project.category,
              image: project.cover || "/imagery/hero/spatial-monolith.webp",
              accentColor: "#3657E8",
              pillBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
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
                  className="group block rounded-3xl p-6 md:p-8 bg-white border border-[#15171B]/10 hover:border-[#3657E8]/50 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Top Meta Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#F7F7F5] border border-[#15171B]/10 text-[#15171B] font-medium">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#F7F7F5] text-[#6E7179]">
                          {project.year}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${meta.pillBg}`}>
                        {meta.badge}
                      </span>
                    </div>

                    {/* Image / Visual Canvas Showcase */}
                    <div
                      className={`relative ${
                        isFlagship
                          ? "aspect-[16/8] md:aspect-[21/9] min-h-[300px] md:min-h-[440px]"
                          : "aspect-[16/10] min-h-[220px] md:min-h-[280px]"
                      } rounded-2xl bg-[#15171B] border border-[#15171B]/15 overflow-hidden flex flex-col justify-between p-6 md:p-8 mb-6 group`}
                    >
                      {/* Actual Photographic Image */}
                      <Image
                        src={meta.image}
                        alt={`${project.title} photographic showcase`}
                        fill
                        sizes={isFlagship ? "(max-width: 1200px) 100vw, 1400px" : "(max-width: 768px) 100vw, 700px"}
                        className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
                      />

                      {/* Gradient overlay for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/90 via-[#15171B]/30 to-transparent pointer-events-none" />

                      {/* Floating type badge */}
                      <div className="relative z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/90 backdrop-blur-md text-[#15171B] font-bold shadow-sm">
                          {meta.type}
                        </span>
                      </div>

                      {/* Title & Tagline in Foreground */}
                      <div className="relative z-10">
                        <h2
                          className={`font-display font-black ${
                            isFlagship ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                          } text-white tracking-tight`}
                        >
                          {project.title}
                        </h2>
                        <p className="font-body text-xs md:text-sm text-white/80 max-w-xl mt-2 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm text-[#6E7179] leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom strip: Verified Benchmark + Action */}
                  <div className="pt-4 border-t border-[#15171B]/10 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[#15171B] font-semibold flex items-center gap-2">
                      <Sparkles size={13} className="text-[#3657E8]" />
                      {meta.highlight}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-display font-bold text-[#3657E8] group-hover:text-[#2544CC] transition-colors duration-200 shrink-0">
                      <span>EXPLORE CASE STUDY</span>
                      <div className="w-8 h-8 rounded-full bg-[#3657E8] text-white flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#2544CC] transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Credibility Charter Banner */}
      <div className="p-8 rounded-3xl bg-[#15171B] text-white border border-white/10 mt-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#3657E8]/20 border border-[#3657E8]/40 flex items-center justify-center shrink-0 text-[#3657E8]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#3657E8] block mb-1">
                Avorria Credibility &amp; Transparency Standard
              </span>
              <p className="font-body text-sm text-white/80 max-w-3xl leading-relaxed">
                We believe exceptional digital work speaks through verifiable evidence. Commercial commissions cite documented Chrome CrUX and edge observability benchmarks. Exploratory builds are explicitly marked as Avorria Technical Demonstrations.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#15171B] font-display font-bold text-xs hover:bg-[#F7F7F5] transition-colors"
          >
            <span>Commission a Project</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
