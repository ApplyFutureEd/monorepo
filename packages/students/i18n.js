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
        '/profile/background-information': ['profile'],
        '/profile/education-history': ['profile', 'programs'],
        '/profile/general-information': ['profile'],
        '/profile/test-scores': ['profile'],
        '/profile/upload-documents': ['profile'],
        '/programs': ['profile', 'programs'],
        '/programs/[slug]': ['programs'],
        '/recruiters': ['landing', 'recruiter-form'],
        '/schools': ['programs', 'schools'],
        '/terms-and-conditions': ['landing'],
        '/terms-of-use': ['landing']
    }
};
