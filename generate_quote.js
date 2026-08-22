const fs = require('fs');

const content = `import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Request Quote / طلب عرض سعر",
};

export default function RequestQuotePage({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === "en";

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {isEn ? "Request Quote" : "طلب عرض سعر"}
          </h1>
          <p className="text-lg text-gray-600">
            {isEn 
              ? "Send us your project details, BOQ, or drawings, and we will review your request to determine the appropriate solution."
              : "أرسل تفاصيل المشروع أو المخطط المتوفر، وسنراجع نطاق طلبك ونحدد الحل المناسب."}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">{isEn ? "Full Name / Company Name *" : "الاسم أو الجهة *"}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">{isEn ? "Mobile Number *" : "رقم الجوال *"}</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-left" dir="ltr" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">{isEn ? "Service Required *" : "الخدمة المطلوبة *"}</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required>
                <option value="">{isEn ? "Select a service..." : "اختر الخدمة..."}</option>
                <option value="شبوك وسياج">{isEn ? "Fencing & Steel Fences" : "شبوك وسياج حديدي"}</option>
                <option value="مظلات">{isEn ? "Shades" : "مظلات"}</option>
                <option value="هناجر">{isEn ? "Warehouse Hangars" : "هياكل هناجر"}</option>
                <option value="اخرى">{isEn ? "Other" : "أخرى"}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">{isEn ? "Project Details / Scope of Work *" : "تفاصيل المشروع / نطاق العمل *"}</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required placeholder={isEn ? "Please provide available dimensions, quantities, or locations..." : "يرجى توضيح الكميات التقريبية، المقاسات، والموقع..."}></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all text-lg mt-4">
              {isEn ? "Send Request" : "إرسال الطلب"}
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              {isEn 
                ? "This is a demo form. For actual inquiries, please use WhatsApp or Call."
                : "هذا النموذج تجريبي. لطلبات حقيقية يرجى التواصل عبر الواتساب أو الاتصال."}
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}
`;

fs.writeFileSync('app/[locale]/request-quote/page.tsx', content);
