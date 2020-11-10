import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Hero from '@components/pages/landing/hero/Hero';
import React, { FC } from 'react';

const Landing: FC = () => (
    <LandingLayout title="Apply for the best schools in Europe">
        <Hero />
    </LandingLayout>
);

export default Landing;
