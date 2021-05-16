import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const SchoolInterviewProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-school-interview-description')}
        </p>
    );
};

export default SchoolInterviewProgress;
