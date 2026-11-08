"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Compass, Sparkles, Code2, Cpu, ArrowUpRight } from "lucide-react";

const MANIFESTO_TEXT =
  "Avorria combines commercial thinking, high-end creative direction, and senior engineering to build digital flagships and autonomous systems that command category authority.";

const APPROACH_CARDS = [
  {
    icon: Compass,
    step: "01",
    title: "Strategy First",
    tagline: "Commercial clarity before technical execution",
    description:
      "Understanding the underlying business model before writing a line of code. We align digital systems directly with enterprise growth and customer economics.",
    image: "/imagery/editorial/studio-culture.webp",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Creative Direction",
    tagline: "Immersion that commands distinction",
    description:
      "Articulating brands through cinematic motion, spatial WebGL graphics, and refined typography that create memorable competitive separation.",
    image: "/imagery/editorial/kinetic-mesh.webp",
  },
  {
    icon: Code2,
    step: "03",
    title: "High-Fidelity Engineering",
    tagline: "Next.js 16 and sub-second performance",
    description:
      "Delivering rock-solid frontends with sub-second LCP, zero layout shift, and clean headless architectures that never slow down marketing agility.",
    image: "/imagery/editorial/creative-technologist.webp",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Applied Intelligence",
    tagline: "Autonomous systems that drive actual value",
    description:
      "Implementing deterministic multi-agent workflows and private vector knowledge engines that eliminate manual operational bottlenecks.",
    image: "/imagery/projects/vanta-ai.webp",
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
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] mb-[0.1em]">
      <motion.span style={{ opacity }} className="text-[#15171B] font-light">
        {word}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const words = MANIFESTO_TEXT.split(" ");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section
      ref={sectionRef}
      className="section-pad bg-[#F7F7F5] relative overflow-hidden border-b border-[#15171B]/[0.08]"
    >
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8] shrink-0" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
            01 / The Operating Doctrine
          </span>
        </div>

        {/* Word reveal headline */}
        <div className="max-w-5xl mb-24">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.08] tracking-[-0.038em]">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={`word-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </h2>
        </div>

        {/* Asymmetric 4-Pillar Grid with Rich Editorial Imagery & White Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.step}
                className="bg-white rounded-xl border border-[#15171B]/[0.08] p-6 flex flex-col justify-between group hover:border-[#3657E8]/40 transition-all duration-300 card-arch"
              >
                <div>
                  {/* Image banner within the card */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-[#E5E5E0]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono text-[#15171B] uppercase tracking-wider font-medium">
                      {card.step}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-[#3657E8]" />
                    <h3 className="font-display font-medium text-xl text-[#15171B]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-mono text-xs text-[#3657E8] mb-3">
                    {card.tagline}
                  </p>

                  <p className="font-body text-xs text-[#6E7179] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
