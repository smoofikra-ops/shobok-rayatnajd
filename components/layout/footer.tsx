import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Phone, MessagesSquare, ArrowLeft, Heart } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";

export function Footer({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 overflow-hidden">
      {/* Ambient Top Blend from Page Canvas */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                ر
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white group-hover:text-primary transition-colors">
                  {isEn ? "Rayat Najd Fencing" : "شبوك رايات نجد"}
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {isEn 
                ? "Rayat Najd Contracting Est. provides the best supply and installation services for fencing, shades, and hangars with the highest quality standards."
                : "مؤسسة رايات نجد للمقاولات نقدم أفضل خدمات توريد وتركيب الشبوك، المظلات، والهناجر بأعلى معايير الجودة للمشاريع."}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              {dict.footer.links}
            </h3>
            <ul className="space-y-3">
              {[
                { title: dict.nav.home, href: `/${locale}` },
                { title: dict.nav.services, href: `/${locale}/services` },
                { title: dict.nav.projects, href: `/${locale}/projects` },
                { title: dict.nav.about, href: `/${locale}/about` },
                { title: dict.nav.contact, href: `/${locale}/contact` },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6">{dict.footer.contact}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors" dir="ltr">{siteConfig.contact.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <MessagesSquare className="w-4 h-4 text-[#25D366]" />
                </span>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="hover:text-white transition-colors" dir="ltr">{siteConfig.contact.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {dict.footer.company}. {isEn ? "All rights reserved." : "جميع الحقوق محفوظة."}</p>

          <div className="flex items-center gap-1.5 text-gray-300">
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
