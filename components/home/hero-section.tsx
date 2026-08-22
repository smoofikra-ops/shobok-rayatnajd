"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MessagesSquare, ArrowLeft, PhoneCall } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";

export function HeroSection({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden border-b border-gray-100 flex items-center justify-center min-h-[500px] md:min-h-[560px] lg:min-h-[620px] py-16 md:py-24">
      {/* Responsive Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
        {/* Desktop / Tablet Landscape Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover object-center scale-105"
        >
          <source src="https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/hero/hero-shobok.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video with optimized mobile framing */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover object-[center_35%]"
        >
          <source src="https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/hero/hero-shobok.mp4" type="video/mp4" />
        </video>

        {/* Clear, bright overlay for crystal-clear readability without dimming the video excessively */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      <Container className="flex flex-col items-center text-center relative z-10 px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 py-1 px-3.5 sm:px-4 rounded-full bg-black/40 text-[#f5d77f] border border-amber-400/30 text-xs sm:text-sm font-bold mb-4 md:mb-6 tracking-wide backdrop-blur-md shadow-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#B56D2A] animate-pulse"></span>
          <span>{dict.hero.subtitle}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.25] font-extrabold text-white mb-4 md:mb-6 max-w-4xl tracking-tight [text-shadow:_0_2px_14px_rgba(0,0,0,0.9)]">
          {dict.hero.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-100 font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
          {dict.hero.desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
          <Link 
            href={`/${locale}/request-quote`} 
            className="w-full sm:w-auto bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
          >
            <span>{dict.hero.quoteBtn}</span>
            <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${isEn ? "rotate-180" : "group-hover:-translate-x-1"}`} />
          </Link>

          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أود الاستفسار عن خدمات وتوريد الشبوك لمشروعنا.")}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base" 
            dir="ltr"
          >
            <MessagesSquare className="w-5 h-5 shrink-0" />
            <span>{dict.hero.whatsappBtn}</span>
          </a>

          <a 
            href={`tel:${siteConfig.contact.phone}`} 
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base" 
            dir="ltr"
          >
            <PhoneCall className="w-4 h-4 shrink-0 text-[#f5d77f]" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
