import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Projects | المشاريع",
};

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === "en";
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {isEn ? "Our Projects" : "مشاريعنا"}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {isEn 
          ? "A portfolio of our executed projects will be displayed here."
          : "معرض للمشاريع المنفذة سيكون هنا."}
      </p>
    </Container>
  );
}
