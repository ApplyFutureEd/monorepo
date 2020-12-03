import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Programs from '@components/programs/Programs';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ProgramsPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout
            description={t('programs:meta-description')}
            title={t('programs:page-title')}>
            <Programs />
        </DashboardLayout>
    );
};

export default ProgramsPage;
