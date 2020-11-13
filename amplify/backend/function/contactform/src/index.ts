import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return {
        body: JSON.stringify(event.body),
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200
    };
};
