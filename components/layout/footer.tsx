import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-loose">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>العنوان: {siteConfig.contact.address}</li>
              <li>الهاتف: <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary dir-ltr inline-block">{siteConfig.contact.phone}</a></li>
              <li>البريد: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">{siteConfig.contact.email}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </Container>
    </footer>
  );
}
