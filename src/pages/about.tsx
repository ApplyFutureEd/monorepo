import About from '@components/landing/about/About';
import LandingLayout from '@components/layout/landing-layout/LandingLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation(['about']);

    return (
        <LandingLayout description={t('landing:meta-description')} title={t('landing:page-title')}>
            <About />
        </LandingLayout>
    );
};

export default AboutPage;
