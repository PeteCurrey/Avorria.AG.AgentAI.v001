"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value from 0 to `end` when `trigger` becomes true.
 * Supports prefixes (e.g. "£", "+"), suffixes (e.g. "%", "+", "×"),
 * and non-numeric passthrough (returns the raw value unchanged).
 *
 * @param rawValue  The display string, e.g. "47+", "£14M+", "94%", "100"
 * @param trigger   Boolean — starts the count when it flips true
 * @param duration  Animation duration in ms (default 1200)
 */
export function useCountUp(
  rawValue: string,
  trigger: boolean,
  duration = 1200
): string {
  // Parse: extract prefix, numeric part, suffix
  const match = rawValue.match(/^([£\$+\-]?\s*)(\d+(?:\.\d+)?)(.*?)$/);

  const [display, setDisplay] = useState<string>(rawValue);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger || !match) return;

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3]; // e.g. "M+", "%", "+"

    startRef.current = null;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, rawValue, duration, match]);

  // Non-numeric passthrough
  if (!match) return rawValue;

  return display;
}
