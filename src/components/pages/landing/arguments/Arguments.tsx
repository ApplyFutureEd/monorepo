import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faEye, faHandHoldingUsd } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Arguments: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section className="py-8 font-sans bg-white overflow-hidden lg:py-16">
            <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="relative lg:grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                            {t('why-headline')}
                        </h2>

                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                            <FontAwesomeIcon
                                                icon={faHandHoldingUsd}
                                                size="lg"
                                                fixedWidth
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-gray-900 text-lg font-medium leading-6">
                                            <li>{t('why-argument-1')}</li>
                                        </h3>
                                        <p className="mt-2 text-gray-500 text-base leading-6">
                                            {t('why-argument-description-1')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                            <FontAwesomeIcon icon={faBuffer} size="lg" fixedWidth />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-gray-900 text-lg font-medium leading-6">
                                            <li>{t('why-argument-2')}</li>
                                        </h3>
                                        <p className="mt-2 text-gray-500 text-base leading-6">
                                            {t('why-argument-description-2')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                            <FontAwesomeIcon icon={faEye} size="lg" fixedWidth />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-gray-900 text-lg font-medium leading-6">
                                            <li>{t('why-argument-3')}</li>
                                        </h3>
                                        <p className="mt-2 text-gray-500 text-base leading-6">
                                            {t('why-argument-description-3')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
                            src="/assets/images/landing/landing-arguments.svg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arguments;
