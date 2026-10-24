"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Script from "next/script";

const FAQS_6_ITEMS = [
  {
    id: "cost",
    question: "How much does an Avorria digital flagship or AI system cost?",
    answer:
      "Our bespoke digital flagship engagements start from £14,000 / $18,000 for high-performance immersive websites and £24,000 / $30,000 for headless e-commerce. Enterprise AI systems and autonomous agent swarms begin at £16,000 / $20,000. Every proposal is delivered as a fixed-scope SLA with guaranteed timelines and zero hidden surprises.",
  },
  {
    id: "speed",
    question: "How fast can you build and ship to production?",
    answer:
      "We operate in concentrated senior sprints. A rapid Launch scope ships in 3 weeks, a Growth project in 6 weeks, and full-scale Flagship transformations deliver in 10 weeks. You receive an interactive prototype within 48 hours and live staging links from Week 1 onwards.",
  },
  {
    id: "3d-seo",
    question: "Does WebGL and real-time 3D harm Core Web Vitals or SEO rankings?",
    answer:
      "Never at Avorria. We treat performance as a fundamental design constraint: DPR is capped at 2×, Three.js shaders are code-split and loaded asynchronously, textures are served via next-gen AVIF/WebP, and all page markup is server-rendered with semantic HTML. Our projects consistently hit 95–100 PageSpeed scores.",
  },
  {
    id: "ai",
    question: "Are your AI systems production-grade or just basic API wrappers?",
    answer:
      "We engineer production-grade enterprise infrastructure. That includes custom domain fine-tuning on your proprietary datasets, high-throughput vector pipelines (Qdrant, Pinecone), deterministic fallback guardrails, and autonomous multi-agent networks that orchestrate complex business ops with a 99.9% uptime SLA.",
  },
  {
    id: "startup-vs-enterprise",
    question: "Do you work with early-stage startups or strictly enterprises?",
    answer:
      "We actively work with both. We help venture-backed seed and Series A startups out-design and out-engineer incumbents on Day 1, while providing enterprise clients with the security, SOC2-readiness, and headless scalability demanded by global brands.",
  },
  {
    id: "retainers",
    question: "What do ongoing retainers and post-launch partnerships look like?",
    answer:
      "94% of our clients retain us post-launch. Our monthly partnership retainers reserve dedicated senior engineering capacity for continuous conversion optimization (CRO), ongoing 3D asset updates, feature expansions, and model monitoring for your production AI pipelines.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_6_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)] relative">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  Frequently Addressed
                </span>
              </div>
              <h2 className="font-display font-semibold text-[clamp(2.4rem,4.5vw,4.2rem)] leading-[1.05] tracking-tight text-white mb-6">
                Institutional clarity.<br />
                <span className="text-gradient-silver">Technical precision.</span>
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8">
                Key considerations regarding engagement parameters, SLA standards, security governance, and delivery velocity.
              </p>
              <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-2">
                <p className="font-display font-semibold text-white text-sm">Complex enterprise scope?</p>
                <p className="font-body text-xs text-[var(--color-muted)]">
                  Our practice directors respond to technical inquiries within 4 business hours.
                </p>
                <a
                  href="mailto:hello@avorria.com"
                  className="font-mono text-xs text-white hover:text-[var(--color-lime)] transition-colors inline-block pt-2"
                >
                  hello@avorria.com →
                </a>
              </div>
            </div>

            {/* Right Accordion Column: 6 Items */}
            <div className="lg:col-span-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {FAQS_6_ITEMS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.id} className="py-7 group transition-colors duration-200">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full flex items-center justify-between gap-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl py-1 px-1 -mx-1"
                    >
                      <span className="font-display font-semibold text-lg md:text-xl text-white group-hover:text-white/90 transition-colors duration-200 leading-snug">
                        {faq.question}
                      </span>

                      {/* Plus icon rotates 45 deg to form X */}
                      <div
                        className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-bg)]"
                            : "border-[var(--color-border)] group-hover:border-[var(--color-lime)]/50 text-[var(--color-muted)] group-hover:text-white"
                        }`}
                      >
                        <Plus
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
