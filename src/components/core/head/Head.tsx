import { isBrowser } from '@utils/isBrowser';
import NextHead from 'next/head';
import { FC } from 'react';

export type HeadProps = {
    /**
     * Description that includes keywords relating to the content of your page.
     */
    description?: string;
    /**
     * Title of the overall HTML document.
     */
    title?: string;
};

const Head: FC<HeadProps> = (props) => {
    const defaultTitle = 'ApplyFuture';
    const defaultDescription =
        'ApplyFuture is an online school application platform, totally free for students who want to apply for European Higher Education Institutions.';

    const { description = defaultDescription, title = defaultTitle } = props;

    if (isBrowser()) {
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
            <meta key="robots" content="noindex,nofollow" name="robots" />

            <link as="style" href="/assets/fonts/inter/font.css" rel="preload" />
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

            <link href="/manifest.json" rel="manifest" />
            <link
                href="/assets/icons/favicon-16x16.png"
                rel="icon"
                sizes="16x16"
                type="image/png"
            />
            <link
                href="/assets/icons/favicon-32x32.png"
                rel="icon"
                sizes="32x32"
                type="image/png"
            />
            <link
                href="/assets/icons/icon-192x192.png"
                rel="icon"
                sizes="192x192"
                type="image/png"
            />
            <link
                href="/assets/icons/icon-256x256.png"
                rel="icon"
                sizes="256x256"
                type="image/png"
            />
            <link
                href="/assets/icons/icon-384x384.png"
                rel="icon"
                sizes="384x384"
                type="image/png"
            />
            <link
                href="/assets/icons/icon-512x512.png"
                rel="icon"
                sizes="512x512"
                type="image/png"
            />
            <link href="/assets/icons/apple-icon.png" rel="apple-touch-icon"></link>
            <meta content="#5850ec" name="theme-color" />
        </NextHead>
    );
};

export default Head;
