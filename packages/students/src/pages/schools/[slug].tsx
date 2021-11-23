import {
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getProgramBySchool,
    GetProgramBySchoolQuery,
    getSchoolBySlug,
    GetSchoolBySlugQuery,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables,
    listSchools,
    ListSchoolsQuery
} from '@applyfuture/graphql';
import { BreadcrumbsNavigation, Container, Cover, SubHeader } from '@applyfuture/ui';
import { getCountryLabel, markdown, useAuthenticatedUser, useQuery } from '@applyfuture/utils';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Row from '@components/programs/row/Row';
import Indicators from '@components/schools/indicators/Indicators';
import { faMapMarkerAlt, faPortrait } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from 'aws-amplify';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    programs: NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>;
    school: NonNullable<NonNullable<GetSchoolBySlugQuery['getSchoolBySlug']>['items']>[0];
};

const SchoolPage: FC<Props> = (props) => {
    const { programs, school } = props;

    const router = useRouter();
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();

    const { data: studentData } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    const { data: documentsData } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });

    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;

    if (router.isFallback || !school) {
        return <div>Loading...</div>;
    }

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

    const bachelors = programs
        ?.filter((program) => program?.published)
        .filter((program) => program?.degree === 'BACHELOR');

    const masters = programs
        ?.filter((program) => program?.published)
        .filter((program) => program?.degree === 'MASTER');

    const doctorates = programs
        ?.filter((program) => program?.published)
        .filter((program) => program?.degree === 'DOCTORATE');

    const certificates = programs
        ?.filter((program) => program?.published)
        .filter((program) => program?.degree === 'CERTIFICATE');

    const breadcrumbsItems = [
        { label: t('schools:schools'), link: '/schools' },
        { label: school.name, link: `/schools/${school.slug}` }
    ];

    return (
        <>
            <DashboardLayout title={school.name}>
                <div className="space-y-6">
                    <div>
                        <BreadcrumbsNavigation items={breadcrumbsItems} />
                        <Cover
                            alt={''}
                            src={`${process.env.ASSETS_CDN_URL}/${school?.coverPhoto}` || ''}
                        />
                        <SubHeader
                            src={`${process.env.ASSETS_CDN_URL}/${school?.logo}` || ''}
                            subtitleComponents={subtitleComponents}
                            title={school.name}
                        />
                        <Indicators programs={programs} school={school} />
                    </div>
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

                    {bachelors.length > 0 && (
                        <Container innerPadding={false} title={t('schools:bachelors-programs')}>
                            {bachelors.map((bachelor) => (
                                <Row
                                    key={bachelor?.id}
                                    documents={documents}
                                    program={bachelor}
                                    student={student}
                                />
                            ))}
                        </Container>
                    )}

                    {masters.length > 0 && (
                        <Container innerPadding={false} title={t('schools:masters-programs')}>
                            {masters.map((master) => (
                                <Row
                                    key={master?.id}
                                    documents={documents}
                                    program={master}
                                    student={student}
                                />
                            ))}
                        </Container>
                    )}

                    {doctorates.length > 0 && (
                        <Container innerPadding={false} title={t('schools:doctorates-programs')}>
                            {doctorates.map((doctorate) => (
                                <Row
                                    key={doctorate?.id}
                                    documents={documents}
                                    program={doctorate}
                                    student={student}
                                />
                            ))}
                        </Container>
                    )}

                    {certificates.length > 0 && (
                        <Container innerPadding={false} title={t('schools:certificates-programs')}>
                            {certificates.map((certificate) => (
                                <Row
                                    key={certificate?.id}
                                    documents={documents}
                                    program={certificate}
                                    student={student}
                                />
                            ))}
                        </Container>
                    )}
                </div>
            </DashboardLayout>
        </>
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

        const { data: programsData } = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getProgramBySchool,
            variables: { schoolId: school?.id }
        })) as GraphQLResult<GetProgramBySchoolQuery>;

        const programs = programsData?.getProgramBySchool?.items || null;

        return {
            props: {
                programs,
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
