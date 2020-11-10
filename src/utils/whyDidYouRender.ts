import React from 'react';

/**
 * WhyDidYouRender helps locate unnecessary re-renders and fix them
 * Applied only in front-end development environment
 *
 * @see https://github.com/welldone-software/why-did-you-render
 */
export const initWhyDidYouRender = (): void => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const whyDidYouRender = require('@welldone-software/why-did-you-render');
        // eslint-disable-next-line no-console
        console.debug(
            'Initializing WhyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render'
        );
        whyDidYouRender(React, {
            trackAllPureComponents: true,
            trackHooks: true,
            logOwnerReasons: true,
            collapseGroups: true
        });
    }
};
