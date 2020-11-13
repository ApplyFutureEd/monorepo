'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = void 0;
exports.handler = async (event) => {
    return {
        body: JSON.stringify(event.body),
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200
    };
};
//# sourceMappingURL=index.js.map
