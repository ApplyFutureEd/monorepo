import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <div className="bg-white font-sans overflow-hidden relative">
            <div className="lg:relative">
                <div className="mx-auto max-w-7xl pb-20 pt-16 text-center w-full lg:py-16 lg:text-left">
                    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                        <h1 className="text-3xl font-extrabold tracking-tight leading-10 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-4xl xl:text-5xl">
                            {t('landing:hero-slogan')}
                        </h1>

                        <p className="text-lg mt-3 mx-auto max-w-md text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            {t('landing:hero-paragraph')}
                        </p>
                        <div className="mt-5 relative z-20 sm:items-center sm:flex sm:justify-center sm:mt-8 lg:justify-start">
                            <div className="text-base text-gray-500 sm:text-lg md:text-xl">
                                {t('landing:hero-cta-iama')}
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <a href="#students">
                                    <Button variant="primary">
                                        {t('landing:hero-cta-student')}
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <a href="#schools">
                                    <Button variant="secondary">
                                        {t('landing:hero-cta-school')}
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <a href="#recruiters">
                                    <Button variant="secondary">
                                        {t('landing:hero-cta-recruiter')}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-64 relative w-full sm:h-72 md:h-96 lg:h-full lg:inset-y-0 lg:right-0 lg:absolute lg:w-1/2">
                    <img
                        className="h-full inset-0 object-contain absolute w-full lg:w-auto"
                        src="/assets/images/landing/landing-hero.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
