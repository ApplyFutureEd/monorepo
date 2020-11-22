module.exports = {
    currentPagesDir: 'src/pages_',
    defaultLocale: 'en',
    finalPagesDir: 'src/pages',
    locales: ['en', 'fr', 'cn'],
    localesPath: 'locales',
    pages: {
        '*': ['common', 'navigation', 'auth'],
        '/': ['landing'],
        '/about': ['landing']
    }
};
