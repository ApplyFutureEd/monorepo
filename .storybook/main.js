const path = require('path');

module.exports = {
    addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],
    presets: [path.resolve(__dirname, './next-preset.js')],
    stories: ['../**/*.story.tsx']
};
