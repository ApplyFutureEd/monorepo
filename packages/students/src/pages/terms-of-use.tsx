import { getPostBySlug, GetPostBySlugQuery } from '@applyfuture/graphql';
import { Post } from '@applyfuture/models';
import { markdown } from '@applyfuture/utils';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { API } from 'aws-amplify';
import { GetStaticProps } from 'next';
import { FC } from 'react';

type Props = {
    post: Post;
};

const TermsOfUsePage: FC<Props> = (props) => {
    const { post } = props;

    return (
        <LandingLayout title={post.title}>
            <div className="max-w-7xl mx-auto py-0 sm:px-6 md:py-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                            __html: markdown({ value: post?.content })
                        }}
                    />
                </div>
            </div>
        </LandingLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data } = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getPostBySlug,
            variables: { slug: 'terms-of-use' }
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

export default TermsOfUsePage;
