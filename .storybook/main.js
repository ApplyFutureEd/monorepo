const path = require('path');

module.exports = {
    stories: ['../**/*.story.tsx'],
    addons: ['@storybook/addon-knobs/register'],
    presets: [path.resolve(__dirname, './next-preset.js')]
};
