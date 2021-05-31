import { Analytics } from 'aws-amplify';

import { isBrowser } from '../helpers/isBrowser';
import { getBrowserLocales } from '../helpers/locales';

export const initAnalytics = (): void => {
    if (isBrowser()) {
        Analytics.autoTrack('pageView', {
            attributes: () => {
                const language = getBrowserLocales({ languageCodeOnly: false });
                return { language: language && language[0] };
            },
            enable: true,
            eventName: 'pageView',
            getUrl: () => {
                if (!window) {
                    return 'SSR';
                }
                return window.location.origin + window.location.pathname;
            },
            provider: 'AWSPinpoint',
            type: 'SPA'
        });

        Analytics.autoTrack('event', {
            enable: true,
            events: ['click'],
            provider: 'AWSPinpoint',
            selectorPrefix: 'data-amplify-analytics-'
        });
    }
};
