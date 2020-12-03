export type DurationUnit = 'day' | 'month' | 'week' | 'year';

type DurationOptions = {
    /**
     * Unit in which the provided value should be converted.
     */
    unit: DurationUnit;
    /**
     * Value in seconds to be converted in the provided unit.
     */
    value: number;
};

export const convertDuration = (options: DurationOptions): number => {
    const { unit, value } = options;

    const durations = {
        day: value / 86400,
        month: value / 2.628e6,
        week: value / 604800,
        year: value / 3.154e7
    };

    return durations[unit];
};
