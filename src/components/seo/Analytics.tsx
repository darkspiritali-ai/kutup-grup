import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    CONSENT_CHANGE_EVENT,
    hasAnalyticsConsent,
    initializeAnalytics,
    isAnalyticsConfigured,
    trackEvent,
} from '@/lib/analytics';

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        if (!isAnalyticsConfigured()) return;

        const handleConsentChange = () => {
            if (hasAnalyticsConsent()) initializeAnalytics();
        };

        window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
        if (hasAnalyticsConsent()) initializeAnalytics();

        return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    }, []);

    useEffect(() => {
        if (!hasAnalyticsConsent() || !isAnalyticsConfigured()) return;

        trackEvent('page_view', {
            page_location: window.location.href,
            page_path: `${location.pathname}${location.search}`,
            page_title: document.title,
        });
    }, [location.pathname, location.search]);

    useEffect(() => {
        if (!isAnalyticsConfigured()) return;

        const handleLinkClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const link = target?.closest('a');
            const href = link?.getAttribute('href') || '';
            if (!link || !href || !hasAnalyticsConsent()) return;

            if (href.startsWith('tel:')) {
                trackEvent('click_to_call', { link_url: href, page_path: window.location.pathname });
            } else if (href.startsWith('mailto:')) {
                trackEvent('click_to_email', { page_path: window.location.pathname });
            } else if (href.startsWith('https://wa.me/')) {
                trackEvent('click_to_whatsapp', { page_path: window.location.pathname });
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return null;
}
