const baseConfig = require('../../jest.config');

const packageName = require('./package.json').name.split('@applyfuture/').pop();

module.exports = {
    ...baseConfig,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        '@components/(.*)': `<rootDir>/packages/${packageName}/src/components/$1`,
        '@graphql/(.*)': `<rootDir>/packages/${packageName}/src/graphql/$1`,
        '@pages/(.*)': `<rootDir>/packages/${packageName}/src/pages_/$1`,
        '@styles/(.*)': `<rootDir>/packages/${packageName}/src/styles/$1`
    }
};
