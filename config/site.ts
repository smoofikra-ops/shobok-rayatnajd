export const siteConfig = {
  name: "شبوك رايات نجد",
  description: "الموقع الرسمي لمؤسسة شبوك رايات نجد. نقدم أفضل خدمات تركيب الشبوك والمقاولات بأعلى معايير الجودة.",
  url: "https://rayatnajd.com",
  logo: "/images/logo.png",
  contact: {
    phone: "+966557555716",
    phoneDisplay: "0557555716",
    whatsapp: "966557555716",
  },
  social: {
    twitter: "https://twitter.com/rayatnajd",
    instagram: "https://instagram.com/rayatnajd",
  },
  mainNav: [
    { title: "الرئيسية", href: "/" },
    { title: "الخدمات", href: "/services" },
    { title: "المشاريع", href: "/projects" },
    { title: "من نحن", href: "/about" },
    { title: "تواصل معنا", href: "/contact" },
  ],
  mainNavEn: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
