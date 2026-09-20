import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date().toISOString();

  // Multi-sitemap Index XML
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndexXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
