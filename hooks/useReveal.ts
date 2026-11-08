"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

/**
 * useReveal — returns a ref and a boolean `isVisible`.
 *
 * Uses Framer Motion's useInView with `once: true` so elements animate
 * in once and stay visible — no flicker on scroll-back.
 *
 * @param options  Optional UseInViewOptions (threshold, margin, etc.)
 */
export function useReveal(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, {
    once: true,
    margin: "0px 0px -60px 0px",
    ...options,
  });

  return { ref, isVisible };
}
