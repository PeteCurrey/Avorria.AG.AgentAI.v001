"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function WebGLHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, -1.2, 5.2);
    camera.lookAt(0, 0, 0);

    // Architectural Topological Lattice (50 x 50 grid)
    const cols = 55;
    const rows = 45;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const originalY = new Float32Array(count);

    const colorPlatinum = new THREE.Color("#CBD5E1");
    const colorAccent = new THREE.Color("#D6FF3F");
    const colorMuted = new THREE.Color("#475569");

    let idx = 0;
    const spacingX = 0.22;
    const spacingZ = 0.2;
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetZ = ((rows - 1) * spacingZ) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacingX - offsetX;
        const z = j * spacingZ - offsetZ;
        const distFromCenter = Math.sqrt(x * x + z * z);
        const y = Math.sin(distFromCenter * 1.2) * 0.35 - 0.4;

        positions[idx * 3 + 0] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        originalY[idx] = y;

        // Subtle gradient coloring: muted slate to platinum, with subtle accent at crests
        const blend = Math.max(0, Math.min(1, 1 - distFromCenter / 4.8));
        const col = new THREE.Color().lerpColors(colorMuted, colorPlatinum, blend);
        if (Math.random() > 0.94) {
          col.lerp(colorAccent, 0.45);
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

    // Refined subtle circular point texture
    const mat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const mesh = new THREE.Points(geo, mat);
    mesh.rotation.x = 0.55; // Tilted perspective
    scene.add(mesh);

    // Mouse influence (smoothed)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 1.4;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 1.4;
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
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Animate
    let rafId: number;
    let clock = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      clock += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const pos = geo.attributes.position.array as Float32Array;
      for (let k = 0; k < count; k++) {
        const x = pos[k * 3 + 0];
        const z = pos[k * 3 + 2];
        const wave =
          Math.sin(x * 1.2 + clock) * 0.22 +
          Math.cos(z * 1.4 + clock * 0.8) * 0.18 +
          Math.sin((x + z) * 0.8 + clock * 0.5) * 0.15;
        pos[k * 3 + 1] = originalY[k] + wave;
      }
      geo.attributes.position.needsUpdate = true;

      mesh.rotation.z = mouse.x * 0.15;
      mesh.rotation.x = 0.55 + mouse.y * 0.1;
      camera.position.x = mouse.x * 0.6;
      camera.position.y = -1.2 + mouse.y * 0.4;
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}
