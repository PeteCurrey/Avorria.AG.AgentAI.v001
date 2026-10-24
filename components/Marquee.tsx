"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "WebGL Experiences",
  "AI Agents",
  "Next.js",
  "E-Commerce",
  "Brand & Motion",
  "SEO",
  "3D Configurators",
  "Voice AI",
];

export default function Marquee() {
  // Duplicate for seamless 50% translation loop
  const list = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] select-none">
      {/* ── Row 1: Dark Version ── */}
      <div className="bg-[var(--color-bg)] py-5 overflow-hidden flex border-b border-[var(--color-border)]">
        <div className="animate-marquee-css flex items-center whitespace-nowrap">
          {list.map((item, idx) => (
            <span
              key={`dark-${idx}`}
              className="inline-flex items-center gap-6 md:gap-10 px-4 md:px-6 shrink-0"
            >
              <span className="font-display font-bold text-lg md:text-2xl tracking-wider uppercase text-white hover:text-[var(--color-lime)] transition-colors duration-200">
                {item}
              </span>
              <span
                className="text-[var(--color-lime)] text-lg md:text-xl font-sans"
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Row 2: Lime Version ── */}
      <div className="bg-[var(--color-lime)] py-4 overflow-hidden flex">
        <div className="animate-marquee-css-reverse flex items-center whitespace-nowrap">
          {list.map((item, idx) => (
            <span
              key={`lime-${idx}`}
              className="inline-flex items-center gap-6 md:gap-10 px-4 md:px-6 shrink-0"
            >
              <span className="font-display font-extrabold text-lg md:text-2xl tracking-wider uppercase text-[var(--color-bg)]">
                {item}
              </span>
              <span
                className="text-[var(--color-bg)]/40 text-lg md:text-xl font-sans"
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
