import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Schools: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section id="schools" className="py-8 font-sans bg-white overflow-hidden lg:py-16">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="relative lg:grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                            {t('schools-headline')}
                        </h2>
                        <p className="mt-3 text-gray-500 text-lg leading-7">
                            {t('schools-paragraph-1')}
                        </p>
                        <p className="mt-3 text-gray-500 text-lg leading-7">
                            {t('schools-paragraph-2')}
                        </p>
                        <div className="flex justify-center mt-6">
                            <a href="#contact">
                                <Button type="button" variant="primary">
                                    {t('schools-cta')}
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="relative -mx-4 mt-10 lg:mt-0">
                        <svg
                            className="left-1/2 absolute transform -translate-x-1/2 translate-y-16 lg:hidden"
                            width="784"
                            height="404"
                            fill="none"
                            viewBox="0 0 784 404">
                            <defs>
                                <pattern
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="784"
                                height="404"
                                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                            />
                        </svg>
                        <img
                            className="relative mx-auto"
                            src="/assets/images/landing/landing-schools.svg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schools;
