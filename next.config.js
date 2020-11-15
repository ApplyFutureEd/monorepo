/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');
const withPWA = require('next-pwa');
const nextSourceMaps = require('@zeit/next-source-maps');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const withSourceMaps = nextSourceMaps();
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

const {
    NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    NODE_ENV,
    VERCEL_GITHUB_COMMIT_SHA,
    VERCEL_GITLAB_COMMIT_SHA,
    VERCEL_BITBUCKET_COMMIT_SHA
} = process.env;

const COMMIT_SHA =
    VERCEL_GITHUB_COMMIT_SHA || VERCEL_GITLAB_COMMIT_SHA || VERCEL_BITBUCKET_COMMIT_SHA;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = '';

module.exports = withBundleAnalyzer(
    withSourceMaps(
        withPWA({
            basePath,
            env: {
                // Make the COMMIT_SHA available to the client so that Sentry events can be
                // marked for the release the belong to. It may be undefined if running
                // outside of Vercel
                NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA
            },
            poweredByHeader: false,
            pwa: {
                dest: 'public'
            },
            webpack: (config, options) => {
                config.node = {
                    fs: 'empty'
                };

                if (!options.isServer) {
                    config.resolve.alias['@sentry/node'] = '@sentry/browser';
                }
                config.plugins.push(
                    new options.webpack.DefinePlugin({
                        'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString())
                    })
                );
                if (
                    SENTRY_DSN &&
                    SENTRY_ORG &&
                    SENTRY_PROJECT &&
                    SENTRY_AUTH_TOKEN &&
                    COMMIT_SHA &&
                    NODE_ENV === 'production'
                ) {
                    config.plugins.push(
                        new SentryWebpackPlugin({
                            ignore: ['node_modules'],
                            include: '.next',
                            release: COMMIT_SHA,
                            stripPrefix: ['webpack://_N_E/'],
                            urlPrefix: `~${basePath}/_next`
                        })
                    );
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
