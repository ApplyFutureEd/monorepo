"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageLevelLabel = exports.languageLevels = void 0;
exports.languageLevels = [
    { label: 'A1', value: 1 },
    { label: 'A2', value: 2 },
    { label: 'B1', value: 3 },
    { label: 'B2', value: 4 },
    { label: 'C1', value: 5 },
    { label: 'C2', value: 6 }
];
exports.getLanguageLevelLabel = (value) => { var _a; return ((_a = exports.languageLevels.find((languageLevel) => languageLevel.value === value)) === null || _a === void 0 ? void 0 : _a.label) || ''; };
//# sourceMappingURL=languagesLevels.js.map