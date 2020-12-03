import { format } from 'date-fns';
import { enUS, fr, zhCN } from 'date-fns/locale';
import { SupportedLocale } from 'src/types/SupportedLocale';

type DateOptions = {
    locale?: SupportedLocale;
    scheme?: string;
    value: Date | string;
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
