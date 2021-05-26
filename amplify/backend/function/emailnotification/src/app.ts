/* eslint-disable sort-keys */
import AWS from 'aws-sdk';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import bodyParser from 'body-parser';
import express from 'express';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nMiddleware from 'i18next-http-middleware';

import { getEmailNotificationById } from './emails';
import { generateHtml, generateText } from './template';

AWS.config.update({ region: 'eu-west-1' });

const app = express();
app.use('/locales', express.static('locales'));
i18next.use(Backend).init({
    backend: {
        loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
    },
    defaultNS: 'application',
    fallbackLng: 'en',
    lng: 'en',
    ns: ['application'],
    preload: ['en', 'fr', 'zh']
});
app.use(i18nMiddleware.handle(i18next));

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

type Body = {
    id: string;
    language: string;
    recipients: string[];
    variables: {
        program: any;
        student: any;
        school: any;
    };
};

app.post('/email-notification', async (req, res, next) => {
    try {
        const { id, recipients, variables, language } = req.body as Body;
        const { changeLanguage, t } = req.i18n;

        if (language) {
            changeLanguage(language);
        }

        const email = getEmailNotificationById(id);
        const html = generateHtml({
            title: t(email.title),
            body: t(email.body),
            ctaLink: t(email.ctaLink),
            ctaText: t(email.ctaText),
            footer: t(email.footer)
        });
        const text = generateText({
            title: t(email.title),
            body: t(email.body),
            ctaLink: t(email.ctaLink),
            ctaText: t(email.ctaText),
            footer: t(email.footer)
        });

        const subject = t(email.subject);

        const params = {
            Destination: {
                ToAddresses: recipients
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: html
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: text
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject
                }
            },
            Source: 'ApplyFuture Application Service <application@applyfuture.com>'
        };

        await new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
        res.json({ body: req.body, success: 'post call succeed!', url: req.url });
    } catch (error) {
        return next(error);
    }
});

app.listen(3000, () => {
    console.log('App started');
});

export default app;
