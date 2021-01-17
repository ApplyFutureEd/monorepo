import Arguments from '@applyfuture/students/components/landing/arguments/Arguments';
import Contact from '@applyfuture/students/components/landing/contact/Contact';
import Hero from '@applyfuture/students/components/landing/hero/Hero';
import Partners from '@applyfuture/students/components/landing/partners/Partners';
import Process from '@applyfuture/students/components/landing/process/Process';
import Recruiters from '@applyfuture/students/components/landing/recruiters/Recruiters';
import Schools from '@applyfuture/students/components/landing/schools/Schools';
import Students from '@applyfuture/students/components/landing/students/Students';
import LandingLayout from '@applyfuture/students/components/layouts/landing-layout/LandingLayout';
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
