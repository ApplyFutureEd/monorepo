import { SupportedLocale } from 'src/types/SupportedLocale';

type CurrencyOptions = {
    currency: string;
    locale?: SupportedLocale;
    value: number | bigint;
};

export const currency = (options: CurrencyOptions): string => {
    const { currency, locale = 'en', value } = options;

    return Intl.NumberFormat(locale, {
        currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: 'currency'
    }).format(value);
};
