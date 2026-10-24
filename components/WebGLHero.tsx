"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function WebGLHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer with high performance settings
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, -0.9, 4.8);
    camera.lookAt(0, 0, 0);

    // Pre-calculated Architectural Topological Lattice
    const cols = 48;
    const rows = 36;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPlatinum = new THREE.Color("#CBD5E1");
    const colorAccent = new THREE.Color("#D6FF3F");
    const colorMuted = new THREE.Color("#334155");

    let idx = 0;
    const spacingX = 0.24;
    const spacingZ = 0.22;
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetZ = ((rows - 1) * spacingZ) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacingX - offsetX;
        const z = j * spacingZ - offsetZ;
        const distFromCenter = Math.sqrt(x * x + z * z);
        // Architectural curvature baked into initial buffer
        const y = Math.sin(distFromCenter * 1.1) * 0.38 + Math.cos(x * 1.2) * 0.15 - 0.35;

        positions[idx * 3 + 0] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const blend = Math.max(0, Math.min(1, 1 - distFromCenter / 4.6));
        const col = new THREE.Color().lerpColors(colorMuted, colorPlatinum, blend);
        if (Math.random() > 0.93) {
          col.lerp(colorAccent, 0.4);
        }

        colors[idx * 3 + 0] = col.r;
        colors[idx * 3 + 1] = col.g;
        colors[idx * 3 + 2] = col.b;

        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.034,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
    });

    const mesh = new THREE.Points(geo, mat);
    mesh.rotation.x = 0.58;
    scene.add(mesh);

    // Mouse influence (smoothed)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    // Resize
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Pause WebGL offscreen via IntersectionObserver
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    // Animate: 100% GPU-accelerated matrix transforms (0% CPU buffer uploads!)
    let rafId: number;
    let clock = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      clock += 0.008;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // GPU matrix transformations without mutating geometry buffers
      mesh.rotation.z = Math.sin(clock * 0.6) * 0.04 + mouse.x * 0.12;
      mesh.rotation.x = 0.58 + Math.cos(clock * 0.5) * 0.03 + mouse.y * 0.08;
      mesh.rotation.y = clock * 0.06;
      mesh.position.y = Math.sin(clock * 0.7) * 0.08;

      camera.position.x = mouse.x * 0.4;
      camera.position.y = -0.9 + mouse.y * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}
