import {
    faAddressCard,
    faLongArrowAltRight,
    faPaperPlane,
    faSearch
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const ApplicationJourneySteps: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="hidden lg:block">
            <ul className="flex flex-col mb-4 space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <li className="">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-md">
                                <FontAwesomeIcon icon={faAddressCard} size="1x" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-normal text-gray-900 font-medium leading-6">
                                {t('programs:application-steps-1')}
                            </h3>
                        </div>
                    </div>
                </li>
                <div className="flex items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
                </div>
                <li className="">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-md">
                                <FontAwesomeIcon icon={faSearch} size="1x" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-normal text-gray-900 font-medium leading-6">
                                {t('programs:application-steps-2')}
                            </h3>
                        </div>
                    </div>
                </li>
                <div className="flex items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
                </div>
                <li className="">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-md">
                                <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-normal text-gray-900 font-medium leading-6">
                                {t('programs:application-steps-3')}
                            </h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ApplicationJourneySteps;
