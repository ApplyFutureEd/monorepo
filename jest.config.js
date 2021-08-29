module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/*.story.tsx',
        '!**/pages/*.tsx',
        '!**/pages/**/*.tsx',
        '!**/utils/**/*.{ts,tsx}',
        '!**/graphql/**/*.ts',
        '!**/amplify/**/*'
    ],
    moduleNameMapper: {
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    projects: ['<rootDir>/packages/*/jest.config.js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest.assets.js',
        '\\.[jt]sx?$': [
            'babel-jest',
            {
                rootMode: 'upward'
            }
        ]
    },
    transformIgnorePatterns: ['/node_modules/']
};
