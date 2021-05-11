import { SupportedLocale } from '@applyfuture/models/src/SupportedLocale';
import { format } from 'date-fns';
import { enUS, fr, zhCN } from 'date-fns/locale';

export type DateOptions = {
    locale?: SupportedLocale;
    scheme?: string;
    value: Date | string | null | undefined;
};

export const date = (options: DateOptions): string | null => {
    const { locale = 'en', scheme = 'LLL y', value } = options;

    if (!value) {
        return null;
    }

    const locales = {
        en: enUS,
        fr: fr,
        zh: zhCN
    };

    return format(new Date(value), scheme, { locale: locales[locale] });
};
