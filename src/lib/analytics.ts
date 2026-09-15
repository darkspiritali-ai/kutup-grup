export type AnalyticsEventName =
    | 'page_view'
    | 'generate_lead'
    | 'click_to_call'
    | 'click_to_email'
    | 'click_to_whatsapp';

export interface AnalyticsEventParams {
    [key: string]: string | number | boolean | undefined;
}

interface AnalyticsWindow extends Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
}

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();
const GTM_CONTAINER_ID = (import.meta.env.VITE_GTM_CONTAINER_ID || '').trim();
const CONSENT_EVENT = 'kutup:consent-change';

const getAnalyticsWindow = (): AnalyticsWindow => window as AnalyticsWindow;

export const isAnalyticsConfigured = (): boolean => Boolean(GA_MEASUREMENT_ID || GTM_CONTAINER_ID);

export const hasAnalyticsConsent = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('cookie-consent') === 'accepted';
};

const ensureDataLayer = (): unknown[] => {
    const analyticsWindow = getAnalyticsWindow();
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    return analyticsWindow.dataLayer;
};

const loadScript = (src: string, id: string): void => {
    if (document.getElementById(id)) return;

    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
};

export const initializeAnalytics = (): void => {
    if (typeof window === 'undefined' || !hasAnalyticsConsent() || !isAnalyticsConfigured()) return;

    const analyticsWindow = getAnalyticsWindow();
    const dataLayer = ensureDataLayer();

    if (GTM_CONTAINER_ID) {
        if (!document.getElementById('kutup-google-tag-manager')) {
            dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
            loadScript(
                `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_CONTAINER_ID)}`,
                'kutup-google-tag-manager',
            );
        }
        return;
    }

    if (!GA_MEASUREMENT_ID || analyticsWindow.gtag) return;

    analyticsWindow.gtag = (...args: unknown[]) => {
        dataLayer.push(args);
    };
    analyticsWindow.gtag('js', new Date());
    analyticsWindow.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
    loadScript(
        `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`,
        'kutup-google-analytics',
    );
};

export const trackEvent = (name: AnalyticsEventName, params: AnalyticsEventParams = {}): void => {
    if (typeof window === 'undefined' || !hasAnalyticsConsent() || !isAnalyticsConfigured()) return;

    initializeAnalytics();
    const event = { event: name, ...params };

    const analyticsWindow = getAnalyticsWindow();
    if (GTM_CONTAINER_ID) {
        ensureDataLayer().push(event);
    } else if (GA_MEASUREMENT_ID && analyticsWindow.gtag) {
        analyticsWindow.gtag('event', name, params);
    }
};

export const CONSENT_CHANGE_EVENT = CONSENT_EVENT;
