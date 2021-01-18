import { render } from '@testing-library/react';
import React from 'react';

import { Head } from './Head';

jest.mock('@applyfuture/utils', () => ({
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
