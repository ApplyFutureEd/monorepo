"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3 = new client_s3_1.S3({});
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
        const locales = ['en', 'fr', 'zh'];
        const { chineseTranslation, englishTranslation, frenchTranslation, namespace, translationKey } = JSON.parse(event.body);
        console.log(event.body);
        const streamToString = (stream) => new Promise((resolve, reject) => {
            const chunks = [];
            stream.on('data', (chunk) => chunks.push(chunk));
            stream.on('error', reject);
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
        // 1. retrieve JSON files according to the namespace
        const fetchNamespaceFiles = async (namespace) => {
            const promises = [];
            locales.forEach((locale) => {
                promises.push(s3
                    .getObject({
                    Bucket: 'applyfuture-students-content162403-dev',
                    Key: `public/i18n/${locale}/${namespace}.json`
                })
                    .then(async (data) => ({ [locale]: await streamToString(data.Body) })));
            });
            return Promise.all(promises);
        };
        const files = await fetchNamespaceFiles(namespace);
        const formattedFiles = files.reduce((accumulator, value) => {
            const key = Object.keys(value)[0];
            return Object.assign(accumulator, { [key]: value[key] });
        }, {});
        // 2. Update the JSON files with the translation received
        const updateNamespaceFiles = async (namespace, translationKey, values) => {
            const promises = [];
            locales.forEach((locale) => {
                const updatedFile = Object.assign(Object.assign({}, JSON.parse(formattedFiles[locale])), { [translationKey]: values[locale] });
                const sortedUpdatedFile = Object.keys(updatedFile)
                    .sort()
                    .reduce((accumulator, key) => (Object.assign(Object.assign({}, accumulator), { [key]: updatedFile[key] })), {});
                promises.push(s3.putObject({
                    Body: JSON.stringify(sortedUpdatedFile),
                    Bucket: 'applyfuture-students-content162403-dev',
                    ContentType: 'application/json',
                    Key: `public/i18n/${locale}/${namespace}.json`
                }));
            });
            return Promise.all(promises);
        };
        await updateNamespaceFiles(namespace, translationKey, {
            en: englishTranslation,
            fr: frenchTranslation,
            zh: chineseTranslation
        });
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
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
exports.handler = handler;
//# sourceMappingURL=index.js.map