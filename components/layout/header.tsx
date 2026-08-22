"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";
import { LanguageSwitcher } from "@/components/language/language-switcher";

export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: dict.nav.home, href: `/${locale}` },
    { title: dict.nav.services, href: `/${locale}/services` },
    { title: dict.nav.projects, href: `/${locale}/projects` },
    { title: dict.nav.about, href: `/${locale}/about` },
    { title: dict.nav.contact, href: `/${locale}/contact` },
  ];

  // For active links in [locale] mode, if it's the home page
  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-white py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo - Always on the "start" side based on direction */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-primary-hover transition-colors">
              ر
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-900 group-hover:text-primary transition-colors">
                {isEn ? "Rayat Najd" : "رايات نجد"}
              </span>
              <span className="text-xs font-medium text-gray-500">
                {isEn ? "Contracting" : "للمقاولات"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`text-sm font-bold px-3 py-2 rounded-md transition-all duration-300 relative group
                  ${isActive(link.href) 
                    ? "text-primary bg-primary/5" 
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {link.title}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full transition-all duration-300 ${isActive(link.href) ? "bg-primary opacity-100" : "bg-primary opacity-0 group-hover:opacity-50"}`}></span>
              </Link>
            ))}
          </nav>

          {/* Actions - Always on the "end" side based on direction */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <LanguageSwitcher currentLang={locale} />
            
            <Link 
              href={`/${locale}/request-quote`} 
              className="bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-5 py-2.5 rounded-md text-sm font-bold hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              {dict.hero.quoteBtn}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher currentLang={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden origin-top animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold p-4 border-b border-gray-50 flex items-center justify-between group
                  ${isActive(link.href) ? "text-primary bg-primary/5" : "text-gray-700"}
                `}
              >
                {link.title}
                <ArrowLeft className={`w-4 h-4 text-gray-400 group-hover:text-primary transition-transform ${isEn ? "rotate-180" : ""}`} />
              </Link>
            ))}
            <div className="p-4 pt-6">
              <Link 
                href={`/${locale}/request-quote`} 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white p-4 rounded-md text-center font-bold shadow-sm"
              >
                {dict.hero.quoteBtn}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
