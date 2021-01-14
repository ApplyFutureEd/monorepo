module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/*.story.tsx',
        '!**/pages/*.{js,tsx}',
        '!**/utils/**/*.{ts,tsx}',
        '!**/graphql/**/*.ts',
        '!**/amplify/**/*'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    projects: ['<rootDir>/packages/*/jest.config.js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '\\.[jt]sx?$': [
            'babel-jest',
            {
                rootMode: 'upward'
            }
        ],
    },
    transformIgnorePatterns: ['/node_modules/']
};
