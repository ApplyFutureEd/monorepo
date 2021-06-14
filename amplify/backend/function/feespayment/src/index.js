"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const stripe = require('stripe')('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');
exports.handler = async (event) => {
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
        const { payment } = JSON.parse(event.body);
        const stripeToken = payment.stripeToken;
        const stripeResponse = await stripe.charges.create({
            amount: payment.amount,
            currency: payment.currency,
            description: payment.description,
            metadata: { applicationId: payment.metadata.applicationId },
            source: stripeToken
        });
        return {
            body: JSON.stringify(stripeResponse),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/pdf'
            },
            statusCode: 200
        };
    }
    catch (error) {
        console.log(error);
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 500
        };
    }
};
//# sourceMappingURL=index.js.map