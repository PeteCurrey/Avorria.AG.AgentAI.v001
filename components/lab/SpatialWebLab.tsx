"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Sun, Box, Sparkles, Layers } from "lucide-react";

export default function SpatialWebLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [materialType, setMaterialType] = useState<"wireframe" | "pbr-obsidian" | "pbr-gold">("pbr-obsidian");
  const [lightIntensity, setLightIntensity] = useState<number>(1.5);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.008);
  const [isInteracting, setIsInteracting] = useState(false);

  // References to dynamic Three.js objects
  const meshRef = useRef<THREE.Mesh | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // Geometry: Icosahedron / Torus Knot for spatial volume
    const geometry = new THREE.TorusKnotGeometry(1, 0.32, 128, 32);

    // Initial Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a24,
      metalness: 0.9,
      roughness: 0.15,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd6ff3f, lightIntensity, 20);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);
    lightRef.current = pointLight;

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillLight.position.set(-3, -2, -2);
    scene.add(fillLight);

    // Mouse / Touch Drag handling
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !meshRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      meshRef.current.rotation.y += deltaX * 0.008;
      meshRef.current.rotation.x += deltaY * 0.008;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    canvas.addEventListener("mousedown", onPointerDown);
    canvas.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    canvas.addEventListener("touchstart", onPointerDown, { passive: true });
    canvas.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      if (meshRef.current && !isDragging) {
        meshRef.current.rotation.y += rotationSpeed;
        meshRef.current.rotation.x += rotationSpeed * 0.5;
      }
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onPointerDown);
      canvas.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      canvas.removeEventListener("touchstart", onPointerDown);
      canvas.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [rotationSpeed]);

  // Handle Material Changes
  useEffect(() => {
    if (!meshRef.current) return;
    if (materialType === "wireframe") {
      meshRef.current.material = new THREE.MeshBasicMaterial({
        color: 0xd6ff3f,
        wireframe: true,
      });
    } else if (materialType === "pbr-obsidian") {
      meshRef.current.material = new THREE.MeshStandardMaterial({
        color: 0x111119,
        metalness: 0.95,
        roughness: 0.12,
      });
    } else if (materialType === "pbr-gold") {
      meshRef.current.material = new THREE.MeshStandardMaterial({
        color: 0xd6ff3f,
        metalness: 0.8,
        roughness: 0.25,
      });
    }
  }, [materialType]);

  // Handle Light Intensity Changes
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.intensity = lightIntensity;
    }
  }, [lightIntensity]);

  return (
    <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Header controls & Telemetry */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
            Experience 01 · Spatial WebGL
          </span>
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white">
            Real-Time 3D Mesh &amp; Lighting Laboratory
          </h3>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-white/50">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          <span>Three.js 60fps · WebGL Active</span>
        </div>
      </div>

      {/* Interactive 3D Canvas Area */}
      <div className="relative my-8 h-[380px] md:h-[460px] rounded-2xl bg-gradient-to-b from-[#0a0a12] via-[#050508] to-[#020204] border border-white/5 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Drag Hint Overlay */}
        <div className={`absolute bottom-4 left-4 pointer-events-none transition-opacity duration-300 font-mono text-[11px] text-white/60 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 ${isInteracting ? "opacity-20" : "opacity-100"}`}>
          Click &amp; Drag to Rotate 3D Object
        </div>

        {/* Shading Badge */}
        <div className="absolute top-4 right-4 pointer-events-none font-mono text-[10px] uppercase tracking-wider text-[var(--color-lime)] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          PBR Shaders Enabled
        </div>
      </div>

      {/* Control Deck */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
        {/* Material Switcher */}
        <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-2">
          <span className="font-mono text-[10px] uppercase text-[var(--color-muted)] flex items-center gap-1.5">
            <Layers size={12} />
            Material Shading
          </span>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setMaterialType("pbr-obsidian")}
              className={`px-2 py-1.5 rounded-lg text-xs font-mono transition-all ${
                materialType === "pbr-obsidian"
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              Obsidian
            </button>
            <button
              type="button"
              onClick={() => setMaterialType("pbr-gold")}
              className={`px-2 py-1.5 rounded-lg text-xs font-mono transition-all ${
                materialType === "pbr-gold"
                  ? "bg-[var(--color-lime)] text-[var(--color-bg)] font-semibold"
                  : "bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              Chartreuse
            </button>
            <button
              type="button"
              onClick={() => setMaterialType("wireframe")}
              className={`px-2 py-1.5 rounded-lg text-xs font-mono transition-all ${
                materialType === "wireframe"
                  ? "bg-white/20 text-white font-semibold border border-[var(--color-lime)]"
                  : "bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              Wireframe
            </button>
          </div>
        </div>

        {/* Lighting Slider */}
        <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5">
              <Sun size={12} />
              Point Light Intensity
            </span>
            <span className="text-[var(--color-lime)]">{lightIntensity.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="4.0"
            step="0.2"
            value={lightIntensity}
            onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
            className="w-full accent-[var(--color-lime)] cursor-pointer mt-2"
          />
        </div>

        {/* Velocity Slider */}
        <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5">
              <RotateCw size={12} />
              Inertial Rotation Speed
            </span>
            <span className="text-white">{(rotationSpeed * 1000).toFixed(0)} rad/s</span>
          </div>
          <input
            type="range"
            min="0"
            max="0.03"
            step="0.002"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
            className="w-full accent-[var(--color-lime)] cursor-pointer mt-2"
          />
        </div>
      </div>
    </div>
  );
}
