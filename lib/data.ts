// lib/data.ts — Avorria content data

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  year: number;
  cover: string;
  images: string[];
  description: string;
  url?: string;
  featured: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  readTime: number;
  author: string;
};

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "axiom-finance",
    title: "Axiom Finance",
    tagline: "Redefining digital banking through immersive design",
    category: "Web Design & Development",
    tags: ["Next.js", "Three.js", "Fintech"],
    year: 2025,
    cover: "/work/axiom-cover.jpg",
    images: ["/work/axiom-1.jpg", "/work/axiom-2.jpg"],
    description:
      "A full brand and digital transformation for a next-gen UK fintech. We crafted an immersive WebGL-powered marketing site that increased onboarding conversion by 340% and earned a CSS Design Award.",
    url: "https://axiomfinance.com",
    featured: true,
  },
  {
    slug: "nocturne-studio",
    title: "Nocturne Studio",
    tagline: "Where music meets visual identity",
    category: "Brand & Digital",
    tags: ["Branding", "Motion", "GSAP"],
    year: 2025,
    cover: "/work/nocturne-cover.jpg",
    images: ["/work/nocturne-1.jpg"],
    description:
      "End-to-end brand identity and portfolio site for an LA-based music production studio. Full scroll-hijacked cinematics powered by Lenis and Framer Motion.",
    featured: true,
  },
  {
    slug: "vanta-ai",
    title: "Vanta AI",
    tagline: "Making enterprise AI feel human",
    category: "AI Product & Web",
    tags: ["AI", "SaaS", "Next.js"],
    year: 2026,
    cover: "/work/vanta-cover.jpg",
    images: ["/work/vanta-1.jpg", "/work/vanta-2.jpg"],
    description:
      "Product design and marketing site for an AI ops platform. We built a custom AI demo environment embedded in the hero, reducing time-to-wow from 3 minutes to 8 seconds.",
    url: "https://vanta.ai",
    featured: true,
  },
  {
    slug: "bloom-health",
    title: "Bloom Health",
    tagline: "A wellness brand that breathes",
    category: "Web Design & Development",
    tags: ["Health", "Motion", "Shopify"],
    year: 2025,
    cover: "/work/bloom-cover.jpg",
    images: ["/work/bloom-1.jpg"],
    description:
      "Shopify-powered DTC wellness brand with custom liquid components, particle effects and a story-first editorial design language.",
    featured: false,
  },
  {
    slug: "meridian-arc",
    title: "Meridian Arc",
    tagline: "Architecture meets digital craft",
    category: "Web Design & Development",
    tags: ["Architecture", "Three.js", "Next.js"],
    year: 2026,
    cover: "/work/meridian-cover.jpg",
    images: ["/work/meridian-1.jpg"],
    description:
      "Award-winning portfolio site for a London architectural practice. Real-time 3D model viewer, custom cursor, and Awwwards SOTD winner.",
    featured: true,
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: "web-design",
    title: "Performance Web Design",
    description:
      "Awwwards-calibre websites engineered for conversion. We marry obsessive visual craft with Core Web Vitals excellence.",
    bullets: [
      "Custom design systems",
      "Interactive prototyping",
      "Motion design & micro-interactions",
      "Core Web Vitals optimisation",
    ],
    icon: "Layers",
  },
  {
    id: "web-development",
    title: "Full-Stack Development",
    description:
      "Next.js, TypeScript, and headless CMS stacks built to scale. Clean code, fast deploys, seamless integrations.",
    bullets: [
      "Next.js & React applications",
      "Headless CMS (Sanity, Contentful)",
      "API design & integrations",
      "DevOps & CI/CD pipelines",
    ],
    icon: "Code2",
  },
  {
    id: "ai-systems",
    title: "AI Systems & Agents",
    description:
      "Custom AI infrastructure — from LLM fine-tuning to autonomous agent networks that run your business operations.",
    bullets: [
      "LLM product development",
      "RAG pipelines & knowledge bases",
      "Autonomous agent networks",
      "AI-powered content engines",
    ],
    icon: "Brain",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Full-spectrum brand strategy and identity design. Logos, type systems, motion languages and brand guidelines.",
    bullets: [
      "Brand strategy & positioning",
      "Visual identity design",
      "Motion brand language",
      "Brand guidelines & systems",
    ],
    icon: "Sparkles",
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    description:
      "Strategic creative leadership for campaigns, launches, and long-term brand narratives across all digital touchpoints.",
    bullets: [
      "Campaign concepting",
      "Art direction",
      "Content strategy",
      "Cross-channel consistency",
    ],
    icon: "Eye",
  },
  {
    id: "3d-webgl",
    title: "3D & WebGL",
    description:
      "Real-time 3D experiences powered by Three.js and WebGL shaders that run at 60fps in-browser — no plugins required.",
    bullets: [
      "WebGL shader development",
      "Three.js / R3F scenes",
      "Real-time 3D product viewers",
      "Particle systems & physics",
    ],
    icon: "Globe",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Avorria didn't just build our site — they rewrote our understanding of what digital can feel like. We won a CSS Design Award within 3 weeks of launch.",
    author: "Mia Harrington",
    role: "Head of Brand",
    company: "Axiom Finance",
  },
  {
    id: "t2",
    quote:
      "The AI agent they deployed handles 60% of our inbound ops. We went from 8 FTEs to 3 without losing a single client. Honestly transformative.",
    author: "James Okafor",
    role: "CEO",
    company: "Vanta AI",
  },
  {
    id: "t3",
    quote:
      "I've worked with agencies in London, NYC, and Berlin. Avorria's attention to craft — the micro-interactions, the timing, the feel — is in a different league.",
    author: "Sofia Delacroix",
    role: "Founder",
    company: "Nocturne Studio",
  },
  {
    id: "t4",
    quote:
      "Our Shopify revenue jumped 210% in 6 months. The site converts, but more importantly it makes people feel something. That's hard to find.",
    author: "Thomas Webb",
    role: "Marketing Director",
    company: "Bloom Health",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs: FAQ[] = [
  {
    question: "Where is Avorria based?",
    answer:
      "We're a distributed studio with teams in London, UK and New York, USA. We work with clients globally and are comfortable across all time zones.",
  },
  {
    question: "What does a typical project engagement look like?",
    answer:
      "Most projects run 8–16 weeks. We start with a discovery sprint (strategy, research, sitemap), move into design, then development and QA. You'll have a dedicated project lead throughout.",
  },
  {
    question: "What's your minimum project budget?",
    answer:
      "Our typical engagements start at £12,000 / $15,000 for web design & development. AI systems projects typically start at £18,000 / $22,000. We also offer retainer packages for ongoing work.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. Some of our favourite work has been with pre-seed and seed-stage startups. We can move fast, think scrappy-but-premium, and grow with you.",
  },
  {
    question: "Can you take over an existing website?",
    answer:
      "Yes. We regularly inherit legacy codebases, perform audits, and migrate or rebuild. We're framework-agnostic and can work with whatever stack you're on.",
  },
  {
    question: "Do you build with AI or do you just talk about it?",
    answer:
      "We build with it. Our AI Lab has shipped production LLM agents, RAG pipelines, and autonomous workflow systems for clients across finance, health, and SaaS. We eat our own cooking.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: "why-performance-is-the-new-brand",
    title: "Why Performance Is the New Brand",
    excerpt:
      "A slow website doesn't just hurt SEO — it destroys brand perception. Here's how we think about speed as a design variable, not an afterthought.",
    date: "2026-09-15",
    category: "Design Philosophy",
    cover: "/journal/perf-brand.jpg",
    readTime: 6,
    author: "Avorria Studio",
  },
  {
    slug: "building-ai-agents-that-actually-work",
    title: "Building AI Agents That Actually Work",
    excerpt:
      "Most AI agents fail in production. After shipping dozens of them, here's what we've learned about architecture, reliability, and knowing when to step back to humans.",
    date: "2026-09-01",
    category: "AI Systems",
    cover: "/journal/ai-agents.jpg",
    readTime: 10,
    author: "Avorria Studio",
  },
  {
    slug: "the-craft-of-webgl-at-scale",
    title: "The Craft of WebGL at Scale",
    excerpt:
      "Three.js gets you 80% of the way there. Shipping 60fps WebGL to real users across device classes is where the real engineering begins.",
    date: "2026-08-20",
    category: "Engineering",
    cover: "/journal/webgl-scale.jpg",
    readTime: 8,
    author: "Avorria Studio",
  },
  {
    slug: "dark-luxury-design-language",
    title: "Designing the Dark Luxury Aesthetic",
    excerpt:
      "How we define and maintain a 'dark luxury' visual language across brand, motion, and interaction — and why restraint is the hardest thing to design.",
    date: "2026-08-05",
    category: "Design Philosophy",
    cover: "/journal/dark-luxury.jpg",
    readTime: 5,
    author: "Avorria Studio",
  },
];
