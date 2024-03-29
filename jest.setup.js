/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

console.warn = jest.fn();
console.log = jest.fn();

jest.mock('next/image', () => {
    return {
        __esModule: true,
        default: () => {
            return <div role="presentation" />;
        }
    };
});

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
