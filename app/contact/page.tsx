import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "طرق التواصل مع مؤسسة شبوك رايات نجد.",
};

export default function ContactPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        تواصل معنا
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        معلومات التواصل ونموذج الاتصال سيكون هنا.
      </p>
    </Container>
  );
}
