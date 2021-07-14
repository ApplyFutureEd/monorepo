import { GetApplicationQuery } from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
};

const Submission: FC<Props> = (props) => {
    const { applicationData } = props;
    const application = applicationData.getApplication;

    const { t } = useTranslation();

    return (
        <div className="w-full bg-white rounded-lg shadow overflow-hidden md:w-2/3">
            <div className="hidden px-4 py-5 border-b border-gray-200 sm:px-6 md:block">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:application-submitted-title')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:application-submitted-details')}
                </p>
            </div>

            <div className="px-4 py-5 sm:p-0">
                <dl>
                    <div className="sm:px-6 sm:py-3">
                        <div className="bg-white">
                            <div className="mx-auto px-4 py-5 max-w-screen-xl text-center sm:px-6 lg:px-16">
                                <div className="flex justify-center">
                                    <img
                                        alt={t(
                                            'application:application-submitted-illustration-alt'
                                        )}
                                        className="h-36"
                                        src="/assets/images/application/submission.svg"
                                    />
                                </div>
                                <h2 className="leading-2 mt-6 text-gray-900 text-lg font-extrabold tracking-tight sm:text-xl sm:leading-10">
                                    {t('application:thanks-for-confirming-your-application')}
                                </h2>
                                <span className="mt-6">
                                    {t('application:will-check-your-documents')}
                                </span>
                                <span>{t('application:will-receive-an-email')}</span>
                                <div className="flex justify-center mt-6 md:mt-4">
                                    <Link
                                        href={`/applications?id=${application?.id}&step=internal-review`}>
                                        <Button variant="primary">
                                            {t('application:follow-my-application')}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Submission;
