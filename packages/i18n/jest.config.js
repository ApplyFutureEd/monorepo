const baseConfig = require('../../jest.config');

const packageName = require('./package.json').name.split('@applyfuture/').pop();

module.exports = {
    ...baseConfig,
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    displayName: packageName,
    moduleNameMapper: {
        '@assets/(.*)': `<rootDir>/packages/${packageName}/src/assets/$1`,
        '@components/(.*)': `<rootDir>/packages/${packageName}/src/components/$1`,
        '@pages/(.*)': `<rootDir>/packages/${packageName}/src/pages/$1`,
        '@styles/(.*)': `<rootDir>/packages/${packageName}/src/styles/$1`,
        '\\.(css|scss|png)$': 'identity-obj-proxy'
    },
    modulePaths: [`<rootDir>/packages/${packageName}/src/`],
    name: packageName,
    rootDir: '../..',
    roots: [`<rootDir>/packages/${packageName}`]
};
