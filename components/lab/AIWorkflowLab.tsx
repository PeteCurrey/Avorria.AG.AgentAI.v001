"use client";

import { useState } from "react";
import { Play, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, UserCheck, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowStep {
  id: string;
  label: string;
  detail: string;
  status: "idle" | "running" | "waiting-approval" | "complete";
  time?: string;
}

const INITIAL_STEPS: WorkflowStep[] = [
  { id: "intake", label: "01. Instruction Triage & Ingestion", detail: "Parsed customer purchase dispute payload from Stripe webhook.", status: "idle" },
  { id: "analysis", label: "02. Evidence Retrieval & History Match", detail: "Queried delivery tracking signature & CRM communication history.", status: "idle" },
  { id: "decision", label: "03. Autonomous Policy Evaluation", detail: "Assessed claim against corporate refund boundaries (< $500 SLA).", status: "idle" },
  { id: "approval", label: "04. Executive Oversight & Human Gate", detail: "Require explicit staff confirmation before releasing merchant payout.", status: "idle" },
  { id: "output", label: "05. Ledger Reconciliation & Dispatch", detail: "Dispatched automated refund receipt and updated enterprise ledger.", status: "idle" },
];

export default function AIWorkflowLab() {
  const [steps, setSteps] = useState<WorkflowStep[]>(INITIAL_STEPS);
  const [isRunning, setIsRunning] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startWorkflow = () => {
    setIsRunning(true);
    setIsFinished(false);
    setNeedsApproval(false);
    setSteps(INITIAL_STEPS);

    // Step 1
    setTimeout(() => {
      setSteps((prev) =>
        prev.map((s, i) => (i === 0 ? { ...s, status: "complete", time: "42ms" } : i === 1 ? { ...s, status: "running" } : s))
      );
    }, 600);

    // Step 2
    setTimeout(() => {
      setSteps((prev) =>
        prev.map((s, i) => (i === 1 ? { ...s, status: "complete", time: "180ms" } : i === 2 ? { ...s, status: "running" } : s))
      );
    }, 1400);

    // Step 3
    setTimeout(() => {
      setSteps((prev) =>
        prev.map((s, i) => (i === 2 ? { ...s, status: "complete", time: "110ms" } : i === 3 ? { ...s, status: "waiting-approval" } : s))
      );
      setNeedsApproval(true);
    }, 2200);
  };

  const approveGate = () => {
    setNeedsApproval(false);
    setSteps((prev) =>
      prev.map((s, i) => (i === 3 ? { ...s, status: "complete", time: "Human Sign-off" } : i === 4 ? { ...s, status: "running" } : s))
    );

    // Step 5 (Final)
    setTimeout(() => {
      setSteps((prev) =>
        prev.map((s, i) => (i === 4 ? { ...s, status: "complete", time: "65ms" } : s))
      );
      setIsRunning(false);
      setIsFinished(true);
    }, 800);
  };

  const reset = () => {
    setSteps(INITIAL_STEPS);
    setIsRunning(false);
    setNeedsApproval(false);
    setIsFinished(false);
  };

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header telemetry */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Experience 02 · Simulated AI Workflow
          </span>
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white">
            Deterministic Business Process Orchestrator
          </h3>
        </div>

        <span className="font-mono text-xs text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Simulated Sandbox Environment
        </span>
      </div>

      {/* Simulator Payload Header & Trigger */}
      <div className="my-6 p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
            Test Payload (Dispute Event #8491)
          </span>
          <p className="font-mono text-xs text-white/90">
            &ldquo;Customer claims non-receipt on Order #5910 ($340.00). Courier GPS confirms delivery.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!isRunning && !isFinished && (
            <button
              type="button"
              onClick={startWorkflow}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              <Play size={13} fill="currentColor" />
              <span>Initiate Workflow</span>
            </button>
          )}

          {isFinished && (
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Reset Scenario</span>
            </button>
          )}
        </div>
      </div>

      {/* Progression timeline cards */}
      <div className="space-y-3.5 my-6">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
              step.status === "complete"
                ? "bg-white/[0.04] border-[var(--color-lime)]/40 text-white"
                : step.status === "running"
                ? "bg-[var(--color-lime)]/[0.06] border-[var(--color-lime)] text-white shadow-lg"
                : step.status === "waiting-approval"
                ? "bg-amber-500/[0.08] border-amber-500/50 text-white animate-pulse"
                : "bg-white/[0.01] border-white/5 text-[var(--color-muted)] opacity-60"
            }`}
          >
            <div className="flex items-start gap-3.5">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs shrink-0 font-bold ${
                step.status === "complete"
                  ? "bg-[var(--color-lime)] text-[var(--color-bg)]"
                  : step.status === "running"
                  ? "bg-[var(--color-lime)]/20 text-[var(--color-lime)]"
                  : step.status === "waiting-approval"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-white/5 text-white/40"
              }`}>
                {step.status === "complete" ? "✓" : idx + 1}
              </span>

              <div>
                <span className="font-display font-semibold text-sm md:text-base text-white block mb-0.5">
                  {step.label}
                </span>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>

            {/* Time / Status chip */}
            <div className="shrink-0 font-mono text-[10px]">
              {step.time && (
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                  {step.time}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Human Approval Gate Action */}
      <AnimatePresence>
        {needsApproval && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6"
          >
            <div className="flex items-start gap-3">
              <UserCheck size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-sm text-white block">
                  Human-in-the-Loop Approval Required
                </span>
                <p className="font-body text-xs text-white/70 mt-0.5">
                  The automated policy flagged a borderline claim. Confirming will authorise the payout and trigger the accounting entry.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={approveGate}
              className="px-6 py-2.5 rounded-full bg-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Authorise Action
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Safety assurance footer */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-muted)]">
        <div className="flex items-center gap-2 text-white/80">
          <ShieldCheck size={14} className="text-[var(--color-lime)]" />
          <span>Strict Deterministic Rules · Zero Unsupervised Execution</span>
        </div>
        <span>Enterprise SLA: 99.99% Uptime</span>
      </div>
    </div>
  );
}
