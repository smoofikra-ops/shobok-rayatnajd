import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "طلب عرض سعر",
  description: "شاركنا متطلبات مشروعك للحصول على عرض سعر مخصص لخدمات الشبوك، السياج، المظلات، والهناجر.",
};

export default function RequestQuotePage() {
  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            طلب عرض سعر
          </h1>
          <p className="text-lg text-gray-600">
            أرسل تفاصيل المشروع أو المخطط المتوفر، وسنراجع نطاق طلبك ونحدد الحل المناسب.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-900">الاسم / الجهة</label>
                <input type="text" id="name" className="w-full h-11 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="اسم الشركة أو المؤسسة" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-900">رقم الجوال</label>
                <input type="tel" id="phone" dir="ltr" className="w-full h-11 px-4 text-right rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="05xxxxxxxx" />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-semibold text-gray-900">المدينة / موقع المشروع</label>
                <input type="text" id="city" className="w-full h-11 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="الرياض" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-gray-900">نوع الخدمة المطلوبة</label>
                <select id="service" className="w-full h-11 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                  <option value="" disabled selected>اختر الخدمة...</option>
                  <option value="supply-install">توريد وتركيب الشبوك والسياج</option>
                  <option value="supply-only">توريد الشبوك</option>
                  <option value="install-only">تركيب الشبوك</option>
                  <option value="security">الشبوك الأمنية</option>
                  <option value="steel">السياج الحديدي</option>
                  <option value="farm">شبوك المزارع</option>
                  <option value="industrial">شبوك المنشآت الصناعية</option>
                  <option value="galvanized">الشبوك المجلفنة</option>
                  <option value="shades">المظلات</option>
                  <option value="hangars">هياكل الهناجر للمستودعات</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-semibold text-gray-900">تفاصيل المشروع ونطاق العمل</label>
              <textarea id="details" rows={4} className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="يرجى توضيح المتطلبات، المساحات التقريبية، أو وجود جداول كميات (BOQ)..."></textarea>
            </div>

            <button type="button" className="w-full bg-primary text-white h-12 rounded-md font-medium hover:bg-primary-hover transition-colors shadow-sm text-lg">
              إرسال الطلب
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              سيتم التواصل معك من قبل فريقنا المختص في أقرب وقت ممكن لمناقشة التفاصيل.
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}
