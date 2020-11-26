/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

type Params = {
    callback: () => void;
    wrapperRef: React.MutableRefObject<null>;
};

const useOutsideAlerter = ({ callback, wrapperRef }: Params): void => {
    const current = wrapperRef.current as any;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (current && !current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef, callback]);
};

export default useOutsideAlerter;
