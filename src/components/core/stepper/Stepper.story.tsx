import Button from '@components/core/button/Button';
import Stepper from '@components/core/stepper/Stepper';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { ReactNode, useState } from 'react';

export default {
    component: Stepper,
    title: 'Stepper'
};

export const Default = (): ReactNode => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = ['Your project', 'Your information', 'Your results'];

    const handlePreviousStep = () => {
        return setCurrentStep((prev) => (prev - 1 < 0 ? prev : prev - 1));
    };

    const handleNextStep = () => {
        return setCurrentStep((prev) => (prev + 1 >= steps.length ? prev : prev + 1));
    };

    return (
        <div>
            <Stepper currentStep={currentStep} steps={steps} />
            <div className="flex justify-end mt-6 space-x-3">
                {currentStep === 0 ? (
                    <Button variant="secondary">Cancel</Button>
                ) : (
                    <Button
                        startIcon={faArrowLeft}
                        variant="secondary"
                        onClick={handlePreviousStep}>
                        Previous
                    </Button>
                )}
                {currentStep + 1 === steps.length ? (
                    <Button>Submit</Button>
                ) : (
                    <Button endIcon={faArrowRight} onClick={handleNextStep}>
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};
