import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const robotsTxt = `# Robots.txt for Rayat Najd (شبوك رايات نجد للمقاولات)
User-agent: *
Allow: /

# Disallow internal assets and technical endpoints from direct crawling
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Host and Canonical Sitemap Index
Host: ${baseUrl}
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
