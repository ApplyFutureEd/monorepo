import { Analytics } from 'aws-amplify';

import { getBrowserLocales } from '../helpers/locales';

export const initAnalytics = (): void => {
    Analytics.autoTrack('pageView', {
        attributes: () => {
            const language = getBrowserLocales({ languageCodeOnly: false });
            return { language: language && language[0] };
        },
        enable: true,
        eventName: 'pageView',
        getUrl: () => {
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
};
