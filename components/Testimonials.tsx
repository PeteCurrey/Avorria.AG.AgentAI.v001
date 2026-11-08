"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    quote:
      "Avorria didn't just deliver a high-performing digital platform — they fundamentally elevated how our company is perceived in the market. The speed, craft, and architectural precision were evident from sprint one.",
    author: "Managing Director",
    role: "Leadership Team",
    company: "Fintech & Wealth Platform Partner",
    metric: "+340% Onboarding Lift",
  },
  {
    quote:
      "The AI automation system they engineered transformed our operational turnaround. Multi-step workflows that used to take days now execute in minutes with complete data privacy and zero friction.",
    author: "Chief Technology Officer",
    role: "Operations Leadership",
    company: "Enterprise AI & Systems Partner",
    metric: "-74% Overhead Reduction",
  },
  {
    quote:
      "Their combination of design sophistication and engineering rigor is genuinely rare. They solve real commercial challenges without drowning your team in agency bureaucracy.",
    author: "Creative Director",
    role: "Brand & Product",
    company: "Spatial Media & Audio Collective",
    metric: "60fps Continuous Canvas",
  },
  {
    quote:
      "Our digital storefront revenue accelerated significantly within months of launch. The platform converts visitors at an extraordinary rate while delivering a truly bespoke visual experience.",
    author: "VP E-Commerce",
    role: "Commercial Growth",
    company: "High-Growth Wellness Brand",
    metric: "+210% Top-Line GMV Lift",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressKey = useRef(0);

  // Auto-slider 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      progressKey.current += 1;
    }, 6000);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  const prev = () => {
    setCurrent((c) => (c - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    progressKey.current += 1;
  };

  const next = () => {
    setCurrent((c) => (c + 1) % TESTIMONIALS_DATA.length);
    progressKey.current += 1;
  };

  // Keyboard navigation for testimonials slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const t = TESTIMONIALS_DATA[current];

  return (
    <section
      className="section-pad border-t border-[#15171B]/[0.08] bg-[var(--color-panel)] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section annotation — 07 */}
      <span className="section-annotation hidden lg:block" aria-hidden="true">
        07 — Why Avorria
      </span>

      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
              07 / Why Avorria · Standards &amp; Impact
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#3657E8]">
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <span className="ml-2 text-[#15171B] font-medium">5.0 / 5.0</span>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto text-center" data-cursor="drag">
          <Quote size={48} className="text-[#3657E8] mx-auto mb-8 opacity-60" />

          {/* Big Display Quote */}
          <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(1.85rem,4vw,3.4rem)] text-[#15171B] leading-[1.15] tracking-[-0.038em] mb-8"
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Name/Role and Lime Metric Pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12"
            >
              <div>
                <p className="font-display font-medium text-lg text-[#15171B]">{t.author}</p>
                <p className="font-body text-xs md:text-sm text-[#6E7179]">
                  {t.role} · <span className="text-[#15171B]/80">{t.company}</span>
                </p>
              </div>

              {/* Refined Metric Pill */}
              <span className="px-3.5 py-1 rounded-full bg-[var(--color-panel)] border border-[#15171B]/20 text-[#15171B] font-mono text-xs tracking-wider uppercase">
                {t.metric}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev/Next Arrows + 6s Progress Bars */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#15171B]/[0.08] hover:border-[#15171B]/40 flex items-center justify-center text-[#15171B]/80 hover:text-[#15171B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Progress Bars for all 4 items */}
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line react-hooks/refs */}
                {TESTIMONIALS_DATA.map((_, i) => {
                  const isActive = i === current;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setCurrent(i);
                        progressKey.current += 1;
                      }}
                      aria-label={`Jump to testimonial ${i + 1}`}
                      className="relative w-10 md:w-14 h-1 rounded-full bg-[#15171B]/10 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${current}-${progressKey.current}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? undefined : "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                          className="absolute inset-y-0 left-0 bg-[#3657E8]"
                        />
                      )}
                      {!isActive && i < current && (
                        <div className="w-full h-full bg-[#3657E8]/40" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#15171B]/[0.08] hover:border-[#15171B]/40 flex items-center justify-center text-[#15171B]/80 hover:text-[#15171B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <span className="font-mono text-[11px] text-[#6E7179] uppercase tracking-widest">
              0{current + 1} / 0{TESTIMONIALS_DATA.length} · Auto-advancing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
