"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MessagesSquare, ArrowLeft, PhoneCall } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { getDirectWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force mobile & desktop autoplay compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay policy might hold until first gesture on extreme power saver mode
        });
      }
    };

    // Attempt instant playback
    playVideo();

    // Auto resume if paused or ended
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    // User gesture fallback for aggressive mobile low-power modes
    const handleUserGesture = () => {
      playVideo();
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", playVideo);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("touchstart", handleUserGesture, { passive: true, once: true });
    window.addEventListener("scroll", handleUserGesture, { passive: true, once: true });
    window.addEventListener("click", handleUserGesture, { passive: true, once: true });

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", playVideo);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("touchstart", handleUserGesture);
      window.removeEventListener("scroll", handleUserGesture);
      window.removeEventListener("click", handleUserGesture);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 flex items-center justify-center min-h-[500px] md:min-h-[560px] lg:min-h-[620px] py-16 md:py-24">
      {/* Responsive Seamless Continuous Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover object-[center_35%] md:object-center scale-105 pointer-events-none select-none"
        >
          <source src="https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/hero/hero-shobok.mp4" type="video/mp4" />
        </video>

        {/* Clear, bright overlay for crystal-clear readability without dimming the video excessively */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
            href={getDirectWhatsAppUrl({
              locale,
              source: isEn ? "Hero Section (Homepage)" : "قسم الهيرو - الصفحة الرئيسية",
              customTopic: isEn ? "Fencing supply and installation consultation" : "استفسار وطلب تسعير شبوك ومقاولات"
            })} 
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
