import About from '@components/landing/about/About';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const AboutPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout
            description={t('landing:about-meta-description')}
            title={t('landing:about-page-title')}>
            <About />
        </LandingLayout>
    );
};

export default AboutPage;
