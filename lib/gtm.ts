// Central Google Tag Manager & DataLayer Helper

export type FormSuccessData = {
  event: "form_success";
  form_id: "request_quote";
  service_selected: string;
  [key: string]: unknown;
};

export type RfqSuccessData = {
  event: "rfq_whatsapp_success";
  form_id: "request_quote";
  service_selected: string;
  scope_selected?: string;
  [key: string]: unknown;
};

export type WhatsAppClickData = {
  event: "whatsapp_click";
  click_location?: string;
  [key: string]: unknown;
};

export type PhoneClickData = {
  event: "phone_click";
  click_location?: string;
  [key: string]: unknown;
};

export type RequestQuoteClickData = {
  event: "request_quote_click";
  click_location?: string;
  [key: string]: unknown;
};

export type DataLayerEvent =
  | FormSuccessData
  | RfqSuccessData
  | WhatsAppClickData
  | PhoneClickData
  | RequestQuoteClickData
  | Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Pushes a structured event to window.dataLayer
 */
export function pushDataLayerEvent(eventData: DataLayerEvent): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData as Record<string, unknown>);
  }
}

/**
 * Helper to track WhatsApp clicks
 */
export function trackWhatsAppClick(location?: string): void {
  pushDataLayerEvent({
    event: "whatsapp_click",
    click_location: location || "unspecified",
  });
}

/**
 * Helper to track Phone clicks
 */
export function trackPhoneClick(location?: string): void {
  pushDataLayerEvent({
    event: "phone_click",
    click_location: location || "unspecified",
  });
}

/**
 * Helper to track Request Quote CTA button clicks
 */
export function trackRequestQuoteClick(location?: string): void {
  pushDataLayerEvent({
    event: "request_quote_click",
    click_location: location || "unspecified",
  });
}

