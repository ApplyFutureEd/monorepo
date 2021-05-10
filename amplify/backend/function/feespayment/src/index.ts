import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const stripe = require('stripe')(
    'sk_test_51GtwStKTwG5G2eRQ2zeFPemYK2bAHNt9YFt9qr8X8045ZukVrmpHPJNhgw5W2SF9WkwWxUMlyfhJZyLWb1WCbSIB00NcEehv19'
);

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
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
    } catch (error) {
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
