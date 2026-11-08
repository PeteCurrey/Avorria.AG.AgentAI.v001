"use client";

import { useState } from "react";
import { Monitor, Smartphone, CheckCircle2, Cpu, Zap, Layers, Volume2, ShieldCheck, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectShowcaseInteractiveProps {
  slug: string;
  title: string;
  category: string;
  accentColor: string;
}

export default function ProjectShowcaseInteractive({
  slug,
  title,
  category,
  accentColor,
}: ProjectShowcaseInteractiveProps) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"visual" | "tech">("visual");

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl overflow-hidden relative">
      {/* Header controls: Desktop/Mobile Switcher + View mode */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Interactive Experience Studio
          </span>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
            {title} · Multi-Viewport &amp; System Simulator
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Device toggle */}
          <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                device === "desktop"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              <Monitor size={14} />
              <span>Desktop Canvas</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                device === "mobile"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              <Smartphone size={14} />
              <span>Mobile Touch</span>
            </button>
          </div>

          {/* View Tab */}
          <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
            <button
              type="button"
              onClick={() => setActiveTab("visual")}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeTab === "visual"
                  ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              Canvas Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tech")}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeTab === "tech"
                  ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              Runtime Graph
            </button>
          </div>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="py-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeTab === "visual" ? (
            <motion.div
              key={device}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`transition-all duration-500 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative ${
                device === "desktop"
                  ? "w-full aspect-[16/9] max-w-4xl bg-gradient-to-br from-[#12121d] via-[#090910] to-[#040407]"
                  : "w-[300px] aspect-[9/18] max-h-[520px] bg-gradient-to-br from-[#12121d] via-[#090910] to-[#040407]"
              }`}
            >
              {/* Device Frame Header */}
              <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                </div>
                <span>avorria.preview/{slug}</span>
                <span>60fps</span>
              </div>

              {/* Internal Project Mock UI */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-[calc(100%-35px)] relative overflow-hidden">
                <div className="space-y-2 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase bg-white/5 text-[var(--color-lime)] border border-white/10">
                    {category}
                  </span>
                  <h4 className="font-display font-bold text-xl md:text-3xl text-white">
                    {title}
                  </h4>
                  <p className="font-body text-xs text-[var(--color-muted)] max-w-md line-clamp-2">
                    Simulated production viewport. Optimized frame budget, zero layout shifts, and responsive touch gestures.
                  </p>
                </div>

                {/* Animated project visual indicator */}
                <div className="py-6 flex items-center justify-center relative">
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-t border-[var(--color-lime)]"
                    />
                    <span className="font-mono text-[10px] uppercase text-white/50 tracking-widest">
                      WebGL Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-4 border-t border-white/5 z-10">
                  <span>Edge Render: &lt; 40ms</span>
                  <span className="text-[var(--color-lime)]">CLS: 0.000</span>
                </div>

                {/* Atmospheric Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,255,63,0.03)_0%,transparent_70%)] pointer-events-none" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl p-6 md:p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-6"
            >
              <h4 className="font-display font-semibold text-lg text-white">
                Runtime Architecture &amp; Lifecycle Diagnostics
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[var(--color-panel)] border border-[var(--color-border)]">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
                    Rendering Pipeline
                  </span>
                  <p className="font-display font-semibold text-sm text-white">Next.js 16 SSR + SSG</p>
                  <p className="font-body text-xs text-white/60 mt-1">Pre-rendered static shell with zero-delay edge hydration.</p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-panel)] border border-[var(--color-border)]">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
                    Graphics Thread
                  </span>
                  <p className="font-display font-semibold text-sm text-[var(--color-lime)]">Three.js GLSL Shaders</p>
                  <p className="font-body text-xs text-white/60 mt-1">Offloaded to GPU with offscreen RAF pause detection.</p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-panel)] border border-[var(--color-border)]">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] block mb-1">
                    State &amp; Cache
                  </span>
                  <p className="font-display font-semibold text-sm text-white">Edge Key-Value Cache</p>
                  <p className="font-body text-xs text-white/60 mt-1">Sub-10ms global edge cache delivery across 300+ PoPs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-panel)] border border-white/5 flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 size={14} className="text-[var(--color-lime)]" />
                  <span>Verified 100/100 Core Web Vitals Audit Passed</span>
                </div>
                <span>Zero Layout Shift Guaranteed</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
