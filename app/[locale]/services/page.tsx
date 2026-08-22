import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { servicesData } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, FileText, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات الشبوك والسياج والمظلات والهناجر | رايات نجد",
  description: "دليل شامل لكافة خدمات الشبوك الأمنية، السياج الحديدي، شبوك المزارع والمصانع، المظلات، وهياكل الهناجر من رايات نجد للمقاولات.",
};

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <div className="py-12 md:py-20 bg-gray-50/50">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold mb-3 border border-[#B56D2A]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.services.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {dict.services.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {dict.services.subtitle}
          </p>

          {/* Technical Note / Disclaimer Banner */}
          <div className="mt-6 inline-flex items-center gap-2 p-3.5 px-5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 text-right leading-snug">
            <Info className="w-4 h-4 text-[#B56D2A] shrink-0" />
            <span>{dict.services.disclaimer}</span>
          </div>
        </div>

        {/* Full Grid of All 10 Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const title = isEn ? service.titleEn : service.titleAr;
            const desc = isEn ? service.descEn : service.descAr;
            const scope = isEn ? service.scopeEn : service.scopeAr;

            return (
              <div
                key={service.slug}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#B56D2A] hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                {/* Image & Icon Badge */}
                <div className="h-[200px] w-full relative bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-[#7C3E1D] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  {service.isMain && (
                    <div className="absolute bottom-3 left-3 bg-[#4A281A]/85 backdrop-blur-sm text-[#f5d77f] text-[10px] font-bold py-0.5 px-2.5 rounded-full border border-amber-500/20">
                      {isEn ? "Main Service" : "خدمة رئيسية"}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg md:text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#7C3E1D] transition-colors">
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {desc}
                  </p>

                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100 mb-6 flex-1 line-clamp-3">
                    <span className="font-bold text-gray-700 block mb-1">
                      {isEn ? "Scope & Execution:" : "نطاق العمل:"}
                    </span>
                    {scope}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="flex-1 bg-[#4A281A] hover:bg-[#7C3E1D] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-colors flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>{dict.services.learnMore}</span>
                      <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isEn ? "rotate-180 group-hover/btn:translate-x-1" : "group-hover/btn:-translate-x-1"}`} />
                    </Link>
                    <Link
                      href={`/${locale}/request-quote?service=${encodeURIComponent(service.slug)}`}
                      className="bg-amber-50 hover:bg-amber-100 text-[#7C3E1D] border border-amber-200 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{isEn ? "Quote" : "تسعير"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
