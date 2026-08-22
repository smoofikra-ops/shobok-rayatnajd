"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/dictionary";
import { FileSearch, ClipboardCheck, FileText, CheckCircle, Workflow } from "lucide-react";

export function HowWeWork({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stepIcons = [FileSearch, ClipboardCheck, FileText, CheckCircle];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gray-50/70 border-t border-gray-100 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/5 text-[#7C3E1D] text-xs font-bold mb-2 border border-amber-900/10">
            <Workflow className="w-3.5 h-3.5" />
            <span>{isEn ? "Execution Workflow" : "منهجية التنفيذ"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            {dict.howWeWork.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {dict.howWeWork.subtitle}
          </p>
        </div>

        {/* 4 Staggered Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {dict.howWeWork.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;

            return (
              <div
                key={idx}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
                className={`relative flex flex-col p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#B56D2A]/40 hover:shadow-md transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A281A] to-[#B56D2A] text-white flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="w-7 h-7 rounded-full bg-amber-50 text-[#7C3E1D] text-xs font-extrabold flex items-center justify-center border border-amber-200">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
