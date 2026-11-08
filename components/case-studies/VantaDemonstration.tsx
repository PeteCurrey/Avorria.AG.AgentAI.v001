"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Play,
  ShieldCheck,
  Zap,
  Terminal,
  Activity,
  Lock,
} from "lucide-react";

const PRESETS = [
  {
    id: "settlement",
    label: "Cross-Border Liquidity Rebalance",
    query: "Reallocate €4.2M treasury liquidity between Frankfurt and London clearing nodes within compliance thresholds.",
    steps: [
      { agent: "Agent-01", role: "Intent & Bounds Validator", action: "Parsed liquidity parameters. Verified SWIFT ISO-20022 schema integrity.", latencyMs: 24, status: "idle" as const },
      { agent: "Agent-02", role: "Vector Ledger Retrieval", action: "Retrieved real-time FX forward rates and settlement clearing corridor buffers.", latencyMs: 38, status: "idle" as const },
      { agent: "Agent-03", role: "Policy & Risk Evaluator", action: "Checked Basel III capital ratios and counterparty exposure bounds (Passed).", latencyMs: 45, status: "idle" as const },
      { agent: "Agent-04", role: "Autonomous Execution Dispatch", action: "Dispatched signed batch settlement instructions to target ledger.", latencyMs: 19, status: "idle" as const },
    ],
    resultSummary: "Transferred €4,200,000.00 across 2 corridors. Total execution duration 126ms. Zero slippage recorded.",
  },
  {
    id: "security",
    label: "SOC-2 Boundary & Access Audit",
    query: "Inspect 128 microservices for privilege escalation, unrotated secrets, and egress IP compliance.",
    steps: [
      { agent: "Agent-01", role: "Ingestion & Schema Scanner", action: "Aggregated ephemeral identity tokens and service mesh egress logs.", latencyMs: 31, status: "idle" as const },
      { agent: "Agent-02", role: "Vector Knowledge Indexer", action: "Queried zero-trust permission models against NIST 800-53 standards.", latencyMs: 42, status: "idle" as const },
      { agent: "Agent-03", role: "Deterministic Guardrail", action: "Isolated 2 expiring service certificates; generated automated rotation keys.", latencyMs: 50, status: "idle" as const },
      { agent: "Agent-04", role: "Policy Enforcement Node", action: "Rotated cryptographic keys without microservice restart or packet drop.", latencyMs: 22, status: "idle" as const },
    ],
    resultSummary: "128/128 microservices verified compliant. 2 keys rotated seamlessly. Audit report signed with Ed25519 key.",
  },
  {
    id: "hedging",
    label: "Volatility Exposure Hedging",
    query: "Monitor S&P 500 gamma skew and re-hedge delta exposure when VIX crosses 22.0.",
    steps: [
      { agent: "Agent-01", role: "Market Feed Ingestor", action: "Subscribed to live OPRA options chain websocket and synthetic volatility surface.", latencyMs: 16, status: "idle" as const },
      { agent: "Agent-02", role: "Quantitative Model Node", action: "Calculated Black-Scholes implied volatility smile and delta slippage vectors.", latencyMs: 48, status: "idle" as const },
      { agent: "Agent-03", role: "Risk Limits Overseer", action: "Validated order sizing against institutional portfolio loss ceilings.", latencyMs: 34, status: "idle" as const },
      { agent: "Agent-04", role: "Direct Market Router", action: "Routed algorithmic limit orders to dark pool with sub-millisecond execution.", latencyMs: 26, status: "idle" as const },
    ],
    resultSummary: "Delta hedged to 0.002 neutrality. 1,400 contract lots matched at midpoint. Latency SLA maintained.",
  },
];

export default function VantaDemonstration() {
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedStepIndex, setCompletedStepIndex] = useState<number>(-1);

  const activePreset = PRESETS[activePresetIndex];

  const runWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedStepIndex(-1);

    let current = 0;
    const interval = setInterval(() => {
      setCompletedStepIndex(current);
      current++;
      if (current >= activePreset.steps.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  const handlePresetChange = (idx: number) => {
    setActivePresetIndex(idx);
    setCompletedStepIndex(-1);
    setIsRunning(false);
  };

  return (
    <div className="rounded-3xl bg-[#15171B] border border-white/10 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Vanguard Agent Grid · Deterministic Multi-Agent Sandbox
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
            Autonomous Multi-Agent Orchestration
          </h3>
        </div>

        {/* Task Trigger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={runWorkflow}
            disabled={isRunning}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              isRunning
                ? "bg-white/10 text-white/40 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20"
            }`}
          >
            {isRunning ? (
              <>
                <Zap size={14} className="animate-spin text-emerald-400" />
                <span>Orchestrating...</span>
              </>
            ) : (
              <>
                <Play size={14} />
                <span>Execute Workflow</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="py-6 flex flex-wrap gap-2 border-b border-white/10">
        {PRESETS.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handlePresetChange(idx)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activePresetIndex === idx
                ? "bg-white/15 text-white border border-white/20 font-bold"
                : "bg-white/5 text-white/60 hover:text-white border border-transparent"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input Prompt Card */}
      <div className="my-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
        <Terminal size={16} className="text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-mono text-[10px] uppercase text-white/50 block mb-1">
            Enterprise Input Instruction
          </span>
          <p className="font-mono text-xs text-white/90">{activePreset.query}</p>
        </div>
      </div>

      {/* 4-Agent Pipeline Graph */}
      <div className="space-y-3 my-6">
        {activePreset.steps.map((step, idx) => {
          const isFinished = completedStepIndex >= idx;
          const isCurrent = completedStepIndex === idx - 1 && isRunning;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: isFinished ? 1 : isCurrent ? 0.9 : 0.4,
                borderColor: isFinished ? "rgba(52, 211, 153, 0.4)" : isCurrent ? "rgba(54, 87, 232, 0.6)" : "rgba(255, 255, 255, 0.08)",
              }}
              className="p-4 rounded-xl bg-white/[0.02] border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isFinished
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : isCurrent
                      ? "bg-[#3657E8]/20 text-[#3657E8] border border-[#3657E8]/30 animate-pulse"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  {isFinished ? <CheckCircle2 size={15} /> : `0${idx + 1}`}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white">{step.agent}</span>
                    <span className="text-[10px] font-mono text-white/40">· {step.role}</span>
                  </div>
                  <p className="font-body text-xs text-white/70 mt-0.5">{step.action}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-mono text-white/50 shrink-0">
                <span className="flex items-center gap-1">
                  <Activity size={12} className={isFinished ? "text-emerald-400" : ""} />
                  {step.latencyMs}ms
                </span>
                <span
                  className={`px-2 py-0.5 rounded ${
                    isFinished
                      ? "bg-emerald-500/10 text-emerald-400"
                      : isCurrent
                      ? "bg-[#3657E8]/20 text-[#3657E8]"
                      : "bg-white/5 text-white/30"
                  }`}
                >
                  {isFinished ? "RESOLVED" : isCurrent ? "ACTIVE" : "STANDBY"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verifiable Output Banner */}
      <AnimatePresence>
        {completedStepIndex >= activePreset.steps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block font-bold">
                  Deterministic Execution Verified
                </span>
                <p className="font-mono text-xs text-white/90 mt-0.5">
                  {activePreset.resultSummary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80 shrink-0">
              <Lock size={13} />
              <span>Zero Model Hallucination Boundary</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
