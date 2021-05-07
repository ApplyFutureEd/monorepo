"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageLabel = exports.italianLanguages = exports.germanLanguages = exports.spanishLanguages = exports.frenchLanguages = exports.englishLanguages = exports.languages = void 0;
exports.languages = [
    {
        label: 'afrikaans',
        value: 'AF'
    },
    {
        label: 'albanian',
        value: 'SQ'
    },
    {
        label: 'arabic',
        value: 'AR'
    },
    {
        label: 'armenian',
        value: 'HY'
    },
    {
        label: 'basque',
        value: 'EU'
    },
    {
        label: 'bengali',
        value: 'BN'
    },
    {
        label: 'bulgarian',
        value: 'BG'
    },
    {
        label: 'catalan',
        value: 'CA'
    },
    {
        label: 'cambodian',
        value: 'KM'
    },
    {
        label: 'chinese-mandarin',
        value: 'ZH'
    },
    {
        label: 'croatian',
        value: 'HR'
    },
    {
        label: 'czech',
        value: 'CS'
    },
    {
        label: 'danish',
        value: 'DA'
    },
    {
        label: 'dutch',
        value: 'NL'
    },
    {
        label: 'english',
        value: 'EN'
    },
    {
        label: 'estonian',
        value: 'ET'
    },
    {
        label: 'fiji',
        value: 'FJ'
    },
    {
        label: 'finnish',
        value: 'FI'
    },
    {
        label: 'french',
        value: 'FR'
    },
    {
        label: 'georgian',
        value: 'KA'
    },
    {
        label: 'german',
        value: 'DE'
    },
    {
        label: 'greek',
        value: 'EL'
    },
    {
        label: 'gujarati',
        value: 'GU'
    },
    {
        label: 'hebrew',
        value: 'HE'
    },
    {
        label: 'hindi',
        value: 'HI'
    },
    {
        label: 'hungarian',
        value: 'HU'
    },
    {
        label: 'icelandic',
        value: 'IS'
    },
    {
        label: 'indonesian',
        value: 'ID'
    },
    {
        label: 'irish',
        value: 'GA'
    },
    {
        label: 'italian',
        value: 'IT'
    },
    {
        label: 'japanese',
        value: 'JA'
    },
    {
        label: 'javanese',
        value: 'JW'
    },
    {
        label: 'korean',
        value: 'KO'
    },
    {
        label: 'latin',
        value: 'LA'
    },
    {
        label: 'latvian',
        value: 'LV'
    },
    {
        label: 'lithuanian',
        value: 'LT'
    },
    {
        label: 'macedonian',
        value: 'MK'
    },
    {
        label: 'malay',
        value: 'MS'
    },
    {
        label: 'malayalam',
        value: 'ML'
    },
    {
        label: 'maltese',
        value: 'MT'
    },
    {
        label: 'maori',
        value: 'MI'
    },
    {
        label: 'marathi',
        value: 'MR'
    },
    {
        label: 'mongolian',
        value: 'MN'
    },
    {
        label: 'nepali',
        value: 'NE'
    },
    {
        label: 'norwegian',
        value: 'NO'
    },
    {
        label: 'persian',
        value: 'FA'
    },
    {
        label: 'polish',
        value: 'PL'
    },
    {
        label: 'portuguese',
        value: 'PT'
    },
    {
        label: 'punjabi',
        value: 'PA'
    },
    {
        label: 'quechua',
        value: 'QU'
    },
    {
        label: 'romanian',
        value: 'RO'
    },
    {
        label: 'russian',
        value: 'RU'
    },
    {
        label: 'samoan',
        value: 'SM'
    },
    {
        label: 'serbian',
        value: 'SR'
    },
    {
        label: 'slovak',
        value: 'SK'
    },
    {
        label: 'slovenian',
        value: 'SL'
    },
    {
        label: 'spanish',
        value: 'ES'
    },
    {
        label: 'swahili',
        value: 'SW'
    },
    {
        label: 'swedish',
        value: 'SV'
    },
    {
        label: 'tamil',
        value: 'TA'
    },
    {
        label: 'tatar',
        value: 'TT'
    },
    {
        label: 'telugu',
        value: 'TE'
    },
    {
        label: 'thai',
        value: 'TH'
    },
    {
        label: 'tibetan',
        value: 'BO'
    },
    {
        label: 'tonga',
        value: 'TO'
    },
    {
        label: 'turkish',
        value: 'TR'
    },
    {
        label: 'ukrainian',
        value: 'UK'
    },
    {
        label: 'urdu',
        value: 'UR'
    },
    {
        label: 'uzbek',
        value: 'UZ'
    },
    {
        label: 'vietnamese',
        value: 'VI'
    },
    {
        label: 'welsh',
        value: 'CY'
    },
    {
        label: 'xhosa',
        value: 'XH'
    }
];
exports.englishLanguages = ['EN'];
exports.frenchLanguages = ['FR'];
exports.spanishLanguages = ['ES', 'CA'];
exports.germanLanguages = ['DE'];
exports.italianLanguages = ['IT'];
exports.getLanguageLabel = (value) => { var _a; return ((_a = exports.languages.find((language) => language.value === value)) === null || _a === void 0 ? void 0 : _a.label) || ''; };
//# sourceMappingURL=languages.js.map