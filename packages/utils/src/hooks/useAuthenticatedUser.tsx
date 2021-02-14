import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

import { configure } from './../services/amplify';

type AuthenticatedUser = {
    attributes: {
        email: string;
    };
    signInUserSession: {
        accessToken: {
            payload: {
                'cognito:groups': Array<string>;
            };
        };
    };
};

type Props = {
    children: ReactNode;
};

type AuthContext = {
    handleAuth: (user: AuthenticatedUser | null) => void;
    user: AuthenticatedUser | null | undefined;
};

const AuthenticatedUserContext = createContext<AuthContext>({
    handleAuth: () => {
        return 0;
    },
    user: undefined
});

export const AuthenticatedUserProvider: FC<Props> = (props) => {
    const { children } = props;
    const { pathname } = useRouter();
    const [user, setUser] = useState<AuthenticatedUser | null | undefined>();

    const handleAuth = (user: AuthenticatedUser | null) => {
        setUser(user);
        configure(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (error) {
                setUser(null);
                configure(GRAPHQL_AUTH_MODE.API_KEY);
            }
        };
        fetchData();
    }, [pathname]);

    return (
        <AuthenticatedUserContext.Provider value={{ handleAuth, user }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

export const useAuthenticatedUser = (): AuthContext => useContext(AuthenticatedUserContext);
