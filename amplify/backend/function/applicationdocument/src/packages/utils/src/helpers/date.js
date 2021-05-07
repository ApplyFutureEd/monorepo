"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
exports.date = (options) => {
    const { locale = 'en', scheme = 'LLL y', value } = options;
    if (!value) {
        return null;
    }
    const locales = {
        en: locale_1.enUS,
        fr: locale_1.fr,
        zh: locale_1.zhCN
    };
    return date_fns_1.format(new Date(value), scheme, { locale: locales[locale] });
};
//# sourceMappingURL=date.js.map