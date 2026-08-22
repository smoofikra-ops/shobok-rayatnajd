export const siteConfig = {
  name: "شبوك رايات نجد",
  description: "الموقع الرسمي لمؤسسة شبوك رايات نجد. نقدم أفضل خدمات تركيب الشبوك والمقاولات بأعلى معايير الجودة.",
  url: "https://rayatnajd.com",
  logo: "/images/logo.png",
  contact: {
    phone: "+966500000000",
    phoneDisplay: "0500000000",
    whatsapp: "966500000000",
    email: "info@rayatnajd.com",
    address: "المملكة العربية السعودية، الرياض - الصناعية",
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
