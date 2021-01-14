import { DurationUnit } from '@models';

type DurationOptions = {
    /**
     * Unit in which the provided value should be converted.
     */
    unit: DurationUnit | 'DAY' | 'MONTH' | 'YEAR' | 'WEEK';
    /**
     * Value in seconds to be converted in the provided unit.
     */
    value: number;
};

export const convertDuration = (options: DurationOptions): number => {
    const { unit, value } = options;

    const durations = {
        DAY: value / 86400,
        MONTH: value / 2.628e6,
        WEEK: value / 604800,
        YEAR: value / 3.154e7
    };

    return durations[unit];
};
