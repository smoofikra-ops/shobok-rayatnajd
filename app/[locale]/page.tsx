import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { servicesData } from "@/lib/data/services";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { CheckCircle2, Shield, Factory, Phone, MessagesSquare, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const mainServices = servicesData.filter(s => s.isMain);
  const movingServices = servicesData; 

  return (
    <>
      <script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <Container className="flex flex-col items-center text-center relative z-10">
          <span className="inline-block py-1.5 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wide uppercase">
            {dict.hero.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.3] md:leading-[1.2] max-w-4xl tracking-tight">
            {dict.hero.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href={`/${locale}/request-quote`} 
              className="w-full sm:w-auto bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-8 py-3.5 rounded-md font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {dict.hero.quoteBtn}
              <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${isEn ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
            </Link>
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن توريد/تركيب الشبوك لمشروع.")}`} 
              className="w-full sm:w-auto bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-8 py-3.5 rounded-md font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" 
              dir="ltr"
            >
              <MessagesSquare className="w-5 h-5" />
              {dict.hero.whatsappBtn}
            </a>
          </div>
        </Container>
      </section>

      {/* 2 & 3. Services Section */}
      <section className="py-16 md:py-20 overflow-hidden bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{dict.services.title}</h2>
          </div>
          
          {/* Level 1: Main Static Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {mainServices.map((service, idx) => (
              <Link 
                href={`/${locale}/services/${service.slug}`} 
                key={idx}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                  {isEn ? service.titleEn : service.titleAr}
                </h3>
              </Link>
            ))}
          </div>
        </Container>

        {/* Level 2: Moving Carousel */}
        <div className="relative w-full max-w-[100vw] overflow-hidden bg-gray-50/50 py-12 border-y border-gray-100">
          <style dangerouslySetInnerHTML={{__html: `
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee-rtl 45s linear infinite;
              gap: 1.5rem;
              padding: 0 1rem;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes marquee-rtl {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(${isEn ? '-50%' : '50%'}, 0, 0); }
            }
            .marquee-card { width: 85vw; }
            @media (min-width: 768px) { .marquee-card { width: calc((100vw - 3rem) / 2); } }
            @media (min-width: 1024px) { .marquee-card { width: calc((min(100vw, 1280px) - 4rem) / 3); } }
            @media (prefers-reduced-motion: reduce) {
              .marquee-track { animation: none !important; flex-wrap: wrap; justify-content: center; width: 100%; }
              .marquee-card { width: 100%; max-width: 380px; }
            }
          `}} />
          <div className="marquee-track">
            {[...movingServices, ...movingServices].map((service, idx) => (
              <Link
                key={idx}
                href={`/${locale}/services/${service.slug}`}
                className="marquee-card group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary h-[360px]"
              >
                <div className="h-[180px] w-full relative bg-gray-100 overflow-hidden">
                  <Image src={service.image} alt={isEn ? service.titleEn : service.titleAr} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary shadow-sm">
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{isEn ? service.titleEn : service.titleAr}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">{isEn ? service.descEn : service.descAr}</p>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-bold mt-auto group-hover:gap-2 transition-all">
                    {dict.services.learnMore}
                    <ArrowLeft className={`w-4 h-4 transition-transform ${isEn ? "rotate-180" : ""}`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Sectors */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" /> {isEn ? "Available Solutions" : "الحلول المتوفرة"}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isEn ? ["Galvanized Fencing", "Security Fencing", "Farm Fencing", "Industrial Fencing", "Project & Site Fencing", "Steel Fencing", "Shades", "Warehouse Hangars"] : ["شبوك مجلفنة", "شبوك أمنية", "شبوك مزارع", "شبوك منشآت صناعية", "سياج للمشاريع والمواقع", "سياج حديدي", "مظلات", "هياكل هناجر للمستودعات"]).map((sol, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {sol}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Factory className="w-6 h-6 text-primary" /> {isEn ? "Target Sectors" : "القطاعات المستهدفة"}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isEn ? ["Government Projects", "Industrial Facilities", "Agricultural Projects", "Commercial Projects", "Sites & Facilities", "Warehouses & Logistics"] : ["المشاريع الحكومية", "المنشآت والمشاريع الصناعية", "المشاريع الزراعية والمزارع", "المشاريع التجارية", "المواقع والمرافق", "المستودعات والمنشآت اللوجستية"]).map((sector, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span> {sector}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Trust & Process */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{isEn ? "Why Rayat Najd?" : "لماذا رايات نجد؟"}</h2>
              <div className="space-y-4">
                {(isEn ? [
                  "Experience in project management and execution since 2010.",
                  "Strict adherence to approved technical specifications.",
                  "Solutions determined and customized based on project needs.",
                  "Deep understanding of client requirements and scope of work.",
                  "Multiple project services including fencing, shades, and hangars."
                ] : [
                  "خبرة في إدارة وتنفيذ المشاريع منذ 2010.",
                  "الالتزام الدقيق بالمواصفات الفنية المعتمدة.",
                  "حلول يتم تحديدها وتخصيصها حسب احتياج المشروع.",
                  "فهم عميق لمتطلبات العميل ونطاق العمل.",
                  "خدمات متعددة للمشاريع تشمل الشبوك والسياج والمظلات وهياكل الهناجر."
                ]).map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{isEn ? "How We Start?" : "كيف نبدأ مشروعك؟"}</h2>
              <div className={`space-y-6 relative before:absolute before:inset-y-0 ${isEn ? 'before:left-3.5' : 'before:right-3.5'} before:w-0.5 before:bg-gray-200`}>
                {(isEn ? [
                  { title: "Receive Requirements", desc: "We review the project type, site, and requested service." },
                  { title: "Review Scope", desc: "We review specifications, BOQ, or available drawings." },
                  { title: "Prepare Proposal", desc: "A proposal is prepared based on the available scope." },
                  { title: "Coordinate & Execute", desc: "Upon approval, supply or execution is coordinated." },
                ] : [
                  { title: "استلام المتطلبات", desc: "نتعرف على نوع المشروع والموقع والخدمة المطلوبة." },
                  { title: "مراجعة نطاق العمل", desc: "نراجع المواصفات والكميات والمخططات أو BOQ." },
                  { title: "إعداد العرض", desc: "يتم إعداد العرض وفق النطاق والمتطلبات المتاحة." },
                  { title: "التنسيق والتنفيذ", desc: "بعد الاعتماد يتم التنسيق على التوريد أو التنفيذ." },
                ]).map((step, i) => (
                  <div key={i} className={`relative ${isEn ? 'pl-10' : 'pr-10'}`}>
                    <span className={`absolute ${isEn ? 'left-0' : 'right-0'} top-0 w-7 h-7 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-sm`}>
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. RFQ + CTA */}
      <section className="py-16">
        <Container>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-14 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                {isEn ? "Share Your Project Requirements" : "شاركنا متطلبات مشروعك"}
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                {isEn 
                  ? "Send us your project details, BOQ, or drawings, and we will review your request to determine the appropriate solution for fencing, shades, or hangars."
                  : "أرسل تفاصيل المشروع أو المخطط أو جدول الكميات المتوفر، وسنراجع نطاق طلبك ونحدد الحل المناسب، سواء كان شبوكًا أو سياجًا حديديًا أو مظلات أو هياكل هناجر للمستودعات."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={`/${locale}/request-quote`} className="w-full sm:w-auto bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-8 py-3.5 rounded-md font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                  {isEn ? "Request Quote" : "طلب عرض سعر"}
                </Link>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="w-full sm:w-auto bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-8 py-3.5 rounded-md font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" dir="ltr">
                  <MessagesSquare className="w-5 h-5" /> {isEn ? "WhatsApp" : "واتساب"}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
