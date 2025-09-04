// Google Tag Manager event tracking utilities

export const GTM_ID = 'GTM-MF5H8LMX';

// Type definitions for GTM events
interface GTMEvent {
  event: string;
  [key: string]: any;
}

// Push event to dataLayer (works for both GTM and gtag)
export const pushToDataLayer = (event: GTMEvent) => {
  if (typeof window !== 'undefined') {
    // Push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push(event);
    }
    
    // Also send directly to GA4 if gtag is available
    if (window.gtag && event.event) {
      window.gtag('event', event.event, {
        ...event,
        send_to: 'G-RBSKVLSREW'
      });
    }
  }
};

// Common tracking events
export const trackEvent = {
  // Page view
  pageView: (url: string) => {
    pushToDataLayer({
      event: 'page_view',
      page: url,
    });
  },

  // Form submissions
  formSubmit: (formName: string, formData?: any) => {
    pushToDataLayer({
      event: 'form_submit',
      form_name: formName,
      form_data: formData,
    });
  },

  // Button clicks
  buttonClick: (buttonName: string, buttonLocation?: string) => {
    pushToDataLayer({
      event: 'button_click',
      button_name: buttonName,
      button_location: buttonLocation,
    });
  },

  // Download tracking
  fileDownload: (fileName: string, fileType: string) => {
    pushToDataLayer({
      event: 'file_download',
      file_name: fileName,
      file_type: fileType,
    });
  },

  // Outbound link clicks
  outboundLink: (url: string, linkText?: string) => {
    pushToDataLayer({
      event: 'outbound_link_click',
      url: url,
      link_text: linkText,
    });
  },

  // Scroll depth
  scrollDepth: (percentage: number) => {
    pushToDataLayer({
      event: 'scroll_depth',
      scroll_percentage: percentage,
    });
  },

  // Service interest
  serviceInterest: (serviceName: string, action: string) => {
    pushToDataLayer({
      event: 'service_interest',
      service_name: serviceName,
      action: action,
    });
  },

  // Whitepaper engagement
  whitepaperEngagement: (action: string, section?: string) => {
    pushToDataLayer({
      event: 'whitepaper_engagement',
      action: action,
      section: section,
    });
  },

  // Contact request
  contactRequest: (method: string, service?: string) => {
    pushToDataLayer({
      event: 'contact_request',
      contact_method: method,
      service_interest: service,
    });
  },

  // Video engagement
  videoEngagement: (action: string, videoName: string, progress?: number) => {
    pushToDataLayer({
      event: 'video_engagement',
      action: action,
      video_name: videoName,
      progress: progress,
    });
  },
};

// Enhanced ecommerce events (for future use)
export const ecommerceEvent = {
  // View item (service)
  viewItem: (serviceName: string, price?: number) => {
    pushToDataLayer({
      event: 'view_item',
      ecommerce: {
        items: [{
          item_name: serviceName,
          price: price,
          currency: 'USD',
        }]
      }
    });
  },

  // Begin checkout
  beginCheckout: (serviceName: string, price?: number) => {
    pushToDataLayer({
      event: 'begin_checkout',
      ecommerce: {
        items: [{
          item_name: serviceName,
          price: price,
          currency: 'USD',
        }]
      }
    });
  },
};

// Extend Window interface to include dataLayer and gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
