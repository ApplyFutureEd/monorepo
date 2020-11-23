import ForgotPassword from '@components/auth/forgot-password/ForgotPassword';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ForgotPasswordPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout title={t('auth:forgot-password-page-title')}>
            <ForgotPassword />
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
