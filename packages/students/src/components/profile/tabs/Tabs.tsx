import { Completion, useWindowSize } from '@applyfuture/utils';
import { faCheckCircle, faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    completion: Completion;
};

const Tabs: FC<Props> = (props) => {
    const { completion } = props;
    const { pathname } = useRouter();
    const { t } = useTranslation();
    const [profileNavWidth, setProfileNavWidth] = useState<number | undefined>(undefined);
    const [profileNavContainerWidth, setProfileNavContainerWidth] = useState<number | undefined>(
        undefined
    );
    const { width } = useWindowSize();
    const [displayArrows, setDisplayArrow] = useState(false);
    const [displayedTabIndex, setDisplayedTabIndex] = useState(0);

    const baseClasses =
        'flex items-center px-1 py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 whitespace-nowrap text-sm font-medium leading-5 border-b-2 hover:border-gray-300 focus:border-gray-300 border-transparent focus:outline-none cursor-pointer space-x-2';
    const isSelectedClasses =
        'px-1 py-4 text-indigo-600 focus:text-indigo-800 whitespace-nowrap text-sm font-medium leading-5 border-b-2 border-indigo-500 focus:border-indigo-700 focus:outline-none';

    useEffect(() => {
        const currentProfileNavWidth = document
            .getElementById('profile-nav')
            ?.getBoundingClientRect().width;

        setProfileNavWidth(currentProfileNavWidth);
    }, []);

    useEffect(() => {
        const newProfileNavContainerWidth = document
            .getElementById('profile-nav-container')
            ?.getBoundingClientRect().width;
        setProfileNavContainerWidth(newProfileNavContainerWidth);
    }, [width]);

    useEffect(() => {
        if (width && profileNavWidth && width - profileNavWidth < 90) {
            setDisplayArrow(true);
        } else {
            setDisplayArrow(false);
        }
    }, [width, profileNavWidth]);

    const scrollLeft = () => {
        if (displayedTabIndex === 0) {
            return;
        }

        const prevDisplayedTabWidth = document
            .getElementById(`profile-nav-tab-${displayedTabIndex}`)
            ?.getBoundingClientRect().width;

        const profileNav = document.getElementById('profile-nav');
        if (profileNav && prevDisplayedTabWidth) {
            profileNav.scrollLeft =
                displayedTabIndex - 1 === 0
                    ? 0
                    : profileNav.scrollLeft - prevDisplayedTabWidth - 32;
            setDisplayedTabIndex((prev) => prev - 1);
        }
    };

    const scrollRight = () => {
        if (displayedTabIndex === 4) {
            return;
        }
        const nextDisplayedTabWidth = document
            .getElementById(`profile-nav-tab-${displayedTabIndex}`)
            ?.getBoundingClientRect().width;

        const profileNav = document.getElementById('profile-nav');
        if (profileNav && nextDisplayedTabWidth && profileNavContainerWidth) {
            profileNav.scrollLeft =
                displayedTabIndex - 1 === 4
                    ? profileNav.scrollLeft + profileNavContainerWidth
                    : profileNav.scrollLeft + nextDisplayedTabWidth + 32;
            setDisplayedTabIndex((prev) => prev + 1);
        }
    };

    const routes = [
        {
            completion: completion.generalInformation,
            href: '/profile/general-information',
            label: 'profile:general-information-page-title'
        },
        {
            completion: completion.educationHistory,
            href: '/profile/education-history',
            label: 'profile:education-history-page-title'
        },
        {
            completion: completion.testScores,
            href: '/profile/test-scores',
            label: 'profile:test-scores-page-title'
        },
        {
            completion: completion.backgroundInformation,
            href: '/profile/background-information',
            label: 'profile:background-information-page-title'
        },
        {
            completion: completion.uploadDocuments,
            href: '/profile/upload-documents',
            label: 'profile:upload-documents-page-title'
        }
    ];

    return (
        <div className="relative flex -mb-px">
            {displayArrows && (
                <div className="absolute flex items-center h-full cursor-pointer">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={scrollLeft} />
                </div>
            )}
            <nav
                className={`flex space-x-8 ${
                    displayArrows ? 'mx-8' : 'mx-0'
                } overflow-scroll scrollbar-hidden`}
                id="profile-nav"
                style={{
                    maxWidth:
                        displayArrows && profileNavContainerWidth
                            ? `${profileNavContainerWidth - 100}px`
                            : 'none'
                }}>
                {routes.map((route, index) => (
                    <span key={index} id={`profile-nav-tab-${index}`}>
                        <Link href={route.href}>
                            <span
                                className={`${baseClasses} ${
                                    pathname === route.href && isSelectedClasses
                                }`}>
                                <FontAwesomeIcon
                                    className={
                                        route.completion ? 'text-green-400' : 'text-gray-500'
                                    }
                                    icon={faCheckCircle}
                                />
                                <div>{t(route.label)}</div>
                            </span>
                        </Link>
                    </span>
                ))}
            </nav>
            {displayArrows && (
                <div
                    className="absolute right-0 flex items-center h-full cursor-pointer"
                    style={{ transform: 'translateX(-50%)' }}>
                    <FontAwesomeIcon icon={faChevronRight} onClick={scrollRight} />
                </div>
            )}
        </div>
    );
};

export default Tabs;
