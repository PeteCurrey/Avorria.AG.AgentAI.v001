"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface SculpturalObjectProps {
  className?: string;
  interactive?: boolean;
}

/**
 * AvorriaSculpturalObject
 *
 * Real-time 3D procedural rendering of Avorria's signature monolithic sculpture:
 * - Interlocking geometric helical ribbon (Titanium & Chrome)
 * - Anodized Cobalt Blue core facet
 * - Outer refractive optical glass cage
 * - Dynamic lighting responding to cursor and gentle ambient rotation
 * - Zero external assets needed, 60fps compositor performance, battery guard
 */
export default function AvorriaSculpturalObject({
  className = "w-full h-full",
  interactive = true,
}: SculpturalObjectProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Guard against reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Renderer setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // Group to rotate
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Titanium / Chrome Outer Knot
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.32, 128, 32, 2, 3);
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5f7,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const chromeKnot = new THREE.Mesh(knotGeometry, chromeMaterial);
    sculptureGroup.add(chromeKnot);

    // 2. Anodized Cobalt Core Monolith
    const coreGeometry = new THREE.IcosahedronGeometry(0.85, 2);
    const cobaltMaterial = new THREE.MeshStandardMaterial({
      color: 0x3657e8, // Avorria Signature Cobalt
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x1a2e8a,
      emissiveIntensity: 0.35,
    });
    const cobaltCore = new THREE.Mesh(coreGeometry, cobaltMaterial);
    sculptureGroup.add(cobaltCore);

    // 3. Frosted Optical Glass Wireframe Cage
    const cageGeometry = new THREE.IcosahedronGeometry(1.7, 1);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 0.45,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      wireframe: true,
    });
    const glassCage = new THREE.Mesh(cageGeometry, glassMaterial);
    sculptureGroup.add(glassCage);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Soft Coral subtle rim accent
    const rimLight = new THREE.PointLight(0xe77b68, 2.5, 10);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    // Cobalt fill light
    const cobaltFill = new THREE.PointLight(0x3657e8, 3.0, 10);
    cobaltFill.position.set(3, -2, 2);
    scene.add(cobaltFill);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Intersection Observer to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Base ambient float
        sculptureGroup.rotation.y += 0.006;
        sculptureGroup.rotation.x = Math.sin(elapsed * 0.5) * 0.15;

        // Interactive mouse follow with spring damping
        targetRotationY = mouseX * 0.8;
        targetRotationX = -mouseY * 0.8;

        chromeKnot.rotation.z = Math.cos(elapsed * 0.3) * 0.1;
        cobaltCore.rotation.y -= 0.008;
        glassCage.rotation.x += 0.004;

        sculptureGroup.rotation.y += (targetRotationY - sculptureGroup.rotation.y) * 0.05;
        sculptureGroup.rotation.x += (targetRotationX - sculptureGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (interactive) window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      knotGeometry.dispose();
      chromeMaterial.dispose();
      coreGeometry.dispose();
      cobaltMaterial.dispose();
      cageGeometry.dispose();
      glassMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Avorria Interactive 3D Signature Sculpture"
    />
  );
}
