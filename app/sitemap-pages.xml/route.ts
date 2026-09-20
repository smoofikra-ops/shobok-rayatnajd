import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date().toISOString();

  const staticPages = [
    {
      arPath: "",
      enPath: "/en",
      changefreq: "daily",
      priority: "1.0",
    },
    {
      arPath: "/services",
      enPath: "/en/services",
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      arPath: "/projects",
      enPath: "/en/projects",
      changefreq: "weekly",
      priority: "0.85",
    },
    {
      arPath: "/request-quote",
      enPath: "/en/request-quote",
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      arPath: "/about",
      enPath: "/en/about",
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      arPath: "/contact",
      enPath: "/en/contact",
      changefreq: "monthly",
      priority: "0.8",
    },
  ];

  const urlsXml = staticPages
    .flatMap((page) => {
      const arUrl = `${baseUrl}${page.arPath || "/"}`;
      const enUrl = `${baseUrl}${page.enPath}`;

      return [
        `  <url>
    <loc>${arUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />
  </url>`,
        `  <url>
    <loc>${enUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${(parseFloat(page.priority) - 0.05).toFixed(2)}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />
  </url>`,
      ];
    })
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
