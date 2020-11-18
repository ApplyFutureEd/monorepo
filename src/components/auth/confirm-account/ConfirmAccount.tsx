import ConfirmAccountForm from '@components/auth/confirm-account/ConfirmAccountForm';
import Logo from '@components/core/logo/Logo';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ConfirmAccount: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <>
            <div>
                <a className="inline-flex" href="/">
                    <Logo />
                </a>
                <h1 className="mt-6 text-gray-900 text-3xl font-extrabold leading-9">
                    {t('auth:confirm-your-account')}
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
                <ConfirmAccountForm />
            </div>
        </>
    );
};

export default ConfirmAccount;
