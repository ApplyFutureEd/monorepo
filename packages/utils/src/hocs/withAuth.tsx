import React from 'react';

import { useAuthenticatedUser } from '../hooks/useAuthenticatedUser';

export const withAuth = (Component: any): any => {
    const WithAuth = () => {
        const user = useAuthenticatedUser();

        console.log(user);

        return <Component />;
    };

    return WithAuth;
};
