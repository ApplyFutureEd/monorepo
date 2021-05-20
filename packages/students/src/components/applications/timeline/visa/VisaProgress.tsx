import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const VisaProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">{t('application:timeline-step-visa-description')}</p>
    );
};

export default VisaProgress;
