import { getDisciplineLabel, useLocalStorage } from '@applyfuture/utils';
import DegreeForm from '@components/forms/onboarding/degree/DegreeForm';
import OnboardingLayout from '@components/layouts/onboarding-layout/OnboardingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import Stepper from '@components/onboarding/stepper/Stepper';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const OnboardingDegreePage: FC = () => {
    const { t } = useTranslation();
    const [onboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'DONE' },
        { name: 'discipline', status: 'DONE' },
        { name: 'degree', status: 'CURRENT' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p className="mt-1">
                            {t('profile:onboarding-step-degree-chatbot-text-1', {
                                discipline: t(
                                    `profile:${getDisciplineLabel(onboarding.discipline)}`
                                )
                            })}
                        </p>
                        <p className="mt-1">{t('profile:onboarding-step-degree-chatbot-text-2')}</p>
                    </Chatbot>
                    <DegreeForm />
                </div>
                <div className="hidden md:grid md:place-items-center">
                    <Image
                        alt="degree"
                        height="300"
                        src="/assets/images/onboarding/degree.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingDegreePage;
