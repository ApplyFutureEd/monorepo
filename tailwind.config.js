// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    plugins: [
        require('tailwindcss-filters'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
    purge: [
        './src/**/*.tsx',
    ],
    theme: {
        ...defaultTheme,
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: [...defaultTheme.fontFamily.serif]
            },
            height: {
                'screen-40': '40vh',
                'screen-90': '90vh'
            },
            maxHeight: {
                chip: '20px'
            },
            minHeight: {
                button: '47px',
                input: '47px'
            },
            padding: {
                header: '90px'
            }
        },
        inset: {
            ...defaultTheme.inset,
            0: '0',
            1: '1rem',
            '1/2': '50%',
            2: '2rem',
            4: '4rem',
            8: '8rem'
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active']
        },

    }
};
