import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const InternalReviewProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-internal-review-description')}
        </p>
    );
};

export default InternalReviewProgress;
