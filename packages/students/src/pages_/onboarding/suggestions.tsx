/* eslint-disable sort-keys */
import {
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { createFilter, useLocalStorage, useQuery } from '@applyfuture/utils';
import CardCarousel from '@components/onboarding/card-carousel/CardCarousel';
import SkeletonCardCarousel from '@components/onboarding/card-carousel/SkeletonCardCarousel';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Mousewheel, Pagination]);

const OnboardingSuggestionsPage: FC = () => {
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

    const skeletons = Array.from({ length: 5 }, (_v, k) => k + 1);

    const renderPrograms = () => {
        if (programsIsLoading && !programs) {
            return skeletons.map((_skeleton, index) => (
                <SwiperSlide key={index}>
                    <SkeletonCardCarousel />
                </SwiperSlide>
            ));
        }

        if (!programsIsLoading && programs && programs.length === 0) {
            return <div>no result</div>;
        }

        if (programs && programs.length > 0) {
            return (
                <>
                    {programs.map((program) => (
                        <SwiperSlide key={program?.id}>
                            <CardCarousel program={program} />
                        </SwiperSlide>
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

                <Swiper
                    breakpoints={{
                        '0': {
                            slidesPerView: 1
                        },
                        '400': {
                            slidesPerView: 1.3
                        },
                        '520': {
                            slidesPerView: 1.6
                        },
                        '640': {
                            slidesPerView: 2
                        },
                        '760': {
                            slidesPerView: 2.3
                        },
                        '880': {
                            slidesPerView: 2.6
                        },
                        '1000': {
                            slidesPerView: 3
                        },
                        '1120': {
                            slidesPerView: 3.3
                        },
                        '1240': {
                            slidesPerView: 3.6
                        },
                        '1360': {
                            slidesPerView: 4
                        },
                        '1480': {
                            slidesPerView: 4.3
                        },
                        '1600': {
                            slidesPerView: 4.6
                        },
                        '1720': {
                            slidesPerView: 5
                        }
                    }}
                    direction="horizontal"
                    mousewheel={true}
                    pagination={true}
                    spaceBetween={0}>
                    {renderPrograms()}
                </Swiper>
            </div>
        </OnboardingLayout>
    );
};

export default OnboardingSuggestionsPage;
