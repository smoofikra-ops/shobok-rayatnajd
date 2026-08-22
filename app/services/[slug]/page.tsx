import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface Props {
  params: { slug: string };
}

// Map slugs to specialized H1s and descriptions as requested
const servicesData: Record<string, { title: string, h1: string }> = {
  "security-fencing": { 
    title: "الشبوك الأمنية", 
    h1: "توريد وتركيب الشبوك الأمنية للمشاريع والمنشآت" 
  },
  "steel-fencing": { 
    title: "السياج الحديدي", 
    h1: "توريد وتركيب السياج الحديدي للمشاريع" 
  },
  "shades": { 
    title: "المظلات", 
    h1: "توريد وتنفيذ المظلات للمشاريع والمواقع" 
  },
  "warehouse-hangar-structures": { 
    title: "هياكل الهناجر", 
    h1: "توريد وتركيب هياكل الهناجر للمستودعات" 
  },
};

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData[params.slug] || {
    title: "الخدمة",
    h1: `تفاصيل الخدمة: ${params.slug.replace(/-/g, ' ')}`
  };

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> العودة للخدمات
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          {service.h1}
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
            تُحدد المواصفات والمقاسات والكميات حسب متطلبات المشروع والموقع والمخططات ونطاق العمل.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">نطاق العمل يشمل</h2>
          <ul className="space-y-3 mb-8">
            {[
              "مراجعة المخططات وجداول الكميات (BOQ) لتحديد الاحتياج بدقة.",
              "توفير المواد المطابقة للمواصفات الفنية المعتمدة للمشروع.",
              "التنفيذ بواسطة فرق عمل متخصصة وفق الجدول الزمني.",
              "الالتزام بمعايير الجودة والسلامة في جميع مراحل العمل."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">هل لديك متطلبات خاصة بمشروعك؟</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              شاركنا التفاصيل والمخططات المتوفرة لنتمكن من دراسة نطاق العمل وتقديم العرض المناسب.
            </p>
            <Link href="/request-quote" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-white hover:bg-primary-hover shadow-sm h-11 px-8">
              طلب عرض سعر
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
