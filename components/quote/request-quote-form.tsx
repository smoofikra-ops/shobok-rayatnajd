"use client";

import { useState } from "react";
import { servicesData } from "@/lib/data/services";
import { siteConfig } from "@/config/site";
import { Send, MessagesSquare, CheckCircle, PhoneCall, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function RequestQuoteForm({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: preSelectedService,
    scopeType: "توريد وتركيب",
    quantity: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp Message with formatted inquiry
    const selectedServiceObj = servicesData.find((s) => s.slug === formData.service);
    const serviceName = selectedServiceObj
      ? (isEn ? selectedServiceObj.titleEn : selectedServiceObj.titleAr)
      : formData.service || (isEn ? "General Fencing Inquiry" : "استفسار عام");

    let message = "";
    if (isEn) {
      message = `*New Quote Request - Rayat Najd Website*
🌐 *Source:* Online Quote Request Form (Official Website)
----------------------------------
👤 *Name / Organization:* ${formData.name}
📱 *Phone Number:* ${formData.phone}
📍 *City / Location:* ${formData.city || "Not specified"}
🛠️ *Requested Service:* ${serviceName}
⚙️ *Scope Type:* ${formData.scopeType}
📏 *Quantities / Dimensions:* ${formData.quantity || "As per BOQ/drawings"}
📝 *Additional Details:* ${formData.details || "None"}`;
    } else {
      message = `*طلب عرض سعر جديد - موقع رايات نجد الإلكتروني*
🌐 *المصدر:* نموذج طلب عرض السعر بالموقع الرسمي
----------------------------------
👤 *الاسم / الجهة:* ${formData.name}
📱 *رقم الجوال:* ${formData.phone}
📍 *المدينة / الموقع:* ${formData.city || "غير محدد"}
🛠️ *الخدمة المطلوبة:* ${serviceName}
⚙️ *نوع النطاق:* ${formData.scopeType}
📏 *الكميات / المقاسات:* ${formData.quantity || "حسب المخطط"}
📝 *تفاصيل إضافية:* ${formData.details || "لا يوجد"}`;
    }

    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    setSubmitted(true);
    
    // Automatically open WhatsApp after brief confirmation
    setTimeout(() => {
      window.open(url, "_blank");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-amber-200 shadow-xl text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          {isEn ? "Request Prepared Successfully!" : "تم تجهيز طلب عرض السعر بنجاح!"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
          {isEn
            ? "Your project details have been organized. Opening WhatsApp to connect directly with our engineering team..."
            : "تم تنظيم تفاصيل مشروعك وسيتم الآن فتح تطبيق واتساب للتواصل المباشر مع فريق التنسيق الهندسي ومتابعة عرض السعر."}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl || `https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all"
            dir="ltr"
          >
            <MessagesSquare className="w-5 h-5" />
            <span>{isEn ? "Open WhatsApp Directly" : "متابعة الطلب عبر واتساب"}</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
          >
            {isEn ? "Send Another Request" : "إرسال طلب آخر"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-lg space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Full Name / Organization *" : "الاسم أو اسم الجهة / الشركة *"}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={isEn ? "e.g., Al-Amal Contracting" : "مثال: مؤسسة الأمل / م. فهد"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Mobile Phone Number *" : "رقم الجوال للتواصل *" }
          </label>
          <input
            type="tel"
            required
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="05XXXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all text-left"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Service Select */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Required Service *" : "الخدمة المطلوبة *"}
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all bg-white"
          >
            <option value="">{isEn ? "Select a service..." : "اختر الخدمة..."}</option>
            {servicesData.map((service) => (
              <option key={service.slug} value={service.slug}>
                {isEn ? service.titleEn : service.titleAr}
              </option>
            ))}
          </select>
        </div>

        {/* City / Location */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "City / Project Location *" : "المدينة / موقع المشروع *"}
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder={isEn ? "e.g., Riyadh, Dammam, Jeddah..." : "مثال: الرياض، القصيم، المنطقة الشرقية..."}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Scope Type */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Scope Type *" : "طبيعة النطاق المطلوب *"}
          </label>
          <select
            value={formData.scopeType}
            onChange={(e) => setFormData({ ...formData, scopeType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all bg-white"
          >
            <option value="توريد وتركيب">{isEn ? "Supply & Installation (Turnkey)" : "توريد وتركيب متكامل"}</option>
            <option value="توريد فقط">{isEn ? "Supply Only" : "توريد مواد فقط"}</option>
            <option value="تركيب فقط">{isEn ? "Installation Only (Labor & Machinery)" : "تركيب وتنفيذ فقط"}</option>
          </select>
        </div>

        {/* Approximate Quantities */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Approximate Quantity / Linear Meters" : "الكمية التقريبية / الأمتار الطولية"}
          </label>
          <input
            type="text"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder={isEn ? "e.g., 500 linear meters" : "مثال: 500 متر طولي أو 1000م²"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* Scope Details / Notes */}
      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-bold text-gray-900">
          {isEn ? "Project Specifications & Notes" : "تفاصيل المواصفات أو المخططات أو ملاحظات الموقع"}
        </label>
        <textarea
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder={isEn ? "Mention height requirements, mesh thickness, ground type, or any BOQ specifications..." : "وضح الارتفاع المطلوب، سماكة السلك، نوع الأرضية، أو أي متطلبات فنية..."}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B56D2A] focus:border-[#B56D2A] outline-none text-sm transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white py-4 px-8 rounded-xl font-extrabold text-sm sm:text-base hover:shadow-xl hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2.5 shadow-lg"
      >
        <Send className="w-4 h-4" />
        <span>{isEn ? "Send & Coordinate Request via WhatsApp" : "إرسال وتنسيق الطلب مع الفريق الهندسي"}</span>
      </button>

      {/* Direct phone call note */}
      <div className="text-center pt-2">
        <p className="text-xs text-gray-500">
          {isEn ? "Prefer direct phone consultation?" : "هل تفضل التحدث المباشر مع المهندس المختص؟"}{" "}
          <a href={`tel:${siteConfig.contact.phone}`} className="text-[#7C3E1D] font-bold hover:underline" dir="ltr">
            {siteConfig.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
