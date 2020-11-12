module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
        },
        autoprefixer: {},
        'postcss-custom-properties': {},
        tailwindcss: {}
    }
};
