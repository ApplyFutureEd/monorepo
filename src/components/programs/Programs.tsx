import Container from '@components/core/container/Container';
import Filters from '@components/programs/filters/Filters';
import Row from '@components/programs/row/Row';
import SkeletonRow from '@components/programs/row/SkeletonRow';
import Search from '@components/programs/search/Search';
import SortBy from '@components/programs/sort-by/SortBy';
import {
    SearchableProgramFilterInput,
    SearchableProgramSortInput,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@graphql/API';
import { searchPrograms } from '@graphql/queries';
import { DurationUnit } from '@models';
import { usePageBottom } from '@utils/hooks/usePageBottom';
import { useQuery } from '@utils/hooks/useQuery';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const Programs: FC = () => {
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
            setVariables({
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

    return (
        <Container
            headerComponents={headerComponents}
            innerPadding={false}
            title={t('programs:programs')}>
            {data.searchPrograms?.items?.map((program) => {
                if (!program || !program.school) {
                    return;
                }

                const {
                    city,
                    country,
                    duration,
                    fee,
                    feeCurrency,
                    feeUnit,
                    id,
                    intakes,
                    name,
                    school,
                    slug
                } = program;

                const durationUnit = (program.durationUnit as unknown) as DurationUnit;

                return (
                    <Row
                        key={id}
                        city={city}
                        country={country}
                        duration={duration}
                        durationUnit={durationUnit}
                        fee={fee}
                        feeCurrency={feeCurrency}
                        feeUnit={feeUnit}
                        intakes={intakes}
                        name={name}
                        school={{ logo: school.logo, name: school.name }}
                        slug={slug}
                        onClick={handleClick}
                    />
                );
            })}
            {isLoading && skeletons.map((_skeleton, index) => <SkeletonRow key={index} />)}
        </Container>
    );
};

export default Programs;
