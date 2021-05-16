import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const DecisionLetterProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-decision-letter-description')}
        </p>
    );
};

export default DecisionLetterProgress;
