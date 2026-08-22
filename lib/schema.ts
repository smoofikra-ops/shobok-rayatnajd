import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": siteConfig.logo,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
  };
}
