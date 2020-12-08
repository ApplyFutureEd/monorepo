import Amplify, { Auth } from 'aws-amplify';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

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
            } catch (error) {
                console.log(error);
                Amplify.configure({
                    aws_appsync_authenticationType: 'API_KEY'
                });
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
