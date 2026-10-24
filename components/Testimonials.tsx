"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    quote:
      "Avorria didn't just build our site — they rewrote our understanding of what digital can feel like. We won a CSS Design Award within 3 weeks of launch.",
    author: "Mia Harrington",
    role: "Head of Brand",
    company: "Axiom Finance",
    metric: "+340% Onboarding Conversion",
  },
  {
    quote:
      "The AI agent they deployed handles 60% of our inbound ops. We went from 8 FTEs to 3 without losing a single client. Honestly transformative.",
    author: "James Okafor",
    role: "CEO & Co-founder",
    company: "Vanta AI",
    metric: "-74% Operational Overhead",
  },
  {
    quote:
      "I've worked with agencies in London, NYC, and Berlin. Avorria's attention to craft — the micro-interactions, the timing, the feel — is in a different league.",
    author: "Sofia Delacroix",
    role: "Founder & Creative Director",
    company: "Nocturne Studio",
    metric: "Awwwards Site of the Day",
  },
  {
    quote:
      "Our Shopify revenue jumped 210% in 6 months. The site converts, but more importantly it makes people feel something. That's hard to find.",
    author: "Thomas Webb",
    role: "VP Marketing",
    company: "Bloom Health",
    metric: "+210% Top-line GMV Lift",
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
      className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
            <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Client Testimonials & Impact
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-lime)]">
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <Star size={14} className="fill-[var(--color-lime)]" />
            <span className="ml-2 text-white font-bold">5.0 / 5.0</span>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto text-center" data-cursor="drag">
          <Quote size={48} className="text-[var(--color-lime)] mx-auto mb-8 opacity-60" />

          {/* Big Display Quote */}
          <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-[clamp(1.75rem,3.8vw,3.2rem)] text-white leading-[1.18] tracking-tight mb-8"
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
                <p className="font-display font-bold text-lg text-white">{t.author}</p>
                <p className="font-body text-xs md:text-sm text-[var(--color-muted)]">
                  {t.role} · <span className="text-white/80">{t.company}</span>
                </p>
              </div>

              {/* Refined Metric Pill */}
              <span className="px-3.5 py-1 rounded-full bg-[var(--color-panel)] border border-white/20 text-white font-mono text-xs tracking-wider uppercase">
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
                className="w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-white/40 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Progress Bars for all 4 items */}
              <div className="flex items-center gap-2">
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
                      className="relative w-10 md:w-14 h-1 rounded-full bg-white/10 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${current}-${progressKey.current}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? undefined : "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                          className="absolute inset-y-0 left-0 bg-white"
                        />
                      )}
                      {!isActive && i < current && (
                        <div className="w-full h-full bg-white/40" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-white/40 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <span className="font-mono text-[11px] text-[var(--color-muted)] uppercase tracking-widest">
              0{current + 1} / 0{TESTIMONIALS_DATA.length} · Auto-advancing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
