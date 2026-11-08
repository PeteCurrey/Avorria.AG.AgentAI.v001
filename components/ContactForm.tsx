"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trackBriefStep, trackBriefCompletion } from "@/lib/analytics";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";

// STEP 01: What do you need?
const NEED_OPTIONS = [
  "Website design and development",
  "Website redevelopment",
  "AI development",
  "Business automation",
  "Digital systems and integrations",
  "Technical SEO",
  "E-commerce",
  "Something else",
];

// STEP 02: What are you trying to achieve?
const OBJECTIVE_OPTIONS = [
  "Generate more business",
  "Improve customer experience",
  "Modernise existing technology",
  "Reduce operational workload",
  "Introduce AI into the business",
  "Launch a new product or platform",
  "Improve search visibility",
  "Explore a new opportunity",
];

// STEP 04: Project Parameters
const TIMESCALE_OPTIONS = [
  "Immediately (Next 2–4 Weeks)",
  "Q1 / Q2 Milestone (1–3 Months)",
  "Future Roadmap (3–6 Months)",
  "Flexible / Scope Dependent",
];

const BUDGET_OPTIONS = [
  "£14,000 – £25,000 / $18k – $32k",
  "£25,000 – £50,000 / $32k – $65k",
  "£50,000 – £100,000 / $65k – $130k",
  "£100,000+ / $130k+",
  "Alternative / Custom Budget",
];

const URGENCY_OPTIONS = ["Critical Priority", "High Priority", "Standard Schedule", "Exploratory"];
const SCOPED_OPTIONS = ["Fully Scoped Specification", "Outline Requirements Only", "Unscoped / Need Guidance"];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [useAIAssistant, setUseAIAssistant] = useState(false);

  // Form State
  const [needs, setNeeds] = useState<string[]>([]);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [businessName, setBusinessName] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [projectBackground, setProjectBackground] = useState("");
  const [existingTech, setExistingTech] = useState("");
  const [mainRequirements, setMainRequirements] = useState("");

  const [timescale, setTimescale] = useState(TIMESCALE_OPTIONS[1]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [customBudget, setCustomBudget] = useState("");
  const [urgency, setUrgency] = useState(URGENCY_OPTIONS[1]);
  const [alreadyScoped, setAlreadyScoped] = useState(SCOPED_OPTIONS[1]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Auto-populate from URL query params (e.g. contextual CTAs /services, /journal)
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service")?.toLowerCase();
    const needParam = params.get("need");
    const nameParam = params.get("name");
    const emailParam = params.get("email");

    if (nameParam) setName(nameParam);
    if (emailParam) setEmail(emailParam);

    const initialNeeds: string[] = [];
    if (serviceParam === "build") {
      initialNeeds.push("Website design and development");
    } else if (serviceParam === "ai") {
      initialNeeds.push("AI development", "Business automation");
    } else if (serviceParam === "systems") {
      initialNeeds.push("Digital systems and integrations");
    } else if (serviceParam === "search") {
      initialNeeds.push("Technical SEO");
    }

    if (needParam && NEED_OPTIONS.includes(needParam) && !initialNeeds.includes(needParam)) {
      initialNeeds.push(needParam);
    }

    if (initialNeeds.length > 0) {
      setNeeds((prev) => Array.from(new Set([...prev, ...initialNeeds])));
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Submission State
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // AI Assistant Interaction State
  const [aiClarification, setAiClarification] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  // Generate a stable brief reference ID once on mount (useState initialiser runs once)
  const [briefId] = useState<string>(() => `AVORRIA-${100000 + Math.floor(Math.random() * 900000)}`);

  const toggleSelection = (item: string, list: string[], setList: (val: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const runAIAssistant = () => {
    if (needs.length === 0 && objectives.length === 0) {
      setAiClarification("Please select at least one capability or objective in Steps 1 & 2 so I can recommend specific architecture questions.");
      return;
    }
    const questions: string[] = [];
    if (needs.some((n) => n.includes("Website") || n.includes("E-commerce"))) {
      questions.push("What is your current CMS or backend (e.g. WordPress, Shopify, custom)?");
      questions.push("Are custom interactive 3D configurators or WebGL visualizers required?");
    }
    if (needs.some((n) => n.includes("AI") || n.includes("automation"))) {
      questions.push("Where does your source knowledge live (e.g. PDFs, private SQL, Notion wikis)?");
      questions.push("Will the agent require write-access to your ERP/CRM, or read-only retrieval?");
    }
    if (needs.some((n) => n.includes("SEO") || n.includes("systems"))) {
      questions.push("Are you experiencing international crawl indexing delays or high TTFB latency?");
    }
    if (questions.length === 0) {
      questions.push("What is the primary technical bottleneck holding back this release?");
    }
    setAiSuggestions(questions);
    setAiClarification("Based on your selected disciplines, addressing these key parameters will allow our senior directorate to return a locked fixed-price sprint quote:");
  };

  const handleNext = () => {
    setError("");
    trackBriefStep(currentStep + 1, `Step ${currentStep + 1}`);
    if (currentStep === 1 && needs.length === 0) {
      setError("Please select at least one capability you are looking to build.");
      return;
    }
    if (currentStep === 2 && objectives.length === 0) {
      setError("Please select at least one core business objective.");
      return;
    }
    if (currentStep === 3) {
      if (!businessName.trim()) {
        setError("Please provide your business or organisation name.");
        return;
      }
      if (!projectBackground.trim() && !mainRequirements.trim()) {
        setError("Please outline your project background or key requirements.");
        return;
      }
    }
    if (currentStep === 5) {
      if (name.trim().length < 2) {
        setError("Please provide your full name.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setError("Please provide a valid work email address.");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setError("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || undefined,
        company: businessName.trim(),
        website: currentWebsite.trim() || undefined,
        industry: industry.trim() || undefined,
        needs,
        objectives,
        background: projectBackground.trim(),
        existingTech: existingTech.trim() || undefined,
        mainRequirements: mainRequirements.trim(),
        timescale,
        budget: budget === "Alternative / Custom Budget" && customBudget ? customBudget.trim() : budget,
        urgency,
        alreadyScoped,
        message: `Needs: ${needs.join(", ")} | Objectives: ${objectives.join(", ")} | Background: ${projectBackground} | Tech: ${existingTech} | Scope: ${alreadyScoped}`,
        source: "guided-commissioning-experience",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission could not be completed. Please try again.");
      }

      setSubmitted(true);
      trackBriefCompletion(needs, budget);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected network error occurred. Please try again or email london@avorria.com.");
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
        transition={{ duration: 0.4 }}
        className="p-10 md:p-14 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-lime)]/40 shadow-[0_0_50px_rgba(214,255,63,0.12)] text-center space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-lime)]/10 text-[var(--color-lime)] flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
          Commissioning Brief Received
        </span>

        <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
          Thank you, {name.split(" ")[0]}.
        </h3>

        <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
          Your project brief has been securely routed directly to our founding partners in London and New York. We will review your objectives and return a structured scope assessment within 24 hours.
        </p>

        <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-white/5 max-w-md mx-auto text-xs font-mono text-white/70 space-y-1">
          <div>Organisation: {businessName}</div>
          <div>Selected Disciplines: {needs.join(", ")}</div>
          <div>Reference: {briefId}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Step Progress Telemetry Header */}
      <div className="pb-8 border-b border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Guided Commissioning Experience
          </span>
          <h2 className="font-display font-semibold text-xl md:text-2xl text-white">
            {currentStep === 1 && "Step 01: What do you need to build?"}
            {currentStep === 2 && "Step 02: What are you trying to achieve?"}
            {currentStep === 3 && "Step 03: Tell us about the project."}
            {currentStep === 4 && "Step 04: Project parameters & investment."}
            {currentStep === 5 && "Step 05: Your contact details."}
            {currentStep === 6 && "Step 06: Review your project brief."}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s === currentStep
                  ? "w-8 bg-[var(--color-lime)]"
                  : s < currentStep
                  ? "w-3 bg-white/40"
                  : "w-3 bg-white/10"
              }`}
            />
          ))}
          <span className="font-mono text-xs text-white/50 ml-2">0{currentStep}/06</span>
        </div>
      </div>

      {/* Form Content Steps */}
      <div className="py-8 min-h-[360px]">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300 flex items-center gap-2">
            <AlertCircle size={15} />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 01: What do you need? */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <p className="font-body text-xs md:text-sm text-[var(--color-muted)] mb-6">
              Select one or more core engineering disciplines required for your engagement:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NEED_OPTIONS.map((opt) => {
                const isSelected = needs.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleSelection(opt, needs, setNeeds)}
                    className={`p-4 rounded-2xl border text-left font-display font-medium text-xs md:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[var(--color-lime)] text-[var(--color-bg)] border-[var(--color-lime)] font-bold shadow-md"
                        : "bg-[var(--color-bg)] border-[var(--color-border)] text-white hover:border-white/20"
                    }`}
                  >
                    <span>{opt}</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${isSelected ? "border-[var(--color-bg)] bg-[var(--color-bg)] text-[var(--color-lime)]" : "border-white/20"}`}>
                      {isSelected ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 02: Objectives */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <p className="font-body text-xs md:text-sm text-[var(--color-muted)] mb-6">
              What are the primary commercial goals driving this investment?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OBJECTIVE_OPTIONS.map((opt) => {
                const isSelected = objectives.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleSelection(opt, objectives, setObjectives)}
                    className={`p-4 rounded-2xl border text-left font-display font-medium text-xs md:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[var(--color-lime)] text-[var(--color-bg)] border-[var(--color-lime)] font-bold shadow-md"
                        : "bg-[var(--color-bg)] border-[var(--color-border)] text-white hover:border-white/20"
                    }`}
                  >
                    <span>{opt}</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${isSelected ? "border-[var(--color-bg)] bg-[var(--color-bg)] text-[var(--color-lime)]" : "border-white/20"}`}>
                      {isSelected ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 03: Project Details */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Business Name *</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Current Website (if applicable)</label>
                <input
                  type="text"
                  value={currentWebsite}
                  onChange={(e) => setCurrentWebsite(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Industry Sector</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Fintech, Healthcare, D2C"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Project Background &amp; Current Bottlenecks *</label>
              <textarea
                rows={3}
                value={projectBackground}
                onChange={(e) => setProjectBackground(e.target.value)}
                placeholder="What prompted this initiative? What limitations are you facing currently?"
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Existing Technology / Stack</label>
                <input
                  type="text"
                  value={existingTech}
                  onChange={(e) => setExistingTech(e.target.value)}
                  placeholder="e.g. Shopify, Next.js, WordPress, Salesforce"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Key Technical Requirements</label>
                <input
                  type="text"
                  value={mainRequirements}
                  onChange={(e) => setMainRequirements(e.target.value)}
                  placeholder="e.g. Sub-second LCP, 3D configurator, Private RAG"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 04: Parameters */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-2">Desired Timescale</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TIMESCALE_OPTIONS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimescale(t)}
                    className={`p-3.5 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                      timescale === t
                        ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-bold border-[var(--color-lime)]"
                        : "bg-[var(--color-bg)] border-[var(--color-border)] text-white hover:border-white/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-2">Indicative Investment Tier</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`p-3.5 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                      budget === b
                        ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-bold border-[var(--color-lime)]"
                        : "bg-[var(--color-bg)] border-[var(--color-border)] text-white hover:border-white/20"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {budget === "Alternative / Custom Budget" && (
                <input
                  type="text"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  placeholder="Specify anticipated budget tier..."
                  className="mt-3 w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white focus:outline-none focus:border-[var(--color-lime)]"
                />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-2">Project Urgency</label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-xs font-mono text-white focus:outline-none focus:border-[var(--color-lime)]"
                >
                  {URGENCY_OPTIONS.map((u) => (
                    <option key={u} value={u} className="bg-black text-white">
                      {u}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-2">Scope Status</label>
                <select
                  value={alreadyScoped}
                  onChange={(e) => setAlreadyScoped(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-xs font-mono text-white focus:outline-none focus:border-[var(--color-lime)]"
                >
                  {SCOPED_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-black text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 05: Contact Details */}
        {currentStep === 5 && (
          <div className="space-y-6 max-w-lg">
            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Your Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Business Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Telephone Number (Optional)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 20 ... or +1 212 ..."
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
              />
            </div>
          </div>
        )}

        {/* STEP 06: Review & Submit */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="font-display font-bold text-lg text-white">Project Commissioning Summary</span>
                <span className="font-mono text-xs text-[var(--color-lime)]">Ready for Partner Review</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[var(--color-muted)] block">Client Contact:</span>
                  <p className="text-white font-medium">{name} ({email})</p>
                  {phone && <p className="text-white/70">{phone}</p>}
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block">Business:</span>
                  <p className="text-white font-medium">{businessName} {industry ? `· ${industry}` : ""}</p>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block">Requested Disciplines:</span>
                  <p className="text-white font-medium">{needs.join(", ")}</p>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block">Key Objectives:</span>
                  <p className="text-white font-medium">{objectives.join(", ")}</p>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block">Investment Tier:</span>
                  <p className="text-white font-medium">{budget === "Alternative / Custom Budget" ? customBudget : budget}</p>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block">Timescale &amp; Urgency:</span>
                  <p className="text-white font-medium">{timescale} · {urgency}</p>
                </div>
              </div>

              {projectBackground && (
                <div className="pt-2 border-t border-white/5 text-xs font-body">
                  <span className="font-mono text-[var(--color-muted)] block mb-1">Brief Summary:</span>
                  <p className="text-white/80 leading-relaxed">{projectBackground}</p>
                </div>
              )}
            </div>

            {/* Optional AI Briefing Assistant */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display text-xs font-semibold text-white">
                  <Sparkles size={14} className="text-[var(--color-lime)]" />
                  Optional AI Brief Clarification
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setUseAIAssistant(!useAIAssistant);
                    if (!useAIAssistant) runAIAssistant();
                  }}
                  className="text-[11px] font-mono text-[var(--color-lime)] hover:underline cursor-pointer"
                >
                  {useAIAssistant ? "Hide Clarifications" : "Review Recommended Questions"}
                </button>
              </div>

              {useAIAssistant && (
                <div className="pt-2 space-y-2 text-xs font-body text-[var(--color-muted)]">
                  <p>{aiClarification}</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-white/80">
                    {aiSuggestions.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                  <span className="font-mono text-[10px] text-white/40 block mt-2">
                    * AI assistant recommendations are advisory and do not form binding contractual terms.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons: Back, Next, Submit */}
      <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={13} />
            <span>Back</span>
          </button>
        ) : (
          <span />
        )}

        {currentStep < 6 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-md"
          >
            <span>Proceed</span>
            <ArrowRight size={13} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-[0_0_25px_rgba(214,255,63,0.3)] disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Submitting Brief...</span>
              </>
            ) : (
              <>
                <span>CONFIRM &amp; DISPATCH BRIEF</span>
                <Send size={13} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
