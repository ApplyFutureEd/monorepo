import CardCarousel from '@components/onboarding/card-carousel/CardCarousel';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import React, { FC } from 'react';

const Onboarding: FC = () => {
    const programs = [
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

    return (
        <OnboardingLayout title="Onboarding">
            <div className="flex-col mt-4 space-y-4 md:mt-8 md:space-y-6">
                <div className="container flex-col">
                    <div className="flex justify-center md:ml-32 md:w-1/2">
                        <Chatbot name="Charly">
                            <p className="mt-1">
                                Et voilà un échantillon de programmes qui pourrait vous intéressez,
                                bien entendu il y a plus de filtres disponible si vous possédez un
                                compte.
                            </p>
                        </Chatbot>
                    </div>
                </div>

                <div className="flex flex-no-wrap p-3 overflow-hidden overflow-x-scroll">
                    {programs.map((program) => (
                        <CardCarousel
                            key={program.id}
                            country={program.country}
                            date={program.date}
                            id={program.id}
                            logo={program.logo}
                            name={program.name}
                            price={program.price}
                            start={program.start}
                            time={program.time}
                            title={program.title}
                            year={program.year}
                        />
                    ))}
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
