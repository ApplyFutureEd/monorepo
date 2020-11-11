import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Arguments from '@components/pages/landing/arguments/Arguments';
import Contact from '@components/pages/landing/contact/Contact';
import Hero from '@components/pages/landing/hero/Hero';
import Partners from '@components/pages/landing/partners/Partners';
import Process from '@components/pages/landing/process/Process';
import Recruiters from '@components/pages/landing/recruiters/Recruiters';
import Schools from '@components/pages/landing/schools/Schools';
import Students from '@components/pages/landing/students/Students';
import React, { FC } from 'react';

const Landing: FC = () => (
    <LandingLayout title="Apply for the best schools in Europe">
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

export default Landing;
