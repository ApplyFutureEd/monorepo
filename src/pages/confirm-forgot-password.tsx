import ConfirmForgotPassword from '@components/auth/confirm-forgot-password/ConfirmForgotPassword';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ConfirmForgotPasswordPage: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <AuthLayout
            description={t('auth:confirm-forgot-password-meta-description')}
            title={t('auth:confirm-forgot-password-page-title')}>
            <ConfirmForgotPassword />
        </AuthLayout>
    );
};

export default ConfirmForgotPasswordPage;
