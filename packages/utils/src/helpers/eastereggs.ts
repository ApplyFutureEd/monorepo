import { v4 as uuidv4 } from 'uuid';

import { useHotKey } from '../hooks/useHotKey';

type Egg = {
    name: string;
    sequence: Array<string>;
    function: () => void;
    useEgg: () => void;
};

export const eggs: Array<Egg> = [
    {
        function: (): void => {
            const styles = {
                content:
                    'color:#6b7280; font-size:1rem; Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
                title:
                    'color:#5850ec; font-size: 1.875rem; font-weight: bold; -webkit-text-stroke: 1px black; font-family:Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
            };

            console.log('%c Congrats 👏', styles.title);
            console.log('%c You know some internet tricks', styles.content);
            console.log(
                `%c students-applyfuture.vercel.app/careers?egg=${uuidv4()
                    .slice(0, 4)
                    .toUpperCase()}`,
                styles.content
            );
        },
        name: 'Internet Tricks',
        sequence: ['F12'],
        useEgg: (): void => useHotKey(eggs[0].sequence, eggs[0].function)
    }
];
