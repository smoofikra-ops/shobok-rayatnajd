import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على مؤسسة شبوك رايات نجد ورؤيتنا وقيمنا.",
};

export default function AboutPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        من نحن
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        نبذة عن المؤسسة وتاريخها ستكون هنا.
      </p>
    </Container>
  );
}
