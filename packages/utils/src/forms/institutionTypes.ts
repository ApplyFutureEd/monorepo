export const institutionTypes = [
    {
        label: 'private',
        value: 'PRIVATE'
    },
    {
        label: 'public',
        value: 'PUBLIC'
    }
];

export const getInstitutionType = (value: string): string =>
    institutionTypes.find((institutionType) => institutionType.value === value)?.label || '';
