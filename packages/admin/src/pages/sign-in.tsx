import { Logo } from '@applyfuture/ui';
import logo from '@assets/images/logo.png';
import SignInForm from '@components/forms/sign-in/SignInForm';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import Link from 'next/link';
import { FC } from 'react';

const SignInPage: FC = () => {
    return (
        <AuthLayout title="Sign in">
            <div>
                <Link href="/">
                    <div className="inline-flex cursor-pointer">
                        <Logo src={logo} />
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
