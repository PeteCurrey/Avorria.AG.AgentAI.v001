"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)] relative">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Gradient Border Wrapper */}
        <div className="p-[1.5px] rounded-[2.5rem] bg-gradient-to-r from-[var(--color-lime)] via-[var(--color-violet)] to-[var(--color-cyan)] shadow-[0_0_80px_rgba(214,255,63,0.12)]">
          {/* Black Inner Card */}
          <div className="rounded-[2.42rem] bg-black p-12 md:p-24 text-center relative overflow-hidden">
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,255,63,0.06)_0%,transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/90 font-medium">
                Accepting 2 New Engagements · Q1 2027
              </span>
            </motion.div>

            {/* H2: LET'S MAKE THE INTERNET JEALOUS */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-tight text-white uppercase mb-8 max-w-5xl mx-auto"
            >
              LET&apos;S MAKE THE INTERNET{" "}
              <span className="text-[var(--color-lime)] drop-shadow-[0_0_35px_rgba(214,255,63,0.4)]">
                JEALOUS.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[var(--color-muted)] text-base md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
            >
              From immersive 60fps WebGL flagships to autonomous multi-agent infrastructure. Tell us what you&apos;re building.
            </motion.p>

            {/* Magnetic Lime Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3.5 px-10 py-5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-base md:text-lg hover:bg-white transition-all duration-200 shadow-[0_0_35px_rgba(214,255,63,0.4)] group"
                >
                  START A CONVERSATION
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1.5 transition-transform duration-200"
                  />
                </Link>
              </MagneticButton>

              <a
                href="mailto:hello@avorria.com"
                className="font-mono text-sm uppercase tracking-wider text-white/70 hover:text-[var(--color-lime)] transition-colors duration-200 py-3"
              >
                Or email direct: hello@avorria.com →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
