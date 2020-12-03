import Container from '@components/core/container/Container';
import { useQuery } from '@utils/hooks/useQuery';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { SearchProgramsQuery, SearchProgramsQueryVariables } from 'src/graphql/API';
import { searchPrograms } from 'src/graphql/queries';

import ProgramCard from './program-card/ProgramCard';

const Programs: FC = () => {
    const { t } = useTranslation();
    const { data } = useQuery<SearchProgramsQuery, SearchProgramsQueryVariables>(searchPrograms, {
        limit: 20
    });

    return (
        <Container innerPadding={false} title={t('programs:programs')}>
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
                    <ProgramCard
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
                    />
                );
            })}
        </Container>
    );
};

export default Programs;
