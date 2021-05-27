type Options = {
    title: string;
    body: string;
    ctaLink: string;
    ctaText: string;
    footer: string;
};

export const generateHtml = (options: Options): string => {
    const { title, body, ctaLink, ctaText, footer } = options;
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
    <body class="o_body o_bg-light" style="
      width: 100%;
      margin: 0px;
      padding: 0px;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background-color: white;
      white-space: pre-line;
    ">
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
                    <td class="o_hide" align="center" style="
              display: none;
              font-size: 0;
              max-height: 0;
              width: 0;
              line-height: 0;
              overflow: hidden;
              mso-hide: all;
              visibility: hidden;
            ">
                        ${title}
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
                    <td class="o_bg-light o_px-xs o_pt-lg o_xs-pt-xs" align="center" style="
              background-color: white;
              padding-left: 8px;
              padding-right: 8px;
              padding-top: 32px;
            ">
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
                                    <td class="o_bg-white o_px o_py-md o_br-t o_sans o_text" align="center" style="
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
                    ">
                                        <img src="https://www.applyfuture.com/logo.jpg" alt="Logo ApplyFuture">
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
                    <td class="o_bg-light o_px-xs" align="center" style="
              background-color: white;
              padding-left: 8px;
              padding-right: 8px;
            ">
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
                                    <td class="o_bg-white o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light" align="center" style="
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
                    ">
                                        <h2 class="o_heading o_text-dark o_mb-xxs" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-weight: bold;
                        margin-top: 0px;
                        margin-bottom: 4px;
                        color: #242b3d;
                        font-size: 30px;
                        line-height: 39px;
                      ">
                                            ${title}
                                        </h2>
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
                    <td class="o_bg-light o_px-xs" align="center" style="
              background-color: white;
              padding-left: 8px;
              padding-right: 8px;
            ">
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
                                    <td class="o_bg-white o_px-md o_py o_sans o_text o_text-secondary" align="justify" style="
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
                    ">
                                        <p style="margin-top: 0px; margin-bottom: 0px;">
                              ${body}
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
                <td class="o_bg-light o_px-xs" align="center" style="background-color: white;padding-left: 8px;padding-right: 8px;">
                    <!--[if mso]><table width="432" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
                    <table
                        class="o_block-xs"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        style="max-width: 432px;margin: 0 auto;"
                    >
                        <tbody>
                            <tr>
                                <td class="o_bg-white o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 19px;line-height: 28px;background-color: #ffffff;color: #82899a;padding-left: 24px;padding-right: 24px;padding-top: 64px;padding-bottom: 64px;">
                                    <table
                                        align="center"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        role="presentation"
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    width="300"
                                                    class="o_btn o_bg-primary o_br o_heading o_text"
                                                    align="center"
                                                    style="font-family: Helvetica, Arial, sans-serif;font-weight: bold;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;mso-padding-alt: 12px 24px;background-color: #5850ec;border-radius: 4px;"
                                                >
                                                    <a class="o_text-white" href="${ctaLink}" style="text-decoration: none;outline: none;color: #ffffff;display: block;padding: 12px 24px;mso-text-raise: 3px;">${ctaText}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
    <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        role="presentation"
    >
        <tbody>
            <tr>
                <td class="o_bg-light o_px-xs" align="center" style="
            background-color: white;
            padding-left: 8px;
            padding-right: 8px;
          ">
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
                                <td class="o_bg-white o_px-md o_py o_sans o_text o_text-secondary" align="justify" style="
                    font-family: Helvetica, Arial, sans-serif;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    font-size: 16px;
                    line-height: 24px;
                    background-color: #ffffff;
                    color: #424651;
                    padding-left: 24px;
                    padding-right: 24px;
                    padding-top: 0px;
                    padding-bottom: 16px;
                  ">
                                    <p>
                                      ${footer}
                                    </p>
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
            <td class="o_bg-light o_px-xs o_pb-lg o_xs-pb-xs" align="center" style="
              background-color: white;
              padding-left: 8px;
              padding-right: 8px;
              padding-bottom: 32px;
            ">
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
                            <td class="o_bg-white o_br-b o_sans" style="
                      font-size: 8px;
                      line-height: 8px;
                      height: 8px;
                      font-family: Helvetica, Arial, sans-serif;
                      margin-top: 0px;
                      margin-bottom: 0px;
                      background-color: #ffffff;
                      border-radius: 0px 0px 4px 4px;
                    ">
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td class="o_px-md o_py-lg o_sans o_text-xs o_text-light" align="center" style="
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
                    ">
                                <p class="o_mb-xs" style="margin-top: 0px; margin-bottom: 8px;">
                                    © 2020 ApplyFuture.com
                                </p>
                                <p class="o_mb-xs" style="margin-top: 0px; margin-bottom: 8px;">
                                    87 Rue de Rome, 75017 Paris, France
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--[if mso]></td></tr></table><![endif]-->
                <div class="o_hide-xs" style="font-size: 64px; line-height: 64px; height: 64px;">
                    &nbsp;
                </div>
            </td>
        </tr>
    </tbody>
</table>
</body>
</html>
`;
};

export const generateText = (options: Options): string => {
    const { title, body, ctaLink, footer } = options;
    return `
    ${title}\n\n
    ${body}\n\n
    ${ctaLink}\n\n
    ${footer}
    `;
};
