import Arguments from '@components/landing/arguments/Arguments';
import Contact from '@components/landing/contact/Contact';
import Hero from '@components/landing/hero/Hero';
import LeadModal from '@components/landing/lead-modal/LeadModal';
import Partners from '@components/landing/partners/Partners';
import Process from '@components/landing/process/Process';
import Recruiters from '@components/landing/recruiters/Recruiters';
import Schools from '@components/landing/schools/Schools';
import Students from '@components/landing/students/Students';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const LandingPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout description={t('landing:meta-description')} title={t('landing:page-title')}>
            <LeadModal />
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
