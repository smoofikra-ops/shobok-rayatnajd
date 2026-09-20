import type { Metadata } from "next";
import Script from "next/script";
import { Almarai } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import "@/app/globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-almarai",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === "en";
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = isEn ? `${baseUrl}/en` : `${baseUrl}/`;

  const siteTitle = isEn ? "Rayat Najd Fencing | Supply & Installation" : siteConfig.name;
  const siteDesc = isEn 
    ? "Supply and installation of fencing, steel fences, shades, and warehouse hangar structures for projects in Saudi Arabia, based on project requirements and specifications."
    : siteConfig.description;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: siteTitle,
      template: isEn ? "%s | Rayat Najd Contracting" : `%s | ${siteConfig.name}`,
    },
    description: siteDesc,
    applicationName: siteConfig.name,
    authors: [{ name: "مؤسسة رايات نجد للمقاولات", url: baseUrl }],
    creator: "رايات نجد للمقاولات",
    publisher: "رايات نجد للمقاولات",
    keywords: [
      "شبوك",
      "شبوك رايات نجد",
      "توريد شبوك",
      "تركيب شبوك",
      "سياج حديدي",
      "شبوك أمنية",
      "شبوك مزارع",
      "مظلات سيارات",
      "هناجر ومستودعات",
      "مقاولات شبوك السعودية",
      "Security fencing Saudi Arabia",
      "Steel fence contractor Riyadh",
      "Warehouse hangars Saudi Arabia",
      "Canopies and shades supplier"
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ar": `${baseUrl}/`,
        "en": `${baseUrl}/en`,
        "x-default": `${baseUrl}/`,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "ar_SA",
      alternateLocale: isEn ? ["ar_SA"] : ["en_US"],
      url: canonicalUrl,
      title: siteTitle,
      description: siteDesc,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.logo,
          width: 800,
          height: 600,
          alt: "شعار مؤسسة شبوك رايات نجد للمقاولات",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDesc,
      images: [siteConfig.logo],
      creator: "@rayatnajd",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "PxxGIAufQg0K4F7x52Y-uwb6xor_BjH97qe3Ov-l_6U",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const dir = locale === "en" ? "ltr" : "rtl";
  const orgSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang={locale} dir={dir}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GPMEM57VTH"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GPMEM57VTH');
          `}
        </Script>
        {/* Global Organization & WebSite JSON-LD Schema */}
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`min-h-screen flex flex-col ${almarai.className}`}>
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <FloatingActions locale={locale} />
      </body>
    </html>
  );
}
