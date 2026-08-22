import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/dictionary";
import { RequestQuoteForm } from "@/components/quote/request-quote-form";
import { FileText, PhoneCall, MessagesSquare, Clock, ShieldCheck, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "طلب عرض سعر | مؤسسة رايات نجد للمقاولات",
  description: "نموذج طلب عرض سعر وتوريد وتركيب الشبوك الأمنية، السياج الحديدي، المظلات، وهياكل الهناجر من رايات نجد للمقاولات.",
};

export default function RequestQuotePage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <div className="bg-gray-50/40 pb-16 md:pb-24">
      {/* Header */}
      <section className="bg-gradient-to-b from-amber-900/10 via-white to-gray-50/40 py-12 md:py-16 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B56D2A]/10 text-[#7C3E1D] text-xs font-bold border border-[#B56D2A]/20">
              <FileText className="w-3.5 h-3.5" />
              <span>{isEn ? "Direct Quotation Request" : "طلب تسعير مباشر للمشاريع"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {dict.quote.heroTitle}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {dict.quote.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Form */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="p-12 text-center bg-white rounded-3xl border border-gray-200">جاري تحميل النموذج...</div>}>
                <RequestQuoteForm locale={locale} />
              </Suspense>
            </div>

            {/* Side Information Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct WhatsApp Callout */}
              <div className="bg-gradient-to-br from-[#2D160E] to-[#4A281A] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-amber-900/30">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#f5d77f] text-xs font-bold mb-4">
                  {isEn ? "Fast Track via WhatsApp" : "تنسيق عاجل وفوري"}
                </span>
                <h3 className="text-lg font-bold mb-2">
                  {isEn ? "Have urgent project drawings?" : "هل لديك مخططات أو جداول كميات عاجلة؟"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {isEn
                    ? "Send your PDF files or site location directly to our engineering coordination line."
                    : "أرسل ملفات الـ PDF أو موقع العمل مباشرة لفريق التنسيق لتسريع المراجعة."}
                </p>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، نود إرسال مخططات وجداول كميات لمشروع عاجل.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white p-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md"
                  dir="ltr"
                >
                  <MessagesSquare className="w-4 h-4" />
                  <span>{siteConfig.contact.phoneDisplay} (واتساب)</span>
                </a>
              </div>

              {/* Guarantees / Service Notes */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B56D2A]" />
                  <span>{isEn ? "Our Commitment" : "التزامنا تجاه مشاريعكم"}</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B56D2A] shrink-0 mt-0.5" />
                    <span>{isEn ? "Response within business hours" : "مراجعة سريعة للمتطلبات والكميات"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B56D2A] shrink-0 mt-0.5" />
                    <span>{isEn ? "Custom engineering proposals per BOQ" : "عروض أسعار مخصصة طبقاً للمواصفات"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B56D2A] shrink-0 mt-0.5" />
                    <span>{isEn ? "Coverage across all Saudi Arabia regions" : "تغطية كافة مناطق ومشاريع المملكة"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
