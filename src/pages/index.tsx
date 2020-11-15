import Arguments from '@components/landing/arguments/Arguments';
import Contact from '@components/landing/contact/Contact';
import Hero from '@components/landing/hero/Hero';
import Partners from '@components/landing/partners/Partners';
import Process from '@components/landing/process/Process';
import Recruiters from '@components/landing/recruiters/Recruiters';
import Schools from '@components/landing/schools/Schools';
import Students from '@components/landing/students/Students';
import LandingLayout from '@components/layout/landing-layout/LandingLayout';
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
