import { disciplines } from '@applyfuture/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

export const onboardingButtons: FC = () => {
    const { t } = useTranslation();

    const onboardingButtons = disciplines.map((discipline) => ({
        icon: discipline.icon,
        label: t(`programs:${discipline.label}`),
        value: discipline.value
    }));

    return (
        <div className="grid gap-8 grid-cols-2">
            {onboardingButtons.map((discipline) => (
                <div key={discipline.value}>
                    <div>
                        <FontAwesomeIcon icon={discipline.icon} />
                    </div>
                    <div>{discipline.label}</div>
                </div>
            ))}
        </div>
    );
};

export default onboardingButtons;
