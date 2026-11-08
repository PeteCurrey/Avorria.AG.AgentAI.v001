"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Activity,
  ShieldCheck,
  RefreshCw,
  Sliders,
  DollarSign,
  BarChart3,
} from "lucide-react";

export default function AxiomDemonstration() {
  const [allocation, setAllocation] = useState<number>(65);
  const [activeCurrency, setActiveCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const [riskTier, setRiskTier] = useState<"Institutional Conservative" | "Algorithmic Dynamic">("Algorithmic Dynamic");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Currency symbols and multipliers
  const currencySymbol = activeCurrency === "USD" ? "$" : activeCurrency === "EUR" ? "€" : "£";
  const currencyRate = activeCurrency === "USD" ? 1.0 : activeCurrency === "EUR" ? 0.92 : 0.79;

  // Real-time calculated metrics
  const portfolioBase = 25000000 * currencyRate;
  const simulatedYield = useMemo(() => {
    const baseRate = riskTier === "Algorithmic Dynamic" ? 8.4 : 5.2;
    return (baseRate * (allocation / 50)).toFixed(2);
  }, [allocation, riskTier]);

  const projectedAnnualRevenue = useMemo(() => {
    const rate = parseFloat(simulatedYield) / 100;
    return Math.round(portfolioBase * rate).toLocaleString();
  }, [portfolioBase, simulatedYield]);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  return (
    <div className="rounded-3xl bg-[#15171B] border border-white/10 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Header Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3657E8] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3657E8]">
              Axiom Core · High-Throughput Yield Engine
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
            Algorithmic Liquidity &amp; Yield Simulation
          </h3>
        </div>

        {/* Currency & Risk Mode Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            {(["USD", "EUR", "GBP"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setActiveCurrency(curr)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeCurrency === curr
                    ? "bg-[#3657E8] text-white font-bold shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleSimulate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-mono transition-colors"
          >
            <RefreshCw size={13} className={isSimulating ? "animate-spin text-[#3657E8]" : ""} />
            <span>Rebalance Pool</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 relative z-10">
        {/* Left Control Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-white/60 flex items-center gap-2">
                <Sliders size={14} className="text-[#3657E8]" />
                Automated Allocation Depth
              </span>
              <span className="font-mono text-xs font-bold text-[#3657E8]">{allocation}%</span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="20"
              max="95"
              value={allocation}
              onChange={(e) => setAllocation(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3657E8]"
            />

            <div className="flex justify-between text-[10px] font-mono text-white/40">
              <span>20% Low-Vol Reserve</span>
              <span>60% Balanced</span>
              <span>95% Max Alpha</span>
            </div>
          </div>

          {/* Strategy Mode Toggle */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <span className="font-mono text-xs uppercase text-white/60 block">Risk Tier Protocol</span>
            <div className="grid grid-cols-2 gap-2">
              {(["Institutional Conservative", "Algorithmic Dynamic"] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setRiskTier(tier)}
                  className={`p-3 rounded-xl text-left border text-xs font-mono transition-all ${
                    riskTier === tier
                      ? "bg-[#3657E8]/20 border-[#3657E8] text-white"
                      : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                  }`}
                >
                  <span className="block font-bold text-xs">{tier.split(" ")[0]}</span>
                  <span className="text-[10px] text-white/50">{tier.split(" ")[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Security & Audit Metric */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck size={16} />
              <span>Smart Contract Verified by Trail of Bits</span>
            </div>
            <span className="text-emerald-400/80 font-bold">0.00% Slashing</span>
          </div>
        </div>

        {/* Right Telemetry Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* Key Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3657E8]/20 via-white/[0.03] to-transparent border border-[#3657E8]/30">
              <span className="font-mono text-xs uppercase text-white/60 flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-[#3657E8]" />
                Simulated Net APY
              </span>
              <motion.div
                key={simulatedYield}
                initial={{ opacity: 0.6, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display font-black text-4xl md:text-5xl text-white tracking-tight"
              >
                {simulatedYield}%
              </motion.div>
              <span className="text-[10px] font-mono text-emerald-400 block mt-2">
                +2.4% vs. Benchmark Overnight SOFR
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-mono text-xs uppercase text-white/60 flex items-center gap-2 mb-2">
                <DollarSign size={14} className="text-[#3657E8]" />
                Est. Annualized Yield
              </span>
              <motion.div
                key={projectedAnnualRevenue}
                initial={{ opacity: 0.6, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display font-black text-3xl md:text-4xl text-white tracking-tight"
              >
                {currencySymbol}{projectedAnnualRevenue}
              </motion.div>
              <span className="text-[10px] font-mono text-white/50 block mt-2">
                On {currencySymbol}{(portfolioBase / 1000000).toFixed(0)}M Asset Collateral
              </span>
            </div>
          </div>

          {/* Real-Time Order Book Depth Bars */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/60">
              <span className="flex items-center gap-2">
                <BarChart3 size={14} className="text-[#3657E8]" />
                Dynamic Liquidity Pool Depth
              </span>
              <span>Sub-50ms Settlement</span>
            </div>

            {/* Depth Bars */}
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-white/80">Tier 1 Sovereign T-Bills</span>
                  <span className="text-[#3657E8] font-bold">{Math.round(allocation * 0.6)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${allocation * 0.6}%` }}
                    className="h-full bg-[#3657E8]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-white/80">Automated Market Maker Delta</span>
                  <span className="text-cyan-400 font-bold">{Math.round(allocation * 0.28)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${allocation * 0.28}%` }}
                    className="h-full bg-cyan-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-white/80">Hedging Overcollateralization</span>
                  <span className="text-indigo-300 font-bold">{100 - Math.round(allocation * 0.88)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${100 - allocation * 0.88}%` }}
                    className="h-full bg-indigo-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Latency & Execution Bar */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70">
            <span className="flex items-center gap-2">
              <Activity size={14} className="text-[#3657E8]" />
              Edge Execution Latency: <strong className="text-white font-mono">18.4ms</strong>
            </span>
            <span className="text-[#3657E8] font-bold">Zero Re-quotes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
