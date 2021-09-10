import React, { FC } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    isLoading: boolean;
};

const TranslationRowSkeleton: FC<Props> = (props) => {
    const { isLoading } = props;

    return (
        <div className="mb-16 mt-12">
            <TranslationForm isLoading={isLoading} newForm={false} />
        </div>
    );
};

export default TranslationRowSkeleton;
