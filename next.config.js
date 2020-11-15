/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');
const withPWA = require('next-pwa');
const nextSourceMaps = require('@zeit/next-source-maps');

const withSourceMaps = nextSourceMaps();
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

module.exports = withBundleAnalyzer(
    withSourceMaps(
        withPWA({
            poweredByHeader: false,
            pwa: {
                dest: 'public'
            },
            webpack: (config, { isServer }) => {
                config.node = {
                    fs: 'empty'
                };

                if (!isServer) {
                    config.resolve.alias['@sentry/node'] = '@sentry/browser';
                }

                config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
                config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
                config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
                config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');

                return config;
            }
        })
    )
);
