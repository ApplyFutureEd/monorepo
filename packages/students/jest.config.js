const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        '@applyfuture/students/components/(.*)': `<rootDir>/packages/students/src/components/$1`,
        '@applyfuture/students/pages/(.*)': `<rootDir>/packages/students/src/pages_/$1`,
        '@applyfuture/students/styles/(.*)': `<rootDir>/packages/students/src/styles/$1`
    }
};
