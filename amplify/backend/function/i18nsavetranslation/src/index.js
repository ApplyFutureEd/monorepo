"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    try {
        if (!event.body) {
            return {
                body: JSON.stringify(event.body),
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                statusCode: 500
            };
        }
        // TODO: implement saving file
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 200
        };
    }
    catch (error) {
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 500
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=index.js.map