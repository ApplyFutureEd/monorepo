import { isBrowser } from '@utils/isBrowser';
import NextHead from 'next/head';
import React, { FC } from 'react';

export type HeadProps = {
    title?: string;
    description?: string;
    url?: string;
    ogImage?: string;
    favicon?: string;
    additionalContent?: React.ReactElement;
};

const Head: FC<HeadProps> = (props) => {
    const defaultDescription =
        'ApplyFuture is an online school application platform, totally free for students who want to apply for European Higher Education Institutions.';
    const defaultOGURL = 'https://applyfuture.com';
    const defaultOGImage = '';
    const defaultFavicon = '';

    const {
        title = '',
        description = defaultDescription,
        ogImage = defaultOGURL,
        url = defaultOGImage,
        favicon = defaultFavicon,
        additionalContent
    } = props;

    if (isBrowser()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const WebFontLoader = require('webfontloader');
        WebFontLoader.load({
            custom: {
                families: ['Inter var'],
                urls: ['/static/fonts/inter/font.css']
            }
        });
    }

    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href={favicon} />

            <link rel="preload" as="style" href={'/static/fonts/inter/font.css'} />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Bold.woff'}
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Bold.woff2'}
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-ExtraBold.woff'}
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-ExtraBold.woff2'}
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Medium.woff'}
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Medium.woff2'}
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Regular.woff'}
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-Regular.woff2'}
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-SemiBold.woff'}
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={'/static/fonts/inter/Inter-SemiBold.woff2'}
                type="font/woff2"
                crossOrigin="anonymous"
            />

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:site" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogImage} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {additionalContent && additionalContent}
        </NextHead>
    );
};

export default Head;
