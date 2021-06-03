import { isBrowser } from '../helpers/isBrowser';

declare global {
    interface Window {
        $crisp: any[];
        CRISP_WEBSITE_ID: string;
    }
}

export const initCrisp = (): void => {
    if (isBrowser()) {
        window.$crisp = [];
        window.$crisp.push(['safe', true]);
        window.CRISP_WEBSITE_ID = '431898bb-2b6b-4c56-88f5-4660e67338c2';
        (function () {
            const d = document;
            const s = d.createElement('script');
            s.src = 'https://client.crisp.chat/l.js';
            s.async = true;
            d.getElementsByTagName('head')[0].appendChild(s);
        })();
    }
};
