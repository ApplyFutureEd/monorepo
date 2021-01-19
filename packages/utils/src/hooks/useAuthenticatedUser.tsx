import Amplify, { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

import config from './../services/aws-exports';

type AuthenticatedUser = {
    attributes: {
        email: string;
    };
    signInUserSession: any;
};

type Props = {
    children: ReactNode;
};

const AuthenticatedUserContext = createContext<AuthenticatedUser | null | undefined>(null);

export const AuthenticatedUserProvider: FC<Props> = (props) => {
    const { children } = props;
    const { pathname } = useRouter();
    const [user, setUser] = useState<AuthenticatedUser | null | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (error) {
                setUser(null);
                Amplify.configure({
                    ...config,
                    aws_appsync_authenticationType: 'API_KEY'
                });
            }
        };
        fetchData();
    }, [pathname]);

    return (
        <AuthenticatedUserContext.Provider value={user}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

export const useAuthenticatedUser = (): AuthenticatedUser | null | undefined =>
    useContext(AuthenticatedUserContext);
