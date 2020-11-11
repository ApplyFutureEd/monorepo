module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/*.story.tsx',
        '!**/pages/*.tsx',
        '!**/utils/*.ts'
    ],
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@styles/(.*)': '<rootDir>/src/styles/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/']
};
