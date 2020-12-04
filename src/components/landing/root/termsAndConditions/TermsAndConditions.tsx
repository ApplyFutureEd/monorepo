import React, { FC } from 'react';

import TaC from '../../../../docs/TermsAndConditions.md';

const TermsAndConditions: FC = () => {
    return (
        <div className="mx-auto py-0 max-w-7xl sm:px-6 md:py-6 lg:px-8">
            <div className="doc px-4 sm:px-0">
                <div className="markdown" />
                <TaC />
            </div>
        </div>
    );
};
export default TermsAndConditions;
