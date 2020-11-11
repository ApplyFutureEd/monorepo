import {
    faAddressCard,
    faEnvelopeOpenText,
    faPaperPlane,
    faPlaneDeparture,
    faSearch
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Process: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section className="py-8 font-sans bg-white overflow-hidden lg:py-16">
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
                                className="text-gray-200"
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
                                {t('how-headline')}
                            </h2>

                            <ul className="mt-10">
                                <li>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                                <FontAwesomeIcon
                                                    icon={faSearch}
                                                    size="lg"
                                                    fixedWidth
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-gray-900 text-lg font-medium leading-6">
                                                {t('how-argument-1')}
                                            </h3>
                                            <p className="mt-2 text-gray-500 text-base leading-6">
                                                {t('how-argument-description-1')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                                <FontAwesomeIcon
                                                    icon={faPaperPlane}
                                                    size="lg"
                                                    fixedWidth
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-gray-900 text-lg font-medium leading-6">
                                                {t('how-argument-2')}
                                            </h3>
                                            <p className="mt-2 text-gray-500 text-base leading-6">
                                                {t('how-argument-description-2')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                                <FontAwesomeIcon
                                                    icon={faEnvelopeOpenText}
                                                    size="lg"
                                                    fixedWidth
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-gray-900 text-lg font-medium leading-6">
                                                {t('how-argument-3')}
                                            </h3>
                                            <p className="mt-2 text-gray-500 text-base leading-6">
                                                {t('how-argument-description-3')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                                <FontAwesomeIcon
                                                    icon={faAddressCard}
                                                    size="lg"
                                                    fixedWidth
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-gray-900 text-lg font-medium leading-6">
                                                {t('how-argument-4')}
                                            </h3>
                                            <p className="mt-2 text-gray-500 text-base leading-6">
                                                {t('how-argument-description-4')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                                                <FontAwesomeIcon
                                                    icon={faPlaneDeparture}
                                                    size="lg"
                                                    fixedWidth
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-gray-900 text-lg font-medium leading-6">
                                                {t('how-argument-5')}
                                            </h3>
                                            <p className="mt-2 text-gray-500 text-base leading-6">
                                                {t('how-argument-description-5')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
                                            className="text-gray-200"
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
                                width="540"
                                src="/assets/images/landing/landing-process.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
