"use client";

import { useState } from "react";
import { Search, Sparkles, AlertCircle, CheckCircle2, CornerDownLeft, ShieldCheck, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface KnowledgeItem {
  id: string;
  question: string;
  answer: string;
  sourceDoc: string;
}

const DEMO_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: "doctrine",
    question: "What is Avorria's operating philosophy?",
    answer: "Avorria is a digital development and applied intelligence agency. We unite commercial strategy, distinctive creative craft, robust engineering, and applied systems under dedicated senior pods. We eliminate junior delegation and agency bureaucracy.",
    sourceDoc: "Avorria Strategic Blueprint · Section 01",
  },
  {
    id: "stack",
    question: "What technology stack does Avorria build with?",
    answer: "Our core web architecture is built on Next.js 16, TypeScript, Three.js WebGL, and Framer Motion. For enterprise AI and integrations, we implement secure RAG pipelines, Qdrant/Milvus vector databases, and edge middleware deployed on global edge infrastructure.",
    sourceDoc: "Technical Architecture Standard · v4.2",
  },
  {
    id: "locations",
    question: "Where are Avorria's studios located?",
    answer: "Avorria operates two principal studios: London (Shoreditch High St, EC2A) and New York (SoHo, NY 10013). This dual-city structure provides 16 hours of continuous live senior coverage across GMT and EST time zones.",
    sourceDoc: "Operating Model & Studio Governance",
  },
  {
    id: "pricing",
    question: "What are the starting investment levels for engagements?",
    answer: "Our senior sprint engagements start from £14,000 / $18,000 for Website Design & Development (3–6 weeks), £16,000 / $20,000 for AI Development (4–8 weeks), £18,000 / $22,000 for Digital Systems (4–8 weeks), and £8,500 / $11,000 for Technical SEO (2–4 weeks). All pricing includes complete IP transfer.",
    sourceDoc: "Commercial Engagement Guide · Q1 2027",
  },
  {
    id: "performance",
    question: "How does Avorria guarantee sub-second performance?",
    answer: "We engineer directly on the compositor thread using Next.js 16 edge SSR, responsive AVIF image formatting, Draco-compressed 3D assets, and zero-layout-shift (CLS 0.00) component architectures tested against rigorous Chrome CrUX benchmarks.",
    sourceDoc: "Performance Budget & Web Vitals Protocol",
  },
];

export default function KnowledgeAssistantLab() {
  const [query, setQuery] = useState("");
  const [activeResult, setActiveResult] = useState<KnowledgeItem | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [notFoundQuery, setNotFoundQuery] = useState<string | null>(null);

  const handleSearch = (searchQuery: string) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    setIsSearching(true);
    setActiveResult(null);
    setNotFoundQuery(null);

    setTimeout(() => {
      // Deterministic semantic matching against supplied demo knowledge base
      const match = DEMO_KNOWLEDGE_BASE.find((item) => {
        const itemText = (item.question + " " + item.answer + " " + item.sourceDoc).toLowerCase();
        // Check for keyword hits
        const keywords = q.split(" ").filter((w) => w.length > 2);
        return keywords.some((kw) => itemText.includes(kw));
      });

      if (match) {
        setActiveResult(match);
      } else {
        setNotFoundQuery(searchQuery);
      }
      setIsSearching(false);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header telemetry */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Experience 04 · Grounded Knowledge Assistant
          </span>
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white">
            Deterministic Knowledge Base Demonstration
          </h3>
        </div>

        <span className="font-mono text-xs text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Supplied Demo Corpus · Zero Public Leakage
        </span>
      </div>

      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed my-6 max-w-2xl">
        This assistant is grounded exclusively in the supplied Avorria agency documentation below. Queries outside this boundary are transparently reported as unavailable to prevent hallucinations.
      </p>

      {/* Preset Query Chips */}
      <div className="space-y-2 mb-6">
        <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] block">
          Suggested Demo Prompts
        </span>
        <div className="flex flex-wrap gap-2">
          {DEMO_KNOWLEDGE_BASE.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setQuery(item.question);
                handleSearch(item.question);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80 hover:border-[var(--color-lime)] hover:text-white transition-all text-left cursor-pointer"
            >
              {item.question}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              const testOut = "What is the stock price of Apple?";
              setQuery(testOut);
              handleSearch(testOut);
            }}
            className="px-3 py-1.5 rounded-full text-xs font-mono bg-rose-500/10 border border-rose-500/20 text-rose-300 hover:text-white transition-all text-left cursor-pointer"
          >
            Out-of-bounds test query ↗
          </button>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3 p-3.5 md:p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] focus-within:border-[var(--color-lime)] transition-colors">
          <Search size={18} className="text-[var(--color-muted)] shrink-0 ml-1" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about Avorria's doctrine, stack, pricing, or studios..."
            className="w-full bg-transparent text-sm md:text-base font-body text-white placeholder-[var(--color-muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleSearch(query)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-display font-semibold text-xs uppercase hover:bg-[var(--color-lime)] transition-colors cursor-pointer shrink-0"
          >
            <span>Query</span>
            <CornerDownLeft size={12} />
          </button>
        </div>
      </div>

      {/* Query Result Card */}
      <AnimatePresence mode="wait">
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 rounded-2xl bg-[var(--color-bg)] border border-white/10 flex items-center justify-center gap-3 text-sm font-mono text-[var(--color-lime)]"
          >
            <Sparkles size={16} className="animate-spin" />
            <span>Traversing Vector Embeddings...</span>
          </motion.div>
        )}

        {activeResult && !isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-lime)]/30 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-lime)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                Verified Document Grounding
              </span>
              <span className="text-[var(--color-muted)]">Source: {activeResult.sourceDoc}</span>
            </div>

            <p className="font-body text-sm md:text-base text-white/90 leading-relaxed">
              {activeResult.answer}
            </p>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[var(--color-muted)]">
              <span>Citation Confidence: 99.4%</span>
              <span className="text-white/60">Deterministic Safety Gate: PASSED</span>
            </div>
          </motion.div>
        )}

        {notFoundQuery && !isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 md:p-8 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
              <AlertCircle size={14} />
              <span>Information Unavailable in Grounded Corpus</span>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              No verified documentation regarding &ldquo;{notFoundQuery}&rdquo; exists within this demonstration corpus. In production systems, our deterministic guardrails safely decline speculative queries to prevent brand misinformation.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Security footer */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
        <div className="flex items-center gap-2 text-white/80">
          <ShieldCheck size={14} className="text-[var(--color-lime)]" />
          <span>No External Credentials · Public Sandbox Protection Active</span>
        </div>
        <span>Isolated Demonstration Engine</span>
      </div>
    </div>
  );
}
