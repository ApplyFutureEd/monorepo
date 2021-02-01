import Cookies from 'js-cookie';

export const setCountryCode = async (): Promise<string> => {
    try {
        const response: any = await (await fetch('https://extreme-ip-lookup.com/json/')).json();
        Cookies.set('country_code', response.countryCode);
        return response.countryCode;
    } catch (error) {
        Cookies.set('country_code', 'unknown');
        return 'unknown';
    }
};

export const getCountryCode = (): string => {
    return Cookies.get('country_code') || 'unknown';
};

export const isChina = (): boolean => {
    if (['CN', 'unknown'].includes(getCountryCode())) {
        return true;
    }
    return false;
};
