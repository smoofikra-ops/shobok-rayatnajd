"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { servicesData } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { ArrowLeft, Sparkles } from "lucide-react";

export function MainServicesGrid({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  
  // The 4 main services
  const mainSlugs = ["security-fencing", "steel-fencing", "shades", "warehouse-hangars"];
  const mainServices = mainSlugs
    .map(slug => servicesData.find(s => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50/40 via-white to-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold mb-3 border border-[#B56D2A]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.services.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            {dict.services.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {dict.services.subtitle}
          </p>
        </div>

        {/* 2x2 Grid on Mobile, 4 Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {mainServices.map((service, idx) => {
            if (!service) return null;
            const Icon = service.icon;
            const title = isEn ? service.titleEn : service.titleAr;
            const desc = isEn ? service.descEn : service.descAr;

            return (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className={`service-pulse-card service-card-${idx} group relative flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-2xl border border-amber-900/10 bg-gradient-to-br from-[#4A281A]/[0.03] via-[#B56D2A]/[0.05] to-[#B9A174]/[0.08] hover:from-[#4A281A]/[0.08] hover:via-[#B56D2A]/[0.1] hover:to-[#B9A174]/[0.15] hover:border-amber-700/30 hover:shadow-lg transition-all duration-300 active:scale-[0.98] min-h-[170px] sm:min-h-[210px] md:min-h-[230px]`}
              >
                {/* Top: Icon + Number */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm border border-amber-900/10 flex items-center justify-center text-[#7C3E1D] group-hover:bg-gradient-to-br group-hover:from-[#4A281A] group-hover:to-[#B56D2A] group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-amber-900/30 group-hover:text-amber-800/60 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Middle: Title & Short Desc */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-base md:text-lg leading-tight mb-1 sm:mb-1.5 group-hover:text-[#7C3E1D] transition-colors">
                    {title}
                  </h3>
                  <p className="hidden sm:block text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Bottom: Link CTA */}
                <div className="pt-2 sm:pt-3 mt-auto border-t border-amber-900/5 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#7C3E1D]">
                  <span>{dict.services.learnMore}</span>
                  <ArrowLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${isEn ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Global Keyframes for Sequential Pulse Loop */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes sequential-pulse {
            0%, 100% {
              box-shadow: 0 1px 3px rgba(0,0,0,0.05);
              border-color: rgba(124, 62, 29, 0.12);
              transform: translateY(0px) scale(1);
            }
            12.5%, 25% {
              box-shadow: 0 8px 20px -4px rgba(181, 109, 42, 0.25);
              border-color: rgba(181, 109, 42, 0.6);
              transform: translateY(-2px) scale(1.02);
            }
            37.5%, 90% {
              box-shadow: 0 1px 3px rgba(0,0,0,0.05);
              border-color: rgba(124, 62, 29, 0.12);
              transform: translateY(0px) scale(1);
            }
          }
          .service-card-0 { animation: sequential-pulse 8s ease-in-out infinite 0s; }
          .service-card-1 { animation: sequential-pulse 8s ease-in-out infinite 2s; }
          .service-card-2 { animation: sequential-pulse 8s ease-in-out infinite 4s; }
          .service-card-3 { animation: sequential-pulse 8s ease-in-out infinite 6s; }

          @media (prefers-reduced-motion: reduce) {
            .service-pulse-card {
              animation: none !important;
              transform: none !important;
            }
          }
        `}} />
      </Container>
    </section>
  );
}
