import {
    SearchableProgramFilterInput,
    SearchableProgramSortInput,
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
import { Container } from '@applyfuture/ui';
import { usePageBottom, useQuery } from '@applyfuture/utils';
import ApplicationJourneySteps from '@components/common/ApplicationJourneySteps';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Filters from '@components/programs/filters/Filters';
import Row from '@components/programs/row/Row';
import SkeletonRow from '@components/programs/row/SkeletonRow';
import Search from '@components/programs/search/Search';
import SortBy from '@components/programs/sort-by/SortBy';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const ProgramsPage: FC = () => {
    const { t } = useTranslation();
    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({
        filter: {
            published: { eq: true }
        },
        limit: 20
    });
    const { data, fetchMore, isLoading } = useQuery<
        SearchProgramsQuery,
        SearchProgramsQueryVariables
    >(searchPrograms, variables);
    const isPageBottom = usePageBottom();

    useEffect(() => {
        if (!isLoading && isPageBottom && data.searchPrograms?.nextToken) {
            fetchMore(data.searchPrograms?.nextToken);
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

    const total = data.searchPrograms?.total ? `(${data.searchPrograms?.total})` : '';

    return (
        <DashboardLayout
            description={t('programs:meta-description')}
            title={t('programs:page-title')}>
            <ApplicationJourneySteps />
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`${t('programs:programs')} ${total}`}>
                {data.searchPrograms?.items?.map((program) => {
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
                })}
                {isLoading && skeletons.map((_skeleton, index) => <SkeletonRow key={index} />)}
            </Container>
        </DashboardLayout>
    );
};

export default ProgramsPage;
