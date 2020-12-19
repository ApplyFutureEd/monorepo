import Logo from '@components/core/logo/Logo';
import SignInForm from '@components/forms/sign-in/SignInForm';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { capitalize } from 'lodash';
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
                    {capitalize(t('auth:sign-in-to-your-account'))}
                </h1>

                <div className="max-w mt-2 text-gray-600 text-sm leading-5">
                    {t('auth:or')}{' '}
                    <Link href="/sign-up">
                        <div className="inline hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer cursor-pointer transition duration-150 ease-in-out">
                            {t('auth:create-your-account')}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-8">
                <SignInForm />
            </div>
        </AuthLayout>
    );
};

export default SignInPage;
