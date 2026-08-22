export const dictionaries = {
  ar: {
    hero: {
      subtitle: "مؤسسة رايات نجد للمقاولات",
      title: "حلول الشبوك، السياج، المظلات، والهناجر للمشاريع",
      desc: "توريد وتركيب بمواصفات عالية تناسب احتياج مشروعك. تُحدد المواصفات والمقاسات والكميات حسب متطلبات الموقع والمخططات ونطاق العمل.",
      quoteBtn: "طلب عرض سعر",
      whatsappBtn: "تواصل عبر واتساب",
    },
    services: {
      title: "حلول الشبوك والخدمات",
      mainServices: "الخدمات الرئيسية",
      learnMore: "اعرف المزيد",
    },
    footer: {
      company: "مؤسسة رايات نجد للمقاولات",
      contact: "تواصل معنا",
      links: "روابط سريعة",
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      about: "من نحن",
      contact: "تواصل معنا",
    },
  },
  en: {
    hero: {
      subtitle: "Rayat Najd Contracting Est.",
      title: "Fencing, Shades, and Hangar Solutions for Projects",
      desc: "High-quality supply and installation tailored to your project. Specifications, sizes, and quantities are determined based on site requirements, layouts, and scope of work.",
      quoteBtn: "Request Quote",
      whatsappBtn: "WhatsApp Us",
    },
    services: {
      title: "Fencing Solutions & Services",
      mainServices: "Main Services",
      learnMore: "Learn More",
    },
    footer: {
      company: "Rayat Najd Contracting Est.",
      contact: "Contact Us",
      links: "Quick Links",
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Us",
      contact: "Contact",
    },
  }
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: string) {
  return dictionaries[locale as Locale] || dictionaries.ar;
}
