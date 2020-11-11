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
        'plugin:prettier/recommended'
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
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                aspects: ['invalidHref', 'preferButton'],
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight']
            }
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
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
        'simple-import-sort/sort': 'error',
        'sort-keys': 'error'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
