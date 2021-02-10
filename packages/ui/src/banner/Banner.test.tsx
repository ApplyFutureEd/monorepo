import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from '../button/Button';
import { Banner } from './Banner';

describe('Banner', () => {
    it('can render without crashing', () => {
        render(<Banner content="Lorem ipsum" />);

        const banner = screen.getByText('Lorem ipsum');

        expect(banner).toBeInTheDocument();
    });

    it('can render with a CTA', () => {
        render(<Banner content="Lorem ipsum" cta={<Button>Click me</Button>} />);

        const banner = screen.getByText('Lorem ipsum');

        expect(banner).toBeInTheDocument();
    });
});
