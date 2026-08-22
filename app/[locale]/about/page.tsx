import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About Us | من نحن",
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === "en";
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {isEn ? "About Us" : "من نحن"}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {isEn 
          ? "Information about the establishment and its history will be here."
          : "نبذة عن المؤسسة وتاريخها ستكون هنا."}
      </p>
    </Container>
  );
}
