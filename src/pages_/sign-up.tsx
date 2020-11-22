import SignUp from '@components/auth/sign-up/SignUp';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SignUpPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout
            description={t('auth:sign-up-meta-description')}
            title={t('auth:sign-up-page-title')}>
            <SignUp />
        </AuthLayout>
    );
};

export default SignUpPage;
