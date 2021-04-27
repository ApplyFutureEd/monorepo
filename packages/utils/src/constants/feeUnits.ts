export const feeUnits = [
    {
        label: 'annual-fee',
        value: 'ANNUAL-FEE'
    },
    {
        label: 'total-fee',
        value: 'TOTAL_FEE'
    }
];

export const getFeeUnitLabel = (value: string | undefined): string =>
    feeUnits.find((feeUnit) => feeUnit.value === value)?.label || '';
