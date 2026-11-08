"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Sun,
} from "lucide-react";

const PERSPECTIVES = [
  { id: "north", label: "North Cantilever", elevation: "14.2m Projection", orientation: "350° Azimuth" },
  { id: "atrium", label: "Central Atrium", elevation: "Dual-Aspect Void", orientation: "180° Zenith" },
  { id: "colonnade", label: "Travertine Colonnade", elevation: "Ground Gallery", orientation: "090° East" },
];

const MATERIALS = [
  { id: "travertine", name: "Honed Roman Travertine", albedo: "0.74 Specular", tone: "from-amber-100/20 to-stone-300/10" },
  { id: "glass", name: "Low-Iron Optical Glazing", albedo: "99.2% Transmission", tone: "from-cyan-100/30 to-blue-300/10" },
  { id: "bronze", name: "Architectural Cast Bronze", albedo: "0.22 Patina", tone: "from-amber-600/30 to-yellow-900/20" },
];

export default function MeridianDemonstration() {
  const [timeOfDay, setTimeOfDay] = useState<number>(14); // 14:00 (2 PM)
  const [activePerspective, setActivePerspective] = useState(PERSPECTIVES[0]);
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  // Calculated solar path values
  const solarAngle = useMemo(() => {
    // 06:00 = 0 deg, 13:00 = 90 deg, 20:00 = 180 deg
    return ((timeOfDay - 6) / 14) * 180;
  }, [timeOfDay]);

  const kelvin = useMemo(() => {
    if (timeOfDay <= 7 || timeOfDay >= 19) return "2,800K (Warm Dawn / Dusk)";
    if (timeOfDay <= 10 || timeOfDay >= 16) return "4,200K (Golden Hour)";
    return "5,800K (Daylight Neutral)";
  }, [timeOfDay]);

  const lux = useMemo(() => {
    const sinAngle = Math.sin((solarAngle * Math.PI) / 180);
    return Math.round(Math.max(1200, sinAngle * 95000)).toLocaleString();
  }, [solarAngle]);

  return (
    <div className="rounded-3xl bg-[#15171B] border border-white/10 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">
              Meridian Spatial Engine · Real-Time Solar &amp; Material Simulator
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
            Architectural Solar Path &amp; Spatial Lighting
          </h3>
        </div>

        {/* Perspective Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {PERSPECTIVES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePerspective(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activePerspective.id === p.id
                  ? "bg-white/20 border-white text-white font-bold"
                  : "bg-white/5 border-transparent text-white/60 hover:text-white"
              } border`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Spatial Canvas Simulation Area */}
      <div className="my-8 relative h-[300px] md:h-[360px] rounded-2xl bg-[#0C0D10] border border-white/10 overflow-hidden flex items-center justify-center">
        {/* Dynamic Sun Ray Vector */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(ellipse at ${
              (solarAngle / 180) * 100
            }% 10%, rgba(251, 191, 36, 0.18) 0%, rgba(54, 87, 232, 0.05) 50%, transparent 80%)`,
          }}
        />

        {/* 3D Monolith Architectural Geometry Simulation */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Spatial 3D Monolith Cube Wireframe / Volume */}
          <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">
            {/* Architectural Shadow Cast */}
            <motion.div
              className="absolute bottom-4 h-12 bg-black/60 rounded-full blur-md"
              animate={{
                width: `${Math.max(120, Math.abs(solarAngle - 90) * 2.8 + 140)}px`,
                x: (solarAngle - 90) * 1.8,
                opacity: Math.sin((solarAngle * Math.PI) / 180) * 0.8 + 0.2,
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Geometric Pavilion Slab */}
            <motion.div
              animate={{
                rotateY: (solarAngle - 90) * 0.25,
                rotateX: 14,
              }}
              className={`w-36 h-36 md:w-44 md:h-44 rounded-xl border border-white/20 bg-gradient-to-tr ${activeMaterial.tone} backdrop-blur-md shadow-2xl relative flex flex-col justify-between p-4`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex justify-between items-start text-[9px] font-mono text-white/50">
                <span>{activePerspective.elevation}</span>
                <span>{activePerspective.orientation}</span>
              </div>

              <div className="text-center font-display text-xs uppercase tracking-widest text-white/80 font-bold">
                {activeMaterial.name.split(" ")[1]}
              </div>

              <div className="flex justify-between items-end text-[9px] font-mono text-white/40">
                <span>Z-Axis +18.4</span>
                <span>Draco 3D</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Telemetry Overlays */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none font-mono text-[11px] text-white/70">
          <span className="flex items-center gap-1.5 text-amber-300">
            <Sun size={13} />
            Solar Azimuth: {solarAngle.toFixed(1)}°
          </span>
          <span>Ambient Illuminance: {lux} Lux</span>
          <span>Color Temperature: {kelvin}</span>
        </div>

        <div className="absolute bottom-4 right-4 pointer-events-none font-mono text-[10px] text-white/40">
          Active Shader: PBR Physical Transmission · 60fps
        </div>
      </div>

      {/* Control Strip: Time of Day Slider & Materials */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/10">
        {/* Time of Day Slider (7 cols) */}
        <div className="md:col-span-7 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white/60 flex items-center gap-2">
              <Sun size={14} className="text-amber-400" />
              Diurnal Solar Cycle
            </span>
            <span className="text-amber-300 font-bold">{timeOfDay}:00 Hours</span>
          </div>

          <input
            type="range"
            min="6"
            max="20"
            step="1"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex justify-between text-[10px] font-mono text-white/40">
            <span>06:00 Dawn</span>
            <span>13:00 Solar Zenith</span>
            <span>20:00 Twilight Dusk</span>
          </div>
        </div>

        {/* Material Selection (5 cols) */}
        <div className="md:col-span-5 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
          <span className="font-mono text-[11px] uppercase text-white/60 block">
            Material Specimen PBR
          </span>
          <div className="grid grid-cols-3 gap-2">
            {MATERIALS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMaterial(m)}
                className={`py-2 px-1 text-center rounded-lg text-[10px] font-mono border transition-all truncate ${
                  activeMaterial.id === m.id
                    ? "bg-amber-400/20 border-amber-400 text-white font-bold"
                    : "bg-white/5 border-white/5 text-white/50 hover:text-white"
                }`}
              >
                {m.name.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
