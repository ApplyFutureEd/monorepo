// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            fontFamily: {
                serif: [...defaultTheme.fontFamily.serif],
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            }
        },
        inset: {
            ...defaultTheme.inset,
            2: '2rem',
            4: '4rem',
            8: '8rem'
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    plugins: [require('@tailwindcss/ui'), require('tailwindcss-filters')]
};
