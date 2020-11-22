import ConfirmForgotPassword from '@components/auth/confirm-forgot-password/ConfirmForgotPassword';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ConfirmForgotPasswordPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout
            description={t('auth:confirm-forgot-password-meta-description')}
            title={t('auth:confirm-forgot-password-page-title')}>
            <ConfirmForgotPassword />
        </AuthLayout>
    );
};

export default ConfirmForgotPasswordPage;
