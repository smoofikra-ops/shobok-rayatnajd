import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/lib/data/services";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date().toISOString();

  const urlsXml = servicesData
    .flatMap((service) => {
      const arUrl = `${baseUrl}/services/${service.slug}`;
      const enUrl = `${baseUrl}/en/services/${service.slug}`;
      const priority = service.isMain ? "0.9" : "0.8";

      return [
        `  <url>
    <loc>${arUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>${service.image}</image:loc>
      <image:title>${service.titleAr}</image:title>
    </image:image>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />
  </url>`,
        `  <url>
    <loc>${enUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${(parseFloat(priority) - 0.05).toFixed(2)}</priority>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>${service.image}</image:loc>
      <image:title>${service.titleEn}</image:title>
    </image:image>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />
  </url>`,
      ];
    })
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
