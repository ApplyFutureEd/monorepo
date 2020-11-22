import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type StepProps = {
    isCurrent: boolean;
    isValidated: boolean;
    label: string;
};

const Step: FC<StepProps> = (props) => {
    const { isCurrent, isValidated, label } = props;

    const iconBaseClasses = 'text-gray-400 text-lg';
    const iconValidatedClasses = 'text-green-400';
    const iconCurrentClasses = 'text-gray-700';

    const iconClasses = cx({
        [`${iconBaseClasses}`]: true,
        [`${iconCurrentClasses}`]: isCurrent,
        [`${iconValidatedClasses}`]: isValidated
    });

    const labelBaseClasses = 'text-gray-400 text-sm font-medium';
    const labelValidatedClasses = 'text-gray-400';
    const labelCurrentClasses = 'text-gray-700';

    const labelClasses = cx({
        [`${labelBaseClasses}`]: true,
        [`${labelCurrentClasses}`]: isCurrent,
        [`${labelValidatedClasses}`]: isValidated
    });

    return (
        <li className="flex items-center space-x-2">
            <FontAwesomeIcon className={iconClasses} icon={faCheckCircle} />
            <div className={labelClasses}>{label}</div>
        </li>
    );
};

type Props = {
    activeStep: number;
    steps: Array<string>;
};

const Stepper: FC<Props> = (props) => {
    const { t } = useTranslation(['common']);
    const { activeStep, steps } = props;
    const progressPourcentage = `${(activeStep / steps.length) * 100}%`;

    return (
        <>
            <div className="hidden md:block">
                <div className="mb-2">
                    <ul className="flex justify-between">
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                isCurrent={activeStep === index}
                                isValidated={activeStep > index}
                                label={step}
                            />
                        ))}
                    </ul>
                </div>
                <div className="relative w-full h-2 bg-gray-300">
                    <div
                        className="absolute w-full h-2 bg-indigo-500"
                        style={{ width: progressPourcentage }}
                    />
                </div>
            </div>
            <div className="block md:hidden">
                <div className="flex items-center justify-between mb-4">
                    <div className="relative flex items-center justify-center">
                        <div />
                        <div className="absolute inset-0 flex items-center justify-center font-bold">{`${activeStep} / ${steps.length}`}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-gray-900 text-xl font-bold leading-5 sm:text-2xl sm:leading-6">
                            {steps[activeStep]}
                        </div>
                        <div className="sm:text-md mt-2 text-gray-900 leading-5 sm:leading-6">
                            {t('common:next')}: {steps[activeStep + 1]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stepper;
