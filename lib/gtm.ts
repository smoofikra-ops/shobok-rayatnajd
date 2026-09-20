// Central Google Tag Manager & DataLayer Helper
export type RfqSuccessData = {
  event: "rfq_whatsapp_success";
  form_id: "request_quote";
  service_selected: string;
  scope_selected: string;
  [key: string]: unknown;
};

export type DataLayerEvent = RfqSuccessData | Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Pushes a strictly typed or structured event to window.dataLayer
 */
export function pushDataLayerEvent(eventData: DataLayerEvent): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData as Record<string, unknown>);
  }
}
