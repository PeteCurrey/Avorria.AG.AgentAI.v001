"use client";

import { useState } from "react";
import { Search, Globe, CheckCircle2, AlertTriangle, Code, ArrowRight } from "lucide-react";

export default function SearchAuditDemo() {
  const [activeTab, setActiveTab] = useState<"schema" | "crawl">("schema");

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Search Infrastructure Diagnostic
          </span>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
            Edge SSR Crawl &amp; Semantic Graph Simulator
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activeTab === "schema"
                ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            Structured Schema Graph
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("crawl")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activeTab === "crawl"
                ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold shadow-sm"
                : "text-[var(--color-muted)] hover:text-white"
            }`}
          >
            Edge SSR Bot Response
          </button>
        </div>
      </div>

      {activeTab === "schema" ? (
        <div className="py-6 space-y-4">
          <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] font-mono text-xs text-white/80 overflow-x-auto">
            <span className="text-[var(--color-muted)] block mb-1">{"// Validated JSON-LD Entity Graph"}</span>
            <pre className="text-[11px] leading-relaxed text-white/90">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avorria.com/#organization",
      "name": "Avorria",
      "url": "https://avorria.com",
      "knowsAbout": ["Digital Development", "Applied AI", "Next.js 16", "Technical SEO"]
    },
    {
      "@type": "WebSite",
      "@id": "https://avorria.com/#website",
      "url": "https://avorria.com",
      "publisher": { "@id": "https://avorria.com/#organization" }
    }
  ]
}`}
            </pre>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-white/5 flex items-center gap-2 text-white">
              <CheckCircle2 size={14} className="text-[var(--color-lime)]" />
              <span>Zero Validation Warnings</span>
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-white/5 flex items-center gap-2 text-white">
              <CheckCircle2 size={14} className="text-[var(--color-lime)]" />
              <span>Full Entity Interlinking</span>
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-white/5 flex items-center gap-2 text-white">
              <CheckCircle2 size={14} className="text-[var(--color-lime)]" />
              <span>Rich Snippet Qualified</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
                Googlebot TTFB
              </span>
              <p className="font-display text-3xl font-bold text-[var(--color-lime)]">
                38ms
              </p>
              <span className="font-mono text-[10px] text-white/50 block mt-1">Rendered at Edge</span>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
                Render State
              </span>
              <p className="font-display text-3xl font-bold text-white">
                100% Pre-rendered
              </p>
              <span className="font-mono text-[10px] text-white/50 block mt-1">Zero Client Hydration Wait</span>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block mb-1">
                Crawl Budget Drag
              </span>
              <p className="font-display text-3xl font-bold text-emerald-400">
                0.0% Waste
              </p>
              <span className="font-mono text-[10px] text-white/50 block mt-1">Canonical Tag Precision</span>
            </div>
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
        <span>Framework: Next.js 16 App Router Edge Runtimes</span>
        <span className="text-[var(--color-lime)]">Sustainable Organic Authority</span>
      </div>
    </div>
  );
}
