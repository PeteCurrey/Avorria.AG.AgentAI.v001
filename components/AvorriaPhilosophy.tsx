"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import MagneticButton from "./MagneticButton";

const PHILOSOPHY_PILLARS = [
  {
    title: "Commercial Thinking Before Code",
    detail: "We do not write code for its own sake. Every architectural choice must either accelerate revenue, elevate brand value, or reduce operating cost.",
  },
  {
    title: "Performance is a Design Discipline",
    detail: "Sluggish, heavy websites destroy visitor trust. We treat sub-second loading, zero layout shift, and 60fps frame rates as core creative requirements.",
  },
  {
    title: "Applied AI, Not Speculative Noise",
    detail: "We build private, grounded, deterministic artificial intelligence tools that automate actual business workflows without hallucinations or security risks.",
  },
  {
    title: "Senior Craft, Zero Layers",
    detail: "Clients work directly with principal engineers and designers who understand their industry. No account managers, junior handoffs, or unnecessary friction.",
  },
];

export default function AvorriaPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      ref={sectionRef}
      className="section-pad bg-[#FFFFFF] border-b border-[#15171B]/[0.08] relative overflow-hidden"
    >
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Bold Typographic Statement (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E7179]">
                08 / The Avorria Philosophy
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.2rem)] text-[#15171B] leading-[1.0] tracking-[-0.04em] font-light">
              We reject generic templates. <br />
              <span className="text-[#3657E8] font-normal">We engineer lasting distinction.</span>
            </h2>

            <p className="font-body text-[#6E7179] text-base md:text-xl font-light leading-relaxed max-w-xl">
              Most digital agencies assemble off-the-shelf themes or chase superficial design trends. Avorria exists for ambitious leadership teams who demand senior craftsmanship, speed, and real commercial leverage.
            </p>

            <div className="pt-4">
              <MagneticButton>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F7F7F5] border border-[#15171B]/12 text-[#15171B] font-display text-xs uppercase tracking-wider font-medium hover:border-[#3657E8] hover:text-[#3657E8] transition-colors"
                >
                  <span>Read The Full Studio Manifesto</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: 4 Distinct Pillars (6 cols) */}
          <motion.div style={{ y }} className="lg:col-span-6 space-y-6">
            {PHILOSOPHY_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F7F7F5] border border-[#15171B]/[0.08] card-arch hover:border-[#3657E8]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#3657E8]/10 text-[#3657E8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display font-medium text-xl text-[#15171B]">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-[#6E7179] leading-relaxed font-light">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
