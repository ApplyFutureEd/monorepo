import {
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { createFilter, useLocalStorage, useQuery } from '@applyfuture/utils';
import CardCarousel from '@components/onboarding/card-carousel/CardCarousel';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const Onboarding: FC = () => {
    const { t } = useTranslation();
    const [onboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const { data: programsData, isLoading: programsIsLoading } = useQuery<
        SearchProgramsQuery,
        SearchProgramsQueryVariables
    >(searchPrograms, {
        ...createFilter({
            countries: [onboarding.country],
            degrees: [onboarding.degree],
            displines: [onboarding.discipline],
            highestEducationLevel: onboarding.highestEducationLevel
        }),
        limit: 5
    });

    const programs = programsData?.searchPrograms?.items;

    const programs2 = [
        {
            country: 'Arnhern, Pays-Bas',
            date: 'août 2021',
            id: 'A',
            logo:
                'https://d3tha54df2p0si.cloudfront.net/eyJidWNrZXQiOiJzdHVkZW50czI2ZjQ4Njk2OGIwNjQ1MWU4Y2U2ZWIwNjBmMzcxMTRhMTQ3MjItZGV2Iiwia2V5IjoicHVibGljL2ZkMTU0MDJmLTc0MjgtNDhiYS04Y2I3LWI5YzdjYTc5YTgyMyIsImVkaXRzIjp7InNoYXJwZW4iOnRydWV9fQ==',
            name: 'Master (Bac +4) en Ingénierie Système',
            price: '8 798 €',
            start: 'Prochaine rentrée',
            time: '1 an et 6 mois, à plein temps.',
            title: 'Han Université des Sciences Appliqués',
            year: 'Frais annuels'
        },
        {
            country: 'Arnhern, Pays-Bas',
            date: 'août 2021',
            id: 'B',
            logo:
                'https://d3tha54df2p0si.cloudfront.net/eyJidWNrZXQiOiJzdHVkZW50czI2ZjQ4Njk2OGIwNjQ1MWU4Y2U2ZWIwNjBmMzcxMTRhMTQ3MjItZGV2Iiwia2V5IjoicHVibGljL2ZkMTU0MDJmLTc0MjgtNDhiYS04Y2I3LWI5YzdjYTc5YTgyMyIsImVkaXRzIjp7InNoYXJwZW4iOnRydWV9fQ==',
            name: 'Master (Bac +4) en Ingénierie Système',
            price: '8 798 €',
            start: 'Prochaine rentrée',
            time: '1 an et 6 mois, à plein temps.',
            title: 'University of Twente (UT)',
            year: 'Frais annuels'
        },
        {
            country: 'Arnhern, Pays-Bas',
            date: 'août 2021',
            id: 'C',
            logo:
                'https://d3tha54df2p0si.cloudfront.net/eyJidWNrZXQiOiJzdHVkZW50czI2ZjQ4Njk2OGIwNjQ1MWU4Y2U2ZWIwNjBmMzcxMTRhMTQ3MjItZGV2Iiwia2V5IjoicHVibGljL2ZkMTU0MDJmLTc0MjgtNDhiYS04Y2I3LWI5YzdjYTc5YTgyMyIsImVkaXRzIjp7InNoYXJwZW4iOnRydWV9fQ==',
            name: 'Master (Bac +4) en Ingénierie Système',
            price: '8 798 €',
            start: 'Prochaine rentrée',
            time: '1 an et 6 mois, à plein temps.',
            title: 'Luiss Business School',
            year: 'Frais annuels'
        },
        {
            country: 'Arnhern, Pays-Bas',
            date: 'août 2021',
            id: 'D',
            logo:
                'https://d3tha54df2p0si.cloudfront.net/eyJidWNrZXQiOiJzdHVkZW50czI2ZjQ4Njk2OGIwNjQ1MWU4Y2U2ZWIwNjBmMzcxMTRhMTQ3MjItZGV2Iiwia2V5IjoicHVibGljL2ZkMTU0MDJmLTc0MjgtNDhiYS04Y2I3LWI5YzdjYTc5YTgyMyIsImVkaXRzIjp7InNoYXJwZW4iOnRydWV9fQ==',
            name: 'Master (Bac +4) en Ingénierie Système',
            price: '8 798 €',
            start: 'Prochaine rentrée',
            time: '1 an et 6 mois, à plein temps.',
            title: 'Glion Institute of Higher Education',
            year: 'Frais annuels'
        },
        {
            country: 'Arnhern, Pays-Bas',
            date: 'août 2021',
            id: 'E',
            logo:
                'https://d3tha54df2p0si.cloudfront.net/eyJidWNrZXQiOiJzdHVkZW50czI2ZjQ4Njk2OGIwNjQ1MWU4Y2U2ZWIwNjBmMzcxMTRhMTQ3MjItZGV2Iiwia2V5IjoicHVibGljL2ZkMTU0MDJmLTc0MjgtNDhiYS04Y2I3LWI5YzdjYTc5YTgyMyIsImVkaXRzIjp7InNoYXJwZW4iOnRydWV9fQ==',
            name: 'Master (Bac +4) en Ingénierie Système',
            price: '8 798 €',
            start: 'Prochaine rentrée',
            time: '1 an et 6 mois, à plein temps.',
            title: 'EM Normandie',
            year: 'Frais annuels'
        }
    ];

    const renderPrograms = () => {
        if (programsIsLoading && !programs) {
            return <div>loading...</div>;
        }

        if (!programsIsLoading && programs && programs.length === 0) {
            return <div>no result</div>;
        }

        if (programs && programs.length > 0) {
            return (
                <>
                    {programs.map((program) => (
                        <CardCarousel key={program?.id} program={program} />
                    ))}
                </>
            );
        }
    };

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="flex-col mt-4 space-y-4 md:mt-8 md:space-y-6">
                <div className="container flex-col">
                    <div className="flex justify-center md:ml-32 md:w-1/2">
                        <Chatbot name={t('profile:onboarding-chatbot-name')}>
                            <p className="mt-1">
                                {t('profile:onboarding-step-suggestions-chatbot-text-1')}
                            </p>
                        </Chatbot>
                    </div>
                </div>

                <div className="flex flex-no-wrap p-3 overflow-hidden overflow-x-scroll">
                    {renderPrograms()}
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
