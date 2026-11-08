import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Database, Workflow, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import AgentPipelineDemo from "@/components/services/AgentPipelineDemo";


const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://avorria.com/services/ai#service",
      name: "AI Development & Business Automation",
      serviceType: "Applied Artificial Intelligence & Automation",
      description: "Practical AI solutions that automate processes, connect business knowledge, and create operational leverage. Private RAG pipelines, deterministic multi-agent routing, and strict zero-leakage security.",
      provider: {
        "@type": "Organization",
        "@id": "https://avorria.com/#organization",
        name: "Avorria",
        url: "https://avorria.com"
      },
      areaServed: ["GB", "US"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://avorria.com/services/ai#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avorria.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avorria.com/services" },
        { "@type": "ListItem", position: 3, name: "AI Development & Business Automation", item: "https://avorria.com/services/ai" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "AI Development & Business Automation — Applied Systems",
  description:
    "Practical AI solutions that automate processes, connect business knowledge, and create operational leverage. Private RAG pipelines, deterministic multi-agent routing, and strict zero-leakage security.",
  alternates: { canonical: "https://avorria.com/services/ai" },
};

const PROBLEMS = [
  {
    num: "01",
    title: "Siloed Corporate Knowledge",
    description:
      "Critical institutional intelligence is scattered across unsearchable PDFs, internal Notion wikis, legacy ERPs, and disconnected emails, forcing teams into duplicate effort.",
  },
  {
    num: "02",
    title: "Unreliable Public LLM Hallucinations",
    description:
      "Consumer AI tools invent unverified data, lack determinism, and leak proprietary business data into public training sets, risking compliance failure.",
  },
  {
    num: "03",
    title: "Operational Drag & Manual Bottlenecks",
    description:
      "High-value leadership and engineering talent spend 30%+ of their working week performing repetitive triage, data reconciliation, and drafting workflows.",
  },
];

const DELIVERABLES = [
  {
    title: "Connected Knowledge & Enterprise RAG",
    description: "Private vector databases with semantic search that query across your databases and documents with verified citations.",
  },
  {
    title: "Multi-Agent Workflow Orchestration",
    description: "Autonomous task networks that route requests, reconcile discrepancies, and execute multi-step business actions.",
  },
  {
    title: "Deterministic Safety Guardrails",
    description: "Structured JSON schema validation and deterministic boundary filters to prevent hallucinated outputs.",
  },
  {
    title: "Human-in-the-Loop Review Gates",
    description: "Configurable approval interfaces that empower staff to supervise and authorize sensitive actions with one click.",
  },
  {
    title: "Private Vector DB Indexing",
    description: "Isolated vector deployments (Qdrant, Milvus) with SOC-2 type II compliance and zero public model training.",
  },
  {
    title: "Real-Time Telemetry & Traces",
    description: "End-to-end audit logs, token cost tracking, and latency analytics to maintain full governance.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Knowledge Audit & Security", detail: "Data discovery, boundary mapping, and compliance architecture." },
  { step: "02", title: "RAG & Agent Prototyping", detail: "Vector indexing, prompt engineering, and deterministic evaluation harnesses." },
  { step: "03", title: "Integration & Hardening", detail: "ERP/CRM webhook bridges, human approval workflows, and latency optimization." },
  { step: "04", title: "Deployment & Governance", detail: "Private VPC rollout, staff training, and live telemetry monitoring." },
];

const FAQS = [
  {
    q: "Is our proprietary company data used to train public AI models?",
    a: "Never. We enforce strict enterprise zero-data-retention agreements and configure private VPC vector endpoints. Your data remains strictly your intellectual property.",
  },
  {
    q: "What does the starting investment cover?",
    a: "Engagements start from £16,000 / $20,000 for a 4–8 week sprint delivering a production-ready RAG pipeline or multi-agent automation workflow with human-in-the-loop review.",
  },
  {
    q: "How do you eliminate AI hallucinations?",
    a: "We implement cross-encoder re-ranking, strict chunk boundary detection, and deterministic JSON-schema validation gates. If high confidence is not attained, the system falls back gracefully to human staff.",
  },
  {
    q: "Can this integrate with our legacy software?",
    a: "Yes. We build custom Next.js edge middleware and REST/GraphQL bridges that connect cleanly with legacy SQL, Salesforce, HubSpot, SAP, and custom internal APIs.",
  },
];

export default function AIDevelopmentServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* 01. DISTINCTIVE HERO */}
      <PageHero
        eyebrow="02 / AI Development & Business Automation"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.6rem,7vw,6.8rem)] leading-[0.96] tracking-tight text-white uppercase">
            APPLIED AI FOR<br />
            <span className="text-gradient-lime">OPERATIONAL LEVERAGE.</span>
          </h1>
        }
        body={
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl leading-relaxed">
              Practical AI solutions that automate processes, connect business knowledge, and create operational leverage. Zero novelty — pure compounding commercial value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-display font-medium text-xs sm:text-sm hover:bg-[var(--color-lime)] transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <span className="font-mono text-xs text-white/50">
                Starting from £16,000 / $20,000 · 4–8 Weeks
              </span>
            </div>
          </div>
        }
        className="pb-20"
      />

      {/* 02. THE BUSINESS PROBLEM */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              The Operational Challenge
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Why unstructured manual workflows throttle scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((p) => (
              <div
                key={p.num}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-lime)] block mb-4">{p.num}</span>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. THE AVORRIA APPROACH */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
              The Applied Approach
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Deterministic systems. Zero hallucinations.
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              We treat AI not as a consumer chatbot, but as high-precision software infrastructure. By combining semantic vector retrieval, structured validation schemas, and human-in-the-loop signoffs, we convert fragile experimental prompts into robust business engines.
            </p>
          </div>
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Strict zero-model-training data protection</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Deterministic JSON schema outputs with citation traceability</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Human-in-the-loop approval gates for mission-critical actions</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Dedicated senior AI engineering leadership on every engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. WHAT WE BUILD */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Capabilities &amp; Scope
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              What we design and engineer.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((d, i) => (
              <div
                key={i}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/20 transition-colors duration-200"
              >
                <h3 className="font-display font-semibold text-lg text-white mb-2">{d.title}</h3>
                <p className="font-body text-xs md:text-sm text-[var(--color-muted)] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. INTERACTIVE DEMONSTRATION */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Interactive Execution Trace
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Live Knowledge &amp; Workflow Routing Simulator
            </h2>
          </div>
          <AgentPipelineDemo />
        </div>
      </section>

      {/* 06. OUR TECHNOLOGY */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Technology Stack
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Enterprise AI infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Vector Search</span>
              <h4 className="font-display font-semibold text-lg text-white">Qdrant &amp; Milvus</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Sub-25ms semantic vector indexing and partitioned tenant memory.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Orchestration</span>
              <h4 className="font-display font-semibold text-lg text-white">LangGraph &amp; DSPy</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Deterministic stateful agent networks and self-healing evaluation loops.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Security Boundary</span>
              <h4 className="font-display font-semibold text-lg text-white">Private VPC Endpoints</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Zero public internet routing and strict cryptographic verification.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Edge Routing</span>
              <h4 className="font-display font-semibold text-lg text-white">Next.js Edge Middleware</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Sub-100ms streaming responses via Server-Sent Events (SSE).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. BUSINESS VALUE */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Practical Outcomes
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              How business leverage is measured.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Time Reclamation</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Hundreds of manual operational hours reclaimed per month by automating document triage and lead qualification.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Decisional Speed</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Cross-team questions resolved in seconds with cited source links rather than waiting days for department responses.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Audit Compliance</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Complete cryptographic transparency over every automated decision with full human override capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. RELEVANT PROJECTS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
                Verified Case Studies
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Work engineered with this service.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-lime)] hover:text-white transition-colors"
            >
              <span>View All 5 Case Studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/work/vanta-ai"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Vanguard AI</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                Autonomous enterprise operations &amp; intelligent agent orchestration
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                In-browser multi-agent sandbox demonstrating real-time request routing and deterministic task completion.
              </p>
            </Link>

            <Link
              href="/work/axiom-finance"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Axiom Finance</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                High-throughput financial intelligence platform
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Automated risk assessment models integrated with real-time WebGL data streams.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 09. DELIVERY PROCESS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Delivery Governance
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              The four-stage production sprint.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]"
              >
                <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">{step.step}</span>
                <h4 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h4>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px] max-w-4xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Commercial FAQ
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-2"
              >
                <h3 className="font-display font-semibold text-lg text-white">{faq.q}</h3>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONVERSION */}
      <CTA />
    </>
  );
}
