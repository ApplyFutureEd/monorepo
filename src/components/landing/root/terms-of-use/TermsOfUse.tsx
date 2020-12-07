import Document from '@docs/terms-of-use.md';
import { FC } from 'react';

const TermsOfUse: FC = () => {
    return (
        <div className="mx-auto py-0 max-w-7xl sm:px-6 md:py-6 lg:px-8">
            <div className="doc px-4 sm:px-0">
                <div className="markdown">
                    <Document />
                </div>
            </div>
        </div>
    );
};
export default TermsOfUse;
