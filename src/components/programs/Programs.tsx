import Container from '@components/core/container/Container';
import Row from '@components/programs/row/Row';
import { SearchProgramsQuery, SearchProgramsQueryVariables } from '@graphql/API';
import { searchPrograms } from '@graphql/queries';
import { useQuery } from '@utils/hooks/useQuery';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Programs: FC = () => {
    const { t } = useTranslation();
    const { data } = useQuery<SearchProgramsQuery, SearchProgramsQueryVariables>(searchPrograms, {
        limit: 20
    });

    const handleClick = () => {
        console.log('Apply - to be implemented');
    };

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
