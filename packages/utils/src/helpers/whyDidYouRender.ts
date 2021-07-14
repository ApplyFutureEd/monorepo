/**
 * Helps locate unnecessary re-renders and fix them.
 *
 * @see https://github.com/welldone-software/why-did-you-render
 */
export const initWhyDidYouRender = (): void => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        const whyDidYouRender = require('@welldone-software/why-did-you-render');
        console.debug(
            'Initializing WhyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render'
        );
        whyDidYouRender(React, {
            collapseGroups: true,
            logOwnerReasons: true,
            trackAllPureComponents: true,
            trackHooks: true
        });
    }
};
