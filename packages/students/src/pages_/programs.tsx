import {
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables,
    SearchableProgramFilterInput,
    SearchableProgramSortInput,
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
import { Container } from '@applyfuture/ui';
import { checkCompletion, useAuthenticatedUser, usePageBottom, useQuery } from '@applyfuture/utils';
import ApplicationJourneySteps from '@components/common/application-journey-steps/ApplicationJourneySteps';
import NoResult from '@components/common/no-result/NoResult';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Filters from '@components/programs/filters/Filters';
import ProfileActionPanel from '@components/programs/profile-action-panel/ProfileActionPanel';
import Row from '@components/programs/row/Row';
import SkeletonRow from '@components/programs/row/SkeletonRow';
import Search from '@components/programs/search/Search';
import SignUpActionPanel from '@components/programs/sign-up-action-panel/SignUpActionPanel';
import SortBy from '@components/programs/sort-by/SortBy';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const ProgramsPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data: studentData, isLoading: studentIsLoading } = useQuery<
        GetStudentByEmailQuery,
        GetStudentByEmailQueryVariables
    >(getStudentByEmail, { email: user?.attributes.email });
    const { data: documentsData, isLoading: documentsIsLoading } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;

    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({
        filter: {
            published: { eq: true }
        },
        limit: 20
    });
    const { data: programsData, fetchMore, isLoading: programsIsLoading } = useQuery<
        SearchProgramsQuery,
        SearchProgramsQueryVariables
    >(searchPrograms, variables);
    const isPageBottom = usePageBottom();

    useEffect(() => {
        if (!programsIsLoading && isPageBottom && programsData.searchPrograms?.nextToken) {
            fetchMore(programsData.searchPrograms?.nextToken);
        }
    }, [isPageBottom]);

    const handleSearch = (query: string) => {
        if (!query) {
            return setVariables({
                filter: {
                    published: { eq: true }
                },
                limit: 20
            });
        }
        setVariables({
            filter: {
                or: [
                    { name: { matchPhrasePrefix: query } },
                    { city: { matchPhrasePrefix: query } },
                    { country: { matchPhrasePrefix: query } },
                    { schoolName: { matchPhrasePrefix: query } }
                ],
                published: { eq: true }
            },
            limit: 20
        });
    };

    const handleFilter = (filter: SearchableProgramFilterInput) => {
        setVariables((prev: SearchProgramsQueryVariables) => ({
            ...prev,
            filter
        }));
    };

    const handleSort = (sort: SearchableProgramSortInput) => {
        setVariables((prev: SearchProgramsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    const handleClick = () => {
        console.log('Apply - to be implemented');
    };

    const headerComponents = [
        <Search key={0} handleSearch={handleSearch} />,
        <Filters key={1} handleFilter={handleFilter} />,
        <SortBy key={2} handleSort={handleSort} />
    ];

    const skeletons = Array.from({ length: 12 }, (_v, k) => k + 1);

    const total = programsData.searchPrograms?.total
        ? `(${programsData.searchPrograms?.total})`
        : '';

    const displayProfileActionPanel = Boolean(
        user && !studentIsLoading && !documentsIsLoading && !checkCompletion(student, documents)
    );
    const displaySignUpActionPanel = Boolean(!user && !studentIsLoading && !documentsIsLoading);

    const programs = programsData.searchPrograms?.items;

    const renderPrograms = () => {
        return (
            <>
                {programs && programs?.length > 0 ? (
                    programs?.map((program) => {
                        if (!program || !program.school) {
                            return;
                        }

                        return (
                            <Row
                                key={program.id}
                                program={(program as unknown) as Program}
                                onClick={handleClick}
                            />
                        );
                    })
                ) : (
                    <NoResult />
                )}
            </>
        );
    };

    return (
        <DashboardLayout
            description={t('programs:meta-description')}
            title={t('programs:page-title')}>
            <ApplicationJourneySteps />
            {displayProfileActionPanel && <ProfileActionPanel />}
            {displaySignUpActionPanel && <SignUpActionPanel />}
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`${t('programs:programs')} ${total}`}>
                {programsIsLoading
                    ? skeletons.map((_skeleton, index) => <SkeletonRow key={index} />)
                    : renderPrograms()}
            </Container>
        </DashboardLayout>
    );
};

export default ProgramsPage;
