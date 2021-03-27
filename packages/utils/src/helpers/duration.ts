type DurationOptions = {
    unit: 'DAY' | 'MONTH' | 'YEAR' | 'WEEK';
    value: number | undefined;
};

export const convertUnitToSeconds = (options: DurationOptions): number => {
    const { unit, value } = options;

    if (!value) {
        return 0;
    }

    const durations = {
        DAY: value * 86400,
        MONTH: value * 2.628e6,
        WEEK: value * 604800,
        YEAR: value * 3.154e7
    };

    return durations[unit];
};

export const convertSecondsToUnit = (options: DurationOptions): number => {
    const { unit, value } = options;

    if (!value) {
        return 0;
    }

    const durations = {
        DAY: value / 86400,
        MONTH: value / 2.628e6,
        WEEK: value / 604800,
        YEAR: value / 3.154e7
    };

    return durations[unit];
};
