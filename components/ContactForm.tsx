"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Clock, Loader2, AlertCircle } from "lucide-react";

const PROJECT_TYPES = [
  { id: "website", label: "Website (WebGL Flagship)" },
  { id: "ecom", label: "Headless E-Commerce" },
  { id: "ai", label: "Autonomous AI System" },
  { id: "combo", label: "Combo (Flagship + AI)" },
];

const BUDGET_RANGES = [
  { id: "15k-25k", label: "£15k – £25k" },
  { id: "25k-50k", label: "£25k – £50k" },
  { id: "50k-100k", label: "£50k – £100k" },
  { id: "100k+", label: "£100k+" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedType, setSelectedType] = useState("website");
  const [selectedBudget, setSelectedBudget] = useState("25k-50k");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side quick check
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please provide a valid work email address.");
      return;
    }
    if (message.trim().length < 10) {
      setError("Please provide a brief with at least 10 characters.");
      return;
    }
    if (message.trim().length > 5000) {
      setError("Brief cannot exceed 5,000 characters.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company.trim() || undefined,
          projectType: selectedType,
          budget: selectedBudget,
          message: message.trim(),
          source: "contact-page",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit project brief. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected network error occurred. Please try again or email hello@avorria.com.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-10 md:p-14 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-lime)]/40 shadow-[0_0_50px_rgba(214,255,63,0.12)] text-center space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-lime)]/10 text-[var(--color-lime)] flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] font-bold block">
            CONFIRMATION #AVR-{Math.floor(1000 + Math.random() * 9000)}
          </span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase">
            BRIEF RECEIVED AVG 7H 42M
          </h3>
          <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-md mx-auto leading-relaxed pt-2">
            Our founding partners review incoming briefs twice daily. You will receive an initial architectural assessment and scheduling link within an average of 7 hours and 42 minutes.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] max-w-sm mx-auto flex items-center justify-center gap-2 text-xs font-mono text-white/80">
          <Clock size={14} className="text-[var(--color-lime)]" />
          <span>Priority Triage Assigned to Senior Partner</span>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage("");
            }}
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-lime)] transition-colors underline cursor-pointer"
          >
            Submit an additional project brief →
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2.5">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Work Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block"
          >
            Your Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            disabled={isLoading}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Vance"
            className="w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-2xl px-5 py-4 font-body text-white placeholder:text-[var(--color-muted)]/40 focus:outline-none focus:border-[var(--color-lime)] transition-colors duration-200 disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block"
          >
            Work Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-2xl px-5 py-4 font-body text-white placeholder:text-[var(--color-muted)]/40 focus:outline-none focus:border-[var(--color-lime)] transition-colors duration-200 disabled:opacity-50"
          />
        </div>
      </div>

      {/* Row 2: Company */}
      <div className="space-y-2">
        <label
          htmlFor="contact-company"
          className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block"
        >
          Company or Brand Name
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          disabled={isLoading}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme Global Inc."
          className="w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-2xl px-5 py-4 font-body text-white placeholder:text-[var(--color-muted)]/40 focus:outline-none focus:border-[var(--color-lime)] transition-colors duration-200 disabled:opacity-50"
        />
      </div>

      {/* Type Pills */}
      <div className="space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block">
          Project Architecture Type
        </span>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                disabled={isLoading}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 ${
                  isSelected
                    ? "bg-white text-black font-semibold border border-white shadow-sm"
                    : "bg-[var(--color-panel)] text-[var(--color-muted)] hover:text-white border border-[var(--color-border)] hover:border-white/20"
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Pills */}
      <div className="space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block">
          Target Capital Budget
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {BUDGET_RANGES.map((budget) => {
            const isSelected = selectedBudget === budget.id;
            return (
              <button
                key={budget.id}
                type="button"
                disabled={isLoading}
                onClick={() => setSelectedBudget(budget.id)}
                className={`py-3 px-3 rounded-xl text-xs font-mono text-center tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 ${
                  isSelected
                    ? "bg-white text-black font-semibold border border-white shadow-sm"
                    : "bg-[var(--color-panel)] text-[var(--color-muted)] hover:text-white border border-[var(--color-border)] hover:border-white/20"
                }`}
              >
                {budget.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block"
        >
          Mission Brief & Timeline *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          disabled={isLoading}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're building, target delivery date, current pain points, and any technical constraints..."
          className="w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-2xl px-5 py-4 font-body text-white placeholder:text-[var(--color-muted)]/40 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none disabled:opacity-50"
        />
      </div>

      {/* Submit Button with Loading Spinner */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 py-4.5 rounded-full bg-white text-black font-display font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-all duration-200 cursor-pointer shadow-lg disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin text-black" />
            <span>Transmitting Brief...</span>
          </>
        ) : (
          <>
            <span>Submit Project Brief</span>
            <Send size={15} />
          </>
        )}
      </button>

      <p className="text-center font-mono text-[11px] text-[var(--color-muted)]">
        Strict NDA guaranteed · Direct review by founding partners · No junior sales spam
      </p>
    </form>
  );
}
