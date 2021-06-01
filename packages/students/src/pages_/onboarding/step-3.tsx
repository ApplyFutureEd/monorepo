import { disciplines } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import DisciplineButton from '@components/onboarding/discipline-button/disciplinebutton';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const Onboarding: FC = () => {
    const { t } = useTranslation();
    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'current' },
        { name: 'Step 3', status: 'current' },
        { name: 'Step 4', status: 'upcoming' }
    ];

    const disciplinesButtons = disciplines.map((discipline) => ({
        icon: discipline.icon,
        label: t(`profile:${discipline.label}`),
        value: discipline.value
    }));

    return (
        <OnboardingLayout title="Onboarding">
            <div className="grid grid-cols-1 md:container md:grid-cols-2 md:pt-5">
                <div className="md:ml-15 md:pt-15">
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p className="mt-1">D’accord.</p>
                        <p className="mt-1">Quelle discipline souhaitez vous étudier ?</p>
                    </Chatbot>
                </div>
            </div>
            <div className="grid gap-1 grid-cols-1 justify-items-center mb-auto md:gap-4 md:grid-cols-2 lg:container">
                {disciplinesButtons.map((discipline) => (
                    <DisciplineButton
                        key={discipline.value}
                        icon={discipline.icon}
                        label={discipline.label}
                    />
                ))}
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default Onboarding;
