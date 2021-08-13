import { Logo } from '@applyfuture/ui';
import logo from '@assets/images/logo.png';
import ConfirmForgotPasswordForm from '@components/forms/auth/confirm-forgot-password/ConfirmForgotPasswordForm';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ConfirmForgotPasswordPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout title={t('auth:confirm-forgot-password-page-title')}>
            <div>
                <Link href="/">
                    <div className="inline-flex cursor-pointer">
                        <Logo src={logo} />
                    </div>
                </Link>
                <h1 className="mt-6 text-gray-900 text-3xl font-extrabold leading-9">
                    {t('auth:choose-a-new-password')}
                </h1>
            </div>
            <div className="mt-8">
                <ConfirmForgotPasswordForm />
            </div>
        </AuthLayout>
    );
};

export default ConfirmForgotPasswordPage;