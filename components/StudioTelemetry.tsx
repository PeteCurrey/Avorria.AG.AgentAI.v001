"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Zap, Radio } from "lucide-react";

export default function StudioTelemetry() {
  const [londonTime, setLondonTime] = useState<string>("--:--:--");
  const [nyTime, setNyTime] = useState<string>("--:--:--");
  const [londonOpen, setLondonOpen] = useState(false);
  const [nyOpen, setNyOpen] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // London Time
      const londonStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLondonTime(londonStr);

      const londonHour = parseInt(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "numeric",
          hour12: false,
        }).format(now),
        10
      );
      setLondonOpen(londonHour >= 9 && londonHour < 18);

      // New York Time
      const nyStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setNyTime(nyStr);

      const nyHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          hour12: false,
        }).format(now),
        10
      );
      setNyOpen(nyHour >= 9 && nyHour < 18);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-arch p-6 md:p-8 bg-[var(--color-panel)] border border-[var(--color-border)] mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <Radio className="w-4 h-4 text-[var(--color-lime)] animate-pulse" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-medium">
              Live Studio Telemetry
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-muted)] ml-3">
              Transatlantic Grid · Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
          <span className="font-mono text-xs text-[var(--color-lime)] uppercase tracking-wider">
            {londonOpen || nyOpen ? "Active Sprint Window" : "Standby / Queue Open"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* London Studio */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--color-muted)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                London Lab
              </span>
              <span className="font-mono text-[10px] text-[var(--color-muted)]">
                51.5233° N, 0.0827° W
              </span>
            </div>
            <span
              className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded tracking-wider ${
                londonOpen
                  ? "bg-[var(--color-lime)]/10 text-[var(--color-lime)] border border-[var(--color-lime)]/30"
                  : "bg-white/5 text-[var(--color-muted)] border border-white/10"
              }`}
            >
              {londonOpen ? "Open · Design" : "Standby"}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-white tabular-nums">
              {londonTime}
            </span>
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
              BST / GMT
            </span>
          </div>
        </div>

        {/* New York Studio */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--color-muted)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                New York Lab
              </span>
              <span className="font-mono text-[10px] text-[var(--color-muted)]">
                40.7223° N, 74.0004° W
              </span>
            </div>
            <span
              className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded tracking-wider ${
                nyOpen
                  ? "bg-[var(--color-lime)]/10 text-[var(--color-lime)] border border-[var(--color-lime)]/30"
                  : "bg-white/5 text-[var(--color-muted)] border border-white/10"
              }`}
            >
              {nyOpen ? "Open · Engineering" : "Standby"}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-white tabular-nums">
              {nyTime}
            </span>
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
              EDT / EST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
