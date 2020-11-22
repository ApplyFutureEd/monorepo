import Button from '@components/core/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Hero: FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative font-sans bg-white overflow-hidden">
            <div className="lg:relative">
                <div className="mx-auto pb-20 pt-16 w-full max-w-7xl text-center lg:py-16 lg:text-left">
                    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
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
                                <Link href="#students">
                                    <Button variant="primary">
                                        {t('landing:hero-cta-student')}
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <Link href="#schools">
                                    <Button variant="secondary">
                                        {t('landing:hero-cta-school')}
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <Link href="#recruiters">
                                    <Button variant="secondary">
                                        {t('landing:hero-cta-recruiter')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <Image
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain lg:w-auto"
                        layout="fill"
                        src="/assets/images/landing/landing-hero.svg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
