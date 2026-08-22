import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/language/language-switcher";

export function Header({ locale = "ar" }: { locale?: string }) {
  const navItems = locale === "en" ? siteConfig.mainNavEn : siteConfig.mainNav;
  const quoteText = locale === "en" ? "Request Quote" : "طلب عرض سعر";
  const siteName = locale === "en" ? "Rayat Najd" : siteConfig.name;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-20 items-center justify-between">
          
          {/* 1. Navigation / Mobile Nav (flex-start) */}
          <div className="flex-1 flex justify-start items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <MobileNav locale={locale} />
            </div>
          </div>

          {/* 2. Logo (flex-center) */}
          <div className="flex-1 flex justify-center items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                {siteName}
              </span>
            </Link>
          </div>

          {/* 3. Language & CTA (flex-end) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <LanguageSwitcher currentLang={locale} />
            <div className="hidden lg:block">
              <Link href="/request-quote" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-hover shadow-sm h-10 px-4 py-2">
                {quoteText}
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </header>
  );
}
