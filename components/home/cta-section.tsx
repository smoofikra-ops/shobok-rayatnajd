"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";
import { MessagesSquare, FileText, PhoneCall } from "lucide-react";

export function CtaSection({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="bg-gradient-to-br from-[#2D160E] via-[#4A281A] to-[#1F0E09] rounded-3xl p-6 sm:p-10 md:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden text-white border border-amber-900/30">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#B56D2A]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-[#B9A174]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1 px-3.5 rounded-full bg-white/10 text-[#f5d77f] text-xs font-bold mb-4 border border-white/10">
              {isEn ? "Direct Coordination & Fast Quotes" : "تنسيق مباشر وعروض أسعار سريعة"}
            </span>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              {dict.cta.title}
            </h2>

            <p className="text-gray-200 text-xs sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {dict.cta.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link 
                href={`/${locale}/request-quote`} 
                className="w-full sm:w-auto bg-gradient-to-r from-[#B56D2A] to-[#B9A174] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>{dict.cta.quoteBtn}</span>
              </Link>

              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أود طلب عرض سعر وتنسيق لمشروع.")}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg" 
                dir="ltr"
              >
                <MessagesSquare className="w-5 h-5" />
                <span>{dict.cta.whatsappBtn}</span>
              </a>

              <a 
                href={`tel:${siteConfig.contact.phone}`} 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base" 
                dir="ltr"
              >
                <PhoneCall className="w-4 h-4 text-[#f5d77f]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
