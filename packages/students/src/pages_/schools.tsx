import {
    SearchableSchoolSortInput,
    searchSchools,
    SearchSchoolsQuery,
    SearchSchoolsQueryVariables
} from '@applyfuture/graphql';
import { Container } from '@applyfuture/ui';
import { useQuery } from '@applyfuture/utils';
import ApplicationJourneySteps from '@components/common/application-journey-steps/ApplicationJourneySteps';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Card from '@components/schools/card/Card';
import SkeletonCard from '@components/schools/card/SkeletonCard';
import Search from '@components/schools/search/Search';
import SortBy from '@components/schools/sort-by/SortBy';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

const SchoolsPage: FC = () => {
    const { t } = useTranslation();
    const [variables, setVariables] = useState<SearchSchoolsQueryVariables>({
        filter: {
            published: { eq: true }
        }
    });

    const { data, isLoading } = useQuery<SearchSchoolsQuery, SearchSchoolsQueryVariables>(
        searchSchools,
        variables
    );

    const handleSearch = (query: string) => {
        if (!query) {
            return setVariables({
                filter: {
                    published: { eq: true }
                }
            });
        }
        setVariables({
            filter: {
                or: [
                    { name: { matchPhrasePrefix: query } },
                    { city: { matchPhrasePrefix: query } },
                    { country: { matchPhrasePrefix: query } }
                ],
                published: { eq: true }
            }
        });
    };

    const handleSort = (sort: SearchableSchoolSortInput) => {
        setVariables((prev: SearchSchoolsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    const headerComponents = [
        <Search key={0} handleSearch={handleSearch} />,
        <SortBy key={2} handleSort={handleSort} />
    ];

    const skeletons = Array.from({ length: 12 }, (_v, k) => k + 1);

    const total = data.searchSchools?.total ? `(${data.searchSchools?.total})` : '';

    return (
        <DashboardLayout
            description={t('schools:meta-description')}
            title={t('schools:page-title')}>
            <ApplicationJourneySteps />
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`${t('schools:schools')} ${total}`}
            />
            <div className="grid gap-5 grid-cols-1 mt-5 sm:grid-cols-3">
                {data.searchSchools?.items?.map((school) => {
                    if (!school) {
                        return;
                    }

                    const { city, country, id, logo, name, slug } = school;

                    return (
                        <Card
                            key={id}
                            city={city}
                            country={country}
                            logo={logo}
                            name={name}
                            slug={slug}
                        />
                    );
                })}
                {isLoading && skeletons.map((_skeleton, index) => <SkeletonCard key={index} />)}
            </div>
        </DashboardLayout>
    );
};

export default SchoolsPage;
