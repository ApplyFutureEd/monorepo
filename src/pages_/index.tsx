import Arguments from '@components/landing/root/arguments/Arguments';
import Contact from '@components/landing/root/contact/Contact';
import Hero from '@components/landing/root/hero/Hero';
import Partners from '@components/landing/root/partners/Partners';
import Process from '@components/landing/root/process/Process';
import Recruiters from '@components/landing/root/recruiters/Recruiters';
import Schools from '@components/landing/root/schools/Schools';
import Students from '@components/landing/root/students/Students';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const LandingPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout description={t('landing:meta-description')} title={t('landing:page-title')}>
            <Hero />
            <Students />
            <Arguments />
            <Process />
            <Schools />
            <Partners />
            <Recruiters />
            <Contact />
        </LandingLayout>
    );
};

export default LandingPage;
