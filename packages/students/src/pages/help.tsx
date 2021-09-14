import FrequentlyAskedQuestions from '@components/help/frequently-asked-questions/FrequentlyAskedQuestions';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const HelpPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout description={t('help:meta-description')} title={t('help:page-title')}>
            <FrequentlyAskedQuestions />
        </DashboardLayout>
    );
};

export default HelpPage;
