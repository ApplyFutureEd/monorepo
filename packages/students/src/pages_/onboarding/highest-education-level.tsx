import { getCountryLabel, useLocalStorage } from '@applyfuture/utils';
import HighestEducationLevelForm from '@components/forms/onboarding/highest-education-level/HighestEducationLevelForm';
import OnboardingLayout from '@components/layouts/onboarding-layout/OnboardingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import Stepper from '@components/onboarding/stepper/Stepper';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const OnboardingHighestEducationLevelPage: FC = () => {
    const { t } = useTranslation();
    const [onboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'CURRENT' },
        { name: 'discipline', status: 'UPCOMING' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p>
                            {t('profile:onboarding-step-highest-education-level-chatbot-text-1', {
                                country: t(`common:${getCountryLabel(onboarding.country)}`)
                            })}
                        </p>
                        <p className="mt-2">
                            {t('profile:onboarding-step-highest-education-level-chatbot-text-2')}
                        </p>
                    </Chatbot>
                    <HighestEducationLevelForm />
                </div>
                <div className="hidden md:grid md:place-items-center">
                    <Image
                        alt="education-level"
                        height="300"
                        src="/assets/images/onboarding/education-level.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingHighestEducationLevelPage;
