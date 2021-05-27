import { disciplines } from '@applyfuture/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-translate';
import React, { FC } from 'react';

export const onboardingButtons: FC = () => {
    const { t } = useTranslation();

    const onboardingButtons = disciplines.map((discipline) => ({
        icon: discipline.icon,
        label: t(`programs:${discipline.label}`),
        value: discipline.value
    }));

    return (
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            {onboardingButtons.map((discipline) => (
                <div
                    key={discipline.value}
                    className="flex flex-col p-4 bg-white border-2 border-indigo-300 rounded-xl">
                    <div className="mx-auto">
                        <FontAwesomeIcon icon={discipline.icon} className="fa-3x text-indigo-600" />
                    </div>
                    <div className="text-base font-semibold leading-6">{discipline.label}</div>
                </div>
            ))}
        </div>
    );
};

export default onboardingButtons;
