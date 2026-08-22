import { siteConfig } from "@/config/site";

export interface WhatsAppMessageOptions {
  locale?: string;
  source?: string;
  serviceTitle?: string;
  customTopic?: string;
}

/**
 * Generates a pre-filled WhatsApp link with a professional header and clear introduction
 * indicating that the customer is reaching out directly from the Rayat Najd website.
 */
export function getDirectWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const { locale = "ar", source, serviceTitle, customTopic } = options;
  const isEn = locale === "en";

  let message = "";

  if (isEn) {
    message = `*Rayat Najd Contracting - Website Customer Inquiry*
🌐 *Source:* Official Website (${source || "Direct Contact"})
${serviceTitle ? `🛠️ *Service:* ${serviceTitle}\n` : ""}${customTopic ? `📋 *Inquiry:* ${customTopic}\n` : ""}----------------------------------
Hello, I am contacting you directly from Rayat Najd website. I would like to inquire about your fencing and contracting services for our project.`;
  } else {
    message = `*مؤسسة رايات نجد للمقاولات - تواصل عبر الموقع الإلكتروني*
🌐 *المصدر:* الموقع الإلكتروني الرسمي (${source || "تواصل مباشر"})
${serviceTitle ? `🛠️ *الخدمة المطلوبة:* ${serviceTitle}\n` : ""}${customTopic ? `📋 *نوع الاستفسار:* ${customTopic}\n` : ""}----------------------------------
السلام عليكم ورحمة الله وبركاته،
تواصلت معكم من خلال موقع رايات نجد الإلكتروني، وأرغب في الاستفسار والتنسيق بخصوص خدمات توريد وتركيب الشبوك والمقاولات لمشروعنا.`;
  }

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message.trim())}`;
}
