export const cambridgeFirstResults = [
    { label: '-', value: -1 },
    { label: 'A', value: 6 },
    { label: 'B', value: 5 },
    { label: 'C', value: 4 },
    { label: 'D', value: 3 },
    { label: 'E', value: 2 },
    { label: 'U', value: 1 }
];

export const getCambridgeFirstLabel = (value: number): string =>
    cambridgeFirstResults.find((result) => result.value === value)?.label || '';
