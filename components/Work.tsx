"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useCardTilt } from "@/hooks/useCardTilt";

// Real photographic asset mapping
const PROJECT_IMAGES: Record<string, string> = {
  "axiom-finance": "/imagery/projects/axiom-finance.webp",
  "nocturne-studio": "/imagery/projects/nocturne-studio.webp",
  "vanta-ai": "/imagery/projects/vanta-ai.webp",
  "bloom-health": "/imagery/projects/bloom-health.webp",
  "meridian-arc": "/imagery/projects/meridian-arc.webp",
};

const PROJECT_STATS: Record<
  string,
  Array<{ value: string; label: string }>
> = {
  "axiom-finance": [
    { value: "+340%", label: "Conversion Lift" },
    { value: "0.7s", label: "LCP Speed" },
    { value: "Green CWV", label: "Core Web Vitals" },
  ],
  "nocturne-studio": [
    { value: "60fps", label: "WebGL Fluidity" },
    { value: "4.2M", label: "Global Reach" },
    { value: "100%", label: "Retina Canvas" },
  ],
  "vanta-ai": [
    { value: "8s", label: "Time-to-Proof" },
    { value: "-74%", label: "Overhead Reduced" },
    { value: "Passing", label: "PageSpeed Core" },
  ],
  "bloom-health": [
    { value: "+210%", label: "Top-Line GMV" },
    { value: "1.4s", label: "Checkout LCP" },
    { value: "98%", label: "Retention Rate" },
  ],
  "meridian-arc": [
    { value: "4K", label: "Spatial 3D Views" },
    { value: "+180%", label: "Inquiries" },
    { value: "60fps", label: "glTF Pipeline" },
  ],
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const tiltRef = useCardTilt(4);
  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const calculateDistance = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollDistance(Math.max(0, trackWidth - viewportWidth + 120));
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={containerRef}
      className="relative h-[320vh] bg-[#F7F7F5] border-b border-[#15171B]/[0.08]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Editorial Section Header */}
        <div className="container-px mx-auto max-w-[1440px] w-full mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
                04 / Selected Work
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] text-[#15171B] leading-[1.02] tracking-[-0.04em]">
              Engineering that drives market authority.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#15171B]/12 text-[#15171B] font-display text-xs uppercase tracking-wider font-medium hover:border-[#3657E8] hover:text-[#3657E8] transition-colors shadow-sm"
          >
            <span>View All 5 Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal Track with Real High-Res Imagery */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-8 pl-[clamp(1.5rem,5.5vw,6rem)] pr-[clamp(1.5rem,5.5vw,6rem)] will-change-transform"
        >
          {projects.map((project, idx) => {
            const stats = PROJECT_STATS[project.slug] ?? [];
            const imgSrc = PROJECT_IMAGES[project.slug] ?? "/imagery/hero/spatial-monolith.webp";

            return (
              <TiltCard
                key={project.slug}
                className="w-[84vw] sm:w-[56vw] lg:w-[42vw] shrink-0 bg-white rounded-2xl border border-[#15171B]/10 overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 card-arch"
              >
                <Link href={`/work/${project.slug}`} className="flex flex-col h-full justify-between">
                  {/* High-Resolution Project Showcase Image */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#E5E5E0] mb-6">
                    <Image
                      src={imgSrc}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/60 via-transparent to-transparent opacity-60" />

                    {/* Metadata Pills */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#15171B] font-medium">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/95 backdrop-blur-md text-[#6E7179]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Arrow */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-medium text-2xl text-[#15171B] group-hover:text-[#3657E8] transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full bg-[#F7F7F5] border border-[#15171B]/10 flex items-center justify-center text-[#15171B] group-hover:bg-[#3657E8] group-hover:text-white transition-all shrink-0">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <p className="font-body text-xs text-[#6E7179] line-clamp-2 leading-relaxed mb-6 font-light">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Stats Strip */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#15171B]/[0.08]">
                    {stats.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <p className="font-display font-semibold text-base text-[#15171B] group-hover:text-[#3657E8] transition-colors">
                          {st.value}
                        </p>
                        <p className="text-[9px] font-mono uppercase tracking-wider text-[#6E7179]">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              </TiltCard>
            );
          })}

          {/* End Card */}
          <TiltCard className="w-[84vw] sm:w-[56vw] lg:w-[32vw] shrink-0 bg-white rounded-2xl border-2 border-dashed border-[#15171B]/15 hover:border-[#3657E8] transition-colors p-8 flex flex-col items-center justify-center text-center group shadow-sm">
            <span className="w-12 h-12 rounded-full bg-[#3657E8]/10 text-[#3657E8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ArrowRight size={20} />
            </span>
            <h3 className="font-display font-medium text-2xl text-[#15171B] mb-3">
              Have a high-stakes release?
            </h3>
            <p className="font-body text-xs text-[#6E7179] max-w-xs mb-6 leading-relaxed font-light">
              We build dedicated teams around senior engineers and designers for focused 3 to 8 week delivery sprints.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3657E8] text-white font-display text-xs uppercase tracking-wider font-medium hover:bg-[#2544CC] transition-colors shadow-md"
            >
              Start Project Inquiry
            </Link>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
