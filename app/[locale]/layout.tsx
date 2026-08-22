import type { Metadata } from "next";
import Script from "next/script";
import { Almarai } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import "@/app/globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-almarai",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === "en";
  return {
    title: {
      default: isEn ? "Rayat Najd Fencing | Supply & Installation" : siteConfig.name,
      template: isEn ? "%s | Rayat Najd" : `%s | ${siteConfig.name}`,
    },
    description: isEn 
      ? "Supply and installation of fencing, steel fences, shades, and warehouse hangar structures for projects in Saudi Arabia, based on project requirements and specifications."
      : siteConfig.description,
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
