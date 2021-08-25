import { useWindowSize } from '@applyfuture/utils';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';

const Tabs: FC = () => {
    const [navWidth, setNavwidth] = useState<number | undefined>(undefined);
    const [navContainerWidth, setNavContainerWidth] = useState<number | undefined>(undefined);
    const { width } = useWindowSize();
    const [displayArrows, setDisplayArrow] = useState(false);
    const [displayedTabIndex, setDisplayedTabIndex] = useState(0);

    const [selected, setSelected] = useState('All');

    const baseClasses =
        'flex items-center px-1 py-4 text-gray-500 hover:text-indigo-700 focus:text-indigo-700 whitespace-no-wrap text-base font-medium leading-5 border-b-2 hover:border-indigo-300 focus:border-indigo-300 border-transparent focus:outline-none cursor-pointer space-x-2';

    const namespaces = [
        'All',
        'Account',
        'Application',
        'Auth',
        'Common',
        'Help',
        'Landing',
        'Navigation',
        'Profile',
        'Programs',
        'Recruiters',
        'Schools'
    ];

    useEffect(() => {
        const currentNavWidth = document.getElementById('nav')?.getBoundingClientRect().width;
        setNavwidth(currentNavWidth);
    }, []);

    useEffect(() => {
        const newNavContainerWidth = document
            .getElementById('nav-container')
            ?.getBoundingClientRect().width;
        setNavContainerWidth(newNavContainerWidth);
    }, [width]);

    useEffect(() => {
        if (width && navWidth && width - navWidth < 90) {
            setDisplayArrow(true);
        } else {
            setDisplayArrow(false);
        }
    }, [width, navWidth]);

    const scrollLeft = () => {
        if (displayedTabIndex === 0) {
            return;
        }

        const prevDisplayedTabWidth = document
            .getElementById(`nav-tab-${displayedTabIndex}`)
            ?.getBoundingClientRect().width;

        const nav = document.getElementById('nav');
        if (nav && prevDisplayedTabWidth) {
            nav.scrollLeft =
                displayedTabIndex - 1 === 0 ? 0 : nav.scrollLeft - prevDisplayedTabWidth - 32;
            setDisplayedTabIndex((prev) => prev - 1);
        }
    };

    const scrollRight = () => {
        if (displayedTabIndex === 4) {
            return;
        }
        const nextDisplayedTabWidth = document
            .getElementById(`nav-tab-${displayedTabIndex}`)
            ?.getBoundingClientRect().width;

        const nav = document.getElementById('nav');
        if (nav && nextDisplayedTabWidth && navContainerWidth) {
            nav.scrollLeft =
                displayedTabIndex - 1 === 4
                    ? nav.scrollLeft + navContainerWidth
                    : nav.scrollLeft + nextDisplayedTabWidth + 32;
            setDisplayedTabIndex((prev) => prev + 1);
        }
    };

    return (
        <div className="relative -mb-px bg-white">
            <div
                className="relative flex items-center mx-auto border-b border-gray-200"
                id="nav-container">
                {displayArrows && (
                    <div className="absolute flex items-center h-full cursor-pointer">
                        <FontAwesomeIcon icon={faChevronLeft} onClick={scrollLeft} />
                    </div>
                )}
                <nav
                    className={`flex space-x-8 ${
                        displayArrows ? 'mx-8' : 'mx-0'
                    } overflow-scroll scrollbar-hidden`}
                    id="nav"
                    style={{
                        maxWidth:
                            displayArrows && navContainerWidth
                                ? `${navContainerWidth - 100}px`
                                : 'none'
                    }}>
                    <div className="px-4 py-2 sm:px-6">
                        <div className="sm:flex-no-wrap flex flex-wrap items-center justify-between">
                            <div className="flex -mb-px space-x-4">
                                {namespaces.map((tab, i) => (
                                    <span key={i} id={`nav-tab-${i}`}>
                                        <button
                                            key={i}
                                            className={baseClasses}
                                            onClick={() => setSelected(tab)}>
                                            {tab}
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
                {displayArrows && (
                    <div
                        className="absolute right-0 flex items-center h-full cursor-pointer"
                        style={{ transform: 'translateX(-50%)' }}>
                        <FontAwesomeIcon icon={faChevronRight} onClick={scrollRight} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
