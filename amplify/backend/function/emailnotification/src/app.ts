import AWS from 'aws-sdk';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import bodyParser from 'body-parser';
import express from 'express';
import i18next from 'i18next';
import i18nMiddleware from 'i18next-http-middleware';

AWS.config.update({ region: 'eu-west-1' });
i18next.use(i18nMiddleware.LanguageDetector).init({
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    defaultNS: 'application',
    fallbackLng: 'en',
    lng: 'en',
    ns: ['application'],
    preload: ['en', 'fr', 'zh']
});
const app = express();
app.use('/locales', express.static('locales'));
app.use(i18nMiddleware.handle(i18next));

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.post('/email-notification', async (req, res, next) => {
    try {
        const { email, program, student, school, language } = req.body;
        req.i18n.changeLanguage(language);

        const html = '<p>test</p>';
        const text = req.i18n.t('application:application-information');
        const subject = 'test';

        const params = {
            Destination: {
                ToAddresses: [email]
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
