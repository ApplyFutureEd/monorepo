/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
export const isBrowser = (): boolean => typeof window !== 'undefined';
