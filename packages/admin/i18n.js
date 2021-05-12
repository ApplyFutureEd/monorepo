module.exports = {
    currentPagesDir: 'src/pages_',
    defaultLocale: 'en',
    finalPagesDir: 'src/pages',
    locales: ['en'],
    localesPath: 'locales',
    pages: {
        '*': ['common'],
        '/applications': ['application'],
        '/programs': [],
        '/programs/create': ['profile', 'programs', 'application'],
        '/programs/update': ['profile', 'programs', 'application'],
        '/search-alerts': [],
        '/students': [],
        '/students/update': ['profile', 'programs', 'application']
    }
};
