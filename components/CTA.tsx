"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

/**
 * Section 09 — FINAL CONVERSION
 *
 * Exact Brief Specification:
 * Headline: "Have something ambitious in mind?"
 * Supporting copy: "Let's explore what we could build together."
 * CTA: Start a Project.
 *
 * High-impact architectural Cobalt (#3657E8) with pure white typography,
 * oversized typographic arrow depth layer, and direct partner SLA assurance.
 */
export default function FinalConversionCTA() {
  return (
    <section className="relative overflow-hidden bg-[#3657E8] text-white">
      {/* Large typographic arrow anchor */}
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 font-display leading-none select-none pointer-events-none text-white/[0.08] text-[clamp(12rem,32vw,30rem)] font-extralight tracking-[-0.05em] translate-x-[6%] translate-y-[12%]"
      >
        →
      </span>

      <div className="container-px mx-auto max-w-[1440px] py-28 md:py-40 relative z-10">
        {/* Availability eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/80">
            09 / Direct Engagement · Commissions Open
          </span>
        </motion.div>

        {/* Headline — Exact requested text */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.8rem,7vw,7.2rem)] leading-[0.96] tracking-[-0.045em] text-white mb-8 max-w-5xl font-light"
        >
          Have something ambitious in mind?
        </motion.h2>

        {/* Supporting copy — Exact requested text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-white/85 text-xl md:text-3xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          Let&apos;s explore what we could build together.
        </motion.p>

        {/* CTA Button — Exact requested label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-6"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-[#15171B] font-display font-medium text-sm md:text-base hover:bg-[#F7F7F5] transition-all duration-300 shadow-2xl group"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </MagneticButton>

          <span className="font-mono text-xs text-white/70">
            Direct partner response within 24 hours · Mutual NDA signed on request
          </span>
        </motion.div>
      </div>
    </section>
  );
}
