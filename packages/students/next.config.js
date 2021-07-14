/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withPWA = require('next-pwa');
const { locales, defaultLocale } = require('./i18n');

const COMMIT_SHA = process.env.VERCEL_GITHUB_COMMIT_SHA;
const basePath = '';

const withTM = require('next-transpile-modules')([
    '@applyfuture/graphql',
    '@applyfuture/ui',
    '@applyfuture/utils',
    '@applyfuture/models'
]);

module.exports = withTM(
    withPWA({
        basePath,
        env: {
            ASSETS_CDN_URL: 'https://ik.imagekit.io/applyfuture',
            NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA
        },
        i18n: { defaultLocale, localeDetection: true, locales },
        images: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            domains: ['ik.imagekit.io'],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            loader: 'default',
            path: '/_next/image'
        },
        poweredByHeader: false,
        pwa: {
            dest: 'public',
            disable: process.env.NODE_ENV === 'development'
        },
        webpack: (config, options) => {
            config.node = {
                fs: 'empty'
            };

            config.plugins.push(
                new options.webpack.DefinePlugin({
                    'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString())
                })
            );

            config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
            config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages_');
            config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');

            return config;
        }
    })
);
