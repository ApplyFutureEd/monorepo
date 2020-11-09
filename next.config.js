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
        webpack: (config, { isServer }) => {
            config.node = {
                fs: 'empty'
            };

            if (!isServer) {
                config.resolve.alias['@sentry/node'] = '@sentry/browser';
            }

            config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
            config.resolve.alias['@hooks'] = path.join(__dirname, 'src/hooks');
            config.resolve.alias['@middlewares'] = path.join(__dirname, 'src/middlewares');
            config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
            config.resolve.alias['@stores'] = path.join(__dirname, 'src/stores');
            config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
            config.resolve.alias['@typings'] = path.join(__dirname, 'src/typings');
            config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');

            return config;
        },

        poweredByHeader: false
    })
);
