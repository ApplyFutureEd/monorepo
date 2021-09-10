export const isObjectValuesEmpty = (object: Record<string, string>): boolean => {
    return Object.entries(object).some(([_k, value]) => value === '');
};
