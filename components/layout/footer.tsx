import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Phone, MessagesSquare, Heart, ShieldCheck, Clock, MapPin, BookOpen, Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { getDirectWhatsAppUrl } from "@/lib/whatsapp";

export function Footer({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <footer className="relative text-gray-200 pt-20 pb-10 overflow-hidden isolate" id="site-footer">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes footer-ambient-move-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.45; }
          50% { transform: translate(6%, -10%) scale(1.18); opacity: 0.75; }
        }
        @keyframes footer-ambient-move-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1.1); opacity: 0.35; }
          50% { transform: translate(-8%, 8%) scale(0.92); opacity: 0.65; }
        }
        @keyframes footer-ambient-move-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.25; }
          50% { transform: translate(12%, 6%) scale(1.12); opacity: 0.55; }
        }
        @keyframes footer-shimmer-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .footer-dynamic-bg {
          background: linear-gradient(135deg, #1A0C07 0%, #2D160E 28%, #4A281A 60%, #200E08 85%, #150905 100%);
          background-size: 200% 200%;
          animation: footer-shimmer-wave 18s ease-in-out infinite;
        }
        .footer-orb-1 {
          animation: footer-ambient-move-1 14s ease-in-out infinite;
        }
        .footer-orb-2 {
          animation: footer-ambient-move-2 18s ease-in-out infinite;
        }
        .footer-orb-3 {
          animation: footer-ambient-move-3 22s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-dynamic-bg, .footer-orb-1, .footer-orb-2, .footer-orb-3 {
            animation: none !important;
          }
        }
      `}} />

      {/* 1. Dynamic Moving Base Gradient */}
      <div className="absolute inset-0 footer-dynamic-bg -z-30 pointer-events-none" />

      {/* 2. Dynamic Moving Ambient Glowing Orbs with Brand Colors */}
      <div className="absolute inset-0 overflow-hidden -z-20 pointer-events-none">
        {/* Bronze Orb (Top Right) */}
        <div className="footer-orb-1 absolute -top-24 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#B56D2A]/35 via-[#7C3E1D]/25 to-transparent blur-3xl" />
        {/* Desert Gold Orb (Bottom Left) */}
        <div className="footer-orb-2 absolute -bottom-24 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#B9A174]/25 via-[#B56D2A]/20 to-transparent blur-3xl" />
        {/* Deep Amber Center Glow */}
        <div className="footer-orb-3 absolute top-1/3 left-1/3 w-[420px] h-[420px] rounded-full bg-[#4A281A]/40 blur-2xl" />
      </div>

      {/* 3. Subtle Fencing Texture (Brand Mesh Overlay) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay -z-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B9A174 1.5px, transparent 1.5px), radial-gradient(#B56D2A 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      {/* 4. Seamless Faded Feathering Top Blend (Zero Hard Borders) */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#2D160E]/40 to-transparent -z-10 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">
          
          {/* 1. Brand Info (4 cols on lg) */}
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} prefetch={true} className="flex items-center gap-3 mb-5 group inline-flex">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-amber-500/30 bg-white/10 p-1 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src={siteConfig.logo}
                  alt={isEn ? "Rayat Najd Fencing Logo" : "شعار شبوك رايات نجد"}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white group-hover:text-[#f5d77f] transition-colors">
                  {isEn ? "Rayat Najd Fencing" : "شبوك رايات نجد"}
                </span>
                <span className="text-[11px] text-amber-200/80 font-medium">
                  {isEn ? "Contracting & Structural Solutions" : "للمقاولات والحلول الإنشائية"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300/90 leading-relaxed mb-6">
              {isEn 
                ? "Rayat Najd Contracting Est. provides premier supply and installation services for fencing, shades, and hangars with the highest engineering standards across Saudi Arabia."
                : "مؤسسة رايات نجد للمقاولات نقدم أفضل خدمات توريد وتركيب الشبوك الأمنية والزراعية، المظلات، والهناجر بأعلى معايير الجودة والمواصفات المعتمدة بالمملكة."}
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-amber-100/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-amber-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5d77f]" />
                <span>{isEn ? "Certified Quality" : "جودة معتمدة"}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-amber-500/20">
                <Clock className="w-3.5 h-3.5 text-[#f5d77f]" />
                <span>{isEn ? "On-Time Delivery" : "التزام بالمواعيد"}</span>
              </span>
            </div>
          </div>

          {/* 2. Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#B56D2A]" />
              {dict.footer.links}
            </h3>
            <ul className="space-y-2.5">
              {[
                { title: dict.nav.home, href: `/${locale}` },
                { title: dict.nav.services, href: `/${locale}/services` },
                { title: dict.nav.projects, href: `/${locale}/projects` },
                { title: dict.nav.about, href: `/${locale}/about` },
                { title: dict.nav.contact, href: `/${locale}/contact` },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    prefetch={true}
                    className="text-sm text-gray-300 hover:text-[#f5d77f] hover:translate-x-1 inline-flex items-center gap-2 transition-all group py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B56D2A]/60 group-hover:bg-[#f5d77f] group-hover:scale-125 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. NEW: مدونة شبوك رايات نجد (3 cols on lg) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between gap-2 mb-5 pb-2 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#f5d77f]" />
                <span>{isEn ? "Rayat Najd Fencing Blog" : "مدونة شبوك رايات نجد"}</span>
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-[#f5d77f] border border-amber-500/40 shadow-xs animate-pulse">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{isEn ? "Soon" : "قريباً"}</span>
              </span>
            </div>

            <p className="text-xs text-gray-300/85 leading-relaxed mb-4">
              {isEn
                ? "Engineering insights, guides on choosing security & agricultural fencing, and technical specifications for Saudi projects."
                : "مقالات فنية وهندسية، إرشادات اختيار الشبوك الأمنية والزراعية، وأحدث المعايير المعتمدة لتسوير المشاريع."}
            </p>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all text-xs text-gray-300">
                <span className="block font-bold text-[#f5d77f] text-[11px] mb-0.5">
                  {isEn ? "• Technical Specification Guide" : "• دليل المواصفات الفنية للشبوك المجلفنة"}
                </span>
                <span className="text-[10px] text-gray-400">
                  {isEn ? "Coming soon to the engineering blog" : "ينشر قريباً ضمن مقالات الدليل الهندسي"}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all text-xs text-gray-300">
                <span className="block font-bold text-[#f5d77f] text-[11px] mb-0.5">
                  {isEn ? "• Project Fencing Requirements" : "• معايير واشتراطات تسوير المزارع والمواقع"}
                </span>
                <span className="text-[10px] text-gray-400">
                  {isEn ? "In-depth insights for contractors" : "شروحات تفصيلية لمديري المشاريع والمقاولين"}
                </span>
              </div>
            </div>
          </div>

          {/* 4. Contact & Location (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#B56D2A]" />
              {dict.footer.contact}
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#B56D2A] group-hover:bg-[#B56D2A]/20 transition-all">
                  <Phone className="w-4 h-4 text-[#f5d77f]" />
                </span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors font-medium" dir="ltr">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#25D366] group-hover:bg-[#25D366]/20 transition-all">
                  <MessagesSquare className="w-4 h-4 text-[#25D366]" />
                </span>
                <a 
                  href={getDirectWhatsAppUrl({
                    locale,
                    source: isEn ? "Website Footer" : "فوتر الموقع الإلكتروني",
                    customTopic: isEn ? "Direct messaging & pricing request" : "محادثة مباشرة واستفسار عن الأسعار"
                  })} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium" 
                  dir="ltr"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-300" />
                </span>
                <span className="text-xs text-gray-300/90 leading-snug">
                  {isEn ? "Riyadh & All Regions Across Saudi Arabia" : "الرياض - ونغطي كافة مناطق ومحافظات المملكة"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Seamless Border */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-300/80">
          <p>© {new Date().getFullYear()} {dict.footer.company}. {isEn ? "All rights reserved." : "جميع الحقوق محفوظة."}</p>

          <div className="flex items-center gap-1.5 text-gray-200">
            <span>{isEn ? "Created with" : "صُنع بـ"}</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-pulse inline-block" />
            <span>{isEn ? "by" : "بواسطة"}</span>
            <a
              href="https://www.nmolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors underline-offset-4 hover:underline"
            >
              NMOLABS (Nomulabs)
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
