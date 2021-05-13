// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    plugins: [
        require('tailwindcss-filters'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
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
            },
            zIndex: {
                1000: '1000'
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
        extend: {
            backgroundColor: ['active'],
            textColor: ['active']
        },
        filter: ['hover']
    }
};
