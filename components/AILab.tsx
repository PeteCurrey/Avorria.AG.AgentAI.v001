"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  GitBranch,
  Database,
  Workflow,
} from "lucide-react";
import MagneticButton from "./MagneticButton";

const ARCHITECTURE_MODULES = [
  {
    id: "rag",
    number: "01",
    title: "Enterprise Knowledge & RAG",
    tagline: "Proprietary Vector Memory",
    icon: Database,
    overview:
      "Enterprise-grade retrieval-augmented generation combining hybrid sparse/dense vector search with proprietary reranking models. Zero hallucinations, fully citeable outputs, and millisecond-level document synthesis.",
    specs: [
      { label: "Search Latency", value: "< 24ms p99" },
      { label: "Retrieval Precision", value: "99.4% MRR" },
      { label: "Data Boundary", value: "VPC Air-Gapped" },
      { label: "Supported Formats", value: "PDF, SQL, API, CRM" },
    ],
    architecture: [
      "Multi-modal Ingestion Pipeline",
      "Chunking with Semantic Boundary Detection",
      "Qdrant / Milvus Vector Sharding",
      "Cross-Encoder Re-Ranking Engine",
      "Deterministic Context Assembler",
    ],
  },
  {
    id: "agents",
    number: "02",
    title: "Autonomous Agent Orchestration",
    tagline: "Multi-Role Agent Swarms",
    icon: Workflow,
    overview:
      "State-machine governed multi-agent networks designed for high-stakes operational workflows. Specialized agents collaborate across analysis, execution, and verification phases with human-in-the-loop safety gates.",
    specs: [
      { label: "Task Completion Rate", value: "98.7% Zero-Shot" },
      { label: "Parallel Concurrency", value: "1,000+ Swarm Workers" },
      { label: "Failure Recovery", value: "Self-Healing Reflection" },
      { label: "Protocol", value: "JSON Schema Validated" },
    ],
    architecture: [
      "Coordinator Supervisor Model",
      "Domain-Specialized Subagents",
      "Dynamic Memory & Tool Sinks",
      "Self-Correction & Critique Loop",
      "Real-Time Telemetry & Traces",
    ],
  },
  {
    id: "middleware",
    number: "03",
    title: "High-Throughput Middleware",
    tagline: "Sub-50ms API Pipelines",
    icon: Zap,
    overview:
      "Ultra-low-latency streaming bridges and webhook infrastructure built with Next.js edge runtimes and distributed Redis queues. Connects client frontends directly to model inference endpoints with real-time UI synchronization.",
    specs: [
      { label: "Streaming TTFT", value: "< 140ms Global" },
      { label: "Uptime SLA", value: "99.99% Tier-1" },
      { label: "Throughput", value: "10k+ req/sec" },
      { label: "Edge Delivery", value: "300+ PoPs Globally" },
    ],
    architecture: [
      "Edge Middleware Routing",
      "Distributed Rate-Limiting",
      "Server-Sent Events (SSE) Engine",
      "Automatic Fallback Redundancy",
      "High-Velocity Redis Cache",
    ],
  },
  {
    id: "governance",
    number: "04",
    title: "Security, Privacy & Governance",
    tagline: "Institutional Risk Guardrails",
    icon: ShieldCheck,
    overview:
      "Hardened security posture engineered for regulated industries. We enforce zero model training on client IP, granular role-based access control, cryptographic verification, and comprehensive audit logs.",
    specs: [
      { label: "Compliance", value: "SOC-2 Type II Aligned" },
      { label: "Data Retention", value: "Zero Zero-Day Storage" },
      { label: "Encryption", value: "AES-256 / TLS 1.3" },
      { label: "PII Masking", value: "Deterministic Redaction" },
    ],
    architecture: [
      "Automated PII Redaction Proxy",
      "Strict Token Allocation Quotas",
      "Immutable Audit Ledger",
      "Role-Based Access Control (RBAC)",
      "Zero-Retention API Agreements",
    ],
  },
];

export default function AILab() {
  const [activeModule, setActiveModule] = useState(ARCHITECTURE_MODULES[0]);
  const ActiveIcon = activeModule.icon;

  return (
    <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[var(--color-border)]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu size={15} className="text-[var(--color-lime)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Systems &amp; Applied AI Practice
              </span>
            </div>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.04] tracking-tight text-white">
              Deterministic intelligence for<br />
              <span className="text-gradient-silver">enterprise operations.</span>
            </h2>
          </div>

          <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-md leading-relaxed">
            We architect and deploy custom autonomous AI systems, domain-fine-tuned models,
            and private knowledge infrastructures designed for institutional reliability.
          </p>
        </div>

        {/* 3 Executive Proof Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 md:p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)]">
            <span className="font-display font-bold text-3xl md:text-4xl text-white block mb-1">
              -74%
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-3">
              Operational Cycle Latency
            </span>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Automated multi-agent execution replaces manual back-office pipelines with deterministic sub-second throughput.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)]">
            <span className="font-display font-bold text-3xl md:text-4xl text-white block mb-1">
              99.4%
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-3">
              Deterministic Precision
            </span>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Hybrid vector indexing and strict JSON schema boundaries eliminate conversational hallucinations.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)]">
            <span className="font-display font-bold text-3xl md:text-4xl text-white block mb-1">
              100%
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-3">
              IP &amp; Privacy Sovereignty
            </span>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Zero training on enterprise client data. Complete compliance with GDPR, SOC-2, and private cloud VPC standards.
            </p>
          </div>
        </div>

        {/* Interactive Systems Architecture Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Navigation Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
              Systems Architecture Stack
            </span>

            {ARCHITECTURE_MODULES.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              const ModIcon = mod.icon;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModule(mod)}
                  className={`p-6 rounded-[var(--radius-card)] border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[var(--color-panel-elevated)] border-white/20 text-white shadow-xl"
                      : "bg-[var(--color-panel)] border-[var(--color-border)] text-white/70 hover:border-white/15 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                        isSelected
                          ? "bg-white/10 border-white/20 text-[var(--color-lime)]"
                          : "bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-muted)]"
                      }`}
                    >
                      <ModIcon size={17} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[var(--color-muted)]">
                          {mod.number}
                        </span>
                        <span className="font-display text-sm font-semibold text-white">
                          {mod.title}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[var(--color-muted)] block">
                        {mod.tagline}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={15}
                    className={`transition-transform duration-200 ${
                      isSelected
                        ? "text-[var(--color-lime)] translate-x-1"
                        : "text-[var(--color-muted)] opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Architecture Blueprint Display Panel */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                        <ActiveIcon size={19} className="text-[var(--color-lime)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xl text-white">
                          {activeModule.title}
                        </h3>
                        <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider">
                          Module {activeModule.number} · Production Blueprint
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-lime)]">
                      Active Practice
                    </span>
                  </div>

                  {/* Overview */}
                  <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                    {activeModule.overview}
                  </p>

                  {/* Technical Specifications Grid */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-3">
                      Technical Benchmarks
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeModule.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="p-3.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]"
                        >
                          <span className="font-mono text-[10px] text-[var(--color-muted)] block uppercase">
                            {spec.label}
                          </span>
                          <span className="font-display font-semibold text-xs md:text-sm text-white mt-1 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Layer Breakdown */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-3">
                      Pipeline Components
                    </span>
                    <div className="space-y-2">
                      {activeModule.architecture.map((layer, lIdx) => (
                        <div
                          key={layer}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[var(--color-bg)]/60 border border-[var(--color-border)] text-xs font-mono text-white/90"
                        >
                          <span className="text-[var(--color-lime)] font-semibold">
                            0{lIdx + 1}
                          </span>
                          <span>{layer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs text-[var(--color-muted)]">
                  Custom VPC deployments available for enterprise engagements.
                </span>

                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-colors duration-200"
                  >
                    Request Systems Briefing
                    <ArrowRight size={13} />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
