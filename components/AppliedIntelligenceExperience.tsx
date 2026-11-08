"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Database, RefreshCw, ShieldCheck, Zap } from "lucide-react";

interface WorkflowStep {
  id: string;
  name: string;
  stage: string;
  detail: string;
  latency: string;
  status: "pending" | "running" | "completed";
}

const PRESET_INSTRUCTIONS = [
  "Synthesize Q4 enterprise sales telemetry and auto-reconcile with Stripe API",
  "Run compliance triage on inbound vendor contracts against SOC-2 Type II standards",
  "Execute multi-lingual product catalog sync with vector search embedding",
];

export default function AppliedIntelligenceExperience() {
  const [selectedInstruction, setSelectedInstruction] = useState(PRESET_INSTRUCTIONS[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps: WorkflowStep[] = [
    {
      id: "ingest",
      name: "Instruction Parsing & Validation",
      stage: "Stage 01",
      detail: "Deterministic schema validation and boundary checks. Zero data exposure to public models.",
      latency: "12ms",
      status: activeStep > 0 ? "completed" : activeStep === 0 && isRunning ? "running" : "pending",
    },
    {
      id: "retrieve",
      name: "Private Vector Retrieval (RAG)",
      stage: "Stage 02",
      detail: "Multi-tenant vector sharding across corporate documentation and PostgreSQL records.",
      latency: "28ms",
      status: activeStep > 1 ? "completed" : activeStep === 1 ? "running" : "pending",
    },
    {
      id: "agents",
      name: "Autonomous Multi-Agent Routing",
      stage: "Stage 03",
      detail: "Supervisor coordinator delegates parallel tasks to specialized sub-agents with reflection checks.",
      latency: "64ms",
      status: activeStep > 2 ? "completed" : activeStep === 2 ? "running" : "pending",
    },
    {
      id: "verify",
      name: "Deterministic Verification & Output",
      stage: "Stage 04",
      detail: "Format audit, cryptographic hash sign-off, and write payload dispatch to production APIs.",
      latency: "18ms",
      status: activeStep > 3 ? "completed" : activeStep === 3 ? "running" : "pending",
    },
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 4;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <section className="section-pad bg-[#15171B] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3657E8]/15 via-transparent to-transparent pointer-events-none" />

      <div className="container-px mx-auto max-w-[1440px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">
              05 / Applied Intelligence Experience
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] text-white leading-[1.02] tracking-[-0.04em] font-light">
            Autonomous workflows. <br />
            <span className="text-[#3657E8] font-normal">Deterministic precision.</span>
          </h2>
          <p className="font-body text-white/70 text-base md:text-lg font-light leading-relaxed">
            Experience how a complex business instruction enters an Avorria system, flows through secure multi-agent stages, and produces verified outputs with zero manual drag.
          </p>
        </div>

        {/* Interactive Interactive Visual Console */}
        <div className="bg-[#22242A] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl card-arch">
          {/* Top Instruction Selector Bar */}
          <div className="mb-10 pb-8 border-b border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#3657E8] uppercase tracking-wider font-semibold">
                Input Instruction Prompt
              </span>
              <span className="font-mono text-xs text-white/50">
                Live Interactive Simulation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PRESET_INSTRUCTIONS.map((instr, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedInstruction(instr);
                    setActiveStep(0);
                  }}
                  className={`p-4 rounded-xl text-left font-mono text-xs border transition-all duration-200 ${
                    selectedInstruction === instr
                      ? "bg-[#3657E8]/20 border-[#3657E8] text-white shadow-sm"
                      : "bg-[#15171B]/50 border-white/10 text-white/70 hover:border-white/30"
                  }`}
                >
                  <span className="text-[10px] text-[#3657E8] block mb-1">Preset 0{idx + 1}</span>
                  <span className="line-clamp-2">{instr}</span>
                </button>
              ))}
            </div>

            {/* Run Button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-white/60">
                Selected: <span className="text-white font-medium">&quot;{selectedInstruction}&quot;</span>
              </span>

              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#3657E8] text-white font-display text-xs uppercase tracking-wider font-semibold hover:bg-[#2544CC] transition-all disabled:opacity-50 shadow-md"
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>Processing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Zap size={14} />
                    <span>Execute Workflow</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 4 Connected Stages Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((st, idx) => {
              const isCurrent = activeStep === idx;
              const isDone = activeStep > idx;

              return (
                <div
                  key={st.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between min-h-[220px] ${
                    isCurrent
                      ? "bg-[#3657E8]/15 border-[#3657E8] shadow-lg"
                      : isDone
                      ? "bg-[#15171B] border-white/20 text-white"
                      : "bg-[#15171B]/40 border-white/5 opacity-60 text-white/60"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#3657E8] font-semibold">
                        {st.stage}
                      </span>
                      <span className="font-mono text-[10px] text-white/50">
                        {st.latency}
                      </span>
                    </div>

                    <h4 className="font-display font-medium text-base text-white">
                      {st.name}
                    </h4>

                    <p className="font-body text-xs text-white/70 leading-relaxed font-light">
                      {st.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-white/50">Status</span>
                    {isDone ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 size={12} /> Complete
                      </span>
                    ) : isCurrent ? (
                      <span className="text-[#3657E8] flex items-center gap-1 animate-pulse font-semibold">
                        <RefreshCw size={12} className="animate-spin" /> In Progress
                      </span>
                    ) : (
                      <span className="text-white/40">Standby</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Outcome Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-[#15171B] border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#3657E8]/20 text-[#3657E8] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#3657E8] block font-semibold">
                  Guaranteed Execution Boundary
                </span>
                <p className="font-display text-sm text-white">
                  SOC-2 Type II Aligned · 100% Deterministic Output · Sub-150ms Aggregate Latency
                </p>
              </div>
            </div>

            <Link
              href="/services/ai"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#3657E8] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Explore AI Practice Specification</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
