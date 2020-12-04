import Container from '@components/core/container/Container';
import Row from '@components/programs/row/Row';
import Search from '@components/programs/search/Search';
import SortBy from '@components/programs/sort-by/SortBy';
import {
    SearchableProgramFilterInput,
    SearchableProgramSortInput,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@graphql/API';
import { searchPrograms } from '@graphql/queries';
import { useQuery } from '@utils/hooks/useQuery';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

import Filters from './filters/Filters';

const Programs: FC = () => {
    const { t } = useTranslation();
    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({ limit: 20 });
    const { data } = useQuery<SearchProgramsQuery, SearchProgramsQueryVariables>(
        searchPrograms,
        variables
    );

    const handleSearch = (query: string) => {
        setVariables({
            filter: {
                or: [
                    { name: { matchPhrasePrefix: query } },
                    { city: { matchPhrasePrefix: query } },
                    { country: { matchPhrasePrefix: query } },
                    { schoolName: { matchPhrasePrefix: query } }
                ],
                published: { eq: true }
            }
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
                    durationUnit,
                    fee,
                    feeCurrency,
                    feeUnit,
                    id,
                    intakes,
                    name,
                    school,
                    slug
                } = program;

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
        </Container>
    );
};

export default Programs;
