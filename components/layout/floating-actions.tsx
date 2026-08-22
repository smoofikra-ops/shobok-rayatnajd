"use client";

import { siteConfig } from "@/config/site";
import { Phone, MessagesSquare } from "lucide-react";

export function FloatingActions({ locale }: { locale: string }) {
  const isEn = locale === "en";
  
  return (
    <div className={`fixed bottom-6 ${isEn ? 'right-6' : 'left-6'} z-50 flex flex-col gap-3`}>
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 group relative"
        aria-label="Call"
      >
        <Phone className="w-5 h-5" />
        <span className={`absolute ${isEn ? 'right-14' : 'left-14'} bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none`}>
          {isEn ? "Call Us" : "اتصل بنا"}
        </span>
      </a>
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن توريد/تركيب الشبوك لمشروع.")}`}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group relative"
        aria-label="WhatsApp"
      >
        <MessagesSquare className="w-7 h-7" />
        <span className={`absolute ${isEn ? 'right-16' : 'left-16'} bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none`}>
          {isEn ? "WhatsApp" : "واتساب"}
        </span>
      </a>
    </div>
  );
}
