import Button from '@components/core/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <div className="font-sans relative bg-white overflow-hidden">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-4xl xl:text-5xl">
                            {t('hero-slogan')}
                        </h1>

                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            {t('hero-paragraph')}
                        </p>
                        <div className="relative z-20 mt-5 sm:mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start">
                            <div className="text-base text-gray-500 sm:text-lg md:text-xl">
                                {t('hero-cta-iama')}
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#students">
                                    <Button type="button" variant="primary">
                                        {t('hero-cta-student')}
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#schools">
                                    <Button type="button" variant="secondary">
                                        {t('hero-cta-school')}
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#recruiters">
                                    <Button type="button" variant="secondary">
                                        {t('hero-cta-recruiter')}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-contain lg:w-auto"
                        src="/static/images/landing/landing-hero.svg"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </main>
        </div>
    );
};

export default Hero;
