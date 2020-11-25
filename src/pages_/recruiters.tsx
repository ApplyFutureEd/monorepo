import Recruiters from '@components/landing/recruiters/Recruiters';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const RecruitersPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout title={t('recruiter-form:page-title')}>
            <Recruiters />
        </LandingLayout>
    );
};

export default RecruitersPage;
