import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateWebPageSchema } from "@/lib/schema";
import { HeroSection } from "@/components/home/hero-section";
import { PostHeroCanvas } from "@/components/home/post-hero-canvas";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === "en";
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = isEn ? `${baseUrl}/en` : `${baseUrl}/`;

  const title = isEn
    ? "Rayat Najd Fencing | Fencing, Shades & Hangars in Saudi Arabia"
    : "شبوك رايات نجد | توريد وتركيب الشبوك والسياج والمظلات والهناجر";
  const description = isEn
    ? "Specialized Saudi contractor for supply and installation of security fencing, steel barriers, shades, and warehouse hangar structures across Saudi Arabia."
    : "مؤسسة سعودية متخصصة في توريد وتركيب الشبوك الأمنية، السياج الحديدي، المظلات، وهياكل الهناجر للمشاريع والمستودعات في كافة مناطق المملكة العربية السعودية.";

  return {
    title: {
      absolute: isEn ? "Rayat Najd Fencing | Supply & Installation" : siteConfig.name,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ar": `${baseUrl}/`,
        "en": `${baseUrl}/en`,
        "x-default": `${baseUrl}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: siteConfig.logo,
          width: 800,
          height: 600,
          alt: "شبوك رايات نجد للمقاولات",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.logo],
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const isEn = locale === "en";
  const canonicalUrl = isEn ? `${baseUrl}/en` : `${baseUrl}/`;
  
  const faqSchema = generateFAQSchema(locale);
  const webPageSchema = generateWebPageSchema({
    title: isEn ? "Rayat Najd Fencing & Contracting" : "شبوك رايات نجد للمقاولات",
    description: isEn 
      ? "Supply and installation of fencing, steel fences, shades, and warehouse hangar structures in Saudi Arabia."
      : siteConfig.description,
    url: canonicalUrl,
    locale,
  });

  return (
    <>
      <script
        id="schema-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      {/* 1. Hero Section with Responsive Video (Intact & Independent) */}
      <HeroSection locale={locale} />

      {/* 2. Dynamic Cinematic Scroll-Driven Post-Hero Experience (4 Backgrounds + Content) */}
      <PostHeroCanvas locale={locale} />
    </>
  );
}


