import Archiver from 'archiver';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AWS from 'aws-sdk';
import kebabCase from 'lodash/kebabCase';
import { Stream } from 'stream';

import { toShortId } from './packages/utils/src/helpers/id';

const s3 = new AWS.S3();

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

        const { application, documents } = JSON.parse(event.body);
        const { student, id } = application;

        const s3DownloadStreams = documents.map((document: string) => {
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
        const streamPassThrough = new Stream.PassThrough();
        const studentName = kebabCase(`${student.firstName}-${student.lastName}`);
        const storageKey = `${studentName}-${toShortId(id)}.zip`;

        const params = {
            Body: streamPassThrough,
            Bucket: 'applyfuture-students-content162403-dev',
            ContentType: 'application/zip',
            Key: `public/${storageKey}`,
            Metadata: {}
        };

        const s3Upload = s3.upload(params, (error: Error) => {
            if (error) {
                console.error(
                    `Got error creating stream to s3 ${error.name} ${error.message} ${error.stack}`
                );
                throw error;
            }
        });

        await new Promise((resolve, reject) => {
            const archive = Archiver('zip');
            archive.on('error', (error) => {
                throw new Error(
                    `${error.name} ${error.code} ${error.message} ${error.path} ${error.stack}`
                );
            });
            console.log('Starting upload');

            s3Upload.on(
                'close' as any,
                (resolve(null) as unknown) as (progress: AWS.S3.ManagedUpload.Progress) => void
            );
            s3Upload.on(
                'end' as any,
                (resolve(null) as unknown) as (progress: AWS.S3.ManagedUpload.Progress) => void
            );
            s3Upload.on(
                'error' as any,
                (reject(null) as unknown) as (progress: AWS.S3.ManagedUpload.Progress) => void
            );

            archive.pipe(streamPassThrough);
            s3DownloadStreams.forEach((downloadStream: any) => {
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
