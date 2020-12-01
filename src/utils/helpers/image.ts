export const getUrl = (storageKey: string): string => {
    const baseUrl = 'https://d3tha54df2p0si.cloudfront.net';
    const imageRequest = JSON.stringify({
        bucket: 'students26f486968b06451e8ce6eb060f37114a14722-dev',
        edits: {
            sharpen: true
        },
        key: `public/${storageKey}`
    });
    return `${baseUrl}/${btoa(imageRequest)}`;
};
