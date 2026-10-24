"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "Spatial WebGL Experiences",
  "Enterprise Agent Swarms",
  "Next.js 15 Flagships",
  "Headless Commerce",
  "Brand Identity Systems",
  "Real-Time 3D Configurators",
  "High-Throughput RAG",
  "Sub-Second Performance",
];

export default function Marquee() {
  const list = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] select-none bg-[var(--color-bg)]">
      {/* Single Architectural Monospace Stream */}
      <div className="py-5 overflow-hidden flex">
        <div className="animate-marquee-css flex items-center whitespace-nowrap">
          {list.map((item, idx) => (
            <span
              key={`item-${idx}`}
              className="inline-flex items-center gap-8 md:gap-12 px-6 md:px-8 shrink-0"
            >
              <span className="font-display font-medium text-base md:text-xl tracking-wider uppercase text-white/90 hover:text-white transition-colors duration-200">
                {item}
              </span>
              <span
                className="text-[var(--color-lime)] text-xs font-mono"
                aria-hidden="true"
              >
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
