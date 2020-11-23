import ConfirmForgotPasswordForm from '@components/auth/confirm-forgot-password/ConfirmForgotPasswordForm';
import Logo from '@components/core/logo/Logo';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ConfirmForgotPassword: FC = () => {
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
                    {t('auth:choose-a-new-password')}
                </h1>
            </div>
            <div className="mt-8">
                <ConfirmForgotPasswordForm />
            </div>
        </>
    );
};

export default ConfirmForgotPassword;
