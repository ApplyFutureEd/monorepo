import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

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
    /**
     * The index of the current step.
     */
    currentStep: number;
    /**
     * Array of strings representing each steps.
     */
    steps: Array<string>;
};

export const Stepper: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { currentStep, steps } = props;
    const progress = (currentStep / steps.length) * 100;
    const progressPourcentage = `${progress}%`;

    const size = 44;
    const thickness = 3.6;
    const circleProgress = ((currentStep + 1) / steps.length) * 100;
    const circleStyle = { strokeDasharray: '', strokeDashoffset: '' };
    const circumference = 2 * Math.PI * ((size - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    circleStyle.strokeDashoffset = `${(((100 - circleProgress) / 100) * circumference).toFixed(
        3
    )}px`;

    return (
        <>
            <div className="hidden md:block">
                <div className="mb-2">
                    <ul className="flex justify-between">
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                isCurrent={currentStep === index}
                                isValidated={currentStep > index}
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
                        <div
                            role="progressbar"
                            style={{ height: 56, transform: 'rotate(-90deg)', width: 56 }}>
                            <svg
                                className="block"
                                viewBox={`${size / 2} ${size / 2} ${size} ${size}`}>
                                <circle
                                    className="text-indigo-500 stroke-current"
                                    cx={size}
                                    cy={size}
                                    fill="white"
                                    r={(size - thickness) / 2}
                                    strokeWidth={thickness}
                                    style={circleStyle}
                                />
                            </svg>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center font-bold">{`${
                            currentStep + 1
                        } / ${steps.length}`}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-gray-900 text-xl font-bold leading-5 sm:text-2xl sm:leading-6">
                            {steps[currentStep]}
                        </div>
                        {steps[currentStep + 1] && (
                            <div className="sm:text-md mt-2 text-gray-900 leading-5 sm:leading-6">
                                {t('common:next')}: {steps[currentStep + 1]}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

