"use client";

import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/dictionary";
import { Award, FileCheck, Sliders, Users, Layers, CheckCircle2 } from "lucide-react";

export function WhyRayatNajd({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  const icons = [Award, FileCheck, Sliders, Users, Layers];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{isEn ? "Proven Experience" : "خبرة وجودة معتمدة"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            {dict.whyUs.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {dict.whyUs.subtitle}
          </p>
        </div>

        {/* 5 Distinct Visual Cards in an Adaptive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {dict.whyUs.points.map((point, idx) => {
            const Icon = icons[idx] || CheckCircle2;
            const isFullSpanOnDesktop = idx === 4;

            return (
              <div
                key={idx}
                className={`flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-gray-200/90 bg-gradient-to-br from-white via-amber-50/20 to-amber-100/10 hover:border-[#B56D2A]/40 hover:shadow-md transition-all duration-300 ${
                  isFullSpanOnDesktop ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#4A281A] to-[#B56D2A] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-extrabold text-[#B56D2A] mb-1">
                    {isEn ? `Advantage 0${idx + 1}` : `ميزة 0${idx + 1}`}
                  </div>
                  <p className="text-sm sm:text-base font-bold text-gray-800 leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
