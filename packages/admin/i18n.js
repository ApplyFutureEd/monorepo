module.exports = {
    currentPagesDir: 'src/pages_',
    defaultLocale: 'en',
    finalPagesDir: 'src/pages',
    locales: ['en'],
    localesPath: 'locales',
    pages: {
        '*': ['common'],
        '/programs/create': ['profile', 'programs', 'application'],
        '/programs/update': ['profile', 'programs', 'application']
    }
};
