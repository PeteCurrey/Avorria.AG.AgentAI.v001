"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Box, Workflow, Gauge } from "lucide-react";
import MagneticButton from "./MagneticButton";

const LAB_PREVIEWS = [
  {
    num: "01",
    id: "spatial-3d",
    title: "Spatial 3D & WebGL Canvas",
    category: "Real-Time Computer Graphics",
    description: "Interactive 3D geometry with dynamic material switching, physical lighting, and 60fps compositor performance.",
    icon: Box,
    href: "/lab#spatial",
    image: "/imagery/hero/spatial-monolith.webp",
  },
  {
    num: "02",
    id: "ai-workflow",
    title: "Simulated AI Workflow Engine",
    category: "Applied Multi-Agent Orchestration",
    description: "Step-by-step trace of autonomous business processes with human-in-the-loop review gates and vector retrieval.",
    icon: Workflow,
    href: "/lab#ai",
    image: "/imagery/services/ai-orchestration.jpg",
  },
  {
    num: "03",
    id: "telemetry",
    title: "Live Hardware & Device Telemetry",
    category: "Performance Budgeting",
    description: "Real-time browser capability inspection demonstrating how Avorria dynamically adapts rendering for sub-second speed.",
    icon: Gauge,
    href: "/lab#performance",
    image: "/imagery/editorial/creative-technologist.webp",
  },
];

export default function InteractiveLabPreview() {
  return (
    <section className="section-pad bg-[#FFFFFF] border-b border-[#15171B]/[0.08] relative overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
                06 / The Interactive Lab
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] text-[#15171B] leading-[1.02] tracking-[-0.04em] font-light">
              Experience the capability. <br />
              <span className="text-[#3657E8] font-normal">Before commissioning the work.</span>
            </h2>
            <p className="font-body text-[#6E7179] text-base md:text-lg font-light leading-relaxed">
              We built our digital capability showroom to demonstrate technical proficiency directly in the browser—not through static slide decks.
            </p>
          </div>

          <MagneticButton>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#15171B] text-white font-display text-xs uppercase tracking-wider font-medium hover:bg-[#3657E8] transition-colors shadow-md group"
            >
              <span>Enter The Interactive Lab</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>

        {/* 3 Compelling Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAB_PREVIEWS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="bg-[#F7F7F5] rounded-3xl border border-[#15171B]/[0.08] p-8 flex flex-col justify-between group hover:border-[#3657E8]/50 hover:shadow-xl transition-all duration-300 card-arch min-h-[440px]"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#E5E5E0] border border-[#15171B]/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171B]/60 via-transparent to-transparent opacity-50" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] font-mono text-[#15171B] uppercase tracking-wider font-semibold">
                      Sandbox {item.num}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-[#3657E8]" />
                    <span className="font-mono text-xs text-[#3657E8] uppercase tracking-wider font-medium">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-2xl text-[#15171B] mb-3 group-hover:text-[#3657E8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs text-[#6E7179] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#15171B]/[0.08] flex items-center justify-between text-xs font-mono text-[#15171B]">
                  <span>Launch Experience</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#15171B]/10 flex items-center justify-center group-hover:bg-[#3657E8] group-hover:text-white transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
