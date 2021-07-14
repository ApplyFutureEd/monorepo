import CountryForm from '@components/forms/onboarding/country/CountryForm';
import OnboardingLayout from '@components/layouts/onboarding-layout/OnboardingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import Stepper from '@components/onboarding/stepper/Stepper';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const OnboardingCountryPage: FC = () => {
    const { t } = useTranslation();

    const steps = [
        { name: 'country', status: 'CURRENT' },
        { name: 'highest-education-level', status: 'UPCOMING' },
        { name: 'discipline', status: 'UPCOMING' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p>{t('profile:onboarding-step-country-chatbot-text-1')}</p>
                        <p>{t('profile:onboarding-step-country-chatbot-text-2')}</p>
                        <p className="mt-2">
                            {t('profile:onboarding-step-country-chatbot-text-3')}
                        </p>
                    </Chatbot>
                    <CountryForm />
                </div>
                <div className="hidden md:grid md:place-items-center">
                    <Image
                        alt="world"
                        height="300"
                        src="/assets/images/onboarding/country.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingCountryPage;
