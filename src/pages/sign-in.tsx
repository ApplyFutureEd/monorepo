import SignIn from '@components/auth/sign-in/SignIn';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SignInPage: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <AuthLayout
            description={t('auth:sign-in-meta-description')}
            title={t('auth:sign-in-page-title')}>
            <SignIn />
        </AuthLayout>
    );
};

export default SignInPage;
