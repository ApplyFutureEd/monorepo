import { SupportedLocale } from '@applyfuture/models/src/SupportedLocale';

type CurrencyOptions = {
    currency: string | undefined;
    locale?: SupportedLocale;
    value: number | bigint | undefined;
};

export const currency = (options: CurrencyOptions): string => {
    const { currency, locale = 'en', value } = options;

    if (!currency || !value) {
        return '';
    }

    return Intl.NumberFormat(locale, {
        currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: 'currency'
    }).format(value);
};
