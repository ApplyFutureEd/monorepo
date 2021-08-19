const basePlugins = {
    autoprefixer: {},
    'postcss-custom-properties': {},
    tailwindcss: {}
};

const productionPlugins = {
    '@fullhuman/postcss-purgecss': {
        content: ['./../**/*.tsx'],
        defaultExtractor: (content) => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

            return broadMatches.concat(innerMatches);
        }
    },
    ...basePlugins
};

module.exports = {
    plugins: process.env.NODE === 'production' ? productionPlugins : basePlugins
};
