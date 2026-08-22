import { generateLocalBusinessSchema } from "@/lib/schema";
import { HeroSection } from "@/components/home/hero-section";
import { PostHeroCanvas } from "@/components/home/post-hero-canvas";

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
      
      {/* 1. Hero Section with Responsive Video (Intact & Independent) */}
      <HeroSection locale={locale} />

      {/* 2. Dynamic Cinematic Scroll-Driven Post-Hero Experience (4 Backgrounds + Content) */}
      <PostHeroCanvas locale={locale} />
    </>
  );
}

