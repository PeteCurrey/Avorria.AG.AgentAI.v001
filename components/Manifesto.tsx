"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Compass, Sparkles, Code2, Cpu, ArrowUpRight } from "lucide-react";

// The Strategic Foundation Statement
const MANIFESTO_TEXT =
  "Avorria is a digital development and applied intelligence agency that designs, engineers and implements technology to help businesses grow, operate more efficiently and compete more effectively.";

const APPROACH_CARDS = [
  {
    icon: Compass,
    step: "01",
    title: "Strategy",
    badge: "Commercial Focus",
    tagline: "Problem first, stack second",
    description:
      "Understanding the business problem before selecting technology. We align architectural decisions directly with commercial growth, customer acquisition, and operational economics.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Creative",
    badge: "Distinctive Craft",
    tagline: "Immersion that commands attention",
    description:
      "Designing distinctive, tactile digital experiences. We create refined visual identities, spatial WebGL interactions, and motion languages that elevate brand authority.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Engineering",
    badge: "Sub-Second Velocity",
    tagline: "Scalable digital products",
    description:
      "Building robust, high-performance web applications with Next.js 16 and TypeScript. Sub-second global load times, zero-latency transitions, and 100/100 Core Web Vitals.",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Intelligence",
    badge: "Applied Systems",
    tagline: "Practical business automation",
    description:
      "Implementing AI, automated workflows, and connected data systems that deliver measurable business value, eliminating operational drag and empowering teams.",
  },
];

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  const cleanWord = word.replace(/[^a-zA-Z0-9#]/g, "").toLowerCase();
  const isKeyTerm =
    cleanWord === "development" ||
    cleanWord === "intelligence" ||
    cleanWord === "grow" ||
    cleanWord === "efficiently" ||
    cleanWord === "compete";

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity }}
        className={`inline-block transition-colors duration-200 ${
          isKeyTerm
            ? "text-white font-bold underline decoration-[var(--color-lime)]/50 underline-offset-8"
            : "text-white/90"
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = MANIFESTO_TEXT.split(" ");

  return (
    <section
      id="manifesto"
      className="section-pad border-t border-[var(--color-border)] relative bg-[var(--color-bg)]"
    >
      {/* Section annotation — 01 */}
      <span className="section-annotation hidden lg:block" aria-hidden="true">
        01 — Introduction
      </span>

      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Metadata Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              01 / Introduction &amp; Positioning
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] hidden sm:inline-block">
            Who We Are
          </span>
        </div>

        {/* Scroll-Linked Word-by-Word Text */}
        <div ref={containerRef} className="py-8 max-w-5xl mb-20">
          <h2 className="font-display text-[clamp(2.4rem,5.2vw,5.6rem)] leading-[1.08] tracking-[-0.042em]">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = Math.min(1, start + (1 / words.length) * 1.5);
              return (
                <Word
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </h2>
        </div>

        {/* ── Sub-header for 02 — Our Approach ───────────────────────────── */}
        <div className="pt-10 pb-8 mb-10 border-t border-[var(--color-border)] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                02 / Our Approach
              </span>
            </div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-white">
              The Four Interconnected Disciplines
            </h3>
          </div>
          <p className="font-body text-xs md:text-sm text-[var(--color-muted)] max-w-md leading-relaxed">
            Our differentiator is uniting commercial strategy, immersive creative,
            rigorous engineering, and applied intelligence under a single accountable team.
          </p>
        </div>

        {/* 4 Approach Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-7 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                      <Icon
                        size={18}
                        className="text-white/80 group-hover:text-[var(--color-lime)] transition-colors duration-300"
                      />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] font-medium">
                      {card.badge}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-[var(--color-muted)] mb-1.5 block font-semibold">
                    {card.step}
                  </span>
                  <h4 className="font-display font-semibold text-xl text-white mb-1.5 group-hover:text-white transition-colors duration-200">
                    {card.title}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-lime)] mb-3">
                    {card.tagline}
                  </p>
                  <p className="font-body text-[var(--color-muted)] text-xs md:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] font-mono text-[var(--color-muted)] group-hover:text-white transition-colors duration-200">
                  <span>Core Discipline</span>
                  <ArrowUpRight
                    size={13}
                    className="text-[var(--color-muted)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
