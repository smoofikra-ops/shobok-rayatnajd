import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { CheckCircle2, Shield, Fence, Warehouse, Factory, Tractor, Hammer, FileText, Phone, MessagesSquare, HardHat, ArrowLeft } from "lucide-react";

export default function HomePage() {
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
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-100">
        <Container className="flex flex-col items-center text-center">
          <span className="text-primary font-bold text-sm md:text-base tracking-wider mb-4 px-3 py-1 bg-primary/10 rounded-full">
            متخصصون في التنفيذ والمقاولات
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl leading-tight">
            حلول الشبوك، السياج، المظلات، والهناجر للمشاريع
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            توريد وتركيب بمواصفات عالية تناسب احتياج مشروعك. تُحدد المواصفات والمقاسات والكميات حسب متطلبات الموقع والمخططات ونطاق العمل.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/request-quote" className="bg-primary text-white px-8 py-3.5 rounded-md font-medium hover:bg-primary-hover transition-colors shadow-sm">
              طلب عرض سعر
            </Link>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#20bd5a] transition-colors shadow-sm flex items-center justify-center gap-2" dir="ltr">
              تواصل عبر واتساب <MessagesSquare className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-500 font-medium flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="w-4 h-4 text-primary" /> خبرة في إدارة وتنفيذ المشاريع منذ 2010
          </p>
        </Container>
      </section>

      {/* 2. Services & Needs */}
      <section className="py-12 md:py-16 overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">حلول الشبوك والخدمات حسب احتياج مشروعك</h2>
          </div>
        </Container>
        <div className="relative w-full max-w-[100vw] overflow-hidden" dir="rtl">
          <style dangerouslySetInnerHTML={{__html: `
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee-rtl 40s linear infinite;
            }
            .marquee-track:hover, .marquee-track:active, .marquee-track:focus-within {
              animation-play-state: paused;
            }
            @keyframes marquee-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee-track {
                animation: none !important;
              }
              .marquee-container {
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
              }
              .marquee-card {
                scroll-snap-align: start;
              }
            }
          `}} />
          <div className="marquee-container w-full overflow-hidden">
            <div className="marquee-track gap-5 px-5 pb-8 pt-4">
              {(() => {
                const servicesData = [
                  { title: "الشبوك الأمنية", desc: "حلول لحماية وتحديد المواقع والمنشآت حسب متطلبات المشروع.", icon: Shield, slug: "security-fencing" },
                  { title: "السياج الحديدي", desc: "للمشاريع والمرافق والمنشآت وفق نطاق العمل والمواصفات المطلوبة.", icon: Fence, slug: "steel-fencing" },
                  { title: "المظلات", desc: "توريد وتنفيذ للمشاريع والمواقع حسب الاستخدام والمقاسات.", icon: HardHat, slug: "shades" },
                  { title: "هياكل الهناجر", desc: "توريد وتركيب هياكل الهناجر للمستودعات والمرافق وفق المواصفات.", icon: Warehouse, slug: "warehouse-hangar-structures" },
                  { title: "شبوك المنشآت الصناعية", desc: "تأمين وتسوير المواقع والمرافق الصناعية بحلول مخصصة.", icon: Factory, slug: "industrial-fencing" },
                  { title: "شبوك المزارع", desc: "حلول تسوير وحماية الأراضي والمشاريع الزراعية المختلفة.", icon: Tractor, slug: "farm-fencing" },
                  { title: "الشبوك المجلفنة", desc: "شبوك مقاومة للصدأ والعوامل الجوية للمشاريع طويلة الأجل.", icon: Shield, slug: "galvanized-fencing" },
                  { title: "توريد وتركيب", desc: "حل شامل لتنفيذ المشروع بالكامل من التوريد حتى التسليم النهائي.", icon: CheckCircle2, slug: "supply-install" },
                  { title: "توريد فقط", desc: "توفير المواد حسب المواصفات والكميات المطلوبة للمشروع.", icon: CheckCircle2, slug: "supply-only" },
                  { title: "تركيب فقط", desc: "تنفيذ الأعمال بواسطة فريق متخصص بناءً على المواد المتوفرة.", icon: Hammer, slug: "install-only" },
                ];
                return [...servicesData, ...servicesData].map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${item.slug}`}
                    className="marquee-card group flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 h-[260px] md:h-[280px] w-[85vw] sm:w-[350px] lg:w-[380px] shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>اعرف المزيد</span>
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
                    </div>
                  </Link>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions & Sectors */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">حلول تناسب طبيعة مشروعك</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solutions */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> الحلول المتوفرة
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["شبوك مجلفنة", "شبوك أمنية", "شبوك مزارع", "شبوك منشآت صناعية", "سياج للمشاريع والمواقع", "سياج حديدي", "مظلات", "هياكل هناجر للمستودعات"].map((sol, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {sol}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sectors */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Factory className="w-5 h-5 text-primary" /> القطاعات المستهدفة
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["المشاريع الحكومية", "المنشآت والمشاريع الصناعية", "المشاريع الزراعية والمزارع", "المشاريع التجارية", "المواقع والمرافق", "المستودعات والمنشآت اللوجستية"].map((sector, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> {sector}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Trust & Process */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Why Us */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">لماذا رايات نجد؟</h2>
              <div className="space-y-4">
                {[
                  "خبرة في إدارة وتنفيذ المشاريع منذ 2010.",
                  "الالتزام الدقيق بالمواصفات الفنية المعتمدة.",
                  "حلول يتم تحديدها وتخصيصها حسب احتياج المشروع.",
                  "فهم عميق لمتطلبات العميل ونطاق العمل.",
                  "خدمات متعددة للمشاريع تشمل الشبوك والسياج والمظلات وهياكل الهناجر."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">كيف نبدأ مشروعك؟</h2>
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:right-3.5 before:w-0.5 before:bg-gray-100">
                {[
                  { title: "استلام المتطلبات", desc: "نتعرف على نوع المشروع والموقع والخدمة المطلوبة." },
                  { title: "مراجعة نطاق العمل", desc: "نراجع المواصفات والكميات والمخططات أو BOQ عند توفرها." },
                  { title: "إعداد العرض", desc: "يتم إعداد العرض وفق النطاق والمتطلبات المتاحة." },
                  { title: "التنسيق والتنفيذ", desc: "بعد الاعتماد يتم التنسيق على التوريد أو التنفيذ حسب المشروع." },
                ].map((step, i) => (
                  <div key={i} className="relative pr-10">
                    <span className="absolute right-0 top-1 w-7 h-7 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
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

      {/* 5. FAQ */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">الأسئلة الشائعة</h2>
            <div className="space-y-3">
              {[
                { q: "هل توفرون الشبوك الأمنية والسياج الحديدي؟", a: "نعم، يتم توفير وتنفيذ الحل المناسب وفق متطلبات المشروع والموقع ونطاق العمل." },
                { q: "هل تنفذون المظلات؟", a: "نعم، يمكن توريد وتنفيذ المظلات حسب استخدام الموقع والمقاسات والمتطلبات الخاصة بالمشروع." },
                { q: "هل توفرون وتركيبون هياكل الهناجر للمستودعات؟", a: "نعم، يمكن توريد وتركيب هياكل الهناجر للمستودعات والمرافق وفق أبعاد الموقع والمخططات ونطاق المشروع." },
                { q: "هل يمكن طلب التوريد فقط أو التركيب فقط؟", a: "نعم، يتم تحديد نطاق الخدمة حسب متطلبات كل مشروع." },
                { q: "لدي BOQ أو مخططات، هل يمكن إرسالها؟", a: "نعم، يمكن إرسال جدول الكميات أو المخططات أو المتطلبات المتوفرة لمراجعة نطاق المشروع." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-lg border border-gray-200 p-4 [&_summary::-webkit-details-marker]:hidden shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 text-sm md:text-base">
                    <span>{faq.q}</span>
                    <span className="transition duration-300 group-open:-rotate-180 text-gray-400">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed pr-2">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. RFQ + CTA */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">شاركنا متطلبات مشروعك</h2>
              <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                أرسل تفاصيل المشروع أو المخطط أو جدول الكميات المتوفر، وسنراجع نطاق طلبك ونحدد الحل المناسب، سواء كان شبوكًا أو سياجًا حديديًا أو مظلات أو هياكل هناجر للمستودعات.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/request-quote" className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-hover transition-colors shadow-sm">
                  طلب عرض سعر
                </Link>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3 rounded-md font-medium hover:bg-[#20bd5a] transition-colors shadow-sm flex items-center justify-center gap-2" dir="ltr">
                  تواصل عبر واتساب <MessagesSquare className="w-5 h-5" />
                </a>
                <a href={`tel:${siteConfig.contact.phone}`} className="w-full sm:w-auto bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 border border-gray-700 transition-colors flex items-center justify-center gap-2" dir="ltr">
                  {siteConfig.contact.phoneDisplay} <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
