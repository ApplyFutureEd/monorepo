import { useEffect, useState } from 'react';

type State = {
    width: number | undefined;
    height: number | undefined;
};

export const useWindowSize = (): State => {
    const [windowSize, setWindowSize] = useState<State>({
        height: undefined,
        width: undefined
    });

    useEffect(() => {
        if (!window) {
            return;
        }

        const handleResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
