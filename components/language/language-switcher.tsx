"use client";

import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname(); // In [locale] layout, pathname won't contain the rewritten /ar

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    
    // Calculate new path
    let newPath = pathname;
    if (newLang === "en") {
      newPath = `/en${pathname === "/" ? "" : pathname}`;
    } else {
      newPath = pathname.replace(/^\/en/, "") || "/";
    }
    
    router.push(newPath);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
      dir="ltr"
    >
      <Globe className="w-4 h-4" />
      <span>{currentLang === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
}
