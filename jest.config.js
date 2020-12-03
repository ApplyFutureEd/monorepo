module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/*.story.tsx',
        '!**/pages/*.{js,tsx}',
        '!**/pages_/*.tsx',
        '!**/utils/**/*.{ts,tsx}',
        '!**/graphql/**/*.ts',
        '!**/amplify/**/*.ts'
    ],
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@graphql/(.*)': '<rootDir>/src/graphql/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@styles/(.*)': '<rootDir>/src/styles/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/']
};
