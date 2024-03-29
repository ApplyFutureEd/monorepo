'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = void 0;
const aws_sdk_1 = __importDefault(require('aws-sdk'));
aws_sdk_1.default.config.update({ region: 'eu-west-1' });
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
        const {
            additionalComments,
            averageServiceFee,
            beginRecruitingDate,
            belongTo,
            city,
            compagnyName,
            confirmation,
            country,
            email,
            estimatedStudents,
            facebook,
            firstName,
            howManyStudents,
            instagram,
            institutionsRepresenting,
            lastName,
            linkedIn,
            mainSourceOfStudents,
            marketingMethods,
            phone,
            postalCode,
            recruitFrom,
            ref,
            referenceBusinessEmail,
            referenceInstitution,
            referenceName,
            referencePhone,
            referenceWebsite,
            servicesProvided,
            skypeId,
            stateOrProvince,
            streetAddress,
            twitter,
            website,
            whatsAppId
        } = JSON.parse(event.body);
        const contactMessageHtmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            <h1>Campany Info</h1>
            <p>Email: ${email}</p>
            <p>Company Name: ${compagnyName}</p>
            <p>Website: ${website}</p>
            <p>Facebook: ${facebook}</p>
            <p>Instagram: ${instagram}</p>
            <p>Twitter: ${twitter}</p>
            <p>LinkedIn: ${linkedIn}</p>

            <h1>Contact Info</h1>
            <p>Main Source of Students: ${mainSourceOfStudents}</p>
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Street Address: ${streetAddress}</p>
            <p>City: ${city}</p>
            <p>State/Province: ${stateOrProvince}</p>
            <p>Country: ${country}</p>
            <p>Postal Code: ${postalCode}</p>
            <p>Phone: ${phone}</p>
            <p>Skype ID: ${skypeId}</p>
            <p>WhatsApp ID: ${whatsAppId}</p>
            <p>Has anyone from ApplyFuture helped or referred you?: ${ref}</p>

            <h1>Recruitment Details</h1>
            <p>When did you begin recruiting students?: ${beginRecruitingDate}</p>
            <p>What services do you provide to your clients?: ${servicesProvided}</p>
            <p>What institutions are you representing?: ${institutionsRepresenting}</p>
            <p>HWhat educational associations or groups does your organization belong to?: ${belongTo}</p>
            <p>Where do you recruit from?: ${recruitFrom}</p>
            <p>Approximately how many students do you send abroad per year?: ${howManyStudents}</p>
            <p>What type of marketing methods do you undertake?: ${marketingMethods}</p>
            <p>Average Service Fee: ${averageServiceFee}</p>
            <p>Please provide an estimate of the number of students you will refer to ApplyFuture?: ${estimatedStudents}</p>
            <p>Additional Comments: ${additionalComments}</p>
            <p>Reference Name: ${referenceName}</p>
            <p>Reference Institution Name: ${referenceInstitution}</p>
            <p>Reference Business Email: ${referenceBusinessEmail}</p>
            <p>Reference Phone: ${referencePhone}</p>
            <p>Reference Website: ${referenceWebsite}</p>
        </body>
        </html>`;
        const contactMessageTextBody = `
        Campany Info
        Email: ${email}
        Company Name: ${compagnyName}
        Website: ${website}
        Facebook: ${facebook}
        Instagram: ${instagram}
        Twitter: ${twitter}
        LinkedIn: ${linkedIn}
      
        Contact Info
        Main Source of Students: ${mainSourceOfStudents}
        First Name: ${firstName}
        Last Name: ${lastName}
        Street Address: ${streetAddress}
        City: ${city}
        State/Province: ${stateOrProvince}
        Country: ${country}
        Postal Code: ${postalCode}
        Phone: ${phone}
        Skype ID: ${skypeId}
        WhatsApp ID: ${whatsAppId}
        Has anyone from ApplyFuture helped or referred you?: ${ref}
      
        Recruitment Details
        When did you begin recruiting students?: ${beginRecruitingDate}
        What services do you provide to your clients?: ${servicesProvided}
        What institutions are you representing?: ${institutionsRepresenting}
        HWhat educational associations or groups does your organization belong to?: ${belongTo}
        Where do you recruit from?: ${recruitFrom}
        Approximately how many students do you send abroad per year?: ${howManyStudents}
        What type of marketing methods do you undertake?: ${marketingMethods}
        Average Service Fee: ${averageServiceFee}
        Please provide an estimate of the number of students you will refer to ApplyFuture?: ${estimatedStudents}
        Additional Comments: ${additionalComments}
        Reference Name: ${referenceName}
        Reference Institution Name: ${referenceInstitution}
        Reference Business Email: ${referenceBusinessEmail}
        Reference Phone: ${referencePhone}
        Reference Website: ${referenceWebsite}`;
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
                    Data: 'ApplyFuture Recruiters Contact Form'
                }
            },
            Source: 'ApplyFuture Recruiters Contact Form <hello@applyfuture.com>'
        };
        const contactMessagePromise = new aws_sdk_1.default.SES({ apiVersion: '2010-12-01' })
            .sendEmail(contactMessageParams)
            .promise();
        const confirmMessageHtmlBody = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Account Welcome</title>
            <style type="text/css">
                a {
                text-decoration: none;
                outline: none;
                }
                @media (max-width: 449px) {
                .o_col-full {
                    max-width: 100% !important;
                }
                .o_col-half {
                    max-width: 50% !important;
                }
                .o_hide-lg {
                    display: inline-block !important;
                    font-size: inherit !important;
                    max-height: none !important;
                    line-height: inherit !important;
                    overflow: visible !important;
                    width: auto !important;
                    visibility: visible !important;
                }
                .o_hide-xs,
                .o_hide-xs.o_col_i {
                    display: none !important;
                    font-size: 0 !important;
                    max-height: 0 !important;
                    width: 0 !important;
                    line-height: 0 !important;
                    overflow: hidden !important;
                    visibility: hidden !important;
                    height: 0 !important;
                }
                .o_xs-center {
                    text-align: center !important;
                }
                .o_xs-left {
                    text-align: left !important;
                }
                .o_xs-right {
                    text-align: left !important;
                }
                table.o_xs-left {
                    margin-left: 0 !important;
                    margin-right: auto !important;
                    float: none !important;
                }
                table.o_xs-right {
                    margin-left: auto !important;
                    margin-right: 0 !important;
                    float: none !important;
                }
                table.o_xs-center {
                    margin-left: auto !important;
                    margin-right: auto !important;
                    float: none !important;
                }
                h1.o_heading {
                    font-size: 32px !important;
                    line-height: 41px !important;
                }
                h2.o_heading {
                    font-size: 26px !important;
                    line-height: 37px !important;
                }
                h3.o_heading {
                    font-size: 20px !important;
                    line-height: 30px !important;
                }
                .o_xs-py-md {
                    padding-top: 24px !important;
                    padding-bottom: 24px !important;
                }
                .o_xs-pt-xs {
                    padding-top: 8px !important;
                }
                .o_xs-pb-xs {
                    padding-bottom: 8px !important;
                }
                }
                @media screen {
                @font-face {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 400;
                    src: local("Roboto"), local("Roboto-Regular"),
                    url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2)
                        format("woff2");
                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
                    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                @font-face {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 400;
                    src: local("Roboto"), local("Roboto-Regular"),
                    url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2)
                        format("woff2");
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
                    U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
                    U+2212, U+2215, U+FEFF, U+FFFD;
                }
                @font-face {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 700;
                    src: local("Roboto Bold"), local("Roboto-Bold"),
                    url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2)
                        format("woff2");
                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
                    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                @font-face {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 700;
                    src: local("Roboto Bold"), local("Roboto-Bold"),
                    url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2)
                        format("woff2");
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
                    U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
                    U+2212, U+2215, U+FEFF, U+FFFD;
                }
                .o_sans,
                .o_heading {
                    font-family: "Roboto", sans-serif !important;
                }
                .o_heading,
                strong,
                b {
                    font-weight: 700 !important;
                }
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
                }
            </style>
            <!--[if mso]>
                <style>
                table {
                    border-collapse: collapse;
                }
                .o_col {
                    float: left;
                }
                </style>
                <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
                </xml>
            <![endif]-->
            </head>
            <body
            class="o_body o_bg-light"
            style="
                width: 100%;
                margin: 0px;
                padding: 0px;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                background-color: #white;
            "
            >
            <!-- preview-text -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_hide"
                    align="center"
                    style="
                        display: none;
                        font-size: 0;
                        max-height: 0;
                        width: 0;
                        line-height: 0;
                        overflow: hidden;
                        mso-hide: all;
                        visibility: hidden;
                    "
                    >
                    Email Summary (Hidden)
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- header-white -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_bg-light o_px-xs o_pt-lg o_xs-pt-xs"
                    align="center"
                    style="
                        background-color: white;
                        padding-left: 8px;
                        padding-right: 8px;
                        padding-top: 32px;
                    "
                    >
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px; margin: 0 auto;"
                    >
                        <tbody>
                        <tr>
                            <td
                            class="o_bg-white o_px o_py-md o_br-t o_sans o_text"
                            align="center"
                            style="
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                font-size: 16px;
                                line-height: 24px;
                                background-color: #ffffff;
                                border-radius: 4px 4px 0px 0px;
                                padding-left: 16px;
                                padding-right: 16px;
                                padding-top: 24px;
                                padding-bottom: 24px;
                            "
                            >
                                <img src="https://www.applyfuture.com/logo.jpg" alt="ApplyFuture Logo" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- hero-white-button -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_bg-light o_px-xs"
                    align="center"
                    style="
                        background-color: #white;
                        padding-left: 8px;
                        padding-right: 8px;
                    "
                    >
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px; margin: 0 auto;"
                    >
                        <tbody>
                        <tr>
                            <td
                            class="o_bg-white o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light"
                            align="center"
                            style="
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                font-size: 19px;
                                line-height: 28px;
                                background-color: #ffffff;
                                color: #82899a;
                                padding-left: 24px;
                                padding-right: 24px;
                                padding-top: 64px;
                                padding-bottom: 64px;
                            "
                            >
                            <h2
                                class="o_heading o_text-dark o_mb-xxs"
                                style="
                                font-family: Helvetica, Arial, sans-serif;
                                font-weight: bold;
                                margin-top: 0px;
                                margin-bottom: 4px;
                                color: #242b3d;
                                font-size: 30px;
                                line-height: 39px;
                                "
                            >
                                Hello ${firstName}!
                            </h2>
                            <p
                                class="o_mb-md"
                                style="margin-top: 0px; margin-bottom: 24px;"
                            >
                                Welcome to ApplyFuture!<br />
                                I'm so excited to have you join us.
                            </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- content -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_bg-light o_px-xs"
                    align="center"
                    style="
                        background-color: #white;
                        padding-left: 8px;
                        padding-right: 8px;
                    "
                    >
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px; margin: 0 auto;"
                    >
                        <tbody>
                        <tr>
                            <td
                            class="o_bg-white o_px-md o_py o_sans o_text o_text-secondary"
                            align="justify"
                            style="
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                font-size: 16px;
                                line-height: 24px;
                                background-color: #ffffff;
                                color: #424651;
                                padding-left: 24px;
                                padding-right: 24px;
                                padding-top: 16px;
                                padding-bottom: 16px;
                            "
                            >
                            <p style="margin-top: 0px; margin-bottom: 0px;">
                                We're feeling pretty lucky that you chose us, and I just
                                want to say thank you on behalf of our whole company.
                            </p>
                            <p>
                                I will take time to study more about your company and will
                                contact you as soon as I can. <p>If you have any opportunity
                                to come to Paris, please let me know, we can have a coffee
                                together.</p>
                            </p>
                            <p>
                            Cheers,<br/>
                            Ying ZHANG<br/>
                            Founder of ApplyFuture</p>
                            </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- spacer-lg -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_bg-light o_px-xs"
                    align="center"
                    style="
                        background-color: #white;
                        padding-left: 8px;
                        padding-right: 8px;
                    "
                    >
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px; margin: 0 auto;"
                    >
                        <tbody>
                        <tr>
                            <td
                            class="o_bg-white"
                            style="
                                font-size: 48px;
                                line-height: 48px;
                                height: 48px;
                                background-color: #ffffff;
                            "
                            >
                            &nbsp;
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- footer-light-2cols -->
            <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
            >
                <tbody>
                <tr>
                    <td
                    class="o_bg-light o_px-xs o_pb-lg o_xs-pb-xs"
                    align="center"
                    style="
                        background-color: #white;
                        padding-left: 8px;
                        padding-right: 8px;
                        padding-bottom: 32px;
                    "
                    >
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px; margin: 0 auto;"
                    >
                        <tbody>
                        <tr>
                            <td
                            class="o_bg-white o_br-b o_sans"
                            style="
                                font-size: 8px;
                                line-height: 8px;
                                height: 8px;
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                background-color: #ffffff;
                                border-radius: 0px 0px 4px 4px;
                            "
                            >
                            &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td
                            class="o_px-md o_py-lg o_sans o_text-xs o_text-light"
                            align="center"
                            style="
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                font-size: 14px;
                                line-height: 21px;
                                color: #82899a;
                                padding-left: 24px;
                                padding-right: 24px;
                                padding-top: 32px;
                                padding-bottom: 32px;
                            "
                            >
                            <p
                                class="o_mb-xs"
                                style="margin-top: 0px; margin-bottom: 8px;"
                            >
                                © 2020 ApplyFuture.com
                            </p>
                            <p
                                class="o_mb-xs"
                                style="margin-top: 0px; margin-bottom: 8px;"
                            >87 Rue de Rome, 75017 Paris, France
                            </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                    <div
                        class="o_hide-xs"
                        style="font-size: 64px; line-height: 64px; height: 64px;"
                    >
                        &nbsp;
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </body>
        </html>`;
        const confirmMessageTextBody = `
        Hello ${firstName}!

        Welcome to ApplyFuture! I'm so excited to have you join us. We're feeling pretty lucky that you chose us, and I just want to say thank you on behalf of our whole company.
    
        I will take time to study more about your company and will contact you as soon as I can.
    
        If you have any opportunity to come to Paris, please let me know, we can have a coffee together.
    
        Cheers,
    
        Ying ZHANG
        CEO of ApplyFuture`;
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
        const confirmMessagePromise = new aws_sdk_1.default.SES({ apiVersion: '2010-12-01' })
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
//# sourceMappingURL=index.js.map
