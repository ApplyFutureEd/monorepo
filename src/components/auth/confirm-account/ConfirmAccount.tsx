import ConfirmAccountForm from '@components/auth/confirm-account/ConfirmAccountForm';
import Logo from '@components/core/logo/Logo';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ConfirmAccount: FC = () => {
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
                    {t('auth:confirm-your-account')}
                </h1>

                <p className="max-w mt-2 text-gray-600 text-sm leading-5">
                    {t('auth:or')}{' '}
                    <Link href="/sign-in">
                        <span className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                            {t('auth:sign-in-to-your-account')}
                        </span>
                    </Link>
                </p>
            </div>
            <div className="mt-8">
                <ConfirmAccountForm />
            </div>
        </>
    );
};

export default ConfirmAccount;
