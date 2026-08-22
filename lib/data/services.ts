import { Shield, Fence, HardHat, Warehouse, Factory, Tractor, CheckCircle2, Hammer, LucideIcon } from "lucide-react";

export type ServiceData = {
  slug: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: LucideIcon;
  image: string;
  isMain?: boolean;
};

export const servicesData: ServiceData[] = [
  {
    slug: "security-fencing",
    titleAr: "الشبوك الأمنية",
    titleEn: "Security Fencing",
    descAr: "حلول لحماية وتحديد المواقع والمنشآت حسب متطلبات المشروع.",
    descEn: "Solutions for securing and defining sites and facilities based on project requirements.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",
    isMain: true,
  },
  {
    slug: "steel-fencing",
    titleAr: "السياج الحديدي",
    titleEn: "Steel Fencing",
    descAr: "للمشاريع والمرافق والمنشآت وفق نطاق العمل والمواصفات المطلوبة.",
    descEn: "For projects, facilities, and structures according to the scope of work and required specifications.",
    icon: Fence,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    isMain: true,
  },
  {
    slug: "shades",
    titleAr: "المظلات",
    titleEn: "Shades",
    descAr: "توريد وتنفيذ للمشاريع والمواقع حسب الاستخدام والمقاسات.",
    descEn: "Supply and installation for projects and sites based on usage and dimensions.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    isMain: true,
  },
  {
    slug: "warehouse-hangars",
    titleAr: "هياكل الهناجر",
    titleEn: "Warehouse Hangars",
    descAr: "توريد وتركيب هياكل الهناجر للمستودعات والمرافق وفق المواصفات.",
    descEn: "Supply and installation of hangar structures for warehouses and facilities according to specifications.",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    isMain: true,
  },
  {
    slug: "industrial-fencing",
    titleAr: "شبوك المنشآت الصناعية",
    titleEn: "Industrial Fencing",
    descAr: "تأمين وتسوير المواقع والمرافق الصناعية بحلول مخصصة.",
    descEn: "Securing and fencing industrial sites and facilities with customized solutions.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "farm-fencing",
    titleAr: "شبوك المزارع",
    titleEn: "Farm Fencing",
    descAr: "حلول تسوير وحماية الأراضي والمشاريع الزراعية المختلفة.",
    descEn: "Fencing and protection solutions for various agricultural lands and projects.",
    icon: Tractor,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "galvanized-fencing",
    titleAr: "الشبوك المجلفنة",
    titleEn: "Galvanized Fencing",
    descAr: "شبوك مقاومة للصدأ والعوامل الجوية للمشاريع طويلة الأجل.",
    descEn: "Rust-resistant and weatherproof fencing for long-term projects.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "supply-install",
    titleAr: "توريد وتركيب",
    titleEn: "Supply & Install",
    descAr: "حل شامل لتنفيذ المشروع بالكامل من التوريد حتى التسليم النهائي.",
    descEn: "A comprehensive solution for full project execution, from supply to final delivery.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "supply-only",
    titleAr: "توريد فقط",
    titleEn: "Supply Only",
    descAr: "توفير المواد حسب المواصفات والكميات المطلوبة للمشروع.",
    descEn: "Providing materials according to the required specifications and quantities for the project.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "install-only",
    titleAr: "تركيب فقط",
    titleEn: "Install Only",
    descAr: "تنفيذ الأعمال بواسطة فريق متخصص بناءً على المواد المتوفرة.",
    descEn: "Execution of works by a specialized team based on available materials.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  }
];
