const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        '@applyfuture/admin/components/(.*)': `<rootDir>/packages/admin/src/components/$1`,
        '@applyfuture/admin/pages/(.*)': `<rootDir>/packages/admin/src/pages/$1`,
        '@applyfuture/admin/styles/(.*)': `<rootDir>/packages/admin/src/styles/$1`
    }
};
