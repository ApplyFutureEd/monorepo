import intersection from 'lodash/intersection';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { isClientRender } from '../helpers/ssr';
import { useAuthenticatedUser } from '../hooks/useAuthenticatedUser';

type WithPrivateAccessOptions = {
    /**
     * Groups of users allowed to access the page.
     */
    groups: Array<string>;
    /**
     * Redirection path if not allowed
     */
    redirection: string;
};

type PrivatePageProps = {
    isStaticExport?: boolean;
};

export const withPrivateAccess = (
    Page: NextPage,
    options: WithPrivateAccessOptions
): FC<PrivatePageProps> => {
    const PrivatePage: NextPage<PrivatePageProps> = (props) => {
        const { isStaticExport } = props;
        const { user } = useAuthenticatedUser();
        const router = useRouter();
        const [isAllowedState, setAllowedState] = useState(false);

        useEffect(() => {
            const checkAccess = async () => {
                if (user === undefined) {
                    return;
                }
                const isAllowed =
                    intersection(
                        options.groups,
                        user?.signInUserSession.accessToken.payload['cognito:groups']
                    ).length > 0;

                if (!isAllowed) {
                    router.push(options.redirection + `?from=${router.asPath}`);
                } else {
                    setAllowedState(true);
                }
            };
            checkAccess();
        }, [user, router]);

        if (isStaticExport && !isClientRender()) {
            return <></>;
        } else if (isClientRender() && !isAllowedState) {
            return <div>Loading...</div>;
        }

        return (
            <>
                <Page {...props} />
            </>
        );
    };

    return PrivatePage;
};
