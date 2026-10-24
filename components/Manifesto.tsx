"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Zap, Eye, Brain, ArrowUpRight } from "lucide-react";

// Manifesto statement
const MANIFESTO_TEXT =
  "Most agencies make you choose — beautiful or fast. We reject the compromise. We engineer digital flagships where cinematic immersion, real-time 3D, and obsessive performance converge to make your brand #1.";

const PILLAR_CARDS = [
  {
    icon: Zap,
    step: "01",
    title: "Performance-first",
    badge: "100/100 Vitals",
    tagline: "Speed is the brand",
    description:
      "Sub-second load times, sub-50ms interaction latency, and zero bloat. Every asset, script, and WebGL shader is performance-budgeted to convert on any connection.",
  },
  {
    icon: Eye,
    step: "02",
    title: "Immersion with intent",
    badge: "Awwwards Level",
    tagline: "Experiences that linger",
    description:
      "Real-time 3D, tactile physics, and cinematic motion designed to evoke emotion. We build flagships that turn passive scrollers into passionate advocates.",
  },
  {
    icon: Brain,
    step: "03",
    title: "AI that earns",
    badge: "Autonomous Ops",
    tagline: "Intelligence deployed",
    description:
      "Enterprise RAG pipelines, fine-tuned agent networks, and automated intelligence. We architect AI systems that actively generate revenue and streamline ops.",
  },
];

// Single word component connected to scroll progress
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  // Clean word for highlight detection
  const cleanWord = word.replace(/[^a-zA-Z0-9#]/g, "").toLowerCase();
  const isHighlighted =
    cleanWord === "cinematic" || cleanWord === "3d" || cleanWord === "1" || cleanWord === "#1";

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity }}
        className={`inline-block transition-colors duration-200 ${
          isHighlighted
            ? "text-[var(--color-lime)] font-extrabold drop-shadow-[0_0_20px_rgba(214,255,63,0.3)]"
            : "text-white"
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll target start 0.85 end 0.45 as specified
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
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Our Manifesto & Ethos
          </span>
        </div>

        {/* Scroll-Linked Word-by-Word Text */}
        <div ref={containerRef} className="py-6 max-w-5xl mb-28">
          <h2 className="font-display font-bold text-[clamp(2.2rem,5.5vw,5.2rem)] leading-[1.08] tracking-[-0.035em]">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLAR_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-lime)]/40 transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-[var(--color-lime)] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] group-hover:text-white transition-colors duration-200">
                      {card.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[var(--color-muted)] mb-2 block">
                    {card.step}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
                    {card.tagline}
                  </p>
                  <p className="font-body text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted)] group-hover:text-white transition-colors duration-200">
                  <span className="font-body">Standard SLA</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--color-lime)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
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
