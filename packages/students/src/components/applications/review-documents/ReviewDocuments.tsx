import { GetApplicationQuery } from '@applyfuture/graphql';
import ReviewDocumentsForm from '@components/forms/applications/review-documents/ReviewDocumentsForm';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
    applicationDocumentUrl: string;
    isLoading: boolean;
};

const ReviewDocuments: FC<Props> = (props) => {
    const { applicationData, applicationDocumentUrl, isLoading } = props;

    const { t } = useTranslation();

    return (
        <div className="w-full bg-white rounded-lg shadow overflow-hidden md:w-2/3">
            <div className="hidden px-4 py-5 border-b border-gray-200 sm:px-6 md:block">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:documents-confirmation')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:documents-confirmation-details')}
                </p>
            </div>

            <div className="px-4 py-5 sm:p-0">
                <dl>
                    <ReviewDocumentsForm
                        applicationData={applicationData}
                        applicationDocumentUrl={applicationDocumentUrl}
                        isLoading={isLoading}
                    />
                </dl>
            </div>
        </div>
    );
};

export default ReviewDocuments;