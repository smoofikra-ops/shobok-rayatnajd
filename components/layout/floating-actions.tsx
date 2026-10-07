"use client";

import { siteConfig } from "@/config/site";
import { Phone, MessagesSquare } from "lucide-react";
import { getDirectWhatsAppUrl } from "@/lib/whatsapp";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export function FloatingActions({ locale }: { locale: string }) {
  const isEn = locale === "en";
  
  return (
    <aside 
      aria-label={isEn ? "Quick Contact Options" : "خيارات التواصل السريع"}
      className={`fixed bottom-3 sm:bottom-6 ${isEn ? 'right-3 sm:right-6' : 'left-3 sm:left-6'} z-40 flex flex-col gap-2 sm:gap-3 pointer-events-auto`}
    >
      {/* Phone Call Quick Action - Subdued on mobile */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        onClick={() => trackPhoneClick("floating_action")}
        className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group relative focus:outline-hidden focus:ring-2 focus:ring-amber-400"
        aria-label={isEn ? "Call Us" : "اتصال هاتفي"}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200 group-hover:text-white" />
        <span className={`hidden sm:block absolute ${isEn ? 'right-13' : 'left-13'} bg-gray-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md`}>
          {isEn ? "Call Us" : "اتصل بنا"}
        </span>
      </a>

      {/* WhatsApp Quick Action - Clean & balanced on mobile, never obtrusive */}
      <a
        href={getDirectWhatsAppUrl({ 
          locale, 
          source: isEn ? "Floating Quick Action" : "الزر العائم بالموقع",
          customTopic: isEn ? "General Fencing & Projects Inquiry" : "استفسار سريع عن الشبوك والمشاريع"
        })}
        onClick={() => trackWhatsAppClick("floating_action")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366]/90 hover:bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group relative focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
        aria-label={isEn ? "WhatsApp Inquiry" : "محادثة واتساب"}
      >
        <MessagesSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className={`hidden sm:block absolute ${isEn ? 'right-14' : 'left-14'} bg-gray-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md`}>
          {isEn ? "WhatsApp" : "واتساب"}
        </span>
      </a>
    </aside>
  );
}
