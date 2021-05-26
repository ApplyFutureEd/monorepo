import OnboardingButtons from '@components/onboarding/onboarding-buttons/OnboardingButtons';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import React, { FC } from 'react';

const Onboarding: FC = () => {
    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'current' },
        { name: 'Step 3', status: 'current' },
        { name: 'Step 4', status: 'upcoming' }
    ];

    return (
        <OnboardingLayout title="Onboarding">
            <div className="flex items-end justify-center pb-20 pt-4 px-4 min-h-screen text-center sm:block sm:p-0">
                <OnboardingButtons />
            </div>
            <div className="mt-16 md:mt-24">
                <Stepper steps={steps} />
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
