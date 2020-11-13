import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'eu-west-1' });

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

        const { email, firstName, lastName, message } = JSON.parse(event.body);

        const contactMessageHtmlBody = `
        <!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <p>Email: ${email}</p>
                <p>First name: ${firstName}</p>
                <p>Last name: ${lastName}</p>
                <p>Message: ${message}</p>
            </body>
        </html>`;

        const contactMessageTextBody = `
        Email: ${email}
        First name: ${firstName}
        Last name: ${lastName}
        Message: ${message}`;

        const contactMessageParams = {
            Destination: {
                ToAddresses: ['hello@applyfuture.com']
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: contactMessageHtmlBody
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: contactMessageTextBody
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'ApplyFuture Contact Form'
                }
            },
            Source: 'ApplyFuture Contact Form <hello@applyfuture.com>'
        };

        const contactMessagePromise = new AWS.SES({ apiVersion: '2010-12-01' })
            .sendEmail(contactMessageParams)
            .promise();

        const confirmMessageHtmlBody = `
        <!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <p>Dear ${firstName}, thanks for reaching out!</p>
                <br/>
                <p>We’re thrilled to hear from you. Our inbox can’t wait to get your messages, so talk to us any time you like.</p>
                <br/>
                <p>Cheers!</p>
                <br/>
                <p>ApplyFuture</p>
            </body>
        </html>`;

        const confirmMessageTextBody = `
        Dear ${firstName}, thanks for reaching out!

        We’re thrilled to hear from you. Our inbox can’t wait to get your messages, so talk to us any time you like.

        Cheers!

        ApplyFuture`;

        const confirmMessageParams = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: confirmMessageHtmlBody
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: confirmMessageTextBody
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: `Dear ${firstName}, thanks for reaching out!`
                }
            },
            Source: `ApplyFuture <hello@applyfuture.com>`
        };

        const confirmMessagePromise = new AWS.SES({ apiVersion: '2010-12-01' })
            .sendEmail(confirmMessageParams)
            .promise();

        await contactMessagePromise;
        await confirmMessagePromise;
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 200
        };
    } catch (error) {
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 500
        };
    }
};
