import { type Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Shield, Fence, Warehouse, HardHat, Factory, Tractor, CheckCircle2, Hammer, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "اكتشف خدماتنا في مقاولات وتركيب الشبوك والسياج الحديدي والمظلات والهناجر.",
};

const servicesList = [
  { slug: "security-fencing", title: "الشبوك الأمنية", desc: "توريد وتركيب الشبوك الأمنية للمشاريع والمنشآت.", icon: Shield },
  { slug: "steel-fencing", title: "السياج الحديدي", desc: "توريد وتركيب السياج الحديدي للمشاريع.", icon: Fence },
  { slug: "shades", title: "المظلات", desc: "توريد وتنفيذ المظلات للمشاريع والمواقع.", icon: HardHat },
  { slug: "warehouse-hangar-structures", title: "هياكل الهناجر للمستودعات", desc: "توريد وتركيب هياكل الهناجر للمستودعات والمرافق.", icon: Warehouse },
  { slug: "supply-install", title: "توريد وتركيب الشبوك والسياج", desc: "حل شامل لتنفيذ المشروع بالكامل من التوريد حتى التسليم.", icon: CheckCircle2 },
  { slug: "supply-only", title: "توريد الشبوك", desc: "توفير المواد حسب المواصفات والكميات المطلوبة للمشروع.", icon: CheckCircle2 },
  { slug: "install-only", title: "تركيب الشبوك", desc: "تنفيذ الأعمال بواسطة فريق متخصص بناءً على المواد المتوفرة.", icon: Hammer },
  { slug: "farm-fencing", title: "شبوك المزارع", desc: "حلول تسوير وحماية الأراضي والمشاريع الزراعية.", icon: Tractor },
  { slug: "industrial-fencing", title: "شبوك المنشآت الصناعية", desc: "تأمين وتسوير المواقع والمرافق الصناعية بحلول مخصصة.", icon: Factory },
  { slug: "galvanized-fencing", title: "الشبوك المجلفنة", desc: "شبوك مقاومة للصدأ والعوامل الجوية للمشاريع طويلة الأجل.", icon: Shield },
];

export default function ServicesPage() {
  return (
    <Container className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          الخدمات والحلول
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          نقدم حلولاً متكاملة لتوريد وتركيب الشبوك والسياج الحديدي والمظلات والهناجر، تُحدد مواصفاتها بدقة حسب متطلبات مشروعك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="group flex flex-col bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <service.icon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
            <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto">
              <span>التفاصيل</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
