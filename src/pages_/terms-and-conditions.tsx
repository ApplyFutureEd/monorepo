import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { GetPostBySlugQuery } from '@graphql/API';
import { getPostBySlug } from '@graphql/queries';
import { API } from 'aws-amplify';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { Post } from 'src/models';

type Props = {
    post: Post;
};

const TermsAndConditionsPage: FC<Props> = (props) => {
    const { post } = props;

    return (
        <LandingLayout description={''} title={''}>
            {' '}
        </LandingLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data } = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getPostBySlug,
            variables: { slug: 'terms-and-conditions' }
        })) as GraphQLResult<GetPostBySlugQuery>;
        const post = data?.getPostBySlug?.items?.[0] || null;

        return {
            props: {
                post
            },
            revalidate: 1
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
            revalidate: 1
        };
    }
};

export default TermsAndConditionsPage;
