import SignIn from '@components/auth/sign-in/SignIn';
import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { FC } from 'react';

const SignInPage: FC = () => (
    <AuthLayout title="Sign in">
        <SignIn />
    </AuthLayout>
);

export default SignInPage;
