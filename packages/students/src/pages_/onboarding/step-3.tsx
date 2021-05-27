import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingButtons from '@components/onboarding/onboarding-buttons/OnboardingButtons';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import Image from 'next/image';
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
            <div className="lg:mt-15 flex flex-row lg:justify-center">
                <div>
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p className="mt-1">Génial!</p>
                        <p className="mt-1">À quel niveau d études êtes vous ?</p>
                    </Chatbot>
                    <div className="px-6 sm:ml-16 sm:pl-12 md:w-3/4">
                        <OnboardingButtons />
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        alt="world"
                        className="float-left"
                        height="320"
                        src="/assets/images/onboarding/world.svg"
                        width="320"
                    />
                </div>
            </div>
            <div className="mt-16 md:mt-24">
                <Stepper steps={steps} />
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
