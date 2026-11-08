"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

/**
 * CTA — High-Impact Cobalt Section
 *
 * Replaces the old green background with Cobalt (#3657E8).
 * Premium architectural typography with pure white text and an understated
 * white consultation initiation button.
 */
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#3657E8] text-white">
      {/* Large typographic arrow anchor */}
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 font-display leading-none select-none pointer-events-none text-white/[0.08] text-[clamp(12rem,30vw,28rem)] font-extralight tracking-[-0.05em] translate-x-[6%] translate-y-[12%]"
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
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/80">
            07 / Direct Engagement · Q1 2027 Commissioning Schedule
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.96] tracking-[-0.045em] text-white mb-10 max-w-5xl font-light uppercase"
        >
          Turn ambitious vision into exceptional digital reality.
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-white/80 text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          We partner with founders, executive teams, and creative directors who refuse to accept generic digital experiences. Senior pod access from discovery to deployment.
        </motion.p>

        {/* Action Button */}
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
              className="inline-flex items-center gap-3 px-9 py-5 rounded-full bg-white text-[#15171B] font-display font-medium text-sm md:text-base hover:bg-[#F7F7F5] transition-all duration-300 shadow-xl group"
            >
              <span>Initiate Project Commission</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </MagneticButton>

          <span className="font-mono text-xs text-white/70">
            Direct response within 24 hours · NDA signed on request
          </span>
        </motion.div>
      </div>
    </section>
  );
}
