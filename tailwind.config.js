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
            minHeight: {
                button: '47px',
                input: '47px'
            },
            padding: {
                header: '90px'
            }
        },
        filter: {
            grayscale: 'grayscale(1)',
            none: 'grayscale(0)'
        },
        inset: {
            ...defaultTheme.inset,
            2: '2rem',
            4: '4rem',
            8: '8rem'
        }
    },
    variants: {
        filter: ['hover']
    }
};
