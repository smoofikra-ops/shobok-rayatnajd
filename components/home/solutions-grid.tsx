"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Shield, Fence, HardHat, Warehouse, Factory, Tractor, Sparkles, Building2 } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";

export function SolutionsGrid({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  const solutions = [
    { titleAr: "شبوك مجلفنة", titleEn: "Galvanized Fencing", slug: "galvanized-fencing", icon: Shield },
    { titleAr: "شبوك أمنية", titleEn: "Security Fencing", slug: "security-fencing", icon: Shield },
    { titleAr: "شبوك مزارع", titleEn: "Farm Fencing", slug: "farm-fencing", icon: Tractor },
    { titleAr: "شبوك صناعية", titleEn: "Industrial Fencing", slug: "industrial-fencing", icon: Factory },
    { titleAr: "سياج حديدي", titleEn: "Steel Fencing", slug: "steel-fencing", icon: Fence },
    { titleAr: "مظلات متنوعة", titleEn: "Shades & Canopies", slug: "shades", icon: HardHat },
    { titleAr: "هياكل هناجر", titleEn: "Warehouse Hangars", slug: "warehouse-hangars", icon: Warehouse },
    { titleAr: "سياج المشاريع", titleEn: "Site Barriers", slug: "supply-install", icon: Building2 },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <Container>
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B56D2A]" />
            <span>{dict.solutions.title}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {dict.solutions.subtitle}
          </h2>
        </div>

        {/* Mobile: 3 + 3 + 2 Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            // On mobile 3-col grid, the last 2 items (indices 6 & 7) can center nicely or span
            const isLastTwoOnMobile = idx >= 6;

            return (
              <Link
                key={idx}
                href={`/${locale}/services/${item.slug}`}
                className={`group flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/60 hover:from-amber-50/30 hover:to-amber-100/20 hover:border-amber-600/30 hover:shadow-md active:scale-95 transition-all duration-200 min-h-[95px] sm:min-h-[110px] ${
                  isLastTwoOnMobile ? "col-span-1.5 sm:col-span-1" : ""
                }`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-900/5 text-[#7C3E1D] group-hover:bg-[#7C3E1D] group-hover:text-white flex items-center justify-center mb-1.5 transition-colors shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-800 group-hover:text-[#7C3E1D] leading-snug line-clamp-1">
                  {isEn ? item.titleEn : item.titleAr}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
