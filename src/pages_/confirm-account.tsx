import ConfirmAccount from '@components/auth/confirm-account/ConfirmAccount';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ConfirmAccountPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout
            description={t('auth:confirm-account-meta-description')}
            title={t('auth:confirm-account-page-title')}>
            <ConfirmAccount />
        </AuthLayout>
    );
};

export default ConfirmAccountPage;
