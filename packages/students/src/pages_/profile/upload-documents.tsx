import Banner from '@applyfuture/ui/src/banner/Banner';
import { withPrivateAccess } from '@applyfuture/utils';
import UploadDocumentsForm from '@components/forms/upload-documents/UploadDocumentsForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const UploadDocumentPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:upload-documents-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <UploadDocumentsForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(UploadDocumentPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
