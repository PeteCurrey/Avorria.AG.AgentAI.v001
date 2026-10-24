"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Elegant progression to 100 in ~1.2s
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setComplete(true);
          }, 150);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="avorria-preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[300] flex flex-col justify-between bg-[#07070A] p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/80 font-medium">
              AVORRIA · LONDON &amp; NEW YORK
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
              EST. 2022
            </span>
          </div>

          {/* Center Monolithic Counter */}
          <div className="my-auto flex flex-col items-start justify-center max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3">
              DIGITAL FLAGSHIP PRACTICE
            </span>
            <div className="font-display font-medium text-[clamp(4.5rem,16vw,12rem)] leading-[0.9] tracking-[-0.04em] text-white tabular-nums flex items-baseline">
              <span>{count < 10 ? `00${count}` : count < 100 ? `0${count}` : count}</span>
              <span className="text-[var(--color-muted)] text-[0.35em] ml-3 font-mono font-normal">
                / 100
              </span>
            </div>
          </div>

          {/* Bottom Hairline Progress Indicator */}
          <div className="w-full space-y-3">
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                style={{ width: `${count}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-mono">
              <span>GB (GMT) · US (EST)</span>
              <span>INDEXING PRODUCTION ENVIRONMENT</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
