import { useEffect, useMemo } from 'react';

const createKeyChecker = (hotkeys: Array<string> | ConcatArray<never>) => {
    let index = 0;
    const TAIL = hotkeys.length - 1;

    return (key: any) => {
        if (key !== hotkeys[index]) {
            index = 0;
            return false;
        }

        if (index === TAIL) {
            index = 0;
            return true;
        }

        index++;
        return false;
    };
};

export const useHotKey = (
    hotKeys: Array<string> | ConcatArray<never>,
    onMatch: () => void
): void => {
    const keyCrawler = useMemo(
        () => createKeyChecker([].concat(hotKeys as ConcatArray<never>)),
        [hotKeys]
    );

    const listen = ({ key }: any) => {
        if (keyCrawler(key)) {
            onMatch();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', listen);
        return () => window.removeEventListener('keydown', listen);
    });
};
