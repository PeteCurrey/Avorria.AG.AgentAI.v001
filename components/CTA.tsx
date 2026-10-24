"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)] relative">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Architectural Monolith Card */}
        <div className="rounded-[2rem] bg-[var(--color-panel)] border border-[var(--color-border)] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle radial illumination */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Institutional Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/90 font-medium">
              Accepting Select Enterprise Commissions · Q1 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-white uppercase mb-8 max-w-4xl mx-auto"
          >
            Architect your next{" "}
            <span className="text-gradient-silver">digital flagship.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-[var(--color-muted)] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            We collaborate with ambitious leadership teams across finance, autonomous systems,
            and luxury commerce. Tell us what you are commissioning.
          </motion.p>

          {/* Call to Action Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-black font-display font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-all duration-200 shadow-lg group"
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
              className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] hover:text-white transition-colors duration-200 py-3"
            >
              Direct Partner Desk: hello@avorria.com →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
