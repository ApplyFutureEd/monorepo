const baseConfig = require('../../jest.config');

const packageName = require('./package.json').name.split('@applyfuture/').pop();

module.exports = {
    ...baseConfig,
    displayName: packageName,
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    modulePaths: [`<rootDir>/packages/${packageName}/src/`],
    name: packageName,
    rootDir: '../..',
    roots: [`<rootDir>/packages/${packageName}`]
};
