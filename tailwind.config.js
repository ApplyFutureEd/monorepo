// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    },
    plugins: [require('@tailwindcss/ui'), require('tailwindcss-filters')],
    purge: false,
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                serif: [...defaultTheme.fontFamily.serif]
            },
            padding: {
                header: '90px'
            }
        },
        inset: {
            ...defaultTheme.inset,
            2: '2rem',
            4: '4rem',
            8: '8rem'
        }
    }
};
