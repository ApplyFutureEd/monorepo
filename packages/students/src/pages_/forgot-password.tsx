import { Logo } from '@applyfuture/ui';
import ForgotPasswordForm from '@components/forms/auth/forgot-password/ForgotPasswordForm';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const ForgotPasswordPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout title={t('auth:forgot-password-page-title')}>
            <div>
                <Link href="/">
                    <div className="inline-flex cursor-pointer">
                        <Logo />
                    </div>
                </Link>
                <h1 className="mt-6 text-gray-900 text-3xl font-extrabold leading-9">
                    {t('auth:forgot-password')}
                </h1>
            </div>
            <div className="mt-8">
                <ForgotPasswordForm />
            </div>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
