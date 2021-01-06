import { useEffect, useState } from 'react';

export const usePageBottom = (): boolean | (() => void) => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const offset = 100;
        const handleScroll = () => {
            const isBottom =
                Math.round(window.innerHeight + document.documentElement.scrollTop) >
                Math.round(document.documentElement.offsetHeight - offset);
            setBottom(isBottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return bottom;
};
