import { Button } from '@applyfuture/ui';
import { disciplines } from '@applyfuture/utils';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export const DisciplinesButtons: FC = () => {
    const { t } = useTranslation();

    const disciplinesButtons = disciplines.map((disciplinebutton) => ({
        label: t(`programs:${disciplinebutton.label}`),
        value: disciplinebutton.value
    }));

    return (
        <div className="grid gap-8 grid-cols-2">
            {disciplinesButtons.map((disciplinebutton) => (
                <div key={disciplinebutton.value}>
                    <Button>{disciplinebutton.label}</Button>
                </div>
            ))}
        </div>
    );
};

export default DisciplinesButtons;
