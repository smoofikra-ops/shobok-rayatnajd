import { type Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "مشاريعنا",
  description: "معرض مشاريع وأعمال مؤسسة شبوك رايات نجد.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        مشاريعنا
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        معرض المشاريع السابقة سيتم عرضه هنا.
      </p>
    </Container>
  );
}
