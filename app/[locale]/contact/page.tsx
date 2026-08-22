import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { PhoneCall, MessagesSquare, Clock, MapPin, Building2, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "اتصل بنا | مؤسسة رايات نجد للمقاولات",
  description: "تواصل مع مؤسسة رايات نجد للمقاولات في الرياض وكافة مناطق المملكة العربية السعودية لتوريد وتركيب الشبوك والسياج والمظلات والهناجر.",
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <div className="bg-gray-50/40 pb-16 md:pb-24">
      {/* Header */}
      <section className="bg-gradient-to-b from-amber-900/10 via-white to-gray-50/40 py-12 md:py-16 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold border border-[#B56D2A]/20">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isEn ? "Direct Communications" : "قنوات التواصل المباشرة"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {dict.contact.heroTitle}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {dict.contact.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Direct Channels */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Phone Call Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center text-center space-y-4 hover:border-[#B56D2A]/40 transition-all">
              <div className="w-14 h-14 bg-amber-50 text-[#7C3E1D] rounded-2xl flex items-center justify-center border border-amber-100">
                <PhoneCall className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {dict.contact.directCall}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm max-w-xs">
                {dict.contact.directCallDesc}
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                dir="ltr"
                className="text-2xl font-extrabold text-[#7C3E1D] hover:underline pt-2 block"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full bg-[#4A281A] hover:bg-[#7C3E1D] text-white py-3.5 px-6 rounded-xl font-bold text-sm mt-2 block transition-colors text-center shadow-sm"
              >
                {dict.contact.callBtn}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center text-center space-y-4 hover:border-[#25D366]/40 transition-all">
              <div className="w-14 h-14 bg-green-50 text-[#25D366] rounded-2xl flex items-center justify-center border border-green-100">
                <MessagesSquare className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {dict.contact.whatsappChat}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm max-w-xs">
                {dict.contact.whatsappChatDesc}
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                dir="ltr"
                className="text-2xl font-extrabold text-[#128C7E] hover:underline pt-2 block"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن توريد/تركيب الشبوك لمشروع.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 rounded-xl font-bold text-sm mt-2 block transition-colors text-center shadow-sm"
              >
                {dict.contact.whatsappBtn}
              </a>
            </div>
          </div>

          {/* Location & Coverage */}
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                {isEn ? "Headquarters" : "المقر الرئيسي"}
              </h3>
              <p className="text-xs text-gray-600">
                {isEn ? "Riyadh, Kingdom of Saudi Arabia" : "الرياض، المملكة العربية السعودية"}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mx-auto">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                {isEn ? "Geographic Scope" : "النطاق الجغرافي"}
              </h3>
              <p className="text-xs text-gray-600">
                {isEn ? "All Saudi Regions & Industrial Cities" : "كافة مناطق المملكة والمدن الصناعية"}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mx-auto">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                {isEn ? "Coordination & Direct Inquiries" : "التنسيق الهندسي والاستفسارات"}
              </h3>
              <p className="text-xs text-gray-600">
                {isEn ? "Daily via Direct Call & WhatsApp" : "يومياً عبر الاتصال والواتساب المباشر"}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
