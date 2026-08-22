"use client";

import { useRef } from "react";
import { DynamicPageBackground } from "./dynamic-page-background";
import { MainServicesGrid } from "./main-services-grid";
import { MarqueeCarousel } from "./marquee-carousel";
import { SolutionsGrid } from "./solutions-grid";
import { SectorsGrid } from "./sectors-grid";
import { WhyRayatNajd } from "./why-rayat-najd";
import { HowWeWork } from "./how-we-work";
import { CtaSection } from "./cta-section";

interface PostHeroCanvasProps {
  locale: string;
}

export function PostHeroCanvas({ locale }: PostHeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative isolate w-full"
      id="post-hero-experience"
    >
      {/* 1. Cinematic Scroll-Driven Background Layer (Fixed Viewport Canvas) */}
      <DynamicPageBackground containerRef={containerRef} />

      {/* 2. Main Content Layers sitting cleanly above the dynamic stage */}
      <div className="relative z-10">
        {/* Top 4 Main Services in 2x2 Grid (Mobile First with Pulse Cycle) */}
        <MainServicesGrid locale={locale} />

        {/* Moving Carousel with All Services */}
        <MarqueeCarousel locale={locale} />

        {/* Available Solutions (Compact 3+3+2 Grid) */}
        <SolutionsGrid locale={locale} />

        {/* Target Sectors Grid */}
        <SectorsGrid locale={locale} />

        {/* Why Rayat Najd (Crafted Visual Cards) */}
        <WhyRayatNajd locale={locale} />

        {/* How We Start Your Project (Staggered Entry Timeline) */}
        <HowWeWork locale={locale} />

        {/* Call to Action & Direct Coordination */}
        <CtaSection locale={locale} />
      </div>
    </div>
  );
}
