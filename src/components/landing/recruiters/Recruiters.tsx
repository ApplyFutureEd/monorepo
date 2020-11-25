import Stepper from '@components/core/stepper/Stepper';
import RecruitersForm from '@components/landing/recruiters/RecruitersForm';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const Recruiters: FC = () => {
    const { t } = useTranslation();

    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        t('recruiter-form:recruiter-form-step-1'),
        t('recruiter-form:recruiter-form-step-2'),
        t('recruiter-form:recruiter-form-step-3')
    ];

    const handlePreviousStep = () => {
        return setCurrentStep((prev) => prev - 1);
    };

    const handleNextStep = () => {
        return setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img
                        alt=""
                        className="w-full h-56 object-cover lg:absolute lg:h-full"
                        src="/assets/images/landing/recruiters-form.svg"
                    />
                </div>
            </div>
            <div className="relative pb-16 pt-12 px-4 sm:pt-16 sm:px-6 lg:grid lg:grid-cols-2 lg:mx-auto lg:px-8 lg:max-w-7xl">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                        <h1 className="mb-8 mt-2 text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl sm:leading-10">
                            {t('landing:recruiters-page-heading')}
                        </h1>
                        <div className="mb-4">
                            <Stepper currentStep={currentStep} steps={steps} />
                        </div>
                        <RecruitersForm
                            currentStep={currentStep}
                            handleNextStep={handleNextStep}
                            handlePreviousStep={handlePreviousStep}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recruiters;
