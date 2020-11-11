import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Students: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section id="students" className="py-8 font-sans bg-white overflow-hidden lg:py-16">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <svg
                    className="right-full absolute hidden transform translate-x-1/2 translate-y-12 lg:block"
                    width="404"
                    height="784"
                    fill="none"
                    viewBox="0 0 404 784">
                    <defs>
                        <pattern
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                                className="text-gray-100"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="404"
                        height="784"
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                </svg>

                <div className="relative">
                    <div className="lg:grid lg:gap-8 lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                                {t('students-headline')}
                            </h2>
                            <p className="mt-3 text-gray-500 text-lg leading-7">
                                {t('students-paragraph')}
                            </p>
                            <p className="mt-3 text-gray-500 text-lg leading-7">
                                {t('students-explanations')}
                            </p>
                            <div className="flex justify-center mt-6">
                                <Button variant="primary">{t('students-cta')}</Button>
                            </div>
                        </div>

                        <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <svg
                                className="left-1/2 absolute transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width="784"
                                height="404"
                                fill="none"
                                viewBox="0 0 784 404">
                                <defs>
                                    <pattern
                                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                                            className="text-gray-100"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="784"
                                    height="404"
                                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                                />
                            </svg>
                            <img
                                className="relative mx-auto"
                                width="590"
                                src="/assets/images/landing/landing-students.svg"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Students;
