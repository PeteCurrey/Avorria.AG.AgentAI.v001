"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Gauge, Zap, CheckCircle2, RotateCcw } from "lucide-react";

export default function WebBenchmarkDemo() {
  const [mode, setMode] = useState<"avorria" | "legacy">("avorria");

  const metrics = mode === "avorria" ? {
    fps: 60,
    lcp: "0.62s",
    cls: "0.000",
    inp: "18ms",
    bundle: "84 KB",
    rating: "Sub-Second Velocity",
    frameTime: "16.6ms / frame",
    verdict: "Instantaneous Edge Rendering",
  } : {
    fps: 22,
    lcp: "3.84s",
    cls: "0.182",
    inp: "280ms",
    bundle: "1.4 MB",
    rating: "High Interaction Friction",
    frameTime: "45.4ms / frame",
    verdict: "Script Drag & Layout Instability",
  };

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Interactive Architecture Benchmark
          </span>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
            Runtime Performance &amp; Frame Budget Simulation
          </h3>
        </div>

        {/* Toggle Mode */}
        <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setMode("avorria")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              mode === "avorria"
                ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            Avorria Next.js 16
          </button>
          <button
            type="button"
            onClick={() => setMode("legacy")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              mode === "legacy"
                ? "bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            Legacy Template CMS
          </button>
        </div>
      </div>

      {/* Grid of live simulated metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
            Frame Rate (FPS)
          </span>
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-3xl md:text-4xl font-bold ${mode === "avorria" ? "text-[var(--color-lime)]" : "text-rose-400"}`}>
              {metrics.fps}
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)]">fps</span>
          </div>
          <span className="font-mono text-[10px] text-white/50 block mt-1">{metrics.frameTime}</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
            Largest Contentful Paint
          </span>
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-3xl md:text-4xl font-bold ${mode === "avorria" ? "text-emerald-400" : "text-rose-400"}`}>
              {metrics.lcp}
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/50 block mt-1">Google Target: &lt; 2.5s</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
            Cumulative Layout Shift
          </span>
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-3xl md:text-4xl font-bold ${mode === "avorria" ? "text-[var(--color-lime)]" : "text-amber-400"}`}>
              {metrics.cls}
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/50 block mt-1">Target: &lt; 0.10</span>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
            JS Payload at Entry
          </span>
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-3xl md:text-4xl font-bold ${mode === "avorria" ? "text-[var(--color-lime)]" : "text-rose-400"}`}>
              {metrics.bundle}
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/50 block mt-1">Gzipped edge payload</span>
        </div>
      </div>

      {/* Frame budget visualisation bar */}
      <div className="p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--color-muted)]">Frame Budget Utilization (16.6ms window)</span>
          <span className={mode === "avorria" ? "text-[var(--color-lime)]" : "text-rose-400"}>
            {metrics.verdict}
          </span>
        </div>

        <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden relative">
          <motion.div
            initial={false}
            animate={{ width: mode === "avorria" ? "24%" : "96%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`h-full rounded-full ${mode === "avorria" ? "bg-[var(--color-lime)]" : "bg-gradient-to-r from-amber-500 to-rose-500"}`}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-1">
          <span>0ms (Render Idle)</span>
          <span>16.6ms (60fps Limit)</span>
          <span>45ms+ (Dropped Frames)</span>
        </div>
      </div>
    </div>
  );
}
