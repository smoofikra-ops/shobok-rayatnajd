import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        404
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        عذراً، الصفحة التي تبحث عنها غير موجودة.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-hover shadow-sm h-10 px-4 py-2">
          العودة للرئيسية
        </a>
      </div>
    </Container>
  );
}
