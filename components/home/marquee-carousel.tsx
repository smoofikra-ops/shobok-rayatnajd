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
    <section className="py-12 md:py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="text-center max-w-2xl mx-auto px-4 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {isEn ? "Explore All Project Solutions" : "استكشف كافة حلول وخدمات المشاريع"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {isEn ? "Hover or tap on any service to explore detailed technical specifications" : "مرر أو اضغط على أي خدمة للاطلاع على نطاق العمل والمواصفات الفنية"}
        </p>
      </div>

      {/* Level 2: Moving Carousel */}
      <div className="relative w-full max-w-[100vw] overflow-x-clip bg-gray-50/60 py-8 border-y border-gray-200/60">
        <style dangerouslySetInnerHTML={{__html: `
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-rtl 40s linear infinite;
            gap: 1.25rem;
            padding: 0 1rem;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-rtl {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(${isEn ? '-50%' : '50%'}, 0, 0); }
          }
          .marquee-card { width: 78vw; max-width: 320px; }
          @media (min-width: 640px) { .marquee-card { width: 280px; } }
          @media (min-width: 1024px) { .marquee-card { width: 320px; } }
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
                className="marquee-card group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#B56D2A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#B56D2A] h-[340px]"
              >
                <div className="h-[160px] w-full relative bg-gray-100 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 80vw, 320px"
                  />
                  <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#7C3E1D] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1.5 line-clamp-1 group-hover:text-[#7C3E1D] transition-colors">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3 flex-1 leading-relaxed">
                    {desc}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[#7C3E1D] text-xs font-bold mt-auto">
                    <span>{dict.services.learnMore}</span>
                    <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isEn ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
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
