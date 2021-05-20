import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const SchoolTuitionsFeePaymentProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-tuitions-fee-description')}
        </p>
    );
};

export default SchoolTuitionsFeePaymentProgress;
