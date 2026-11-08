"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ArrowRight, ShieldCheck, Database, CheckCircle2, Clock, Sparkles } from "lucide-react";

const SCENARIOS = [
  {
    id: "rfp",
    title: "Client RFP & Compliance Audit",
    input: "Evaluate incoming 80-page procurement RFP against our ISO-27001 data sovereignty boundaries.",
    steps: [
      { agent: "Intake & Document Parser", action: "Extracted 142 clauses, partitioned tables, indexed in private vector store", time: "180ms" },
      { agent: "Security & Sovereignty Model", action: "Matched clauses against corporate policy vector cluster (zero public API exposure)", time: "340ms" },
      { agent: "Deterministic Gap Analyst", action: "Flagged 2 ambiguous data residency requirements with citations", time: "210ms" },
      { agent: "Human-in-the-Loop Gate", action: "Generated executive sign-off summary with verified source anchors", time: "90ms" },
    ],
    timeSaved: "14 hours manual review reduced to 820ms automated pipeline",
  },
  {
    id: "crm",
    title: "High-Value Lead Reconciliation",
    input: "Enrich inbound enterprise inquiry, check existing contract pipeline, and draft bespoke technical response.",
    steps: [
      { agent: "Entity Resolution Agent", action: "Disambiguated client domain across Salesforce, Stripe billing, and Zendesk", time: "120ms" },
      { agent: "Contract History Retriever", action: "Surfaced prior NDA terms and historical MSA discounts from private archive", time: "160ms" },
      { agent: "Proposal Composer", action: "Drafted scope alignment document using verified design team rate card", time: "290ms" },
      { agent: "Audit Gate", action: "Validated pricing boundaries against partner approval threshold", time: "60ms" },
    ],
    timeSaved: "Cross-department friction eliminated; sub-second sales enablement",
  },
];

export default function AgentPipelineDemo() {
  const [selectedId, setSelectedId] = useState("rfp");
  const scenario = SCENARIOS.find((s) => s.id === selectedId) ?? SCENARIOS[0];

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Interactive Agent Execution Trace
          </span>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
            Deterministic Knowledge &amp; Workflow Routing Simulator
          </h3>
        </div>

        {/* Scenario Switcher */}
        <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedId(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedId === s.id
                  ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Input payload box */}
      <div className="my-6 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-start gap-3">
        <Sparkles size={16} className="text-[var(--color-lime)] shrink-0 mt-0.5" />
        <div>
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">Trigger Event</span>
          <p className="font-mono text-xs text-white/90">{scenario.input}</p>
        </div>
      </div>

      {/* Agent steps stream */}
      <div className="space-y-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] block mb-2">
          Autonomous Execution Trace (Isolated VPC Sandbox)
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {scenario.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--color-bg)]/80 border border-white/5 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--color-lime)]/10 text-[var(--color-lime)] flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-mono text-xs font-medium text-white block mb-0.5">
                      {step.agent}
                    </span>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">
                      {step.action}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-white/40 shrink-0 px-2 py-0.5 rounded bg-white/5">
                  {step.time}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Outcome footer */}
      <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-white/80">
          <ShieldCheck size={14} className="text-[var(--color-lime)]" />
          <span>Zero Client IP Training · Deterministic Guardrails Active</span>
        </div>
        <span className="text-[var(--color-lime)] hidden sm:inline-block">
          {scenario.timeSaved}
        </span>
      </div>
    </div>
  );
}
