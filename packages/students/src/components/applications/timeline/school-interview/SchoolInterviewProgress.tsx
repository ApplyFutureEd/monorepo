import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { date } from '@applyfuture/utils';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolInterviewProgress: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    if (!application?.interviewDate) {
        return null;
    }

    return (
        <p className="text-gray-500 text-sm">
            {t('application:timeline-step-school-interview-description', {
                date: date({
                    locale: locale,
                    scheme: 'd LLL yyyy',
                    value: application.interviewDate
                }) as string
            })}
        </p>
    );
};

export default SchoolInterviewProgress;
