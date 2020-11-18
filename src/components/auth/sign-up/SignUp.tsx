import SignUpForm from '@components/auth/sign-up/SignUpForm';
import Logo from '@components/core/logo/Logo';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SignUp: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <>
            <div>
                <a className="inline-flex" href="/">
                    <Logo />
                </a>
                <h1 className="mt-6 text-gray-900 text-3xl font-extrabold leading-9">
                    {capitalize(t('auth:create-your-account'))}
                </h1>

                <p className="max-w mt-2 text-gray-600 text-sm leading-5">
                    {t('auth:or')}{' '}
                    <a
                        className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out"
                        href="/sign-in">
                        {t('auth:sign-in-to-your-account')}
                    </a>
                </p>
            </div>
            <div className="mt-8">
                <SignUpForm />
            </div>
            <div className="max-w mt-6 text-gray-600 text-sm leading-5">
                {t('auth:legal-notice')}{' '}
                <a
                    className="underline"
                    href="/terms-and-conditions"
                    rel="noopener noreferrer"
                    target="_blank">
                    {t('auth:terms-and-conditions')}
                </a>
                ,{' '}
                <a
                    className="underline"
                    href="/privacy-policy"
                    rel="noopener noreferrer"
                    target="_blank">
                    {t('auth:privacy-policy')}
                </a>{' '}
                {t('auth:and')}{' '}
                <a
                    className="underline"
                    href="/terms-of-use"
                    rel="noopener noreferrer"
                    target="_blank">
                    {t('auth:terms-of-use')}
                </a>
            </div>
        </>
    );
};

export default SignUp;
