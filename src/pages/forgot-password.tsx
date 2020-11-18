import ForgotPassword from '@components/auth/forgot-password/ForgotPassword';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <AuthLayout
            description={t('auth:forgot-password-meta-description')}
            title={t('auth:forgot-password-page-title')}>
            <ForgotPassword />
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
