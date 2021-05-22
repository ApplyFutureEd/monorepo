"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const archiver_1 = __importDefault(require("archiver"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const kebabCase_1 = __importDefault(require("lodash/kebabCase"));
const stream_1 = require("stream");
const id_1 = require("./packages/utils/src/helpers/id");
const s3 = new aws_sdk_1.default.S3();
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
        const { application, documents } = JSON.parse(event.body);
        const { student, id } = application;
        const s3DownloadStreams = documents.map((document) => {
            return {
                filename: document,
                stream: s3
                    .getObject({
                    Bucket: 'applyfuture-students-content162403-dev',
                    Key: 'public/' + document
                })
                    .createReadStream()
            };
        });
        const streamPassThrough = new stream_1.Stream.PassThrough();
        const studentName = kebabCase_1.default(`${student.firstName}-${student.lastName}`);
        const storageKey = `${studentName}-${id_1.toShortId(id)}.zip`;
        const params = {
            Body: streamPassThrough,
            Bucket: 'applyfuture-students-content162403-dev',
            ContentType: 'application/zip',
            Key: `public/${storageKey}`,
            Metadata: {}
        };
        const s3Upload = s3.upload(params, (error) => {
            if (error) {
                console.error(`Got error creating stream to s3 ${error.name} ${error.message} ${error.stack}`);
                throw error;
            }
        });
        await new Promise((resolve, reject) => {
            const archive = archiver_1.default('zip');
            archive.on('error', (error) => {
                throw new Error(`${error.name} ${error.code} ${error.message} ${error.path} ${error.stack}`);
            });
            console.log('Starting upload');
            s3Upload.on('close', resolve(null));
            s3Upload.on('end', resolve(null));
            s3Upload.on('error', reject(null));
            archive.pipe(streamPassThrough);
            s3DownloadStreams.forEach((downloadStream) => {
                console.log(downloadStream.filename);
                return archive.append(downloadStream.stream, {
                    name: downloadStream.filename
                });
            });
            archive.finalize();
        }).catch((error) => {
            throw new Error(`${error.code} ${error.message} ${error.data}`);
        });
        const archive = await s3Upload.promise();
        return {
            body: JSON.stringify({ archive }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json'
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