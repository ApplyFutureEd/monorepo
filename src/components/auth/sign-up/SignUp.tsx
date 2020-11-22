import SignUpForm from '@components/auth/sign-up/SignUpForm';
import Logo from '@components/core/logo/Logo';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SignUp: FC = () => {
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
                    {capitalize(t('auth:create-your-account'))}
                </h1>

                <p className="max-w mt-2 text-gray-600 text-sm leading-5">
                    {t('auth:or')}{' '}
                    <Link href="/sign-in">
                        <div className="inline hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer cursor-pointer cursor-pointer cursor-pointer transition duration-150 ease-in-out">
                            {t('auth:sign-in-to-your-account')}
                        </div>
                    </Link>
                </p>
            </div>
            <div className="mt-8">
                <SignUpForm />
            </div>
            <div className="max-w mt-6 text-gray-600 text-sm leading-5">
                {t('auth:legal-notice')}{' '}
                <Link href="/terms-and-conditions">
                    <span className="underline cursor-pointer">
                        {t('auth:terms-and-conditions')}
                    </span>
                </Link>
                ,{' '}
                <Link href="/privacy-policy">
                    <span className="underline cursor-pointer">{t('auth:privacy-policy')}</span>
                </Link>{' '}
                {t('auth:and')}{' '}
                <Link href="/terms-of-use">
                    <span className="underline cursor-pointer">{t('auth:terms-of-use')}</span>
                </Link>
            </div>
        </>
    );
};

export default SignUp;
