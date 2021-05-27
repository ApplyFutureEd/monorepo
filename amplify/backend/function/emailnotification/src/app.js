"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable sort-keys */
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const middleware_1 = __importDefault(require("aws-serverless-express/middleware"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const i18next_1 = __importDefault(require("i18next"));
const i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
const i18next_http_middleware_1 = __importDefault(require("i18next-http-middleware"));
const emails_1 = require("./emails");
const template_1 = require("./template");
aws_sdk_1.default.config.update({ region: 'eu-west-1' });
const app = express_1.default();
app.use('/locales', express_1.default.static('locales'));
i18next_1.default.use(i18next_fs_backend_1.default).init({
    backend: {
        loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
    },
    defaultNS: 'application',
    fallbackLng: 'en',
    lng: 'en',
    ns: ['application'],
    supportedLngs: ['en', 'fr', 'zh'],
    preload: ['en', 'fr', 'zh']
});
app.use(i18next_http_middleware_1.default.handle(i18next_1.default));
app.use(body_parser_1.default.json());
app.use(middleware_1.default.eventContext());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.post('/email-notification', async (req, res, next) => {
    try {
        const { ctaLink, id, recipients, variables, language } = req.body;
        const { i18n, t } = req;
        if (language) {
            await i18n.changeLanguage(language);
        }
        const email = emails_1.getEmailNotificationById(id);
        const html = template_1.generateHtml({
            title: t(email.title, Object.assign({}, variables)),
            body: t(email.body, Object.assign({}, variables)),
            ctaLink: ctaLink,
            ctaText: t(email.ctaText, Object.assign({}, variables)),
            footer: t(email.footer, Object.assign({}, variables))
        });
        const text = template_1.generateText({
            title: t(email.title, Object.assign({}, variables)),
            body: t(email.body, Object.assign({}, variables)),
            ctaLink: ctaLink,
            ctaText: t(email.ctaText, Object.assign({}, variables)),
            footer: t(email.footer, Object.assign({}, variables))
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
        await new aws_sdk_1.default.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
        res.json({ body: req.body, success: 'post call succeed!', url: req.url });
    }
    catch (error) {
        return next(error);
    }
});
app.listen(3000, () => {
    console.log('App started');
});
exports.default = app;
//# sourceMappingURL=app.js.map