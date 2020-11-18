import ForgotPasswordForm from '@components/auth/forgot-password/ForgotPasswordForm';
import Logo from '@components/core/logo/Logo';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ForgotPassword: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <>
            <div>
                <a className="inline-flex" href="/">
                    <Logo />
                </a>
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
