import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const paths = [
    "",
    "/services",
    "/projects",
    "/request-quote",
    "/about",
    "/contact",
    ...servicesData.map(({ slug }) => `/services/${slug}`),
  ];

  return paths.flatMap((path) => {
    const ar = `${baseUrl}${path || "/"}`;
    const en = `${baseUrl}/en${path}`;
    const alternates = { languages: { ar, en, "x-default": ar } };

    return [
      { url: ar, alternates },
      { url: en, alternates },
    ];
  });
}
