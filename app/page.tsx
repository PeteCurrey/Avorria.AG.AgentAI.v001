import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Work from "@/components/Work";
import AILab from "@/components/AILab";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  // Override default: home page title is the brand statement, not template
  title: "Avorria — Performance-First Immersive Websites & AI Systems | UK + USA",
  description:
    "Award-winning digital agency in London & New York. We craft immersive WebGL websites, Next.js applications and autonomous AI systems for ambitious brands worldwide.",
  alternates: {
    canonical: "https://avorria.com",
  },
  openGraph: {
    url: "https://avorria.com",
    title: "Avorria — Performance-First Immersive Websites & AI Systems | UK + USA",
    description:
      "Award-winning digital agency in London & New York. Immersive WebGL websites + autonomous AI systems.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Avorria — Performance-First Digital Agency, London & New York",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Work />
      <AILab />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
