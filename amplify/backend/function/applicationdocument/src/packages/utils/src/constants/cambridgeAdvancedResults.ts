export const cambridgeAdvancedResults = [
    { label: 'A', value: 3 },
    { label: 'B', value: 2 },
    { label: 'C', value: 1 }
];

export const getCambridgeAdvancedLabel = (value: number | undefined): string =>
    cambridgeAdvancedResults.find((result) => result.value === value)?.label || '';
