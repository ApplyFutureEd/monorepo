"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3 = new client_s3_1.S3({}); // instance de s3
const handler = async (event) => {
    // type de la valeur de resolve
    try {
        if (!event.body) {
            // if early return : avons nous tout ce qu'il faut ?
            return {
                body: JSON.stringify(event.body),
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                statusCode: 500
            };
        }
        // identifie une trad à supprimer
        // identifier de quel namespace il s'agit & de quelle clé il s'agit
        // récupérer les 3 fichiers fr - zh- en - du namespace
        const locales = ['en', 'fr', 'zh'];
        const { namespace, translationKey } = JSON.parse(event.body);
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
            // transformation de la structure
            const key = Object.keys(value)[0]; // transformer les valeurs
            return Object.assign(accumulator, { [key]: value[key] }); // shape
        }, {});
        // 2. delete one of the key and then update the JSON file
        const deleteTranslationKeyAndUpdateNamespaceFiles = async (namespace, translationKey) => {
            const promises = [];
            locales.forEach((locale) => {
                const updatedFile = Object.assign({}, JSON.parse(formattedFiles[locale]));
                delete updatedFile[translationKey];
                promises.push(s3.putObject({
                    Body: JSON.stringify(updatedFile),
                    Bucket: 'applyfuture-students-content162403-dev',
                    ContentType: 'application/json',
                    Key: `public/i18n/${locale}/${namespace}.json`
                }));
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