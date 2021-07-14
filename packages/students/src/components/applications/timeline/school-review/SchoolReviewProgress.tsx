import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SchoolReviewProgress: FC = () => {
    const { t } = useTranslation();

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-school-review-description')}
        </p>
    );
};

export default SchoolReviewProgress;
