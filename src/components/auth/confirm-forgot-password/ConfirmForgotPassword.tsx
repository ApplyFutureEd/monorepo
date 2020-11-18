import ConfirmForgotPasswordForm from '@components/auth/confirm-forgot-password/ConfirmForgotPasswordForm';
import Logo from '@components/core/logo/Logo';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ConfirmForgotPassword: FC = () => {
    const { t } = useTranslation(['auth']);

    return (
        <>
            <div>
                <a className="inline-flex" href="/">
                    <Logo />
                </a>
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
