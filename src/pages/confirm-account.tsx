import ConfirmAccount from '@components/auth/confirm-account/ConfirmAccount';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ConfirmAccountPage: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <AuthLayout
            description={t('auth:confirm-account-meta-description')}
            title={t('auth:confirm-account-page-title')}>
            <ConfirmAccount />
        </AuthLayout>
    );
};

export default ConfirmAccountPage;
