/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import '@utils/services/amplify';

import { getProgramBySlug, listPrograms } from '@graphql/queries';
import { API, GRAPHQL_AUTH_MODE } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function Program(props: any): any {
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
}

export async function getStaticPaths() {
    try {
        const { data } = await API.graphql({
            query: listPrograms
        });

        const paths = data.listPrograms.items.map((program) => ({
            params: { slug: program.slug }
        }));
        return {
            fallback: true,
            paths
        };
    } catch (error) {
        console.log(error);
        return {
            fallback: true,
            paths: []
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const { slug } = params;
        console.log({ slug });

        const x = await API.graphql({
            authMode: 'API_KEY' as GRAPHQL_AUTH_MODE,
            query: getProgramBySlug,
            variables: { slug }
        });
        console.log({ x });

        return {
            props: {
                program: x
            },
            revalidate: 1
        };
    } catch (error) {
        console.log({ error });
        return {
            props: {},
            revalidate: 1
        };
    }
}
