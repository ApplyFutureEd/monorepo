import '@testing-library/jest-dom/extend-expect';

process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        domains: ['res.cloudinary.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        loader: 'default',
        path: '/_next/image'
    }
};
