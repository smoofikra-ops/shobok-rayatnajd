"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { bodyBackgrounds } from "@/config/body-backgrounds";

interface DynamicPageBackgroundProps {
  containerRef: React.RefObject<HTMLElement>;
}

// Hook to check prefers-reduced-motion safely
function usePrefersReducedMotion() {
  const subscribe = (callback: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };
  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function DynamicPageBackground({ containerRef }: DynamicPageBackgroundProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Master visibility of the fixed background stage (0 when in hero, 1 in post-hero body)
  const [stageOpacity, setStageOpacity] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Layer states: opacity and transform for each of the 4 images
  const [layerStates, setLayerStates] = useState([
    { opacity: 1, scale: 1, translateY: 0 },
    { opacity: 0, scale: 1, translateY: 0 },
    { opacity: 0, scale: 1, translateY: 0 },
    { opacity: 0, scale: 1, translateY: 0 },
  ]);

  // Preload all 4 background images on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    bodyBackgrounds.forEach((bg) => {
      const img = new window.Image();
      img.src = bg.src;
    });
  }, []);

  // Main scroll progress & crossfade calculator
  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId: number;

    const updateScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // 1. Stage Opacity Calculation:
      // When rect.top is > windowHeight, user is way above in hero -> stage is invisible (opacity 0)
      // As rect.top enters from windowHeight down to 0, stage fades in smoothly from 0 to 1
      let stageOp = 1;
      if (rect.top > 0) {
        stageOp = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.6), 0), 1);
      } else if (rect.bottom < windowHeight) {
        // When rect.bottom < windowHeight, user is reaching footer -> subtle blend
        stageOp = Math.min(Math.max(rect.bottom / windowHeight, 0.2), 1);
      }
      setStageOpacity(stageOp);

      // 2. Progress Calculation across the post-hero container:
      // progress = 0 when rect.top = 0 (Hero has just exited)
      // progress = 1 when rect.bottom = windowHeight (Bottom of CTA reached)
      const scrollableDistance = rect.height - windowHeight;
      const scrolled = -rect.top;
      const progress = scrollableDistance > 0 ? Math.min(Math.max(scrolled / scrollableDistance, 0), 1) : 0;
      setCurrentProgress(progress);

      // 3. Reduced Motion Mode: simple discreet steps without zoom/parallax
      if (prefersReducedMotion) {
        let op0 = 0, op1 = 0, op2 = 0, op3 = 0;
        if (progress < 0.25) op0 = 1;
        else if (progress < 0.50) op1 = 1;
        else if (progress < 0.75) op2 = 1;
        else op3 = 1;

        setLayerStates([
          { opacity: op0, scale: 1, translateY: 0 },
          { opacity: op1, scale: 1, translateY: 0 },
          { opacity: op2, scale: 1, translateY: 0 },
          { opacity: op3, scale: 1, translateY: 0 },
        ]);
        return;
      }

      // 4. Full Smooth Crossfade Math across the 4 Images:
      // Ranges:
      // Image 0 (Main Services & Marquee): 0.00 -> 0.32 (fades out 0.20 -> 0.32)
      // Image 1 (Solutions & Sectors): 0.20 -> 0.60 (fades in 0.20 -> 0.32, fades out 0.48 -> 0.60)
      // Image 2 (Why Rayat Najd & Process): 0.48 -> 0.86 (fades in 0.48 -> 0.60, fades out 0.74 -> 0.86)
      // Image 3 (Final CTA & Pre-Footer): 0.74 -> 1.00 (fades in 0.74 -> 0.86, stays 1.0 until end)

      let op0 = 0;
      if (progress < 0.20) {
        op0 = 1;
      } else if (progress < 0.32) {
        op0 = 1 - (progress - 0.20) / 0.12;
      } else {
        op0 = 0;
      }

      let op1 = 0;
      if (progress < 0.20) {
        op1 = 0;
      } else if (progress < 0.32) {
        op1 = (progress - 0.20) / 0.12;
      } else if (progress < 0.48) {
        op1 = 1;
      } else if (progress < 0.60) {
        op1 = 1 - (progress - 0.48) / 0.12;
      } else {
        op1 = 0;
      }

      let op2 = 0;
      if (progress < 0.48) {
        op2 = 0;
      } else if (progress < 0.60) {
        op2 = (progress - 0.48) / 0.12;
      } else if (progress < 0.74) {
        op2 = 1;
      } else if (progress < 0.86) {
        op2 = 1 - (progress - 0.74) / 0.12;
      } else {
        op2 = 0;
      }

      let op3 = 0;
      if (progress < 0.74) {
        op3 = 0;
      } else if (progress < 0.86) {
        op3 = (progress - 0.74) / 0.12;
      } else {
        op3 = 1;
      }

      // Smooth subtle cinematic scale and vertical translation for depth
      const s0 = 1.00 + Math.min(progress / 0.32, 1) * 0.035;
      const s1 = 1.00 + Math.min(Math.max((progress - 0.20) / 0.40, 0), 1) * 0.035;
      const s2 = 1.00 + Math.min(Math.max((progress - 0.48) / 0.38, 0), 1) * 0.035;
      const s3 = 1.00 + Math.min(Math.max((progress - 0.74) / 0.26, 0), 1) * 0.035;

      const y0 = -(progress * 16);
      const y1 = -((progress - 0.20) * 16);
      const y2 = -((progress - 0.48) * 16);
      const y3 = -((progress - 0.74) * 16);

      setLayerStates([
        { opacity: Math.max(0, Math.min(1, op0)), scale: s0, translateY: y0 },
        { opacity: Math.max(0, Math.min(1, op1)), scale: s1, translateY: y1 },
        { opacity: Math.max(0, Math.min(1, op2)), scale: s2, translateY: y2 },
        { opacity: Math.max(0, Math.min(1, op3)), scale: s3, translateY: y3 },
      ]);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial calculation
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerRef, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden select-none transition-opacity duration-300"
      style={{
        opacity: stageOpacity,
        visibility: stageOpacity <= 0.01 ? "hidden" : "visible",
      }}
    >
      {/* Background Layer 1: background-1.jpg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${bodyBackgrounds[0].src})`,
          backgroundPosition: bodyBackgrounds[0].desktopPosition,
          opacity: layerStates[0].opacity,
          transform: `scale(${layerStates[0].scale}) translate3d(0, ${layerStates[0].translateY}px, 0)`,
          zIndex: 1,
        }}
      />

      {/* Background Layer 2: background-2.jpg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${bodyBackgrounds[1].src})`,
          backgroundPosition: bodyBackgrounds[1].desktopPosition,
          opacity: layerStates[1].opacity,
          transform: `scale(${layerStates[1].scale}) translate3d(0, ${layerStates[1].translateY}px, 0)`,
          zIndex: 2,
        }}
      />

      {/* Background Layer 3: background-body-3.jpg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${bodyBackgrounds[2].src})`,
          backgroundPosition: bodyBackgrounds[2].desktopPosition,
          opacity: layerStates[2].opacity,
          transform: `scale(${layerStates[2].scale}) translate3d(0, ${layerStates[2].translateY}px, 0)`,
          zIndex: 3,
        }}
      />

      {/* Background Layer 4: background-body-4.jpg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${bodyBackgrounds[3].src})`,
          backgroundPosition: bodyBackgrounds[3].desktopPosition,
          opacity: layerStates[3].opacity,
          transform: `scale(${layerStates[3].scale}) translate3d(0, ${layerStates[3].translateY}px, 0)`,
          zIndex: 4,
        }}
      />

      {/* Subtle Decorative Architectural Mesh Pattern (Fencing & Structural Lines) */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4A281A 1.5px, transparent 1.5px), radial-gradient(#B56D2A 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0, 18px 18px",
          zIndex: 5,
        }}
      />

      {/* Protective Ambient Dynamic Overlays for High Legibility (WCAG AA) */}
      {/* 1. Main Translucent Surface: Soft beige/white gradient that leaves the industrial scene rich and visible */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-500"
        style={{
          background:
            currentProgress < 0.75
              ? "linear-gradient(180deg, rgba(255,255,255,0.76) 0%, rgba(247,246,243,0.79) 50%, rgba(255,255,255,0.76) 100%)"
              : "linear-gradient(180deg, rgba(247,246,243,0.76) 0%, rgba(74,40,26,0.35) 60%, rgba(32,18,12,0.85) 100%)",
          zIndex: 6,
        }}
      />

      {/* 2. Brand Warm Bronze Subtle Tint */}
      <div
        className="absolute inset-0 bg-[#4A281A]/[0.025] mix-blend-multiply pointer-events-none"
        style={{ zIndex: 7 }}
      />

      {/* 3. Top Gradient Blend: Soft fade connecting smoothly with Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"
        style={{ zIndex: 8 }}
      />

      {/* 4. Bottom Gradient Blend: Smooth transition into dark Footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900 pointer-events-none"
        style={{ zIndex: 8 }}
      />
    </div>
  );
}
