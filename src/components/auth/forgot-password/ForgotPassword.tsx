import ForgotPasswordForm from '@components/auth/forgot-password/ForgotPasswordForm';
import Logo from '@components/core/logo/Logo';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ForgotPassword: FC = () => {
    const { t } = useTranslation();

    return (
        <>
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
        </>
    );
};

export default ForgotPassword;
