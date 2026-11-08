"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, Zap, RefreshCw, Server, Shield, CheckCircle } from "lucide-react";

export default function SystemsIntegrationDemo() {
  const [activePipeline, setActivePipeline] = useState<"checkout" | "sync">("checkout");

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-1">
            Edge Integration Pipeline
          </span>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
            Distributed Systems &amp; Webhook Latency Visualizer
          </h3>
        </div>

        {/* Pipeline Toggle */}
        <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setActivePipeline("checkout")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activePipeline === "checkout"
                ? "bg-[var(--color-cyan)] text-black font-semibold shadow-sm"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            Omnichannel Checkout Bridge
          </button>
          <button
            type="button"
            onClick={() => setActivePipeline("sync")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activePipeline === "sync"
                ? "bg-[var(--color-cyan)] text-black font-semibold shadow-sm"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            ERP &amp; 3PL Inventory Sync
          </button>
        </div>
      </div>

      {/* Nodes visualizer */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] relative">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
            Source Origin
          </span>
          <p className="font-display font-semibold text-base text-white">
            {activePipeline === "checkout" ? "Shopify Headless Store" : "SAP / Netsuite ERP"}
          </p>
          <span className="font-mono text-[10px] text-emerald-400 block mt-2">HTTP 200 · Stream Active</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-cyan-500/30 relative">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-cyan)] block mb-1">
            Avorria Edge Bridge
          </span>
          <p className="font-display font-semibold text-base text-white">
            Next.js Edge Worker
          </p>
          <span className="font-mono text-[10px] text-white/50 block mt-2">Transform &amp; Rate Limiter</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] relative">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
            State Cache
          </span>
          <p className="font-display font-semibold text-base text-white">
            Redis Global Replica
          </p>
          <span className="font-mono text-[10px] text-[var(--color-cyan)] block mt-2">&lt; 8ms Latency</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] relative">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
            Target Destination
          </span>
          <p className="font-display font-semibold text-base text-white">
            {activePipeline === "checkout" ? "Stripe + Global 3PL" : "Customer Portal & CRM"}
          </p>
          <span className="font-mono text-[10px] text-emerald-400 block mt-2">Zero-Data-Loss Guarantee</span>
        </div>
      </div>

      {/* Latency and telemetry strip */}
      <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-[var(--color-muted)] block text-[10px]">End-to-End Latency</span>
            <span className="text-white font-semibold text-sm">34ms p99</span>
          </div>
          <div>
            <span className="text-[var(--color-muted)] block text-[10px]">Throughput Capability</span>
            <span className="text-white font-semibold text-sm">12,500 req / sec</span>
          </div>
          <div>
            <span className="text-[var(--color-muted)] block text-[10px]">Retry Mechanism</span>
            <span className="text-[var(--color-cyan)] font-semibold text-sm">Exponential Backoff</span>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[var(--color-cyan)] text-[11px]">
          Edge Active: 300+ Global PoPs
        </span>
      </div>
    </div>
  );
}
