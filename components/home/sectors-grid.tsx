"use client";

import { Container } from "@/components/ui/container";
import { Landmark, Factory, Tractor, Briefcase, ShieldCheck, Warehouse, Target } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";

export function SectorsGrid({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  const sectors = [
    { titleAr: "المشاريع الحكومية", titleEn: "Government Projects", icon: Landmark },
    { titleAr: "المنشآت الصناعية", titleEn: "Industrial Facilities", icon: Factory },
    { titleAr: "المشاريع الزراعية", titleEn: "Agricultural Projects", icon: Tractor },
    { titleAr: "المشاريع التجارية", titleEn: "Commercial Projects", icon: Briefcase },
    { titleAr: "المواقع والمرافق", titleEn: "Sites & Facilities", icon: ShieldCheck },
    { titleAr: "المستودعات واللوجستيات", titleEn: "Warehouses & Logistics", icon: Warehouse },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50/60 border-t border-gray-100">
      <Container>
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/5 text-[#7C3E1D] text-xs font-bold mb-2 border border-amber-900/10">
            <Target className="w-3.5 h-3.5" />
            <span>{dict.sectors.title}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {dict.sectors.subtitle}
          </h2>
        </div>

        {/* Compact Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-xl border border-gray-200/90 bg-white hover:border-[#B56D2A]/40 hover:shadow-md transition-all duration-300 min-h-[100px] sm:min-h-[120px]"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-50 to-amber-100/60 text-[#7C3E1D] flex items-center justify-center mb-2 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                  {isEn ? sector.titleEn : sector.titleAr}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
