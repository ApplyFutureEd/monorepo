import { GetApplicationQuery, GetDocumentByStudentQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Tooltip } from '@applyfuture/ui';
import { currency, date, toast, toShortId } from '@applyfuture/utils';
import { API, Storage } from 'aws-amplify';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    applicationData: GetApplicationQuery;
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
};

const Summary: FC<Props> = (props) => {
    const { applicationData, documentsData, isLoading } = props;
    const application = applicationData.getApplication;
    const documentsStorageKeys =
        documentsData.getDocumentByStudent?.items?.map((document) => document?.storageKey) || [];
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    const currentStep =
        application?.steps?.find((step: any) => step?.status === 'PROGRESS') ||
        application?.steps?.find((step: any) => step?.status === 'ERROR');
    const programId = toShortId(application?.program?.id);
    const studentId = toShortId(application?.student?.id);
    const studentName = kebabCase(
        `${application?.student?.firstName}-${application?.student?.lastName}`
    );
    const applicationDocumentStorageKey = `${studentName}-${programId}-${studentId}-application-document.pdf`;

    const [isSubmitting, setIsSubmitting] = useState(false);

    const generateDocumentsArchive = async () => {
        if (isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);
            const { archive } = await API.post('rest', '/application-archive', {
                body: {
                    application,
                    documents: [...documentsStorageKeys, applicationDocumentStorageKey]
                }
            });
            const storageKey = archive.Key.split('/')[1];
            const file = await Storage.get(storageKey, {
                level: 'public'
            });
            window.open(file as string);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="hidden w-1/3 bg-white rounded-lg shadow overflow-hidden md:block">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:application-information')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    Summary of this application
                </p>
            </div>
            <div className="mb-8 space-y-8">
                <div className="px-4 py-5 sm:p-0">
                    <dl>
                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                Application ID
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    toShortId(application?.id)
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">Step</dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    <>{(currentStep?.label && t(currentStep?.label)) || 'Closed'}</>
                                )}
                            </dd>
                        </div>

                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">Student</dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    `${application?.student?.firstName} ${application?.student?.lastName}`
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:school')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    application?.program?.school?.name
                                )}
                            </dd>
                        </div>
                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:program')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    application?.program?.name
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:campus')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="120px" />
                                ) : (
                                    application?.program?.city
                                )}
                            </dd>
                        </div>
                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:intake')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    date({
                                        scheme: 'LLLL y',
                                        value: application?.intake
                                    })
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <Tooltip
                                content={`${t('application:requested-by', {
                                    school: application?.program?.school?.name as string
                                })}`}>
                                <dt className="text-gray-500 text-sm font-medium leading-5">
                                    {t('application:fee')}
                                </dt>
                            </Tooltip>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="40px" />
                                ) : application?.program?.applicationFee &&
                                  application?.program?.applicationFee > 0 ? (
                                    currency({
                                        currency: application.program?.feeCurrency,
                                        locale: locale,
                                        value: application?.program?.applicationFee
                                    })
                                ) : (
                                    t('programs:free-of-charge')
                                )}
                            </dd>
                        </div>
                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                Documents
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : isSubmitting ? (
                                    <div>Loading ...</div>
                                ) : (
                                    <button
                                        className="hover:text-indigo-500 text-indigo-600 truncate font-medium cursor-pointer"
                                        disabled={isSubmitting}
                                        onClick={generateDocumentsArchive}>
                                        {application?.id &&
                                            `${studentName}-${toShortId(application?.id)}.zip`}
                                    </button>
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Summary;
