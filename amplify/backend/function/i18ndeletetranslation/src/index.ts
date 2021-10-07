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

        const { namespace, translationKey } = JSON.parse(event.body);

        const streamToString = (stream: any) =>
            new Promise((resolve, reject) => {
                const chunks: any = [];
                stream.on('data', (chunk: any) => chunks.push(chunk));
                stream.on('error', reject);
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            });

        const fetchNamespaceFiles = async (namespace: string) => {
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

        const files = await fetchNamespaceFiles(namespace);

        const formattedFiles = files.reduce((accumulator, value: { [locale: string]: string }) => {
            const key = Object.keys(value)[0];
            return Object.assign(accumulator, { [key]: value[key] });
        }, {});

        const deleteTranslationKeyAndUpdateNamespaceFiles = async (
            namespace: string,
            translationKey: string
        ) => {
            const promises: Array<Promise<any>> = [];

            locales.forEach((locale) => {
                const updatedFile = {
                    ...JSON.parse(formattedFiles[locale])
                };

                delete updatedFile[translationKey];

                promises.push(
                    s3.putObject({
                        Body: JSON.stringify(updatedFile),
                        Bucket: 'applyfuture-students-content162403-dev',
                        ContentType: 'application/json',
                        Key: `public/i18n/${locale}/${namespace}.json`
                    })
                );
            });

            return Promise.all(promises);
        };

        await deleteTranslationKeyAndUpdateNamespaceFiles(namespace, translationKey);

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
