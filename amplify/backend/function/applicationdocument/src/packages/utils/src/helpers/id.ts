export const toShortId = (id: string | undefined): string | undefined =>
    id?.slice(0, 6).toUpperCase();
