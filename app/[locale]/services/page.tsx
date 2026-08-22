import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Services | الخدمات",
};

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === "en";
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {isEn ? "Our Services" : "خدماتنا"}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {isEn 
          ? "Please go to the home page to view the services sections."
          : "الرجاء الانتقال للصفحة الرئيسية لمشاهدة أقسام الخدمات."}
      </p>
    </Container>
  );
}
