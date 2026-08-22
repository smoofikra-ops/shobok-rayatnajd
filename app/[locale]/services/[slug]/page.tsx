import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessagesSquare, PhoneCall, FileText, Info, ShieldCheck, Layers, Workflow, ChevronRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { notFound } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { type Metadata } from "next";
import { getDirectWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  params: { slug: string; locale: string };
}

export async function generateStaticParams() {
  return servicesData.flatMap((service) => [
    { slug: service.slug, locale: "ar" },
    { slug: service.slug, locale: "en" },
  ]);
}

export async function generateMetadata({ params: { slug, locale } }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "خدمات رايات نجد" };
  const isEn = locale === "en";
  return {
    title: `${isEn ? service.titleEn : service.titleAr} | رايات نجد للمقاولات`,
    description: isEn ? service.descEn : service.descAr,
  };
}

export default function ServicePage({ params: { slug, locale } }: Props) {
  const service = servicesData.find((s) => s.slug === slug);
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  if (!service) {
    notFound();
  }

  const title = isEn ? service.titleEn : service.titleAr;
  const desc = isEn ? service.descEn : service.descAr;
  const scope = isEn ? service.scopeEn : service.scopeAr;
  const features = isEn ? service.featuresEn : service.featuresAr;
  const suitableFor = isEn ? service.suitableForEn : service.suitableForAr;
  const process = isEn ? service.processEn : service.processAr;
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <div className="bg-gray-50/40 pb-16 md:pb-24">
      {/* 1. Breadcrumbs & Hero Header */}
      <section className="bg-white border-b border-gray-100 py-8 md:py-12">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {dict.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${isEn ? "" : "rotate-180"}`} />
            <Link href={`/${locale}/services`} className="hover:text-primary transition-colors">
              {dict.nav.services}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${isEn ? "" : "rotate-180"}`} />
            <span className="font-bold text-gray-900">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Start Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-900/10 text-[#7C3E1D] text-xs font-bold border border-amber-900/20">
                <Icon className="w-3.5 h-3.5" />
                <span>{isEn ? "Specialized Service" : "خدمة معتمدة"}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                {desc}
              </p>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#B56D2A] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{dict.services.disclaimer}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/${locale}/request-quote?service=${encodeURIComponent(slug)}`}
                  className="bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm sm:text-base flex items-center justify-center gap-2 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>{dict.hero.quoteBtn}</span>
                </Link>

                <a
                  href={getDirectWhatsAppUrl({
                    locale,
                    source: isEn ? `Service Page: ${service.titleEn}` : `صفحة خدمة: ${service.titleAr}`,
                    serviceTitle: isEn ? service.titleEn : service.titleAr,
                    customTopic: isEn ? "Inquiring about specifications, pricing, and execution" : "الاستفسار عن المواصفات، عروض الأسعار، والتنفيذ"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm sm:text-base flex items-center justify-center gap-2 shadow-md"
                  dir="ltr"
                >
                  <MessagesSquare className="w-5 h-5" />
                  <span>{dict.hero.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Right/End Column: Image Card */}
            <div className="lg:col-span-5 w-full h-[260px] sm:h-[340px] lg:h-[400px] relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src={service.image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Content Blocks */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Scope of Work */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2.5 text-[#7C3E1D]">
                  <Layers className="w-6 h-6 text-[#B56D2A]" />
                  <span>{dict.services.scopeTitle}</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  {scope}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">
                    {isEn ? "Key Technical Advantages:" : "أبرز المزايا الفنية والتنفيذية:"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/40 border border-amber-900/5 text-xs sm:text-sm text-gray-800">
                        <CheckCircle2 className="w-4 h-4 text-[#B56D2A] shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suitable For / Applications */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5 text-[#7C3E1D]">
                  <ShieldCheck className="w-6 h-6 text-[#B56D2A]" />
                  <span>{dict.services.suitableTitle}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {suitableFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#B56D2A]/30 transition-all text-xs sm:text-sm font-bold text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-[#B56D2A] shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process / Steps */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5 text-[#7C3E1D]">
                  <Workflow className="w-6 h-6 text-[#B56D2A]" />
                  <span>{dict.services.processTitle}</span>
                </h2>
                <div className="space-y-4">
                  {process.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A281A] to-[#B56D2A] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Fast Quote Contact Card */}
              <div className="bg-gradient-to-br from-[#2D160E] to-[#4A281A] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-amber-900/30">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#f5d77f] text-xs font-bold mb-4">
                  {isEn ? "Fast Project Estimate" : "تسعير فوري ومباشر"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-3">
                  {isEn ? "Need a quotation for this service?" : "هل ترغب في تسعير هذه الخدمة؟"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {isEn 
                    ? "Share your BOQ, site drawings, or approximate measurements with our engineers."
                    : "أرسل جدول الكميات أو المخططات أو المقاسات التقريبية لمراجعة النطاق فوراً."}
                </p>

                <div className="space-y-3">
                  <Link
                    href={`/${locale}/request-quote?service=${encodeURIComponent(slug)}`}
                    className="w-full bg-gradient-to-r from-[#B56D2A] to-[#B9A174] text-white p-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{dict.hero.quoteBtn}</span>
                  </Link>

                  <a
                    href={getDirectWhatsAppUrl({
                      locale,
                      source: isEn ? `Service Sidebar: ${service.titleEn}` : `الشريط الجانبي لخدمة: ${service.titleAr}`,
                      serviceTitle: isEn ? service.titleEn : service.titleAr,
                      customTopic: isEn ? "Quick quotation for service" : "تسعير وتنسيق فوري للخدمة"
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white p-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all"
                    dir="ltr"
                  >
                    <MessagesSquare className="w-4 h-4" />
                    <span>{siteConfig.contact.phoneDisplay} (واتساب)</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 p-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                    dir="ltr"
                  >
                    <PhoneCall className="w-4 h-4 text-[#f5d77f]" />
                    <span>{siteConfig.contact.phoneDisplay} (اتصال)</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B56D2A]"></span>
                  <span>{dict.services.relatedTitle}</span>
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/${locale}/services/${rel.slug}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-amber-50/50 border border-transparent hover:border-amber-200 transition-all text-xs sm:text-sm text-gray-700 font-medium"
                    >
                      <span className="group-hover:text-[#7C3E1D] transition-colors font-bold">
                        {isEn ? rel.titleEn : rel.titleAr}
                      </span>
                      <ArrowLeft className={`w-3.5 h-3.5 text-gray-400 group-hover:text-[#7C3E1D] transition-transform ${isEn ? "rotate-180" : ""}`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
