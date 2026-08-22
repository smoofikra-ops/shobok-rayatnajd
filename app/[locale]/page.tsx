import { generateLocalBusinessSchema } from "@/lib/schema";
import { HeroSection } from "@/components/home/hero-section";
import { MainServicesGrid } from "@/components/home/main-services-grid";
import { MarqueeCarousel } from "@/components/home/marquee-carousel";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { SectorsGrid } from "@/components/home/sectors-grid";
import { WhyRayatNajd } from "@/components/home/why-rayat-najd";
import { HowWeWork } from "@/components/home/how-we-work";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      
      {/* 1. Hero Section with Responsive Video */}
      <HeroSection locale={locale} />

      {/* 2. Top 4 Main Services in 2x2 Grid (Mobile First with Pulse Cycle) */}
      <MainServicesGrid locale={locale} />

      {/* 3. Moving Carousel with All Services */}
      <MarqueeCarousel locale={locale} />

      {/* 4. Available Solutions (Compact 3+3+2 Grid) */}
      <SolutionsGrid locale={locale} />

      {/* 5. Target Sectors Grid */}
      <SectorsGrid locale={locale} />

      {/* 6. Why Rayat Najd (Crafted Visual Cards) */}
      <WhyRayatNajd locale={locale} />

      {/* 7. How We Start Your Project (Staggered Entry Timeline) */}
      <HowWeWork locale={locale} />

      {/* 8. Call to Action & Direct Coordination */}
      <CtaSection locale={locale} />
    </>
  );
}

