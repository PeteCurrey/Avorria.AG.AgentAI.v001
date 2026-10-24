import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tell Us The Mission — Start Your Project",
  description:
    "Ready to build something remarkable? Tell us the mission. We respond within an average of 7h 42m. Studios in London (EC2A) and New York (NY 10013).",
  alternates: { canonical: "https://avorria.com/contact" },
  openGraph: {
    url: "https://avorria.com/contact",
    title: "Tell Us The Mission — Start Your Project | Avorria",
    description:
      "Tell us what you're building. Studios in London & New York. Direct partner access.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Contact Avorria — Tell Us The Mission" }],
  },
};

const OFFICES = [
  {
    city: "London Studio",
    address: "Shoreditch High St, London EC2A 4NE, UK",
    hours: "09:00 – 18:00 GMT",
    email: "london@avorria.com",
  },
  {
    city: "New York Studio",
    address: "Spring St, SoHo, New York NY 10013, USA",
    hours: "09:00 – 18:00 EST",
    email: "ny@avorria.com",
  },
];

const WHAT_HAPPENS_NEXT = [
  {
    step: "01",
    title: "Brief Triage (Avg 7h 42m)",
    description:
      "Our founding partners review your technical scope, architecture feasibility, and milestone constraints directly.",
  },
  {
    step: "02",
    title: "30-Min Technical Spike",
    description:
      "A fast, focused conversation with senior staff to pressure-test goals, review existing codebases, and align timeline expectations.",
  },
  {
    step: "03",
    title: "Guaranteed Scope & Proposal",
    description:
      "A comprehensive, fixed-fee sprint plan with locked delivery dates, SLA guarantees, and zero ambiguous scope creep.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-40 pb-16 container-px mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Initiate Project
          </span>
        </div>

        {/* Required H1 */}
        <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase mb-8">
          TELL US THE<br />
          <span className="text-gradient-lime">MISSION.</span>
        </h1>

        <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Whether you need a full digital flagship rebuild, custom WebGL artistry, or autonomous AI systems — we review incoming briefs twice daily.
        </p>
      </section>

      {/* ── Contact Grid: Left Info & 3-Step / Right Form ── */}
      <section className="border-t border-[var(--color-border)] pb-28">
        <div className="container-px mx-auto max-w-[1440px] py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact info LDN/NYC + 3-step What Happens Next (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Studios */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-6">
                Transatlantic Hubs
              </span>
              <div className="space-y-6">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-2 group hover:border-[var(--color-lime)]/40 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-display font-bold text-lg text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                        {office.city}
                      </h2>
                      <span className="font-mono text-[11px] text-[var(--color-muted)]">
                        {office.hours}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[var(--color-muted)] flex items-center gap-2">
                      <MapPin size={13} className="text-[var(--color-lime)] shrink-0" />
                      <span>{office.address}</span>
                    </p>
                    <a
                      href={`mailto:${office.email}`}
                      className="font-mono text-xs text-[var(--color-lime)] hover:underline inline-block pt-1"
                    >
                      {office.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Step What Happens Next */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-6">
                What Happens Next
              </span>
              <div className="space-y-4">
                {WHAT_HAPPENS_NEXT.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] flex items-start gap-4"
                  >
                    <span className="font-mono font-bold text-lg text-[var(--color-lime)] shrink-0">
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-white">
                        {step.title}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-[var(--color-muted)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] flex items-center gap-4 text-xs font-mono text-[var(--color-muted)]">
              <ShieldCheck size={28} className="text-[var(--color-lime)] shrink-0" />
              <span>Mutual NDA sent immediately upon request · Strict IP ownership</span>
            </div>
          </div>

          {/* Right Column: ContactForm (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] shadow-xl">
            <div className="mb-8 pb-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block mb-1">
                  Direct Inbound
                </span>
                <h2 className="font-display font-bold text-2xl text-white">
                  Project Brief Submission
                </h2>
              </div>
              <span className="font-mono text-xs text-[var(--color-muted)]">
                Response SLA: 7h 42m
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
