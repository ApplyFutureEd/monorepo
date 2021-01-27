module.exports = {
    currentPagesDir: 'src/pages_',
    defaultLocale: 'en',
    finalPagesDir: 'src/pages',
    locales: ['en', 'fr', 'zh'],
    localesPath: 'locales',
    pages: {
        '*': ['common', 'navigation', 'auth'],
        '/': ['landing'],
        '/about': ['landing'],
        '/help': ['help'],
        '/privacy-policy': ['landing'],
        '/programs': ['programs', 'profile'],
        '/programs/[slug]': ['programs'],
        '/recruiters': ['landing', 'recruiter-form'],
        '/schools': ['schools'],
        '/terms-and-conditions': ['landing'],
        '/terms-of-use': ['landing']
    }
};
