import LandingLayout from '@components/layouts/LandingLayout';
import Hero from '@components/pages/landing/Hero';
import React, { FC } from 'react';

const Landing: FC = () => (
    <LandingLayout>
        <Hero />
    </LandingLayout>
);

export default Landing;
