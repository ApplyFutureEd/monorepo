import Button from '@components/core/button/Button';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Hero: FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-8 font-sans bg-white overflow-hidden lg:py-16">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="relative lg:grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl lg:text-4xl xl:text-5xl">
                            {t('landing:hero-slogan')}
                        </h1>

                        <p className="mt-3 mx-auto max-w-md text-gray-500 text-lg sm:text-xl md:mt-5 md:max-w-3xl">
                            {t('landing:hero-paragraph')}
                        </p>
                        <div className="relative z-20 mt-5 sm:flex sm:items-center sm:justify-center sm:mt-8 lg:justify-start">
                            <div className="text-gray-500 text-base sm:text-lg md:text-xl">
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
                    <div className="relative -mx-4 mt-10 lg:mt-0">
                        <Image
                            alt={t('landing:hero-illustration-alt')}
                            className="relative mx-auto"
                            height="360"
                            src="/assets/images/landing/landing-hero.svg"
                            width="756"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
