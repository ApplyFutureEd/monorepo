import { isBrowser } from '@utils/isBrowser';
import NextHead from 'next/head';
import React, { FC } from 'react';

export type HeadProps = {
    title?: string;
    description?: string;
    url?: string;
    ogImage?: string;
    favicon?: string;
};

const Head: FC<HeadProps> = (props) => {
    const defaultTitle = 'ApplyFuture';
    const defaultDescription =
        'ApplyFuture is an online school application platform, totally free for students who want to apply for European Higher Education Institutions.';
    const defaultOGURL = 'https://applyfuture.com';
    const defaultOGImage = '';
    const defaultFavicon = '';

    const {
        title = defaultTitle,
        description = defaultDescription,
        ogImage = defaultOGURL,
        url = defaultOGImage,
        favicon = defaultFavicon
    } = props;

    if (isBrowser()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const WebFontLoader = require('webfontloader');
        WebFontLoader.load({
            custom: {
                families: ['Inter var'],
                urls: ['/assets/fonts/inter/font.css']
            }
        });
    }

    const fonts = [
        {
            href: '/assets/fonts/inter/Inter-Bold.woff',
            type: 'font/woff'
        },
        {
            href: '/assets/fonts/inter/Inter-Bold.woff2',
            type: 'font/woff2'
        },
        {
            href: '/assets/fonts/inter/Inter-ExtraBold.woff',
            type: 'font/woff'
        },
        {
            href: '/assets/fonts/inter/Inter-ExtraBold.woff2',
            type: 'font/woff2'
        },
        {
            href: '/assets/fonts/inter/Inter-Medium.woff',
            type: 'font/woff'
        },
        {
            href: '/assets/fonts/inter/Inter-Medium.woff2',
            type: 'font/woff2'
        },
        {
            href: '/assets/fonts/inter/Inter-Regular.woff',
            type: 'font/woff'
        },
        {
            href: '/assets/fonts/inter/Inter-Regular.woff2',
            type: 'font/woff2'
        },
        {
            href: '/assets/fonts/inter/Inter-SemiBold.woff',
            type: 'font/woff'
        },
        {
            href: '/assets/fonts/inter/Inter-SemiBold.woff2',
            type: 'font/woff2'
        }
    ];

    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta content={description} name="description" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />

            <link href={favicon} rel="icon" />

            <link as="style" href={'/assets/fonts/inter/font.css'} rel="preload" />
            {fonts.map((font) => (
                <link
                    key={font.href}
                    as="font"
                    crossOrigin="anonymous"
                    href={font.href}
                    rel="preload"
                    type={font.type}
                />
            ))}

            <meta content={url} property="og:url" />
            <meta content={title} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={url} name="twitter:site" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={ogImage} name="twitter:image" />
            <meta content={ogImage} property="og:image" />
            <meta content="1200" property="og:image:width" />
            <meta content="630" property="og:image:height" />
        </NextHead>
    );
};

export default Head;
