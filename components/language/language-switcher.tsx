"use client";

import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
      dir={currentLang === "ar" ? "ltr" : "rtl"} // to keep the globe icon alignment nice maybe? Or just keep standard
    >
      <Globe className="w-4 h-4" />
      <span>{currentLang === "ar" ? "English" : "العربية"}</span>
    </button>
  );
}
