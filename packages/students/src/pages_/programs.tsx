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
import { Container } from '@applyfuture/ui';
import {
    checkCompletion,
    createFilter,
    useAuthenticatedUser,
    usePageBottom,
    useQuery
} from '@applyfuture/utils';
import ApplicationJourneySteps from '@components/common/application-journey-steps/ApplicationJourneySteps';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Filters from '@components/programs/filters/Filters';
import NoResult from '@components/programs/no-result/NoResult';
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
        filter: createFilter({}),
        limit: 20
    });

    const { data: programsData, fetchMore, isLoading: programsIsLoading } = useQuery<
        SearchProgramsQuery,
        SearchProgramsQueryVariables
    >(searchPrograms, variables);

    const isPageBottom = usePageBottom();

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

    useEffect(() => {
        if (!programsIsLoading && isPageBottom && programsData.searchPrograms?.nextToken) {
            fetchMore(programsData.searchPrograms?.nextToken);
        }
    }, [isPageBottom]);

    useEffect(() => {
        const filter = createFilter({
            educationCountry: student?.educationCountry,
            gradePointAverage: student?.gradePointAverage,
            highestEducationLevel: student?.highestEducationLevel,
            nationality: student?.nationality,
            testCambridgeAdvanced: student?.testCambridgeAdvanced,
            testCambridgeFirst: student?.testCambridgeFirst,
            testCeliCilsItPlida: student?.testCeliCilsItPlida,
            testDele: student?.testDele,
            testDelfdalf: student?.testDelfdalf,
            testGmat: student?.testGmat,
            testGoethe: student?.testGoethe,
            testGre: student?.testGre,
            testIelts: student?.testIelts,
            testTagemage: student?.testTagemage,
            testTcftef: student?.testTcftef,
            testToefl: student?.testToefl,
            testToeic: student?.testToeic
        });
        handleFilter(filter);
    }, [student]);

    const headerComponents = [
        <Search key={0} handleSearch={handleSearch} />,
        <Filters key={1} handleFilter={handleFilter} studentData={studentData} />,
        <SortBy key={2} handleSort={handleSort} />
    ];

    const skeletons = Array.from({ length: 12 }, (_v, k) => k + 1);

    const total = programsData.searchPrograms?.total
        ? `(${programsData.searchPrograms?.total})`
        : '';

    const {
        generalInformation,
        educationHistory,
        testScores,
        backgroundInformation,
        uploadDocuments
    } = checkCompletion(student, documents);

    const isCompleted =
        generalInformation &&
        educationHistory &&
        testScores &&
        backgroundInformation &&
        uploadDocuments;

    const displayProfileActionPanel = Boolean(
        user && !studentIsLoading && !documentsIsLoading && !isCompleted
    );
    const displaySignUpActionPanel = Boolean(!user && !studentIsLoading && !documentsIsLoading);

    const programs = programsData.searchPrograms?.items;

    const renderPrograms = () => {
        if (programsIsLoading && !programs) {
            return skeletons.map((_skeleton, index) => <SkeletonRow key={index} />);
        }

        if (!programsIsLoading && programs && programs?.length === 0) {
            return <NoResult variables={variables} />;
        }

        if (programs && programs?.length > 0) {
            return (
                <>
                    {programs?.map((program) => (
                        <Row
                            key={program?.id}
                            documents={documents}
                            program={program}
                            student={student}
                        />
                    ))}
                    {programsIsLoading &&
                        skeletons.map((_skeleton, index) => <SkeletonRow key={index} />)}
                </>
            );
        }
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
                {renderPrograms()}
            </Container>
        </DashboardLayout>
    );
};

export default ProgramsPage;
