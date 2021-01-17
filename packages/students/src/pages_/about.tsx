import LandingLayout from '@applyfuture/students/components/layouts/landing-layout/LandingLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const AboutPage: FC = () => {
    const { t } = useTranslation();

    return (
        <LandingLayout
            description={t('landing:about-meta-description')}
            title={t('landing:about-page-title')}>
            <div className="bg-white overflow-hidden">
                <div className="max-w-7xl relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="left-3/4 absolute bottom-0 top-0 hidden w-screen lg:block"></div>
                    <div className="max-w-prose relative z-30 mx-auto text-base lg:max-w-none">
                        <h1 className="mb-8 mt-2 text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl sm:leading-10">
                            {t('landing:footer-about-us')}
                        </h1>
                    </div>
                    <div className="relative z-30 lg:grid lg:gap-8 lg:grid-cols-2">
                        <div className="relative mb-8 lg:col-start-2 lg:row-start-1 lg:mb-0">
                            <svg
                                className="absolute right-0 top-0 hidden -mr-20 -mt-20 lg:block"
                                fill="none"
                                height="384"
                                viewBox="0 0 404 384"
                                width="404">
                                <defs>
                                    <pattern
                                        height="20"
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        patternUnits="userSpaceOnUse"
                                        width="20"
                                        x="0"
                                        y="0">
                                        <rect
                                            className="text-gray-200"
                                            fill="currentColor"
                                            height="4"
                                            width="4"
                                            x="0"
                                            y="0"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                    height="384"
                                    width="404"
                                />
                            </svg>
                            <div className="max-w-prose relative mx-auto text-base lg:mt-32 lg:max-w-none">
                                <figure>
                                    <div className="pb-7/12 relative lg:pb-0">
                                        <img
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover object-center lg:static lg:h-auto"
                                            src="/assets/images/landing/about.svg"
                                        />
                                        <p className="mb-5 text-center text-gray-500 text-lg italic leading-7">
                                            Per aspera ad astra
                                        </p>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div className="prose max-w-prose mx-auto text-justify text-base lg:max-w-none">
                                <p className="mb-5 text-gray-500 text-lg leading-7">
                                    {t('landing:about')}
                                </p>
                                <blockquote>
                                    <p className="mb-5 text-gray-700 text-lg leading-7">
                                        {t('landing:about-testimony-1')}
                                    </p>
                                    <p className="mb-5 text-gray-700 text-lg leading-7">
                                        {t('landing:about-testimony-2')}
                                    </p>
                                    <p className="mb-5 text-gray-700 text-lg leading-7">
                                        {t('landing:about-testimony-3')}
                                    </p>
                                    <p className="mb-5 text-gray-700 text-lg leading-7">
                                        {t('landing:about-testimony-4')}
                                    </p>
                                </blockquote>
                                <div className="flex justify-end">
                                    <span>{t('landing:about-testimony-author')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
};

export default AboutPage;
