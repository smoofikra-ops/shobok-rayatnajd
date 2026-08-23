"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { ArrowLeft } from "lucide-react";

export function MarqueeCarousel({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <section className="py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="text-center max-w-2xl mx-auto px-4 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {isEn ? "Explore All Project Solutions" : "استكشف كافة حلول وخدمات المشاريع"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 font-medium">
          {isEn ? "Hover or tap on any service to explore detailed technical specifications" : "مرر أو اضغط على أي خدمة للاطلاع على نطاق العمل والمواصفات الفنية"}
        </p>
      </div>

      {/* Level 2: Moving Carousel */}
      <div className="relative w-full max-w-[100vw] overflow-x-clip bg-white/75 backdrop-blur-md py-6 sm:py-8 border-y border-amber-900/10 shadow-sm">
        <style dangerouslySetInnerHTML={{__html: `
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-rtl 40s linear infinite;
            gap: 0.75rem;
            padding: 0 0.75rem;
          }
          @media (min-width: 640px) {
            .marquee-track {
              gap: 1.25rem;
              padding: 0 1rem;
            }
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-rtl {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(${isEn ? '-50%' : '50%'}, 0, 0); }
          }
          /* Mobile: display ~2.5 cards in viewport (37-39% width) */
          .marquee-card {
            width: 38vw;
            min-width: 130px;
            max-width: 175px;
          }
          @media (min-width: 640px) {
            .marquee-card {
              width: 280px;
              min-width: 280px;
              max-width: 280px;
            }
          }
          @media (min-width: 1024px) {
            .marquee-card {
              width: 320px;
              min-width: 320px;
              max-width: 320px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none !important; flex-wrap: wrap; justify-content: center; width: 100%; }
            .marquee-card { width: 100%; max-width: 340px; }
          }
        `}} />
        <div className="marquee-track">
          {[...servicesData, ...servicesData].map((service, idx) => {
            const Icon = service.icon;
            const title = isEn ? service.titleEn : service.titleAr;
            const desc = isEn ? service.descEn : service.descAr;

            return (
              <Link
                key={idx}
                href={`/${locale}/services/${service.slug}`}
                prefetch={true}
                className="marquee-card group flex flex-col bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:border-[#B56D2A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#B56D2A] h-[230px] sm:h-[340px]"
              >
                <div className="h-[95px] sm:h-[160px] w-full relative bg-gray-100 overflow-hidden shrink-0">
                  <Image 
                    src={service.image} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 280px, 320px"
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg flex items-center justify-center text-[#7C3E1D] shadow-sm">
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-base mb-1 sm:mb-1.5 line-clamp-1 group-hover:text-[#7C3E1D] transition-colors leading-tight">
                      {title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 mb-1 sm:mb-3 leading-snug sm:leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-gray-100 text-[#7C3E1D] text-[10px] sm:text-xs font-bold mt-auto">
                    <span>{dict.services.learnMore}</span>
                    <ArrowLeft className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${isEn ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
