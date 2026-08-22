import { Container } from "@/components/ui/container";

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        تفاصيل المشروع: {params.slug}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        سيتم عرض تفاصيل المشروع وصور التنفيذ هنا.
      </p>
    </Container>
  );
}
