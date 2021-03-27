export const durationUnits = [
    {
        label: 'day',
        value: 'DAY'
    },
    {
        label: 'month',
        value: 'MONTH'
    },
    {
        label: 'year',
        value: 'YEAR'
    },
    {
        label: 'week',
        value: 'WEEK'
    }
];

export const getDurationUnitLabel = (value: string | undefined): string =>
    durationUnits.find((durationUnit) => durationUnit.value === value)?.label || '';
