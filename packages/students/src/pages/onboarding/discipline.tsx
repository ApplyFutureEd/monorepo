import DisciplineForm from '@components/forms/onboarding/discipline/DisciplineForm';
import OnboardingLayout from '@components/layouts/onboarding-layout/OnboardingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import Stepper from '@components/onboarding/stepper/Stepper';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const OnboardingDisciplinePage: FC = () => {
    const { t } = useTranslation();

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'DONE' },
        { name: 'discipline', status: 'CURRENT' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex-col mt-4 md:mt-8 md:space-y-6">
                <div className="flex justify-center md:ml-6 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p className="mt-1">
                            {t('profile:onboarding-step-discipline-chatbot-text-1')}
                        </p>
                        <p className="mt-1">
                            {t('profile:onboarding-step-discipline-chatbot-text-2')}
                        </p>
                    </Chatbot>
                    <div />
                </div>
                <DisciplineForm />
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingDisciplinePage;
