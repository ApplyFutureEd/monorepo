import { Button } from '@applyfuture/ui';
import { educationLevels } from '@applyfuture/utils';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export const EducationLevelsButtons: FC = () => {
    const { t } = useTranslation();

    const educationLevelsButtons = educationLevels.map((educationLevel) => ({
        label: t(`programs:${educationLevel.label}`),
        value: educationLevel.value
    }));

    return (
        <div className="grid gap-8 grid-cols-2">
            {educationLevelsButtons.map((educationLevel) => (
                <div key={educationLevel.value}>
                    <Button>{educationLevel.label}</Button>
                </div>
            ))}
        </div>
    );
};

export default EducationLevelsButtons;
