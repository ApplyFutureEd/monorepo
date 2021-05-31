import { SupportedLocale } from '@applyfuture/models/src/SupportedLocale';
import { format, formatDistance } from 'date-fns';
import { enUS, fr, zhCN } from 'date-fns/locale';

export type DateOptions = {
    locale?: SupportedLocale;
    method?: 'DISTANCE';
    scheme?: string;
    value: Date | string | null | undefined;
};

export const date = (options: DateOptions): string | null => {
    const { locale = 'en', method, scheme = 'LLL y', value } = options;

    if (!value) {
        return null;
    }

    const locales = {
        en: enUS,
        fr: fr,
        zh: zhCN
    };

    if (method === 'DISTANCE') {
        return formatDistance(new Date(), new Date(value), {
            locale: locales[locale]
        });
    }

    return format(new Date(value), scheme, { locale: locales[locale] });
};
