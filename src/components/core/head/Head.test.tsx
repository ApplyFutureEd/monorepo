import Head from '@components/core/head/Head';
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('@utils/isBrowser', () => ({
    isBrowser: jest.fn().mockImplementation(() => true)
}));

jest.mock('webfontloader', () => ({
    load: jest.fn().mockImplementation(() => true)
}));

describe('Header', () => {
    it('can load font on browser environment', () => {
        const WebFontLoader = require('webfontloader');

        render(<Head />);

        expect(WebFontLoader.load).toHaveBeenCalled();
    });
});
