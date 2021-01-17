import LandingLayout from '@applyfuture/students/components/layouts/landing-layout/LandingLayout';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('LandingLayout', () => {
    it('can render without crashing', () => {
        render(
            <LandingLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </LandingLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
