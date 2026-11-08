"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
} from "lucide-react";

export default function NocturneDemonstration() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [frequencyPreset, setFrequencyPreset] = useState<"Acoustic Master" | "Sub-Bass Resonance" | "Spatial Air">("Acoustic Master");
  const [harmonics, setHarmonics] = useState<number>(4);
  const [stereoPan, setStereoPan] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      // Resize support
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Gradient background subtle glow
      const radialGradient = ctx.createRadialGradient(
        width * mousePos.x,
        height * mousePos.y,
        10,
        width * 0.5,
        height * 0.5,
        width * 0.7
      );
      radialGradient.addColorStop(0, "rgba(167, 139, 250, 0.12)");
      radialGradient.addColorStop(0.5, "rgba(54, 87, 232, 0.05)");
      radialGradient.addColorStop(1, "rgba(21, 23, 27, 0)");
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      if (isPlaying) {
        phase += 0.035;
      }

      // Draw multi-layered harmonic wave ribbons
      const waveCount = 5;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const waveOffset = (w * Math.PI) / waveCount;
        const alpha = 0.2 + (w / waveCount) * 0.7;
        const color =
          w % 2 === 0
            ? `rgba(167, 139, 250, ${alpha})`
            : `rgba(54, 87, 232, ${alpha})`;

        ctx.strokeStyle = color;
        ctx.lineWidth = w === waveCount - 1 ? 2.5 : 1.2;

        for (let x = 0; x < width; x += 4) {
          const normX = x / width;
          // Calculate composite harmonic wave
          const freqMultiplier =
            frequencyPreset === "Sub-Bass Resonance"
              ? 1.5
              : frequencyPreset === "Acoustic Master"
              ? 3.2
              : 5.8;

          const baseWave =
            Math.sin(normX * freqMultiplier * Math.PI * 2 + phase + waveOffset) *
            Math.sin(normX * Math.PI); // Envelope

          const harmonicWave =
            (Math.sin(normX * freqMultiplier * harmonics * Math.PI + phase * 1.5) * 0.3) *
            Math.sin(normX * Math.PI);

          const panOffset = (stereoPan / 100) * 40 * (w - 2);
          const mouseYOffset = (mousePos.y - 0.5) * 50;

          const amplitude = (height * 0.28) * (1 - Math.abs(normX - 0.5) * 0.6);
          const y = height * 0.5 + (baseWave + harmonicWave) * amplitude + panOffset + mouseYOffset;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, frequencyPreset, harmonics, stereoPan, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  return (
    <div className="rounded-3xl bg-[#15171B] border border-white/10 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-violet-400">
              Nocturne Sound Lab · Spatial Waveform &amp; Acoustic Synthesis
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
            Audio-Reactive Spatial Canvas
          </h3>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            {(["Acoustic Master", "Sub-Bass Resonance", "Spatial Air"] as const).map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setFrequencyPreset(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  frequencyPreset === preset
                    ? "bg-violet-600 text-white font-bold shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-mono transition-colors"
          >
            {isPlaying ? <Pause size={14} className="text-violet-400" /> : <Play size={14} className="text-violet-400" />}
            <span>{isPlaying ? "Freeze Waveform" : "Resume Synthesis"}</span>
          </button>
        </div>
      </div>

      {/* Main Waveform Display Canvas */}
      <div
        onMouseMove={handleMouseMove}
        className="my-8 relative h-[280px] md:h-[340px] rounded-2xl bg-[#0F1014] border border-white/10 overflow-hidden cursor-crosshair group"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Dynamic Canvas HUD Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
            Oscillator: GLSL Composite
          </span>
          <span className="font-mono text-[10px] text-violet-400">
            Harmonics: {harmonics}x
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-3 pointer-events-none text-[10px] font-mono text-white/50">
          <span>Move cursor to sculpt spatial modulation</span>
        </div>
      </div>

      {/* Control Sliders & Spectrum Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
        {/* Slider 1: Harmonics */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white/70">Overtone Harmonics</span>
            <span className="text-violet-400 font-bold">{harmonics} Overtones</span>
          </div>
          <input
            type="range"
            min="1"
            max="8"
            value={harmonics}
            onChange={(e) => setHarmonics(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500"
          />
        </div>

        {/* Slider 2: Stereo Pan */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white/70">Stereo Field Pan</span>
            <span className="text-[#3657E8] font-bold">
              {stereoPan === 0 ? "Center" : stereoPan < 0 ? `${Math.abs(stereoPan)}% L` : `${stereoPan}% R`}
            </span>
          </div>
          <input
            type="range"
            min="-50"
            max="50"
            value={stereoPan}
            onChange={(e) => setStereoPan(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3657E8]"
          />
        </div>

        {/* Spectrum Telemetry */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-white/70">Frequency Range</span>
            <span className="text-emerald-400 font-bold">20Hz – 48kHz</span>
          </div>
          <div className="flex items-end gap-1.5 h-6">
            {[40, 75, 95, 60, 85, 90, 70, 50, 65, 80, 45, 90].map((h, i) => (
              <motion.div
                key={i}
                animate={isPlaying ? { height: [`${h * 0.5}%`, `${h}%`, `${h * 0.7}%`] } : { height: `${h * 0.5}%` }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                className="flex-1 bg-gradient-to-t from-[#3657E8] to-violet-400 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
