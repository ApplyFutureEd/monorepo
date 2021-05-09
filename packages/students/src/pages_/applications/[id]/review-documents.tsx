import { getApplication, GetApplicationQuery } from '@applyfuture/graphql';
import { Stepper } from '@applyfuture/ui';
import { getStepsLabels, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ReviewDocuments from '@components/applications/review-documents/ReviewDocuments';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { API, Storage } from 'aws-amplify';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const ReviewDocumentsPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [applicationDocumentUrl, setApplicationDocumentUrl] = useState<string>('');
    const [isLoadingApplicationDocumentUrl, setIsLoadingApplicationDocumentUrl] = useState<boolean>(
        true
    );

    const {
        data: applicationData,
        isLoading: applicationIsLoading
    } = useQuery<GetApplicationQuery>(getApplication, {
        id: router.query.id
    });

    useEffect(() => {
        const fetchApplicationDocument = async () => {
            const { storageKey } = await API.post('rest', '/application-document', {
                body: { application: applicationData.getApplication }
            });
            const url = await Storage.get(storageKey, {
                level: 'public'
            });
            console.log(url);
            setApplicationDocumentUrl(url.toString());
            setIsLoadingApplicationDocumentUrl(false);
        };
        if (applicationData?.getApplication?.id) {
            fetchApplicationDocument();
        }
    }, [applicationData]);

    const isLoading = applicationIsLoading || isLoadingApplicationDocumentUrl;
    const steps = getStepsLabels(applicationData.getApplication);

    return (
        <>
            <DashboardLayout title={t('application:page-title')}>
                <div className="mb-4">
                    <Stepper currentStep={1} isLoading={isLoading} steps={steps} />
                </div>
                <div className="flex items-start space-x-0 md:space-x-2">
                    <Summary applicationData={applicationData} isLoading={isLoading} />
                    <ReviewDocuments
                        applicationData={applicationData}
                        applicationDocumentUrl={applicationDocumentUrl}
                        isLoading={isLoading}
                    />
                </div>
            </DashboardLayout>
        </>
    );
};

export default withPrivateAccess(ReviewDocumentsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
