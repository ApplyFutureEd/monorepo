import LandingLayout from '@components/layouts/LandingLayout';
import Hero from '@components/pages/landing/hero/Hero';
import React, { FC } from 'react';

const Landing: FC = () => (
    <LandingLayout title="Apply for the best school in Europe">
        <Hero />
    </LandingLayout>
);

export default Landing;
