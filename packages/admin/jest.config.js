const baseConfig = require('../../jest.config');

const packageName = require('./package.json').name.split('@applyfuture/').pop();

module.exports = {
    ...baseConfig,
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    displayName: packageName,
    moduleNameMapper: {
        '@components/(.*)': `<rootDir>/packages/${packageName}/src/components/$1`,
        '@pages/(.*)': `<rootDir>/packages/${packageName}/src/pages/$1`,
        '@styles/(.*)': `<rootDir>/packages/${packageName}/src/styles/$1`,
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    modulePaths: [`<rootDir>/packages/${packageName}/src/`],
    name: packageName,
    rootDir: '../..',
    roots: [`<rootDir>/packages/${packageName}`]
};
