"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

/**
 * CTA — full-bleed lime inversion.
 *
 * After 2,500px of deep obsidian, a sudden full-bleed chartreuse section
 * is the colour punctuation of the entire site. All type inverts to obsidian.
 * This is the single most impactful visual moment on the page.
 */
export default function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-lime)" }}>
      {/* Large typographic arrow anchor — bottom-right depth element */}
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 font-display leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(12rem, 30vw, 28rem)",
          fontWeight: 200,
          letterSpacing: "-0.05em",
          color: "rgba(0,0,0,0.07)",
          lineHeight: 0.85,
          transform: "translate(6%, 12%)",
        }}
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
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#07070A]/50 shrink-0" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#07070A]/60">
            Accepting Select Commissions · Q1 2027
          </span>
        </motion.div>

        {/* Headline — maximum type scale, inverted */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-[-0.048em] text-[#07070A] mb-10 max-w-5xl"
        >
          Architect your next digital flagship.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[#07070A]/60 text-base md:text-lg max-w-xl mb-14 leading-[1.7]"
        >
          We collaborate with ambitious leadership teams across finance, autonomous
          systems, and luxury commerce. Tell us what you are commissioning.
        </motion.p>

        {/* CTAs — obsidian on lime */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#07070A] text-white font-display font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-[#07070A] transition-all duration-200 shadow-lg group"
            >
              Initiate a Partnership Briefing
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </MagneticButton>

          <a
            href="mailto:hello@avorria.com"
            className="font-mono text-xs uppercase tracking-wider text-[#07070A]/50 hover:text-[#07070A] transition-colors duration-200 py-3"
          >
            Direct Partner Desk: hello@avorria.com →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
