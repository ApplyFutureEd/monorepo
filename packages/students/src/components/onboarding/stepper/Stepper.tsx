import React, { FC } from 'react';

type Step = {
    name: string;
    status: string;
};

const renderBullet = (step: Step) => {
    if (step.status === 'complete') {
        return (
            <li key={step.name}>
                <a className="w-2.5 h-2.5 block bg-indigo-600 hover:bg-indigo-900 rounded-full">
                    <span className="sr-only">{step.name}</span>
                </a>
            </li>
        );
    }

    if (step.status === 'current') {
        return (
            <li key={step.name}>
                <a aria-current="step" className="relative flex items-center justify-center">
                    <span aria-hidden="true" className="absolute flex p-px w-5 h-5">
                        <span className="w-full h-full bg-indigo-200 rounded-full" />
                    </span>
                    <span
                        aria-hidden="true"
                        className="w-2.5 h-2.5 relative block bg-indigo-600 rounded-full"
                    />
                    <span className="sr-only">{step.name}</span>
                </a>
            </li>
        );
    }

    return (
        <li key={step.name}>
            <a className="w-2.5 h-2.5 block bg-gray-200 hover:bg-gray-400 rounded-full">
                <span className="sr-only">{step.name}</span>
            </a>
        </li>
    );
};

type Props = {
    steps: Step[];
};

const Stepper: FC<Props> = (props) => {
    const { steps } = props;
    return (
        <nav aria-label="Progress" className="flex items-center justify-center">
            <ol className="flex items-center ml-8 space-x-5">
                {steps.map((step) => renderBullet(step))}
            </ol>
        </nav>
    );
};

export default Stepper;
