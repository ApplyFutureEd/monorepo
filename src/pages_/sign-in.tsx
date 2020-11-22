import SignIn from '@components/auth/sign-in/SignIn';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SignInPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout
            description={t('auth:sign-in-meta-description')}
            title={t('auth:sign-in-page-title')}>
            <SignIn />
        </AuthLayout>
    );
};

export default SignInPage;
