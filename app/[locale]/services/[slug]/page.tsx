import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, MessagesSquare } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { notFound } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface Props {
  params: { slug: string, locale: string };
}

export async function generateStaticParams() {
  return servicesData.flatMap(service => [
    { slug: service.slug, locale: "ar" },
    { slug: service.slug, locale: "en" }
  ]);
}

export default function ServicePage({ params: { slug, locale } }: Props) {
  const service = servicesData.find(s => s.slug === slug);
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  if (!service) {
    notFound();
  }

  const title = isEn ? service.titleEn : service.titleAr;
  const desc = isEn ? service.descEn : service.descAr;

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft className={`w-4 h-4 ${isEn ? 'rotate-180' : ''}`} />
                {dict.nav.home}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                {desc}
              </p>
              <div className="flex gap-4 pt-4">
                <Link href={`/${locale}/request-quote`} className="bg-gradient-to-r from-[#4A281A] via-[#B56D2A] to-[#B9A174] text-white px-8 py-3.5 rounded-md font-bold hover:shadow-lg transition-all shadow-sm">
                  {dict.hero.quoteBtn}
                </Link>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-md font-bold hover:bg-[#128C7E] transition-all shadow-sm flex items-center gap-2" dir="ltr">
                  <MessagesSquare className="w-5 h-5" />
                  <span className="hidden sm:inline">{dict.hero.whatsappBtn}</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image src={service.image} alt={title} fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isEn ? "Service Overview" : "نظرة عامة على الخدمة"}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {isEn 
                  ? "We provide specialized execution, supply, and installation solutions for projects, taking into account site constraints and approved requirements."
                  : "نقدم حلول تنفيذ وتوريد وتركيب متخصصة للمشاريع، مع مراعاة طبيعة الموقع والمتطلبات المعتمدة."}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isEn ? [
                  "Professional team execution.",
                  "Adherence to technical specifications.",
                  "Customized dimensions and sizes.",
                  "Support for various industrial and agricultural sectors."
                ] : [
                  "تنفيذ بواسطة فريق عمل متخصص.",
                  "الالتزام بالمواصفات الفنية المعتمدة.",
                  "العمل وفق المقاسات والأبعاد المطلوبة.",
                  "تغطية مختلف القطاعات الصناعية والزراعية."
                ]).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
