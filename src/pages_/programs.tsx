import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Programs from '@components/programs/Programs';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ProgramsPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout title={t('programs:page-title')}>
            <Programs />
        </LandingLayout>
    );
};

export default ProgramsPage;
