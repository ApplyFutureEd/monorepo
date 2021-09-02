module.exports = {
    env: {
        amd: true,
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['simple-import-sort'],
    root: true,
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                aspects: ['invalidHref', 'preferButton'],
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight']
            }
        ],
        'no-unused-vars': 'error',
        'prettier/prettier': ['off', { endOfLine: 'auto' }, { usePrettierrc: true }],
        'react/display-name': 'off',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                reservedFirst: true,
                shorthandFirst: true
            }
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'sort-keys': 'error'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
