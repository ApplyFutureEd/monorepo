const basePlugins = {
    autoprefixer: {},
    'postcss-custom-properties': {},
    tailwindcss: {}
};

const productionPlugins = {
    '@fullhuman/postcss-purgecss': {
        content: ['./src/pages_/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
    },
    ...basePlugins
};

module.exports = {
    plugins: process.env.NODE === 'production' ? productionPlugins : basePlugins
};
