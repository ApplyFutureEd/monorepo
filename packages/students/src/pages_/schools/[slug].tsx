import '@applyfuture/utils/src/services/amplify';

import {
    getSchoolBySlug,
    GetSchoolBySlugQuery,
    listSchools,
    ListSchoolsQuery
} from '@applyfuture/graphql';
import { School } from '@applyfuture/models';
import { Container, Cover, SubHeader } from '@applyfuture/ui';
import { Button } from '@applyfuture/ui';
import { getCountryLabel, markdown } from '@applyfuture/utils';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Indicators from '@components/schools/indicators/Indicators';
import { faHeart } from '@fortawesome/pro-light-svg-icons';
import { faMapMarkerAlt, faPortrait } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from 'aws-amplify';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    school: School;
};

const SchoolPage: FC<Props> = (props) => {
    const { school } = props;

    const router = useRouter();
    const { t } = useTranslation();

    if (router.isFallback || !school) {
        return <div>Loading...</div>;
    }

    const actionComponents = [
        <Button key={0} startIcon={faHeart} type="button" variant="secondary">
            {t('schools:favorite')}
        </Button>
    ];

    const subtitleComponents = [
        <div key={0} className="flex items-baseline space-x-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
                {school?.city}, {t(`common:${getCountryLabel(school?.country)}`)}
            </div>
        </div>,
        <div key={1} className="flex items-baseline space-x-1">
            <FontAwesomeIcon icon={faPortrait} />
            <div>
                {t('schools:school-id')}: {school?.id?.slice(0, 6).toUpperCase()}
            </div>
        </div>
    ];

    return (
        <DashboardLayout description="" title="">
            <Cover alt={''} src={`${process.env.ASSETS_CDN_URL}/${school?.coverPhoto}` || ''} />
            <SubHeader
                actionComponents={actionComponents}
                src={`${process.env.ASSETS_CDN_URL}/${school?.logo}` || ''}
                subtitleComponents={subtitleComponents}
                title={school.name}
            />
            <Indicators school={school} />
            <div className="space-y-6">
                <Container title={t('schools:about')}>
                    {school?.description && (
                        <div
                            className="markdown"
                            dangerouslySetInnerHTML={{
                                __html: markdown({ value: school?.description })
                            }}
                        />
                    )}
                </Container>
            </div>
        </DashboardLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const data = (await API.graphql({
            query: listSchools
        })) as ListSchoolsQuery;

        const paths = data?.listSchools?.items?.map((program) => ({
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

        const { data: schoolData } = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getSchoolBySlug,
            variables: { slug }
        })) as GraphQLResult<GetSchoolBySlugQuery>;

        const school = schoolData?.getSchoolBySlug?.items?.[0] || null;

        return {
            props: {
                school
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

export default SchoolPage;
