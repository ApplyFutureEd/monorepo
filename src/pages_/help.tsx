import Help from '@components/help/Help';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const HelpPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout description={t('help:meta-description')} title={t('help:page-title')}>
            <Help />
        </DashboardLayout>
    );
};

export default HelpPage;
