"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment counter to 100 with random steps to reach 100 in ~1.4s
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Allow 200ms at 100% before triggering the 0.9s slide up exit
          setTimeout(() => {
            setComplete(true);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 9) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

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
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[300] flex flex-col justify-between bg-black p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              AVORRIA LDN-NYC
            </span>
            <span className="font-body text-xs uppercase tracking-widest text-[var(--color-lime)] flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] animate-ping" />
              Initializing
            </span>
          </div>

          {/* Huge Counter 0 - 100% */}
          <div className="my-auto flex flex-col items-start justify-center">
            <div className="font-display font-bold text-[clamp(4.5rem,18vw,14rem)] leading-[0.85] tracking-[-0.05em] text-white tabular-nums flex items-baseline">
              <span>{count}</span>
              <span className="text-[var(--color-lime)] text-[0.45em] ml-2">%</span>
            </div>
            <p className="mt-4 font-body text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Performance-First Immersive Experiences
            </p>
          </div>

          {/* Bottom Lime Progress Bar */}
          <div className="w-full space-y-3">
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[var(--color-lime)] shadow-[0_0_12px_rgba(214,255,63,0.8)]"
                style={{ width: `${count}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-mono">
              <span>UK (GMT) · USA (EST)</span>
              <span>Systems Online</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
