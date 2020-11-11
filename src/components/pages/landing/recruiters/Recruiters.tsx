import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Recruiters: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section className="py-8 font-sans bg-white overflow-hidden lg:py-16" id="recruiters">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <svg
                    className="right-full absolute hidden transform translate-x-1/2 translate-y-12 lg:block"
                    fill="none"
                    height="784"
                    viewBox="0 0 404 784"
                    width="404">
                    <defs>
                        <pattern
                            height="20"
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                        height="784"
                        width="404"
                    />
                </svg>

                <div className="relative">
                    <div className="lg:grid lg:gap-8 lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                                {t('recruiters-headline')}
                            </h2>
                            <p className="mt-3 text-gray-500 text-lg leading-7">
                                {t('recruiters-paragraph')}
                            </p>
                            <div className="flex justify-center mt-6">
                                <Button variant="primary">{t('recruiters-cta')}</Button>
                            </div>
                        </div>

                        <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <svg
                                className="left-1/2 absolute transform -translate-x-1/2 translate-y-16 lg:hidden"
                                fill="none"
                                height="404"
                                viewBox="0 0 784 404"
                                width="784">
                                <defs>
                                    <pattern
                                        height="20"
                                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                                    height="404"
                                    width="784"
                                />
                            </svg>
                            <img
                                alt=""
                                className="relative mx-auto"
                                loading="lazy"
                                src="/assets/images/landing/landing-recruiters.svg"
                                width="490"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruiters;
