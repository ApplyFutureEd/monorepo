module.exports = {
    currentPagesDir: 'src/pages_',
    defaultLocale: 'en',
    finalPagesDir: 'src/pages',
    locales: ['en', 'fr', 'zh'],
    localesPath: 'locales',
    pages: {
        '*': ['auth', 'common', 'navigation'],
        '/': ['landing'],
        '/about': ['landing'],
        '/applications/[id]/payment': ['application', 'profile', 'programs'],
        '/applications/[id]/review-documents': ['application', 'profile', 'programs'],
        '/applications/[id]/submission': ['application', 'profile', 'programs'],
        '/applications/[id]/upload-documents': ['application', 'profile', 'programs'],
        '/careers': ['landing'],
        '/help': ['help'],
        '/privacy-policy': ['landing'],
        '/profile/background-information': ['profile'],
        '/profile/education-history': ['profile', 'programs'],
        '/profile/general-information': ['profile'],
        '/profile/test-scores': ['profile'],
        '/profile/upload-documents': ['profile'],
        '/programs': ['profile', 'programs'],
        '/programs/[slug]': ['profile', 'programs'],
        '/recruiters': ['landing', 'recruiter-form'],
        '/schools': ['programs', 'schools'],
        '/schools/[slug]': ['profile', 'programs', 'schools'],
        '/terms-and-conditions': ['landing'],
        '/terms-of-use': ['landing']
    }
};
