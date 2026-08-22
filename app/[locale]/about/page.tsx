import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/dictionary";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Award, ShieldCheck, Target, Eye, CheckCircle2, FileText, MessagesSquare, PhoneCall, Building2, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن | مؤسسة رايات نجد للمقاولات",
  description: "نبذة عن مؤسسة رايات نجد للمقاولات، تأسست عام 2010 في المملكة العربية السعودية، تصنيف المقاولين الدرجة الثالثة، متخصصة في إدارة وتنفيذ المشاريع والشبوك والمظلات والهناجر.",
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <div className="bg-gray-50/40 pb-16 md:pb-24">
      {/* 1. Hero Header */}
      <section className="bg-gradient-to-b from-amber-900/10 via-white to-gray-50/40 py-12 md:py-20 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold border border-[#B56D2A]/20">
              <Award className="w-3.5 h-3.5" />
              <span>{isEn ? "Est. 2010 — Saudi Arabia" : "تأسست عام 2010 — المملكة العربية السعودية"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {dict.about.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {dict.about.heroSubtitle}
            </p>

            {/* Classification Badge Card */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 p-3.5 px-6 rounded-2xl bg-white border border-amber-300 shadow-md text-amber-900 font-extrabold text-sm sm:text-base">
                <Award className="w-5 h-5 text-[#B56D2A] shrink-0" />
                <span>{dict.about.classificationBadge}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Establishment Overview */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-[#7C3E1D]">
                <Building2 className="w-6 h-6 text-[#B56D2A]" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {dict.about.introTitle}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {dict.about.introText}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-8">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#7C3E1D] flex items-center justify-center mb-5 shadow-sm border border-amber-100">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dict.about.visionTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {dict.about.visionText}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#7C3E1D] flex items-center justify-center mb-5 shadow-sm border border-amber-100">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dict.about.missionTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {dict.about.missionText}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Documented Scope of Activities */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#B56D2A]" />
              <span>{dict.about.activitiesTitle}</span>
            </h3>

            <div className="space-y-4">
              {dict.about.activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-900/10 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B56D2A] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 font-bold leading-relaxed">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Core Values */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                {dict.about.valuesTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {dict.about.values.map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#B56D2A]/40 transition-all">
                  <div className="text-xs font-extrabold text-[#B56D2A] mb-1">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="py-8">
        <Container>
          <div className="max-w-4xl mx-auto bg-[#4A281A] rounded-3xl p-8 text-center text-white space-y-6">
            <h3 className="text-2xl font-bold">
              {isEn ? "Ready to discuss your project requirements?" : "جاهز لبدء التنسيق ومناقشة مشروعك؟"}
            </h3>
            <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto">
              {isEn 
                ? "Contact our engineering and sales coordination team for inquiries, tenders, and proposals."
                : "تواصل مع فريق التنسيق الهندسي لطلب الاستشارات، جداول الكميات، والمقترحات الفنية."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/${locale}/request-quote`}
                className="w-full sm:w-auto bg-gradient-to-r from-[#B56D2A] to-[#B9A174] text-white px-7 py-3 rounded-xl font-bold text-sm"
              >
                {dict.hero.quoteBtn}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="w-full sm:w-auto bg-[#25D366] text-white px-7 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
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
