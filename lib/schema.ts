import { siteConfig } from "@/config/site";
import { ServiceData } from "@/lib/data/services";
import { dictionaries, getDictionary } from "@/lib/dictionary";

const BASE_URL = siteConfig.url;

/**
 * Organization & General Contractor LocalBusiness Schema
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    "name": "مؤسسة رايات نجد للمقاولات",
    "alternateName": ["شبوك رايات نجد", "رايات نجد للمقاولات", "Rayat Najd Fencing & Contracting"],
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      "url": siteConfig.logo,
      "caption": "شعار مؤسسة شبوك رايات نجد للمقاولات"
    },
    "image": siteConfig.logo,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Bank Transfer, Cash",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك عبدالعزيز",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia",
        "alternateName": "المملكة العربية السعودية"
      },
      {
        "@type": "AdministrativeArea",
        "name": "منطقة الرياض"
      },
      {
        "@type": "AdministrativeArea",
        "name": "المنطقة الشرقية"
      },
      {
        "@type": "AdministrativeArea",
        "name": "منطقة مكة المكرمة"
      },
      {
        "@type": "AdministrativeArea",
        "name": "منطقة القصيم"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "sales & customer support",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/shboknajd/",
      "https://www.tiktok.com/@shbooknajd",
      "https://x.com/shboknajd"
    ],
    "knowsAbout": [
      "توريد وتركيب الشبوك الأمنية",
      "السياج الحديدي والأسوار المعدنية",
      "مظلات السيارات والساحات والمشاريع",
      "هياكل الهناجر والمستودعات والمخازن",
      "شبوك المنشآت الصناعية والمزارع",
      "Security Fencing",
      "Steel Fencing & Barriers",
      "Industrial & Agricultural Fencing",
      "Warehouse Hangars & Steel Structures",
      "Canopies & Car Parking Shades"
    ]
  };
}

/**
 * WebSite Structured Data Schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": "شبوك رايات نجد",
    "alternateName": "Rayat Najd Fencing",
    "description": siteConfig.description,
    "inLanguage": ["ar", "en"],
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    }
  };
}

/**
 * BreadcrumbList Structured Data Schema
 */
export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.path.startsWith("http") ? item.path : `${BASE_URL}${item.path}`
    }))
  };
}

/**
 * Service Structured Data Schema
 */
export function generateServiceSchema(service: ServiceData, locale: string) {
  const isEn = locale === "en";
  const title = isEn ? service.titleEn : service.titleAr;
  const desc = isEn ? service.descEn : service.descAr;
  const canonicalUrl = isEn ? `${BASE_URL}/en/services/${service.slug}` : `${BASE_URL}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": title,
    "serviceType": isEn ? "Contracting & Construction Service" : "خدمات مقاولات وتوريد وتركيب",
    "description": desc,
    "image": service.image,
    "url": canonicalUrl,
    "provider": {
      "@id": `${BASE_URL}/#organization`
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia",
      "alternateName": "المملكة العربية السعودية"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock",
      "url": isEn ? `${BASE_URL}/en/request-quote` : `${BASE_URL}/request-quote`
    }
  };
}

/**
 * FAQ Structured Data Schema for Homepage
 */
export function generateFAQSchema(locale: string) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dict.faq.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

/**
 * WebPage Structured Data Schema
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  locale
}: {
  title: string;
  description: string;
  url: string;
  locale: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "inLanguage": locale === "en" ? "en" : "ar",
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "about": {
      "@id": `${BASE_URL}/#organization`
    }
  };
}
