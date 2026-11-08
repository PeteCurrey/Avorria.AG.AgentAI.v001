"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Droplets,
  Leaf,
} from "lucide-react";

const BASES = [
  { id: "rose", name: "Damask Rose Hydrosol", origin: "Grasse, France", benefit: "Deep Cellular Calming" },
  { id: "edelweiss", name: "Alpine Edelweiss Extract", origin: "Valais, Switzerland", benefit: "High-Altitude Antioxidant Shield" },
  { id: "kelp", name: "Sub-Antarctic Sea Kelp", origin: "Tasman Sea", benefit: "Mineralized Barrier Rebuilding" },
];

const ACTIVES = [
  { id: "bakuchiol", name: "Phyto-Retinol Bakuchiol", boost: "+34% Elasticity", priceOffset: 0 },
  { id: "niacinamide", name: "Bio-Fermented Niacinamide", boost: "+48% Barrier Density", priceOffset: 12 },
  { id: "squalane", name: "Sugarcane Bio-Squalane", boost: "+62% Hydration Lock", priceOffset: 24 },
];

const VESSELS = [
  { id: "porcelain", name: "Frosted Porcelain", color: "bg-[#F7F7F5] text-[#15171B] border-stone-300" },
  { id: "amber", name: "Apothecary Amber", color: "bg-[#2A1810] text-amber-200 border-amber-800" },
  { id: "obsidian", name: "Matte Obsidian", color: "bg-[#18191E] text-white border-white/20" },
];

export default function BloomDemonstration() {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedActive, setSelectedActive] = useState(ACTIVES[0]);
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [potency, setPotency] = useState<number>(15);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  // Price computation
  const basePrice = 85;
  const totalPrice = basePrice + selectedActive.priceOffset + Math.round((potency - 10) * 2.2);

  const handleAdd = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2400);
  };

  return (
    <div className="rounded-3xl bg-[#15171B] border border-white/10 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-rose-300">
              Bloom Botanical Atelier · Bespoke Formula Configurator
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
            Custom Botanical Elixir Formulator
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-rose-300/80 bg-rose-950/40 px-3 py-1.5 rounded-full border border-rose-900/50">
          <Leaf size={14} />
          <span>100% Organic Bioactive Actives</span>
        </div>
      </div>

      {/* Main Formulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
        {/* Left Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Base Botanical Selector */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <span className="font-mono text-xs uppercase text-white/60 flex items-center gap-2">
              <Droplets size={14} className="text-rose-400" />
              01 / Select Botanical Base Hydrosol
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {BASES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBase(b)}
                  className={`p-3 rounded-xl text-left border text-xs font-mono transition-all ${
                    selectedBase.id === b.id
                      ? "bg-rose-950/40 border-rose-400/60 text-white"
                      : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                  }`}
                >
                  <span className="block font-bold text-xs">{b.name.split(" ")[0]}</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">{b.origin}</span>
                </button>
              ))}
            </div>
            <p className="font-body text-xs text-rose-300/80 italic mt-1">
              Active profile: {selectedBase.benefit}
            </p>
          </div>

          {/* Active Bio-Compound Selector */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <span className="font-mono text-xs uppercase text-white/60 flex items-center gap-2">
              <Sparkles size={14} className="text-rose-400" />
              02 / Bioactive Fortification
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {ACTIVES.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedActive(a)}
                  className={`p-3 rounded-xl text-left border text-xs font-mono transition-all ${
                    selectedActive.id === a.id
                      ? "bg-rose-950/40 border-rose-400/60 text-white"
                      : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                  }`}
                >
                  <span className="block font-bold text-xs">{a.name}</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">{a.boost}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vessel Material & Concentration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Vessel Finish */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="font-mono text-[11px] uppercase text-white/60 block">
                Vessel Material
              </span>
              <div className="flex gap-2">
                {VESSELS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVessel(v)}
                    className={`flex-1 py-2 px-2 text-center rounded-lg text-[11px] font-mono border transition-all ${
                      selectedVessel.id === v.id
                        ? "bg-white/20 border-white text-white font-bold"
                        : "bg-white/5 border-white/5 text-white/50"
                    }`}
                  >
                    {v.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Concentration Slider */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/60">Bioactive Potency</span>
                <span className="text-rose-400 font-bold">{potency}% Active</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                value={potency}
                onChange={(e) => setPotency(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-rose-400"
              />
            </div>
          </div>
        </div>

        {/* Right Preview Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1F2128] to-[#15171B] border border-white/15">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                Formula Specification
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Cold-Pressed
              </span>
            </div>

            {/* Vessel Abstract Graphic */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div
                className={`w-28 h-44 rounded-t-3xl rounded-b-xl border-2 flex flex-col justify-between p-4 shadow-xl transition-all duration-300 ${selectedVessel.color}`}
              >
                <div className="w-8 h-3 mx-auto rounded-full bg-current opacity-30" />
                <div className="text-center space-y-1">
                  <span className="font-display font-bold text-xs uppercase tracking-widest block">
                    BLOOM
                  </span>
                  <span className="text-[9px] font-mono opacity-70 block">
                    {potency}% POTENCY
                  </span>
                </div>
                <div className="w-10 h-0.5 mx-auto bg-current opacity-30" />
              </div>
            </div>

            {/* Spec breakdown */}
            <div className="space-y-1.5 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-white/70">
                <span>Base:</span>
                <span className="text-white">{selectedBase.name}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Active:</span>
                <span className="text-white">{selectedActive.name}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Vessel:</span>
                <span className="text-white">{selectedVessel.name}</span>
              </div>
            </div>
          </div>

          {/* Price & Add to Cart button */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-white/60">Bespoke Price</span>
              <motion.span
                key={totalPrice}
                initial={{ opacity: 0.7, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-display font-black text-3xl text-white"
              >
                ${totalPrice}
              </motion.span>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                isAdded
                  ? "bg-emerald-500 text-black"
                  : "bg-white hover:bg-rose-100 text-[#15171B] shadow-lg shadow-white/10"
              }`}
            >
              {isAdded ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Added to Cart (0.00 CLS)</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  <span>Reserve Custom Formula</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
