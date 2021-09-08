import { S3 } from '@aws-sdk/client-s3';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const s3 = new S3({});

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

        const locales = ['en', 'fr', 'zh'];

        const {
            chineseTranslation,
            englishTranslation,
            frenchTranslation,
            namespace,
            translationKey
        } = JSON.parse(event.body);

        console.log(event.body);

        const streamToString = (stream: any) =>
            new Promise((resolve, reject) => {
                const chunks: any = [];
                stream.on('data', (chunk: any) => chunks.push(chunk));
                stream.on('error', reject);
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            });

        // 1. retrieve JSON files according to the namespace
        const fetchNamespace = async (namespace: string) => {
            const promises: Array<Promise<any>> = [];

            locales.forEach((locale) => {
                promises.push(
                    s3
                        .getObject({
                            Bucket: 'applyfuture-students-content162403-dev',
                            Key: `public/i18n/${locale}/${namespace}.json`
                        })
                        .then(async (data: any) => ({ [locale]: await streamToString(data.Body) }))
                );
            });

            return Promise.all(promises);
        };

        const files = await fetchNamespace(namespace);

        console.log(files);
        console.log(files[0].en);

        // 2. Update the JSON files with the translation received
        // a. read file content
        // b. translation key exist
        // c. translation does not exist

        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
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
