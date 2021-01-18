import { Logo } from '@applyfuture/ui';
import SignInForm from '@components/forms/sign-in/SignInForm';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const SignInPage: FC = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout title={t('auth:sign-in-page-title')}>
            <div>
                <Link href="/">
                    <div className="inline-flex cursor-pointer">
                        <Logo />
                    </div>
                </Link>
                <h1 className="mt-6 text-gray-900 text-3xl font-extrabold leading-9">
                    Sign in to your account
                </h1>
            </div>
            <div className="mt-8">
                <SignInForm />
            </div>
        </AuthLayout>
    );
};

export default SignInPage;
