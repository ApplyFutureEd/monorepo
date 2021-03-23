export const schedules = [
    {
        label: 'full-time',
        value: 'FULL_TIME'
    },
    {
        label: 'part-time',
        value: 'PART_TIME'
    }
];

export const getScheduleLabel = (value: string): string =>
    schedules.find((schedule) => schedule.value === value)?.label || '';
