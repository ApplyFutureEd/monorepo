import '@utils/services/amplify';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Button from '@components/core/button/Button';
import Container from '@components/core/container/Container';
import Cover from '@components/core/cover/Cover';
import SubHeader from '@components/core/sub-header/SubHeader';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Indicators from '@components/programs/indicators/Indicators';
import { faHeart } from '@fortawesome/pro-light-svg-icons';
import {
    faMapMarkerAlt,
    faPortrait,
    faUniversity as faUniversitySolid
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetProgramBySlugQuery, ListProgramsQuery } from '@graphql/API';
import { getProgramBySlug, listPrograms } from '@graphql/queries';
import { countries } from '@utils/forms/countries';
import { markdown } from '@utils/helpers/markdown';
import { API } from 'aws-amplify';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    program: any;
};

const ProgramPage: FC<Props> = (props) => {
    const program = props.program?.data?.getProgramBySlug?.items?.[0];

    const { t } = useTranslation();
    const country = countries.find((c) => c.value === program?.country)?.label || '';
    const router = useRouter();

    console.log(program);

    console.log({ props });
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <DashboardLayout description="" title="">
            <Cover
                alt={''}
                src={`${process.env.ASSETS_CDN_URL}/${program?.school?.coverPhoto}` || ''}
            />
            <SubHeader
                actions={
                    <>
                        <Button startIcon={faHeart} type="button" variant="secondary">
                            {t('programs:favorite')}
                        </Button>
                        <Button type="button" variant="primary">
                            {t('programs:apply')}
                        </Button>
                    </>
                }
                src={`${process.env.ASSETS_CDN_URL}/${program?.school?.logo}` || ''}
                subtitle={
                    <>
                        <Link href={`/schools/${program?.school?.slug}`}>
                            <div className="flex items-baseline hover:text-indigo-500 space-x-1">
                                <FontAwesomeIcon icon={faUniversitySolid} />
                                <div>{program?.school?.name}</div>
                            </div>
                        </Link>
                        <div className="flex items-baseline space-x-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <div>
                                {program?.city}, {t(`common:${country}`)}
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-1">
                            <FontAwesomeIcon icon={faPortrait} />
                            <div>
                                {t('programs:program-id')}: {program?.id?.slice(0, 6).toUpperCase()}
                            </div>
                        </div>
                    </>
                }
                title={program.name}
            />
            <Indicators program={program} />
            <Container title={t('programs:program-description')}>
                <div
                    className="markdown"
                    dangerouslySetInnerHTML={{
                        __html: markdown({ value: program?.description })
                    }}
                />
            </Container>
        </DashboardLayout>
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
                program: data
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
