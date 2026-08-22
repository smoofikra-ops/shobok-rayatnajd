import { Container } from "@/components/ui/container";

interface Props {
  params: { slug: string, locale: string };
}

export default function ProjectDetailPage({ params: { slug, locale } }: Props) {
  const isEn = locale === "en";
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {isEn ? `Project Details: ${slug}` : `تفاصيل المشروع: ${slug}`}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {isEn 
          ? "Project details and execution photos will be displayed here."
          : "سيتم عرض تفاصيل المشروع وصور التنفيذ هنا."}
      </p>
    </Container>
  );
}
