import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import DecisionLetterProgressForm from '@components/forms/applications/decision-letter/DecisionLetterProgressForm';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const DecisionLetterProgress: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    return (
        <div>
            <p className="text-gray-500 text-sm">
                {t('application:timeline-step-decision-letter-description')}
            </p>
            <div className="mt-4">
                <DecisionLetterProgressForm application={application} />
            </div>
        </div>
    );
};

export default DecisionLetterProgress;
