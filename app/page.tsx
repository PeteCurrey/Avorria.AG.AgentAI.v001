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
  // Brand positioning: Digital Development & Applied Intelligence
  title: "Avorria — Digital Development & Applied Intelligence | London · New York",
  description:
    "We turn ambitious ideas into exceptional digital experiences and intelligent business systems. Bespoke web development, real-time 3D, and applied AI for ambitious businesses.",
  alternates: {
    canonical: "https://avorria.com",
  },
  openGraph: {
    url: "https://avorria.com",
    title: "Avorria — Digital Development & Applied Intelligence | London · New York",
    description:
      "We turn ambitious ideas into exceptional digital experiences and intelligent business systems. Web development, real-time 3D, and applied AI.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Avorria — Digital Development & Applied Intelligence, London & New York",
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
