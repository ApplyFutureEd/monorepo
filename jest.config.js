module.exports = {
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    // we need to create this file
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@styles/(.*)': '<rootDir>/src/styles/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1'
    }
};
