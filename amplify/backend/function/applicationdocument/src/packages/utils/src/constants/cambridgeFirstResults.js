"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCambridgeFirstLabel = exports.cambridgeFirstResults = void 0;
exports.cambridgeFirstResults = [
    { label: 'A', value: 6 },
    { label: 'B', value: 5 },
    { label: 'C', value: 4 },
    { label: 'D', value: 3 },
    { label: 'E', value: 2 },
    { label: 'U', value: 1 }
];
exports.getCambridgeFirstLabel = (value) => { var _a; return ((_a = exports.cambridgeFirstResults.find((result) => result.value === value)) === null || _a === void 0 ? void 0 : _a.label) || ''; };
//# sourceMappingURL=cambridgeFirstResults.js.map