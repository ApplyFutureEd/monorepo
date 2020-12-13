import Amplify, { Auth } from 'aws-amplify';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

import config from './../../aws-exports';

type AuthenticatedUser = {
    attributes: {
        email: string;
    };
};

type Props = {
    children: ReactNode;
};

const AuthenticatedUserContext = createContext<AuthenticatedUser | null>(null);

export const AuthenticatedUserProvider: FC<Props> = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
                console.log('current session:', await Auth.currentSession());

                console.log({ user });
            } catch (error) {
                Amplify.configure({
                    ...config,
                    aws_appsync_authenticationType: 'API_KEY'
                });
                console.log('current session:', await Auth.currentSession());
                console.log('auth provider', { error });
            }
        };
        fetchData();
    }, []);

    return (
        <AuthenticatedUserContext.Provider value={user}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

const useAuthenticatedUser = (): AuthenticatedUser | null => useContext(AuthenticatedUserContext);

export default useAuthenticatedUser;
