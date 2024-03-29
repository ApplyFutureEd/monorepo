import { DataTypeProvider } from '@devexpress/dx-react-grid';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export const StepFormatter: FC<DataTypeProvider.ValueFormatterProps> = (props) => {
    const { t } = useTranslation();
    const { value: steps } = props;

    const currentStep =
        steps.find((step: any) => step?.status === 'PROGRESS') ||
        steps.find((step: any) => step?.status === 'ERROR');

    return <>{(currentStep?.label && t(currentStep?.label)) || 'Closed'}</>;
};

export default StepFormatter;
