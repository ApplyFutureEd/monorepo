"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCambridgeAdvancedLabel = exports.cambridgeAdvancedResults = void 0;
exports.cambridgeAdvancedResults = [
    { label: 'A', value: 3 },
    { label: 'B', value: 2 },
    { label: 'C', value: 1 }
];
exports.getCambridgeAdvancedLabel = (value) => { var _a; return ((_a = exports.cambridgeAdvancedResults.find((result) => result.value === value)) === null || _a === void 0 ? void 0 : _a.label) || ''; };
//# sourceMappingURL=cambridgeAdvancedResults.js.map