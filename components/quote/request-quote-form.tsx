"use client";

import { useState, useRef } from "react";
import { servicesData } from "@/lib/data/services";
import { siteConfig } from "@/config/site";
import { Send, MessagesSquare, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { pushDataLayerEvent, trackWhatsAppClick } from "@/lib/gtm";

// Standard core services for quick selection
const CORE_SERVICES = [
  { slug: "security-fencing", titleAr: "الشبوك الأمنية", titleEn: "Security Fencing" },
  { slug: "steel-fencing", titleAr: "السياج الحديدي", titleEn: "Steel Fencing" },
  { slug: "shades", titleAr: "المظلات والسواتر", titleEn: "Shades & Canopies" },
  { slug: "warehouse-hangars", titleAr: "هياكل الهناجر والمستودعات", titleEn: "Warehouse Hangars" },
  { slug: "farm-fencing", titleAr: "شبوك المزارع والأراضي", titleEn: "Farm Fencing" },
  { slug: "industrial-fencing", titleAr: "شبوك المنشآت الصناعية", titleEn: "Industrial Fencing" },
  { slug: "galvanized-fencing", titleAr: "الشبوك المجلفنة", titleEn: "Galvanized Fencing" },
  { slug: "supply-install", titleAr: "توريد وتركيب متكامل (تسليم مفتاح)", titleEn: "Turnkey Supply & Installation" },
  { slug: "supply-only", titleAr: "توريد مواد وشبوك فقط", titleEn: "Material Supply Only" },
  { slug: "install-only", titleAr: "تركيب وتنفيذ فقط", titleEn: "Installation Only" },
  { slug: "other-inquiry", titleAr: "استفسار أو مشروع مخصص آخر", titleEn: "Other Custom Fencing / Inquiry" },
];

export function RequestQuoteForm({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";

  // 1. Streamlined 4 Fields: Name, Phone, Service, Optional Notes
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: preSelectedService || "security-fencing",
    notes: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  
  // Guard against any double firing of form_success event
  const submissionLockedRef = useRef(false);

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; service?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = isEn ? "Please enter your name or company name" : "يرجى كتابة الاسم أو اسم الجهة";
    }

    const cleanPhone = formData.phone.trim().replace(/[\s-]/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = isEn ? "Please enter a valid mobile number (e.g. 05XXXXXXXX)" : "يرجى إدخال رقم جوال صحيح للتواصل (مثال: 05XXXXXXXX)";
    }

    if (!formData.service) {
      newErrors.service = isEn ? "Please select the required service" : "يرجى اختيار نوع الخدمة المطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate event triggers, double clicks or firing while already submitting
    if (isSubmitting || submissionLockedRef.current) {
      return;
    }

    // 1. Strict Validation Check (Must NOT fire form_success if invalid)
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    // Lock submission immediately to prevent double fires
    setIsSubmitting(true);
    submissionLockedRef.current = true;

    // Identify Service Name
    const matchedService = CORE_SERVICES.find((s) => s.slug === formData.service) ||
      servicesData.find((s) => s.slug === formData.service);
      
    const serviceName = matchedService
      ? (isEn ? matchedService.titleEn : matchedService.titleAr)
      : formData.service || (isEn ? "General Fencing Inquiry" : "استفسار عن الشبوك");

    // Construct WhatsApp message
    let message = "";
    if (isEn) {
      message = `*New Quote Request - Rayat Najd Website*
🌐 *Source:* Direct Quote Request Form (Official Website)
----------------------------------
👤 *Name / Company:* ${formData.name.trim()}
📱 *Mobile Phone:* ${formData.phone.trim()}
🛠️ *Service Type:* ${serviceName}
📝 *Optional Notes / Specifications:* ${formData.notes.trim() || "None specified"}`;
    } else {
      message = `*طلب عرض سعر جديد - شبوك رايات نجد*
🌐 *المصدر:* نموذج طلب عرض السعر المباشر (الموقع الرسمي)
----------------------------------
👤 *الاسم / الجهة:* ${formData.name.trim()}
📱 *رقم الجوال:* ${formData.phone.trim()}
🛠️ *نوع الخدمة:* ${serviceName}
📝 *ملاحظات / تفاصيل إضافية:* ${formData.notes.trim() || "لا يوجد"}`;
    }

    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

    // 2. Fire form_success event ONLY ONCE upon valid verified submission
    pushDataLayerEvent({
      event: "form_success",
      form_id: "request_quote",
      service_selected: serviceName,
    });

    // Also fire rfq_whatsapp_success for backward-compatible tag configurations
    pushDataLayerEvent({
      event: "rfq_whatsapp_success",
      form_id: "request_quote",
      service_selected: serviceName,
    });

    setWhatsappUrl(url);
    setSubmitted(true);
    setIsSubmitting(false);

    // Open WhatsApp seamlessly in a new tab
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 700);
    }
  };

  const handleResetForm = () => {
    submissionLockedRef.current = false;
    setIsSubmitting(false);
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      service: "security-fencing",
      notes: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-emerald-200 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-gray-900">
            {isEn ? "Quote Request Received Successfully!" : "تم استلام طلب عرض السعر بنجاح!"}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
            {isEn
              ? "Your request has been organized. We are opening WhatsApp to instantly connect with our engineering team."
              : "تم تسجيل تفاصيل طلبك بنجاح. سيتم فتح محادثة واتساب مع الفريق الهندسي المباشر لمراجعة الأسعار والمخططات."}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl || `https://wa.me/${siteConfig.contact.whatsapp}`}
            onClick={() => trackWhatsAppClick("quote_success_screen")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md active:scale-95"
            dir="ltr"
          >
            <MessagesSquare className="w-5 h-5" />
            <span>{isEn ? "Open WhatsApp Directly" : "متابعة الطلب عبر واتساب"}</span>
          </a>
          <button
            type="button"
            onClick={handleResetForm}
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
          >
            {isEn ? "Send Another Request" : "إرسال طلب آخر"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-5 sm:space-y-6 relative"
    >
      {/* 1. Full Name */}
      <div className="space-y-1.5">
        <label className="block text-xs sm:text-sm font-bold text-gray-900">
          {isEn ? "Full Name / Organization *" : "الاسم أو اسم المؤسسة / الشركة *"}
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          placeholder={isEn ? "e.g., Al-Amal Contracting / Eng. Fahad" : "مثال: مؤسسة الأمل للمقاولات / م. فهد"}
          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm transition-all outline-none ${
            errors.name
              ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-300"
              : "border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#B56D2A] focus:ring-2 focus:ring-[#B56D2A]/20"
          }`}
        />
        {errors.name && (
          <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* 2. Mobile Phone */}
      <div className="space-y-1.5">
        <label className="block text-xs sm:text-sm font-bold text-gray-900">
          {isEn ? "Mobile Phone Number *" : "رقم الجوال للتواصل *" }
        </label>
        <input
          type="tel"
          dir="ltr"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: undefined });
          }}
          placeholder="05XXXXXXXX"
          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm transition-all outline-none text-left ${
            errors.phone
              ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-300"
              : "border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#B56D2A] focus:ring-2 focus:ring-[#B56D2A]/20"
          }`}
        />
        {errors.phone && (
          <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* 3. Service Type (Quick & Clear Selection) */}
      <div className="space-y-1.5">
        <label className="block text-xs sm:text-sm font-bold text-gray-900">
          {isEn ? "Service Type *" : "نوع الخدمة المطلوبة *"}
        </label>
        <div className="relative">
          <select
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm font-medium transition-all outline-none bg-white cursor-pointer ${
              errors.service
                ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-300"
                : "border-gray-200 focus:border-[#B56D2A] focus:ring-2 focus:ring-[#B56D2A]/20"
            }`}
          >
            {CORE_SERVICES.map((srv) => (
              <option key={srv.slug} value={srv.slug}>
                {isEn ? srv.titleEn : srv.titleAr}
              </option>
            ))}
          </select>
        </div>
        {errors.service && (
          <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.service}</span>
          </p>
        )}
      </div>

      {/* 4. Optional Notes / Project Details */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs sm:text-sm font-bold text-gray-900">
            {isEn ? "Optional Notes & Specifications" : "ملاحظات اختيارية / تفاصيل الموقع أو الكمية"}
          </label>
          <span className="text-[11px] text-gray-500 font-medium">
            {isEn ? "Optional" : "اختياري"}
          </span>
        </div>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder={
            isEn
              ? "e.g., Project in Riyadh, approx 500 meters, 2m height (optional)..."
              : "مثال: موقع المشروع (الرياض/الشرقية)، الأمتار التقريبية، أو أي مواصفات خاصة..."
          }
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#B56D2A] focus:ring-2 focus:ring-[#B56D2A]/20 outline-none text-sm transition-all resize-y"
        />
      </div>

      {/* 5. Prominent Submit CTA Button: "اطلب عرض السعر" */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group overflow-hidden bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white py-4 px-8 rounded-2xl font-extrabold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#B56D2A]/30 hover:-translate-y-0.5 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          <span className="tracking-wide">
            {isEn ? "Request a Quote" : "اطلب عرض السعر"}
          </span>
        </button>
      </div>

      {/* Reassurance Badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          {isEn
            ? "Direct review with no purchase obligation"
            : "مراجعة هندسية دقيقة وسريعة وبدون أي التزام بالشراء"}
        </span>
      </div>
    </form>
  );
}
