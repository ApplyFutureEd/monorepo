import {
    createSearchAlert,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { graphql, toast, useAuthenticatedUser, useQuery } from '@applyfuture/utils';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'next-translate';
import React, { FC } from 'react';

type Props = {
    query: string;
};

const NoResult: FC<Props> = (props) => {
    const { query } = props;
    console.log(
        '%cquery :',
        'background: #444; color: #bada55; padding: 2px; border-radius:2px',
        query
    );
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data: studentData } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    const handleClick = async (query: string) => {
        const newSearchAlert = {
            lastUpdate: new Date().valueOf(),
            query: query,
            studentId: studentData.getStudentByEmail?.items?.[0]?.id,
            type: 'Programs'
        };
        await graphql(createSearchAlert, {
            input: newSearchAlert
        });
        toast({
            description: `${t('programs:search-alert-created')}`,
            title: 'Alert Created',
            variant: 'success'
        });
    };

    return (
        <div className="sm:px-6 sm:py-5">
            <div className="bg-white">
                <div className="mx-auto px-4 py-12 max-w-screen-xl text-center sm:px-6 lg:px-32 lg:py-16">
                    <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                        {t('programs:no-results-heading')}
                    </h2>
                    <p className="mt-8">
                        {t('programs:no-results-paragraph-1')}
                        <br />
                        {t('programs:no-results-paragraph-2')}
                    </p>
                    <div className="flex justify-center mt-8">
                        <Button
                            startIcon={faBell}
                            type="button"
                            variant="primary"
                            onClick={() => handleClick(query)}>
                            {t('programs:no-results-cta')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoResult;
