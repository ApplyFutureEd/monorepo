import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Schools: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section className="py-8 font-sans bg-white overflow-hidden lg:py-16" id="schools">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="relative lg:grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                            {t('landing:schools-headline')}
                        </h2>
                        <p className="mt-3 text-gray-500 text-lg leading-7">
                            {t('landing:schools-paragraph-1')}
                        </p>
                        <p className="mt-3 text-gray-500 text-lg leading-7">
                            {t('landing:schools-paragraph-2')}
                        </p>
                        <div className="flex justify-center mt-6">
                            <a href="#contact">
                                <Button type="button" variant="primary">
                                    {t('landing:schools-cta')}
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="relative -mx-4 mt-10 lg:mt-0">
                        <svg
                            className="left-1/2 absolute transform -translate-x-1/2 translate-y-16 lg:hidden"
                            fill="none"
                            height="404"
                            viewBox="0 0 784 404"
                            width="784">
                            <defs>
                                <pattern
                                    height="20"
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                                height="404"
                                width="784"
                            />
                        </svg>
                        <img
                            alt=""
                            className="relative mx-auto"
                            loading="lazy"
                            src="/assets/images/landing/landing-schools.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schools;
