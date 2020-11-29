const path = require('path');

module.exports = {
    webpackFinal: async (baseConfig, options) => {
        const { module = {} } = baseConfig;

        const newConfig = {
            ...baseConfig,
            module: {
                ...module,
                rules: [...(module.rules || [])]
            }
        };

        newConfig.module.rules.push({
            test: /\.(ts|tsx)$/,
            include: [path.resolve(__dirname, '../src/components')],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['next/babel'],
                        plugins: ['react-docgen']
                    }
                }
            ]
        });
        newConfig.resolve.extensions.push('.ts', '.tsx');

        newConfig.module.rules.push({
            test: /\.css$/,
            include: path.resolve(__dirname, '../'),
            loaders: [
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: './postcss.config.js'
                        }
                    }
                }
            ]
        });

        newConfig.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            include: path.resolve(__dirname, '../'),
            loaders: ['file-loader']
        });

        newConfig.resolve.alias = {
            ...newConfig.resolve.alias,
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils')
        };

        return newConfig;
    }
};
