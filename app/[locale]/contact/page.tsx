import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { Phone, MessagesSquare, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | تواصل معنا",
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === "en";
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          {isEn ? "Contact Us" : "تواصل معنا"}
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          {isEn 
            ? "We are ready to respond to your inquiries regarding supply and installation projects across Saudi Arabia."
            : "نسعد بتواصلكم واستفساراتكم حول مشاريع توريد وتركيب الشبوك، السياج، والمظلات في كافة مناطق المملكة."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Phone Call Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:border-primary/20 transition-all">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            {isEn ? "Direct Call" : "الاتصال المباشر"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isEn ? "Speak directly with our team for consultations and requests" : "تحدث مباشرة مع فريق العمل لطلب الاستشارات وعروض الأسعار"}
          </p>
          <a 
            href={`tel:${siteConfig.contact.phone}`} 
            dir="ltr"
            className="text-2xl font-bold text-primary hover:underline pt-2 block"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-hover transition-colors text-sm mt-2 block"
          >
            {isEn ? "Call Now" : "اتصل الآن"}
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:border-[#25D366]/30 transition-all">
          <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center">
            <MessagesSquare className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            {isEn ? "WhatsApp Chat" : "محادثة واتساب"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isEn ? "Send your project BOQ, specifications, or location directly" : "أرسل المخططات أو المقاسات أو استفسارك المباشر عبر تطبيق واتساب"}
          </p>
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
            dir="ltr"
            className="text-2xl font-bold text-[#128C7E] hover:underline pt-2 block"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن توريد/تركيب الشبوك لمشروع.")}`}
            className="w-full bg-[#25D366] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#128C7E] transition-colors text-sm mt-2 block"
          >
            {isEn ? "Message on WhatsApp" : "تواصل عبر واتساب"}
          </a>
        </div>
      </div>
    </Container>
  );
}
