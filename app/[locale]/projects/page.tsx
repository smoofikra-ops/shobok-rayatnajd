import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/dictionary";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Briefcase, Building2, CheckCircle2, ShieldCheck, FileSpreadsheet, MessagesSquare, PhoneCall, ArrowLeft, Warehouse, Tractor, Factory } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import Image from "next/image";

export const metadata: Metadata = {
  title: "المشاريع ونطاق التنفيذ | مؤسسة رايات نجد للمقاولات",
  description: "نطاق تنفيذ المشاريع والقدرات التشغيلية لتوريد وتركيب الشبوك والسياج والمظلات والهناجر في المملكة العربية السعودية.",
};

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  const capabilities = [
    {
      titleAr: "مشاريع الشبوك والسياج الأمني",
      titleEn: "Security & Perimeter Fencing Projects",
      descAr: "تنفيذ وتوريد شبوك أمنية وسياج حديدي للمواقع الحيوية والحدود والمنشآت بمواصفات معتمدة.",
      descEn: "Supply and installation of perimeter security fencing for vital facilities and borders.",
      icon: ShieldCheck,
    },
    {
      titleAr: "مشاريع المزارع والأراضي والمخططات",
      titleEn: "Farm & Agricultural Land Projects",
      descAr: "تسييج وحماية الأراضي الزراعية والمخططات الكبرى بالشبوك المجلفنة وشبوك المزارع.",
      descEn: "Fencing large agricultural parcels and masterplans with galvanized and farm mesh.",
      icon: Tractor,
    },
    {
      titleAr: "المشاريع الصناعية واللوجستية",
      titleEn: "Industrial & Logistics Facilities",
      descAr: "تركيب شبوك حماية المصانع، وهياكل الهناجر، ومستودعات التخزين ومراكز التوزيع.",
      descEn: "Industrial security fences, warehouse hangar steel structures, and logistics yards.",
      icon: Factory,
    },
    {
      titleAr: "مشاريع المظلات والمواقف والمرافق",
      titleEn: "Canopies & Parking Facilities",
      descAr: "تصنيع وتركيب مظلات السيارات والساحات والمرافق العامة والخاصة بجودة ومتانة عالية.",
      descEn: "High durability shade structures for vehicle parking, parks, and institutional facilities.",
      icon: Warehouse,
    },
  ];

  return (
    <div className="bg-gray-50/40 pb-16 md:pb-24">
      {/* 1. Hero Header */}
      <section className="bg-gradient-to-b from-amber-900/10 via-white to-gray-50/40 py-12 md:py-20 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold border border-[#B56D2A]/20">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isEn ? "Project Scope & Execution" : "نطاق تنفيذ المشاريع والقدرات التشغيلية"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {dict.projects.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {dict.projects.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Capabilities & Execution Scope */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {dict.projects.sectorsTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {dict.projects.sectorsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-[#B56D2A]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#7C3E1D] flex items-center justify-center mb-4 border border-amber-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {isEn ? cap.titleEn : cap.titleAr}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        {isEn ? cap.descEn : cap.descAr}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#7C3E1D]">
                      <CheckCircle2 className="w-4 h-4 text-[#B56D2A]" />
                      <span>{isEn ? "Execution per specifications & BOQ" : "تنفيذ حسب المخططات وجدول الكميات"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Real Service Showcase Grid */}
      <section className="py-12 bg-white border-y border-gray-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              {isEn ? "Field Capabilities & Supply Streams" : "القدرات الميدانية وخطوط التوريد"}
            </h2>
            <p className="text-sm text-gray-600">
              {isEn ? "Explore key technical streams executed across various regions in Saudi Arabia" : "استعرض أبرز خطوط العمل المعتمدة التي ننفذها في مختلف مناطق المملكة"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.slice(0, 4).map((service) => {
              const title = isEn ? service.titleEn : service.titleAr;
              return (
                <Link
                  key={service.slug}
                  href={`/${locale}/services/${service.slug}`}
                  className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#B56D2A] hover:shadow-lg transition-all"
                >
                  <div className="h-44 relative bg-gray-200">
                    <Image src={service.image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#7C3E1D] transition-colors">
                      {title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-xs text-[#7C3E1D] font-bold pt-2 border-t border-gray-200/60">
                      <span>{dict.services.learnMore}</span>
                      <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isEn ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. RFQ Coordination Box */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2D160E] to-[#4A281A] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl border border-amber-900/30">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#f5d77f] text-xs font-bold">
              {dict.projects.rfqTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {isEn ? "Have a Project with BOQ or Technical Drawings?" : "هل لديك مشروع بمخططات أو جدول كميات؟"}
            </h2>
            <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {dict.projects.rfqText}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={`/${locale}/request-quote`}
                className="w-full sm:w-auto bg-gradient-to-r from-[#B56D2A] to-[#B9A174] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>{dict.hero.quoteBtn}</span>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، نود إرسال جدول كميات/مخططات لمشروع لتسعيره.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg"
                dir="ltr"
              >
                <MessagesSquare className="w-4 h-4" />
                <span>{dict.hero.whatsappBtn}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
