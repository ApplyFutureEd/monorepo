/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');
const nextSourceMaps = require('@zeit/next-source-maps');

const withSourceMaps = nextSourceMaps();
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

module.exports = withBundleAnalyzer(
    withSourceMaps({
        images: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            domains: [],
            path: '/_next/image',
            loader: 'default'
        },

        webpack: (config, { isServer }) => {
            config.node = {
                fs: 'empty'
            };

            if (!isServer) {
                config.resolve.alias['@sentry/node'] = '@sentry/browser';
            }

            config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
            config.resolve.alias['@hooks'] = path.join(__dirname, 'src/hooks');
            config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
            config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
            config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');

            return config;
        },

        poweredByHeader: false
    })
);
