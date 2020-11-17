import SignUp from '@components/auth/sign-up/SignUp';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SignUpPage: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <AuthLayout
            description={t('auth:sign-up-meta-description')}
            title={t('auth:sign-up-page-title')}>
            <SignUp />
        </AuthLayout>
    );
};

export default SignUpPage;
