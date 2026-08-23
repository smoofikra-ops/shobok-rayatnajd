"use client";

import Link from "next/link";
import { 
  Shield, 
  Fence, 
  HardHat, 
  Warehouse, 
  Factory, 
  Tractor, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Sparkles, 
  Clock, 
  FileSpreadsheet,
  ArrowUpRight
} from "lucide-react";

interface AnnouncementBannerProps {
  locale: string;
}

export function AnnouncementBanner({ locale }: AnnouncementBannerProps) {
  const isEn = locale === "en";

  const tickerItems = [
    // Key Strength: Classification & Experience
    {
      type: "strength",
      icon: Award,
      text: isEn ? "Contractor Classification — 3rd Grade" : "مصنفون لدى وكالة تصنيف المقاولين — الدرجة الثالثة",
      badge: isEn ? "Certified" : "معتمد",
      href: `/${locale}/about`,
      highlight: true
    },
    // Service 1
    {
      type: "service",
      icon: Shield,
      text: isEn ? "High-Security Fencing & Anti-Climb Mesh" : "الشبوك الأمنية المقاومة للقص والتسلق",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/security-fencing`,
    },
    // Strength: Experience
    {
      type: "strength",
      icon: Sparkles,
      text: isEn ? "Trusted Engineering Experience Since 2010" : "خبرة هندسية وميدانية موثوقة منذ 2010",
      badge: isEn ? "Experience" : "خبرة",
      href: `/${locale}/about`,
    },
    // Service 2
    {
      type: "service",
      icon: Fence,
      text: isEn ? "Architectural & Heavy-Duty Steel Fencing" : "السياج والأسوار الحديدية للمشاريع والمنشآت",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/steel-fencing`,
    },
    // Strength: Nationwide Coverage
    {
      type: "strength",
      icon: MapPin,
      text: isEn ? "Turnkey Execution Across All Regions in Saudi Arabia" : "تغطية ميدانية وتنفيذ شامل في كافة مناطق المملكة",
      badge: isEn ? "Coverage" : "تغطية",
      href: `/${locale}/contact`,
      highlight: true
    },
    // Service 3
    {
      type: "service",
      icon: Warehouse,
      text: isEn ? "Warehouse Hangars & Steel Structures" : "هياكل الهناجر والمستودعات والمرافق اللوجستية",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/warehouse-hangars`,
    },
    // Strength: Specs & BOQ
    {
      type: "strength",
      icon: FileSpreadsheet,
      text: isEn ? "Strict Adherence to BOQ & Engineering Drawings" : "التزام دقيق بالمخططات الفنية وجداول الكميات BOQ",
      badge: isEn ? "Standards" : "معايير",
      href: `/${locale}/request-quote`,
    },
    // Service 4
    {
      type: "service",
      icon: HardHat,
      text: isEn ? "Commercial Car Parking & Yard Canopies" : "مظلات مواقف السيارات والساحات والمشاريع",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/shades`,
    },
    // Service 5
    {
      type: "service",
      icon: Factory,
      text: isEn ? "Industrial Plants & Power Station Fencing" : "شبوك المنشآت الصناعية والمحطات الحيوية",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/industrial-fencing`,
    },
    // Strength: Punctuality
    {
      type: "strength",
      icon: Clock,
      text: isEn ? "Fast Response & On-Time Project Delivery" : "سرعة استجابة والتزام صارم بجداول التسليم",
      badge: isEn ? "Quality" : "التزام",
      href: `/${locale}/contact`,
    },
    // Service 6
    {
      type: "service",
      icon: Tractor,
      text: isEn ? "Farms & Nature Reserve Boundary Fencing" : "شبوك المزارع والمحميات والمشاريع الزراعية",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/farm-fencing`,
    },
    // Service 7
    {
      type: "service",
      icon: Shield,
      text: isEn ? "Hot-Dip Galvanized Anti-Corrosion Fencing" : "الشبوك المجلفنة بالغمس الساخن المقاومة للتآكل",
      badge: isEn ? "Service" : "خدمة",
      href: `/${locale}/services/galvanized-fencing`,
    },
    // Service 8
    {
      type: "service",
      icon: CheckCircle2,
      text: isEn ? "Full Supply & Installation or Supply-Only Options" : "خيارات التوريد والتركيب الشامل أو التوريد فقط",
      badge: isEn ? "Solutions" : "حلول",
      href: `/${locale}/services/supply-install`,
    }
  ];

  return (
    <aside 
      aria-label={isEn ? "Highlights and Services Banner" : "شريط الخدمات ونقاط القوة"}
      className="relative w-full bg-gradient-to-r from-[#200E08] via-[#3A1D12] to-[#200E08] text-white border-b border-amber-500/20 overflow-hidden select-none py-1.5 sm:py-2"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes header-ticker-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(${isEn ? '-50%' : '50%'}, 0, 0); }
        }
        .header-ticker-track {
          display: flex;
          width: max-content;
          animation: header-ticker-rtl 85s linear infinite;
          will-change: transform;
        }
        @media (max-width: 640px) {
          .header-ticker-track {
            animation-duration: 95s;
          }
        }
        .header-ticker-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .header-ticker-track {
            animation: none !important;
            overflow-x: auto;
          }
        }
      `}} />

      {/* Side Fade Masks for seamless edge blend */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#200E08] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#200E08] to-transparent z-10 pointer-events-none" />

      {/* Moving Track */}
      <div className="header-ticker-track items-center gap-4 sm:gap-6 px-4">
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              prefetch={true}
              className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 group shrink-0 ${
                item.highlight
                  ? "bg-gradient-to-r from-[#B56D2A]/30 to-[#7C3E1D]/30 border border-[#B56D2A]/40 text-[#f5d77f] hover:border-[#f5d77f]"
                  : "bg-white/5 hover:bg-white/15 border border-white/10 text-gray-200 hover:text-white"
              }`}
            >
              {/* Badge Tag */}
              <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                item.highlight
                  ? "bg-[#B56D2A] text-white shadow-xs"
                  : "bg-white/15 text-amber-200"
              }`}>
                {item.badge}
              </span>

              {/* Icon */}
              <Icon className={`w-3.5 h-3.5 shrink-0 ${
                item.highlight ? "text-[#f5d77f]" : "text-[#B9A174] group-hover:text-[#f5d77f]"
              }`} />

              {/* Text */}
              <span className="whitespace-nowrap font-medium text-xs">
                {item.text}
              </span>

              {/* Subtle Arrow on hover */}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#f5d77f] shrink-0" />

              {/* Separator Dot */}
              <span className="w-1 h-1 rounded-full bg-amber-500/40 ml-1 shrink-0" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
