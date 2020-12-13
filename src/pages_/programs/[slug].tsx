import '@utils/services/amplify';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { GetProgramBySlugQuery, ListProgramsQuery } from '@graphql/API';
import { getProgramBySlug, listPrograms } from '@graphql/queries';
import { API } from 'aws-amplify';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

type Props = {
    data: GetProgramBySlugQuery;
};

const ProgramPage: FC<Props> = (props) => {
    const router = useRouter();

    console.log({ props });
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>test</h1>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const data = (await API.graphql({
            query: listPrograms
        })) as ListProgramsQuery;

        const paths = data?.listPrograms?.items?.map((program) => ({
            params: { slug: program?.slug || '' }
        }));

        return {
            fallback: true,
            paths: paths || []
        };
    } catch (error) {
        console.log(error);
        return {
            fallback: true,
            paths: []
        };
    }
};

type Params = {
    slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { slug } = params as Params;

        const data = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getProgramBySlug,
            variables: { slug }
        })) as GetProgramBySlugQuery;

        return {
            props: {
                data
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

export default ProgramPage;
