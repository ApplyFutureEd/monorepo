export const educationLevels = [
    { label: 'grade-12', value: 1 },
    { label: 'undergraduate-year-1', value: 2 },
    { label: 'undergraduate-year-2', value: 3 },
    { label: 'undergraduate-year-3', value: 4 },
    { label: 'undergraduate-year-4', value: 5 },
    { label: 'graduate-year-1', value: 6 },
    { label: 'graduate-year-2', value: 7 },
    { label: 'doctoral-degree', value: 8 }
];

export const getEducationLabel = (value: number | undefined): string =>
    educationLevels.find((educationLevel) => educationLevel.value === value)?.label || '';
