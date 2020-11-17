/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

/**
 * disable console.warn() until next-i18next is updated for Next.js 10
 * @see https://github.com/isaachinman/next-i18next/issues/869
 */
jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());

process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        domains: [],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        loader: 'default',
        path: '/_next/image'
    }
};
