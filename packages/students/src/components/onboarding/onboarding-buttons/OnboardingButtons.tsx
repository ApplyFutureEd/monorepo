import { disciplines } from '@applyfuture/utils';
import { faAnalytics } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

export const onboardingButtons: FC = () => {
    const { t } = useTranslation();

    const onboardingButtons = disciplines.map((discipline) => ({
        label: t(`programs:${discipline.label}`),
        icon: discipline.icon,
        value: discipline.value
    }));

    return (
        <div className="grid gap-8 grid-cols-2">
            {onboardingButtons.map((discipline) => (
                <div key={discipline.value}>
                    <div>{discipline.label}</div>
                    <FontAwesomeIcon icon={discipline.icon} />
                </div>
            ))}
        </div>
    );
};

export default onboardingButtons;
