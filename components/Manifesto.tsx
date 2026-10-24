"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Gauge, Layers, Network, ArrowUpRight } from "lucide-react";

// Executive thesis statement
const MANIFESTO_TEXT =
  "Most digital agencies force an unnecessary compromise — visual ambition or engineering rigor. We reject both extremes. Avorria architects digital flagships where spatial immersion, real-time 3D, and applied intelligence converge to establish enduring category leadership.";

const PILLAR_CARDS = [
  {
    icon: Gauge,
    step: "01",
    title: "Performance as Capital",
    badge: "Core Vitals Tier 1",
    tagline: "Sub-second responsiveness",
    description:
      "Every millisecond of latency is a measurable loss of conversion capital. We engineer proprietary Next.js and WebGL architectures to deliver sub-second LCP globally without sacrificing visual richness.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Architectural Immersion",
    badge: "Spatial & 3D Craft",
    tagline: "Experiences that command attention",
    description:
      "Real-time 3D, spatial physics, and cinematic motion designed with mathematical intent. We build tactile digital environments that elevate brand perception into cultural authority.",
  },
  {
    icon: Network,
    step: "03",
    title: "Applied Intelligence",
    badge: "Enterprise AI Practice",
    tagline: "Deterministic automation",
    description:
      "Custom multi-agent networks, domain-trained RAG systems, and autonomous pipeline orchestration. We embed proprietary intelligence into client operations to compound efficiency.",
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
    cleanWord === "spatial" ||
    cleanWord === "intelligence" ||
    cleanWord === "leadership" ||
    cleanWord === "converge";

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity }}
        className={`inline-block transition-colors duration-200 ${
          isKeyTerm
            ? "text-white font-bold underline decoration-[var(--color-lime)]/40 underline-offset-8"
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
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Metadata Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Institutional Thesis
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] hidden sm:inline-block">
            01 / Principles
          </span>
        </div>

        {/* Scroll-Linked Word-by-Word Text */}
        <div ref={containerRef} className="py-8 max-w-5xl mb-24">
          <h2 className="font-display font-semibold text-[clamp(2.2rem,4.8vw,4.6rem)] leading-[1.12] tracking-[-0.03em]">
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

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLAR_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-white/80 group-hover:text-[var(--color-lime)] transition-colors duration-300"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] font-medium">
                      {card.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[var(--color-muted)] mb-2 block font-semibold">
                    {card.step}
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-white mb-2 group-hover:text-white transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] mb-4">
                    {card.tagline}
                  </p>
                  <p className="font-body text-[var(--color-muted)] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)] group-hover:text-white transition-colors duration-200">
                  <span>Architecture Standard</span>
                  <ArrowUpRight
                    size={15}
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
